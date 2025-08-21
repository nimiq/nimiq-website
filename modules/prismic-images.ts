/**
 * Simplified Prismic Images Module
 *
 * Downloads Prismic images during build and dev startup.
 * Much simpler than the previous implementation.
 */
import process from 'node:process'
import { defineNuxtModule } from '@nuxt/kit'
import consola from 'consola'
import environment from '../lib/env'
import { downloadMissingImages, fetchPrismicImages } from '../utils/prismic-images-server'

const prismicAccessToken = process.env.PRISMIC_ACCESS_TOKEN!

export default defineNuxtModule({
  meta: {
    name: 'prismic-images',
    configKey: 'prismicImages',
  },
  setup(_options, nuxt) {
    // Download images before build
    nuxt.hook('nitro:build:before', downloadImages)

    // Download images in dev mode when ready
    if (nuxt.options.dev) {
      nuxt.hook('ready', downloadImages)
    }
  },
})

async function downloadImages(): Promise<void> {
  if (!prismicAccessToken) {
    consola.warn('⚠️ PRISMIC_ACCESS_TOKEN not found, skipping image download')
    return
  }

  try {
    consola.info('\n🖼️ Processing Prismic images...')

    // Fetch all images from Prismic
    const images = await fetchPrismicImages(prismicAccessToken, environment.showDrafts)

    if (images.length === 0) {
      consola.success('No Prismic images found')
      return
    }

    // Download missing images
    await downloadMissingImages(images)

    consola.success('Prismic image processing completed\n')
  }
  catch (error) {
    consola.error('Failed to process Prismic images:', error)
  }
}
