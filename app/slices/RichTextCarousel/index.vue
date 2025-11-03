<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.RichTextCarouselSlice>())
</script>

<template>
  <ContentRichTextCarousel :slice="slice as any" />
</template>
