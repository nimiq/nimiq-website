import type { RichTextField } from '@prismicio/client'
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
/**
 * Prismic Convert Script
 * Converts Prismic JSON to Nuxt Content Markdown files
 * Run: nr prismic:convert
 */
import process from 'node:process'
import { asText } from '@prismicio/client'
import { consola } from 'consola'

interface PrismicDocument {
  id: string
  uid: string
  type: string
  data: Record<string, any>
  first_publication_date: string
  last_publication_date: string
  [key: string]: any
}

interface ConversionStats {
  converted: number
  failed: number
  missingImages: string[]
  errors: string[]
}

const stats: ConversionStats = {
  converted: 0,
  failed: 0,
  missingImages: [],
  errors: [],
}

function richTextToMarkdown(richText: RichTextField): string {
  if (!richText || richText.length === 0)
    return ''

  // Simple conversion - extract plain text for now
  // TODO: Handle formatting, links, images properly
  return asText(richText)
}

function generateFrontmatter(doc: PrismicDocument): string {
  const frontmatter: Record<string, any> = {
    id: doc.id,
    uid: doc.uid,
    type: doc.type,
    published: doc.first_publication_date,
    updated: doc.last_publication_date,
  }

  // Extract common fields
  if (doc.data.title) {
    try {
      frontmatter.title = asText(doc.data.title)
    }
    catch {
      frontmatter.title = String(doc.data.title)
    }
  }
  if (doc.data.meta_title) {
    frontmatter.metaTitle = doc.data.meta_title
  }
  if (doc.data.meta_description) {
    frontmatter.metaDescription = doc.data.meta_description
  }

  const yaml = Object.entries(frontmatter)
    .map(([key, value]) => {
      if (typeof value === 'string') {
        // Escape quotes and wrap in quotes if contains special chars
        const escaped = value.replace(/"/g, '\\"')
        return `${key}: "${escaped}"`
      }
      return `${key}: ${JSON.stringify(value)}`
    })
    .join('\n')

  return `---\n${yaml}\n---\n`
}

async function convertDocument(type: string, filename: string): Promise<void> {
  try {
    const jsonPath = join(process.cwd(), 'scripts', 'prismic-data', type, filename)
    const jsonContent = await readFile(jsonPath, 'utf-8')
    const doc: PrismicDocument = JSON.parse(jsonContent)

    // Generate frontmatter
    const frontmatter = generateFrontmatter(doc)

    // Convert body content
    let content = ''
    if (doc.data.body) {
      // TODO: Handle slices properly
      content = '\n<!-- Slices need to be converted -->\n'
    }
    else if (doc.data.content) {
      content = `\n${richTextToMarkdown(doc.data.content)}\n`
    }

    const markdown = frontmatter + content

    // Write to content directory
    const contentDir = join(process.cwd(), 'content', type)
    await mkdir(contentDir, { recursive: true })

    const mdFilename = filename.replace('.json', '.md')
    const mdPath = join(contentDir, mdFilename)
    await writeFile(mdPath, markdown)

    stats.converted++
  }
  catch (error) {
    stats.failed++
    stats.errors.push(`${type}/${filename}: ${error}`)
    consola.error(`Failed to convert ${type}/${filename}:`, error)
  }
}

async function convertDocumentType(type: string): Promise<void> {
  const dataDir = join(process.cwd(), 'scripts', 'prismic-data', type)

  try {
    const files = await readdir(dataDir)
    const jsonFiles = files.filter(f => f.endsWith('.json'))

    consola.start(`Converting ${jsonFiles.length} ${type} documents...`)

    for (const file of jsonFiles) {
      await convertDocument(type, file)
    }

    consola.success(`Converted ${type}`)
  }
  catch {
    consola.warn(`No data found for ${type}`)
  }
}

async function main() {
  consola.info('Starting Prismic conversion...')

  // Get all document types from prismic-data directory
  const dataDir = join(process.cwd(), 'scripts', 'prismic-data')
  const types = await readdir(dataDir)

  for (const type of types) {
    await convertDocumentType(type)
  }

  // Print stats
  consola.box({
    title: 'Conversion Complete',
    message: `
✓ Converted: ${stats.converted}
✗ Failed: ${stats.failed}
⚠ Missing images: ${stats.missingImages.length}

${stats.errors.length > 0 ? `Errors:\n${stats.errors.join('\n')}` : ''}
    `.trim(),
  })

  if (stats.failed > 0) {
    process.exit(1)
  }
}

main().catch((error) => {
  consola.error('Conversion failed:', error)
  process.exit(1)
})
