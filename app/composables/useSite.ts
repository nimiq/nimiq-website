const handler = () => queryCollection('site').first()

export function useSite() {
  return useAsyncData('site', handler)
}
