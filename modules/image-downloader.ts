// Downloads Prismic images during all build phases
import process from 'node:process'
import { defineNuxtModule } from '@nuxt/kit'
import environment from '../lib/env'
import { clearPrismicCache, getPrismicData } from '../shared/services/prismic-data'
import { analyzeImageSync, cleanupOrphanedImages, downloadPrismicImages, logImageSyncStatus, saveImageManifest } from '../shared/utils/prismic-images'

const prismicAccessToken = process.env.PRISMIC_ACCESS_TOKEN!

export default defineNuxtModule({
  meta: {
    name: 'nuxt-image-downloader',
    configKey: 'imageDownloader',
  },
  setup(_options, nuxt) {
    nuxt.hook('nitro:build:before', async () => {
      await downloadImages()
    })

    if (nuxt.options.dev) {
      nuxt.hook('ready', async () => {
        await downloadImages()
      })
    }

    nuxt.hook('build:done', () => {
      clearPrismicCache()
    })
  },
})

async function downloadImages(): Promise<void> {
  try {
    console.warn('\\n🖼️ Starting Prismic image download process...')

    const data = await getPrismicData({
      prismicAccessToken,
      showDrafts: environment.showDrafts,
    })

    if (data.allImages.length === 0) {
      console.warn('✅ No Prismic images found')
      return
    }

    console.warn(`🔍 Analyzing ${data.allImages.length} unique Prismic images...`)

    const status = await analyzeImageSync(data.allImages)
    logImageSyncStatus(status)

    let manifest: Record<string, string[]> = {}

    if (status.needDownload.length > 0) {
      const result = await downloadPrismicImages(status.needDownload, manifest)
      manifest = result.manifest
    }
    else {
      console.warn('✅ All images are already downloaded')
      // Build manifest from existing images
      data.allImages.forEach((img) => {
        if (img.documentUid) {
          const key = img.documentType ? `${img.documentType}:${img.documentUid}` : img.documentUid
          if (!manifest[key])
            manifest[key] = []
          manifest[key].push(img.localPath)
        }
      })
    }

    await saveImageManifest(manifest)

    if (status.orphaned.length > 0) {
      console.warn('\\n🧹 Cleaning up orphaned images...')
      await cleanupOrphanedImages(status)
    }

    console.warn('✅ Image download process completed\\n')
  }
  catch (error) {
    console.error('❌ Failed to download images:', error)
  }
}
