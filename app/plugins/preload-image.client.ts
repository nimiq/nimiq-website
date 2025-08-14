export default defineNuxtPlugin(async () => {
  try {
    const response = await fetch('/prismic-images/image-mapping.json')
    if (response.ok) {
      const imageMapping = await response.json()
      // Store globally for composable access
      globalThis.__prismicImageMapping = imageMapping
      console.log(`Loaded ${Object.keys(imageMapping).length} local images`)
    }
  } catch (error) {
    console.warn('Failed to load image mapping, falling back to Prismic URLs:', error)
  }
})
