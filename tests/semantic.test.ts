import { exec } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { promisify } from 'node:util'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

const execAsync = promisify(exec)

const LOCAL = 'http://localhost:3000'
const PROD = 'https://nimiq.com'
const REPORTS_DIR = 'tests/semantic-reports'

const PAGES = ['/', '/about', '/developers', '/exchanges', '/staking', '/blog']

const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'mobile', width: 375, height: 667 },
]

interface ContentElement { type: 'heading' | 'paragraph' | 'button' | 'link' | 'section', text: string, level?: number }

interface SemanticResult {
  page: string
  viewport: string
  localElements: ContentElement[]
  prodElements: ContentElement[]
  missingInLocal: ContentElement[]
  missingInProd: ContentElement[]
  sectionCountLocal: number
  sectionCountProd: number
  sectionCountMatch: boolean
  passed: boolean
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

// Normalize text for comparison (remove dynamic content, whitespace variations)
function normalizeText(text: string): string {
  return text
    .replace(/\s+/g, ' ')
    .replace(/[\u00A0\u202F\u200B]/g, ' ')
    .replace(/'/g, '\'')
    .replace(/"/g, '"')
    // Normalize staking percentages (dynamic)
    .replace(/~[\d.]+%/g, '~X%')
    .replace(/at ~0 p\.a\./g, 'at ~X% p.a.')
    // Remove dates that may vary
    .replace(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{1,2}, \d{4}/g, '[DATE]')
    .trim()
}

// Parse accessibility snapshot into structured content elements
function parseSnapshot(snapshot: string): ContentElement[] {
  const elements: ContentElement[] = []
  const lines = snapshot.split('\n')

  for (const line of lines) {
    const trimmed = line.trim()

    // Parse headings (h1-h6)
    const headingMatch = trimmed.match(/^heading\s*(?:\[(\d+)\]\s*)?"([^"]+)"/)
    if (headingMatch) {
      elements.push({ type: 'heading', text: normalizeText(headingMatch[2]), level: Number.parseInt(headingMatch[1] || '1') })
      continue
    }

    // Parse buttons
    const buttonMatch = trimmed.match(/^button\s*"([^"]+)"/)
    if (buttonMatch) {
      elements.push({ type: 'button', text: normalizeText(buttonMatch[1]) })
      continue
    }

    // Parse links
    const linkMatch = trimmed.match(/^link\s*"([^"]+)"/)
    if (linkMatch && linkMatch[1].trim()) {
      elements.push({ type: 'link', text: normalizeText(linkMatch[1]) })
      continue
    }

    // Parse paragraphs/text
    const textMatch = trimmed.match(/^(?:paragraph|text|StaticText)\s*"([^"]+)"/)
    if (textMatch && textMatch[1].length > 10) {
      elements.push({ type: 'paragraph', text: normalizeText(textMatch[1]) })
    }
  }

  return elements
}

// Count sections from snapshot
function countSections(snapshot: string): number {
  const sectionMatches = snapshot.match(/^(?:region|section|main|article)/gm)
  return sectionMatches ? sectionMatches.length : 0
}

// Find elements missing between two arrays
function findMissing(source: ContentElement[], target: ContentElement[]): ContentElement[] {
  return source.filter((s) => {
    const normalizedSource = s.text.toLowerCase()
    return !target.some(t => t.type === s.type && t.text.toLowerCase() === normalizedSource)
  })
}

async function getSemanticContent(url: string, session: string, viewport: { width: number, height: number }): Promise<{ elements: ContentElement[], sectionCount: number, snapshot: string }> {
  await agentBrowser(`set viewport ${viewport.width} ${viewport.height}`, session)
  await agentBrowser(`open "${url}"`, session)
  await agentBrowser('wait 3000', session)

  const snapshot = await agentBrowser('snapshot', session)
  const elements = parseSnapshot(snapshot)
  const sectionCount = countSections(snapshot)

  return { elements, sectionCount, snapshot }
}

function generateHtmlReport(results: SemanticResult[], outputPath: string) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Semantic Content Report</title>
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
    .content { padding: 1rem; }
    .section { margin-bottom: 1rem; }
    .section h3 { font-size: 0.875rem; color: #666; margin-bottom: 0.5rem; }
    .element { background: #f9f9f9; padding: 0.5rem; margin: 0.25rem 0; border-radius: 4px; font-size: 0.75rem; }
    .element.missing { background: #fee2e2; }
    .element .type { font-weight: 600; color: #666; margin-right: 0.5rem; }
    .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem; }
    .stat { background: #f9f9f9; padding: 0.75rem; border-radius: 4px; text-align: center; }
    .stat-value { font-size: 1.5rem; font-weight: bold; }
    .stat-label { font-size: 0.75rem; color: #666; }
  </style>
</head>
<body>
  <h1>Semantic Content Report</h1>
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
        </div>
        <span class="badge ${r.passed ? 'pass' : 'fail'}">${r.passed ? 'PASS' : 'FAIL'}</span>
      </div>
      <div class="content">
        <div class="stats">
          <div class="stat">
            <div class="stat-value">${r.localElements.length}</div>
            <div class="stat-label">Local Elements</div>
          </div>
          <div class="stat">
            <div class="stat-value">${r.prodElements.length}</div>
            <div class="stat-label">Prod Elements</div>
          </div>
          <div class="stat ${r.sectionCountMatch ? '' : 'style="background:#fee2e2"'}">
            <div class="stat-value">${r.sectionCountLocal} / ${r.sectionCountProd}</div>
            <div class="stat-label">Section Count (Local/Prod)</div>
          </div>
        </div>
        ${r.missingInLocal.length > 0
          ? `
        <div class="section">
          <h3>Missing in Local (${r.missingInLocal.length})</h3>
          ${r.missingInLocal.slice(0, 20).map(e => `<div class="element missing"><span class="type">${e.type}${e.level ? ` H${e.level}` : ''}</span>${escapeHtml(e.text.slice(0, 100))}</div>`).join('')}
          ${r.missingInLocal.length > 20 ? `<div class="element">... and ${r.missingInLocal.length - 20} more</div>` : ''}
        </div>`
          : ''}
        ${r.missingInProd.length > 0
          ? `
        <div class="section">
          <h3>Missing in Prod (${r.missingInProd.length})</h3>
          ${r.missingInProd.slice(0, 20).map(e => `<div class="element missing"><span class="type">${e.type}${e.level ? ` H${e.level}` : ''}</span>${escapeHtml(e.text.slice(0, 100))}</div>`).join('')}
          ${r.missingInProd.length > 20 ? `<div class="element">... and ${r.missingInProd.length - 20} more</div>` : ''}
        </div>`
          : ''}
      </div>
    </div>
    `).join('')}
  </div>
</body>
</html>`

  writeFileSync(outputPath, html)
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

describe('semantic Content Verification', () => {
  const results: SemanticResult[] = []

  beforeAll(async () => {
    await ensureDir(REPORTS_DIR)

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
    const reportPath = join(REPORTS_DIR, 'report.html')
    generateHtmlReport(results, reportPath)
    console.warn(`\nSemantic report generated: ${reportPath}`)

    await agentBrowser('close', 'local').catch(() => {})
    await agentBrowser('close', 'prod').catch(() => {})
  })

  for (const page of PAGES) {
    for (const viewport of VIEWPORTS) {
      it(`${page} - ${viewport.name} content matches`, async () => {
        const result: SemanticResult = {
          page,
          viewport: viewport.name,
          localElements: [],
          prodElements: [],
          missingInLocal: [],
          missingInProd: [],
          sectionCountLocal: 0,
          sectionCountProd: 0,
          sectionCountMatch: false,
          passed: false,
        }

        try {
          const [localContent, prodContent] = await Promise.all([
            getSemanticContent(`${LOCAL}${page}`, 'local', viewport),
            getSemanticContent(`${PROD}${page}`, 'prod', viewport),
          ])

          result.localElements = localContent.elements
          result.prodElements = prodContent.elements
          result.sectionCountLocal = localContent.sectionCount
          result.sectionCountProd = prodContent.sectionCount
          result.sectionCountMatch = result.sectionCountLocal === result.sectionCountProd

          // Find missing content
          result.missingInLocal = findMissing(prodContent.elements, localContent.elements)
          result.missingInProd = findMissing(localContent.elements, prodContent.elements)

          // Filter out known differences (dynamic content, intentional changes)
          const significantMissingInLocal = result.missingInLocal.filter(e =>
            !e.text.includes('[DATE]') && !e.text.includes('~X%') && e.text.length > 5,
          )
          const _significantMissingInProd = result.missingInProd.filter(e =>
            !e.text.includes('[DATE]') && !e.text.includes('~X%') && e.text.length > 5,
          )

          // Allow some tolerance for minor differences
          const missingThreshold = Math.max(5, result.prodElements.length * 0.1)
          result.passed = significantMissingInLocal.length <= missingThreshold && result.sectionCountMatch

          results.push(result)

          // Report findings
          if (significantMissingInLocal.length > 0) {
            console.warn(`\n${page} (${viewport.name}): ${significantMissingInLocal.length} elements missing in local`)
            significantMissingInLocal.slice(0, 5).forEach(e => console.warn(`  - [${e.type}] ${e.text.slice(0, 60)}`))
          }

          expect(result.sectionCountMatch, `Section count mismatch: local=${result.sectionCountLocal}, prod=${result.sectionCountProd}`).toBe(true)
          expect(significantMissingInLocal.length, `${significantMissingInLocal.length} elements missing in local version`).toBeLessThanOrEqual(missingThreshold)
        }
        catch (error) {
          if (!results.includes(result))
            results.push(result)
          throw error
        }
      }, 120000)
    }
  }
})
