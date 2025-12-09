// Blog post utilities - temporarily disabled during Prismic migration
// TODO: Implement with Nuxt Content collections

export interface BlogMetadata {
  prose: string
  readingTime: number
  meta: { title: string, description: string }
  abstract: string
  uid: string
  hasImage: boolean
  href: string
  draft: boolean
  image: any
  imageURL: string | undefined
  title: any
  date: Date
  authors: string[]
  url: string
  titleText: string
}

export function getBlogMetadata(_post: any): BlogMetadata {
  // Placeholder implementation - to be replaced with Nuxt Content version
  throw new Error('Blog functionality temporarily disabled during migration')
}
