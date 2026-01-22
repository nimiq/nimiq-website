import { exec } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import { promisify } from 'node:util'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

const execAsync = promisify(exec)

const PROD = 'https://nimiq.com'
const SCREENSHOTS_DIR = 'tests/screenshots'

const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'mobile', width: 375, height: 667 },
]

async function agentBrowser(cmd: string): Promise<string> {
  const { stdout, stderr } = await execAsync(`npx agent-browser ${cmd}`, { timeout: 60000 })
  if (stderr && !stderr.includes('npm warn'))
    console.warn('agent-browser stderr:', stderr)
  return stdout.trim()
}

describe('visual Parity Setup', () => {
  beforeAll(() => {
    if (!existsSync(SCREENSHOTS_DIR))
      mkdirSync(SCREENSHOTS_DIR, { recursive: true })
  })

  afterAll(async () => {
    await agentBrowser('close').catch(() => {})
  })

  it('agent-browser can open pages', async () => {
    const url = await agentBrowser(`open "${PROD}" && npx agent-browser get url`)
    expect(url).toContain('nimiq.com')
  })

  it('agent-browser can take screenshots', async () => {
    const testPath = `${SCREENSHOTS_DIR}/test-screenshot.png`
    await agentBrowser(`open "${PROD}"`)
    await agentBrowser(`screenshot "${testPath}"`)
    expect(existsSync(testPath)).toBe(true)
  })

  for (const viewport of VIEWPORTS) {
    it(`can set ${viewport.name} viewport`, async () => {
      await agentBrowser(`set viewport ${viewport.width} ${viewport.height}`)
      await agentBrowser(`open "${PROD}"`)
      // Just verify no error - viewport is set internally
      const url = await agentBrowser('get url')
      expect(url).toContain('nimiq.com')
    })
  }
})
