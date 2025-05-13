import type { Query } from '@prismicio/client'
import type { BlogPageDocument } from '~~/prismicio-types'
import process from 'node:process'
import { filter } from '@prismicio/client'
import { $fetch } from 'ofetch'
import { repositoryName } from '../../slicemachine.config.json'
import { getBlogMetadata } from './blog-post'

interface PrerenderPagesOptions {
  prismicAccessToken: string
  showDrafts?: boolean
}

const env = process.env.NUXT_ENVIRONMENT

const pages = [
  '/',
  '/new-wallet',
  '/cryptopaymentlink',
  '/nimiq-pay',
  '/new-buy-and-sell',
  '/contact',
  '/newsletter',
  '/privacy',
  '/blog',
  '/team',
  '/roadmap',
  '/bug-bounty',
  '/albatross',
  '/community',
  '/community/funding',
  '/apps',
  '/about',
]

if (env !== 'github-pages') {
  pages.push('/litepaper') // TODO Figure out why it shows 500
  pages.push('/onepager') // TODO Figure out why it shows 500
  pages.push('/staking') // TODO Figure out why it shows 500
}

export async function getDynamicPages(options: PrerenderPagesOptions) {
  const blogPostsUrl = await buildPrismicUrl('blog_page', options)
  const blogArticles = await getBlogPosts(blogPostsUrl).then(posts => posts.map(post => `/blog/${post.slug}`))

  return [...pages, ...blogArticles]
}

// async function getPages(url: URL) {
//   const prerenderPaths: string[] = []
//   let page: number = 1
//   while (true) {
//     url.searchParams.set('page', page.toString())
//     const { next_page, results } = await $fetch<Query<PageDocument>>(url.href)
//     prerenderPaths.push(...results.map(({ uid, data }) => {
//       if (uid === 'home')
//         return '/'
//       const hasParents = data.parents.length > 0
//       if (hasParents) {
//         const parent = data.parents.map(parent => (parent as { uid: string }).uid)
//         return `/${parent.join('/')}/${uid}`
//       }
//       return `/${uid}`
//     }))
//     if (next_page === null)
//       break
//     page++
//   }

//   return prerenderPaths
// }

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
