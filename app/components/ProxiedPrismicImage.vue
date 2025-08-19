<script lang="ts" setup>
/**
 * Proxied Prismic Image Component
 *
 * Downloads and serves Prismic images locally to prevent future attacks on Prismic CMS.
 * We handle the proxy ourselves by caching images during build time in static environments.
 *
 * Adapted from https://github.com/prismicio/prismic-vue/blob/68a8be98a79c4627f83ca33735f07668329fe1e3/src/PrismicImage.vue
 */

import type { PrismicImageProps } from '@prismicio/vue'

import { asImagePixelDensitySrcSet, asImageWidthSrcSet, isFilled } from '@prismicio/client'
import { join } from 'pathe'

const props = defineProps<PrismicImageProps>()
const { fallbackAlt, field, widths, alt, pixelDensities, imgixParams } = props
// @ts-expect-error types are complex
const { width, height } = props

const { components } = useRuntimeConfig().public.prismic

if (import.meta.dev) {
  watchEffect(() => {
    if (typeof alt === 'string' && alt !== '') {
      console.warn(`[PrismicImage] The "alt" prop can only be used to declare an image as decorative by passing an empty string (alt="") but was provided a non-empty string.`)
    }

    if (typeof fallbackAlt !== 'undefined' && typeof fallbackAlt === 'string' && fallbackAlt !== '') {
      console.warn(`[PrismicImage] The "fallbackAlt" prop can only be used to declare an image as decorative by passing an empty string (fallbackAlt="") but was provided a non-empty string.`)
    }

    if (widths && pixelDensities) {
      console.warn(`[PrismicImage] Only one of "widths" or "pixelDensities" props can be provided. "widths" will be used.`)
    }
  })
}

function castInt(input: string | number | undefined): number | undefined {
  if (typeof input === 'number' || typeof input === 'undefined')
    return input
  const parsed = Number.parseInt(input)
  return Number.isNaN(parsed) ? undefined : parsed
}

if (!isFilled.imageThumbnail(field))
  throw new Error('Image is not filled')

const originalFieldUrl = field.url
const mainImage = processImageForLocal(originalFieldUrl)

const responsiveImages: Array<{ key: string } & ReturnType<typeof processImageForLocal>> = []
const responsiveViews = ['Lg', 'Md', 'Sm', 'Xs'] as const

for (const viewKey of responsiveViews) {
  const responsiveField = (field as any)[viewKey]
  if (responsiveField && responsiveField.url) {
    const responsive = processImageForLocal(responsiveField.url)
    responsiveImages.push({ key: viewKey, ...responsive })
  }
}

// asImageWidthSrcSet requires full URLs
const DUMMY_DOMAIN = 'https://localhost'
const tempField = {
  ...field,
  url: `${DUMMY_DOMAIN}${mainImage.localPath}`,
}

for (const responsive of responsiveImages) {
  if ((tempField as any)[responsive.key]) {
    (tempField as any)[responsive.key] = {
      ...(tempField as any)[responsive.key],
      url: `${DUMMY_DOMAIN}${responsive.localPath}`,
    }
  }
}

let src = ''
let srcSet = ''

if (widths || !pixelDensities) {
  const res = asImageWidthSrcSet(tempField, {
    ...imgixParams,
    widths: widths === 'defaults' ? components?.imageWidthSrcSetDefaults : widths,
  })
  src = res.src.replace(DUMMY_DOMAIN, '')
  srcSet = res.srcset.replaceAll(DUMMY_DOMAIN, '')
}
else if (pixelDensities) {
  const res = asImagePixelDensitySrcSet(tempField, {
    ...imgixParams,
    pixelDensities: pixelDensities === 'defaults' ? components?.imagePixelDensitySrcSetDefaults : pixelDensities,
  })
  src = res.src.replace(DUMMY_DOMAIN, '')
  srcSet = res.srcset.replaceAll(DUMMY_DOMAIN, '')
}

const ar = field.dimensions.width / field.dimensions.height

const castedWidth = castInt(width)
const castedHeight = castInt(height)

let resolvedWidth = castedWidth ?? field.dimensions.width
let resolvedHeight = castedHeight ?? field.dimensions.height

if (castedWidth != null && castedHeight == null)
  resolvedHeight = castedWidth / ar
else if (castedWidth == null && castedHeight != null)
  resolvedWidth = castedHeight * ar

const image = {
  src,
  srcSet,
  alt: alt ?? (field.alt || fallbackAlt),
  width: Math.round(resolvedWidth),
  height: Math.round(resolvedHeight),
}

const { isNuxthubPreview, isNuxthubProduction } = useRuntimeConfig().public.environment
const isNuxthub = isNuxthubPreview || isNuxthubProduction

if (import.meta.server && !isNuxthub) {
  try {
    const { access, writeFile, mkdir } = await import('node:fs/promises')
    const { constants } = await import('node:fs')
    const { Buffer } = await import('node:buffer')

    async function downloadImageIfNeeded(imageInfo: ReturnType<typeof processImageForLocal>) {
      const publicFilePath = join(process.cwd(), 'public', imageInfo.localPath)
      const publicDir = join(process.cwd(), 'public', imageInfo.localPath.split('/').slice(0, -1).join('/'))

      try {
        await access(publicFilePath, constants.F_OK)
      }
      catch {
        console.warn(`[ProxiedPrismicImage] Downloading image: ${imageInfo.fileName}`)
        await mkdir(publicDir, { recursive: true })
        const response = await $fetch(imageInfo.originalUrl, { responseType: 'arrayBuffer' })
        await writeFile(publicFilePath, Buffer.from(response as ArrayBuffer))
      }
    }

    await downloadImageIfNeeded(mainImage)
    for (const responsiveImage of responsiveImages) {
      await downloadImageIfNeeded(responsiveImage)
    }
  }
  catch (error) {
    console.error('Failed to download Prismic images:', error)
  }
}
</script>

<template>
  <NuxtImg v-if="image" :src="image.src" :srcset="image.srcSet" :alt="image.alt" />
</template>
