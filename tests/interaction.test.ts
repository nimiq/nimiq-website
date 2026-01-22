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
const SCREENSHOTS_DIR = 'tests/screenshots/interactions'

// 2% threshold for hover state comparisons (more lenient due to animation timing)
const PIXEL_DIFF_THRESHOLD = 0.02

interface InteractionResult {
  name: string
  type: 'hover' | 'dropdown' | 'navigation'
  localPath: string
  prodPath: string
  diffPath: string
  diffPixels: number
  totalPixels: number
  diffPercent: number
  passed: boolean
  error?: string
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

function compareImages(localPath: string, prodPath: string, diffPath: string): { diffPixels: number, totalPixels: number } {
  const localImg = PNG.sync.read(readFileSync(localPath))
  const prodImg = PNG.sync.read(readFileSync(prodPath))

  const maxWidth = Math.max(localImg.width, prodImg.width)
  const maxHeight = Math.max(localImg.height, prodImg.height)

  const padImage = (img: PNG, targetWidth: number, targetHeight: number): PNG => {
    if (img.width === targetWidth && img.height === targetHeight)
      return img
    const padded = new PNG({ width: targetWidth, height: targetHeight })
    for (let i = 0; i < padded.data.length; i += 4) {
      padded.data[i] = 255
      padded.data[i + 1] = 255
      padded.data[i + 2] = 255
      padded.data[i + 3] = 255
    }
    PNG.bitblt(img, padded, 0, 0, img.width, img.height, 0, 0)
    return padded
  }

  const paddedLocal = padImage(localImg, maxWidth, maxHeight)
  const paddedProd = padImage(prodImg, maxWidth, maxHeight)
  const diff = new PNG({ width: maxWidth, height: maxHeight })

  const diffPixels = pixelmatch(paddedLocal.data, paddedProd.data, diff.data, maxWidth, maxHeight, { threshold: 0.1 })
  writeFileSync(diffPath, PNG.sync.write(diff))

  return { diffPixels, totalPixels: maxWidth * maxHeight }
}

function generateHtmlReport(results: InteractionResult[], outputPath: string) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interaction Test Report</title>
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
    .badge.hover { background: #3b82f6; color: white; margin-left: 0.5rem; }
    .badge.dropdown { background: #8b5cf6; color: white; margin-left: 0.5rem; }
    .badge.navigation { background: #f59e0b; color: white; margin-left: 0.5rem; }
    .images { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding: 1rem; }
    .image-container { text-align: center; }
    .image-container img { max-width: 100%; border: 1px solid #e5e5e5; border-radius: 4px; }
    .image-container p { margin-top: 0.5rem; font-size: 0.875rem; color: #666; }
    .error { color: #ef4444; padding: 1rem; }
  </style>
</head>
<body>
  <h1>Interaction Test Report</h1>
  <div class="summary ${results.every(r => r.passed) ? 'pass' : 'fail'}">
    <strong>Overall: ${results.filter(r => r.passed).length}/${results.length} passed</strong>
    <p>Generated: ${new Date().toISOString()}</p>
  </div>
  <div class="results">
    ${results.map(r => `
    <div class="result">
      <div class="result-header ${r.passed ? 'pass' : 'fail'}">
        <div>
          <strong>${r.name}</strong>
          <span class="badge ${r.type}">${r.type}</span>
          ${r.totalPixels > 0 ? `<span>(${r.diffPercent.toFixed(2)}% diff)</span>` : ''}
        </div>
        <span class="badge ${r.passed ? 'pass' : 'fail'}">${r.passed ? 'PASS' : 'FAIL'}</span>
      </div>
      ${r.error ? `<div class="error">${r.error}</div>` : ''}
      ${r.totalPixels > 0
        ? `
      <div class="images">
        <div class="image-container">
          <img src="${r.localPath.replace('tests/screenshots/interactions/', '')}" alt="Local">
          <p>Local (localhost:3000)</p>
        </div>
        <div class="image-container">
          <img src="${r.prodPath.replace('tests/screenshots/interactions/', '')}" alt="Production">
          <p>Production (nimiq.com)</p>
        </div>
        <div class="image-container">
          <img src="${r.diffPath.replace('tests/screenshots/interactions/', '')}" alt="Diff">
          <p>Difference (${r.diffPixels.toLocaleString()} pixels)</p>
        </div>
      </div>
      `
        : ''}
    </div>
    `).join('')}
  </div>
</body>
</html>`
  writeFileSync(outputPath, html)
}

// Navigation menu items with dropdowns
const NAV_DROPDOWNS = [
  { name: 'Apps', buttonRef: 'Apps' },
  { name: 'Tech', buttonRef: 'Tech' },
  { name: 'Community', buttonRef: 'Community' },
  { name: 'Project', buttonRef: 'Project' },
  { name: 'Get started', buttonRef: 'Get started' },
]

// Interactive elements to test hover states
const HOVER_ELEMENTS = [
  { name: 'Create Wallet Button', selector: 'a[href="https://wallet.nimiq.com"]', page: '/' },
  { name: 'Learn More Link', selector: 'a[href="/staking"]', page: '/' },
  { name: 'Community Link', selector: 'a[href="/community"]', page: '/' },
]

// Navigation links to verify
const NAV_LINKS = [
  { name: 'About page', url: '/about', expectedTitle: 'About' },
  { name: 'Developers page', url: '/developers', expectedTitle: 'Developers' },
  { name: 'Staking page', url: '/staking', expectedTitle: 'Staking' },
  { name: 'Blog page', url: '/blog', expectedTitle: 'Blog' },
]

describe('interaction Tests', () => {
  const results: InteractionResult[] = []

  beforeAll(async () => {
    await ensureDir(SCREENSHOTS_DIR)
    await ensureDir(join(SCREENSHOTS_DIR, 'hover'))
    await ensureDir(join(SCREENSHOTS_DIR, 'dropdown'))
    await ensureDir(join(SCREENSHOTS_DIR, 'navigation'))

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
    const reportPath = join(SCREENSHOTS_DIR, 'report.html')
    generateHtmlReport(results, reportPath)
    console.warn(`\nInteraction report generated: ${reportPath}`)

    // Close all sessions
    await agentBrowser('close', 'local-int').catch(() => {})
    await agentBrowser('close', 'prod-int').catch(() => {})
  })

  describe('dropdown Menus', () => {
    for (const dropdown of NAV_DROPDOWNS) {
      it(`${dropdown.name} dropdown opens correctly`, async () => {
        const localPath = join(SCREENSHOTS_DIR, 'dropdown', `${dropdown.name.toLowerCase().replace(/\s+/g, '-')}-local.png`)
        const prodPath = join(SCREENSHOTS_DIR, 'dropdown', `${dropdown.name.toLowerCase().replace(/\s+/g, '-')}-prod.png`)
        const diffPath = join(SCREENSHOTS_DIR, 'dropdown', `${dropdown.name.toLowerCase().replace(/\s+/g, '-')}-diff.png`)

        const result: InteractionResult = {
          name: `${dropdown.name} dropdown`,
          type: 'dropdown',
          localPath,
          prodPath,
          diffPath,
          diffPixels: 0,
          totalPixels: 0,
          diffPercent: 100,
          passed: false,
        }

        try {
          // Set viewport for both sessions
          await Promise.all([
            agentBrowser('set viewport 1280 800', 'local-int'),
            agentBrowser('set viewport 1280 800', 'prod-int'),
          ])

          // Navigate to homepage
          await Promise.all([
            agentBrowser(`open "${LOCAL}"`, 'local-int'),
            agentBrowser(`open "${PROD}"`, 'prod-int'),
          ])
          await Promise.all([
            agentBrowser('wait 2000', 'local-int'),
            agentBrowser('wait 2000', 'prod-int'),
          ])

          // Hover on dropdown button to trigger dropdown
          await Promise.all([
            agentBrowser(`hover "${dropdown.buttonRef}"`, 'local-int'),
            agentBrowser(`hover "${dropdown.buttonRef}"`, 'prod-int'),
          ])

          // Wait for dropdown animation
          await Promise.all([
            agentBrowser('wait 500', 'local-int'),
            agentBrowser('wait 500', 'prod-int'),
          ])

          // Screenshot the dropdown area (navbar region)
          await Promise.all([
            agentBrowser(`screenshot "${localPath}"`, 'local-int'),
            agentBrowser(`screenshot "${prodPath}"`, 'prod-int'),
          ])

          // Compare images
          const comparison = compareImages(localPath, prodPath, diffPath)
          result.diffPixels = comparison.diffPixels
          result.totalPixels = comparison.totalPixels
          result.diffPercent = (comparison.diffPixels / comparison.totalPixels) * 100
          result.passed = result.diffPercent <= PIXEL_DIFF_THRESHOLD

          results.push(result)

          expect(result.diffPercent, `Dropdown visual diff exceeded ${PIXEL_DIFF_THRESHOLD}% (got ${result.diffPercent.toFixed(2)}%)`).toBeLessThanOrEqual(PIXEL_DIFF_THRESHOLD)
        }
        catch (error) {
          result.error = error instanceof Error ? error.message : String(error)
          if (!results.includes(result))
            results.push(result)
          throw error
        }
      }, 60000)
    }
  })

  describe('hover States', () => {
    for (const element of HOVER_ELEMENTS) {
      it(`${element.name} hover state matches`, async () => {
        const safeName = element.name.toLowerCase().replace(/\s+/g, '-')
        const localPath = join(SCREENSHOTS_DIR, 'hover', `${safeName}-local.png`)
        const prodPath = join(SCREENSHOTS_DIR, 'hover', `${safeName}-prod.png`)
        const diffPath = join(SCREENSHOTS_DIR, 'hover', `${safeName}-diff.png`)

        const result: InteractionResult = {
          name: `${element.name} hover`,
          type: 'hover',
          localPath,
          prodPath,
          diffPath,
          diffPixels: 0,
          totalPixels: 0,
          diffPercent: 100,
          passed: false,
        }

        try {
          await Promise.all([
            agentBrowser('set viewport 1280 800', 'local-int'),
            agentBrowser('set viewport 1280 800', 'prod-int'),
          ])

          // Navigate to the page
          await Promise.all([
            agentBrowser(`open "${LOCAL}${element.page}"`, 'local-int'),
            agentBrowser(`open "${PROD}${element.page}"`, 'prod-int'),
          ])
          await Promise.all([
            agentBrowser('wait 2000', 'local-int'),
            agentBrowser('wait 2000', 'prod-int'),
          ])

          // Get element by selector and hover
          // agent-browser uses text content to find elements, so we use the link text
          const linkText = element.name.replace(' Button', '').replace(' Link', '')
          await Promise.all([
            agentBrowser(`hover "${linkText}"`, 'local-int'),
            agentBrowser(`hover "${linkText}"`, 'prod-int'),
          ])

          // Wait for hover transition
          await Promise.all([
            agentBrowser('wait 300', 'local-int'),
            agentBrowser('wait 300', 'prod-int'),
          ])

          // Take screenshot
          await Promise.all([
            agentBrowser(`screenshot "${localPath}"`, 'local-int'),
            agentBrowser(`screenshot "${prodPath}"`, 'prod-int'),
          ])

          const comparison = compareImages(localPath, prodPath, diffPath)
          result.diffPixels = comparison.diffPixels
          result.totalPixels = comparison.totalPixels
          result.diffPercent = (comparison.diffPixels / comparison.totalPixels) * 100
          result.passed = result.diffPercent <= PIXEL_DIFF_THRESHOLD

          results.push(result)

          expect(result.diffPercent, `Hover state visual diff exceeded ${PIXEL_DIFF_THRESHOLD}% (got ${result.diffPercent.toFixed(2)}%)`).toBeLessThanOrEqual(PIXEL_DIFF_THRESHOLD)
        }
        catch (error) {
          result.error = error instanceof Error ? error.message : String(error)
          if (!results.includes(result))
            results.push(result)
          throw error
        }
      }, 60000)
    }
  })

  describe('navigation Links', () => {
    for (const link of NAV_LINKS) {
      it(`${link.name} navigates correctly`, async () => {
        const result: InteractionResult = {
          name: link.name,
          type: 'navigation',
          localPath: '',
          prodPath: '',
          diffPath: '',
          diffPixels: 0,
          totalPixels: 0,
          diffPercent: 0,
          passed: false,
        }

        try {
          // Test local navigation
          await agentBrowser('set viewport 1280 800', 'local-int')
          await agentBrowser(`open "${LOCAL}${link.url}"`, 'local-int')
          await agentBrowser('wait 2000', 'local-int')

          // Get the page snapshot to verify content loaded
          const localSnapshot = await agentBrowser('snapshot --compact', 'local-int')

          // Verify the page loaded (check for heading or title)
          const hasExpectedContent = localSnapshot.toLowerCase().includes(link.expectedTitle.toLowerCase())

          if (!hasExpectedContent) {
            result.error = `Page ${link.url} did not contain expected content "${link.expectedTitle}"`
            result.passed = false
          }
          else {
            result.passed = true
          }

          results.push(result)

          expect(hasExpectedContent, `Navigation to ${link.url} failed - expected "${link.expectedTitle}" in content`).toBe(true)
        }
        catch (error) {
          result.error = error instanceof Error ? error.message : String(error)
          if (!results.includes(result))
            results.push(result)
          throw error
        }
      }, 60000)
    }
  })
})
