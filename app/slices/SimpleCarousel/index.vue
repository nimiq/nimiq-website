<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.SimpleCarouselSlice>())
</script>

<template>
  <ContentSimpleCarousel :slice="slice as any" />
</template>

<style scoped>
.author {
  /* TODO Move this to global? */
  :global(a) {
    --uno: 'text-blue';
  }
}
</style>
