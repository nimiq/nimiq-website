import { exec } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { promisify } from 'node:util'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

const execAsync = promisify(exec)

const LOCAL = 'http://localhost:3000'
const PROD = 'https://nimiq.com'
const SCREENSHOTS_DIR = 'tests/screenshots'

const PAGES = ['/', '/about', '/developers', '/exchanges', '/staking', '/blog']

const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'mobile', width: 375, height: 667 },
]

// 0% target but allow small threshold for anti-aliasing
const PIXEL_DIFF_THRESHOLD = 0.01

interface ComparisonResult {
  page: string
  viewport: string
  localPath: string
  prodPath: string
  diffPath: string
  diffPixels: number
  totalPixels: number
  diffPercent: number
  passed: boolean
  localSnapshot?: string
  prodSnapshot?: string
}

async function agentBrowser(cmd: string, session: string = 'default'): Promise<string> {
  const { stdout, stderr } = await execAsync(`npx agent-browser --session ${session} ${cmd}`, { timeout: 120000 })
  if (stderr && !stderr.includes('npm warn'))
    console.warn('agent-browser stderr:', stderr)
  return stdout.trim()
}

async function ensureDir(dir: string) {
  if (!existsSync(dir))
    mkdirSync(dir, { recursive: true })
}

async function takeFullPageScreenshot(url: string, outputPath: string, session: string, viewport: { width: number, height: number }): Promise<void> {
  await agentBrowser(`set viewport ${viewport.width} ${viewport.height}`, session)
  await agentBrowser(`open "${url}"`, session)
  // Wait for page to fully load
  await agentBrowser('wait 2000', session)
  await agentBrowser(`screenshot --full "${outputPath}"`, session)
}

async function getAccessibilitySnapshot(session: string): Promise<string> {
  return await agentBrowser('snapshot --compact', session)
}

function compareImages(localPath: string, prodPath: string, diffPath: string): { diffPixels: number, totalPixels: number } {
  const localImg = PNG.sync.read(readFileSync(localPath))
  const prodImg = PNG.sync.read(readFileSync(prodPath))

  // Handle different image sizes by padding the smaller one
  const maxWidth = Math.max(localImg.width, prodImg.width)
  const maxHeight = Math.max(localImg.height, prodImg.height)

  const padImage = (img: PNG, targetWidth: number, targetHeight: number): PNG => {
    if (img.width === targetWidth && img.height === targetHeight)
      return img
    const padded = new PNG({ width: targetWidth, height: targetHeight })
    // Fill with white background
    for (let i = 0; i < padded.data.length; i += 4) {
      padded.data[i] = 255
      padded.data[i + 1] = 255
      padded.data[i + 2] = 255
      padded.data[i + 3] = 255
    }
    // Copy original image
    PNG.bitblt(img, padded, 0, 0, img.width, img.height, 0, 0)
    return padded
  }

  const paddedLocal = padImage(localImg, maxWidth, maxHeight)
  const paddedProd = padImage(prodImg, maxWidth, maxHeight)

  const diff = new PNG({ width: maxWidth, height: maxHeight })

  const diffPixels = pixelmatch(
    paddedLocal.data,
    paddedProd.data,
    diff.data,
    maxWidth,
    maxHeight,
    { threshold: 0.1 },
  )

  writeFileSync(diffPath, PNG.sync.write(diff))

  return { diffPixels, totalPixels: maxWidth * maxHeight }
}

function generateHtmlReport(results: ComparisonResult[], outputPath: string) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Visual Comparison Report</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #f5f5f5; padding: 2rem; }
    h1 { margin-bottom: 1rem; }
    .summary { background: white; padding: 1rem; border-radius: 8px; margin-bottom: 2rem; }
    .summary.pass { border-left: 4px solid #22c55e; }
    .summary.fail { border-left: 4px solid #ef4444; }
    .results { display: grid; gap: 2rem; }
    .result { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .result-header { padding: 1rem; border-bottom: 1px solid #e5e5e5; display: flex; justify-content: space-between; align-items: center; }
    .result-header.pass { background: #dcfce7; }
    .result-header.fail { background: #fee2e2; }
    .badge { padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; }
    .badge.pass { background: #22c55e; color: white; }
    .badge.fail { background: #ef4444; color: white; }
    .images { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding: 1rem; }
    .image-container { text-align: center; }
    .image-container img { max-width: 100%; border: 1px solid #e5e5e5; border-radius: 4px; }
    .image-container p { margin-top: 0.5rem; font-size: 0.875rem; color: #666; }
    .snapshot { padding: 1rem; background: #f9f9f9; font-family: monospace; font-size: 0.75rem; white-space: pre-wrap; max-height: 300px; overflow: auto; }
    .error { color: #ef4444; padding: 1rem; }
    details { margin-top: 1rem; }
    summary { cursor: pointer; padding: 0.5rem 1rem; background: #f0f0f0; }
  </style>
</head>
<body>
  <h1>Visual Comparison Report</h1>
  <div class="summary ${results.every(r => r.passed) ? 'pass' : 'fail'}">
    <strong>Overall: ${results.filter(r => r.passed).length}/${results.length} passed</strong>
    <p>Generated: ${new Date().toISOString()}</p>
  </div>
  <div class="results">
    ${results.map(r => `
    <div class="result">
      <div class="result-header ${r.passed ? 'pass' : 'fail'}">
        <div>
          <strong>${r.page}</strong> - ${r.viewport}
          <span>(${r.diffPercent.toFixed(2)}% diff)</span>
        </div>
        <span class="badge ${r.passed ? 'pass' : 'fail'}">${r.passed ? 'PASS' : 'FAIL'}</span>
      </div>
      ${r.totalPixels > 0
        ? `
      <div class="images">
        <div class="image-container">
          <img src="${r.localPath.replace('tests/screenshots/', '')}" alt="Local">
          <p>Local (localhost:3000)</p>
        </div>
        <div class="image-container">
          <img src="${r.prodPath.replace('tests/screenshots/', '')}" alt="Production">
          <p>Production (nimiq.com)</p>
        </div>
        <div class="image-container">
          <img src="${r.diffPath.replace('tests/screenshots/', '')}" alt="Diff">
          <p>Difference (${r.diffPixels.toLocaleString()} pixels)</p>
        </div>
      </div>
      ${r.localSnapshot || r.prodSnapshot
        ? `
      <details>
        <summary>Accessibility Snapshots</summary>
        <div style="display: grid; grid-template-columns: 1fr 1fr;">
          <div>
            <h4 style="padding: 0.5rem;">Local</h4>
            <div class="snapshot">${r.localSnapshot || 'N/A'}</div>
          </div>
          <div>
            <h4 style="padding: 0.5rem;">Production</h4>
            <div class="snapshot">${r.prodSnapshot || 'N/A'}</div>
          </div>
        </div>
      </details>
      `
        : ''}
      `
        : ''}
    </div>
    `).join('')}
  </div>
</body>
</html>`

  writeFileSync(outputPath, html)
}

describe('visual Comparison', () => {
  const results: ComparisonResult[] = []

  beforeAll(async () => {
    await ensureDir(SCREENSHOTS_DIR)

    // Check if local dev server is running
    try {
      const response = await fetch(LOCAL)
      if (!response.ok)
        throw new Error(`Local server returned ${response.status}`)
    }
    catch {
      throw new Error(`Local dev server not running at ${LOCAL}. Run 'pnpm dev' first.`)
    }
  })

  afterAll(async () => {
    // Generate report
    const reportPath = join(SCREENSHOTS_DIR, 'report.html')
    generateHtmlReport(results, reportPath)
    console.warn(`\nReport generated: ${reportPath}`)

    // Close browser sessions
    await agentBrowser('close', 'local').catch(() => {})
    await agentBrowser('close', 'prod').catch(() => {})
  })

  for (const page of PAGES) {
    for (const viewport of VIEWPORTS) {
      it(`${page} - ${viewport.name}`, async () => {
        const pageName = page === '/' ? 'home' : page.slice(1)
        const pageDir = join(SCREENSHOTS_DIR, pageName, viewport.name)
        await ensureDir(pageDir)

        const localPath = join(pageDir, 'local.png')
        const prodPath = join(pageDir, 'prod.png')
        const diffPath = join(pageDir, 'diff.png')

        const result: ComparisonResult = {
          page,
          viewport: viewport.name,
          localPath,
          prodPath,
          diffPath,
          diffPixels: 0,
          totalPixels: 0,
          diffPercent: 100,
          passed: false,
        }

        try {
          // Take screenshots in parallel using different sessions
          await Promise.all([
            takeFullPageScreenshot(`${LOCAL}${page}`, localPath, 'local', viewport),
            takeFullPageScreenshot(`${PROD}${page}`, prodPath, 'prod', viewport),
          ])

          // Get accessibility snapshots
          const [localSnapshot, prodSnapshot] = await Promise.all([
            getAccessibilitySnapshot('local'),
            getAccessibilitySnapshot('prod'),
          ])
          result.localSnapshot = localSnapshot
          result.prodSnapshot = prodSnapshot

          // Compare images
          const comparison = compareImages(localPath, prodPath, diffPath)
          result.diffPixels = comparison.diffPixels
          result.totalPixels = comparison.totalPixels
          result.diffPercent = (comparison.diffPixels / comparison.totalPixels) * 100
          result.passed = result.diffPercent <= PIXEL_DIFF_THRESHOLD

          results.push(result)

          expect(result.diffPercent, `Visual diff exceeded ${PIXEL_DIFF_THRESHOLD}% (got ${result.diffPercent.toFixed(2)}%)`).toBeLessThanOrEqual(PIXEL_DIFF_THRESHOLD)
        }
        catch (error) {
          // Only push if not already pushed (expect failures happen after push)
          if (!results.includes(result))
            results.push(result)
          throw error
        }
      }, 120000) // 2 minute timeout per test
    }
  }
})
