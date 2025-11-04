import type { RichTextField } from '@prismicio/client'
import { asText, serialize, wrapMapSerializer } from '@prismicio/richtext'

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

const markdownSerializer = wrapMapSerializer({
  heading1: ({ children }) => `# ${children.join('')}\n\n`,
  heading2: ({ children }) => `## ${children.join('')}\n\n`,
  heading3: ({ children }) => `### ${children.join('')}\n\n`,
  heading4: ({ children }) => `#### ${children.join('')}\n\n`,
  heading5: ({ children }) => `##### ${children.join('')}\n\n`,
  heading6: ({ children }) => `###### ${children.join('')}\n\n`,
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
  hyperlink: ({ node, children }) => `[${children.join('')}](${node.data.url})`,
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
