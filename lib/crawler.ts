import type { PrerenderPagesOptions } from '../shared/services/prismic-data'
import { getPrismicData } from '../shared/services/prismic-data'
import { getBlogMetadata } from '../shared/utils/blog-post'

const blogPosts: Post[] = []

// Pages excluded from prerendering
export const EXCLUDED_PAGES = [
  // Custom apps built by other projects
  '/vote',
  '/cards',
  '/styleguide',
  '/privacy-policy',
  '/cookie-policy',

  // HTML pages found in the public folder
  '/activation/privacy',
  '/terms',
]

export async function getDynamicPages(options: PrerenderPagesOptions) {
  const data = await getPrismicData(options)

  const pages = data.pages.map(({ uid }) => {
    if (uid === 'home')
      return '/'
    return `/${uid}`
  })

  const blogArticles = data.blogPosts.map(post => `/blog/${post.uid}`)

  const blogPaginationRoutes = generateBlogPaginationRoutes(data.blogPosts.length)

  blogPosts.length = 0
  data.blogPosts.forEach((post) => {
    const { titleText: title, url, abstract: description, prose: content, date, imageURL: image, authors } = getBlogMetadata(post)
    blogPosts.push({ title, url, description, content, date, image, slug: post.uid, authors })
  })

  return [...pages, ...blogArticles, ...blogPaginationRoutes].filter(page => !EXCLUDED_PAGES.includes(page))
}

function generateBlogPaginationRoutes(totalPosts: number): string[] {
  const postsPerPage = 30
  const totalPages = Math.ceil(totalPosts / postsPerPage)
  const paginationRoutes: string[] = []

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1) {
      paginationRoutes.push('/blog')
    }
    else {
      paginationRoutes.push(`/blog?page=${i}`)
    }
  }

  return paginationRoutes
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
}

export async function getBlogPosts(): Promise<Post[]> {
  if (blogPosts.length > 0) {
    return blogPosts
  }

  // Should not happen if getDynamicPages was called first
  console.warn('⚠️ getBlogPosts called before getDynamicPages - this may cause duplicate API calls')
  return blogPosts
}
