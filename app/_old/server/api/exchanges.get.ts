export default cachedEventHandler(async () => {
  // TODO: Migrate to Nuxt Content v3 server query when available
  // For now, return empty array - exchanges are fetched client-side
  return []
}, {
  getKey: () => 'exchanges',
  maxAge: 60 * 60 * 6, // 6 hours
})
