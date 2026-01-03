import type { Buffer } from 'node:buffer'
import type { Browser } from 'playwright'
import { mkdirSync, writeFileSync } from 'node:fs'
import pixelmatch from 'pixelmatch'
import { chromium } from 'playwright'
import { PNG } from 'pngjs'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

const LOCAL = 'http://localhost:3000'
const PROD = 'https://nimiq.com'
const SCREENSHOT_DIR = 'tests/screenshots'

const CONFIG = {
  allowedMismatchedPixelRatio: 0.40, // 40% of pixels can differ (relaxed for migration)
  pixelmatchThreshold: 0.1, // color sensitivity (0-1)
  allowedHeightDifferenceRatio: 0.50, // 50% height difference allowed (some prod pages have duplicate content bugs)
}

// Page/section specific threshold overrides (see INTENTIONAL_CHANGES.md files)
const SECTION_OVERRIDES: Record<string, Record<number, number>> = {
  '/oasis': { 0: 0.70 }, // Hero globe has intentional CSS differences
}

// Pages with external iframes that prevent networkidle from completing
const PAGES_WITH_IFRAMES = ['/oasis', '/contact']

// URL mappings for production (old site uses .html extension for some pages)
const PROD_URL_MAP: Record<string, string> = {
  '/terms': '/terms.html',
}

const PAGES = [
  '/',
  '/about',
  '/apps',
  '/buy-and-sell',
  '/community',
  '/contact',
  '/cryptopaymentlink',
  '/litepaper',
  '/nimiq-pay',
  '/newsletter',
  '/oasis',
  '/onepager',
  '/roadmap',
  '/staking',
  '/team',
  // '/terms',  // Prod is static HTML without <main>/<section> - see tests/screenshots/terms/INTENTIONAL_CHANGES.md
  // '/activation-terms',  // Prod returns 404 - page never existed on old site, new content from migrated Prismic
  '/wallet',
  '/bug-bounty',
  '/blog',
  '/blog/multisig-shared-wallet',
  '/blog/virtual-nimiq-cards',
  '/blog/nimiq-proof-of-stake-is-now-live',
]

const VIEWPORTS = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1440, height: 900 },
]

type Viewport = typeof VIEWPORTS[0]

interface SectionScreenshot { index: number, buffer: Buffer, bgColor?: string, hasSectionGap?: boolean }

const CONSENT_COOKIE = { name: 'nimiq-consent', value: JSON.stringify({ accepted: true, version: '1.0', timestamp: Date.now() }), path: '/' }

function getPageName(path: string): string {
  if (path === '/')
    return 'home'
  return path.replace(/^\//, '').replace(/\//g, '-')
}

function createDirs(pageName: string, viewportName: string) {
  const base = `${SCREENSHOT_DIR}/${pageName}/${viewportName}`
  mkdirSync(`${base}/local`, { recursive: true })
  mkdirSync(`${base}/prod`, { recursive: true })
  mkdirSync(`${base}/diff`, { recursive: true })
  return base
}

let browser: Browser

beforeAll(async () => {
  browser = await chromium.launch()
})
afterAll(async () => {
  await browser.close()
})

async function capturePageSections(url: string, viewport: Viewport, pagePath: string): Promise<SectionScreenshot[]> {
  const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } })
  page.setDefaultTimeout(60000)
  const domain = url.includes('localhost') ? 'localhost' : 'nimiq.com'
  await page.context().addCookies([{ ...CONSENT_COOKIE, domain }])
  // Use 'load' for pages with iframes (networkidle never completes due to external resources)
  const waitUntil = PAGES_WITH_IFRAMES.includes(pagePath) ? 'load' : 'networkidle'
  await page.goto(url, { waitUntil, timeout: 60000 })

  // Hide UI elements that differ between environments
  const isLocal = url.includes('localhost')
  await page.addStyleTag({
    content: `
      body > [role="alertdialog"] { display: none !important; }
      ${isLocal
          ? `main ~ div[fixed], main ~ [class*="fixed"], [class*="environment"], [class*="env-pill"], div[bottom-20][right-20][fixed] { display: none !important; }`
          : `[role="banner"]:has(+ header), header { display: none !important; }`
      }
    `,
  })
  await page.waitForTimeout(2000)

  const sections = page.locator('main section')
  const count = await sections.count()
  const screenshots: SectionScreenshot[] = []

  for (let i = 0; i < count; i++) {
    const section = sections.nth(i)
    const isVisible = await section.isVisible()
    if (!isVisible)
      continue
    await section.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)
    const buffer = await section.screenshot()
    const bgColor = await section.evaluate(el => getComputedStyle(el).backgroundColor)
    const hasSectionGap = await section.evaluate(el => el.hasAttribute('nq-section-gap'))
    screenshots.push({ index: i, buffer, bgColor, hasSectionGap })
  }

  await page.close()
  return screenshots
}

function mergeBuffersVertically(buffers: Buffer[]): Buffer {
  if (buffers.length === 1)
    return buffers[0]
  const pngs = buffers.map(b => PNG.sync.read(b))
  const width = pngs[0].width
  const totalHeight = pngs.reduce((h, p) => h + p.height, 0)
  const merged = new PNG({ width, height: totalHeight })

  let y = 0
  for (const png of pngs) {
    for (let row = 0; row < png.height; row++) {
      for (let col = 0; col < width; col++) {
        const srcIdx = (row * png.width + col) * 4
        const dstIdx = ((y + row) * width + col) * 4
        merged.data[dstIdx] = png.data[srcIdx]
        merged.data[dstIdx + 1] = png.data[srcIdx + 1]
        merged.data[dstIdx + 2] = png.data[srcIdx + 2]
        merged.data[dstIdx + 3] = png.data[srcIdx + 3]
      }
    }
    y += png.height
  }
  return PNG.sync.write(merged)
}

function mergeAdjacentSections(sections: SectionScreenshot[]): SectionScreenshot[] {
  if (sections.length === 0)
    return []
  const merged: SectionScreenshot[] = []
  let currentBuffers: Buffer[] = [sections[0].buffer]
  let currentBgColor = sections[0].bgColor

  for (let i = 1; i < sections.length; i++) {
    const section = sections[i]
    // Only merge if same bg color AND next section doesn't have nq-section-gap
    const canMerge = section.bgColor === currentBgColor && !section.hasSectionGap
    if (canMerge) {
      currentBuffers.push(section.buffer)
    }
    else {
      merged.push({ index: merged.length, buffer: mergeBuffersVertically(currentBuffers), bgColor: currentBgColor })
      currentBuffers = [section.buffer]
      currentBgColor = section.bgColor
    }
  }
  merged.push({ index: merged.length, buffer: mergeBuffersVertically(currentBuffers), bgColor: currentBgColor })
  return merged
}

function generateHtmlReport(baseDir: string, localSections: SectionScreenshot[], prodSections: SectionScreenshot[], failures: string[]) {
  const maxSections = Math.max(localSections.length, prodSections.length)
  const rows = []

  for (let i = 0; i < maxSections; i++) {
    const hasLocal = i < localSections.length
    const hasProd = i < prodSections.length
    const localImg = hasLocal ? `local/section-${i}.png` : ''
    const prodImg = hasProd ? `prod/section-${i}.png` : ''
    const diffImg = hasLocal && hasProd ? `diff/section-${i}.png` : ''

    rows.push(`
      <tr>
        <td><strong>Section ${i}</strong></td>
        <td>${hasLocal ? `<img src="${localImg}" style="max-width:100%">` : '<em>missing</em>'}</td>
        <td>${hasProd ? `<img src="${prodImg}" style="max-width:100%">` : '<em>missing</em>'}</td>
        <td>${diffImg ? `<img src="${diffImg}" style="max-width:100%" onerror="this.parentElement.innerHTML='<em>no diff</em>'">` : ''}</td>
      </tr>
    `)
  }

  const html = `<!DOCTYPE html>
<html><head><title>Visual Diff Report</title>
<style>
  body { font-family: system-ui; margin: 20px; background: #1a1a1a; color: #fff; }
  table { border-collapse: collapse; width: 100%; }
  th, td { border: 1px solid #333; padding: 10px; text-align: center; vertical-align: top; }
  th { background: #2a2a2a; }
  img { max-height: 400px; object-fit: contain; }
  .failures { background: #4a1a1a; padding: 15px; margin-bottom: 20px; border-radius: 8px; }
  .failures pre { margin: 0; white-space: pre-wrap; }
</style></head><body>
<h1>Visual Diff: ${baseDir.split('/').slice(-2).join('/')}</h1>
${failures.length ? `<div class="failures"><strong>Failures:</strong><pre>${failures.join('\n')}</pre></div>` : ''}
<table>
  <tr><th>Section</th><th>Local</th><th>Prod</th><th>Diff</th></tr>
  ${rows.join('')}
</table>
</body></html>`

  writeFileSync(`${baseDir}/report.html`, html)
}

function compareImages(img1: Buffer, img2: Buffer, diffPath: string): { diffPixels: number, totalPixels: number, diffRatio: number, sizeMismatch: boolean, heightDiff?: string } {
  const png1 = PNG.sync.read(img1)
  const png2 = PNG.sync.read(img2)

  // Width must match exactly
  if (png1.width !== png2.width) {
    return { diffPixels: -1, totalPixels: 0, diffRatio: 1, sizeMismatch: true, heightDiff: `width mismatch: ${png1.width} vs ${png2.width}` }
  }

  // Height can differ by allowedHeightDifferenceRatio
  const heightDiffRatio = Math.abs(png1.height - png2.height) / Math.max(png1.height, png2.height)
  if (heightDiffRatio > CONFIG.allowedHeightDifferenceRatio) {
    return { diffPixels: -1, totalPixels: 0, diffRatio: 1, sizeMismatch: true, heightDiff: `${(heightDiffRatio * 100).toFixed(1)}% (${png1.height} vs ${png2.height})` }
  }

  // If heights differ but within tolerance, compare the overlapping region
  const compareHeight = Math.min(png1.height, png2.height)
  const diff = new PNG({ width: png1.width, height: compareHeight })

  // Compare only the overlapping top portion
  const tempPng1 = new PNG({ width: png1.width, height: compareHeight })
  const tempPng2 = new PNG({ width: png2.width, height: compareHeight })
  png1.data.copy(tempPng1.data, 0, 0, compareHeight * png1.width * 4)
  png2.data.copy(tempPng2.data, 0, 0, compareHeight * png2.width * 4)

  const diffPixels = pixelmatch(tempPng1.data, tempPng2.data, diff.data, png1.width, compareHeight, { threshold: CONFIG.pixelmatchThreshold })
  const totalPixels = png1.width * compareHeight
  const diffRatio = diffPixels / totalPixels

  // Only save diff if there are differences
  if (diffPixels > 0) {
    writeFileSync(diffPath, PNG.sync.write(diff))
  }

  return { diffPixels, totalPixels, diffRatio, sizeMismatch: false }
}

describe('visual Regression', () => {
  for (const path of PAGES) {
    for (const viewport of VIEWPORTS) {
      it(`${path} - ${viewport.name}`, async () => {
        const pageName = getPageName(path)
        const baseDir = createDirs(pageName, viewport.name)

        // Capture sections from both environments
        const prodPath = PROD_URL_MAP[path] || path
        const [localRaw, prodRaw] = await Promise.all([
          capturePageSections(`${LOCAL}${path}`, viewport, path),
          capturePageSections(`${PROD}${prodPath}`, viewport, path),
        ])

        // Merge adjacent sections with same background color
        const localSections = mergeAdjacentSections(localRaw)
        const prodSections = mergeAdjacentSections(prodRaw)

        // Save all screenshots
        for (const s of localSections) {
          writeFileSync(`${baseDir}/local/section-${s.index}.png`, s.buffer)
        }
        for (const s of prodSections) {
          writeFileSync(`${baseDir}/prod/section-${s.index}.png`, s.buffer)
        }

        const failures: string[] = []

        // Check section count mismatch
        if (localSections.length !== prodSections.length) {
          failures.push(`Section count mismatch: local=${localSections.length}, prod=${prodSections.length}`)
        }

        // Compare matching sections
        const minSections = Math.min(localSections.length, prodSections.length)
        for (let i = 0; i < minSections; i++) {
          const local = localSections[i]
          const prod = prodSections[i]
          const diffPath = `${baseDir}/diff/section-${i}.png`

          const result = compareImages(local.buffer, prod.buffer, diffPath)
          const threshold = SECTION_OVERRIDES[path]?.[i] ?? CONFIG.allowedMismatchedPixelRatio

          if (result.sizeMismatch) {
            failures.push(`Section ${i}: size mismatch${result.heightDiff ? ` (${result.heightDiff})` : ''}`)
          }
          else if (result.diffRatio > threshold) {
            failures.push(`Section ${i}: ${(result.diffRatio * 100).toFixed(2)}% diff (threshold: ${threshold * 100}%)`)
          }
        }

        // Generate HTML report
        generateHtmlReport(baseDir, localSections, prodSections, failures)

        if (failures.length > 0) {
          expect.fail(`${failures.length} issue(s):\n${failures.join('\n')}\nReport: ${baseDir}/report.html`)
        }
      })
    }
  }
})
