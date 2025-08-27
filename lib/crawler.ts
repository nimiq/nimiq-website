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

export interface PrerenderPagesOptions {
  prismicAccessToken: string
  showDrafts?: boolean
}

export async function getDynamicPages(options: PrerenderPagesOptions) {
  // For now, we'll need to implement the Prismic document fetching separately
  // since the new utils only handle images. This is a temporary solution.
  const { fetchDocuments } = await import('../server/utils/prismic-api-helpers')

  const [pages, blogPostsData] = await Promise.all([
    fetchDocuments('page', options.prismicAccessToken, options.showDrafts),
    fetchDocuments('blog_page', options.prismicAccessToken, options.showDrafts),
  ])

  const pageRoutes = pages.map(({ uid }: any) => {
    if (uid === 'home')
      return '/'
    return `/${uid}`
  })

  const blogArticles = blogPostsData.map((post: any) => `/blog/${post.uid}`)

  const blogPaginationRoutes = generateBlogPaginationRoutes(blogPostsData.length)

  blogPosts.length = 0
  blogPostsData.forEach((post: any) => {
    const { titleText: title, url, abstract: description, prose: content, date, imageURL: image, authors } = getBlogMetadata(post)
    blogPosts.push({ title, url, description, content, date, image, slug: post.uid, authors })
  })

  return [...pageRoutes, ...blogArticles, ...blogPaginationRoutes].filter(page => !EXCLUDED_PAGES.includes(page))
}

function generateBlogPaginationRoutes(totalPosts: number): string[] {
  const postsPerPage = 25 // Match BlogpostsGrid itemsPerPage
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
