/**
 * Server-only Prismic image utilities
 * These functions use Node.js APIs and can only run on the server
 */
import type { BlogPageDocument, ExchangeDocument, NavigationDocument, PageDocument } from '~~/prismicio-types'
import { filter } from '@prismicio/client'
import consola from 'consola'
import { $fetch } from 'ofetch'
import { join } from 'pathe'
import { repositoryName } from '~~/slicemachine.config.json'
import environment from '../lib/env'

export interface ImageInfo {
  fileName: string
  localUrl: string
  originalUrl: string
  documentUid?: string
  documentType?: string
}

const IMAGE_FOLDER = 'assets/images/prismic'

// Extract all images from Prismic document (server-only)
export function extractImagesFromDocument(baseUrl: string, document: any): ImageInfo[] {
  const images: ImageInfo[] = []

  function processValue(value: any) {
    if (!value)
      return

    if (value.url && typeof value.url === 'string' && value.url.includes('prismic')) {
      images.push(createImageInfo(baseUrl, value.url, document))

      // Handle responsive variants
      const responsiveViews = ['Lg', 'Md', 'Sm', 'Xs'] as const
      for (const view of responsiveViews) {
        const variant = value[view]
        if (variant?.url) {
          images.push(createImageInfo(baseUrl, variant.url, document))
        }
      }
    }

    if (Array.isArray(value)) {
      value.forEach(processValue)
    }
    else if (typeof value === 'object' && value !== null) {
      Object.values(value).forEach(processValue)
    }
  }

  processValue(document)
  return images
}

function createImageInfo(baseUrl: string, originalUrl: string, document: any): ImageInfo {
  const fileName = normalizeFileName(originalUrl.split('/').pop() || 'image')
  return {
    fileName,
    localUrl: `${baseUrl.replace(/\/$/, '')}/${IMAGE_FOLDER}/${fileName}`,
    originalUrl,
    documentUid: document.uid || document.id,
    documentType: document.type,
  }
}

// Known problematic images that consistently return 403 Forbidden
function isKnownProblematicImage(image: ImageInfo): boolean {
  const problematicIds = [
    'Z1x365bqstJ98fVH', // Paypal.svg
    'Z1x37JbqstJ98fVI_',
    'Z1x36pbqstJ98fVG',
  ]

  // Check if the original URL contains any of the problematic IDs
  return problematicIds.some(id => image.originalUrl.includes(id))
}

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

// Fetch all Prismic data and extract images (server-only)
export async function fetchPrismicImages(prismicAccessToken: string, showDrafts = false): Promise<ImageInfo[]> {
  consola.info('🌐 Fetching Prismic data...')

  const [pages, blogPosts, navigation, exchanges] = await Promise.all([
    fetchDocuments<PageDocument>('page', prismicAccessToken, showDrafts),
    fetchDocuments<BlogPageDocument>('blog_page', prismicAccessToken, showDrafts),
    fetchDocument<NavigationDocument>('navigation', prismicAccessToken),
    fetchDocuments<ExchangeDocument>('exchange', prismicAccessToken),
  ])

  const baseUrl = environment.baseUrl
  const allImages: ImageInfo[] = []

  // Extract images from all documents
  pages.forEach(doc => allImages.push(...extractImagesFromDocument(baseUrl, doc)))
  blogPosts.forEach(doc => allImages.push(...extractImagesFromDocument(baseUrl, doc)))
  if (navigation)
    allImages.push(...extractImagesFromDocument(baseUrl, navigation))
  exchanges.forEach(doc => allImages.push(...extractImagesFromDocument(baseUrl, doc)))

  // Remove duplicates
  const uniqueImages = Array.from(
    new Map(allImages.map(img => [img.originalUrl, img])).values(),
  )

  consola.success(`Found ${uniqueImages.length} unique images from ${pages.length} pages, ${blogPosts.length} blog posts, ${exchanges.length} exchanges`)

  return uniqueImages
}

// Download missing images (server-only)
export async function downloadMissingImages(images: ImageInfo[]): Promise<void> {
  if (import.meta.client)
    return

  // Filter out known problematic images that consistently fail
  const filteredImages = images.filter(image => !isKnownProblematicImage(image))
  const missingImages = await findMissingImages(filteredImages)
  if (missingImages.length === 0) {
    consola.success('All images already downloaded')
    return
  }

  consola.info(`📥 Downloading ${missingImages.length} missing images...`)

  const { writeFile, mkdir } = await import('node:fs/promises')
  const { Buffer } = await import('node:buffer')
  const process = await import('node:process')

  let downloaded = 0
  let failed = 0

  for (const [index, image] of missingImages.entries()) {
    try {
      const filePath = join(process.cwd(), 'public', IMAGE_FOLDER, image.fileName)
      const dirPath = join(process.cwd(), 'public', IMAGE_FOLDER)

      await mkdir(dirPath, { recursive: true })

      // Add timeout and retry logic for better reliability
      const response = await $fetch(image.originalUrl, {
        responseType: 'arrayBuffer',
        timeout: 30000, // 30 second timeout
        retry: 2,
      })
      await writeFile(filePath, Buffer.from(response as ArrayBuffer))

      downloaded++
      const progress = Math.round(((index + 1) / missingImages.length) * 100)
      consola.info(`⬇️  [${progress}%] ${image.fileName}`)
    }
    catch (error: any) {
      failed++
      const errorMessage = error?.response?.status
        ? `${error.response.status} ${error.response.statusText}`
        : error?.message || 'Unknown error'

      // Only warn about failures, don't throw errors
      consola.warn(`❌ Failed to download ${image.fileName}: ${errorMessage}`)

      // Skip 403 Forbidden errors silently after warning
      if (error?.response?.status === 403) {
        consola.debug(`Skipping ${image.fileName} - access forbidden`)
      }
    }
  }

  if (failed > 0) {
    consola.warn(`⚠️  ${failed} images failed to download (possibly due to access restrictions)`)
  }

  consola.success(`Downloaded ${downloaded}/${missingImages.length} images successfully`)
}

async function findMissingImages(images: ImageInfo[]): Promise<ImageInfo[]> {
  try {
    const { access } = await import('node:fs/promises')
    const process = await import('node:process')

    const missing: ImageInfo[] = []

    for (const image of images) {
      const filePath = join(process.cwd(), 'public', IMAGE_FOLDER, image.fileName)
      try {
        await access(filePath)
      }
      catch {
        missing.push(image)
      }
    }

    return missing
  }
  catch {
    return images // If we can't check, assume all are missing
  }
}

// Prismic API helpers (server-only)
async function fetchDocuments<T>(
  documentType: string,
  prismicAccessToken: string,
  showDrafts = false,
): Promise<T[]> {
  const url = await buildPrismicUrl(documentType, prismicAccessToken, showDrafts)
  const allDocs: T[] = []
  let page = 1

  while (true) {
    url.searchParams.set('page', page.toString())
    const response = await $fetch<{ results: T[], next_page: string | null }>(url.href)
    allDocs.push(...response.results)

    if (!response.next_page)
      break
    page++
  }

  return allDocs
}

async function fetchDocument<T>(
  documentType: string,
  prismicAccessToken: string,
): Promise<T | null> {
  try {
    const url = await buildPrismicUrl(documentType, prismicAccessToken, false)
    url.searchParams.set('pageSize', '1')

    const response = await $fetch<{ results: T[] }>(url.href)
    return response.results[0] || null
  }
  catch (error) {
    consola.warn(`⚠️ Failed to fetch ${documentType}:`, error)
    return null
  }
}

let masterRef: string

async function buildPrismicUrl(
  documentType: string,
  prismicAccessToken: string,
  showDrafts = false,
): Promise<URL> {
  if (!masterRef) {
    const refsUrl = `https://${repositoryName}.cdn.prismic.io/api/v2?access_token=${prismicAccessToken}`
    const response = await $fetch<{ refs: { id: string, ref: string }[] }>(refsUrl)
    masterRef = response.refs.find(ref => ref.id === 'master')?.ref || ''
  }

  const url = new URL(`https://${repositoryName}.cdn.prismic.io/api/v2/documents/search`)

  let query = `[at(document.type,"${documentType}")]`
  if (!showDrafts && ['page', 'blog_page'].includes(documentType)) {
    query += filter.not(`my.${documentType}.draft`, true)
  }

  url.searchParams.set('q', `[${query}]`)
  url.searchParams.set('pageSize', '100')
  url.searchParams.set('ref', masterRef)
  url.searchParams.set('access_token', prismicAccessToken)

  return url
}
