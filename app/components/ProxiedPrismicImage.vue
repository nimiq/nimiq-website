<script lang="ts" setup>
/**
 * Uses direct Prismic URLs for internal-dynamic, proxied URLs for other environments
 */
import type { PrismicImageProps } from '@prismicio/vue'
import { generateSrcSet, transformImageField } from '~~/shared/utils/prismic-images-client'

const props = defineProps<PrismicImageProps & {
  width?: number | string
  height?: number | string
}>()

const { baseUrl } = useRuntimeConfig().public
const { components } = useRuntimeConfig().public.prismic

const { environment } = useRuntimeConfig().public

const shouldUseDirectPrismic = environment.isInternalDynamic

let src: string
let srcSet: string | undefined

if (shouldUseDirectPrismic) {
  src = props.field.url || ''
  srcSet = undefined
}
else {
  const localField = transformImageField(baseUrl, props.field)
  const widthsToUse = props.widths === 'defaults'
    ? components?.imageWidthSrcSetDefaults
    : (Array.isArray(props.widths) ? props.widths : undefined)
  const result = generateSrcSet(localField, widthsToUse)
  src = result.src
  srcSet = result.srcSet
}

const aspectRatio = props.field.dimensions
  ? props.field.dimensions.width / props.field.dimensions.height
  : 1

const width = typeof props.width === 'string' ? Number.parseInt(props.width) : props.width ?? props.field.dimensions?.width
const height = typeof props.height === 'string' ? Number.parseInt(props.height) : props.height ?? props.field.dimensions?.height

let resolvedWidth = width
let resolvedHeight = height

if (width && !height) {
  resolvedHeight = Math.round(width / aspectRatio)
}
else if (!width && height) {
  resolvedWidth = Math.round(height * aspectRatio)
}

const imageProps = {
  src,
  srcset: shouldUseDirectPrismic ? undefined : srcSet,
  alt: props.alt ?? props.field.alt ?? props.fallbackAlt ?? '',
  width: resolvedWidth,
  height: resolvedHeight,
}

if (import.meta.dev) {
  watchEffect(() => {
    if (props.alt && props.alt !== '') {
      console.warn('[PrismicImage] The "alt" prop should only be used to declare decorative images with an empty string')
    }

    if (props.fallbackAlt && props.fallbackAlt !== '') {
      console.warn('[PrismicImage] The "fallbackAlt" prop should only be used to declare decorative images with an empty string')
    }

    if (props.widths && props.pixelDensities) {
      console.warn('[PrismicImage] Only one of "widths" or "pixelDensities" can be provided. Using "widths"')
    }
  })
}
</script>

<template>
  <NuxtImg
    :src="imageProps.src"
    :srcset="imageProps.srcset"
    :alt="imageProps.alt"
    :width="imageProps.width"
    :height="imageProps.height"
  />
</template>
