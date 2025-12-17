export async function useSite() {
  return queryCollection('site').first()!
}
