import { spawn } from 'node:child_process'
import { constants } from 'node:fs'
import { access, mkdir, readFile, writeFile } from 'node:fs/promises'
import { basename, dirname, resolve } from 'node:path'
import process from 'node:process'
import { consola } from 'consola'
import yaml from 'js-yaml'
import { marked } from 'marked'

type AuditCategory
  = | 'match'
    | 'content_drift'
    | 'metadata_drift'
    | 'missing_local'
    | 'missing_live'
    | 'redirect_or_legacy'
    | 'manual_review'

interface CliOptions {
  baseUrl: string
  sitemapUrl: string
  maxPages?: number
  jsonOut: string
  compareUrl?: string
}

interface FrontmatterResult {
  body: string
  data: Record<string, any>
}

interface LocalRouteSource {
  route: string
  sourcePath: string
  title: string
  description: string
  canonical: string
  h1: string
  markdown: string
  links: string[]
  generatedHtmlPath?: string
}

interface MetadataSnapshot {
  title: string
  description: string
  canonical: string
  h1: string
}

interface LinkDrift {
  missing: string[]
  overlapRatio: number
}

interface ContentMetrics {
  uniqueWordRecall: number
  sentenceCoverage: number
  trigramJaccard: number
}

interface AuditResult {
  route: string
  category: AuditCategory
  sourcePath?: string
  finalUrl?: string
  notes: string[]
  metadata: {
    live: MetadataSnapshot
    local: MetadataSnapshot
    diffs: string[]
  }
  metrics?: ContentMetrics
  linkDrift?: LinkDrift
}

interface FetchResult {
  finalUrl: string
  html: string
  redirects: Array<{ status: number, from: string, to: string }>
  status: number
}

interface HtmlSnapshot extends MetadataSnapshot {
  fullHtml: string
  contentHtml: string
  links: string[]
}

const ROOT = process.cwd()
const CONTENT_DIR = resolve(ROOT, 'content')
const OUTPUT_PUBLIC_DIR = resolve(ROOT, '.output/public')
const DEFAULT_BASE_URL = 'https://nimiq.com'
const DEFAULT_SITEMAP_URL = 'https://nimiq.com/sitemap.xml'
const DEFAULT_JSON_OUT = resolve(ROOT, '.cache/content-parity-report.json')

const ROUTE_PRIORITY = ['/', '/about', '/community-funding', '/podcast']
const KNOWN_REDIRECT_OR_LEGACY_ROUTES = new Set([
  '/podcast',
  '/oasis',
  '/slice-simulator',
  '/iframes/albatross-liveview',
])
const LOCAL_ROUTE_IGNORES = new Set([
  '/activation/privacy',
])
const TEXT_KEY_IGNORES = new Set([
  'alt',
  'appStore',
  'buttonHref',
  'color',
  'cta',
  'date',
  'github',
  'href',
  'icon',
  'id',
  'image',
  'images',
  'img',
  'item',
  'key',
  'labelBy',
  'labelLearnMore',
  'link',
  'linkedin',
  'logo',
  'logos',
  'mediaType',
  'name',
  'path',
  'picture',
  'playStore',
  'poster',
  'preview',
  'publishedAt',
  'screenshot',
  'slug',
  'socialMedia',
  'socialMediaItem',
  'src',
  'tags',
  'title',
  'twitter',
  'url',
  'value',
  'videoUrl',
])
const LINK_KEY_HINTS = ['href', 'link', 'cta', 'url', 'playStore', 'appStore', 'buttonHref', 'secondaryButtonHref', 'videoUrl']
const STOP_WORDS = new Set([
  'about',
  'after',
  'also',
  'been',
  'being',
  'from',
  'have',
  'into',
  'more',
  'nimiq',
  'that',
  'their',
  'them',
  'there',
  'they',
  'this',
  'what',
  'when',
  'where',
  'which',
  'with',
  'your',
])

async function main() {
  const options = parseArgs(process.argv.slice(2))
  const localRoutes = await collectLocalRouteSources(options.baseUrl)
  const liveRoutes = await fetchSitemapRoutes(options.sitemapUrl)
  const orderedRoutes = prioritizeRoutes(liveRoutes, localRoutes)
  const selectedRoutes = typeof options.maxPages === 'number'
    ? orderedRoutes.slice(0, options.maxPages)
    : orderedRoutes
  const results: AuditResult[] = []

  consola.start(`Auditing ${selectedRoutes.length} production routes against local content`)

  for (const route of selectedRoutes) {
    const local = localRoutes.get(route)
    const result = await auditRoute(route, local, options)
    results.push(result)
  }

  const liveRouteSet = new Set(liveRoutes)
  for (const [route, local] of localRoutes) {
    if (LOCAL_ROUTE_IGNORES.has(route))
      continue
    if (liveRouteSet.has(route))
      continue
    results.push({
      route,
      category: 'missing_live',
      sourcePath: local.sourcePath,
      notes: ['Route exists in repo content but is missing from the live sitemap'],
      metadata: {
        live: emptyMetadata(),
        local: pickMetadata(local),
        diffs: [],
      },
    })
  }

  results.sort((a, b) => a.route.localeCompare(b.route))
  await writeReport(options.jsonOut, {
    generatedAt: new Date().toISOString(),
    baseUrl: options.baseUrl,
    sitemapUrl: options.sitemapUrl,
    summary: summarize(results),
    results,
  })
  printSummary(results, options.jsonOut)
}

function parseArgs(argv: string[]): CliOptions {
  const options: CliOptions = {
    baseUrl: DEFAULT_BASE_URL,
    sitemapUrl: DEFAULT_SITEMAP_URL,
    jsonOut: DEFAULT_JSON_OUT,
  }

  for (let index = 0; index < argv.length; index++) {
    const current = argv[index]
    const next = argv[index + 1]
    if (current === '--base-url' && next) {
      options.baseUrl = next
      index++
      continue
    }
    if (current === '--sitemap-url' && next) {
      options.sitemapUrl = next
      index++
      continue
    }
    if (current === '--max-pages' && next) {
      options.maxPages = Number.parseInt(next, 10)
      index++
      continue
    }
    if (current === '--json-out' && next) {
      options.jsonOut = resolve(ROOT, next)
      index++
      continue
    }
    if (current === '--compare-url' && next) {
      options.compareUrl = next
      index++
      continue
    }
  }

  return options
}

async function fetchSitemapRoutes(sitemapUrl: string) {
  const response = await fetch(sitemapUrl)
  if (!response.ok)
    throw new Error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`)

  const xml = await response.text()
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  return matches
    .map(match => normalizeRoute(match[1]))
    .filter(Boolean)
}

async function collectLocalRouteSources(baseUrl: string) {
  const routes = new Map<string, LocalRouteSource>()
  const contentFiles = [
    'index.md',
    'about.md',
    'albatross.md',
    'apps.md',
    'blog.md',
    'bug-bounty.md',
    'buy-and-sell.md',
    'community-funding.md',
    'community.md',
    'contact.md',
    'cryptopaymentlink.md',
    'newsletter.md',
    'nimiq-pay.md',
    'onepager.md',
    'podcast.md',
    'privacy.md',
    'roadmap.md',
    'staking.md',
    'team.md',
    'terms.md',
    'wallet.md',
  ]

  for (const relativePath of contentFiles) {
    const filePath = resolve(CONTENT_DIR, relativePath)
    const parsed = await readMarkdownFrontmatter(filePath)
    const route = routeFromContentFile(relativePath)
    routes.set(route, buildLocalSource(route, filePath, parsed, baseUrl))
  }

  const activationTerms = await readMarkdownFrontmatter(resolve(CONTENT_DIR, 'activation-terms.md'))
  routes.set('/activation-terms', buildLocalSource('/activation-terms', resolve(CONTENT_DIR, 'activation-terms.md'), activationTerms, baseUrl))

  const litepaperPos = await readMarkdownFrontmatter(resolve(CONTENT_DIR, 'litepaper-pos.md'))
  routes.set('/litepaper', buildLocalSource('/litepaper', resolve(CONTENT_DIR, 'litepaper-pos.md'), litepaperPos, baseUrl, {
    title: 'Nimiq Whitepaper v2.0',
    description: readString(litepaperPos.data, ['seo', 'description']) || readString(litepaperPos.data, ['subline']),
    h1: readString(litepaperPos.data, ['headline']) || 'Nimiq Whitepaper',
  }))

  const blogFiles = await listMarkdownFiles(resolve(CONTENT_DIR, 'blog'))
  for (const filePath of blogFiles) {
    const parsed = await readMarkdownFrontmatter(filePath)
    const slug = readString(parsed.data, ['slug']) || basename(filePath).replace(/^\d+\./, '').replace(/\.md$/, '')
    const route = normalizeRoute(`/blog/${slug}`)
    routes.set(route, buildLocalSource(route, filePath, parsed, baseUrl, {
      title: readString(parsed.data, ['title']),
      description: readString(parsed.data, ['description']),
      h1: readString(parsed.data, ['title']),
    }))
  }

  for (const [route, source] of routes) {
    source.generatedHtmlPath = await resolveGeneratedHtmlPath(route)
  }

  return routes
}

function routeFromContentFile(relativePath: string) {
  const stem = basename(relativePath, '.md')
  if (stem === 'index')
    return '/'
  return normalizeRoute(`/${stem}`)
}

async function auditRoute(route: string, local: LocalRouteSource | undefined, options: CliOptions): Promise<AuditResult> {
  const liveUrl = new URL(route, ensureTrailingSlash(options.baseUrl)).toString()
  const liveFetch = await fetchWithRedirects(liveUrl)

  if (shouldClassifyAsRedirect(route, liveFetch.redirects)) {
    return {
      route,
      category: 'redirect_or_legacy',
      sourcePath: local?.sourcePath,
      finalUrl: liveFetch.finalUrl,
      notes: [formatRedirectNote(liveFetch.redirects)],
      metadata: {
        live: emptyMetadata(),
        local: local ? pickMetadata(local) : emptyMetadata(),
        diffs: [],
      },
    }
  }

  if (!local) {
    return {
      route,
      category: 'missing_local',
      finalUrl: liveFetch.finalUrl,
      notes: ['Route exists in the live sitemap but no local content source was resolved'],
      metadata: {
        live: extractHtmlSnapshot(liveFetch.html, liveFetch.finalUrl),
        local: emptyMetadata(),
        diffs: [],
      },
    }
  }

  const liveSnapshot = extractHtmlSnapshot(liveFetch.html, liveFetch.finalUrl)
  const localHtml = await resolveLocalHtml(local, options)
  const localSnapshot = extractHtmlSnapshot(localHtml, new URL(route, ensureTrailingSlash(options.baseUrl)).toString())

  const [liveMarkdown, localMarkdown] = await Promise.all([
    runMdream(liveSnapshot.contentHtml, liveFetch.finalUrl),
    runMdream(localSnapshot.contentHtml, new URL(route, ensureTrailingSlash(options.baseUrl)).toString()),
  ])

  const metrics = compareContent(liveMarkdown, localMarkdown)
  const linkDrift = compareLinks(local.links, liveSnapshot.links, options.baseUrl)
  const metadataDiffs = compareMetadata(liveSnapshot, pickMetadata(local))
  const notes: string[] = []

  if (linkDrift.missing.length > 0)
    notes.push(`Missing ${linkDrift.missing.length} local links in live content`)

  const category = categorizeRoute(metrics, metadataDiffs, linkDrift)
  return {
    route,
    category,
    sourcePath: local.sourcePath,
    finalUrl: liveFetch.finalUrl,
    notes,
    metadata: {
      live: liveSnapshot,
      local: pickMetadata(local),
      diffs: metadataDiffs,
    },
    metrics,
    linkDrift,
  }
}

function compareMetadata(live: MetadataSnapshot, local: MetadataSnapshot) {
  const diffs: string[] = []
  if (normalizeMetadataText(live.title) !== normalizeMetadataText(local.title))
    diffs.push('title')
  if (normalizeMetadataText(live.description) !== normalizeMetadataText(local.description))
    diffs.push('description')
  if (normalizeRoute(live.canonical || '/') !== normalizeRoute(local.canonical || '/'))
    diffs.push('canonical')
  if (normalizeMetadataText(live.h1) !== normalizeMetadataText(local.h1))
    diffs.push('h1')
  return diffs
}

function categorizeRoute(metrics: ContentMetrics, metadataDiffs: string[], linkDrift: LinkDrift): AuditCategory {
  const contentDrift = metrics.uniqueWordRecall < 0.58 || (metrics.uniqueWordRecall < 0.68 && metrics.trigramJaccard < 0.72)
  const manualReview = !contentDrift && (
    (metrics.uniqueWordRecall < 0.82 && metrics.trigramJaccard < 0.85)
    || (metrics.sentenceCoverage < 0.5 && metrics.uniqueWordRecall < 0.88)
    || linkDrift.overlapRatio < 0.45
  )

  if (contentDrift)
    return 'content_drift'
  if (metadataDiffs.length > 0)
    return 'metadata_drift'
  if (manualReview)
    return 'manual_review'
  return 'match'
}

async function resolveLocalHtml(local: LocalRouteSource, options: CliOptions) {
  if (local.generatedHtmlPath) {
    return readFile(local.generatedHtmlPath, 'utf8')
  }

  if (options.compareUrl) {
    const compareUrl = new URL(local.route, ensureTrailingSlash(options.compareUrl)).toString()
    const fetched = await fetchWithRedirects(compareUrl)
    return fetched.html
  }

  return buildSyntheticHtml(local)
}

function buildSyntheticHtml(local: LocalRouteSource) {
  const contentHtml = String(marked.parse(local.markdown))
  const title = escapeHtml(local.title)
  const description = escapeHtml(local.description)
  const canonical = escapeHtml(local.canonical)
  const h1 = escapeHtml(local.h1)
  return [
    '<!doctype html>',
    '<html>',
    '<head>',
    `<title>${title}</title>`,
    `<meta name="description" content="${description}">`,
    `<link rel="canonical" href="${canonical}">`,
    '</head>',
    '<body>',
    '<main>',
    h1 ? `<h1>${h1}</h1>` : '',
    contentHtml,
    '</main>',
    '</body>',
    '</html>',
  ].join('')
}

function buildLocalSource(route: string, sourcePath: string, parsed: FrontmatterResult, baseUrl: string, overrides: Partial<Pick<LocalRouteSource, 'title' | 'description' | 'h1'>> = {}): LocalRouteSource {
  const rawFrontmatter = typeof parsed.data.__rawFrontmatter === 'string' ? parsed.data.__rawFrontmatter : ''
  const title = overrides.title
    || readString(parsed.data, ['seo', 'title'])
    || readString(parsed.data, ['hero', 'title'])
    || readString(parsed.data, ['headline'])
    || readString(parsed.data, ['title'])
    || readRawFrontmatterValue(rawFrontmatter, 'title')
    || humanizeRoute(route)
  const description = overrides.description
    || readString(parsed.data, ['seo', 'description'])
    || readString(parsed.data, ['hero', 'description'])
    || readString(parsed.data, ['description'])
    || readString(parsed.data, ['subline'])
    || readRawFrontmatterValue(rawFrontmatter, 'description')
    || ''
  const h1 = overrides.h1
    || readString(parsed.data, ['hero', 'title'])
    || readString(parsed.data, ['headline'])
    || readString(parsed.data, ['title'])
    || readRawFrontmatterValue(rawFrontmatter, 'headline')
    || title
  const markdown = buildLocalMarkdown(route, title, description, parsed)
  const canonical = new URL(route === '/' ? '/' : route, ensureTrailingSlash(baseUrl)).toString()
  return {
    route,
    sourcePath,
    title,
    description,
    canonical,
    h1,
    markdown,
    links: collectLocalLinks(parsed.data, parsed.body, baseUrl),
  }
}

function buildLocalMarkdown(route: string, title: string, description: string, parsed: FrontmatterResult) {
  const chunks: string[] = []
  if (title)
    chunks.push(`# ${title}`)
  if (description)
    chunks.push(description)
  for (const text of collectText(parsed.data)) {
    if (text === title || text === description)
      continue
    chunks.push(text)
  }
  const body = route.startsWith('/blog/') ? stripBlogDisclaimer(parsed.body) : parsed.body.trim()
  if (body)
    chunks.push(body)
  return uniquePreserve(chunks).join('\n\n')
}

function collectText(value: unknown, path: string[] = []): string[] {
  if (value == null)
    return []

  if (typeof value === 'string') {
    const trimmed = value.trim()
    const key = path.at(-1) || ''
    if (!trimmed || TEXT_KEY_IGNORES.has(key) || looksLikeUrl(trimmed))
      return []
    return [trimmed]
  }

  if (typeof value === 'number')
    return [String(value)]

  if (Array.isArray(value))
    return value.flatMap((entry, index) => collectText(entry, [...path, String(index)]))

  if (typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>).flatMap(([key, entry]) => {
      if (key === 'seo')
        return []
      return collectText(entry, [...path, key])
    })
  }

  return []
}

function collectLocalLinks(frontmatter: Record<string, any>, body: string, baseUrl: string) {
  const links = new Set<string>()
  for (const match of body.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const normalized = normalizeHref(match[1], baseUrl)
    if (normalized)
      links.add(normalized)
  }
  walkLinks(frontmatter, links, baseUrl)
  return [...links]
}

function walkLinks(value: unknown, links: Set<string>, baseUrl: string, key = '') {
  if (value == null)
    return

  if (typeof value === 'string') {
    if (LINK_KEY_HINTS.some(hint => key.toLowerCase().includes(hint.toLowerCase()))) {
      const normalized = normalizeHref(value, baseUrl)
      if (normalized)
        links.add(normalized)
    }
    return
  }

  if (Array.isArray(value)) {
    for (const entry of value)
      walkLinks(entry, links, baseUrl, key)
    return
  }

  if (typeof value === 'object') {
    for (const [childKey, entry] of Object.entries(value as Record<string, unknown>))
      walkLinks(entry, links, baseUrl, childKey)
  }
}

async function fetchWithRedirects(initialUrl: string): Promise<FetchResult> {
  let currentUrl = initialUrl
  const redirects: Array<{ status: number, from: string, to: string }> = []

  for (let count = 0; count < 8; count++) {
    const response = await fetch(currentUrl, {
      headers: {
        'accept': 'text/html,application/xhtml+xml',
        'user-agent': 'nimiq-content-parity-audit/1.0',
      },
      redirect: 'manual',
    })

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location')
      if (!location)
        throw new Error(`Redirect without location for ${currentUrl}`)
      const nextUrl = new URL(location, currentUrl).toString()
      redirects.push({ status: response.status, from: currentUrl, to: nextUrl })
      currentUrl = nextUrl
      continue
    }

    return {
      finalUrl: currentUrl,
      html: await response.text(),
      redirects,
      status: response.status,
    }
  }

  throw new Error(`Too many redirects for ${initialUrl}`)
}

function shouldClassifyAsRedirect(route: string, redirects: Array<{ status: number, from: string, to: string }>) {
  if (KNOWN_REDIRECT_OR_LEGACY_ROUTES.has(route))
    return true
  if (redirects.length === 0)
    return false
  return redirects.some((redirect) => {
    const from = new URL(redirect.from)
    const to = new URL(redirect.to)
    return normalizeRoute(from.pathname) !== normalizeRoute(to.pathname) || !isHostAlias(from.hostname, to.hostname)
  })
}

function isHostAlias(from: string, to: string) {
  return stripWww(from) === stripWww(to)
}

function stripWww(hostname: string) {
  return hostname.replace(/^www\./, '')
}

function formatRedirectNote(redirects: Array<{ status: number, from: string, to: string }>) {
  if (redirects.length === 0)
    return 'Route is configured as redirect_or_legacy'
  return redirects.map(redirect => `${redirect.status} ${redirect.from} -> ${redirect.to}`).join(' | ')
}

function extractHtmlSnapshot(html: string, pageUrl: string): HtmlSnapshot {
  const contentHtml = extractPrimaryContentHtml(html)
  const contentH1 = decodeHtmlEntities(extractFirstTagText(contentHtml || '', 'h1'))
  return {
    title: decodeHtmlEntities(extractTitle(html)),
    description: decodeHtmlEntities(extractMetaContent(html, 'description')),
    canonical: normalizeCanonical(extractCanonical(html), pageUrl),
    h1: contentH1 || decodeHtmlEntities(extractFirstTagText(html, 'h1')),
    fullHtml: html,
    contentHtml: stripHtmlNoise(contentHtml || html),
    links: extractLinks(contentHtml || html, pageUrl),
  }
}

function extractPrimaryContentHtml(html: string) {
  const candidates = [
    ...extractTagBlocks(html, 'main'),
    ...extractTagBlocks(html, 'article'),
  ]
  const best = candidates.sort((left, right) => right.length - left.length)[0]
  if (best)
    return best
  const body = extractTagBlocks(html, 'body')[0]
  return body || html
}

function stripHtmlNoise(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
}

function extractTitle(html: string) {
  return matchSingle(html, /<title[^>]*>([\s\S]*?)<\/title>/i)
}

function extractMetaContent(html: string, name: string) {
  for (const tag of html.match(/<meta\b[^>]*>/gi) || []) {
    const lower = tag.toLowerCase()
    if (lower.includes(`name="${name.toLowerCase()}"`) || lower.includes(`name='${name.toLowerCase()}'`))
      return getAttribute(tag, 'content')
  }
  return ''
}

function extractCanonical(html: string) {
  for (const tag of html.match(/<link\b[^>]*>/gi) || []) {
    const rel = (getAttribute(tag, 'rel') || '').toLowerCase()
    if (rel === 'canonical')
      return getAttribute(tag, 'href')
  }
  return ''
}

function normalizeCanonical(value: string, pageUrl: string) {
  if (!value)
    return new URL(pageUrl).toString()
  try {
    return new URL(value, pageUrl).toString()
  }
  catch {
    return pageUrl
  }
}

function extractFirstTagText(html: string, tagName: string) {
  const block = matchSingle(html, new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)</${tagName}>`, 'i'))
  return stripTags(block)
}

function extractTagBlocks(html: string, tagName: string) {
  const matches = [...html.matchAll(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)</${tagName}>`, 'gi'))]
  return matches.map(match => match[0])
}

function extractLinks(html: string, pageUrl: string) {
  const links = new Set<string>()
  for (const tag of html.match(/<a\b[^>]*>/gi) || []) {
    const href = getAttribute(tag, 'href')
    const normalized = normalizeHref(href, pageUrl)
    if (normalized)
      links.add(normalized)
  }
  return [...links]
}

function getAttribute(tag: string, attribute: string) {
  const doubleQuoted = new RegExp(`${attribute}\\s*=\\s*"([^"]*)"`, 'i').exec(tag)
  if (doubleQuoted)
    return doubleQuoted[1]
  const singleQuoted = new RegExp(`${attribute}\\s*=\\s*'([^']*)'`, 'i').exec(tag)
  if (singleQuoted)
    return singleQuoted[1]
  return ''
}

async function runMdream(html: string, origin: string) {
  return new Promise<string>((resolvePromise, reject) => {
    const child = spawn('npx', ['-y', 'mdream', '--origin', origin], {
      cwd: ROOT,
      stdio: ['pipe', 'pipe', 'pipe'],
    })
    let stdout = ''
    let stderr = ''

    child.stdout.on('data', chunk => stdout += chunk.toString())
    child.stderr.on('data', chunk => stderr += chunk.toString())
    child.on('error', reject)
    child.on('close', (code) => {
      if (code !== 0)
        reject(new Error(stderr || `mdream exited with status ${code}`))
      else
        resolvePromise(stdout)
    })

    child.stdin.write(html)
    child.stdin.end()
  })
}

function compareContent(liveMarkdown: string, localMarkdown: string): ContentMetrics {
  const liveText = normalizeComparableText(liveMarkdown)
  const localText = normalizeComparableText(localMarkdown)
  return {
    uniqueWordRecall: computeUniqueWordRecall(localText, liveText),
    sentenceCoverage: computeSentenceCoverage(localMarkdown, liveMarkdown),
    trigramJaccard: computeTrigramJaccard(localText, liveText),
  }
}

function compareLinks(localLinks: string[], liveLinks: string[], baseUrl: string): LinkDrift {
  const comparableLocal = uniquePreserve(localLinks.filter(link => isComparableLink(link, baseUrl)))
  if (comparableLocal.length === 0) {
    return {
      missing: [],
      overlapRatio: 1,
    }
  }

  const liveSet = new Set(liveLinks.map(link => normalizeHref(link, baseUrl)).filter(Boolean) as string[])
  const missing = comparableLocal.filter(link => !liveSet.has(link))
  return {
    missing,
    overlapRatio: (comparableLocal.length - missing.length) / comparableLocal.length,
  }
}

function isComparableLink(link: string, baseUrl: string) {
  if (!link)
    return false
  if (link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('/mailto:'))
    return false
  if (/\.(?:png|jpe?g|gif|svg|webp|avif)$/i.test(link))
    return false
  const baseHost = stripWww(new URL(baseUrl).hostname)
  if (!link.startsWith('/')) {
    try {
      const target = new URL(link)
      if (stripWww(target.hostname) !== baseHost && target.pathname === '/')
        return false
    }
    catch {
      return false
    }
  }
  return true
}

function computeUniqueWordRecall(localText: string, liveText: string) {
  const localWords = new Set(tokenizeComparableText(localText))
  const liveWords = new Set(tokenizeComparableText(liveText))
  if (localWords.size === 0)
    return 1
  let overlap = 0
  for (const word of localWords) {
    if (liveWords.has(word))
      overlap++
  }
  return overlap / localWords.size
}

function computeSentenceCoverage(localMarkdown: string, liveMarkdown: string) {
  const localText = normalizeSentenceText(localMarkdown)
  const liveText = normalizeSentenceText(liveMarkdown)
  const sentences = extractComparableSentences(localText)
  if (sentences.length === 0)
    return 1
  const matched = sentences.filter(sentence => liveText.includes(sentence)).length
  return matched / sentences.length
}

function computeTrigramJaccard(localText: string, liveText: string) {
  const localTrigrams = buildWordNgrams(tokenizeComparableText(localText), 3)
  const liveTrigrams = buildWordNgrams(tokenizeComparableText(liveText), 3)
  if (localTrigrams.size === 0 || liveTrigrams.size === 0)
    return 1
  let overlap = 0
  for (const trigram of localTrigrams) {
    if (liveTrigrams.has(trigram))
      overlap++
  }
  return overlap / new Set([...localTrigrams, ...liveTrigrams]).size
}

function extractComparableSentences(text: string) {
  return text
    .split(/\n+/)
    .map(sentence => sentence.trim())
    .filter(sentence => sentence.length >= 60)
    .slice(0, 120)
}

function buildWordNgrams(words: string[], size: number) {
  const ngrams = new Set<string>()
  for (let index = 0; index <= words.length - size; index++)
    ngrams.add(words.slice(index, index + size).join(' '))
  return ngrams
}

function tokenizeComparableText(text: string) {
  return text
    .split(/\s+/)
    .map(word => word.trim())
    .filter(word => word.length >= 4 && !STOP_WORDS.has(word))
}

function normalizeComparableText(text: string) {
  return decodeHtmlEntities(text)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, ' $1 ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/[`*_>#-]+/g, ' ')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim()
}

function normalizeSentenceText(text: string) {
  return decodeHtmlEntities(text)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, ' $1 ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/[`*_>#-]+/g, ' ')
    .replace(/[^\p{L}\p{N}\s.!?]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

async function resolveGeneratedHtmlPath(route: string) {
  const candidates = routeToGeneratedHtmlCandidates(route)
  for (const candidate of candidates) {
    try {
      await access(candidate, constants.R_OK)
      return candidate
    }
    catch {
    }
  }
  return undefined
}

function routeToGeneratedHtmlCandidates(route: string) {
  if (route === '/')
    return [resolve(OUTPUT_PUBLIC_DIR, 'index.html')]
  const trimmed = route.replace(/^\//, '')
  return [
    resolve(OUTPUT_PUBLIC_DIR, `${trimmed}.html`),
    resolve(OUTPUT_PUBLIC_DIR, trimmed, 'index.html'),
  ]
}

function prioritizeRoutes(liveRoutes: string[], localRoutes: Map<string, LocalRouteSource>) {
  const blogRoutes = [...localRoutes.values()]
    .filter(entry => entry.route.startsWith('/blog/') && entry.route !== '/blog')
    .sort((left, right) => left.route.localeCompare(right.route))
  const oldestBlog = blogRoutes[0]?.route
  const newestBlog = blogRoutes.toSorted((left, right) =>
    newestPublishedDate(right.sourcePath)
      .localeCompare(newestPublishedDate(left.sourcePath)))[0]?.route
  const preferred = uniquePreserve([...ROUTE_PRIORITY, newestBlog, oldestBlog].filter(Boolean) as string[])
  return uniquePreserve([...preferred, ...liveRoutes])
}

function newestPublishedDate(_path: string) {
  return basename(_path)
}

function normalizeHref(value: string | undefined, base: string) {
  if (!value)
    return ''
  const trimmed = value.trim()
  if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('javascript:'))
    return ''
  try {
    const normalized = new URL(trimmed, ensureTrailingSlash(base))
    const baseHost = stripWww(new URL(base).hostname)
    if (stripWww(normalized.hostname) === baseHost)
      return normalizeRoute(`${normalized.pathname}${normalized.search}`)
    return normalized.toString().replace(/\/$/, '')
  }
  catch {
    return ''
  }
}

function normalizeRoute(value: string) {
  try {
    const url = value.startsWith('http://') || value.startsWith('https://')
      ? new URL(value)
      : new URL(value, ensureTrailingSlash(DEFAULT_BASE_URL))
    const pathname = url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, '')
    return pathname + url.search
  }
  catch {
    return value === '/' ? '/' : value.replace(/\/$/, '')
  }
}

function normalizeMetadataText(value: string) {
  return normalizeComparableText(value)
}

function readString(value: Record<string, any>, path: string[]) {
  let current: any = value
  for (const segment of path) {
    current = current?.[segment]
  }
  return typeof current === 'string' ? current.trim() : ''
}

async function readMarkdownFrontmatter(filePath: string): Promise<FrontmatterResult> {
  const raw = await readFile(filePath, 'utf8')
  if (!raw.startsWith('---\n')) {
    return {
      body: raw.trim(),
      data: {},
    }
  }

  const end = raw.indexOf('\n---\n', 4)
  if (end === -1) {
    return {
      body: raw.trim(),
      data: {},
    }
  }

  const frontmatter = raw.slice(4, end)
  const body = raw.slice(end + 5).trim()
  try {
    return {
      body,
      data: (yaml.load(frontmatter) as Record<string, any>) || {},
    }
  }
  catch {
    return {
      body,
      data: {
        __rawFrontmatter: frontmatter,
      },
    }
  }
}

async function listMarkdownFiles(directory: string) {
  const entries = await readFileList(directory)
  return entries.filter(filePath => filePath.endsWith('.md')).sort()
}

async function readFileList(directory: string): Promise<string[]> {
  const { readdir } = await import('node:fs/promises')
  const entries = await readdir(directory, { withFileTypes: true })
  const files: string[] = []
  for (const entry of entries) {
    const fullPath = resolve(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...await readFileList(fullPath))
      continue
    }
    files.push(fullPath)
  }
  return files
}

function stripTags(html: string) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, '\'')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number.parseInt(code, 10)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(Number.parseInt(code, 16)))
}

function matchSingle(value: string, expression: RegExp) {
  return expression.exec(value)?.[1]?.trim() || ''
}

function looksLikeUrl(value: string) {
  return /^https?:\/\//i.test(value) || value.startsWith('/') || value.startsWith('mailto:') || value.startsWith('tel:')
}

function uniquePreserve(values: string[]) {
  const seen = new Set<string>()
  const result: string[] = []
  for (const value of values) {
    const trimmed = value.trim()
    if (!trimmed || seen.has(trimmed))
      continue
    seen.add(trimmed)
    result.push(trimmed)
  }
  return result
}

function humanizeRoute(route: string) {
  if (route === '/')
    return 'Home'
  return route
    .replace(/^\//, '')
    .split('/')
    .pop()!
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
}

function stripBlogDisclaimer(body: string) {
  return body.replace(/\n## Disclaimer[\s\S]*$/i, '').trim()
}

function pickMetadata(source: LocalRouteSource): MetadataSnapshot {
  return {
    title: source.title,
    description: source.description,
    canonical: source.canonical,
    h1: source.h1,
  }
}

function emptyMetadata(): MetadataSnapshot {
  return {
    title: '',
    description: '',
    canonical: '',
    h1: '',
  }
}

function ensureTrailingSlash(value: string) {
  return value.endsWith('/') ? value : `${value}/`
}

function summarize(results: AuditResult[]) {
  const counts = {
    match: 0,
    content_drift: 0,
    metadata_drift: 0,
    missing_local: 0,
    missing_live: 0,
    redirect_or_legacy: 0,
    manual_review: 0,
  }
  for (const result of results)
    counts[result.category]++
  return counts
}

async function writeReport(outputPath: string, report: Record<string, any>) {
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, JSON.stringify(report, null, 2))
}

function printSummary(results: AuditResult[], reportPath: string) {
  const summary = summarize(results)
  const orderedCategories: AuditCategory[] = [
    'content_drift',
    'metadata_drift',
    'manual_review',
    'missing_local',
    'missing_live',
    'redirect_or_legacy',
    'match',
  ]

  consola.box([
    'Content parity audit complete',
    ...orderedCategories.map(category => `${category}: ${summary[category]}`),
    `report: ${reportPath}`,
  ].join('\n'))

  for (const category of ['content_drift', 'metadata_drift', 'manual_review', 'missing_local', 'missing_live'] as AuditCategory[]) {
    const subset = results.filter(result => result.category === category).slice(0, 12)
    if (subset.length === 0)
      continue
    consola.info(`${category}:`)
    for (const result of subset)
      consola.info(`  ${result.route}${result.sourcePath ? ` <- ${result.sourcePath}` : ''}`)
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function readRawFrontmatterValue(frontmatter: string, key: string) {
  if (!frontmatter)
    return ''
  const match = new RegExp(`^\\s*${key}:\\s*(.+)$`, 'im').exec(frontmatter)
  return match?.[1]?.trim().replace(/^['"]|['"]$/g, '') || ''
}

main().catch((error) => {
  consola.error(error instanceof Error ? error.stack || error.message : error)
  process.exitCode = 1
})
