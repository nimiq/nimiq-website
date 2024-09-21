import type { BlogPageDocument } from '~~/prismicio-types'
import process from 'node:process'
import { addPrerenderRoutes, defineNuxtModule } from '@nuxt/kit'
import { filter, type Query } from '@prismicio/client'
import { $fetch } from 'ofetch'
import { repositoryName } from '../slicemachine.config.json'

interface RefsResponse { refs: { id: 'master', ref: string } [] }

export default defineNuxtModule({
  meta: {
    name: 'nuxt-prerender-routes',
  },
  async setup() {
    const prismicUrl = new URL(`https://${repositoryName}.cdn.prismic.io`)

    // https://prismic.io/docs/api#repository-api-fetch-refs
    const prismicAccessToken = process.env.PRISMIC_ACCESS_TOKEN
    if (!prismicAccessToken)
      throw new Error('PRISMIC_ACCESS_TOKEN is required to prerender routes')

    const refsUrl = new URL('/api/v2', prismicUrl)
    refsUrl.searchParams.set('access_token', prismicAccessToken)
    const refsResponse = await $fetch<RefsResponse>(refsUrl.href)
    const ref = refsResponse?.refs.find(({ id }) => id === 'master')?.ref
    if (!ref)
      throw new Error('Could not find master ref')

    const pages = await prerenderPages({ prismicUrl, ref, prismicAccessToken, documentType: 'page' })
    // TODO Remove this in the future
    const ignorePages = ['/contact']
    addPrerenderRoutes(pages.filter(page => !ignorePages.includes(page)))
    const blogPosts = await prerenderPages({ prismicUrl, ref, prismicAccessToken, documentType: 'blog_page' }).then(uids => uids.map(uid => `/blog${uid}`))
    addPrerenderRoutes(blogPosts)
  },
})

interface PrerenderPagesOptions {
  prismicUrl: URL
  ref: string
  prismicAccessToken: string
  documentType: 'blog_page' | 'page'
}

async function prerenderPages({ prismicUrl, ref, prismicAccessToken, documentType }: PrerenderPagesOptions) {
  // Add routes for blog posts
  const url = new URL('/api/v2/documents/search', prismicUrl)
  const documentTypeQuery = `[at(document.type,"${documentType}")]`
  const filtering = filter.not(`my.${documentType}.draft`, true)
  url.searchParams.set('q', `[${documentTypeQuery}${filtering}]`)
  url.searchParams.set('pageSize', '100') // 100 is the maximum
  url.searchParams.set('ref', ref)
  url.searchParams.set('access_token', prismicAccessToken)

  const prerenderPaths: string[] = []
  let page: number = 1
  while (true) {
    url.searchParams.set('page', page.toString())
    const { next_page, results } = await $fetch<Query<BlogPageDocument>>(url.href)
    prerenderPaths.push(...results.map(({ uid }) => `/${uid}`))
    if (next_page === null)
      break
    page++
  }

  return prerenderPaths
}
