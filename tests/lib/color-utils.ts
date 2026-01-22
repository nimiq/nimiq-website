/**
 * Color normalization utilities for comparing oklch and rgb color spaces
 */

interface RGB { r: number, g: number, b: number }

/**
 * Normalize any CSS color to rgb() format for comparison
 * Handles: rgb(), rgba(), oklch(), hex, named colors
 */
export function normalizeColor(color: string): string {
  if (!color || color === 'transparent' || color === 'none') {
    return 'rgb(0, 0, 0)' // Treat as black for comparison
  }

  // Already rgb/rgba format
  if (color.startsWith('rgb')) {
    return convertRgbaToRgb(color)
  }

  // oklch format - convert to rgb
  if (color.startsWith('oklch')) {
    return oklchToRgb(color)
  }

  // oklab format - convert to rgb
  if (color.startsWith('oklab')) {
    return oklabToRgb(color)
  }

  // Hex format
  if (color.startsWith('#')) {
    return hexToRgb(color)
  }

  // Named colors or other formats - return as-is
  // (Browser computed styles should already be rgb)
  return color
}

/**
 * Convert rgba(r, g, b, a) to rgb(r, g, b)
 * Ignores alpha channel for comparison
 */
function convertRgbaToRgb(rgba: string): string {
  const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (match) {
    return `rgb(${match[1]}, ${match[2]}, ${match[3]})`
  }
  return rgba
}

/**
 * Convert oklch() to rgb()
 * oklch format: oklch(L% C H) or oklch(L% C H / alpha)
 */
function oklchToRgb(oklch: string): string {
  // Parse oklch values
  const match = oklch.match(/oklch\(([\d.]+)%?\s+([\d.]+)\s+([\d.]+)/)
  if (!match) {
    return 'rgb(0, 0, 0)' // Fallback
  }

  const L = Number.parseFloat(match[1]) / 100 // Lightness 0-1
  const C = Number.parseFloat(match[2]) // Chroma
  const H = Number.parseFloat(match[3]) // Hue in degrees

  // Convert oklch → oklab → xyz → rgb
  // This is a simplified conversion (full conversion is complex)
  // For visual comparison, approximate conversion is sufficient

  // oklch to oklab
  const hRad = (H * Math.PI) / 180
  const a = C * Math.cos(hRad)
  const b = C * Math.sin(hRad)

  // oklab to xyz (simplified)
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3
  const s = (L - 0.0894841775 * a - 1.2914855480 * b) ** 3

  const x = 1.2270138511 * l - 0.5577999807 * m + 0.2812561490 * s
  const y = -0.0405801784 * l + 1.1122568696 * m - 0.0716766787 * s
  const z = -0.0763812845 * l - 0.4214819784 * m + 1.5861632204 * s

  // xyz to rgb
  let r = 3.2404542 * x - 1.5371385 * y - 0.4985314 * z
  let g = -0.9692660 * x + 1.8760108 * y + 0.0415560 * z
  let bVal = 0.0556434 * x - 0.2040259 * y + 1.0572252 * z

  // Gamma correction
  r = gammaCorrect(r)
  g = gammaCorrect(g)
  bVal = gammaCorrect(bVal)

  // Clamp and convert to 0-255
  r = Math.max(0, Math.min(255, Math.round(r * 255)))
  g = Math.max(0, Math.min(255, Math.round(g * 255)))
  bVal = Math.max(0, Math.min(255, Math.round(bVal * 255)))

  return `rgb(${r}, ${g}, ${bVal})`
}

function gammaCorrect(val: number): number {
  return val <= 0.0031308
    ? 12.92 * val
    : 1.055 * val ** (1 / 2.4) - 0.055
}

/**
 * Convert oklab() to rgb()
 * oklab format: oklab(L a b) or oklab(L a b / alpha)
 */
function oklabToRgb(oklab: string): string {
  // Parse oklab values
  const match = oklab.match(/oklab\(([\d.]+)\s+([\d.-]+)\s+([\d.-]+)/)
  if (!match) {
    return 'rgb(0, 0, 0)' // Fallback
  }

  const L = Number.parseFloat(match[1]) // Lightness 0-1
  const a = Number.parseFloat(match[2])
  const b = Number.parseFloat(match[3])

  // oklab to xyz (corrected matrix)
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3
  const s = (L - 0.0894841775 * a - 1.2914855480 * b) ** 3

  const x = 1.2270138511 * l - 0.5577999807 * m + 0.2812561490 * s
  const y = -0.0405801784 * l + 1.1122568696 * m - 0.0716766787 * s
  const z = -0.0763812845 * l - 0.4214819784 * m + 1.5861632204 * s

  // xyz to rgb
  let r = 3.2404542 * x - 1.5371385 * y - 0.4985314 * z
  let g = -0.9692660 * x + 1.8760108 * y + 0.0415560 * z
  let bVal = 0.0556434 * x - 0.2040259 * y + 1.0572252 * z

  // Gamma correction
  r = gammaCorrect(r)
  g = gammaCorrect(g)
  bVal = gammaCorrect(bVal)

  // Clamp and convert to 0-255
  r = Math.max(0, Math.min(255, Math.round(r * 255)))
  g = Math.max(0, Math.min(255, Math.round(g * 255)))
  bVal = Math.max(0, Math.min(255, Math.round(bVal * 255)))

  return `rgb(${r}, ${g}, ${bVal})`
}

/**
 * Convert hex color to rgb()
 */
function hexToRgb(hex: string): string {
  // Remove # if present
  hex = hex.replace('#', '')

  // Handle 3-digit hex
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('')
  }

  const r = Number.parseInt(hex.substring(0, 2), 16)
  const g = Number.parseInt(hex.substring(2, 4), 16)
  const b = Number.parseInt(hex.substring(4, 6), 16)

  return `rgb(${r}, ${g}, ${b})`
}

/**
 * Calculate color difference (simple euclidean distance in RGB space)
 * Returns value 0-765 (0 = identical, 765 = max difference like black vs white)
 */
export function colorDifference(color1: string, color2: string): number {
  const rgb1 = parseRgb(normalizeColor(color1))
  const rgb2 = parseRgb(normalizeColor(color2))

  if (!rgb1 || !rgb2) {
    return 0
  }

  const dr = rgb1.r - rgb2.r
  const dg = rgb1.g - rgb2.g
  const db = rgb1.b - rgb2.b

  return Math.sqrt(dr * dr + dg * dg + db * db)
}

function parseRgb(rgb: string): RGB | null {
  const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
  if (!match) {
    return null
  }

  return {
    r: Number.parseInt(match[1]),
    g: Number.parseInt(match[2]),
    b: Number.parseInt(match[3]),
  }
}

/**
 * Check if color difference is significant (threshold: 30 = noticeable to human eye)
 * Helps avoid flagging minor color differences
 */
export function isSignificantColorDiff(color1: string, color2: string): boolean {
  const diff = colorDifference(color1, color2)
  return diff > 30 // Noticeable difference threshold
}
