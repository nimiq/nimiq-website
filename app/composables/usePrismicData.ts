import type { ArgumentsType } from '@vueuse/core'
import type { BlogPageDocument } from '~~/prismicio-types'
import { filter } from '@prismicio/client'
import { consola } from 'consola'

type PrismicOptions = ArgumentsType<ReturnType<typeof usePrismic>['client']['getByType']>[1]

export function usePrismicPage(uid: string, options?: PrismicOptions) {
  const { client } = usePrismic()
  const { enablePrismicSSR, showDrafts } = useRuntimeConfig().public

  return useAsyncData(
    `prismic-page-${uid}`,
    async () => {
      try {
        const existingFilters = options?.filters || []
        const filters = showDrafts
          ? (Array.isArray(existingFilters) ? existingFilters : [existingFilters].filter(Boolean))
          : (() => {
              const draftFilter = filter.not(`my.page.draft`, true)
              return Array.isArray(existingFilters)
                ? [...existingFilters, draftFilter]
                : [existingFilters, draftFilter].filter(Boolean)
            })()
        const result = await client.getByUID('page', uid, {
          ...options,
          filters,
        })

        if (!result.data) {
          throw createError({
            statusCode: 404,
            statusMessage: 'Page not found',
            fatal: true,
          })
        }
        return result
      }
      catch (error) {
        consola.error(`Page with UID "${uid}" not found in Prismic:`, error)
        throw createError({
          statusCode: 404,
          statusMessage: 'Page not found',
          fatal: true,
        })
      }
    },
    {
      server: Boolean(enablePrismicSSR) || (import.meta.server && import.meta.prerender),
    },
  )
}

export function useBlogPost(uid: string, options?: PrismicOptions) {
  const { client } = usePrismic()
  const { enablePrismicSSR, showDrafts } = useRuntimeConfig().public

  return useAsyncData(
    `prismic-blog_post-${uid}`,
    async () => {
      try {
        const existingFilters = options?.filters || []
        const filters = showDrafts
          ? (Array.isArray(existingFilters) ? existingFilters : [existingFilters].filter(Boolean))
          : (() => {
              const draftFilter = filter.not(`my.blog_page.draft`, true)
              return Array.isArray(existingFilters)
                ? [...existingFilters, draftFilter]
                : [existingFilters, draftFilter].filter(Boolean)
            })()
        const result = await client.getByUID('blog_page', uid, {
          ...options,
          filters,
        })
        if (!result.data) {
          throw createError({
            statusCode: 404,
            statusMessage: 'Post not found',
            fatal: true,
          })
        }
        // Ensure the result is serializable by converting to plain object
        return JSON.parse(JSON.stringify(result))
      }
      catch (error) {
        consola.error(`Blog post with UID "${uid}" not found in Prismic:`, error)
        throw createError({
          statusCode: 404,
          statusMessage: 'Post not found',
          fatal: true,
        })
      }
    },
    {
      server: Boolean(enablePrismicSSR) || (import.meta.server && import.meta.prerender),
    },
  )
}

export function useBlogPosts(options?: PrismicOptions) {
  const { enablePrismicSSR, showDrafts } = useRuntimeConfig().public

  return useAsyncData(
    `prismic-collection-blog_page`,
    async (): Promise<BlogPageDocument[]> => {
      const { client } = usePrismic()
      try {
        const existingFilters = options?.filters || []
        const filters = showDrafts
          ? (Array.isArray(existingFilters) ? existingFilters : [existingFilters].filter(Boolean))
          : (() => {
              const draftFilter = filter.not(`my.blog_page.draft`, true)
              return Array.isArray(existingFilters)
                ? [...existingFilters, draftFilter]
                : [existingFilters, draftFilter].filter(Boolean)
            })()
        const result = await client.getByType('blog_page', {
          ...options,
          filters,
        })
        if (!result.results) {
          throw createError({
            statusCode: 404,
            statusMessage: 'Posts not found',
            fatal: true,
          })
        }
        return result.results
      }
      catch (error) {
        consola.error(`Collection "blog_page" not found in Prismic:`, error)
        throw new Error(`blog_page collection not found`)
      }
    },
    {
      server: Boolean(enablePrismicSSR) || (import.meta.server && import.meta.prerender),
    },
  )
}
