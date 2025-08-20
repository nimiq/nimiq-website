import { $fetch } from 'ofetch'
import { join } from 'pathe'

interface ImageInfo {
  fileName: string
  originalFileName: string
  localPath: string
  originalUrl: string
  documentUid?: string
  documentType?: string
}

interface ImageSyncStatus {
  synced: ImageInfo[]
  needDownload: ImageInfo[]
  orphaned: string[]
}

function getImageFolder(): string {
  return 'assets/images/prismic'
}

function getPublicImagePath(baseUrl: string, fileName: string): string {
  const folder = getImageFolder()

  // Normalize base URL (remove trailing slash)
  const normalizedBase = baseUrl.replace(/\/$/, '')

  // Return the full public path
  return `${normalizedBase}/${folder}/${fileName}`
}

// Prevent filesystem conflicts with special characters
function normalizeFileName(fileName: string): string {
  return fileName
    .replace(/%([0-9A-F]{2})/gi, (_match, hex) => {
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

export function isPrismicImage(url: string): boolean {
  return url.includes('prismic') || url.includes('images.prismic.io')
}

export function processImageForLocal(baseUrl: string, imageUrl: string): ImageInfo {
  const url = new URL(imageUrl)
  const originalFileName = url.pathname.split('/').at(-1) ?? ''
  const normalizedFileName = normalizeFileName(originalFileName)
  const localPath = getPublicImagePath(baseUrl, normalizedFileName)

  return {
    fileName: normalizedFileName,
    originalFileName,
    localPath,
    originalUrl: imageUrl,
  }
}

// Single source of truth for URL transformation
export function transformToLocalPath(baseUrl: string, url: string): string {
  if (!isPrismicImage(url)) {
    return url
  }

  return processImageForLocal(baseUrl, url).localPath
}

export function extractImageUrlsFromDocument(document: any): string[] {
  const imageUrls: string[] = []

  function extractFromValue(value: any) {
    if (!value)
      return

    if (value.url && typeof value.url === 'string' && value.url.includes('prismic')) {
      imageUrls.push(value.url)

      // Include responsive variants
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

export function extractImageUrlsWithMetadata(baseUrl: string, document: any): ImageInfo[] {
  const imageUrls = extractImageUrlsFromDocument(document)
  return imageUrls.map(url => ({
    ...processImageForLocal(baseUrl, url),
    documentUid: document.uid || document.id,
    documentType: document.type,
  }))
}

export async function analyzeImageSync(baseUrl: string, prismicImages: ImageInfo[]): Promise<ImageSyncStatus> {
  const expectedLocalPaths = new Set(prismicImages.map(img => img.localPath))

  const actualLocalPaths = await getLocalImagePaths(baseUrl)
  const actualLocalPathsSet = new Set(actualLocalPaths)

  const synced = prismicImages.filter(img =>
    actualLocalPathsSet.has(img.localPath),
  )

  const ignoredIds = [
    'Z1x365bqstJ98fVHb',
    'Z1x37JbqstJ98fVI_',
    'Z1x36pbqstJ98fVG',
  ]
  const needDownload = prismicImages.filter(img =>
    !actualLocalPathsSet.has(img.localPath),
  ).filter(img => !ignoredIds.includes(img.localPath))

  const orphaned = actualLocalPaths.filter(path =>
    !expectedLocalPaths.has(path),
  )

  return {
    synced,
    needDownload,
    orphaned,
  }
}

async function getLocalImagePaths(baseUrl: string): Promise<string[]> {
  try {
    const { readdir, stat } = await import('node:fs/promises')
    const process = await import('node:process')
    const prismicAssetsDir = join(process.cwd(), 'public', getImageFolder())

    try {
      const files = await readdir(prismicAssetsDir)
      const imagePaths: string[] = []

      for (const file of files) {
        const fullPath = join(prismicAssetsDir, file)
        const stats = await stat(fullPath)

        if (stats.isFile() && isImageFile(file)) {
          imagePaths.push(getPublicImagePath(baseUrl, file))
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

export function logImageSyncStatus(status: ImageSyncStatus) {
  console.warn('\n📊 Image Sync Status:')
  console.warn(`✅ Images synced (Prismic + Local): ${status.synced.length}`)
  console.warn(`⬇️  Images need download: ${status.needDownload.length}`)
  console.warn(`🗑️  Orphaned local images: ${status.orphaned.length}`)

  if (status.needDownload.length > 0) {
    console.warn('\n⬇️  Missing local images:')
    status.needDownload.slice(0, 10).forEach((img) => {
      const docInfo = img.documentUid ? ` (${img.documentType}:${img.documentUid})` : ''
      console.warn(`   - ${img.fileName}${docInfo}`)
    })
    if (status.needDownload.length > 10) {
      console.warn(`   ... and ${status.needDownload.length - 10} more`)
    }
  }

  if (status.orphaned.length > 0) {
    console.warn('\n🗑️  Orphaned local images:')
    status.orphaned.slice(0, 5).forEach((path) => {
      console.warn(`   - ${path}`)
    })
    if (status.orphaned.length > 5) {
      console.warn(`   ... and ${status.orphaned.length - 5} more`)
    }
  }
}

const ignoredIds = [
  'Z1x36pbqstJ98fVG',
  'Z1x37JbqstJ98fVI',
  'Z1x365bqstJ98fVH',
]
function shouldSkipImageForHomePage(imageInfo: ImageInfo): boolean {
  return ignoredIds.includes(imageInfo.originalUrl.split('/').at(-1)?.split('_').at(0) ?? '')
}

export async function downloadPrismicImages(images: ImageInfo[]): Promise<{ downloadedCount: number }> {
  if (import.meta.client) {
    console.warn('❌ Download not available (client-side)')
    return { downloadedCount: 0 }
  }

  const filteredImages = images.filter(imageInfo => !shouldSkipImageForHomePage(imageInfo))

  if (filteredImages.length === 0) {
    console.warn('✅ No images to download')
    return { downloadedCount: 0 }
  }

  try {
    const { writeFile, mkdir } = await import('node:fs/promises')
    const { Buffer } = await import('node:buffer')
    const process = await import('node:process')
    let downloadedCount = 0
    const totalImages = filteredImages.length

    console.warn(`\n📥 Starting download of ${totalImages} images...`)

    for (let i = 0; i < filteredImages.length; i++) {
      const imageInfo = filteredImages[i]
      if (!imageInfo)
        continue

      const progress = Math.round(((i + 1) / totalImages) * 100)

      try {
        const publicFilePath = join(process.cwd(), 'public', imageInfo.localPath)
        const publicDir = join(process.cwd(), 'public', imageInfo.localPath.split('/').slice(0, -1).join('/'))

        await mkdir(publicDir, { recursive: true })

        console.warn(`⬇️  [${progress}%] ${i + 1}/${totalImages} - ${imageInfo.fileName} (from ${imageInfo.documentType}:${imageInfo.documentUid})`)
        const response = await $fetch(imageInfo.originalUrl, { responseType: 'arrayBuffer' })
        await writeFile(publicFilePath, Buffer.from(response as ArrayBuffer))

        downloadedCount++
      }
      catch (error) {
        console.warn(`❌ Failed to download ${imageInfo.fileName} (from ${imageInfo.documentType}:${imageInfo.documentUid}):`, error)
      }
    }

    console.warn(`\n✅ Downloaded ${downloadedCount}/${totalImages} images successfully`)
    return { downloadedCount }
  }
  catch {
    console.warn('❌ Download not available (Node.js fs not available)')
    return { downloadedCount: 0 }
  }
}

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
