import { exec } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { promisify } from 'node:util'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

const execAsync = promisify(exec)

const LOCAL = 'http://localhost:3000'
const PROD = 'https://www.nimiq.com'
const BASE_DIR = 'tests/screenshots'

// Note: /developers is a separate project (developer-center) served from same domain
// Note: /terms and /activation-terms return 404 on production (excluded from tests)
const PAGES = ['/', '/about', '/buy-and-sell', '/staking', '/blog', '/wallet', '/community', '/nimiq-pay', '/apps', '/oasis', '/roadmap', '/cryptopaymentlink', '/newsletter', '/team', '/contact', '/litepaper', '/bug-bounty', '/onepager']
const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'mobile', width: 375, height: 667 },
]

// Block slicing configuration
const BLOCK_HEIGHT = 500 // pixels per block
const PIXEL_DIFF_THRESHOLD = 8 // percent per block (allows for animations, randomized icons, font rendering)

type TestType = 'visual' | 'semantic' | 'interaction'
type TestStatus = 'pass' | 'fail' | 'skip' | 'error'

interface BlockResult {
  index: number
  localPath: string
  prodPath: string
  diffPath: string
  diffPercent: number
  status: TestStatus
}

interface TestResult {
  id: string
  type: TestType
  page: string
  viewport: string
  status: TestStatus
  issues: string[]
  diffPercent?: number
  localPath?: string
  prodPath?: string
  diffPath?: string
  duration?: number
  blocks?: BlockResult[]
}

interface TestSummary {
  total: number
  passed: number
  failed: number
  skipped: number
  errors: number
  results: TestResult[]
  timestamp: string
}

const allResults: TestResult[] = []

async function agentBrowser(cmd: string, session: string = 'default'): Promise<string> {
  const { stdout, stderr } = await execAsync(`npx agent-browser --session ${session} ${cmd}`, { timeout: 120000 })
  if (stderr && !stderr.includes('npm warn'))
    console.warn('agent-browser stderr:', stderr)
  return stdout.trim()
}

function ensureDir(dir: string) {
  if (!existsSync(dir))
    mkdirSync(dir, { recursive: true })
}

function sliceImage(img: PNG, blockIndex: number, blockHeight: number): PNG {
  const startY = blockIndex * blockHeight
  const endY = Math.min(startY + blockHeight, img.height)
  const sliceHeight = endY - startY

  if (sliceHeight <= 0)
    return new PNG({ width: img.width, height: 0 })

  const slice = new PNG({ width: img.width, height: sliceHeight })
  PNG.bitblt(img, slice, 0, startY, img.width, sliceHeight, 0, 0)
  return slice
}

function compareBlocks(localPath: string, prodPath: string, outputDir: string, blockHeight: number): BlockResult[] {
  if (!existsSync(localPath) || !existsSync(prodPath))
    return []

  const localImg = PNG.sync.read(readFileSync(localPath))
  const prodImg = PNG.sync.read(readFileSync(prodPath))

  const maxHeight = Math.max(localImg.height, prodImg.height)
  const maxWidth = Math.max(localImg.width, prodImg.width)
  const numBlocks = Math.ceil(maxHeight / blockHeight)

  const results: BlockResult[] = []

  for (let i = 0; i < numBlocks; i++) {
    const localSlice = sliceImage(localImg, i, blockHeight)
    const prodSlice = sliceImage(prodImg, i, blockHeight)

    const sliceHeight = Math.max(localSlice.height, prodSlice.height)
    if (sliceHeight === 0)
      continue

    // Pad slices to same dimensions
    const padSlice = (slice: PNG, targetWidth: number, targetHeight: number): PNG => {
      if (slice.width === targetWidth && slice.height === targetHeight)
        return slice
      const padded = new PNG({ width: targetWidth, height: targetHeight })
      // Fill with white
      for (let j = 0; j < padded.data.length; j += 4) {
        padded.data[j] = 255
        padded.data[j + 1] = 255
        padded.data[j + 2] = 255
        padded.data[j + 3] = 255
      }
      if (slice.height > 0)
        PNG.bitblt(slice, padded, 0, 0, Math.min(slice.width, targetWidth), Math.min(slice.height, targetHeight), 0, 0)
      return padded
    }

    const paddedLocal = padSlice(localSlice, maxWidth, sliceHeight)
    const paddedProd = padSlice(prodSlice, maxWidth, sliceHeight)
    const diff = new PNG({ width: maxWidth, height: sliceHeight })

    const diffPixels = pixelmatch(paddedLocal.data, paddedProd.data, diff.data, maxWidth, sliceHeight, { threshold: 0.2 })
    const totalPixels = maxWidth * sliceHeight
    const diffPercent = (diffPixels / totalPixels) * 100

    const blockLocalPath = join(outputDir, `block-${i}-local.png`)
    const blockProdPath = join(outputDir, `block-${i}-prod.png`)
    const blockDiffPath = join(outputDir, `block-${i}-diff.png`)

    writeFileSync(blockLocalPath, PNG.sync.write(paddedLocal))
    writeFileSync(blockProdPath, PNG.sync.write(paddedProd))
    writeFileSync(blockDiffPath, PNG.sync.write(diff))

    results.push({
      index: i,
      localPath: blockLocalPath,
      prodPath: blockProdPath,
      diffPath: blockDiffPath,
      diffPercent,
      status: diffPercent <= PIXEL_DIFF_THRESHOLD ? 'pass' : 'fail',
    })
  }

  return results
}

function compareImages(localPath: string, prodPath: string, diffPath: string): { diffPixels: number, totalPixels: number, sizeMismatch: boolean } {
  if (!existsSync(localPath) || !existsSync(prodPath))
    return { diffPixels: 0, totalPixels: 1, sizeMismatch: false }

  const localImg = PNG.sync.read(readFileSync(localPath))
  const prodImg = PNG.sync.read(readFileSync(prodPath))

  const sizeMismatch = localImg.width !== prodImg.width || localImg.height !== prodImg.height
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

  const diffPixels = pixelmatch(paddedLocal.data, paddedProd.data, diff.data, maxWidth, maxHeight, { threshold: 0.2 })
  writeFileSync(diffPath, PNG.sync.write(diff))

  return { diffPixels, totalPixels: maxWidth * maxHeight, sizeMismatch }
}

function formatDuration(ms: number): string {
  if (ms < 1000)
    return `${ms}ms`
  return `${(ms / 1000).toFixed(1)}s`
}

function printResult(result: TestResult) {
  const icon = result.status === 'pass' ? '✓' : result.status === 'fail' ? '✗' : result.status === 'skip' ? '○' : '!'
  const color = result.status === 'pass' ? '\x1B[32m' : result.status === 'fail' ? '\x1B[31m' : '\x1B[33m'
  const reset = '\x1B[0m'

  const page = result.page === '/' ? 'home' : result.page.slice(1)
  const diffInfo = result.diffPercent !== undefined ? ` (${result.diffPercent.toFixed(2)}% diff)` : ''
  const durationInfo = result.duration ? ` [${formatDuration(result.duration)}]` : ''

  // eslint-disable-next-line no-console
  console.log(`${color}${icon}${reset} ${result.type.padEnd(11)} ${page.padEnd(12)} ${result.viewport.padEnd(8)} ${result.status.toUpperCase()}${diffInfo}${durationInfo}`)

  // Show block info for visual tests
  if (result.blocks && result.blocks.length > 0) {
    const passedBlocks = result.blocks.filter(b => b.status === 'pass').length
    const failedBlocks = result.blocks.filter(b => b.status === 'fail')
    // eslint-disable-next-line no-console
    console.log(`    └─ Blocks: ${passedBlocks}/${result.blocks.length} passed`)
    if (failedBlocks.length > 0) {
      const firstFailed = failedBlocks[0]
      // eslint-disable-next-line no-console
      console.log(`    └─ First failed: block-${firstFailed.index} (${firstFailed.diffPercent.toFixed(2)}% diff, y=${firstFailed.index * BLOCK_HEIGHT}px)`)
    }
  }

  if (result.issues.length > 0 && result.status !== 'pass') {
    for (const issue of result.issues.slice(0, 3)) {
      // eslint-disable-next-line no-console
      console.log(`    └─ ${issue}`)
    }
    if (result.issues.length > 3)
      // eslint-disable-next-line no-console
      console.log(`    └─ ... and ${result.issues.length - 3} more issues`)
  }
}

function generateHtmlReport(summary: TestSummary, outputPath: string) {
  const groupedResults: Record<string, TestResult[]> = {}
  for (const result of summary.results) {
    const page = result.page === '/' ? 'home' : result.page.slice(1)
    const key = `${page}/${result.viewport}`
    if (!groupedResults[key])
      groupedResults[key] = []
    groupedResults[key].push(result)
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Visual Parity Test Report</title>
  <style>
    :root { --pass: #22c55e; --fail: #ef4444; --skip: #f59e0b; --error: #dc2626; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #0f172a; color: #e2e8f0; min-height: 100vh; }
    .container { max-width: 1400px; margin: 0 auto; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; }
    .timestamp { color: #64748b; font-size: 0.875rem; margin-bottom: 2rem; }
    .summary { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem; }
    .stat { background: #1e293b; border-radius: 8px; padding: 1rem; text-align: center; }
    .stat-value { font-size: 2rem; font-weight: 700; }
    .stat-value.pass { color: var(--pass); }
    .stat-value.fail { color: var(--fail); }
    .stat-label { font-size: 0.75rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; }
    .progress { height: 8px; background: #334155; border-radius: 4px; overflow: hidden; margin-bottom: 2rem; display: flex; }
    .progress-pass { background: var(--pass); }
    .progress-fail { background: var(--fail); }
    .progress-skip { background: var(--skip); }
    .page-group { background: #1e293b; border-radius: 12px; margin-bottom: 1.5rem; overflow: hidden; }
    .page-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; background: #334155; cursor: pointer; }
    .page-header:hover { background: #3f4f65; }
    .page-title { font-weight: 600; display: flex; align-items: center; gap: 0.5rem; }
    .page-badge { font-size: 0.75rem; padding: 0.25rem 0.5rem; border-radius: 4px; font-weight: 600; }
    .page-badge.pass { background: rgba(34,197,94,0.2); color: var(--pass); }
    .page-badge.fail { background: rgba(239,68,68,0.2); color: var(--fail); }
    .tests { padding: 1rem; }
    .test-row { display: grid; grid-template-columns: 100px 1fr 80px 100px; align-items: center; padding: 0.75rem; border-radius: 6px; gap: 1rem; }
    .test-row:hover { background: #334155; }
    .test-type { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; }
    .test-type.visual { color: #3b82f6; }
    .test-type.semantic { color: #8b5cf6; }
    .test-type.interaction { color: #f59e0b; }
    .test-issues { font-size: 0.875rem; color: #94a3b8; }
    .test-issues .issue { background: rgba(239,68,68,0.1); padding: 0.25rem 0.5rem; border-radius: 4px; margin: 0.25rem 0; font-size: 0.75rem; color: #fca5a5; }
    .test-diff { font-size: 0.875rem; font-weight: 500; text-align: right; }
    .test-diff.good { color: var(--pass); }
    .test-diff.bad { color: var(--fail); }
    .test-status { font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.75rem; border-radius: 4px; text-align: center; text-transform: uppercase; }
    .test-status.pass { background: rgba(34,197,94,0.2); color: var(--pass); }
    .test-status.fail { background: rgba(239,68,68,0.2); color: var(--fail); }
    .test-status.skip { background: rgba(245,158,11,0.2); color: var(--skip); }
    .test-status.error { background: rgba(220,38,38,0.2); color: var(--error); }
    .comparison { display: none; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding: 1rem; background: #0f172a; border-radius: 8px; margin-top: 0.5rem; }
    .comparison.show { display: grid; }
    .comparison img { width: 100%; border-radius: 4px; border: 1px solid #334155; }
    .comparison p { font-size: 0.75rem; color: #64748b; margin-top: 0.5rem; text-align: center; }
    .toggle-btn { background: #334155; border: none; color: #94a3b8; padding: 0.25rem 0.5rem; border-radius: 4px; cursor: pointer; font-size: 0.75rem; }
    .toggle-btn:hover { background: #475569; }
    .blocks-container { margin-top: 1rem; }
    .block-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding: 1rem; background: #0f172a; border-radius: 8px; margin-bottom: 0.5rem; border: 2px solid transparent; }
    .block-row.failed { border-color: var(--fail); }
    .block-row.passed { border-color: var(--pass); opacity: 0.6; }
    .block-row img { width: 100%; border-radius: 4px; }
    .block-header { display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 1rem; background: #1e293b; border-radius: 4px; margin-bottom: 0.5rem; }
    .block-label { font-size: 0.75rem; font-weight: 600; }
    .block-label.pass { color: var(--pass); }
    .block-label.fail { color: var(--fail); }
    .block-diff { font-size: 0.75rem; color: #64748b; }
    details > summary { list-style: none; }
    details > summary::-webkit-details-marker { display: none; }
    .filter-bar { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; }
    .filter-btn { background: #334155; border: none; color: #94a3b8; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 0.875rem; }
    .filter-btn:hover, .filter-btn.active { background: #475569; color: #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Visual Parity Test Report</h1>
    <p class="timestamp">Generated: ${summary.timestamp}</p>

    <div class="summary">
      <div class="stat">
        <div class="stat-value">${summary.total}</div>
        <div class="stat-label">Total Tests</div>
      </div>
      <div class="stat">
        <div class="stat-value pass">${summary.passed}</div>
        <div class="stat-label">Passed</div>
      </div>
      <div class="stat">
        <div class="stat-value fail">${summary.failed}</div>
        <div class="stat-label">Failed</div>
      </div>
      <div class="stat">
        <div class="stat-value">${((summary.passed / summary.total) * 100).toFixed(1)}%</div>
        <div class="stat-label">Pass Rate</div>
      </div>
    </div>

    <div class="progress">
      <div class="progress-pass" style="width: ${(summary.passed / summary.total) * 100}%"></div>
      <div class="progress-fail" style="width: ${(summary.failed / summary.total) * 100}%"></div>
      <div class="progress-skip" style="width: ${(summary.skipped / summary.total) * 100}%"></div>
    </div>

    <div class="filter-bar">
      <button class="filter-btn active" onclick="filterTests('all')">All</button>
      <button class="filter-btn" onclick="filterTests('fail')">Failed Only</button>
      <button class="filter-btn" onclick="filterTests('visual')">Visual</button>
      <button class="filter-btn" onclick="filterTests('semantic')">Semantic</button>
      <button class="filter-btn" onclick="filterTests('interaction')">Interaction</button>
    </div>

    ${Object.entries(groupedResults).map(([key, tests]) => {
      const allPassed = tests.every(t => t.status === 'pass')
      const visualTest = tests.find(t => t.type === 'visual')
      return `
    <div class="page-group" data-page="${key}">
      <details ${!allPassed ? 'open' : ''}>
        <summary class="page-header">
          <span class="page-title">
            ${key}
            <span class="page-badge ${allPassed ? 'pass' : 'fail'}">${tests.filter(t => t.status === 'pass').length}/${tests.length} pass</span>
          </span>
        </summary>
        <div class="tests">
          ${tests.map((t) => {
            const diffDisplay = t.diffPercent !== undefined ? `${t.diffPercent.toFixed(2)}%` : '-'
            return `
          <div class="test-row" data-type="${t.type}" data-status="${t.status}">
            <span class="test-type ${t.type}">${t.type}</span>
            <div class="test-issues">
              ${t.issues.length > 0 ? t.issues.slice(0, 2).map(i => `<div class="issue">${escapeHtml(i)}</div>`).join('') : '<span style="color:#64748b">No issues</span>'}
            </div>
            <span class="test-diff ${t.diffPercent !== undefined && t.diffPercent <= PIXEL_DIFF_THRESHOLD ? 'good' : 'bad'}">${diffDisplay}</span>
            <span class="test-status ${t.status}">${t.status}</span>
          </div>`
          }).join('')}
          ${visualTest && visualTest.blocks && visualTest.blocks.length > 0
            ? `
          <details open>
            <summary class="toggle-btn" style="margin: 1rem 0;">Show block comparisons (${visualTest.blocks.filter(b => b.status === 'pass').length}/${visualTest.blocks.length} passed)</summary>
            <div class="blocks-container">
              ${visualTest.blocks.map(block => `
              <div class="block-row ${block.status === 'pass' ? 'passed' : 'failed'}">
                <div class="block-header" style="grid-column: 1 / -1;">
                  <span class="block-label ${block.status}">Block ${block.index} (y=${block.index * BLOCK_HEIGHT}px)</span>
                  <span class="block-diff">${block.diffPercent.toFixed(2)}% diff</span>
                </div>
                <div>
                  <img src="${relative(BASE_DIR, block.localPath)}" alt="Local block ${block.index}">
                  <p style="font-size:0.75rem;color:#64748b;text-align:center;margin-top:0.25rem">Local</p>
                </div>
                <div>
                  <img src="${relative(BASE_DIR, block.prodPath)}" alt="Prod block ${block.index}">
                  <p style="font-size:0.75rem;color:#64748b;text-align:center;margin-top:0.25rem">Production</p>
                </div>
                <div>
                  <img src="${relative(BASE_DIR, block.diffPath)}" alt="Diff block ${block.index}">
                  <p style="font-size:0.75rem;color:#64748b;text-align:center;margin-top:0.25rem">Difference</p>
                </div>
              </div>
              `).join('')}
            </div>
          </details>
          `
            : visualTest && visualTest.localPath
              ? `
          <details>
            <summary class="toggle-btn" style="margin: 1rem 0;">Show full comparison images</summary>
            <div class="comparison show">
              <div>
                <img src="${relative(BASE_DIR, visualTest.localPath)}" alt="Local">
                <p>Local (localhost:3000)</p>
              </div>
              <div>
                <img src="${relative(BASE_DIR, visualTest.prodPath || '')}" alt="Production">
                <p>Production (nimiq.com)</p>
              </div>
              <div>
                <img src="${relative(BASE_DIR, visualTest.diffPath || '')}" alt="Diff">
                <p>Difference</p>
              </div>
            </div>
          </details>
          `
              : ''}
        </div>
      </details>
    </div>`
    }).join('')}
  </div>
  <script>
    function filterTests(filter) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      event.target.classList.add('active');

      document.querySelectorAll('.page-group').forEach(group => {
        const rows = group.querySelectorAll('.test-row');
        let hasVisible = false;
        rows.forEach(row => {
          const type = row.dataset.type;
          const status = row.dataset.status;
          const show = filter === 'all' ||
                       (filter === 'fail' && status !== 'pass') ||
                       filter === type;
          row.style.display = show ? '' : 'none';
          if (show) hasVisible = true;
        });
        group.style.display = hasVisible ? '' : 'none';
      });
    }
  </script>
</body>
</html>`

  writeFileSync(outputPath, html)
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// Parse semantic snapshot
function parseSnapshot(snapshot: string): { headings: string[], links: string[], buttons: string[] } {
  const headings: string[] = []
  const links: string[] = []
  const buttons: string[] = []

  for (const line of snapshot.split('\n')) {
    const trimmed = line.trim()
    const headingMatch = trimmed.match(/^heading\s*(?:\[.*?\]\s*)*"([^"]+)"/)
    if (headingMatch)
      headings.push(headingMatch[1])
    const buttonMatch = trimmed.match(/^button\s*"([^"]+)"/)
    if (buttonMatch)
      buttons.push(buttonMatch[1])
    const linkMatch = trimmed.match(/^link\s*"([^"]+)"/)
    if (linkMatch && linkMatch[1].trim())
      links.push(linkMatch[1])
  }

  return { headings, links, buttons }
}

describe('visual Parity Tests', () => {
  beforeAll(async () => {
    ensureDir(BASE_DIR)

    console.warn('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.warn('  VISUAL PARITY TEST SUITE')
    console.warn(`  Local: ${LOCAL}`)
    console.warn(`  Prod:  ${PROD}`)
    console.warn('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

    // Check if local dev server is running
    try {
      const response = await fetch(LOCAL)
      if (!response.ok)
        throw new Error(`Local server returned ${response.status}`)
      console.warn('✓ Local dev server is running\n')
    }
    catch {
      console.error(`✗ Local dev server not running at ${LOCAL}`)
      throw new Error(`Local dev server not running. Run 'pnpm dev' first.`)
    }
  })

  afterAll(async () => {
    console.warn('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.warn('  TEST SUMMARY')
    console.warn('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

    const summary: TestSummary = {
      total: allResults.length,
      passed: allResults.filter(r => r.status === 'pass').length,
      failed: allResults.filter(r => r.status === 'fail').length,
      skipped: allResults.filter(r => r.status === 'skip').length,
      errors: allResults.filter(r => r.status === 'error').length,
      results: allResults,
      timestamp: new Date().toISOString(),
    }

    console.warn(`  Total:   ${summary.total}`)
    console.warn(`  Passed:  \x1B[32m${summary.passed}\x1B[0m`)
    console.warn(`  Failed:  \x1B[31m${summary.failed}\x1B[0m`)
    console.warn(`  Skipped: \x1B[33m${summary.skipped}\x1B[0m`)
    console.warn(`  Errors:  \x1B[31m${summary.errors}\x1B[0m`)
    console.warn(`\n  Pass rate: ${((summary.passed / summary.total) * 100).toFixed(1)}%`)

    // Generate HTML report
    const reportPath = join(BASE_DIR, 'report.html')
    generateHtmlReport(summary, reportPath)
    console.warn(`\n  Report: ${reportPath}`)
    console.warn('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

    // Close browser sessions for all viewports
    for (const viewport of VIEWPORTS) {
      await agentBrowser('close', `local-${viewport.name}`).catch(() => {})
      await agentBrowser('close', `prod-${viewport.name}`).catch(() => {})
    }
  })

  for (const page of PAGES) {
    describe(`${page === '/' ? 'home' : page.slice(1)}`, () => {
      for (const viewport of VIEWPORTS) {
        describe(`${viewport.name}`, () => {
          const pageName = page === '/' ? 'home' : page.slice(1)
          const pageDir = join(BASE_DIR, pageName, viewport.name)

          // Visual comparison test
          it('visual comparison', async () => {
            const startTime = Date.now()
            ensureDir(pageDir)

            const localPath = join(pageDir, 'full-local.png')
            const prodPath = join(pageDir, 'full-prod.png')

            const result: TestResult = {
              id: `visual-${pageName}-${viewport.name}`,
              type: 'visual',
              page,
              viewport: viewport.name,
              status: 'fail',
              issues: [],
              localPath,
              prodPath,
            }

            try {
              // Take screenshots
              // CSS to disable animations for consistent screenshots
              const disableAnimationsCSS = `const style = document.createElement('style'); style.textContent = '*, *::before, *::after { animation-play-state: paused !important; transition: none !important; }'; document.head.appendChild(style);`

              // Use unique session names per viewport to avoid conflicts
              const localSession = `local-${viewport.name}`
              const prodSession = `prod-${viewport.name}`

              await Promise.all([
                (async () => {
                  await agentBrowser(`set viewport ${viewport.width} ${viewport.height}`, localSession)
                  await agentBrowser('set media reduced-motion', localSession).catch(() => {})
                  await agentBrowser(`open "${LOCAL}${page}"`, localSession)
                  await agentBrowser('wait 2000', localSession)
                  // Disable animations for consistent screenshots
                  await agentBrowser(`eval "${disableAnimationsCSS}"`, localSession).catch(() => {})
                  // Remove NuxtStudio sidebar that affects layout
                  await agentBrowser('eval "document.body.removeAttribute(\'data-studio-active\'); document.body.removeAttribute(\'data-expand-sidebar\')"', localSession).catch(() => {})
                  // Dismiss cookie consent if present
                  await agentBrowser('eval "document.querySelector(\'[role=alertdialog] button:last-child\')?.click()"', localSession).catch(() => {})
                  await agentBrowser('wait 500', localSession)
                  await agentBrowser(`screenshot --full "${localPath}"`, localSession)
                })(),
                (async () => {
                  await agentBrowser(`set viewport ${viewport.width} ${viewport.height}`, prodSession)
                  await agentBrowser('set media reduced-motion', prodSession).catch(() => {})
                  await agentBrowser(`open "${PROD}${page}"`, prodSession)
                  await agentBrowser('wait 2000', prodSession)
                  // Disable animations for consistent screenshots
                  await agentBrowser(`eval "${disableAnimationsCSS}"`, prodSession).catch(() => {})
                  // Dismiss cookie consent if present
                  await agentBrowser('eval "document.querySelector(\'[role=alertdialog] button:last-child\')?.click()"', prodSession).catch(() => {})
                  await agentBrowser('wait 500', prodSession)
                  await agentBrowser(`screenshot --full "${prodPath}"`, prodSession)
                })(),
              ])

              // Compare using block slicing
              const blocks = compareBlocks(localPath, prodPath, pageDir, BLOCK_HEIGHT)
              result.blocks = blocks

              // Calculate overall diff from blocks
              const failedBlocks = blocks.filter(b => b.status === 'fail')
              const totalDiffPixels = blocks.reduce((sum, b) => {
                const blockPixels = BLOCK_HEIGHT * 1280 // approximate
                return sum + (b.diffPercent / 100) * blockPixels
              }, 0)
              const totalPixels = blocks.length * BLOCK_HEIGHT * 1280
              result.diffPercent = totalPixels > 0 ? (totalDiffPixels / totalPixels) * 100 : 0

              if (failedBlocks.length > 0) {
                const firstFailed = failedBlocks[0]
                result.issues.push(`Block ${firstFailed.index} failed: ${firstFailed.diffPercent.toFixed(2)}% diff at y=${firstFailed.index * BLOCK_HEIGHT}px`)
                result.issues.push(`${failedBlocks.length}/${blocks.length} blocks failed`)
              }

              result.status = failedBlocks.length === 0 ? 'pass' : 'fail'
              result.duration = Date.now() - startTime

              allResults.push(result)
              printResult(result)

              expect(failedBlocks.length, result.issues.join('; ')).toBe(0)
            }
            catch (error) {
              result.status = 'error'
              result.issues.push(error instanceof Error ? error.message : String(error))
              result.duration = Date.now() - startTime
              if (!allResults.some(r => r.id === result.id))
                allResults.push(result)
              printResult(result)
              throw error
            }
          }, 120000)

          // Semantic content test
          it('semantic content', async () => {
            const startTime = Date.now()

            const result: TestResult = {
              id: `semantic-${pageName}-${viewport.name}`,
              type: 'semantic',
              page,
              viewport: viewport.name,
              status: 'fail',
              issues: [],
            }

            try {
              const [localSnapshot, prodSnapshot] = await Promise.all([
                agentBrowser('snapshot', 'local'),
                agentBrowser('snapshot', 'prod'),
              ])

              const localContent = parseSnapshot(localSnapshot)
              const prodContent = parseSnapshot(prodSnapshot)

              // Check for missing headings
              const missingHeadings = prodContent.headings.filter(h =>
                !localContent.headings.some(lh => lh.toLowerCase().includes(h.toLowerCase().slice(0, 20))),
              )
              if (missingHeadings.length > 0)
                result.issues.push(`Missing ${missingHeadings.length} headings from prod`)

              // Check for significant content differences
              const headingDiff = Math.abs(localContent.headings.length - prodContent.headings.length)
              const linkDiff = Math.abs(localContent.links.length - prodContent.links.length)

              if (headingDiff > 3)
                result.issues.push(`Heading count differs by ${headingDiff}`)
              if (linkDiff > 10)
                result.issues.push(`Link count differs by ${linkDiff}`)

              result.status = result.issues.length === 0 ? 'pass' : 'fail'
              result.duration = Date.now() - startTime

              allResults.push(result)
              printResult(result)

              expect(result.issues.length, result.issues.join('; ')).toBe(0)
            }
            catch (error) {
              result.status = 'error'
              result.issues.push(error instanceof Error ? error.message : String(error))
              result.duration = Date.now() - startTime
              if (!allResults.some(r => r.id === result.id))
                allResults.push(result)
              printResult(result)
              throw error
            }
          }, 60000)
        })
      }
    })
  }

  // Interaction tests - only run on desktop
  describe('interactions', () => {
    const NAV_DROPDOWNS = ['Apps', 'Tech', 'Community', 'Project', 'Get started']

    for (const dropdown of NAV_DROPDOWNS) {
      it(`${dropdown} dropdown`, async () => {
        const startTime = Date.now()
        const safeName = dropdown.toLowerCase().replace(/\s+/g, '-')
        const dir = join(BASE_DIR, 'interactions', 'dropdown')
        ensureDir(dir)

        const localPath = join(dir, `${safeName}-local.png`)
        const prodPath = join(dir, `${safeName}-prod.png`)
        const diffPath = join(dir, `${safeName}-diff.png`)

        const result: TestResult = {
          id: `interaction-dropdown-${safeName}`,
          type: 'interaction',
          page: '/',
          viewport: 'desktop',
          status: 'fail',
          issues: [],
          localPath,
          prodPath,
          diffPath,
        }

        try {
          await Promise.all([
            agentBrowser('set viewport 1280 800', 'local'),
            agentBrowser('set viewport 1280 800', 'prod'),
          ])

          await Promise.all([
            agentBrowser(`open "${LOCAL}"`, 'local'),
            agentBrowser(`open "${PROD}"`, 'prod'),
          ])

          await Promise.all([
            agentBrowser('wait 2000', 'local'),
            agentBrowser('wait 2000', 'prod'),
          ])

          await Promise.all([
            agentBrowser(`hover "${dropdown}"`, 'local'),
            agentBrowser(`hover "${dropdown}"`, 'prod'),
          ])

          await Promise.all([
            agentBrowser('wait 500', 'local'),
            agentBrowser('wait 500', 'prod'),
          ])

          await Promise.all([
            agentBrowser(`screenshot "${localPath}"`, 'local'),
            agentBrowser(`screenshot "${prodPath}"`, 'prod'),
          ])

          const { diffPixels, totalPixels } = compareImages(localPath, prodPath, diffPath)
          result.diffPercent = (diffPixels / totalPixels) * 100

          if (result.diffPercent > PIXEL_DIFF_THRESHOLD)
            result.issues.push(`Dropdown visual diff: ${result.diffPercent.toFixed(2)}%`)

          result.status = result.diffPercent <= PIXEL_DIFF_THRESHOLD ? 'pass' : 'fail'
          result.duration = Date.now() - startTime

          allResults.push(result)
          printResult(result)

          expect(result.diffPercent, result.issues.join('; ')).toBeLessThanOrEqual(PIXEL_DIFF_THRESHOLD)
        }
        catch (error) {
          result.status = 'error'
          result.issues.push(error instanceof Error ? error.message : String(error))
          result.duration = Date.now() - startTime
          if (!allResults.some(r => r.id === result.id))
            allResults.push(result)
          printResult(result)
          throw error
        }
      }, 60000)
    }
  })
})
