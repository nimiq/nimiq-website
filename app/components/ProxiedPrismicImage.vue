<script lang="ts" setup>
/**
 * Proxied Prismic Image Component
 *
 * Serves Prismic images locally to prevent future attacks on Prismic CMS.
 * Images are downloaded during build time by the crawler system.
 *
 * Adapted from https://github.com/prismicio/prismic-vue/blob/68a8be98a79c4627f83ca33735f07668329fe1e3/src/PrismicImage.vue
 */

import type { PrismicImageProps } from '@prismicio/vue'

import { asImagePixelDensitySrcSet, asImageWidthSrcSet, isFilled } from '@prismicio/client'

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

// Transform field to use local paths
const localField = transformResponsiveImageFieldToLocal(field)

// asImageWidthSrcSet requires full URLs, so we use a dummy domain
const DUMMY_DOMAIN = 'https://localhost'
const tempField = {
  ...localField,
  url: `${DUMMY_DOMAIN}${localField.url}`,
}

// Transform responsive variants to use dummy domain for srcSet generation
const responsiveViews = ['Lg', 'Md', 'Sm', 'Xs'] as const
for (const viewKey of responsiveViews) {
  if ((tempField as any)[viewKey]?.url) {
    (tempField as any)[viewKey] = {
      ...(tempField as any)[viewKey],
      url: `${DUMMY_DOMAIN}${(tempField as any)[viewKey].url}`,
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
  if (res) {
    src = res.src.replace(DUMMY_DOMAIN, '')
    srcSet = res.srcset.replaceAll(DUMMY_DOMAIN, '')
  }
}
else if (pixelDensities) {
  const res = asImagePixelDensitySrcSet(tempField, {
    ...imgixParams,
    pixelDensities: pixelDensities === 'defaults' ? components?.imagePixelDensitySrcSetDefaults : pixelDensities,
  })
  if (res) {
    src = res.src.replace(DUMMY_DOMAIN, '')
    srcSet = res.srcset.replaceAll(DUMMY_DOMAIN, '')
  }
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

// Images are now downloaded during build time by the crawler
// This component only handles URL transformation to local paths
</script>

<template>
  <NuxtImg v-if="image" :src="image.src" :srcset="image.srcSet" :alt="image.alt" />
</template>
