import type { Query } from '@prismicio/client'
import type { BlogPageDocument, PageDocument } from '~~/prismicio-types'
import { filter } from '@prismicio/client'
import { $fetch } from 'ofetch'
import { getBlogMetadata } from '../shared/utils/blog-post'
import { repositoryName } from '../slicemachine.config.json'

interface PrerenderPagesOptions {
  prismicAccessToken: string
  showDrafts?: boolean
}

// These pages are excluded from the prerender process
export const EXCLUDED_PAGES = [
  // Custom apps built by other projects
  '/vote',
  '/cards',

  // HTML pages found in the public folder
  '/activation/privacy',
  '/terms',
]

export async function getDynamicPages(options: PrerenderPagesOptions) {
  const pagesUrl = await buildPrismicUrl('page', options)
  const pages = await getPages(pagesUrl)

  const blogPostsUrl = await buildPrismicUrl('blog_page', options)
  const blogArticles = await getBlogPosts(blogPostsUrl).then(posts => posts.map(post => `/blog/${post.slug}`))

  // Generate blog pagination routes
  const blogPaginationRoutes = await getBlogPaginationRoutes(blogPostsUrl)

  return [...pages, ...blogArticles, ...blogPaginationRoutes].filter(page => !EXCLUDED_PAGES.includes(page))
}

async function getPages(url: URL) {
  const prerenderPaths: string[] = []
  let page: number = 1
  while (true) {
    url.searchParams.set('page', page.toString())
    const { next_page, results } = await $fetch<Query<PageDocument>>(url.href)
    prerenderPaths.push(...results.map(({ uid }) => {
      if (uid === 'home')
        return '/'
      return `/${uid}`
    }))
    if (next_page === null)
      break
    page++
  }

  return prerenderPaths
}

interface Post {
  title: string
  url: string
  description: string
  content: string
  date: Date
  image?: string
  slug?: string
  authors?: string[]
};
const blogPosts: Post[] = []

export async function getBlogPosts(url: URL) {
  if (blogPosts.length > 0)
    return blogPosts
  let page: number = 1
  while (true) {
    url.searchParams.set('page', page.toString())
    const { next_page, results } = await $fetch<Query<BlogPageDocument>>(url.href)
    results.forEach((result) => {
      const { titleText: title, url, abstract: description, prose: content, date, imageURL: image, authors } = getBlogMetadata(result)
      blogPosts.push({ title, url, description, content, date, image, slug: result.uid, authors })
    })

    if (next_page === null)
      break
    page++
  }

  return blogPosts
}

export async function getBlogPaginationRoutes(url: URL) {
  const paginationRoutes: string[] = []

  // Get the first page to determine total number of posts
  url.searchParams.set('page', '1')
  const firstPageResult = await $fetch<Query<BlogPageDocument>>(url.href)
  const totalPages = firstPageResult.total_pages || 1

  // Generate pagination routes
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1) {
      // First page is just /blog
      paginationRoutes.push('/blog')
    }
    else {
      // Other pages are /blog?page=2, /blog?page=3, etc.
      paginationRoutes.push(`/blog?page=${i}`)
    }
  }

  return paginationRoutes
}

const prismicUrl = new URL(`https://${repositoryName}.cdn.prismic.io`)

interface RefsResponse { refs: { id: 'master', ref: string }[] }
let ref: string

export async function buildPrismicUrl(documentType: 'blog_page' | 'page', { prismicAccessToken, showDrafts = false }: PrerenderPagesOptions) {
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

  // Add routes for blog posts
  const documentTypeQuery = `[at(document.type,"${documentType}")]`

  // Apply the draft filter only when we don't want to show drafts
  let filtering = ''
  if (!showDrafts)
    filtering = filter.not(`my.${documentType}.draft`, true)

  searchUrl.searchParams.set('q', `[${documentTypeQuery}${filtering}]`)
  searchUrl.searchParams.set('pageSize', '100') // 100 is the maximum
  searchUrl.searchParams.set('ref', ref!)
  searchUrl.searchParams.set('access_token', prismicAccessToken)

  return searchUrl
}
