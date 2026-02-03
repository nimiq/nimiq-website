import type { Collections } from '@nuxt/content'

export async function usePage<T extends keyof Collections>(collection: T) {
  const { data: page } = await useAsyncData(`page-${collection}`, () => queryCollection(collection).first())
  if (!page.value)
    throw createError({ statusCode: 404, message: `Page not found: ${collection}` })
  return page.value
}
