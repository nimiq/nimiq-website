import type { BlogPageDocument, ExchangeDocument, NavigationDocument, PageDocument } from '../prismicio-types.js'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import process from 'node:process'
import { consola } from 'consola'
import { blogImageToLocalPath, downloadImage, exchangeLogoToLocalPath, normalizeFileName, richTextToMarkdown, richTextToPlainText } from './utils'

const PRISMIC_API = 'https://nimiq.cdn.prismic.io/api/v2'
const PRISMIC_TOKEN = process.env.PRISMIC_ACCESS_TOKEN

interface ConversionStats {
  success: number
  failed: number
  errors: Array<{ uid: string, error: any }>
}

let masterRef: string

async function getMasterRef(): Promise<string> {
  if (masterRef)
    return masterRef

  const url = `${PRISMIC_API}?access_token=${PRISMIC_TOKEN}`
  const response = await fetch(url)
  const data = await response.json()
  masterRef = data.refs.find((ref: any) => ref.id === 'master')?.ref || ''
  return masterRef
}

async function fetchDocuments<T>(type: string, label: string): Promise<T[]> {
  const ref = await getMasterRef()
  const allDocs: T[] = []
  let page = 1

  consola.start(`Fetching ${label} from Prismic...`)

  while (true) {
    const url = new URL(`${PRISMIC_API}/documents/search`)
    url.searchParams.set('q', `[[at(document.type,"${type}")]]`)
    url.searchParams.set('pageSize', '100')
    url.searchParams.set('page', page.toString())
    url.searchParams.set('ref', ref)
    url.searchParams.set('access_token', PRISMIC_TOKEN!)

    const response = await fetch(url.href)
    const data = await response.json()
    allDocs.push(...data.results)

    if (!data.next_page)
      break
    page++
  }

  consola.success(`Fetched ${allDocs.length} ${label}`)
  return allDocs
}

async function fetchNavigationSingleton(): Promise<NavigationDocument | null> {
  try {
    const ref = await getMasterRef()
    const url = new URL(`${PRISMIC_API}/documents/search`)
    url.searchParams.set('q', '[[at(document.type,"navigation")]]')
    url.searchParams.set('pageSize', '1')
    url.searchParams.set('ref', ref)
    url.searchParams.set('access_token', PRISMIC_TOKEN!)

    const response = await fetch(url.href)
    const data = await response.json()
    return data.results[0] || null
  }
  catch (error) {
    consola.warn('Failed to fetch navigation document:', error)
    return null
  }
}

interface ImageMap {
  prismicUrl: string
  localPath: string
}

function extractAllImages(doc: BlogPageDocument, slug: string): ImageMap[] {
  const images: ImageMap[] = []
  const seen = new Set<string>()

  const addImage = (url: string | undefined) => {
    if (url && url.includes('prismic') && !seen.has(url)) {
      seen.add(url)
      images.push({ prismicUrl: url, localPath: blogImageToLocalPath(url, slug) })
    }
  }

  // Extract from full_screen_image slice
  const imageSlice = doc.data.body?.find((s: any) => s.slice_type === 'full_screen_image')
  if (imageSlice?.primary?.image?.url) {
    addImage(imageSlice.primary.image.url)
  }

  // Extract from main image field
  if (doc.data.image?.url) {
    addImage(doc.data.image.url)
  }

  // Extract from meta image
  if (doc.data.meta_image?.url) {
    addImage(doc.data.meta_image.url)
  }

  // Extract from rich text content
  const extractFromRichText = (richText: any) => {
    if (!richText || !Array.isArray(richText))
      return
    for (const node of richText) {
      if (node.type === 'image' && node.url) {
        addImage(node.url)
      }
    }
  }

  extractFromRichText(doc.data.text)
  if (doc.data.body) {
    for (const slice of doc.data.body) {
      if (slice.slice_type === 'rich_text' && slice.primary?.richText) {
        extractFromRichText(slice.primary.richText)
      }
    }
  }

  return images
}

function getMainImageUrl(doc: BlogPageDocument, images: ImageMap[]): string | undefined {
  // Priority 1: FullScreenImage slice
  const imageSlice = doc.data.body?.find((s: any) => s.slice_type === 'full_screen_image')
  if (imageSlice?.primary?.image?.url) {
    const img = images.find(i => i.prismicUrl === imageSlice.primary.image.url)
    return img?.localPath
  }

  // Priority 2: Main image field
  if (doc.data.image?.url) {
    const img = images.find(i => i.prismicUrl === doc.data.image.url)
    return img?.localPath
  }

  // Priority 3: Meta image
  if (doc.data.meta_image?.url) {
    const img = images.find(i => i.prismicUrl === doc.data.meta_image.url)
    return img?.localPath
  }

  return undefined
}

function generateFrontmatter(doc: BlogPageDocument, images: ImageMap[]): string {
  const frontmatter: Record<string, any> = {
    title: richTextToPlainText(doc.data.title),
    description: richTextToPlainText(doc.data.subline),
    slug: doc.uid,
    publishedAt: doc.data.publish_date || doc.first_publication_date,
    updatedAt: doc.last_publication_date,
    authors: doc.data.authors.map(a => a.name),
    draft: doc.data.draft || false,
  }

  // Add image if exists
  const imageUrl = getMainImageUrl(doc, images)
  if (imageUrl) {
    frontmatter.image = imageUrl
  }

  // Add SEO fields only if different from base
  if (doc.data.meta_title && doc.data.meta_title !== frontmatter.title) {
    frontmatter.ogTitle = doc.data.meta_title
  }
  if (doc.data.meta_description && doc.data.meta_description !== frontmatter.description) {
    frontmatter.ogDescription = doc.data.meta_description
  }
  if (doc.data.meta_image?.url) {
    const ogImage = images.find(i => i.prismicUrl === doc.data.meta_image.url)
    if (ogImage) {
      frontmatter.ogImage = ogImage.localPath
    }
  }

  // Generate YAML
  const yaml = Object.entries(frontmatter)
    .map(([key, value]) => {
      if (value === undefined || value === null)
        return null
      if (typeof value === 'string') {
        const escaped = value.replace(/"/g, '\\"')
        return `${key}: "${escaped}"`
      }
      if (Array.isArray(value)) {
        return `${key}:\n${value.map(v => `  - "${v}"`).join('\n')}`
      }
      return `${key}: ${JSON.stringify(value)}`
    })
    .filter(Boolean)
    .join('\n')

  return `---\n${yaml}\n---\n`
}

function convertBodyToMarkdown(doc: BlogPageDocument): string {
  let markdown = ''

  // Handle main text field (older posts)
  if (doc.data.text && doc.data.text.length > 0) {
    markdown += richTextToMarkdown(doc.data.text)
  }

  // Handle slices (newer posts)
  if (doc.data.body && doc.data.body.length > 0) {
    for (const slice of doc.data.body) {
      if (slice.slice_type === 'rich_text') {
        markdown += richTextToMarkdown(slice.primary.richText)
      }
      // Skip full_screen_image slices (already in frontmatter)
    }
  }

  return markdown.trim()
}

function cleanMarkdown(content: string): string {
  return content
    // Remove irregular whitespace (non-breaking spaces, zero-width spaces, etc)
    .replace(/[\u00A0\u1680\u180E\u2000-\u200B\u202F\u205F\u3000\uFEFF]/g, ' ')
    // Remove trailing spaces
    .replace(/ +$/gm, '')
    // Remove multiple consecutive blank lines
    .replace(/\n{3,}/g, '\n\n')
}

function convertBlogPost(doc: BlogPageDocument): { markdown: string, images: ImageMap[] } {
  const images = extractAllImages(doc, doc.uid)
  const frontmatter = generateFrontmatter(doc, images)
  let body = convertBodyToMarkdown(doc)

  // Replace Prismic CDN URLs with local paths in markdown
  for (const { prismicUrl, localPath } of images) {
    body = body.replaceAll(prismicUrl, localPath)
  }

  const markdown = `${frontmatter}\n${body}\n`
  return { markdown: cleanMarkdown(markdown), images }
}

async function saveMarkdownFile(slug: string, content: string, publishDate: string): Promise<void> {
  const contentDir = join(process.cwd(), 'content', 'blog')
  await mkdir(contentDir, { recursive: true })

  // Extract year-month-day from publish date
  const date = new Date(publishDate)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const datePrefix = `${year}-${month}-${day}`

  const filepath = join(contentDir, `${datePrefix}_${slug}.md`)
  await writeFile(filepath, content, 'utf-8')
}

async function convertExchange(doc: ExchangeDocument): Promise<{ yaml: string, logoUrl?: string, logoPath?: string }> {
  // Strip "exchange-" prefix from slug if present
  const cleanSlug = doc.uid.replace(/^exchange-/, '')

  const frontmatter: Record<string, any> = {
    name: doc.data.name,
    slug: cleanSlug,
  }

  let logoUrl: string | undefined
  let logoPath: string | undefined

  // Add logo if exists
  if (doc.data.logo?.url) {
    logoUrl = doc.data.logo.url
    logoPath = exchangeLogoToLocalPath(logoUrl, cleanSlug)
    frontmatter.logo = logoPath
  }

  // Add link
  if (doc.data.link) {
    // Handle Prismic link field
    const link = doc.data.link as any
    frontmatter.link = link.url || link.href || ''
  }

  // Generate YAML
  const yaml = Object.entries(frontmatter)
    .map(([key, value]) => {
      if (value === undefined || value === null)
        return null
      if (typeof value === 'string') {
        const escaped = value.replace(/"/g, '\\"')
        return `${key}: "${escaped}"`
      }
      return `${key}: ${JSON.stringify(value)}`
    })
    .filter(Boolean)
    .join('\n')

  return {
    yaml: `---\n${yaml}\n---\n`,
    logoUrl,
    logoPath,
  }
}

async function saveYamlFile(slug: string, content: string): Promise<void> {
  const contentDir = join(process.cwd(), 'content', 'exchanges')
  await mkdir(contentDir, { recursive: true })

  // Strip "exchange-" prefix if present
  const cleanSlug = slug.replace(/^exchange-/, '')
  const filepath = join(contentDir, `${cleanSlug}.yaml`)
  await writeFile(filepath, content, 'utf-8')
}

async function syncBlogs(): Promise<ConversionStats> {
  const stats: ConversionStats = { success: 0, failed: 0, errors: [] }

  try {
    const posts = await fetchDocuments<BlogPageDocument>('blog_page', 'blog posts')
    consola.start(`Converting ${posts.length} blog posts...\n`)

    for (const doc of posts) {
      try {
        const { markdown, images } = convertBlogPost(doc)

        // Download all images (continue on individual failures)
        for (const { prismicUrl, localPath } of images) {
          try {
            await downloadImage(prismicUrl, localPath)
          }
          catch {
            consola.warn(`⚠ Failed to download image for ${doc.uid}: ${prismicUrl}`)
          }
        }

        const publishDate = doc.data.publish_date || doc.first_publication_date
        await saveMarkdownFile(doc.uid, markdown, publishDate)
        stats.success++
        consola.success(`✓ ${doc.uid}`)
      }
      catch (error) {
        stats.failed++
        stats.errors.push({ uid: doc.uid, error })
        consola.error(`✗ ${doc.uid}:`, error)
      }
    }
  }
  catch (error) {
    consola.error('Blog sync failed:', error)
    throw error
  }

  return stats
}

// ============================================================================
// Page Sync Functions
// ============================================================================

function isRichTextField(value: any): boolean {
  return Array.isArray(value) && value.length > 0 && value[0]?.type
}

function isImageField(value: any): boolean {
  return value && typeof value === 'object' && value.url && (value.dimensions || value.alt !== undefined)
}

function isLinkField(value: any): boolean {
  return value && typeof value === 'object' && value.link_type
}

function shouldSkipField(key: string): boolean {
  const skipFields = ['id', 'slice_type', 'slice_label', 'variation', 'version', 'dimensions', 'edit', 'link_type', 'target', 'spans']
  return skipFields.includes(key)
}

function convertLinkToUrl(link: any): string {
  if (!link)
    return ''
  if (link.link_type === 'Web')
    return link.url || ''
  if (link.link_type === 'Document')
    return `/${link.uid || link.id || ''}`
  if (link.link_type === 'Media')
    return link.url || ''
  return link.url || ''
}

function getSliceKeyName(slice: any, index: number, allSlices: any[]): string {
  const typeMap: Record<string, string> = {
    hero_section: 'hero',
    apps_showcase: 'apps',
    banner_slice: 'banner',
    albatross_liveview: 'albatross',
    albatross_technical_details: 'albatross_details',
    prestaking_grid: 'prestaking',
    crypto_map_continent_selector: 'crypto_map',
    logos_grid: 'logos',
    grid_section: 'grid',
    simple_carousel: 'carousel',
    rich_text: 'content',
    new_york_grid: 'new_york',
    newsletter_subscription: 'newsletter',
    latest_blogpost: 'latest_blog',
    cta_section: 'cta',
    hero_stats: 'hero_stats',
    exchanges_showcase: 'exchanges',
    exchanges_grid: 'exchanges_grid',
    flags_marquee: 'flags',
    contact_form: 'contact',
    blogposts_grid: 'blog_grid',
    cards_carousel: 'cards',
    buy_sell_wallet: 'buy_sell',
    consensus_map: 'consensus',
    roadmap: 'roadmap',
    app_gallery: 'app_gallery',
    staking_calculator: 'staking_calculator',
    staking_distribution: 'staking_distribution',
    staking_faq: 'staking_faq',
    validator_list: 'validators',
    vertical_video: 'video',
    youtube_video: 'youtube',
    team_members: 'team',
    whitepaper_slice: 'whitepaper',
    tilted_media: 'tilted_media',
    stepped_slides: 'stepped_slides',
    social_media_grid: 'social_media',
    rich_text_carousel: 'text_carousel',
    stepped_lottie: 'stepped_lottie',
    staking_slice: 'staking',
    rich_text_cards: 'text_cards',
    puzzle_grid: 'puzzle',
    lottie_slice: 'lottie',
    large_grid: 'large_grid',
    link_grid: 'links',
    zig_zag_content: 'zigzag',
    pill_link: 'pill_link',
    quote: 'quote',
    wallet_playground: 'wallet_playground',
    currency_comparison: 'currency_comparison',
    wallet_words_challenge: 'wallet_challenge',
    newsletter_form: 'newsletter_form',
    nimiq_wallet_hoverable: 'wallet_hover',
    nim_token_distribution: 'token_distribution',
  }

  const baseKey = typeMap[slice.slice_type] || slice.slice_type

  // Check for duplicates of same type
  const sameTypeSlices = allSlices.filter(s => s.slice_type === slice.slice_type)
  if (sameTypeSlices.length > 1) {
    const sliceIndex = sameTypeSlices.indexOf(slice)
    if (sliceIndex > 0) {
      // For simple_headline and similar, try to extract context from content
      if (slice.slice_type === 'simple_headline' && slice.primary?.headline) {
        const headline = typeof slice.primary.headline === 'string'
          ? slice.primary.headline
          : Array.isArray(slice.primary.headline) && slice.primary.headline[0]?.text
            ? slice.primary.headline[0].text
            : ''
        const cleanHeadline = headline.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '').substring(0, 20)
        if (cleanHeadline)
          return `${cleanHeadline}_headline`
      }
      return `${baseKey}_${sliceIndex + 1}`
    }
  }

  return baseKey
}

async function extractFieldValue(value: any, pageSlug: string, fieldPath: string = ''): Promise<any> {
  // Null/undefined
  if (value === null || value === undefined)
    return null

  // RichText → markdown
  if (isRichTextField(value)) {
    return richTextToMarkdown(value)
  }

  // Image → download + local path
  if (isImageField(value)) {
    const imageUrl = value.url
    if (imageUrl) {
      const fileName = normalizeFileName(imageUrl.split('/').pop() || 'image')
      const localPath = `/images/pages/${pageSlug}/${fieldPath.replace(/[^a-z0-9]+/g, '-')}-${fileName}`
      try {
        await downloadImage(imageUrl, localPath)
      }
      catch {
        consola.warn(`⚠ Failed to download image: ${imageUrl}`)
      }
      return localPath
    }
    return null
  }

  // Link → URL string
  if (isLinkField(value)) {
    return convertLinkToUrl(value)
  }

  // Array → recurse
  if (Array.isArray(value)) {
    return Promise.all(value.map((item, idx) => extractFieldValue(item, pageSlug, `${fieldPath}_${idx}`)))
  }

  // Object → recurse
  if (typeof value === 'object') {
    const result: any = {}
    for (const [key, val] of Object.entries(value)) {
      if (shouldSkipField(key))
        continue
      result[key] = await extractFieldValue(val, pageSlug, `${fieldPath}_${key}`)
    }
    return result
  }

  // Primitive → return as-is
  return value
}

async function convertSliceToData(slice: any, pageSlug: string, sliceKey: string): Promise<any> {
  const data: any = {}

  // Extract primary fields
  if (slice.primary) {
    for (const [key, value] of Object.entries(slice.primary)) {
      if (shouldSkipField(key))
        continue
      data[key] = await extractFieldValue(value, pageSlug, `${sliceKey}_${key}`)
    }
  }

  // Extract items array
  if (slice.items && Array.isArray(slice.items) && slice.items.length > 0) {
    data.items = await Promise.all(
      slice.items.map((item: any, idx: number) => extractFieldValue(item, pageSlug, `${sliceKey}_item_${idx}`)),
    )
  }

  return data
}

function objectToYaml(obj: any, indent: number = 0): string {
  const spaces = ' '.repeat(indent)
  let yaml = ''

  for (const [key, value] of Object.entries(obj)) {
    if (value === null || value === undefined)
      continue

    if (typeof value === 'string') {
      // Multiline strings
      if (value.includes('\n')) {
        yaml += `${spaces}${key}: |\n`
        const lines = value.split('\n')
        for (const line of lines) {
          yaml += `${spaces}  ${line}\n`
        }
      }
      else {
        // Escape quotes and special YAML chars
        const escaped = value.replace(/"/g, '\\"')
        yaml += `${spaces}${key}: "${escaped}"\n`
      }
    }
    else if (typeof value === 'number' || typeof value === 'boolean') {
      yaml += `${spaces}${key}: ${value}\n`
    }
    else if (Array.isArray(value)) {
      if (value.length === 0) {
        yaml += `${spaces}${key}: []\n`
      }
      else if (typeof value[0] === 'object') {
        yaml += `${spaces}${key}:\n`
        for (const item of value) {
          yaml += `${spaces}  -\n`
          const itemYaml = objectToYaml(item, indent + 4)
          yaml += itemYaml
        }
      }
      else {
        yaml += `${spaces}${key}:\n`
        for (const item of value) {
          const escaped = typeof item === 'string' ? item.replace(/"/g, '\\"') : item
          yaml += `${spaces}  - "${escaped}"\n`
        }
      }
    }
    else if (typeof value === 'object') {
      yaml += `${spaces}${key}:\n`
      yaml += objectToYaml(value, indent + 2)
    }
  }

  return yaml
}

async function convertPageToYAML(doc: PageDocument, navigation?: NavigationDocument | null): Promise<string> {
  const pageSlug = doc.uid
  const sections: Record<string, any> = {}

  // Extract meta
  sections.meta = {
    title: doc.data.meta_title || '',
    description: doc.data.meta_description || '',
    keywords: doc.data.meta_keywords || '',
  }

  if (doc.data.meta_image?.url) {
    const imageUrl = doc.data.meta_image.url
    const fileName = normalizeFileName(imageUrl.split('/').pop() || 'og-image')
    const localPath = `/images/pages/${pageSlug}/og-${fileName}`
    try {
      await downloadImage(imageUrl, localPath)
      sections.meta.image = localPath
    }
    catch {
      consola.warn(`⚠ Failed to download og-image: ${imageUrl}`)
    }
  }

  // Process slices
  if (doc.data.slices && doc.data.slices.length > 0) {
    for (let i = 0; i < doc.data.slices.length; i++) {
      const slice = doc.data.slices[i]
      const sliceKey = getSliceKeyName(slice, i, doc.data.slices)
      consola.info(`Processing slice: ${slice.slice_type} → ${sliceKey}`)

      try {
        const sliceData = await convertSliceToData(slice, pageSlug, sliceKey)
        sections[sliceKey] = sliceData
      }
      catch (error) {
        consola.warn(`⚠ Failed to process slice ${sliceKey}:`, error)
      }
    }
  }

  // Add footer section from navigation if available
  if (navigation?.data) {
    sections.footer = {
      newsletterCta: navigation.data.newsletterCta || '',
      newsletterPlaceholder: navigation.data.newsletterPlaceholder || '',
      socialMediaCta: navigation.data.socialMediaCta || '',
      nimiqShortDescription: navigation.data.nimiqShortDescription || '',
    }
  }

  // Generate YAML
  let yaml = '---\n'
  yaml += objectToYaml(sections, 0)
  yaml += '---\n'

  return yaml
}

async function syncPages(): Promise<ConversionStats> {
  const stats: ConversionStats = { success: 0, failed: 0, errors: [] }

  try {
    const pages = await fetchDocuments<PageDocument>('page', 'pages')

    if (pages.length === 0) {
      consola.warn('No pages found')
      return stats
    }

    // Fetch navigation singleton for footer data
    const navigation = await fetchNavigationSingleton()
    if (navigation) {
      consola.success('Fetched navigation document for footer data')
    }

    const contentDir = join(process.cwd(), 'content', 'pages')
    await mkdir(contentDir, { recursive: true })

    consola.start(`Converting ${pages.length} page(s)...\n`)

    for (const page of pages) {
      try {
        const yaml = await convertPageToYAML(page, navigation)
        const filepath = join(contentDir, `${page.uid}.yml`)
        await writeFile(filepath, yaml, 'utf-8')
        stats.success++
        consola.success(`✓ ${page.uid}`)
      }
      catch (error) {
        stats.failed++
        stats.errors.push({ uid: page.uid, error })
        consola.error(`✗ ${page.uid}:`, error)
      }
    }
  }
  catch (error) {
    consola.error('Pages sync failed:', error)
    throw error
  }

  return stats
}

async function syncExchanges(): Promise<ConversionStats> {
  const stats: ConversionStats = { success: 0, failed: 0, errors: [] }

  try {
    const exchanges = await fetchDocuments<ExchangeDocument>('exchange', 'exchanges')
    consola.start(`Converting ${exchanges.length} exchanges...\n`)

    for (const doc of exchanges) {
      try {
        const { yaml, logoUrl, logoPath } = await convertExchange(doc)

        // Download logo if exists
        if (logoUrl && logoPath) {
          try {
            await downloadImage(logoUrl, logoPath)
          }
          catch {
            consola.warn(`⚠ Failed to download logo for ${doc.uid}: ${logoUrl}`)
          }
        }

        await saveYamlFile(doc.uid, yaml)
        stats.success++
        consola.success(`✓ ${doc.uid}`)
      }
      catch (error) {
        stats.failed++
        stats.errors.push({ uid: doc.uid, error })
        consola.error(`✗ ${doc.uid}:`, error)
      }
    }
  }
  catch (error) {
    consola.error('Exchange sync failed:', error)
    throw error
  }

  return stats
}

async function main() {
  if (!PRISMIC_TOKEN) {
    consola.error('PRISMIC_ACCESS_TOKEN not found in environment')
    process.exit(1)
  }

  const totalStartTime = Date.now()
  consola.info('Starting Prismic content sync...\n')

  try {
    const blogStartTime = Date.now()
    const blogStats = await syncBlogs()
    const blogTime = ((Date.now() - blogStartTime) / 1000).toFixed(2)

    consola.info('\n')

    const exchangeStartTime = Date.now()
    const exchangeStats = await syncExchanges()
    const exchangeTime = ((Date.now() - exchangeStartTime) / 1000).toFixed(2)

    consola.info('\n')

    const pageStartTime = Date.now()
    const pageStats = await syncPages()
    const pageTime = ((Date.now() - pageStartTime) / 1000).toFixed(2)

    const totalTime = ((Date.now() - totalStartTime) / 1000).toFixed(2)
    const totalSuccess = blogStats.success + exchangeStats.success + pageStats.success
    const totalFailed = blogStats.failed + exchangeStats.failed + pageStats.failed
    const allErrors = [...blogStats.errors, ...exchangeStats.errors, ...pageStats.errors]

    consola.box({
      title: 'Content Sync Complete',
      message: `
Blog Sync: ✓ ${blogStats.success} ✗ ${blogStats.failed} (${blogTime}s)
Exchange Sync: ✓ ${exchangeStats.success} ✗ ${exchangeStats.failed} (${exchangeTime}s)
Page Sync: ✓ ${pageStats.success} ✗ ${pageStats.failed} (${pageTime}s)
Total: ✓ ${totalSuccess} ✗ ${totalFailed}

Total time: ${totalTime}s

${allErrors.length > 0 ? `Errors:\n${allErrors.map(e => `- ${e.uid}: ${e.error}`).join('\n')}` : ''}
      `.trim(),
    })

    if (totalFailed > 0) {
      process.exit(1)
    }
  }
  catch (error) {
    consola.error('Sync failed:', error)
    process.exit(1)
  }
}

main()
