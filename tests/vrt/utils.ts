import type { TestContext, VisualRegressionArtifact } from 'vitest'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { setTimeout as delay } from 'node:timers/promises'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'
import { recordArtifact } from 'vitest'

export interface ImageDiffResult {
  width: number
  height: number
  diffPixels: number
  totalPixels: number
  diffRatio: number
}

export function createDiff(referencePath: string, actualPath: string, diffPath: string): ImageDiffResult {
  if (!existsSync(referencePath))
    throw new Error(`Missing reference screenshot: ${referencePath}. Run 'pnpm vrt:reference:update'.`)

  const referenceImage = PNG.sync.read(readFileSync(referencePath))
  const actualImage = PNG.sync.read(readFileSync(actualPath))

  // Use min dimensions to avoid artificial diff from height/width mismatches
  const width = Math.min(referenceImage.width, actualImage.width)
  const height = Math.min(referenceImage.height, actualImage.height)

  const croppedReference = cropImage(referenceImage, width, height)
  const croppedActual = cropImage(actualImage, width, height)
  const diffImage = new PNG({ width, height })

  const diffPixels = pixelmatch(
    croppedReference.data,
    croppedActual.data,
    diffImage.data,
    width,
    height,
    { threshold: 0.15 },
  )

  mkdirSync(dirname(diffPath), { recursive: true })
  writeFileSync(diffPath, PNG.sync.write(diffImage))

  const totalPixels = width * height
  const diffRatio = totalPixels === 0 ? 0 : diffPixels / totalPixels

  return { width, height, diffPixels, totalPixels, diffRatio }
}

function cropImage(image: PNG, width: number, height: number): PNG {
  if (image.width === width && image.height === height)
    return image

  const cropped = new PNG({ width, height })
  PNG.bitblt(image, cropped, 0, 0, Math.min(image.width, width), Math.min(image.height, height), 0, 0)
  return cropped
}

export async function attachVisualArtifact(ctx: TestContext, data: {
  label: string
  referencePath: string
  actualPath: string
  diffPath: string
  width: number
  height: number
  diffRatio: number
}): Promise<void> {
  const artifact: VisualRegressionArtifact = {
    type: 'internal:toMatchScreenshot',
    kind: 'visual-regression',
    message: `${data.label} diff ${(data.diffRatio * 100).toFixed(3)}%`,
    attachments: [
      { name: 'reference', path: data.referencePath, contentType: 'image/png', width: data.width, height: data.height },
      { name: 'actual', path: data.actualPath, contentType: 'image/png', width: data.width, height: data.height },
      { name: 'diff', path: data.diffPath, contentType: 'image/png' },
    ],
  }
  await recordArtifact(ctx.task as never, artifact)
}

export async function assertLocalIsReachable(localUrl: string): Promise<void> {
  const url = new URL('/', localUrl).toString()
  const startedAt = Date.now()
  let lastError: unknown

  while (Date.now() - startedAt < 30_000) {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 2000)
    try {
      const response = await fetch(url, { signal: controller.signal })
      if (response.status >= 200 && response.status < 400)
        return
      lastError = new Error(`Status ${response.status}`)
    }
    catch (error) {
      lastError = error
    }
    finally {
      clearTimeout(timeoutId)
    }
    await delay(500)
  }

  throw new Error(`VRT local URL is not reachable (${localUrl}). Start dev server before running tests.\n${String(lastError)}`)
}
