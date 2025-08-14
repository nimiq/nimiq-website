#!/usr/bin/env tsx
import { promises as fs } from 'node:fs'
import { join, dirname, extname } from 'node:path'
import process from 'node:process'
import { createHash } from 'node:crypto'
import { createClient } from '@prismicio/client'
import type { AllDocumentTypes } from '../prismicio-types'
import { repositoryName } from '../slicemachine.config.json'
import consola from 'consola'

// Load environment variables from .env file
try {
  const envPath = join(process.cwd(), '.env')
  const envContent = await fs.readFile(envPath, 'utf-8')
  const envVars = envContent.split('\n').filter(line => line.trim() && !line.startsWith('#'))
  
  for (const line of envVars) {
    const [key, ...valueParts] = line.split('=')
    if (key && valueParts.length > 0) {
      process.env[key.trim()] = valueParts.join('=').trim()
    }
  }
} catch (error) {
  // .env file might not exist, that's ok
}

const PRISMIC_ACCESS_TOKEN = process.env.PRISMIC_ACCESS_TOKEN!
const PUBLIC_DIR = join(process.cwd(), 'public', 'prismic-images')
const MAPPING_FILE = join(PUBLIC_DIR, 'image-mapping.json')

interface ImageMapping {
  [prismicUrl: string]: {
    localPath: string
    downloadedAt: string
    fileSize: number
  }
}

async function ensureDir(dir: string) {
  try {
    await fs.mkdir(dir, { recursive: true })
  } catch (error) {
    // Directory might already exist
  }
}

function generateLocalFilename(prismicUrl: string): string {
  // Create hash from URL for consistent naming
  const hash = createHash('md5').update(prismicUrl).digest('hex').substring(0, 8)
  const ext = extname(new URL(prismicUrl).pathname) || '.jpg'
  return `${hash}${ext}`
}

async function downloadImage(url: string, localPath: string): Promise<void> {
  try {
    consola.info(`Downloading: ${url}`)
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Failed to download ${url}: ${response.status} ${response.statusText}`)
    }

    const buffer = await response.arrayBuffer()
    await fs.writeFile(localPath, Buffer.from(buffer))
    consola.success(`Downloaded: ${localPath}`)
  } catch (error) {
    consola.error(`Failed to download ${url}:`, error)
    throw error
  }
}

function extractImageUrlsFromField(field: any): string[] {
  const urls: string[] = []
  
  if (!field) return urls

  // Handle direct image field
  if (field.url && typeof field.url === 'string') {
    urls.push(field.url)
    
    // Handle thumbnails
    if (field.dimensions && Object.keys(field.dimensions).length > 0) {
      Object.values(field.dimensions).forEach((thumb: any) => {
        if (thumb?.url) urls.push(thumb.url)
      })
    }
  }

  return urls
}

function extractAllImageUrls(document: any): string[] {
  const urls: string[] = []
  
  function traverse(obj: any) {
    if (!obj || typeof obj !== 'object') return

    if (Array.isArray(obj)) {
      obj.forEach(item => traverse(item))
      return
    }

    // Check if this looks like an image field
    if (obj.url && typeof obj.url === 'string' && obj.url.includes('images.prismic.io')) {
      urls.push(...extractImageUrlsFromField(obj))
    }

    // Traverse nested objects
    Object.values(obj).forEach(value => traverse(value))
  }

  traverse(document)
  return [...new Set(urls)] // Remove duplicates
}

async function loadExistingMapping(): Promise<ImageMapping> {
  try {
    const data = await fs.readFile(MAPPING_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return {}
  }
}

async function saveMapping(mapping: ImageMapping): Promise<void> {
  await fs.writeFile(MAPPING_FILE, JSON.stringify(mapping, null, 2))
}

async function main() {
  if (!PRISMIC_ACCESS_TOKEN) {
    consola.error('PRISMIC_ACCESS_TOKEN environment variable is required')
    process.exit(1)
  }

  consola.start('Starting Prismic image download...')
  
  // Ensure directories exist
  await ensureDir(PUBLIC_DIR)

  // Load existing mapping
  const mapping = await loadExistingMapping()
  
  // Initialize Prismic client
  const client = createClient<AllDocumentTypes>(repositoryName, {
    accessToken: PRISMIC_ACCESS_TOKEN,
  })

  try {
    // Get all documents from Prismic
    consola.info('Fetching all documents from Prismic...')
    const documents = await client.dangerouslyGetAll()
    consola.info(`Found ${documents.length} documents`)

    // Extract all image URLs
    const allImageUrls = new Set<string>()
    documents.forEach(doc => {
      const urls = extractAllImageUrls(doc)
      urls.forEach(url => allImageUrls.add(url))
    })

    consola.info(`Found ${allImageUrls.size} unique images`)

    // Download images that aren't already downloaded
    let downloadCount = 0
    let skippedCount = 0

    for (const imageUrl of allImageUrls) {
      const localFilename = generateLocalFilename(imageUrl)
      const localPath = join(PUBLIC_DIR, localFilename)
      const relativePath = `/prismic-images/${localFilename}`

      // Check if already downloaded
      if (mapping[imageUrl]) {
        try {
          await fs.access(localPath)
          skippedCount++
          continue
        } catch {
          // File doesn't exist, re-download
        }
      }

      try {
        await downloadImage(imageUrl, localPath)
        
        // Get file stats
        const stats = await fs.stat(localPath)
        
        // Update mapping
        mapping[imageUrl] = {
          localPath: relativePath,
          downloadedAt: new Date().toISOString(),
          fileSize: stats.size,
        }
        
        downloadCount++
        
        // Save mapping periodically
        if (downloadCount % 10 === 0) {
          await saveMapping(mapping)
        }
      } catch (error) {
        consola.error(`Failed to download ${imageUrl}:`, error)
      }
    }

    // Save final mapping
    await saveMapping(mapping)

    consola.success(`✅ Download complete!`)
    consola.info(`📊 Stats:`)
    consola.info(`  - Downloaded: ${downloadCount} images`)
    consola.info(`  - Skipped (already exists): ${skippedCount} images`)
    consola.info(`  - Total unique images: ${allImageUrls.size}`)
    consola.info(`  - Mapping saved to: ${MAPPING_FILE}`)

  } catch (error) {
    consola.error('Failed to download Prismic images:', error)
    process.exit(1)
  }
}

// Only run if this script is called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error)
}

export { main as downloadPrismicImages }
