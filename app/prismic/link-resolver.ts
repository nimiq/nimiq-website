import type { PrismicDocument } from '@prismicio/client'

export default (doc: PrismicDocument) => {
  switch (doc.type) {
    case 'blog_page':
      return `/blog/${doc.uid}`
    case 'home_2024':
      return `/`
    case 'page':
    default:
      return `/${doc.uid}`
  }
}