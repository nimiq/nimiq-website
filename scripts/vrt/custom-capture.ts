import { chromium } from 'playwright'

const LOCAL_URL = 'http://localhost:3005'

export async function captureStakingCalculator(): Promise<void> {
  const browser = await chromium.launch({ headless: true })

  try {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      deviceScaleFactor: 1,
    })

    const page = await context.newPage()
    await page.goto(`${LOCAL_URL}/staking`, { waitUntil: 'load', timeout: 60000 })
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {})

    // Find and scroll to calculator
    await page.evaluate(() => {
      const elements = document.querySelectorAll('*')
      for (const el of elements) {
        if (el.textContent?.toLowerCase().includes('calculator')) {
          (el as HTMLElement).scrollIntoView({ block: 'center' })
          break
        }
      }
    })

    await page.waitForTimeout(1000)
    await page.screenshot({
      path: '/tmp/staking-v7/calculator.png',
      fullPage: false,
      animations: 'disabled',
    })
    await context.close()
    console.log('✓ Saved to /tmp/staking-v7/calculator.png')
  }
  finally {
    await browser.close()
  }
}

export async function captureBuyAndSellConverter(): Promise<void> {
  const browser = await chromium.launch({ headless: true })

  try {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      deviceScaleFactor: 1,
    })

    const page = await context.newPage()
    await page.goto(`${LOCAL_URL}/buy-and-sell`, { waitUntil: 'load', timeout: 60000 })
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {})

    // Find and scroll to converter form
    await page.evaluate(() => {
      const elements = document.querySelectorAll('*')
      for (const el of elements) {
        const text = el.textContent?.toLowerCase() || ''
        if ((text.includes('usd') && text.includes('nim')) || text.includes('convert')) {
          (el as HTMLElement).scrollIntoView({ block: 'center' })
          break
        }
      }
    })

    await page.waitForTimeout(1000)
    await page.screenshot({
      path: '/tmp/staking-v7/buy-and-sell.png',
      fullPage: false,
      animations: 'disabled',
    })
    await context.close()
    console.log('✓ Saved to /tmp/staking-v7/buy-and-sell.png')
  }
  finally {
    await browser.close()
  }
}

async function main() {
  const { mkdirSync } = await import('node:fs')
  mkdirSync('/tmp/staking-v7', { recursive: true })
  await captureStakingCalculator()
  await captureBuyAndSellConverter()
}

main().catch(console.error)
