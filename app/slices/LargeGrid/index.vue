<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.LargeGridSlice>())
</script>

<template>
  <ContentLargeGrid :slice="slice as any" />
</template>

<style scoped>
[group]:where(:focus-visible, :hover) :deep(h3) {
  --uno: 'text-white transition-colors';
}
</style>
