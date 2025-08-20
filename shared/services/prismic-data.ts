import type { Query } from '@prismicio/client'
import type { BlogPageDocument, ExchangeDocument, NavigationDocument, PageDocument } from '~~/prismicio-types'
import { filter } from '@prismicio/client'
import { $fetch } from 'ofetch'
// Centralized service to avoid duplicate API calls between crawler and image downloader
import environment from '../../lib/env'
import { repositoryName } from '../../slicemachine.config.json'
import { extractImageUrlsWithMetadata } from '../utils/prismic-images'

export interface PrerenderPagesOptions {
  prismicAccessToken: string
  showDrafts?: boolean
}

interface ImageInfo {
  fileName: string
  originalFileName: string
  localPath: string
  originalUrl: string
  documentUid?: string
  documentType?: string
}

interface CachedData {
  pages: PageDocument[]
  blogPosts: BlogPageDocument[]
  navigation: NavigationDocument | null
  exchanges: ExchangeDocument[]
  allImageUrls: string[]
  allImages: ImageInfo[]
}

let cachedData: CachedData | null = null

export async function getPrismicData(options: PrerenderPagesOptions): Promise<CachedData> {
  // Always fetch fresh data (no persistent cache)
  return fetchFreshPrismicData(options)
}

/**
 * Fetch fresh Prismic data directly from API
 */
export async function fetchFreshPrismicData(options: PrerenderPagesOptions): Promise<CachedData> {
  console.warn('🌐 Fetching fresh Prismic data...')

  const [pages, blogPosts, navigation, exchanges] = await Promise.all([
    fetchPages(options),
    fetchBlogPosts(options),
    fetchNavigation(options),
    fetchExchanges(options),
  ])

  const baseUrl = environment.baseUrl

  const allImages: ImageInfo[] = []

  pages.forEach(doc => allImages.push(...extractImageUrlsWithMetadata(baseUrl, doc)))
  blogPosts.forEach(doc => allImages.push(...extractImageUrlsWithMetadata(baseUrl, doc)))
  if (navigation)
    allImages.push(...extractImageUrlsWithMetadata(baseUrl, navigation))
  exchanges.forEach(doc => allImages.push(...extractImageUrlsWithMetadata(baseUrl, doc)))

  // Remove duplicates and extract URLs
  const uniqueImages = Array.from(
    new Map(allImages.map(img => [img.originalUrl, img])).values(),
  )
  const allImageUrls = uniqueImages.map(img => img.originalUrl)

  cachedData = {
    pages,
    blogPosts,
    navigation,
    exchanges,
    allImageUrls,
    allImages: uniqueImages,
  }

  console.warn(`✅ Cached ${pages.length} pages, ${blogPosts.length} blog posts, ${exchanges.length} exchanges, and ${cachedData.allImages.length} unique images`)

  return cachedData
}

export function clearPrismicCache(): void {
  cachedData = null
  console.warn('🗑️ Cleared Prismic data cache')
}

/**
 * Clear all Prismic caches (only in-memory now)
 */
export async function clearAllPrismicCaches(): Promise<void> {
  clearPrismicCache()
}

export function getCachedPrismicData(): CachedData | null {
  return cachedData
}

// Individual fetch functions
async function fetchPages(options: PrerenderPagesOptions): Promise<PageDocument[]> {
  const url = await buildPrismicUrl('page', options)
  const allPages: PageDocument[] = []
  let page = 1

  while (true) {
    url.searchParams.set('page', page.toString())
    const { next_page, results } = await $fetch<Query<PageDocument>>(url.href)
    allPages.push(...results)

    if (next_page === null)
      break
    page++
  }

  return allPages
}

async function fetchBlogPosts(options: PrerenderPagesOptions): Promise<BlogPageDocument[]> {
  const url = await buildPrismicUrl('blog_page', options)
  const allPosts: BlogPageDocument[] = []
  let page = 1

  while (true) {
    url.searchParams.set('page', page.toString())
    const { next_page, results } = await $fetch<Query<BlogPageDocument>>(url.href)
    allPosts.push(...results)

    if (next_page === null)
      break
    page++
  }

  return allPosts
}

async function fetchNavigation(options: PrerenderPagesOptions): Promise<NavigationDocument | null> {
  try {
    const url = await buildPrismicUrl('navigation', options)
    url.searchParams.set('pageSize', '1')

    const { results } = await $fetch<Query<NavigationDocument>>(url.href)
    return results[0] || null
  }
  catch (error) {
    console.warn('⚠️ Failed to fetch navigation:', error)
    return null
  }
}

async function fetchExchanges(options: PrerenderPagesOptions): Promise<ExchangeDocument[]> {
  try {
    const url = await buildPrismicUrl('exchange', options)
    const allExchanges: ExchangeDocument[] = []
    let page = 1

    while (true) {
      url.searchParams.set('page', page.toString())
      const { next_page, results } = await $fetch<Query<ExchangeDocument>>(url.href)
      allExchanges.push(...results)

      if (next_page === null)
        break
      page++
    }

    return allExchanges
  }
  catch (error) {
    console.warn('⚠️ Failed to fetch exchanges:', error)
    return []
  }
}

// Shared URL building logic
const prismicUrl = new URL(`https://${repositoryName}.cdn.prismic.io`)
interface RefsResponse { refs: { id: 'master', ref: string }[] }
let ref: string

const supportsDrafts = ['blog_page', 'page']
async function buildPrismicUrl(documentType: 'blog_page' | 'page' | 'navigation' | 'exchange', { prismicAccessToken, showDrafts = false }: PrerenderPagesOptions) {
  if (!ref) {
    const refsUrl = new URL('/api/v2', prismicUrl)
    refsUrl.searchParams.set('access_token', prismicAccessToken)

    const refsResponse = await $fetch<RefsResponse>(refsUrl.href)
    const _ref = refsResponse?.refs.find(({ id }) => id === 'master')?.ref
    if (!_ref)
      throw new Error('Could not find master ref')
    ref = _ref
  }

  const searchUrl = new URL('/api/v2/documents/search', prismicUrl)
  const documentTypeQuery = `[at(document.type,"${documentType}")]`

  let filtering = ''
  if (!showDrafts && supportsDrafts.includes(documentType))
    filtering = filter.not(`my.${documentType}.draft`, true)

  searchUrl.searchParams.set('q', `[${documentTypeQuery}${filtering}]`)
  searchUrl.searchParams.set('pageSize', '100')
  searchUrl.searchParams.set('ref', ref!)
  searchUrl.searchParams.set('access_token', prismicAccessToken)

  return searchUrl
}
