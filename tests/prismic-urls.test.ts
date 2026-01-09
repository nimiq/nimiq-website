import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

const FORBIDDEN_URL_PREFIX = 'https://nimiq.cdn.prismic.io/nimiq/'
const CONTENT_DIR = join(process.cwd(), 'content')

interface PrismicUrlMatch {
  file: string
  url: string
  line: number
  context: string
}

function findPrismicUrls(dir: string, matches: PrismicUrlMatch[] = []): PrismicUrlMatch[] {
  const entries = readdirSync(dir)

  for (const entry of entries) {
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      findPrismicUrls(fullPath, matches)
    }
    else if (entry.endsWith('.md') || entry.endsWith('.yml') || entry.endsWith('.yaml') || entry.endsWith('.json')) {
      const content = readFileSync(fullPath, 'utf-8')
      const lines = content.split('\n')

      lines.forEach((line, index) => {
        const urlRegex = new RegExp(`${FORBIDDEN_URL_PREFIX.replace(/[./]/g, '\\$&')}[^\\s)>"']*`, 'g')
        let match: RegExpExecArray | null
        // eslint-disable-next-line no-cond-assign
        while ((match = urlRegex.exec(line)) !== null) {
          matches.push({
            file: fullPath.replace(process.cwd(), ''),
            url: match[0],
            line: index + 1,
            context: line.trim().slice(0, 100) + (line.trim().length > 100 ? '...' : ''),
          })
        }
      })
    }
  }

  return matches
}

describe('prismic CDN URLs', () => {
  it('should not contain any Prismic CDN URLs in content', () => {
    const matches = findPrismicUrls(CONTENT_DIR)

    if (matches.length > 0) {
      const report = matches.map(m => `  - ${m.file}:${m.line}\n    URL: ${m.url}\n    Context: ${m.context}`).join('\n\n')
      const summary = `\n\nFound ${matches.length} Prismic CDN URL(s) that should be converted to local paths:\n\n${report}\n\nThese URLs should have been converted during prismic-sync. Check scripts/prismic-sync.ts.`

      expect.fail(summary)
    }

    expect(matches).toHaveLength(0)
  })
})
