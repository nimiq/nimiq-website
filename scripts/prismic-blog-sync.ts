import type { BlogPageDocument } from '../prismicio-types.js'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import process from 'node:process'
import { consola } from 'consola'
import { prismicImageToLocalPath, richTextToMarkdown, richTextToPlainText } from './utils'

const PRISMIC_API = 'https://nimiq.cdn.prismic.io/api/v2'
const PRISMIC_TOKEN = process.env.PRISMIC_ACCESS_TOKEN

interface ConversionStats {
  success: number
  failed: number
  errors: Array<{ uid: string, error: any }>
}

let masterRef: string

async function getMasterRef(): Promise<string> {
  if (masterRef)
    return masterRef

  const url = `${PRISMIC_API}?access_token=${PRISMIC_TOKEN}`
  const response = await fetch(url)
  const data = await response.json()
  masterRef = data.refs.find((ref: any) => ref.id === 'master')?.ref || ''
  return masterRef
}

async function fetchBlogPosts(): Promise<BlogPageDocument[]> {
  const ref = await getMasterRef()
  const allDocs: BlogPageDocument[] = []
  let page = 1

  consola.start('Fetching blog posts from Prismic...')

  while (true) {
    const url = new URL(`${PRISMIC_API}/documents/search`)
    url.searchParams.set('q', '[[at(document.type,"blog_page")]]')
    url.searchParams.set('pageSize', '100')
    url.searchParams.set('page', page.toString())
    url.searchParams.set('ref', ref)
    url.searchParams.set('access_token', PRISMIC_TOKEN!)

    const response = await fetch(url.href)
    const data = await response.json()
    allDocs.push(...data.results)

    if (!data.next_page)
      break
    page++
  }

  consola.success(`Fetched ${allDocs.length} blog posts`)
  return allDocs
}

function extractImageUrl(doc: BlogPageDocument): string | undefined {
  // Priority 1: FullScreenImage slice
  const imageSlice = doc.data.body?.find((s: any) => s.slice_type === 'full_screen_image')
  if (imageSlice?.primary?.image?.url) {
    return prismicImageToLocalPath(imageSlice.primary.image.url)
  }

  // Priority 2: Main image field
  if (doc.data.image?.url) {
    return prismicImageToLocalPath(doc.data.image.url)
  }

  // Priority 3: Meta image
  if (doc.data.meta_image?.url) {
    return prismicImageToLocalPath(doc.data.meta_image.url)
  }

  return undefined
}

function generateFrontmatter(doc: BlogPageDocument): string {
  const frontmatter: Record<string, any> = {
    title: richTextToPlainText(doc.data.title),
    description: richTextToPlainText(doc.data.subline),
    slug: doc.uid,
    publishedAt: doc.data.publish_date || doc.first_publication_date,
    updatedAt: doc.last_publication_date,
    authors: doc.data.authors.map(a => a.name),
    draft: doc.data.draft || false,
  }

  // Add image if exists
  const imageUrl = extractImageUrl(doc)
  if (imageUrl) {
    frontmatter.image = imageUrl
  }

  // Add SEO fields only if different from base
  if (doc.data.meta_title && doc.data.meta_title !== frontmatter.title) {
    frontmatter.ogTitle = doc.data.meta_title
  }
  if (doc.data.meta_description && doc.data.meta_description !== frontmatter.description) {
    frontmatter.ogDescription = doc.data.meta_description
  }
  if (doc.data.meta_image?.url) {
    frontmatter.ogImage = prismicImageToLocalPath(doc.data.meta_image.url)
  }

  // Generate YAML
  const yaml = Object.entries(frontmatter)
    .map(([key, value]) => {
      if (value === undefined || value === null)
        return null
      if (typeof value === 'string') {
        const escaped = value.replace(/"/g, '\\"')
        return `${key}: "${escaped}"`
      }
      if (Array.isArray(value)) {
        return `${key}:\n${value.map(v => `  - "${v}"`).join('\n')}`
      }
      return `${key}: ${JSON.stringify(value)}`
    })
    .filter(Boolean)
    .join('\n')

  return `---\n${yaml}\n---\n`
}

function convertBodyToMarkdown(doc: BlogPageDocument): string {
  let markdown = ''

  // Handle main text field (older posts)
  if (doc.data.text && doc.data.text.length > 0) {
    markdown += richTextToMarkdown(doc.data.text)
  }

  // Handle slices (newer posts)
  if (doc.data.body && doc.data.body.length > 0) {
    for (const slice of doc.data.body) {
      if (slice.slice_type === 'rich_text') {
        markdown += richTextToMarkdown(slice.primary.richText)
      }
      // Skip full_screen_image slices (already in frontmatter)
    }
  }

  return markdown.trim()
}

function cleanMarkdown(content: string): string {
  return content
    // Remove irregular whitespace (non-breaking spaces, zero-width spaces, etc)
    .replace(/[\u00A0\u1680\u180E\u2000-\u200B\u202F\u205F\u3000\uFEFF]/g, ' ')
    // Remove trailing spaces
    .replace(/ +$/gm, '')
    // Remove multiple consecutive blank lines
    .replace(/\n{3,}/g, '\n\n')
}

function convertBlogPost(doc: BlogPageDocument): string {
  const frontmatter = generateFrontmatter(doc)
  const body = convertBodyToMarkdown(doc)
  const markdown = `${frontmatter}\n${body}\n`
  return cleanMarkdown(markdown)
}

async function saveMarkdownFile(slug: string, content: string, publishDate: string): Promise<void> {
  const contentDir = join(process.cwd(), 'content', 'blog')
  await mkdir(contentDir, { recursive: true })

  // Extract year-month-day from publish date
  const date = new Date(publishDate)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const datePrefix = `${year}-${month}-${day}`

  const filepath = join(contentDir, `${datePrefix}_${slug}.md`)
  await writeFile(filepath, content, 'utf-8')
}

async function main() {
  if (!PRISMIC_TOKEN) {
    consola.error('PRISMIC_ACCESS_TOKEN not found in environment')
    process.exit(1)
  }

  consola.info('Starting Prismic blog sync...\n')

  const stats: ConversionStats = {
    success: 0,
    failed: 0,
    errors: [],
  }

  try {
    const posts = await fetchBlogPosts()

    consola.start(`Converting ${posts.length} blog posts...\n`)

    for (const doc of posts) {
      try {
        const markdown = convertBlogPost(doc)
        const publishDate = doc.data.publish_date || doc.first_publication_date
        await saveMarkdownFile(doc.uid, markdown, publishDate)
        stats.success++
        consola.success(`✓ ${doc.uid}`)
      }
      catch (error) {
        stats.failed++
        stats.errors.push({ uid: doc.uid, error })
        consola.error(`✗ ${doc.uid}:`, error)
      }
    }

    consola.box({
      title: 'Blog Sync Complete',
      message: `
✓ Converted: ${stats.success}
✗ Failed: ${stats.failed}

${stats.errors.length > 0 ? `Errors:\n${stats.errors.map(e => `- ${e.uid}: ${e.error}`).join('\n')}` : ''}
      `.trim(),
    })

    if (stats.failed > 0) {
      process.exit(1)
    }
  }
  catch (error) {
    consola.error('Sync failed:', error)
    process.exit(1)
  }
}

main()
