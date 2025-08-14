<script setup lang="ts">
import type { ImageField } from '@prismicio/client'

interface Props {
  field?: ImageField | string | null
  // Pass through all PrismicImage/NuxtImg props
  alt?: string
  loading?: 'lazy' | 'eager'
  sizes?: string
  quality?: number
  format?: string
  width?: number
  height?: number
  // Add any additional props you need
  [key: string]: any
}

const props = defineProps<Props>()

const { getLocalImageUrl } = useLocalImages()

// Get the local or fallback URL
const imageUrl = computed(() => getLocalImageUrl(props.field))

// Extract alt text from Prismic field or use provided alt
const altText = computed(() => {
  if (props.alt) return props.alt
  
  if (typeof props.field === 'object' && props.field?.alt) {
    return props.field.alt
  }
  
  return ''
})

// Extract dimensions if available
const dimensions = computed(() => {
  if (typeof props.field === 'object' && props.field?.dimensions) {
    return {
      width: props.field.dimensions.width,
      height: props.field.dimensions.height,
    }
  }
  return {}
})

// Prepare props for NuxtImg, excluding our custom props
const nuxtImgProps = computed(() => {
  const { field, ...otherProps } = props
  return {
    ...otherProps,
    src: imageUrl.value,
    alt: altText.value,
    ...dimensions.value,
  }
})
</script>

<template>
  <NuxtImg
    v-if="imageUrl"
    v-bind="nuxtImgProps"
  />
</template>
