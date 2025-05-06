import type { Query } from '@prismicio/client'
import type { BlogPageDocument } from '~~/prismicio-types'
import { defineNuxtModule } from '@nuxt/kit'
import { filter } from '@prismicio/client'
import { $fetch } from 'ofetch'
import { repositoryName } from '../slicemachine.config.json'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-prerender-routes',
  },
  hooks: {
    'nitro:build:before': async (nitro) => {
      const runtimeConfig = nitro.options.runtimeConfig || {}
      const { PRISMIC_ACCESS_TOKEN: prismicAccessToken } = runtimeConfig

      const { showDrafts = false, environment: { isNuxthubPreview, isNuxthubProduction } } = runtimeConfig.public || {}
      const isNuxthub = isNuxthubPreview || isNuxthubProduction

      // Get all pages
      let pages = await getDynamicPages(prismicAccessToken as string, showDrafts)

      // for nuthub, we only pre-render the first 95 pages because the prerendering process is limited to 100 pages
      if (isNuxthub)
        pages = pages.slice(0, 95)

      nitro.options.prerender.routes = pages
    },
  },
})

export async function getDynamicPages(prismicAccessToken: string, showDrafts: boolean) {
  const options = await getDynamicPagesOptions(prismicAccessToken)
  const pages = await getDynamicPagesByType('page', options, showDrafts).then(uids => uids.map(uid => `/${uid}`))
  const blogArticles = await getDynamicPagesByType('blog_page', options, showDrafts).then(uids => uids.map(uid => `/blog/${uid}`))
  const allPages = [...pages, ...blogArticles]
  return allPages
}

async function getDynamicPagesOptions(prismicAccessToken: string) {
  const prismicUrl = new URL(`https://${repositoryName}.cdn.prismic.io`)

  const refsUrl = new URL('/api/v2', prismicUrl)
  refsUrl.searchParams.set('access_token', prismicAccessToken)

  interface RefsResponse { refs: { id: 'master', ref: string }[] }

  const refsResponse = await $fetch<RefsResponse>(refsUrl.href)
  const ref = refsResponse?.refs.find(({ id }) => id === 'master')?.ref
  if (!ref)
    throw new Error('Could not find master ref')

  return { prismicUrl, ref, prismicAccessToken }
}

interface PrerenderPagesOptions {
  prismicUrl: URL
  ref: string
  prismicAccessToken: string
}

async function getDynamicPagesByType(
  documentType: 'blog_page' | 'page',
  { prismicUrl, ref, prismicAccessToken }: PrerenderPagesOptions,
  showDrafts: boolean,
) {
  // Add routes for blog posts
  const url = new URL('/api/v2/documents/search', prismicUrl)
  const documentTypeQuery = `[at(document.type,"${documentType}")]`

  // Apply the draft filter only when we don't want to show drafts
  let filtering = ''
  if (!showDrafts)
    filtering = filter.not(`my.${documentType}.draft`, true)

  url.searchParams.set('q', `[${documentTypeQuery}${filtering}]`)
  url.searchParams.set('pageSize', '100') // 100 is the maximum
  url.searchParams.set('ref', ref)
  url.searchParams.set('access_token', prismicAccessToken)

  const prerenderPaths: string[] = []
  let page: number = 1
  while (true) {
    url.searchParams.set('page', page.toString())
    const { next_page, results } = await $fetch<Query<BlogPageDocument>>(url.href)
    prerenderPaths.push(...results.map(({ uid }) => uid))
    if (next_page === null)
      break
    page++
  }

  return prerenderPaths
}
