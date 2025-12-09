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
]

export interface PrerenderPagesOptions {
  showDrafts?: boolean
}

// Simplified prerender - blog functionality temporarily disabled during Prismic migration
export async function getDynamicPages(_options: PrerenderPagesOptions) {
  // TODO: Implement with Nuxt Content collections
  // For now, return static pages only
  return ['/']
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
  // TODO: Implement with Nuxt Content blog collection
  return []
}
