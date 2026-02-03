#!/usr/bin/env npx tsx
/**
 * Visual Parity Fix System
 * Section-by-section visual comparison with auto-fix capability
 */

import { exec } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { promisify } from 'node:util'

const execAsync = promisify(exec)

const LOCAL = 'http://localhost:3000'
const PROD = 'https://www.nimiq.com'
const BASE_DIR = 'tests/screenshots'

interface SectionMeta {
  index: number
  heading: string | null
  className: string
  tagName: string
  height: number
  background: string
}

interface StyleLayer {
  section?: {
    width: number
    bgColor: string
    padding: string
    margin: string
    maxWidth: string
    isFullWidth: boolean
  }
  containers?: Array<{
    tag: string
    class: string
    width: number
    maxWidth: string
    margin: string
    isCentered: boolean
  }>
  content?: Array<{
    tag: string
    text: string
    fontSize: string
    fontWeight: string
    lineHeight: string
    color: string
    margin: string
    padding: string
  }>
  layout?: Array<{
    display: string
    gridCols: string
    flexDir: string
    gap: string
    alignItems: string
    justifyContent: string
  }>
}

interface SectionComparison {
  localStyles: StyleLayer
  prodStyles: StyleLayer
  differences: string[]
  screenshotPath?: string
}

async function agentBrowser(cmd: string, session: string = 'default'): Promise<string> {
  try {
    const { stdout, stderr } = await execAsync(`npx agent-browser --session ${session} ${cmd}`, { timeout: 120000 })
    if (stderr && !stderr.includes('npm warn'))
      console.warn('agent-browser stderr:', stderr)
    return stdout.trim()
  }
  catch (error) {
    console.error(`agent-browser error (${session}): ${cmd}`, error)
    throw error
  }
}

function ensureDir(dir: string) {
  if (!existsSync(dir))
    mkdirSync(dir, { recursive: true })
}

// Discover sections from a page
async function discoverSections(session: string): Promise<SectionMeta[]> {
  const result = await agentBrowser(`eval "[...document.querySelectorAll('main > section')].map((s,i) => ({ index: i, heading: s.querySelector('h1,h2,h3')?.textContent?.slice(0,50) || null, className: s.className, tagName: s.tagName, height: s.offsetHeight, background: getComputedStyle(s).backgroundColor }))"`, session)
  try {
    return JSON.parse(result)
  }
  catch {
    console.error('Failed to parse sections:', result)
    return []
  }
}

// Extract style layers for a section
async function extractStyleLayers(session: string, sectionIndex: number): Promise<StyleLayer> {
  const layers: StyleLayer = {}

  // Layer 1: Section container
  try {
    const sectionResult = await agentBrowser(`eval "(() => { const s = document.querySelectorAll('main > section')[${sectionIndex}]; if (!s) return null; const cs = getComputedStyle(s); return { width: s.offsetWidth, bgColor: cs.backgroundColor, padding: cs.padding, margin: cs.margin, maxWidth: cs.maxWidth, isFullWidth: s.offsetWidth === window.innerWidth }; })()"`, session)
    layers.section = JSON.parse(sectionResult)
  }
  catch (e) { console.warn('Section layer error:', e) }

  // Layer 2: Inner containers
  try {
    const containersResult = await agentBrowser(`eval "(() => { const s = document.querySelectorAll('main > section')[${sectionIndex}]; if (!s) return []; return [...s.children].slice(0,10).map(c => ({ tag: c.tagName, class: c.className?.slice?.(0,100) || '', width: c.offsetWidth, maxWidth: getComputedStyle(c).maxWidth, margin: getComputedStyle(c).margin, isCentered: getComputedStyle(c).marginLeft === 'auto' })); })()"`, session)
    layers.containers = JSON.parse(containersResult)
  }
  catch (e) { console.warn('Containers layer error:', e) }

  // Layer 3: Content elements
  try {
    const contentResult = await agentBrowser(`eval "(() => { const s = document.querySelectorAll('main > section')[${sectionIndex}]; if (!s) return []; return [...s.querySelectorAll('h1,h2,h3,p')].slice(0,15).map(el => ({ tag: el.tagName, text: el.textContent?.slice(0,30) || '', fontSize: getComputedStyle(el).fontSize, fontWeight: getComputedStyle(el).fontWeight, lineHeight: getComputedStyle(el).lineHeight, color: getComputedStyle(el).color, margin: getComputedStyle(el).margin, padding: getComputedStyle(el).padding })); })()"`, session)
    layers.content = JSON.parse(contentResult)
  }
  catch (e) { console.warn('Content layer error:', e) }

  // Layer 4: Layout
  try {
    const layoutResult = await agentBrowser(`eval "(() => { const s = document.querySelectorAll('main > section')[${sectionIndex}]; if (!s) return []; return [...s.querySelectorAll('[class*=grid],[class*=flex]')].slice(0,10).map(el => ({ display: getComputedStyle(el).display, gridCols: getComputedStyle(el).gridTemplateColumns, flexDir: getComputedStyle(el).flexDirection, gap: getComputedStyle(el).gap, alignItems: getComputedStyle(el).alignItems, justifyContent: getComputedStyle(el).justifyContent })); })()"`, session)
    layers.layout = JSON.parse(layoutResult)
  }
  catch (e) { console.warn('Layout layer error:', e) }

  return layers
}

// Compare two style layers and return differences
function compareStyleLayers(local: StyleLayer, prod: StyleLayer): string[] {
  const diffs: string[] = []

  // Compare section container
  if (local.section && prod.section) {
    if (local.section.isFullWidth !== prod.section.isFullWidth) {
      diffs.push(`Section width: local ${local.section.isFullWidth ? 'full' : 'contained'} vs prod ${prod.section.isFullWidth ? 'full' : 'contained'}`)
    }
    if (local.section.bgColor !== prod.section.bgColor) {
      diffs.push(`Section bgColor: local ${local.section.bgColor} vs prod ${prod.section.bgColor}`)
    }
    if (local.section.padding !== prod.section.padding) {
      diffs.push(`Section padding: local ${local.section.padding} vs prod ${prod.section.padding}`)
    }
  }

  // Compare containers
  if (local.containers && prod.containers) {
    const minLen = Math.min(local.containers.length, prod.containers.length)
    for (let i = 0; i < minLen; i++) {
      const lc = local.containers[i]
      const pc = prod.containers[i]
      if (Math.abs(lc.width - pc.width) > 10) {
        diffs.push(`Container[${i}] width: local ${lc.width}px vs prod ${pc.width}px`)
      }
      if (lc.isCentered !== pc.isCentered) {
        diffs.push(`Container[${i}] centered: local ${lc.isCentered} vs prod ${pc.isCentered}`)
      }
    }
    if (local.containers.length !== prod.containers.length) {
      diffs.push(`Container count: local ${local.containers.length} vs prod ${prod.containers.length}`)
    }
  }

  // Compare content typography
  if (local.content && prod.content) {
    const minLen = Math.min(local.content.length, prod.content.length)
    for (let i = 0; i < minLen; i++) {
      const lc = local.content[i]
      const pc = prod.content[i]
      if (lc.fontSize !== pc.fontSize) {
        diffs.push(`${lc.tag}[${i}] fontSize: local ${lc.fontSize} vs prod ${pc.fontSize}`)
      }
      if (lc.color !== pc.color && lc.tag === pc.tag) {
        diffs.push(`${lc.tag}[${i}] color: local ${lc.color} vs prod ${pc.color}`)
      }
    }
  }

  return diffs
}

// Screenshot a specific section
async function screenshotSection(session: string, sectionIndex: number, outputPath: string): Promise<void> {
  await agentBrowser(`eval "document.querySelectorAll('main > section')[${sectionIndex}].scrollIntoView({block:'start'})"`, session)
  await agentBrowser('wait 500', session)
  await agentBrowser(`screenshot "${outputPath}"`, session)
}

// Main analysis for a page
async function analyzePage(pagePath: string, pageDir: string): Promise<void> {
  console.log(`\n${'='.repeat(60)}`)
  console.log(`Analyzing: ${pagePath}`)
  console.log('='.repeat(60))

  ensureDir(pageDir)

  const localSession = `local-${pagePath.replace(/\//g, '-') || 'home'}`
  const prodSession = `prod-${pagePath.replace(/\//g, '-') || 'home'}`

  // Setup viewports and navigate
  await Promise.all([
    agentBrowser('set viewport 1280 800', localSession),
    agentBrowser('set viewport 1280 800', prodSession),
  ])

  await Promise.all([
    agentBrowser(`open "${LOCAL}${pagePath}"`, localSession),
    agentBrowser(`open "${PROD}${pagePath}"`, prodSession),
  ])

  await Promise.all([
    agentBrowser('wait 3000', localSession),
    agentBrowser('wait 3000', prodSession),
  ])

  // Dismiss cookie consent
  await Promise.all([
    agentBrowser('eval "document.querySelector(\'[role=alertdialog] button:last-child\')?.click()"', localSession).catch(() => {}),
    agentBrowser('eval "document.querySelector(\'[role=alertdialog] button:last-child\')?.click()"', prodSession).catch(() => {}),
  ])

  await Promise.all([
    agentBrowser('wait 500', localSession),
    agentBrowser('wait 500', prodSession),
  ])

  // Discover sections
  const [localSections, prodSections] = await Promise.all([
    discoverSections(localSession),
    discoverSections(prodSession),
  ])

  console.log(`\nLocal sections: ${localSections.length}`)
  console.log(`Prod sections: ${prodSections.length}`)

  if (localSections.length !== prodSections.length) {
    console.warn(`⚠️  Section count mismatch!`)
  }

  // Analyze each section
  const results: Array<{ index: number, heading: string, differences: string[], localStyles: StyleLayer, prodStyles: StyleLayer }> = []

  const maxSections = Math.max(localSections.length, prodSections.length)
  for (let i = 0; i < maxSections; i++) {
    const localSection = localSections[i]
    const prodSection = prodSections[i]

    console.log(`\n--- Section ${i} ---`)
    console.log(`Local heading: ${localSection?.heading || 'N/A'}`)
    console.log(`Prod heading: ${prodSection?.heading || 'N/A'}`)

    if (!localSection || !prodSection) {
      console.warn(`⚠️  Missing section ${i} on ${!localSection ? 'local' : 'prod'}`)
      continue
    }

    // Extract style layers
    const [localStyles, prodStyles] = await Promise.all([
      extractStyleLayers(localSession, i),
      extractStyleLayers(prodSession, i),
    ])

    // Compare styles
    const differences = compareStyleLayers(localStyles, prodStyles)

    if (differences.length > 0) {
      console.log(`\n🔴 Differences found:`)
      for (const diff of differences) {
        console.log(`   - ${diff}`)
      }
    }
    else {
      console.log(`✅ Styles match`)
    }

    // Take screenshots
    const sectionDir = join(pageDir, `section-${i}`)
    ensureDir(sectionDir)

    await Promise.all([
      screenshotSection(localSession, i, join(sectionDir, 'local.png')),
      screenshotSection(prodSession, i, join(sectionDir, 'prod.png')),
    ])

    results.push({
      index: i,
      heading: localSection.heading || prodSection.heading || `Section ${i}`,
      differences,
      localStyles,
      prodStyles,
    })
  }

  // Write results
  writeFileSync(join(pageDir, 'analysis.json'), JSON.stringify(results, null, 2))

  // Generate summary
  const failedSections = results.filter(r => r.differences.length > 0)
  console.log(`\n${'='.repeat(60)}`)
  console.log(`Summary for ${pagePath}`)
  console.log('='.repeat(60))
  console.log(`Total sections: ${results.length}`)
  console.log(`Passing: ${results.length - failedSections.length}`)
  console.log(`Failing: ${failedSections.length}`)

  if (failedSections.length > 0) {
    console.log(`\nFailed sections:`)
    for (const s of failedSections) {
      console.log(`  - Section ${s.index} (${s.heading}): ${s.differences.length} differences`)
    }
  }

  // Close sessions
  await agentBrowser('close', localSession).catch(() => {})
  await agentBrowser('close', prodSession).catch(() => {})
}

// Main entry point
async function main() {
  const args = process.argv.slice(2)
  const pages = args.length > 0 ? args : ['/', '/wallet', '/staking']

  console.log('Visual Parity Fix System')
  console.log('========================')
  console.log(`Pages to analyze: ${pages.join(', ')}`)

  for (const page of pages) {
    const pageName = page === '/' ? 'home' : page.slice(1)
    const pageDir = join(BASE_DIR, pageName, 'sections')
    await analyzePage(page, pageDir)
  }

  console.log('\n✅ Analysis complete!')
  console.log(`Results saved to: ${BASE_DIR}/*/sections/`)
}

main().catch(console.error)
