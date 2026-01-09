/**
 * Style comparison utilities for visual regression testing
 * Focuses on typography, colors, inner content spacing, and hoverable elements
 */

import type { Page } from 'playwright'
import { colorDifference, isSignificantColorDiff, normalizeColor } from './color-utils'

export interface TypographyStyles {
  fontSize: string
  fontWeight: string
  fontFamily: string
  lineHeight: string
  letterSpacing: string
  textAlign: string
}

export interface ColorStyles {
  color: string // Normalized to rgb
  backgroundColor: string // Normalized to rgb
  borderColor?: string // Normalized to rgb
}

export interface SpacingStyles {
  padding: string
  margin: string
  gap?: string
}

export interface StyleData {
  selector: string
  tagName: string
  textContent: string
  typography: TypographyStyles
  colors: ColorStyles
  spacing: SpacingStyles
  isHoverable: boolean
}

export interface StyleDiff {
  section: number
  element: string
  local: Partial<StyleData>
  prod: Partial<StyleData>
  differences: string[]
}

export interface PageStyleDiff {
  typography: StyleDiff[]
  colors: StyleDiff[]
  spacing: StyleDiff[]
  hoverable: StyleDiff[]
}

/**
 * Extract computed styles from all relevant elements in a section
 */
export async function extractSectionStyles(page: Page, sectionIndex: number): Promise<StyleData[]> {
  return await page.evaluate((index) => {
    const sections = Array.from(document.querySelectorAll('main section'))
    const section = sections[index]

    if (!section) {
      return []
    }

    const styles: StyleData[] = []

    // Get all text-containing leaf nodes and important structural elements
    const walker = document.createTreeWalker(
      section,
      NodeFilter.SHOW_ELEMENT,
      {
        acceptNode: (node) => {
          const el = node as Element

          // Skip script, style, noscript
          if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(el.tagName)) {
            return NodeFilter.FILTER_REJECT
          }

          // Include elements with text content or important structural elements
          const hasText = (el.textContent?.trim().length || 0) > 0
          const isStructural = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'A', 'BUTTON', 'SPAN', 'DIV'].includes(el.tagName)
          const isHoverable = el.classList.contains('nq-hoverable')

          if ((hasText && isStructural) || isHoverable) {
            return NodeFilter.FILTER_ACCEPT
          }

          return NodeFilter.FILTER_SKIP
        },
      },
    )

    const seenElements = new Set<Element>()

    while (walker.nextNode()) {
      const el = walker.currentNode as HTMLElement

      // Avoid duplicates
      if (seenElements.has(el)) {
        continue
      }
      seenElements.add(el)

      const computed = window.getComputedStyle(el)

      // Build selector (simple version - class or tag)
      let selector = el.tagName.toLowerCase()
      if (el.className) {
        const classes = el.className.split(' ').filter(c => c.trim()).slice(0, 2).join('.')
        selector = `${selector}.${classes}`
      }

      const typography: TypographyStyles = {
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight,
        fontFamily: computed.fontFamily,
        lineHeight: computed.lineHeight,
        letterSpacing: computed.letterSpacing,
        textAlign: computed.textAlign,
      }

      const colors: ColorStyles = {
        color: computed.color,
        backgroundColor: computed.backgroundColor,
        borderColor: computed.borderColor,
      }

      const spacing: SpacingStyles = {
        padding: computed.padding,
        margin: computed.margin,
        gap: computed.gap,
      }

      const isHoverable = el.classList.contains('nq-hoverable')

      styles.push({
        selector,
        tagName: el.tagName,
        textContent: el.textContent?.trim().substring(0, 50) || '',
        typography,
        colors,
        spacing,
        isHoverable,
      })
    }

    return styles
  }, sectionIndex)
}

/**
 * Compare styles between local and prod for a single section
 */
export function compareSectionStyles(
  localStyles: StyleData[],
  prodStyles: StyleData[],
  sectionIndex: number,
): PageStyleDiff {
  const result: PageStyleDiff = {
    typography: [],
    colors: [],
    spacing: [],
    hoverable: [],
  }

  // Match elements by tag name and text content (fuzzy matching)
  for (const local of localStyles) {
    const prod = findMatchingElement(local, prodStyles)

    if (!prod) {
      continue // Can't compare if no match found
    }

    const elementId = `${local.tagName} "${local.textContent}"`

    // Compare typography (PRIMARY focus - exact match)
    const typoDiffs: string[] = []
    if (local.typography.fontSize !== prod.typography.fontSize) {
      typoDiffs.push(`fontSize: ${local.typography.fontSize} → ${prod.typography.fontSize}`)
    }
    if (local.typography.fontWeight !== prod.typography.fontWeight) {
      typoDiffs.push(`fontWeight: ${local.typography.fontWeight} → ${prod.typography.fontWeight}`)
    }
    if (!fontsMatch(local.typography.fontFamily, prod.typography.fontFamily)) {
      typoDiffs.push(`fontFamily: ${local.typography.fontFamily} → ${prod.typography.fontFamily}`)
    }
    if (local.typography.lineHeight !== prod.typography.lineHeight) {
      typoDiffs.push(`lineHeight: ${local.typography.lineHeight} → ${prod.typography.lineHeight}`)
    }

    if (typoDiffs.length > 0) {
      result.typography.push({
        section: sectionIndex,
        element: elementId,
        local: { typography: local.typography },
        prod: { typography: prod.typography },
        differences: typoDiffs,
      })
    }

    // Compare colors (check significant differences only)
    const colorDiffs: string[] = []
    const localColor = normalizeColor(local.colors.color)
    const prodColor = normalizeColor(prod.colors.color)
    if (isSignificantColorDiff(localColor, prodColor)) {
      const diff = colorDifference(localColor, prodColor)
      colorDiffs.push(`color: ${localColor} → ${prodColor} (diff: ${Math.round(diff)})`)
    }

    const localBg = normalizeColor(local.colors.backgroundColor)
    const prodBg = normalizeColor(prod.colors.backgroundColor)
    if (isSignificantColorDiff(localBg, prodBg)) {
      const diff = colorDifference(localBg, prodBg)
      colorDiffs.push(`backgroundColor: ${localBg} → ${prodBg} (diff: ${Math.round(diff)})`)
    }

    if (colorDiffs.length > 0) {
      result.colors.push({
        section: sectionIndex,
        element: elementId,
        local: { colors: { color: localColor, backgroundColor: localBg } },
        prod: { colors: { color: prodColor, backgroundColor: prodBg } },
        differences: colorDiffs,
      })
    }

    // Compare spacing (inner content only - padding/margin of elements)
    const spacingDiffs: string[] = []
    if (local.spacing.padding !== prod.spacing.padding) {
      spacingDiffs.push(`padding: ${local.spacing.padding} → ${prod.spacing.padding}`)
    }
    if (local.spacing.gap && prod.spacing.gap && local.spacing.gap !== prod.spacing.gap) {
      spacingDiffs.push(`gap: ${local.spacing.gap} → ${prod.spacing.gap}`)
    }

    if (spacingDiffs.length > 0) {
      result.spacing.push({
        section: sectionIndex,
        element: elementId,
        local: { spacing: local.spacing },
        prod: { spacing: prod.spacing },
        differences: spacingDiffs,
      })
    }

    // Track hoverable elements specifically
    if (local.isHoverable || prod.isHoverable) {
      const hoverDiffs: string[] = []
      if (local.isHoverable !== prod.isHoverable) {
        hoverDiffs.push(`isHoverable: ${local.isHoverable} → ${prod.isHoverable}`)
      }
      // Include any style differences for hoverable elements
      if (typoDiffs.length > 0 || colorDiffs.length > 0 || spacingDiffs.length > 0) {
        hoverDiffs.push(...typoDiffs, ...colorDiffs, ...spacingDiffs)
      }

      if (hoverDiffs.length > 0) {
        result.hoverable.push({
          section: sectionIndex,
          element: elementId,
          local: { isHoverable: local.isHoverable },
          prod: { isHoverable: prod.isHoverable },
          differences: hoverDiffs,
        })
      }
    }
  }

  return result
}

/**
 * Find matching element in prod styles based on tag and text content
 */
function findMatchingElement(local: StyleData, prodStyles: StyleData[]): StyleData | null {
  // Exact match by tag and text
  let match = prodStyles.find(
    p => p.tagName === local.tagName && p.textContent === local.textContent,
  )

  if (match) {
    return match
  }

  // Fuzzy match by tag and similar text (first 20 chars)
  match = prodStyles.find(
    p => p.tagName === local.tagName
      && p.textContent.substring(0, 20) === local.textContent.substring(0, 20),
  )

  return match || null
}

/**
 * Check if font families match (handle fallbacks)
 */
function fontsMatch(font1: string, font2: string): boolean {
  // Extract primary font (before first comma)
  const primary1 = font1.split(',')[0].trim().replace(/['"]/g, '')
  const primary2 = font2.split(',')[0].trim().replace(/['"]/g, '')

  return primary1 === primary2
}

/**
 * Compare all sections between local and prod pages
 */
export function comparePageStyles(
  localSections: StyleData[][],
  prodSections: StyleData[][],
): PageStyleDiff {
  const combined: PageStyleDiff = {
    typography: [],
    colors: [],
    spacing: [],
    hoverable: [],
  }

  const minLength = Math.min(localSections.length, prodSections.length)

  for (let i = 0; i < minLength; i++) {
    const sectionDiff = compareSectionStyles(localSections[i], prodSections[i], i)
    combined.typography.push(...sectionDiff.typography)
    combined.colors.push(...sectionDiff.colors)
    combined.spacing.push(...sectionDiff.spacing)
    combined.hoverable.push(...sectionDiff.hoverable)
  }

  return combined
}
