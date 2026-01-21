import plugin from 'tailwindcss/plugin'

/**
 * Fluid sizing utilities for Tailwind CSS v4
 *
 * Generates responsive values that scale between min and max viewport widths
 * using CSS clamp() for smooth interpolation.
 *
 * Usage patterns:
 * - Named scale: f-mt-md, f-pt-xl, f-text-lg
 * - Custom min/max: f-pt-96/136, f-h-36/52, f-pb-60/80
 *
 * Viewport range: 320px (min) to 1440px (max)
 */

// Viewport width bounds for fluid calculations (in px)
const MIN_VIEWPORT = 320
const MAX_VIEWPORT = 1440

// Predefined fluid spacing scale (min/max in px)
const FLUID_SCALE: Record<string, [number, number]> = {
  '2xs': [4, 6],
  'xs': [8, 12],
  'sm': [12, 16],
  'md': [16, 24],
  'lg': [24, 32],
  'xl': [32, 48],
  '2xl': [48, 64],
  '3xl': [64, 96],
  '4xl': [96, 128],
  '5xl': [160, 200],
}

// Predefined fluid font-size scale (min/max in px)
const FLUID_TEXT_SCALE: Record<string, [number, number]> = {
  '2xs': [10, 11],
  'xs': [11, 12],
  'sm': [12, 14],
  'base': [14, 16],
  'lg': [16, 18],
  'xl': [18, 20],
  '2xl': [20, 24],
  '3xl': [24, 30],
  '4xl': [30, 36],
  '5xl': [36, 48],
  '6xl': [48, 60],
}

/**
 * Generate a CSS clamp() value for fluid sizing
 */
function fluidClamp(min: number, max: number): string {
  const slope = (max - min) / (MAX_VIEWPORT - MIN_VIEWPORT)
  const intercept = min - slope * MIN_VIEWPORT
  const preferred = `${intercept.toFixed(4)}px + ${(slope * 100).toFixed(4)}vw`
  return `clamp(${min}px, ${preferred}, ${max}px)`
}

/**
 * Parse a value like "96/136" into [96, 136] or lookup named scale
 */
function parseFluidValue(value: string, scale: Record<string, [number, number]>): [number, number] | null {
  // Check for named scale value
  if (scale[value]) {
    return scale[value]
  }
  // Parse min/max format like "96/136"
  const match = value.match(/^(\d+)\/(\d+)$/)
  if (match) {
    return [Number.parseInt(match[1], 10), Number.parseInt(match[2], 10)]
  }
  return null
}

// CSS property mappings
const SPACING_PROPERTIES: Record<string, string> = {
  m: 'margin',
  mt: 'margin-top',
  mr: 'margin-right',
  mb: 'margin-bottom',
  ml: 'margin-left',
  mx: `${['margin-left', 'margin-right'].join('; ')}: `,
  my: `${['margin-top', 'margin-bottom'].join('; ')}: `,
  p: 'padding',
  pt: 'padding-top',
  pr: 'padding-right',
  pb: 'padding-bottom',
  pl: 'padding-left',
  px: `${['padding-left', 'padding-right'].join('; ')}: `,
  py: `${['padding-top', 'padding-bottom'].join('; ')}: `,
  gap: 'gap',
  w: 'width',
  h: 'height',
  size: `${['width', 'height'].join('; ')}: `,
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
}

export default plugin(({ matchUtilities }) => {
  // Fluid spacing utilities (margin, padding, gap, dimensions)
  for (const [prefix, property] of Object.entries(SPACING_PROPERTIES)) {
    matchUtilities(
      {
        [`f-${prefix}`]: (value: string) => {
          const parsed = parseFluidValue(value, FLUID_SCALE)
          if (!parsed)
            return null
          const clampValue = fluidClamp(parsed[0], parsed[1])

          // Handle compound properties (mx, my, px, py, size)
          if (property.includes('; ')) {
            const props = property.replace(': ', '').split('; ')
            const styles: Record<string, string> = {}
            for (const prop of props) {
              styles[prop] = clampValue
            }
            return styles
          }

          return { [property]: clampValue }
        },
      },
      {
        values: {
          ...Object.fromEntries(Object.keys(FLUID_SCALE).map(k => [k, k])),
        },
        modifiers: 'any',
      },
    )
  }

  // Fluid font-size utilities
  matchUtilities(
    {
      'f-text': (value: string) => {
        const parsed = parseFluidValue(value, FLUID_TEXT_SCALE)
        if (!parsed)
          return null
        return { 'font-size': fluidClamp(parsed[0], parsed[1]) }
      },
    },
    {
      values: {
        ...Object.fromEntries(Object.keys(FLUID_TEXT_SCALE).map(k => [k, k])),
      },
      modifiers: 'any',
    },
  )
})
