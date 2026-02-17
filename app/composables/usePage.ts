import type { Collections } from '@nuxt/content'

export async function usePage<T extends keyof Collections>(collection: T) {
  const page = await usePrerenderData(`page-${collection}`, () => queryCollection(collection).first())
  if (!page)
    throw createError({ statusCode: 404, message: `Page not found: ${collection}` })
  return page
}
