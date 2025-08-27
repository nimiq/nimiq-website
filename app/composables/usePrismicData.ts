import type { AsyncDataOptions } from 'nuxt/app'
import type { BlogPageDocument, PageDocument } from '~~/prismicio-types'

/**
 * Unified data fetching for all environments
 * NuxtHub: Only fetch at build time (prerendering), disable SSR fetching
 * Internal-dynamic: Always fetch (build + SSR)
 * Local dev: Always fetch (build + SSR)
 */
export function usePrismicData<T>(
  key: string,
  handler: () => Promise<T>,
  options?: AsyncDataOptions<T>,
) {
  const { enablePrismicSSR } = useRuntimeConfig().public

  return useAsyncData(key, handler, {
    server: Boolean(enablePrismicSSR),
    ...options as AsyncDataOptions<T>,
  })
}

/**
 * Draft filtering: internal-dynamic always shows drafts, NuxtHub never does
 */
export function usePrismicPage<T extends PageDocument | BlogPageDocument>(uid: string, type: 'page' | 'blog_page' = 'page') {
  const { client } = usePrismic()
  const { showDrafts } = useRuntimeConfig().public

  return usePrismicData(
    `prismic-${type}-${uid}`,
    async (): Promise<T> => {
      try {
        const page = await client.getByUID(type, uid) as T
        if (!showDrafts && page?.data.draft) {
          throw createError({
            statusCode: 404,
            statusMessage: 'Page not found',
            fatal: true,
          })
        }

        return page
      }
      catch (error) {
        console.error(`Page with UID "${uid}" not found in Prismic:`, error)
        throw createError({
          statusCode: 404,
          statusMessage: 'Page not found',
          fatal: true,
        })
      }
    },
  )
}

export function usePrismicSingle(type: string) {
  return usePrismicData(
    `prismic-single-${type}`,
    async () => {
      const { client } = usePrismic()
      try {
        return await client.getSingle(type as any)
      }
      catch (error) {
        console.error(`Single document "${type}" not found in Prismic:`, error)
        throw new Error(`${type} data not found`)
      }
    },
  )
}

export function usePrismicCollection(
  type: string,
  options?: any,
) {
  return usePrismicData(
    `prismic-collection-${type}`,
    async () => {
      const { client } = usePrismic()
      try {
        const result = await client.getByType(type as any, options)
        return result.results
      }
      catch (error) {
        console.error(`Collection "${type}" not found in Prismic:`, error)
        throw new Error(`${type} collection not found`)
      }
    },
  )
}
