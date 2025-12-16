import { mkdir, readFile, stat, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import process from 'node:process'
import { consola } from 'consola'
import yaml from 'js-yaml'
import { blogImageToLocalPath, downloadImage, exchangeLogoToLocalPath, normalizeFileName, richTextToMarkdown, richTextToPlainText, richTextToPlainTextNoHeaders, sanitizeMarkdownHtmlLinks } from './utils'
import 'dotenv/config'

// CLI flags
const USE_CACHE = process.argv.includes('--cache')
const FORCE_REFRESH = process.argv.includes('--force')
const INCREMENTAL = process.argv.includes('--incremental')
const SYNC_PAGES = process.argv.includes('--pages')
const CACHE_DIR = join(process.cwd(), 'scripts', 'prismic-data')

// Local type definitions for Prismic documents (previously in prismicio-types.d.ts)
interface PrismicDocument<T = any> {
  id: string
  uid: string
  type: string
  href: string
  tags: string[]
  first_publication_date: string
  last_publication_date: string
  slugs: string[]
  data: T
}

interface BlogPageData {
  title: any[]
  subline: any[]
  text?: any[]
  body?: any[]
  image?: { url?: string, alt?: string, dimensions?: { width: number, height: number } }
  meta_image?: { url?: string, alt?: string }
  meta_title?: string
  meta_description?: string
  publish_date?: string
  authors: Array<{ name: string }>
}

interface ExchangeData {
  name: string
  logo?: { url?: string }
  link?: { url?: string, href?: string, link_type?: string }
}

interface NavigationData {
  newsletterCta?: string
  newsletterPlaceholder?: string
  socialMediaCta?: string
  nimiqShortDescription?: string
}

interface PageData {
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  meta_image?: { url?: string }
  slices?: any[]
}

type BlogPageDocument = PrismicDocument<BlogPageData>
type ExchangeDocument = PrismicDocument<ExchangeData>
type NavigationDocument = PrismicDocument<NavigationData>
type PageDocument = PrismicDocument<PageData>

// ============================================================================
// Cache Functions
// ============================================================================

async function ensureCacheDir() {
  await mkdir(CACHE_DIR, { recursive: true })
}

async function saveToCache(type: string, data: any) {
  await ensureCacheDir()
  const filepath = join(CACHE_DIR, `${type}.json`)
  await writeFile(filepath, JSON.stringify(data, null, 2), 'utf-8')
  consola.info(`Cached ${type} data to ${filepath}`)
}

async function loadFromCache<T>(type: string): Promise<T[] | null> {
  try {
    const filepath = join(CACHE_DIR, `${type}.json`)
    const content = await readFile(filepath, 'utf-8')
    const data = JSON.parse(content) as T[]
    consola.info(`Loaded ${data.length} ${type} from cache`)
    return data
  }
  catch {
    return null
  }
}

async function _fileExists(filepath: string): Promise<boolean> {
  try {
    await stat(filepath)
    return true
  }
  catch {
    return false
  }
}

async function getFileModTime(filepath: string): Promise<Date | null> {
  try {
    const stats = await stat(filepath)
    return stats.mtime
  }
  catch {
    return null
  }
}

function shouldUpdateFile(lastPublicationDate: string, fileModTime: Date | null): boolean {
  if (!fileModTime)
    return true // File doesn't exist, create it
  const pubDate = new Date(lastPublicationDate)
  return pubDate > fileModTime
}

const PRISMIC_API = 'https://nimiq.cdn.prismic.io/api/v2'
const PRISMIC_TOKEN = process.env.PRISMIC_ACCESS_TOKEN
const OUTPUT_DIR = process.env.OUTPUT_DIR || 'content'

// Pages to skip during sync (not in Prismic or handled manually)
const SKIP_PAGES = ['november']

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
  // Try to load from cache first (unless force refresh)
  if (USE_CACHE && !FORCE_REFRESH) {
    const cached = await loadFromCache<T>(type)
    if (cached)
      return cached
    consola.warn(`No cache found for ${type}, fetching from Prismic...`)
  }

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

  // Save to cache for future use
  await saveToCache(type, allDocs)

  return allDocs
}

async function _fetchNavigationSingleton(): Promise<NavigationDocument | null> {
  // Try to load from cache first (unless force refresh)
  if (USE_CACHE && !FORCE_REFRESH) {
    const cached = await loadFromCache<NavigationDocument>('navigation')
    if (cached && cached.length > 0)
      return cached[0]
  }

  try {
    const ref = await getMasterRef()
    const url = new URL(`${PRISMIC_API}/documents/search`)
    url.searchParams.set('q', '[[at(document.type,"navigation")]]')
    url.searchParams.set('pageSize', '1')
    url.searchParams.set('ref', ref)
    url.searchParams.set('access_token', PRISMIC_TOKEN!)

    const response = await fetch(url.href)
    const data = await response.json()
    const nav = data.results[0] || null

    // Save to cache for future use
    if (nav)
      await saveToCache('navigation', [nav])

    return nav
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

  // Clean and generate YAML
  const cleanedFrontmatter = cleanObject(frontmatter)
  const yamlContent = yaml.dump(cleanedFrontmatter, {
    indent: 2,
    lineWidth: -1,
    noRefs: true,
    quotingType: '"',
    forceQuotes: false,
  })

  return `---\n${yamlContent}---\n`
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
    // Replace unusual line terminators (Line Separator U+2028, Paragraph Separator U+2029) with newlines
    .replace(/[\u2028\u2029]/g, '\n')
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
  const contentDir = join(process.cwd(), OUTPUT_DIR, 'blog')
  await mkdir(contentDir, { recursive: true })

  // Extract year-month-day from publish date
  const date = new Date(publishDate)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const datePrefix = `${year}-${month}-${day}`

  // Sanitize HTML links in markdown content
  const sanitizedContent = sanitizeMarkdownHtmlLinks(content)

  const filepath = join(contentDir, `${datePrefix}_${slug}.md`)
  await writeFile(filepath, sanitizedContent, 'utf-8')
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

  // Clean and generate YAML
  const cleanedFrontmatter = cleanObject(frontmatter)
  const yamlContent = yaml.dump(cleanedFrontmatter, {
    indent: 2,
    lineWidth: -1,
    noRefs: true,
    quotingType: '"',
    forceQuotes: false,
  })

  return {
    yaml: `---\n${yamlContent}---\n`,
    logoUrl,
    logoPath,
  }
}

async function saveYamlFile(slug: string, content: string): Promise<void> {
  const contentDir = join(process.cwd(), OUTPUT_DIR, 'collections', 'exchanges')
  await mkdir(contentDir, { recursive: true })

  // Strip "exchange-" prefix if present
  const cleanSlug = slug.replace(/^exchange-/, '')
  const filepath = join(contentDir, `${cleanSlug}.yaml`)
  // Sanitize line terminators before writing
  await writeFile(filepath, cleanMarkdown(content), 'utf-8')
}

function getBlogFilepath(slug: string, publishDate: string): string {
  const date = new Date(publishDate)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const datePrefix = `${year}-${month}-${day}`
  return join(process.cwd(), OUTPUT_DIR, 'blog', `${datePrefix}_${slug}.md`)
}

async function syncBlogs(): Promise<ConversionStats> {
  const stats: ConversionStats = { success: 0, failed: 0, errors: [] }
  let skipped = 0

  try {
    const posts = await fetchDocuments<BlogPageDocument>('blog_page', 'blog posts')
    consola.start(`Converting ${posts.length} blog posts...\n`)

    for (const doc of posts) {
      try {
        const publishDate = doc.data.publish_date || doc.first_publication_date
        const filepath = getBlogFilepath(doc.uid, publishDate)

        // Incremental sync: skip if file is up-to-date
        if (INCREMENTAL && !FORCE_REFRESH) {
          const fileModTime = await getFileModTime(filepath)
          if (!shouldUpdateFile(doc.last_publication_date, fileModTime)) {
            skipped++
            continue
          }
        }

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

    if (skipped > 0) {
      consola.info(`⏭ Skipped ${skipped} unchanged blog posts`)
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

const RICHTEXT_TYPES = ['heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'paragraph', 'preformatted', 'list-item', 'o-list-item', 'image', 'embed', 'hyperlink']

function isRichTextField(value: any): boolean {
  return Array.isArray(value) && value.length > 0 && RICHTEXT_TYPES.includes(value[0]?.type)
}

function isImageField(value: any): boolean {
  return value && typeof value === 'object' && value.url && (value.dimensions || value.alt !== undefined)
}

function isLinkField(value: any): boolean {
  return value && typeof value === 'object' && value.link_type
}

function shouldSkipField(key: string): boolean {
  const skipFields = ['id', 'slice_type', 'slice_label', 'variation', 'version', 'dimensions', 'edit', 'link_type', 'target', 'spans', 'backgroundColor', 'draft', 'bgColor', 'backgroundPattern', 'color']
  return skipFields.includes(key)
}

// Transform icon names from Prismic format to content format
// - Strips 'i-' prefix from all icons
// - Transforms roadmap-specific icons to logos icons
function transformIconName(iconName: string): string {
  if (!iconName || typeof iconName !== 'string')
    return iconName

  // Strip 'i-' prefix
  let result = iconName.startsWith('i-') ? iconName.slice(2) : iconName

  // Roadmap-specific icon transformations
  const roadmapIconMap: Record<string, string> = {
    'roadmap:js': 'logos:javascript',
    'roadmap:rust': 'logos:rust',
    'roadmap:wasm': 'logos:webassembly',
  }

  // Check for roadmap icon mappings (with optional extra classes like "relative scale-120")
  for (const [from, to] of Object.entries(roadmapIconMap)) {
    if (result.startsWith(from)) {
      result = to + result.slice(from.length)
      break
    }
  }

  return result
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

function _sliceTypeToComponentName(sliceType: string): string {
  const componentMap: Record<string, string> = {
    hero_section: 'HeroSection',
    apps_showcase: 'AppsShowcase',
    banner_slice: 'BannerSlice',
    albatross_liveview: 'AlbatrossLiveview',
    albatross_technical_details: 'AlbatrossTechnicalDetails',
    prestaking_grid: 'PrestakingGrid',
    crypto_map_continent_selector: 'CryptoMapContinentSelector',
    logos_grid: 'LogosGrid',
    grid_section: 'GridSection',
    simple_carousel: 'SimpleCarousel',
    rich_text: 'RichText',
    new_york_grid: 'NewYorkGrid',
    newsletter_subscription: 'NewsletterSubscription',
    latest_blogpost: 'LatestBlogpost',
    cta_section: 'CtaSection',
    hero_stats: 'HeroStats',
    exchanges_showcase: 'ExchangesShowcase',
    exchanges_grid: 'ExchangesGrid',
    flags_marquee: 'FlagsMarquee',
    contact_form: 'ContactForm',
    blogposts_grid: 'BlogpostsGrid',
    cards_carousel: 'CardsCarousel',
    buy_sell_wallet: 'BuySellWallet',
    consensus_map: 'ConsensusMap',
    roadmap: 'Roadmap',
    app_gallery: 'AppGalleryCta',
    staking_calculator: 'StakingCalculator',
    staking_distribution: 'StakingDistribution',
    staking_faq: 'StakingFaq',
    validator_list: 'ValidatorList',
    vertical_video: 'VerticalVideo',
    youtube_video: 'YoutubeVideo',
    team_members: 'TeamMembers',
    whitepaper_slice: 'WhitepaperSlice',
    tilted_media: 'TiltedMedia',
    stepped_slides: 'SteppedSlides',
    social_media_grid: 'SocialMediaGrid',
    rich_text_carousel: 'RichTextCarousel',
    stepped_lottie: 'SteppedLottie',
    staking_slice: 'StakingSlice',
    rich_text_cards: 'RichTextCards',
    puzzle_grid: 'PuzzleGrid',
    lottie_slice: 'LottieSlice',
    large_grid: 'LargeGrid',
    link_grid: 'LinkGrid',
    zig_zag_content: 'ZigZagContent',
    pill_link: 'PillLink',
    quote: 'Quote',
    wallet_playground: 'WalletPlayground',
    currency_comparison: 'CurrencyComparison',
    wallet_words_challenge: 'WalletWordsChallenge',
    newsletter_form: 'NewsletterForm',
    nimiq_wallet_hoverable: 'NimiqWalletHoverable',
    nim_token_distribution: 'NimTokenDistribution',
    simple_headline: 'SimpleHeadline',
  }
  return componentMap[sliceType] || sliceType
}

function getSliceKeyName(slice: any, index: number, allSlices: any[]): string {
  const typeMap: Record<string, string> = {
    hero_section: 'hero',
    apps_showcase: 'apps',
    banner_slice: 'banner',
    albatross_liveview: 'albatross',
    albatross_technical_details: 'albatrossDetails',
    prestaking_grid: 'prestaking',
    crypto_map_continent_selector: 'cryptoMap',
    logos_grid: 'logos',
    grid_section: 'grid',
    simple_carousel: 'carousel',
    rich_text: 'content',
    new_york_grid: 'newYork',
    newsletter_subscription: 'newsletter',
    latest_blogpost: 'latestBlog',
    cta_section: 'cta',
    hero_stats: 'heroStats',
    exchanges_showcase: 'exchanges',
    exchanges_grid: 'exchangesGrid',
    flags_marquee: 'flags',
    contact_form: 'contact',
    blogposts_grid: 'blogGrid',
    cards_carousel: 'cards',
    buy_sell_wallet: 'buySell',
    consensus_map: 'consensus',
    roadmap: 'roadmap',
    app_gallery: 'appGallery',
    staking_calculator: 'stakingCalculator',
    staking_distribution: 'stakingDistribution',
    staking_faq: 'stakingFaq',
    validator_list: 'validators',
    vertical_video: 'video',
    youtube_video: 'youtube',
    team_members: 'team',
    whitepaper_slice: 'whitepaper',
    tilted_media: 'tiltedMedia',
    stepped_slides: 'steppedSlides',
    social_media_grid: 'socialMedia',
    rich_text_carousel: 'textCarousel',
    stepped_lottie: 'steppedLottie',
    staking_slice: 'staking',
    rich_text_cards: 'textCards',
    puzzle_grid: 'puzzle',
    lottie_slice: 'lottie',
    large_grid: 'largeGrid',
    link_grid: 'links',
    zig_zag_content: 'zigzag',
    pill_link: 'pillLink',
    quote: 'quote',
    wallet_playground: 'walletPlayground',
    currency_comparison: 'currencyComparison',
    wallet_words_challenge: 'walletChallenge',
    newsletter_form: 'newsletterForm',
    nimiq_wallet_hoverable: 'walletHover',
    nim_token_distribution: 'tokenDistribution',
    simple_headline: 'simpleHeadline',
  }

  const baseKey = typeMap[slice.slice_type] || slice.slice_type

  // Headline key overrides for specific headlines (to match manually edited content)
  const headlineKeyOverrides: Record<string, string> = {
    'an instant zero fee and green alternative': 'anInstantZeroFeeHeadline',
    'stake nim at': 'stakingHeadline',
    'stake nim and get': 'stakingHeadline',
    'join our live community': 'joinOurLiveCommunityHeadline',
    'nimiq s mission': 'nimiqsMissionHeadline',
    'meet the people behind': 'meetThePeopleBehindHeadline',
    'what is the nimiq pay': 'whatIsTheNimiqPayHeadline',
    'one app to pool them': 'oneAppToPoolThemHeadline',
    'discover a whole ecosystem': 'discoverAWholeEcosystemHeadline',
    'what is cryptopayment': 'whatIsCryptopaymentlinkHeadline',
    'active and decentralized': 'activeAndDecentralizedHeadline',
    'so easy everyone can': 'soEasyEveryoneCanHeadline',
    'let others do the work': 'letOthersDoTheWorkHeadline',
    'stake in the nimiq wallet': 'stakeInTheNimiqWalletHeadline',
    'no download no personal': 'noDownloadNoPersonalHeadline',
    'one of the smallest': 'oneOfTheSmallestHeadline',
    'no email or download': 'noEmailOrDownloadHeadline',
    'oasis is an open tech': 'oasisIsAnOpenTechHeadline',
    'collaborate with nimiq': 'collaborateWithNimiqHeadline',
    'how does it work': 'howDoesItWorkHeadline',
    'no nimiq account yet': 'noNimiqAccountYetHeadline',
    '24 words better than': 'twentyFourWordsHeadline',
    'feedback': 'feedbackHeadline',
    'get in touch': 'getInTouchHeadline',
    'nimiq community apps': 'nimiqCommunityAppsHeadline',
    'roadmap': 'roadmapHeadline',
    'buy nim in the wallet': 'buyNimInTheWalletHeadline',
    'super simple super secure': 'superSimpleSuperSecureHeadline',
    'implement supersimpleswap': 'implementSupersimpleswapHeadline',
    'events meetups': 'eventsMeetupsHeadline',
  }

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
        // Normalize headline for matching (remove punctuation)
        const headlineNormalized = headline.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim()

        // Check for override
        for (const [pattern, key] of Object.entries(headlineKeyOverrides)) {
          if (headlineNormalized.includes(pattern)) {
            return key
          }
        }

        // Fallback: convert headline to camelCase key
        const cleanHeadline = headlineNormalized.split(' ').map((word, i) => i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('').substring(0, 30)
        if (cleanHeadline)
          return `${cleanHeadline}Headline`
      }
      // For numbered duplicates, use baseKey2, baseKey3, etc.
      return `${baseKey}${sliceIndex + 1}`
    }
  }

  return baseKey
}

// Slices to skip entirely (removed from content)
const SKIP_SLICES: Record<string, string[]> = {
  home: ['stakingHeadline'], // stakingHeadline has custom content
  oasis: ['links'],
  community: ['cards', 'eventsMeetupsHeadline'],
  wallet: ['stakingHeadline'],
  apps: ['apps', 'footer', 'simpleHeadline'], // Apps page has fully custom structure
}

// Page-specific frontmatter key renames (sliceKey → frontmatterKey)
const FRONTMATTER_KEY_RENAMES: Record<string, Record<string, string>> = {
  'buy-and-sell': { banner: 'buyAndSellBanner' },
}

// Page-specific MDC key overrides (frontmatterKey → mdcKey)
const _PAGE_KEY_OVERRIDES: Record<string, Record<string, string>> = {
  'buy-and-sell': { buyAndSellBanner: 'banner', exchangesGrid: 'exchanges_grid' },
}

// Page-specific content overrides (manual customizations)
const PAGE_CONTENT_OVERRIDES: Record<string, Record<string, any>> = {
  home: {
    // Custom staking headline (different content from Prismic)
    stakingHeadline: {
      headline: 'Stake NIM at {{ interestPerAnnum }} p.a.',
      subline: 'Deposit your NIM to strengthen the network and create new NIM.',
      link: '/staking',
      stakingNote: 'average return based on the current distribution. This is not financial advice.',
    },
    // Custom grid images (simplified names)
    _gridImageOverrides: {
      0: '/images/pages/home/email.svg',
      1: '/images/pages/home/card.svg',
      2: '/images/pages/home/stats.svg',
    },
  },
  apps: {
    // Apps page has fully custom structure - handled separately
    _customPage: true,
    meta: {
      title: 'Apps | Nimiq',
      description: 'Discover an ever growing ecosystem, built by Team Nimiq and its amazing community.',
    },
  },
  wallet: {
    // Banner has draft field
    _bannerDraft: true,
  },
}

// Custom MDC order per page (some pages skip certain MDC tags)
const _PAGE_MDC_SKIP: Record<string, string[]> = {
  home: ['stakingHeadline'], // stakingHeadline added to content but no MDC tag
  apps: ['hero', 'simpleHeadline'], // Apps page has no MDC tags
}

// Image path overrides (to maintain backward compatibility with existing paths)
const IMAGE_PATH_OVERRIDES: Record<string, Record<string, string>> = {
  'buy-and-sell': {
    'hero-powered-by-logo': 'hero-powered-y-ogo',
    'wallet-hover-powered-by-logos-0-logo': 'wallet-hover-powered-y-ogos-0-logo',
    'wallet-hover-powered-by-logos-1-logo': 'wallet-hover-powered-y-ogos-1-logo',
  },
  'community': {
    'new-york-first-block-first-image': 'new-york-first-lock-irst-mage',
    'new-york-second-block-first-image': 'new-york-second-lock-irst-mage',
  },
  'contact': {
    'contact-recipient-image': 'contact-recipient-mage',
  },
  'oasis': {
    'contact-recipient-image': 'contact-recipient-mage',
  },
  'supersimpleswap': {
    'grid2-item-0-icon': 'grid-2-item-0-icon',
    'grid2-item-1-icon': 'grid-2-item-1-icon',
    'grid2-item-2-icon': 'grid-2-item-2-icon',
    'contact-recipient-image': 'contact-recipient-mage',
  },
  'staking': {
    'video-background-image': 'video-background-mage',
  },
  'nimiq-pay': {
    'text-carousel2-item-0-slide': 'text-carousel-2-item-0-slide',
    'text-carousel2-item-0-button-logo': 'text-carousel-2-item-0-button-ogo',
    'text-carousel2-item-1-slide': 'text-carousel-2-item-1-slide',
    'text-carousel2-item-2-slide': 'text-carousel-2-item-2-slide',
    'text-carousel2-item-3-slide': 'text-carousel-2-item-3-slide',
    'text-carousel2-item-3-button-logo': 'text-carousel-2-item-3-button-ogo',
    'text-carousel2-item-4-slide': 'text-carousel-2-item-4-slide',
    'text-carousel2-item-5-slide': 'text-carousel-2-item-5-slide',
    'text-carousel2-item-6-button-logo': 'text-carousel-2-item-6-button-ogo',
    'text-carousel2-item-7-button-logo': 'text-carousel-2-item-7-button-ogo',
  },
}

async function extractFieldValue(value: any, pageSlug: string, fieldPath: string = ''): Promise<any> {
  // Null/undefined
  if (value === null || value === undefined)
    return null

  // RichText → plain text (no markdown headers for page YAML)
  if (isRichTextField(value)) {
    try {
      return richTextToPlainTextNoHeaders(value)
    }
    catch {
      // Fallback: extract text manually if richtext parsing fails
      return value.map((node: any) => node.text || '').join(' ').trim() || null
    }
  }

  // Image → download + local path
  if (isImageField(value)) {
    const imageUrl = value.url
    if (imageUrl) {
      const fileName = normalizeFileName(imageUrl.split('/').pop() || 'image')
      // Convert fieldPath to kebab-case: camelCase → kebab-case, then replace non-alphanumeric
      let pathSegment = fieldPath
        .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase → camel-Case
        .replace(/[^a-z0-9]+/gi, '-') // non-alphanumeric → dash
        .toLowerCase()

      // Apply image path overrides for backward compatibility with existing content
      const pageOverrides = IMAGE_PATH_OVERRIDES[pageSlug] || {}
      for (const [correctPath, legacyPath] of Object.entries(pageOverrides)) {
        if (pathSegment.includes(correctPath)) {
          pathSegment = pathSegment.replace(correctPath, legacyPath)
          break
        }
      }

      const localPath = `/images/pages/${pageSlug}/${pathSegment}-${fileName}`
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
      // Transform icon/iconName using helper (strips 'i-' prefix, transforms roadmap icons)
      if ((key === 'iconName' || key === 'icon') && typeof val === 'string') {
        result[key] = transformIconName(val)
        continue
      }
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
      // Transform icon/iconName using helper (strips 'i-' prefix, transforms roadmap icons)
      if ((key === 'iconName' || key === 'icon') && typeof value === 'string') {
        data[key] = transformIconName(value)
        continue
      }
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

// Post-process YAML to add double quotes to specific fields that need them
// (maintains backward compatibility with manually edited content/ files)
function postProcessYamlQuoting(yamlContent: string, pageSlug: string): string {
  // Quote strings containing {{ (template syntax)
  yamlContent = yamlContent.replace(
    /^(\s+\w+:\s*)(\{\{[^"\n]+)$/gm,
    '$1"$2"',
  )

  // Page-specific quoting patterns
  if (pageSlug === 'home') {
    // Quote all values in stakingHeadline section (except link which is URL)
    yamlContent = yamlContent.replace(
      /(stakingHeadline:\n)([\s\S]*?)(?=\n\w+:|$)/,
      (match, header, content) => {
        const quotedContent = content.replace(
          /^( {2})(headline|subline|stakingNote)(: )([^\n"]+)$/gm,
          '$1$2$3"$4"',
        )
        return header + quotedContent
      },
    )
  }

  return yamlContent
}

function cleanObject(obj: any): any {
  if (obj === null || obj === undefined)
    return undefined
  if (typeof obj === 'string') {
    const trimmed = obj.trim()
    return trimmed === '' ? undefined : trimmed
  }
  if (Array.isArray(obj)) {
    const cleaned = obj.map(cleanObject).filter(item => item !== undefined)
    return cleaned.length === 0 ? undefined : cleaned
  }
  if (typeof obj === 'object') {
    const cleaned: any = {}
    for (const [key, value] of Object.entries(obj)) {
      const cleanedValue = cleanObject(value)
      if (cleanedValue !== undefined)
        cleaned[key] = cleanedValue
    }
    return Object.keys(cleaned).length === 0 ? undefined : cleaned
  }
  return obj
}

async function convertPageToYAML(doc: PageDocument): Promise<string> {
  const pageSlug = doc.uid
  const sections: Record<string, any> = {}
  const sliceKeys: Array<{ key: string, type: string }> = []

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
  const skipSlices = SKIP_SLICES[pageSlug] || []
  if (doc.data.slices && doc.data.slices.length > 0) {
    for (let i = 0; i < doc.data.slices.length; i++) {
      const slice = doc.data.slices[i]
      const sliceKey = getSliceKeyName(slice, i, doc.data.slices)

      // Skip slices that were removed from content
      if (skipSlices.includes(sliceKey)) {
        consola.info(`Skipping slice: ${slice.slice_type} → ${sliceKey}`)
        continue
      }

      // Apply page-specific frontmatter key renames
      const keyRenames = FRONTMATTER_KEY_RENAMES[pageSlug] || {}
      const finalKey = keyRenames[sliceKey] || sliceKey

      consola.info(`Processing slice: ${slice.slice_type} → ${finalKey}`)

      try {
        const sliceData = await convertSliceToData(slice, pageSlug, finalKey)
        sections[finalKey] = sliceData
        sliceKeys.push({ key: finalKey, type: slice.slice_type })
      }
      catch (error) {
        consola.warn(`⚠ Failed to process slice ${sliceKey}:`, error)
      }
    }
  }

  // Apply content overrides (manual customizations)
  const contentOverrides = PAGE_CONTENT_OVERRIDES[pageSlug] || {}
  for (const [key, value] of Object.entries(contentOverrides)) {
    if (!key.startsWith('_')) { // Skip internal keys like _gridImageOverrides
      sections[key] = value
    }
  }

  // Apply grid image overrides for home page
  if (pageSlug === 'home' && sections.grid?.items && contentOverrides._gridImageOverrides) {
    const imageOverrides = contentOverrides._gridImageOverrides as Record<number, string>
    for (const [idx, imagePath] of Object.entries(imageOverrides)) {
      if (sections.grid.items[Number(idx)]) {
        sections.grid.items[Number(idx)].image = imagePath
      }
    }
  }

  // Add draft: false to apps items for home page
  if (pageSlug === 'home' && sections.apps?.apps) {
    sections.apps.apps = sections.apps.apps.map((app: any) => ({ ...app, draft: false }))
  }

  // Add draft: true to banner for wallet page (position after overlapsNextSection)
  if (pageSlug === 'wallet' && sections.banner && contentOverrides._bannerDraft) {
    const { overlapsNextSection, ...rest } = sections.banner
    sections.banner = { overlapsNextSection, draft: true, ...rest }
  }

  // Transform community newYork to blocks array format
  if (pageSlug === 'community' && sections.newYork) {
    const ny = sections.newYork
    sections.newYork = {
      blocks: [
        {
          image: ny.firstBlockFirstImage,
          stats: [
            { label: ny.firstBlockFirstLabel, stat: ny.firstBlockFirstStat },
            { label: ny.firstBlockSecondLabel, stat: ny.firstBlockSecondStat },
          ],
        },
        {
          image: ny.secondBlockFirstImage,
          stats: [
            { label: ny.secondBlockFirstLabel, stat: ny.secondBlockFirstStat },
            { label: ny.secondBlockSecondLabel, stat: ny.secondBlockSecondStat },
          ],
        },
      ],
    }
  }

  // Transform tiltedMedia to simplified format: { src, poster? }
  if (sections.tiltedMedia) {
    const tm = sections.tiltedMedia
    const src = tm.media || tm.video?.embed_url || ''
    sections.tiltedMedia = { src, ...(tm.poster ? { poster: tm.poster } : {}) }
  }

  // Transform roadmap JSON layers - apply icon transformations using regex to preserve formatting
  if (pageSlug === 'roadmap' && sections.roadmap) {
    const transformLayerIcons = (jsonStr: string): string => {
      // Use regex to transform icon values while preserving JSON formatting
      return jsonStr.replace(/"icon":\s*"([^"]+)"/g, (_match, icon) => {
        return `"icon": "${transformIconName(icon)}"`
      })
    }
    if (sections.roadmap.firstLayer)
      sections.roadmap.firstLayer = transformLayerIcons(sections.roadmap.firstLayer)
    if (sections.roadmap.secondLayer)
      sections.roadmap.secondLayer = transformLayerIcons(sections.roadmap.secondLayer)
    if (sections.roadmap.thirdLayer)
      sections.roadmap.thirdLayer = transformLayerIcons(sections.roadmap.thirdLayer)
  }

  // Clean and generate YAML
  const cleanedSections = cleanObject(sections)
  let yamlContent = yaml.dump(cleanedSections, {
    indent: 2,
    lineWidth: -1, // Disable line wrapping
    noRefs: true, // Disable anchors/references
    quotingType: '"',
    forceQuotes: false,
  })

  // Post-process YAML to add quotes to fields that need them (contains {{ or specific patterns)
  yamlContent = postProcessYamlQuoting(yamlContent, pageSlug)

  return `---\n${yamlContent}---\n`
}

// Custom page generator for apps (has fully custom structure)
function generateAppsPage(doc: PageDocument): string {
  const heroSlice = doc.data.slices?.find((s: any) => s.slice_type === 'hero_section')
  const simpleHeadlineSlice = doc.data.slices?.find((s: any) => s.slice_type === 'simple_headline')

  const content = {
    meta: {
      title: 'Apps | Nimiq',
      description: 'Discover an ever growing ecosystem, built by Team Nimiq and its amazing community.',
    },
    hero: {
      headline: heroSlice?.primary?.headline?.[0]?.text || 'Nimiq Apps',
      subheadline: 'Discover an ever growing ecosystem, built by Team Nimiq and its amazing community.',
    },
    simpleHeadline: {
      headline: simpleHeadlineSlice?.primary?.headline?.[0]?.text || 'Add your app',
      subline: 'Develop with Nimiq. It\'s open source and easy to integrate. The developer center and the community are there to help.',
      cta: 'https://nimiq.dev',
    },
  }

  let yamlContent = yaml.dump(content, {
    indent: 2,
    lineWidth: -1,
    noRefs: true,
    quotingType: '"',
    forceQuotes: false,
  })

  // Add quotes to simpleHeadline.subline (contains apostrophe)
  yamlContent = yamlContent.replace(
    /(simpleHeadline:\n {2}headline: [^\n]+\n {2}subline: )([^\n]+)/,
    '$1"$2"',
  )

  return `---\n${yamlContent}---\n\n`
}

async function syncPages(): Promise<ConversionStats> {
  const stats: ConversionStats = { success: 0, failed: 0, errors: [] }
  let skipped = 0

  try {
    const pages = await fetchDocuments<PageDocument>('page', 'pages')

    if (pages.length === 0) {
      consola.warn('No pages found')
      return stats
    }

    const contentDir = join(process.cwd(), OUTPUT_DIR)
    await mkdir(contentDir, { recursive: true })

    // Filter out skipped pages
    const filteredPages = pages.filter(p => !SKIP_PAGES.includes(p.uid))
    consola.start(`Converting ${filteredPages.length} page(s) (skipping ${pages.length - filteredPages.length})...\n`)

    for (const page of filteredPages) {
      try {
        // Rename home to index for routing, use .md extension for MDC support
        const filename = page.uid === 'home' ? 'index.md' : `${page.uid}.md`
        const filepath = join(contentDir, filename)

        // Incremental sync: skip if file is up-to-date
        if (INCREMENTAL && !FORCE_REFRESH) {
          const fileModTime = await getFileModTime(filepath)
          if (!shouldUpdateFile(page.last_publication_date, fileModTime)) {
            skipped++
            continue
          }
        }

        // Use custom generator for apps page
        const rawContent = page.uid === 'apps'
          ? generateAppsPage(page)
          : await convertPageToYAML(page)
        // Sanitize line terminators before writing
        const content = cleanMarkdown(rawContent)
        await writeFile(filepath, content, 'utf-8')
        stats.success++
        consola.success(`✓ ${page.uid}`)
      }
      catch (error) {
        stats.failed++
        stats.errors.push({ uid: page.uid, error })
        consola.error(`✗ ${page.uid}:`, error)
      }
    }

    if (skipped > 0) {
      consola.info(`⏭ Skipped ${skipped} unchanged pages`)
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
  let skipped = 0

  try {
    const exchanges = await fetchDocuments<ExchangeDocument>('exchange', 'exchanges')
    consola.start(`Converting ${exchanges.length} exchanges...\n`)

    for (const doc of exchanges) {
      try {
        // Strip "exchange-" prefix for filepath
        const cleanSlug = doc.uid.replace(/^exchange-/, '')
        const filepath = join(process.cwd(), OUTPUT_DIR, 'collections', 'exchanges', `${cleanSlug}.yaml`)

        // Incremental sync: skip if file is up-to-date
        if (INCREMENTAL && !FORCE_REFRESH) {
          const fileModTime = await getFileModTime(filepath)
          if (!shouldUpdateFile(doc.last_publication_date, fileModTime)) {
            skipped++
            continue
          }
        }

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

    if (skipped > 0) {
      consola.info(`⏭ Skipped ${skipped} unchanged exchanges`)
    }
  }
  catch (error) {
    consola.error('Exchange sync failed:', error)
    throw error
  }

  return stats
}

async function main() {
  // Show help
  if (process.argv.includes('--help')) {
    console.log(`
Usage: pnpm tsx scripts/prismic-sync.ts [options]

Options:
  --pages        Sync pages from Prismic (disabled by default)
  --cache        Use cached Prismic responses (skip API calls if cache exists)
  --force        Force refresh from Prismic API (ignore cache)
  --incremental  Only update files that have changed since last sync
  --help         Show this help message

Examples:
  pnpm tsx scripts/prismic-sync.ts                    # Sync blogs + exchanges only
  pnpm tsx scripts/prismic-sync.ts --pages            # Sync everything including pages
  pnpm tsx scripts/prismic-sync.ts --cache            # Use cached data
  pnpm tsx scripts/prismic-sync.ts --incremental      # Only update changed files
  pnpm tsx scripts/prismic-sync.ts --force            # Force re-fetch all data
`)
    process.exit(0)
  }

  if (!PRISMIC_TOKEN) {
    consola.error('PRISMIC_ACCESS_TOKEN not found in environment')
    process.exit(1)
  }

  const totalStartTime = Date.now()
  const modes = []
  if (USE_CACHE)
    modes.push('cache')
  if (FORCE_REFRESH)
    modes.push('force-refresh')
  if (INCREMENTAL)
    modes.push('incremental')
  if (SYNC_PAGES)
    modes.push('pages')
  if (modes.length > 0) {
    consola.info(`Mode: ${modes.join(', ')}`)
  }
  consola.info('Starting Prismic content sync...\n')

  try {
    const blogStartTime = Date.now()
    const blogStats = await syncBlogs()
    const blogTime = ((Date.now() - blogStartTime) / 1000).toFixed(2)

    consola.info('\n')

    const exchangeStartTime = Date.now()
    const exchangeStats = await syncExchanges()
    const exchangeTime = ((Date.now() - exchangeStartTime) / 1000).toFixed(2)

    let pageStats: ConversionStats = { success: 0, failed: 0, errors: [] }
    let pageTime = '0.00'
    if (SYNC_PAGES) {
      consola.info('\n')
      const pageStartTime = Date.now()
      pageStats = await syncPages()
      pageTime = ((Date.now() - pageStartTime) / 1000).toFixed(2)
    }

    const totalTime = ((Date.now() - totalStartTime) / 1000).toFixed(2)
    const totalSuccess = blogStats.success + exchangeStats.success + pageStats.success
    const totalFailed = blogStats.failed + exchangeStats.failed + pageStats.failed
    const allErrors = [...blogStats.errors, ...exchangeStats.errors, ...pageStats.errors]

    const messageParts = [
      `Blog Sync: ✓ ${blogStats.success} ✗ ${blogStats.failed} (${blogTime}s)`,
      `Exchange Sync: ✓ ${exchangeStats.success} ✗ ${exchangeStats.failed} (${exchangeTime}s)`,
    ]
    if (SYNC_PAGES) {
      messageParts.push(`Page Sync: ✓ ${pageStats.success} ✗ ${pageStats.failed} (${pageTime}s)`)
    }
    messageParts.push(`Total: ✓ ${totalSuccess} ✗ ${totalFailed}`, '', `Total time: ${totalTime}s`)
    if (allErrors.length > 0) {
      messageParts.push('', `Errors:\n${allErrors.map(e => `- ${e.uid}: ${e.error}`).join('\n')}`)
    }

    consola.box({ title: 'Content Sync Complete', message: messageParts.join('\n') })

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
