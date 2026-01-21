#!/usr/bin/env npx tsx
/**
 * UnoCSS 1:1 → Tailwind 1:4 Spacing Conversion Script
 *
 * Converts spacing utilities from UnoCSS pixel-based scale to Tailwind's rem-based scale.
 * UnoCSS: p-8 = 8px
 * Tailwind: p-2 = 0.5rem = 8px (scale is value × 4px)
 */

import { readFileSync, writeFileSync } from 'node:fs'
import process from 'node:process'
import { globSync } from 'glob'

// Tailwind spacing scale (value → pixels)
// From https://tailwindcss.com/docs/spacing
const TAILWIND_SCALE: Record<string, number> = {
  0: 0,
  px: 1,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  44: 176,
  48: 192,
  52: 208,
  56: 224,
  60: 240,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
}

// Reverse map: pixels → Tailwind value
const PIXELS_TO_TAILWIND = new Map<number, string>()
for (const [twVal, px] of Object.entries(TAILWIND_SCALE)) {
  PIXELS_TO_TAILWIND.set(px, twVal)
}

// Spacing utility prefixes to convert
const SPACING_PREFIXES = [
  // Padding
  'p',
  'px',
  'py',
  'pt',
  'pr',
  'pb',
  'pl',
  'ps',
  'pe',
  // Margin
  'm',
  'mx',
  'my',
  'mt',
  'mr',
  'mb',
  'ml',
  'ms',
  'me',
  // Gap
  'gap',
  'gap-x',
  'gap-y',
  // Width/Height
  'w',
  'h',
  'size',
  'min-w',
  'min-h',
  'max-w',
  'max-h',
  // Position
  'inset',
  'inset-x',
  'inset-y',
  'top',
  'right',
  'bottom',
  'left',
  'start',
  'end',
  // Space between
  'space-x',
  'space-y',
  // Translate
  'translate-x',
  'translate-y',
  // Border radius
  'rounded',
  'rounded-t',
  'rounded-r',
  'rounded-b',
  'rounded-l',
  'rounded-tl',
  'rounded-tr',
  'rounded-br',
  'rounded-bl',
  'rounded-ss',
  'rounded-se',
  'rounded-ee',
  'rounded-es',
  // Scroll
  'scroll-m',
  'scroll-mx',
  'scroll-my',
  'scroll-mt',
  'scroll-mr',
  'scroll-mb',
  'scroll-ml',
  'scroll-p',
  'scroll-px',
  'scroll-py',
  'scroll-pt',
  'scroll-pr',
  'scroll-pb',
  'scroll-pl',
  // Flex/Grid gap shortcuts (UnoCSS specific - convert to regular gap)
  'flex-gap',
  'flex-gap-x',
  'flex-gap-y',
  'grid-gap',
  'grid-gap-x',
  'grid-gap-y',
]

// Responsive prefixes
const RESPONSIVE_PREFIXES = ['', 'sm:', 'md:', 'lg:', 'xl:', '2xl:']

// State prefixes (subset for spacing - most common ones)
const STATE_PREFIXES = ['', 'hover:', 'focus:', 'active:', 'disabled:', 'first:', 'last:', 'odd:', 'even:', 'group-hover:']

function pixelsToTailwind(pixels: number): string {
  // Check if there's an exact match in the Tailwind scale
  if (PIXELS_TO_TAILWIND.has(pixels)) {
    return PIXELS_TO_TAILWIND.get(pixels)!
  }
  // Use arbitrary value for non-standard sizes
  return `[${pixels}px]`
}

function convertSpacingValue(match: string, prefix: string, value: string, isNegative: boolean): string {
  // Skip if already an arbitrary value
  if (value.startsWith('['))
    return match

  // Skip percentage values (e.g., w-80%)
  if (value.includes('%'))
    return match

  // Skip fraction values (e.g., w-1/2, translate-x-1/2)
  if (value.includes('/'))
    return match

  // Skip special keyword values
  const specialValues = ['full', 'auto', 'screen', 'min', 'max', 'fit', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', 'prose']
  if (specialValues.includes(value))
    return match

  // Skip viewport units (vw, vh, dvh, etc.)
  if (/\d+(?:vw|vh|dvw|dvh|svw|svh|lvw|lvh)/.test(value))
    return match

  // Skip non-numeric values
  const numValue = Number.parseFloat(value)
  if (Number.isNaN(numValue))
    return match

  // Skip if value has non-numeric suffix (e.g., 56vw)
  if (!/^\d+(?:\.\d+)?$/.test(value))
    return match

  // In UnoCSS 1:1 scale, the value IS the pixel value
  const pixels = numValue

  // Get the Tailwind equivalent
  const twValue = pixelsToTailwind(pixels)

  // Handle flex-gap-* and grid-gap-* (UnoCSS specific) - convert to gap-*
  let newPrefix = prefix
  if (prefix.startsWith('flex-gap')) {
    newPrefix = prefix.replace('flex-gap', 'gap')
  }
  else if (prefix.startsWith('grid-gap')) {
    newPrefix = prefix.replace('grid-gap', 'gap')
  }

  // Reconstruct with negative if needed
  const negPrefix = isNegative ? '-' : ''
  return `${negPrefix}${newPrefix}-${twValue}`
}

// Build regex pattern for all spacing utilities
function buildPattern(): RegExp {
  const prefixPattern = SPACING_PREFIXES.map(p => p.replace('-', '\\-')).join('|')
  const responsivePattern = RESPONSIVE_PREFIXES.map(p => p.replace(':', '\\:')).join('|')
  const statePattern = STATE_PREFIXES.map(p => p.replace(':', '\\:')).join('|')

  // Match patterns like:
  // p-8, -m-4, hover:p-8, md:p-8, md:hover:p-8, flex-gap-16, etc.
  // Also handle UnoCSS negative margin syntax: mr--8, mt--4
  // The pattern captures:
  // 1. Optional responsive prefix (md:, lg:, etc.)
  // 2. Optional state prefix (hover:, focus:, etc.)
  // 3. Optional negative sign for standard negative utilities (-m-4)
  // 4. The utility prefix (p, m, gap, etc.)
  // 5. Optional double dash for UnoCSS negative syntax (mr--8)
  // 6. The value (number, fraction, percentage, or arbitrary)
  return new RegExp(
    `(?<![\\w-])` // Negative lookbehind: not preceded by word char or hyphen
    + `((?:${responsivePattern})?)` // Group 1: responsive prefix
    + `((?:${statePattern})?)` // Group 2: state prefix
    + `(-?)` // Group 3: negative prefix (standard Tailwind syntax)
    + `(${prefixPattern})` // Group 4: utility prefix
    + `(-?)` // Group 5: UnoCSS negative syntax (double dash before value)
    + `-(\\d+/\\d+|\\d+(?:\\.\\d+)?(?:%|vw|vh)?|\\[[^\\]]+\\])` // Group 6: value (fraction, number, %, vw/vh, or arbitrary) - fraction first!
    + `(?![\\w])`, // Negative lookahead: not followed by word char (allow % and /)
    'g',
  )
}

function convertFile(filePath: string): { changed: boolean, conversions: string[] } {
  const content = readFileSync(filePath, 'utf-8')
  const conversions: string[] = []
  const pattern = buildPattern()

  const newContent = content.replace(
    pattern,
    (match, responsive, state, negPrefix, prefix, unoNeg, value) => {
      // Determine if negative (either standard -m-4 or UnoCSS mr--8 syntax)
      const isNegative = negPrefix === '-' || unoNeg === '-'

      const result = convertSpacingValue(match, prefix, value, isNegative)
      if (result !== match) {
        // Reconstruct with responsive and state prefixes
        const fullOriginal = match
        const fullNew = `${responsive}${state}${result}`
        if (fullOriginal !== fullNew) {
          conversions.push(`${fullOriginal} → ${fullNew}`)
        }
        return fullNew
      }
      return match
    },
  )

  if (content !== newContent) {
    writeFileSync(filePath, newContent)
    return { changed: true, conversions }
  }
  return { changed: false, conversions: [] }
}

// Main execution
const files = globSync('app/**/*.vue', { cwd: process.cwd() })

console.log(`Found ${files.length} Vue files to process\n`)

let totalChanges = 0
const allConversions: Map<string, number> = new Map()

for (const file of files) {
  const { changed, conversions } = convertFile(file)
  if (changed) {
    totalChanges++
    console.log(`✓ ${file}`)
    for (const conv of conversions) {
      const count = allConversions.get(conv) || 0
      allConversions.set(conv, count + 1)
    }
  }
}

console.log(`\n${'='.repeat(60)}`)
console.log(`Total files modified: ${totalChanges}`)
console.log(`\nConversion summary (unique transformations):`)

// Sort conversions by count
const sorted = [...allConversions.entries()].sort((a, b) => b[1] - a[1])
for (const [conv, count] of sorted.slice(0, 50)) {
  console.log(`  ${conv} (×${count})`)
}
if (sorted.length > 50) {
  console.log(`  ... and ${sorted.length - 50} more unique conversions`)
}
