#!/usr/bin/env node
import { mkdir } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import process from 'node:process'
import { chromium } from 'playwright'
import { captureScreenshot, pathToSlug, screenshotFilename, VRT_VIEWPORTS } from './capture'

const PROD_URL = process.env.VRT_PROD_URL ?? 'https://nimiq.com'
const REFERENCE_DIR = resolve(process.cwd(), 'tests/vrt/reference')

function parsePages(): { path: string, slug: string }[] {
  const args = process.argv.slice(2)
  const pages: { path: string, slug: string }[] = []

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--page' && args[i + 1]) {
      const path = args[++i]!
      pages.push({ path, slug: pathToSlug(path) })
    }
  }

  // Default: homepage only (backward compat)
  if (pages.length === 0)
    pages.push({ path: '/', slug: 'home' })

  return pages
}

async function main(): Promise<void> {
  const pages = parsePages()
  await mkdir(REFERENCE_DIR, { recursive: true })

  const browser = await chromium.launch({ headless: true })

  try {
    for (const page of pages) {
      for (const viewport of VRT_VIEWPORTS) {
        const outputPath = join(REFERENCE_DIR, screenshotFilename(page.slug, viewport))
        await captureScreenshot({
          browser,
          baseUrl: PROD_URL,
          viewport,
          outputPath,
          pagePath: page.path,
        })
        console.log(`Updated reference: ${outputPath}`)
      }
    }
  }
  finally {
    await browser.close()
  }
}

main().catch((error) => {
  console.error('[vrt] Failed to update production references')
  console.error(error)
  process.exitCode = 1
})
