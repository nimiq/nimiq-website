export async function useSite() {
  const site = await usePrerenderData('site-config', () => queryCollection('site').first())
  if (!site)
    throw createError({ statusCode: 500, message: 'Site configuration not found' })
  return site
}
