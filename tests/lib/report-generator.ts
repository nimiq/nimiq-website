/**
 * Enhanced HTML report generator with style diff visualization
 */

import type { Buffer } from 'node:buffer'
import type { PageStyleDiff, StyleDiff } from './style-comparison'

export interface SectionScreenshot {
  index: number
  buffer: Buffer
  bgColor?: string
  hasSectionGap?: boolean
}

/**
 * Generate enhanced HTML report with pixel diffs AND style diffs
 */
export function generateEnhancedReport(
  baseDir: string,
  localSections: SectionScreenshot[],
  prodSections: SectionScreenshot[],
  failures: string[],
  styleDiff?: PageStyleDiff,
): string {
  const maxSections = Math.max(localSections.length, prodSections.length)
  const rows: string[] = []

  for (let i = 0; i < maxSections; i++) {
    const hasLocal = i < localSections.length
    const hasProd = i < prodSections.length
    const localImg = hasLocal ? `local/section-${i}.png` : ''
    const prodImg = hasProd ? `prod/section-${i}.png` : ''
    const diffImg = hasLocal && hasProd ? `diff/section-${i}.png` : ''

    // Find style diffs for this section
    const sectionStyleDiffs = styleDiff
      ? {
          typography: styleDiff.typography.filter(d => d.section === i),
          colors: styleDiff.colors.filter(d => d.section === i),
          spacing: styleDiff.spacing.filter(d => d.section === i),
          hoverable: styleDiff.hoverable.filter(d => d.section === i),
        }
      : null

    const hasStyleDiffs = sectionStyleDiffs
      && (sectionStyleDiffs.typography.length > 0
        || sectionStyleDiffs.colors.length > 0
        || sectionStyleDiffs.spacing.length > 0
        || sectionStyleDiffs.hoverable.length > 0)

    rows.push(`
      <tr>
        <td><strong>Section ${i}</strong></td>
        <td>${hasLocal ? `<img src="${localImg}" style="max-width:100%">` : '<em>missing</em>'}</td>
        <td>${hasProd ? `<img src="${prodImg}" style="max-width:100%">` : '<em>missing</em>'}</td>
        <td>${diffImg ? `<img src="${diffImg}" style="max-width:100%" onerror="this.parentElement.innerHTML='<em>no diff</em>'">` : ''}</td>
      </tr>
      ${hasStyleDiffs ? generateStyleDiffRow(sectionStyleDiffs!) : ''}
    `)
  }

  const html = `<!DOCTYPE html>
<html><head><title>Visual Diff Report</title>
<style>
  body { font-family: system-ui; margin: 20px; background: #1a1a1a; color: #fff; }
  table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }
  th, td { border: 1px solid #333; padding: 10px; text-align: center; vertical-align: top; }
  th { background: #2a2a2a; }
  img { max-height: 400px; object-fit: contain; }
  .failures { background: #4a1a1a; padding: 15px; margin-bottom: 20px; border-radius: 8px; }
  .failures pre { margin: 0; white-space: pre-wrap; }
  .style-diff-row { background: #2a2a3a; }
  .style-diff-container { text-align: left; padding: 15px; }
  .style-category { margin-bottom: 15px; }
  .style-category h4 { margin: 0 0 10px 0; color: #ffa500; font-size: 14px; }
  .style-item { background: #1a1a2a; padding: 10px; margin-bottom: 8px; border-radius: 4px; border-left: 3px solid #ff6b6b; }
  .style-item.warning { border-left-color: #ffa500; }
  .style-item.info { border-left-color: #4a9eff; }
  .element-name { font-weight: bold; color: #4a9eff; margin-bottom: 5px; }
  .diff-line { font-size: 13px; color: #ddd; margin: 2px 0; font-family: 'Courier New', monospace; }
  .diff-arrow { color: #ffa500; }
  .no-diffs { color: #888; font-style: italic; }
</style></head><body>
<h1>Visual Diff: ${baseDir.split('/').slice(-2).join('/')}</h1>
${failures.length ? `<div class="failures"><strong>Failures:</strong><pre>${failures.join('\n')}</pre></div>` : ''}
${styleDiff ? generateStyleSummary(styleDiff) : ''}
<table>
  <tr><th>Section</th><th>Local</th><th>Prod</th><th>Diff</th></tr>
  ${rows.join('')}
</table>
</body></html>`

  return html
}

function generateStyleSummary(styleDiff: PageStyleDiff): string {
  const totalDiffs
    = styleDiff.typography.length
      + styleDiff.colors.length
      + styleDiff.spacing.length
      + styleDiff.hoverable.length

  if (totalDiffs === 0) {
    return '<div class="failures" style="background: #1a3a1a;"><strong>✓ Style Comparison:</strong> No significant style differences found</div>'
  }

  return `
<div class="failures" style="background: #3a2a1a;">
  <strong>⚠ Style Differences Found:</strong>
  <ul style="margin: 10px 0;">
    <li>Typography: ${styleDiff.typography.length} ${styleDiff.typography.length === 1 ? 'issue' : 'issues'}</li>
    <li>Colors: ${styleDiff.colors.length} ${styleDiff.colors.length === 1 ? 'issue' : 'issues'}</li>
    <li>Spacing: ${styleDiff.spacing.length} ${styleDiff.spacing.length === 1 ? 'issue' : 'issues'}</li>
    <li>Hoverable: ${styleDiff.hoverable.length} ${styleDiff.hoverable.length === 1 ? 'issue' : 'issues'}</li>
  </ul>
</div>
  `
}

function generateStyleDiffRow(diffs: {
  typography: StyleDiff[]
  colors: StyleDiff[]
  spacing: StyleDiff[]
  hoverable: StyleDiff[]
}): string {
  const categories: string[] = []

  if (diffs.typography.length > 0) {
    categories.push(generateStyleCategory('Typography', diffs.typography, 'error'))
  }

  if (diffs.colors.length > 0) {
    categories.push(generateStyleCategory('Colors', diffs.colors, 'warning'))
  }

  if (diffs.spacing.length > 0) {
    categories.push(generateStyleCategory('Spacing', diffs.spacing, 'info'))
  }

  if (diffs.hoverable.length > 0) {
    categories.push(generateStyleCategory('Hoverable', diffs.hoverable, 'warning'))
  }

  return `
<tr class="style-diff-row">
  <td colspan="4">
    <div class="style-diff-container">
      ${categories.join('')}
    </div>
  </td>
</tr>
  `
}

function generateStyleCategory(
  name: string,
  diffs: StyleDiff[],
  severity: 'error' | 'warning' | 'info',
): string {
  const items = diffs.map(diff => `
    <div class="style-item ${severity}">
      <div class="element-name">${diff.element}</div>
      ${diff.differences.map(d => `<div class="diff-line">${d}</div>`).join('')}
    </div>
  `).join('')

  return `
<div class="style-category">
  <h4>${name} (${diffs.length})</h4>
  ${items}
</div>
  `
}
