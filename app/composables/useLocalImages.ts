import type { ImageField } from '@prismicio/client'

// Access the global mapping loaded by the plugin
declare global {
  var __prismicImageMapping: Record<string, { localPath: string }> | undefined
}

/**
 * Simple composable to get local image URLs
 * Uses the mapping loaded by the plugin at startup
 */
export function useLocalImages() {
  const getLocalImageUrl = (prismicImageField: ImageField): string => {
    const prismicUrl = getImage(prismicImageField)
    if (!prismicUrl) return ''

    // Check if we have a local version (loaded by plugin)
    if (import.meta.client && globalThis.__prismicImageMapping?.[prismicUrl]) {
      return globalThis.__prismicImageMapping[prismicUrl].localPath
    }

    // Fallback to original Prismic URL
    return prismicUrl
  }

  return {
    getLocalImageUrl,
  }
}


