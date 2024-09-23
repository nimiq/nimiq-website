<script setup lang="ts">
import type { ImageField } from '@prismicio/client'

const { image, rounded } = defineProps<{ image: ImageField<'Sm' | 'Md' | 'Lg'>, rounded?: boolean }>()
if (!image.url)
  throw new Error('Image URL is required')

const removeAutoParam = (url: string) => url.replace(/(\?|&)auto=[^&]+/, '$1').replace(/\?$/, '')

const defaultUrl = removeAutoParam(image.url!)
const smUrl = removeAutoParam(image.Sm.url || defaultUrl)
const mdUrl = removeAutoParam(image.Md.url || smUrl)
const lgUrl = removeAutoParam(image.Lg.url || mdUrl)
</script>

<template>
  <picture>
    <source :srcset="smUrl" media="(max-width: 767px)">
    <source :srcset="mdUrl" media="(min-width: 768px) and (max-width: 1023px)">
    <source :srcset="lgUrl" media="(min-width: 1024px) and (max-width: 1279px)">
    <source :srcset="defaultUrl" media="(min-width: 1280px)">
    <img :src="smUrl" :alt="image.alt || 'Image'" :class="{ 'rounded-8': rounded }" md:mx-auto>
  </picture>
</template>
