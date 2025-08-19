import { join } from 'pathe'

export interface ImageInfo {
  fileName: string
  originalFileName: string
  localPath: string
  originalUrl: string
}

export interface ImageSyncStatus {
  /** Images available both in Prismic and locally */
  synced: ImageInfo[]
  /** Images in Prismic that need downloading */
  needDownload: ImageInfo[]
  /** Local images no longer referenced in Prismic */
  orphaned: string[]
}

/**
 * Normalize filename to prevent filesystem conflicts
 */
export function normalizeFileName(fileName: string): string {
  return fileName
    .replace(/%([0-9A-F]{2})/gi, (match, hex) => {
      const char = String.fromCharCode(Number.parseInt(hex, 16))
      switch (char) {
        case '(': return '_'
        case ')': return '_'
        case '+': return '_'
        case ' ': return '_'
        case '%': return '_'
        default: return /[\w.-]/.test(char) ? char : '_'
      }
    })
    .replace(/[^\w.-]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '')
    || 'image'
}

/**
 * Convert Prismic image URL to local storage info
 */
export function processImageForLocal(imageUrl: string): ImageInfo {
  const url = new URL(imageUrl)
  const originalFileName = url.pathname.split('/').at(-1) ?? ''
  const normalizedFileName = normalizeFileName(originalFileName)
  const localPath = join('/assets/prismic', normalizedFileName)

  return {
    fileName: normalizedFileName,
    originalFileName,
    localPath,
    originalUrl: imageUrl,
  }
}

/**
 * Extract all Prismic image URLs from document data
 */
export function extractImageUrlsFromDocument(document: any): string[] {
  const imageUrls: string[] = []

  function extractFromValue(value: any) {
    if (!value)
      return

    if (value.url && typeof value.url === 'string' && value.url.includes('prismic')) {
      imageUrls.push(value.url)

      // Check responsive variants that Prismic generates
      const responsiveViews = ['Lg', 'Md', 'Sm', 'Xs'] as const
      for (const viewKey of responsiveViews) {
        const responsiveField = value[viewKey]
        if (responsiveField?.url) {
          imageUrls.push(responsiveField.url)
        }
      }
    }

    if (Array.isArray(value)) {
      value.forEach(extractFromValue)
    }

    if (typeof value === 'object' && value !== null) {
      Object.values(value).forEach(extractFromValue)
    }
  }

  extractFromValue(document)
  return [...new Set(imageUrls)]
}

/**
 * Compare Prismic images with local storage
 */
export async function analyzeImageSync(prismicImageUrls: string[]): Promise<ImageSyncStatus> {
  const prismicImages = prismicImageUrls.map(processImageForLocal)
  const expectedLocalPaths = new Set(prismicImages.map(img => img.localPath))

  const actualLocalPaths = await getLocalImagePaths()
  const actualLocalPathsSet = new Set(actualLocalPaths)

  const synced = prismicImages.filter(img =>
    actualLocalPathsSet.has(img.localPath),
  )

  const needDownload = prismicImages.filter(img =>
    !actualLocalPathsSet.has(img.localPath),
  )

  const orphaned = actualLocalPaths.filter(path =>
    !expectedLocalPaths.has(path),
  )

  return {
    synced,
    needDownload,
    orphaned,
  }
}

/**
 * Get existing local image paths in assets directory
 */
async function getLocalImagePaths(): Promise<string[]> {
  try {
    const { readdir, stat } = await import('node:fs/promises')
    const process = await import('node:process')
    const prismicAssetsDir = join(process.cwd(), 'public/assets/prismic')

    try {
      const files = await readdir(prismicAssetsDir)
      const imagePaths: string[] = []

      for (const file of files) {
        const fullPath = join(prismicAssetsDir, file)
        const stats = await stat(fullPath)

        if (stats.isFile() && isImageFile(file)) {
          imagePaths.push(`/assets/prismic/${file}`)
        }
      }

      return imagePaths
    }
    catch {
      return []
    }
  }
  catch {
    return []
  }
}

function isImageFile(filename: string): boolean {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif']
  const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'))
  return imageExtensions.includes(ext)
}

/**
 * Log image sync status in readable format
 */
export function logImageSyncStatus(status: ImageSyncStatus) {
  console.warn('\n📊 Image Sync Status:')
  console.warn(`✅ Images synced (Prismic + Local): ${status.synced.length}`)
  console.warn(`⬇️  Images need download: ${status.needDownload.length}`)
  console.warn(`🗑️  Orphaned local images: ${status.orphaned.length}`)

  if (status.needDownload.length > 0) {
    console.warn('\n⬇️  Missing local images:')
    status.needDownload.forEach((img) => {
      console.warn(`   - ${img.fileName} (${img.originalUrl})`)
    })
  }

  if (status.orphaned.length > 0) {
    console.warn('\n🗑️  Orphaned local images:')
    status.orphaned.forEach((path) => {
      console.warn(`   - ${path}`)
    })
  }
}

/**
 * Remove local images no longer referenced in Prismic
 */
export async function cleanupOrphanedImages(status: ImageSyncStatus): Promise<number> {
  if (status.orphaned.length === 0) {
    console.warn('✅ No orphaned images to clean up')
    return 0
  }

  try {
    const { unlink } = await import('node:fs/promises')
    const process = await import('node:process')
    let deletedCount = 0

    for (const localPath of status.orphaned) {
      try {
        const fullPath = join(process.cwd(), 'public', localPath)
        await unlink(fullPath)
        console.warn(`🗑️  Deleted orphaned image: ${localPath}`)
        deletedCount++
      }
      catch (error) {
        console.warn(`❌ Failed to delete ${localPath}:`, error)
      }
    }

    console.warn(`✅ Cleaned up ${deletedCount} orphaned images`)
    return deletedCount
  }
  catch {
    console.warn('❌ Cleanup not available (Node.js fs not available)')
    return 0
  }
}
