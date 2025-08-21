/**
 * Client-safe Prismic image utilities
 * These functions can be used in Vue components and other client-side code
 */

const IMAGE_FOLDER = 'assets/images/prismic'

// Transform Prismic URL to local URL (client-safe)
export function transformImageUrl(baseUrl: string, url: string): string {
  if (!url?.includes('prismic'))
    return url

  const fileName = normalizeFileName(url.split('/').pop() || 'image')
  return `${baseUrl.replace(/\/$/, '')}/${IMAGE_FOLDER}/${fileName}`
}

// Transform image field with responsive variants (client-safe)
export function transformImageField(baseUrl: string, field: any): any {
  const transformed = { ...field }

  if (field.url) {
    transformed.url = transformImageUrl(baseUrl, field.url)
  }

  // Handle responsive variants
  const responsiveViews = ['Lg', 'Md', 'Sm', 'Xs'] as const
  for (const view of responsiveViews) {
    const variant = (field as any)[view]
    if (variant?.url) {
      (transformed as any)[view] = {
        ...variant,
        url: transformImageUrl(baseUrl, variant.url),
      }
    }
  }

  return transformed
}

// Generate srcSet from transformed field (client-safe)
export function generateSrcSet(field: any, widths?: number[] | string): { src: string, srcSet: string } {
  const defaultWidths = [640, 768, 1024, 1280, 1536]
  const _targetWidths = widths || defaultWidths

  const src = field.url || ''
  const srcSetEntries: string[] = []

  // Add main image
  if (src && field.dimensions?.width) {
    srcSetEntries.push(`${src} ${field.dimensions.width}w`)
  }

  // Add responsive variants
  const responsiveViews = ['Xs', 'Sm', 'Md', 'Lg'] as const
  for (const view of responsiveViews) {
    const variant = (field as any)[view]
    if (variant?.url && variant.dimensions?.width) {
      srcSetEntries.push(`${variant.url} ${variant.dimensions.width}w`)
    }
  }

  return {
    src,
    srcSet: srcSetEntries.join(', '),
  }
}

// Client-safe filename normalization
function normalizeFileName(fileName: string): string {
  // Extract just the base filename and extension, removing Prismic URL parameters
  // Example: "image.png_auto_compress_format_rect_0_0_100_100" -> "image.png"
  const extensionMatch = fileName.match(/\.(jpg|jpeg|png|gif|webp|svg|avif)/i)
  if (extensionMatch) {
    const extensionIndex = fileName.indexOf(extensionMatch[0])
    const baseFileName = fileName.substring(0, extensionIndex + extensionMatch[0].length)
    fileName = baseFileName
  }

  return fileName
    .replace(/%([0-9A-F]{2})/gi, (_, hex) => {
      const char = String.fromCharCode(Number.parseInt(hex, 16))
      return /[\w.-]/.test(char) ? char : '_'
    })
    .replace(/[^\w.-]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '') || 'image'
}
