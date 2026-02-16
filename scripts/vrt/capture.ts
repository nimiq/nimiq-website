import type { Browser, Page } from 'playwright'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import process from 'node:process'

export interface VrtViewport {
  name: 'desktop' | 'mobile'
  width: number
  height: number
}

export const VRT_VIEWPORTS: readonly VrtViewport[] = [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'mobile', width: 375, height: 667 },
]

export function pathToSlug(path: string): string {
  if (path === '/')
    return 'home'
  return path.replace(/^\//, '').replace(/\//g, '-')
}

export function screenshotFilename(slug: string, viewport: VrtViewport): string {
  return `${slug}-${viewport.name}.png`
}

const COOKIE_DISMISS_SELECTORS = [
  'button:has-text("Accept all")',
  'button:has-text("Accept")',
  'button:has-text("I agree")',
  '[aria-label="Accept all"]',
  '[data-testid="cookie-accept"]',
]

const DISABLE_ANIMATIONS_CSS = `
*, *::before, *::after {
  animation: none !important;
  transition: none !important;
  caret-color: transparent !important;
}
`

const PROD_URL = process.env.VRT_PROD_URL ?? 'https://nimiq.com'
const USE_PROD_FONTS = process.env.VRT_USE_PROD_FONTS === '1' || process.env.VRT_USE_PROD_FONTS === 'true'
let cachedProdFontOverrideCss: string | null = null
const PRIMARY_FONT_FAMILY = USE_PROD_FONTS ? 'Mulish VRT' : 'Mulish'

async function getProdFontOverrideCss(): Promise<string> {
  if (cachedProdFontOverrideCss)
    return cachedProdFontOverrideCss

  const prodHtml = await fetch(new URL('/', PROD_URL)).then(r => r.text())
  const cssHrefs = Array.from(prodHtml.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)).map(m => m[1]).filter(Boolean)
  const prodFontBase = new URL('/_fonts/', PROD_URL).toString()

  const stylesheets: string[] = []
  for (const href of cssHrefs) {
    if (!href.includes('/_nuxt/entry.'))
      continue
    try {
      stylesheets.push(await fetch(new URL(href, PROD_URL)).then(r => r.text()))
    }
    catch {
      continue
    }
  }

  const entryCss = stylesheets.join('\n')
  const mulishFaces = entryCss.match(/@font-face\{font-family:Mulish;[^}]+\}/g) ?? []
  const mulishFallbackFaces = entryCss.match(/@font-face\{font-family:"Mulish Fallback: Arial";[^}]+\}/g) ?? []

  const rewriteUrl = (input: string) => input.replaceAll('url(../_fonts/', `url(${prodFontBase}`)

  const rewritten = [
    ...mulishFaces.map(face => rewriteUrl(face).replace('font-family:Mulish;', 'font-family:"Mulish VRT";')),
    ...mulishFallbackFaces.map(face => rewriteUrl(face).replace('font-family:"Mulish Fallback: Arial";', 'font-family:"Mulish VRT Fallback: Arial";')),
  ].join('\n')

  cachedProdFontOverrideCss = `
${rewritten}
:root {
  --font-sans: "Mulish VRT", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
  --nq-font-sans: var(--font-sans) !important;
  --nq-font-family: var(--font-sans) !important;
  --defaults-font-family: var(--font-sans) !important;
}
html, body { font-family: var(--font-sans) !important; }
`

  return cachedProdFontOverrideCss
}

async function waitForFontsAndImages(page: Page): Promise<void> {
  await page
    .evaluate(async () => {
      const primaryFontFamily = (globalThis as any).__VRT_PRIMARY_FONT_FAMILY || 'Mulish'
      const fonts = (document as any).fonts
      if (fonts?.load) {
        await Promise.allSettled([
          fonts.load(`16px "${primaryFontFamily}"`),
          fonts.load(`700 60px "${primaryFontFamily}"`),
        ])
      }
      const fontsReady = fonts?.ready
      if (fontsReady)
        await fontsReady

      const images = Array.from(document.images || [])
      await Promise.all(images.map((img) => {
        if (img.complete)
          return Promise.resolve()
        return new Promise<void>((resolve) => {
          const done = () => resolve()
          img.addEventListener('load', done, { once: true })
          img.addEventListener('error', done, { once: true })
          // Timeout for lazy-loaded images that may never enter viewport
          setTimeout(done, 5000)
        })
      }))
    })
    .catch(() => {})
}

interface CaptureScreenshotOptions {
  browser: Browser
  baseUrl: string
  viewport: VrtViewport
  outputPath: string
  pagePath?: string
  fullPage?: boolean
}

export async function captureScreenshot(options: CaptureScreenshotOptions): Promise<{ path: string, width: number, height: number }> {
  const pagePath = options.pagePath ?? '/'
  const pageUrl = new URL(pagePath, options.baseUrl).toString()
  const outputPath = resolve(options.outputPath)
  await mkdir(dirname(outputPath), { recursive: true })

  const context = await options.browser.newContext({
    viewport: {
      width: options.viewport.width,
      height: options.viewport.height,
    },
    deviceScaleFactor: 1,
  })

  try {
    const page = await context.newPage()
    await page.addInitScript((fontFamily) => {
      ;(globalThis as any).__VRT_PRIMARY_FONT_FAMILY = fontFamily
    }, PRIMARY_FONT_FAMILY)
    await page.goto(pageUrl, { waitUntil: 'load', timeout: 60000 })
    // Best-effort wait for network to settle (pages with WebSocket/polling won't reach idle)
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {})
    await page.addStyleTag({ content: DISABLE_ANIMATIONS_CSS })
    await stabilizeVolatileElements(page)
    await dismissCookieBanner(page)
    if (USE_PROD_FONTS && options.baseUrl !== PROD_URL) {
      try {
        await page.addStyleTag({ content: await getProdFontOverrideCss() })
      }
      catch {}
    }
    await waitForFontsAndImages(page)
    await page.waitForTimeout(600)
    await page.screenshot({
      path: outputPath,
      fullPage: options.fullPage ?? true,
      animations: 'disabled',
      caret: 'hide',
      scale: 'css',
    })

    // Crop to viewport width if the screenshot is wider (content overflow)
    await cropToViewportWidth(outputPath, options.viewport.width)

    return {
      path: outputPath,
      width: options.viewport.width,
      height: options.viewport.height,
    }
  }
  finally {
    await context.close()
  }
}

async function stabilizeVolatileElements(page: Page): Promise<void> {
  await page.evaluate(() => {
    function mask(el: Element | null, color = '#1F2348') {
      if (!el)
        return
      const s = (el as HTMLElement).style
      s.position = 'relative'
      s.overflow = 'hidden'
      const overlay = document.createElement('div')
      Object.assign(overlay.style, { position: 'absolute', inset: '0', background: color, zIndex: '9999' })
      el.appendChild(overlay)
    }

    const path = window.location.pathname

    // === Global masks ===
    document.querySelectorAll('iframe').forEach(f => mask(f.parentElement, '#1F2348'))
    document.querySelectorAll('canvas').forEach(c => mask(c.parentElement, '#1F2348'))
    // Shuffled community app logos in overflow banners
    document.querySelectorAll('a').forEach((a) => {
      const style = getComputedStyle(a)
      if (style.position === 'absolute' && a.querySelector('img') && a.closest('[style*="overflow"],.overflow-hidden,[class*="overflow-hidden"]'))
        (a as HTMLElement).style.display = 'none'
    })

    // === Wallet page ===
    if (path.startsWith('/wallet')) {
      document.querySelectorAll('.metacloud').forEach(el => ((el as HTMLElement).style.display = 'none'))
      // Random word marquee background behind the challenge card
      const wordMarquee = document.querySelector('.max-w-none.w-full.absolute.overflow-x-hidden')
      if (wordMarquee)
        (wordMarquee as HTMLElement).style.visibility = 'hidden'
    }

    // === Staking page ===
    if (path.startsWith('/staking')) {
      document.querySelectorAll('.staking-ripple').forEach(el => ((el as HTMLElement).style.visibility = 'hidden'))
      document.querySelectorAll('[data-percentage]').forEach(el => mask(el, 'rgba(255,255,255,0.3)'))
      // Validator list: live API data
      const validatorContainer = document.querySelector('[data-state]')
      if (validatorContainer)
        mask(validatorContainer, '#FAFAFA')
      // Calculator reward panel
      document.querySelectorAll('.bg-green\\/10').forEach(el => mask(el, 'rgba(34,197,94,0.1)'))
      // Donut chart containers
      document.querySelectorAll('[data-vis-single-container]').forEach(el => mask(el, '#FAFAFA'))
    }

    // === Community page ===
    if (path.startsWith('/community')) {
      // BannerAppGallery: random 6 apps in grid
      document.querySelectorAll('ul.grid-cols-3').forEach((ul) => {
        const parent = ul.closest('.row-span-2') || ul.parentElement
        if (parent)
          mask(parent, '#FFFFFF')
      })
      // GridNewYork images (IPX processing diffs)
      document.querySelectorAll('.one-image img').forEach(img => mask(img, '#E5E5E5'))
      // TokenFlags animated marquee
      document.querySelectorAll('.flags-marquee').forEach(el => mask(el, '#FAFAFA'))
    }
  }).catch(() => {})
}

async function cropToViewportWidth(imagePath: string, viewportWidth: number): Promise<void> {
  const { PNG } = await import('pngjs')
  const buf = await readFile(imagePath)
  const img = PNG.sync.read(buf)
  if (img.width <= viewportWidth)
    return
  const cropped = new PNG({ width: viewportWidth, height: img.height })
  PNG.bitblt(img, cropped, 0, 0, viewportWidth, img.height, 0, 0)
  await writeFile(imagePath, PNG.sync.write(cropped))
}

async function dismissCookieBanner(page: Page): Promise<void> {
  for (const selector of COOKIE_DISMISS_SELECTORS) {
    const target = page.locator(selector).first()
    try {
      if (await target.count()) {
        await target.click({ timeout: 1500 })
        await page.waitForTimeout(250)
        return
      }
    }
    catch {
      continue
    }
  }
}
