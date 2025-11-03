<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.YoutubeVideoSlice>())
</script>

<template>
  <ContentYoutubeVideo :slice="slice as any" />
</template>

<style scoped>
:deep(h2) {
  --uno: 'f-text-2xl';
}
</style>
