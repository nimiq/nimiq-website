import { Buffer } from 'node:buffer'
import { existsSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import process from 'node:process'
import { $fetch } from 'ofetch'

const PRISMIC_SOURCES = [
  'https://images.prismic.io/nimiq/',
  'https://nimiq.cdn.prismic.io/nimiq/',
  'https://prismic-io.s3.amazonaws.com/nimiq/',
]

export default defineEventHandler(async (event) => {
  const { environment } = useRuntimeConfig().public
  if (environment.isProduction || environment.isNuxthubProduction || environment.isNuxthubPreview)
    return

  const url = event.node.req.url
  if (!url?.startsWith('/assets/images/prismic/'))
    return

  const filename = url.split('/').pop()
  if (!filename)
    return

  const localPath = join(process.cwd(), 'public', 'assets/images/prismic', filename)

  if (existsSync(localPath))
    return

  for (const source of PRISMIC_SOURCES) {
    try {
      const response = await $fetch(`${source}${filename}`, { responseType: 'arrayBuffer', timeout: 10000 })

      await mkdir(dirname(localPath), { recursive: true })
      await writeFile(localPath, Buffer.from(response))

      const ext = filename.split('.').pop()?.toLowerCase()
      const contentType = getContentType(ext)
      setHeader(event, 'Content-Type', contentType)
      setHeader(event, 'Cache-Control', 'public, max-age=31536000')
      return Buffer.from(response)
    }
    catch {
      continue
    }
  }

  setResponseStatus(event, 404)
  return { error: 'Image not found' }
})

function getContentType(ext?: string) {
  const types: Record<string, string> = {
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    avif: 'image/avif',
  }
  return types[ext || ''] || 'application/octet-stream'
}
