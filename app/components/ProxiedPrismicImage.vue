<script lang="ts" setup>
/**
 * Proxied Prismic Image Component
 *
 * Serves Prismic images locally to prevent future attacks on Prismic CMS.
 * Images are downloaded during build time by the crawler system.
 *
 * Adapted from https://github.com/prismicio/prismic-vue/blob/68a8be98a79c4627f83ca33735f07668329fe1e3/src/PrismicImage.vue
 */

import type { FilledImageFieldImage } from '@prismicio/client'

import type { PrismicImageProps } from '@prismicio/vue'
import { asImagePixelDensitySrcSet, asImageWidthSrcSet } from '@prismicio/client'

const props = defineProps<PrismicImageProps>()

const { components } = useRuntimeConfig().public.prismic

if (import.meta.dev) {
  watchEffect(() => {
    if (typeof props.alt === 'string' && props.alt !== '') {
      console.warn(`[PrismicImage] The "alt" prop can only be used to declare an image as decorative by passing an empty string (alt="") but was provided a non-empty string.`)
    }

    if (typeof props.fallbackAlt !== 'undefined' && typeof props.fallbackAlt === 'string' && props.fallbackAlt !== '') {
      console.warn(`[PrismicImage] The "fallbackAlt" prop can only be used to declare an image as decorative by passing an empty string (fallbackAlt="") but was provided a non-empty string.`)
    }

    if (props.widths && props.pixelDensities) {
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

const { baseUrl } = useRuntimeConfig().public
const localField = transformResponsiveImageFieldToLocal(baseUrl, props.field)

// asImageWidthSrcSet requires full URLs, so we use a dummy domain
const DUMMY_DOMAIN = 'https://localhost'
const tempField = {
  ...localField,
  url: `${DUMMY_DOMAIN}${localField.url}`,
} as FilledImageFieldImage

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

if (props.widths || !props.pixelDensities) {
  const res = asImageWidthSrcSet(tempField, {
    ...props.imgixParams,
    widths: props.widths === 'defaults' ? components?.imageWidthSrcSetDefaults : props.widths,
  })
  if (res) {
    src = res.src.replace(DUMMY_DOMAIN, '')
    srcSet = res.srcset.replaceAll(DUMMY_DOMAIN, '')
  }
}
else if (props.pixelDensities) {
  const res = asImagePixelDensitySrcSet(tempField, {
    ...props.imgixParams,
    pixelDensities: props.pixelDensities === 'defaults' ? components?.imagePixelDensitySrcSetDefaults : props.pixelDensities,
  })
  if (res) {
    src = res.src.replace(DUMMY_DOMAIN, '')
    srcSet = res.srcset.replaceAll(DUMMY_DOMAIN, '')
  }
}

const ar = props.field.dimensions ? props.field.dimensions.width / props.field.dimensions.height : 1

// @ts-expect-error types are complex
const castedWidth = castInt(props.width)
// @ts-expect-error types are complex
const castedHeight = castInt(props.height)

let resolvedWidth = castedWidth ?? props.field.dimensions?.width
let resolvedHeight = castedHeight ?? props.field.dimensions?.height

if (castedWidth != null && castedHeight == null)
  resolvedHeight = castedWidth / ar
else if (castedWidth == null && castedHeight != null)
  resolvedWidth = castedHeight * ar

const image = {
  src,
  srcSet,
  alt: props.alt ?? (props.field.alt || props.fallbackAlt),
  width: resolvedWidth ? Math.round(resolvedWidth) : undefined,
  height: resolvedHeight ? Math.round(resolvedHeight) : undefined,
}
</script>

<template>
  <NuxtImg :src="image.src" :srcset="image.srcSet" :alt="image.alt" />
</template>
