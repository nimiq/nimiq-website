export async function useSite() {
  const { data: site } = await useAsyncData('site-config', () => queryCollection('site').first())
  if (!site.value)
    throw createError({ statusCode: 500, message: 'Site configuration not found' })
  return site.value
}
