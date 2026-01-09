import type { RichTextField } from '@prismicio/client'
import { Buffer } from 'node:buffer'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import process from 'node:process'
import { asText, serialize, wrapMapSerializer } from '@prismicio/richtext'
import { consola } from 'consola'

/**
 * Normalize Prismic image filename
 * Reuses logic from modules/prismic-images.ts
 */
export function normalizeFileName(fileName: string): string {
  // Extract base filename and extension, removing Prismic URL parameters
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

const IMAGE_FOLDER = 'assets/images/prismic'

/**
 * Convert Prismic CDN URL to local path
 */
export function prismicImageToLocalPath(url: string): string {
  if (!url?.includes('prismic'))
    return url
  const fileName = normalizeFileName(url.split('/').pop() || 'image')
  return `/${IMAGE_FOLDER}/${fileName}`
}

/**
 * Convert Prismic CDN URL to local path for blog images
 */
export function blogImageToLocalPath(url: string, blogSlug: string): string {
  if (!url?.includes('prismic'))
    return url
  const fileName = normalizeFileName(url.split('/').pop() || 'image')
  return `/images/blog/${blogSlug}/${fileName}`
}

function cleanHeadingText(text: string): string {
  // Remove bold markers if entire heading is bold: "**Overview**" -> "Overview"
  // Keep partial bold: "Winter of **2025**" -> "Winter of **2025**"
  return text.replace(/^\*\*(.+)\*\*$/, '$1')
}

/**
 * Sanitize URLs to handle malformed URIs that cause MDC parser errors
 * - Large data URIs with complex content can cause decoding issues
 * - URLs with embedded markdown syntax (e.g., %[text](url)) are malformed
 */
function sanitizeUrl(url: string, linkText: string): string {
  if (!url)
    return url

  // Check for embedded markdown link syntax in URL (e.g., %[text](url))
  // This happens when markdown gets incorrectly embedded in URL encoding
  if (url.includes('%[') && url.includes('](')) {
    consola.warn(`Malformed URL with embedded markdown detected in link "${linkText}", attempting to fix`)
    // Remove the markdown link syntax, keeping just the URL encoding
    url = url.replace(/%\[([^\]]+)\]\(([^)]+)\)/g, '%2F$1')
  }

  // Detect data URIs
  if (url.startsWith('data:')) {
    // Data URIs longer than 500 chars often cause MDC parser issues
    // especially those with complex JSON/regex patterns
    if (url.length > 500) {
      consola.warn(`Large data URI detected in link "${linkText}" (${url.length} chars), replacing with placeholder`)
      // Return a placeholder that indicates the file can be requested
      return '#contact-for-file'
    }
  }

  return url
}

const markdownSerializer = wrapMapSerializer({
  heading1: ({ children }) => `# ${cleanHeadingText(children.join(''))}\n\n`,
  heading2: ({ children }) => `## ${cleanHeadingText(children.join(''))}\n\n`,
  heading3: ({ children }) => `### ${cleanHeadingText(children.join(''))}\n\n`,
  heading4: ({ children }) => `#### ${cleanHeadingText(children.join(''))}\n\n`,
  heading5: ({ children }) => `##### ${cleanHeadingText(children.join(''))}\n\n`,
  heading6: ({ children }) => `###### ${cleanHeadingText(children.join(''))}\n\n`,
  paragraph: ({ children }) => `${children.join('')}\n\n`,
  preformatted: ({ node }) => `\`\`\`\n${node.text}\n\`\`\`\n\n`,
  strong: ({ children }) => `**${children.join('')}**`,
  em: ({ children }) => `*${children.join('')}*`,
  listItem: ({ children }) => `- ${children.join('')}\n`,
  oListItem: ({ children }) => `1. ${children.join('')}\n`,
  list: ({ children }) => `${children.join('')}\n`,
  oList: ({ children }) => `${children.join('')}\n`,
  image: ({ node }) => {
    const localPath = prismicImageToLocalPath(node.url)
    return `![${node.alt || ''}](${localPath})\n\n`
  },
  embed: ({ node }) => `\n${node.oembed.html}\n\n`,
  hyperlink: ({ node, children }) => {
    const linkText = children.join('')
    const sanitizedUrl = sanitizeUrl(node.data.url, linkText)
    return `[${linkText}](${sanitizedUrl})`
  },
  label: ({ children }) => children.join(''),
  span: ({ text }) => text,
})

/**
 * Convert Prismic rich text to markdown
 */
export function richTextToMarkdown(richText: RichTextField): string {
  if (!richText || richText.length === 0)
    return ''
  return serialize(richText, markdownSerializer).join('')
}

/**
 * Convert rich text to plain text (for frontmatter)
 */
export function richTextToPlainText(richText: RichTextField): string {
  if (!richText || richText.length === 0)
    return ''
  return asText(richText)
}

/**
 * Sanitize HTML links in markdown content to fix malformed URLs
 * Fixes patterns like %[text](url) that got embedded in URL encoding
 */
export function sanitizeMarkdownHtmlLinks(markdown: string): string {
  // Fix malformed URLs in HTML href attributes
  // Pattern: href="...%[text](url)..." → href="...%2Ftext..."
  return markdown.replace(
    /href="([^"]*)%\[([^\]]+)\]\(([^)]+)\)([^"]*)"/g,
    (match, before, text, url, after) => {
      consola.warn(`Fixed malformed URL in HTML link: %[${text}](${url})`)
      // Replace the malformed pattern with proper encoding
      return `href="${before}%2F${text}${after}"`
    },
  )
}

/**
 * Convert Prismic rich text to plain text (no markdown headers)
 * Used for page YAML fields where headers are added by components
 */
export function richTextToPlainTextNoHeaders(richText: RichTextField): string {
  if (!richText || richText.length === 0)
    return ''
  const markdown = richTextToMarkdown(richText)
  // Remove markdown headers but keep content
  return markdown.replace(/^#{1,6}\s+/gm, '').trim()
}

/**
 * Convert Prismic CDN URL to local path for exchanges
 */
export function exchangeLogoToLocalPath(url: string, slug: string): string {
  if (!url?.includes('prismic'))
    return url
  const fileName = normalizeFileName(url.split('/').pop() || 'logo')
  const ext = fileName.split('.').pop()
  return `/images/exchanges/${slug}.${ext}`
}

/**
 * Download image from URL and save locally
 */
export async function downloadImage(url: string, localPath: string): Promise<void> {
  if (!url)
    return

  try {
    const response = await fetch(url)
    if (!response.ok)
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`)

    const buffer = await response.arrayBuffer()
    const fullPath = join(process.cwd(), 'public', localPath)
    const dir = join(fullPath, '..')
    await mkdir(dir, { recursive: true })
    await writeFile(fullPath, Buffer.from(buffer))
  }
  catch (error) {
    throw new Error(`Failed to download image from ${url}: ${error}`)
  }
}
