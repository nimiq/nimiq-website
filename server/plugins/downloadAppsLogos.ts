import { mkdir, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { consola } from 'consola'

interface AppData {
  name: string
  description: string
  link: string
  type: string
  logo: string
  screenshot: string
  developer?: string
  slug: string
}

const APPS_JSON_URL = 'https://raw.githubusercontent.com/onmax/nimiq-awesome/main/src/data/dist/nimiq-apps.json'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('build:before', async () => {
    consola.start('Downloading app logos and screenshots...')

    const publicAppsDir = join(process.cwd(), 'public', 'apps')

    // Clean up existing directory
    try {
      await rm(publicAppsDir, { recursive: true, force: true })
      consola.info('Cleaned public/apps/ directory')
    }
    catch (error) {
      // Ignore if directory doesn't exist
    }

    // Create fresh directory
    await mkdir(publicAppsDir, { recursive: true })

    // Fetch apps JSON
    const response = await fetch(APPS_JSON_URL)
    if (!response.ok) {
      throw new Error(`Failed to fetch apps JSON: ${response.statusText}`)
    }
    const apps: AppData[] = await response.json()

    consola.info(`Found ${apps.length} apps to process`)

    // Download and save assets for each app
    for (const app of apps) {
      // Download logo if it exists
      if (app.logo) {
        try {
          const logoResponse = await fetch(app.logo)
          if (!logoResponse.ok) {
            throw new Error(`Failed to download logo for ${app.name}: ${logoResponse.statusText}`)
          }
          const logoBuffer = Buffer.from(await logoResponse.arrayBuffer())
          const logoExt = app.logo.split('.').pop() || 'svg'
          const logoFilename = `${app.slug}-logo.${logoExt}`
          await writeFile(join(publicAppsDir, logoFilename), logoBuffer)
        }
        catch (error) {
          throw new Error(`Failed to process logo for ${app.name}: ${error}`)
        }
      }

      // Download screenshot if it exists
      if (app.screenshot) {
        try {
          const screenshotResponse = await fetch(app.screenshot)
          if (!screenshotResponse.ok) {
            throw new Error(`Failed to download screenshot for ${app.name}: ${screenshotResponse.statusText}`)
          }
          const screenshotBuffer = Buffer.from(await screenshotResponse.arrayBuffer())
          const screenshotExt = app.screenshot.split('.').pop() || 'png'
          const screenshotFilename = `${app.slug}-screenshot.${screenshotExt}`
          await writeFile(join(publicAppsDir, screenshotFilename), screenshotBuffer)
        }
        catch (error) {
          throw new Error(`Failed to process screenshot for ${app.name}: ${error}`)
        }
      }
    }

    consola.success('App logos and screenshots downloaded')
  })
})
