import type { Browser } from 'playwright'
import { mkdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { chromium } from 'playwright'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { captureScreenshot, screenshotFilename, VRT_VIEWPORTS } from '../../scripts/vrt/capture'
import { assertLocalIsReachable, attachVisualArtifact, createDiff } from './utils'

const LOCAL_URL = process.env.VRT_LOCAL_URL ?? 'http://127.0.0.1:3000'
const DEFAULT_THRESHOLD = Number.parseFloat(process.env.VRT_DIFF_THRESHOLD ?? '0.03')
const REFERENCE_DIR = resolve(process.cwd(), 'tests/vrt/reference')
const OUTPUT_DIR = resolve(process.cwd(), 'tests/vrt/output')

/** Pages under VRT. Add entries here as you onboard new pages. `threshold` overrides the default per page. */
export const VRT_PAGES: { path: string, slug: string, threshold?: number }[] = [
  { path: '/', slug: 'home' },
  { path: '/wallet', slug: 'wallet', threshold: 0.28 },
  { path: '/staking', slug: 'staking', threshold: 0.15 },
  { path: '/nimiq-pay', slug: 'nimiq-pay', threshold: 0.10 },
  { path: '/about', slug: 'about', threshold: 0.06 },
  { path: '/community', slug: 'community', threshold: 0.30 },
  { path: '/apps', slug: 'apps', threshold: 0.44 },
  { path: '/blog', slug: 'blog', threshold: 0.22 },
  { path: '/buy-and-sell', slug: 'buy-and-sell', threshold: 0.10 },
]

let browser: Browser

describe('page visual regression', () => {
  beforeAll(async () => {
    await assertLocalIsReachable(LOCAL_URL)
    mkdirSync(OUTPUT_DIR, { recursive: true })
    browser = await chromium.launch({ headless: true })
  })

  afterAll(async () => {
    await browser?.close()
  })

  for (const page of VRT_PAGES) {
    describe(page.slug, () => {
      for (const viewport of VRT_VIEWPORTS) {
        it(`matches production (${viewport.name})`, async (ctx) => {
          const threshold = page.threshold ?? DEFAULT_THRESHOLD
          const refFileName = screenshotFilename(page.slug, viewport)
          const referencePath = join(REFERENCE_DIR, refFileName)
          const actualPath = join(OUTPUT_DIR, `${page.slug}-${viewport.name}-actual.png`)
          const diffPath = join(OUTPUT_DIR, `${page.slug}-${viewport.name}-diff.png`)

          await captureScreenshot({
            browser,
            baseUrl: LOCAL_URL,
            viewport,
            outputPath: actualPath,
            pagePath: page.path,
          })

          const result = createDiff(referencePath, actualPath, diffPath)
          await attachVisualArtifact(ctx, {
            label: `${page.slug} (${viewport.name})`,
            referencePath,
            actualPath,
            diffPath,
            width: result.width,
            height: result.height,
            diffRatio: result.diffRatio,
          })

          // eslint-disable-next-line no-console
          console.log(`  ${page.slug} (${viewport.name}): ${(result.diffRatio * 100).toFixed(3)}% (threshold: ${(threshold * 100).toFixed(1)}%)`)
          expect(
            result.diffRatio,
            `Visual mismatch ${page.slug} (${viewport.name}) exceeded ${(threshold * 100).toFixed(1)}%. Actual: ${(result.diffRatio * 100).toFixed(3)}%`,
          ).toBeLessThanOrEqual(threshold)
        })
      }
    })
  }
})
