import type { Browser } from 'playwright'
import { mkdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { chromium } from 'playwright'
import sharp from 'sharp'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { captureScreenshot, VRT_VIEWPORTS } from '../../scripts/vrt/capture'
import { assertLocalIsReachable, attachVisualArtifact, createDiff } from './utils'

const LOCAL_URL = process.env.VRT_LOCAL_URL ?? 'http://127.0.0.1:3000'
const DIFF_THRESHOLD = Number.parseFloat(process.env.VRT_DIFF_THRESHOLD ?? '0.001')
const REFERENCE_DIR = resolve(process.cwd(), 'tests/vrt/reference')
const OUTPUT_DIR = resolve(process.cwd(), 'tests/vrt/output')

const HERO_WIDTH = 1280
const HERO_HEIGHT = 800

let browser: Browser

describe('homepage hero visual regression (desktop)', () => {
  beforeAll(async () => {
    if (!Number.isFinite(DIFF_THRESHOLD) || DIFF_THRESHOLD < 0 || DIFF_THRESHOLD > 1)
      throw new Error(`Invalid VRT_DIFF_THRESHOLD value: ${process.env.VRT_DIFF_THRESHOLD ?? ''}`)

    await assertLocalIsReachable(LOCAL_URL)
    mkdirSync(OUTPUT_DIR, { recursive: true })
    browser = await chromium.launch({ headless: true })
  })

  afterAll(async () => {
    await browser?.close()
  })

  it('matches production reference (desktop hero)', async (ctx) => {
    const viewport = VRT_VIEWPORTS.find(v => v.name === 'desktop')
    if (!viewport)
      throw new Error('Missing desktop viewport definition')

    const referenceFullPath = join(REFERENCE_DIR, 'home-desktop.png')
    const referenceCroppedPath = join(OUTPUT_DIR, 'home-desktop-hero-reference.png')
    const actualPath = join(OUTPUT_DIR, 'home-desktop-hero-actual.png')
    const diffPath = join(OUTPUT_DIR, 'home-desktop-hero-diff.png')

    mkdirSync(dirname(referenceCroppedPath), { recursive: true })
    await sharp(referenceFullPath)
      .extract({ left: 0, top: 0, width: HERO_WIDTH, height: HERO_HEIGHT })
      .png()
      .toFile(referenceCroppedPath)

    await captureScreenshot({
      browser,
      baseUrl: LOCAL_URL,
      viewport,
      outputPath: actualPath,
      pagePath: '/',
      fullPage: false,
    })

    const result = createDiff(referenceCroppedPath, actualPath, diffPath)
    await attachVisualArtifact(ctx, {
      label: 'homepage (desktop hero)',
      referencePath: referenceCroppedPath,
      actualPath,
      diffPath,
      width: result.width,
      height: result.height,
      diffRatio: result.diffRatio,
    })

    expect(
      result.diffRatio,
      `Visual mismatch (desktop hero) exceeded ${(DIFF_THRESHOLD * 100).toFixed(2)}%. Actual: ${(result.diffRatio * 100).toFixed(3)}%`,
    ).toBeLessThanOrEqual(DIFF_THRESHOLD)
  })
})
