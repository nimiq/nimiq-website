<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.BlogpostsGridSlice>())
</script>

<template>
  <ContentBlogpostsGrid :slice="slice as any" />
</template>

<style scoped>
.item {
  --uno: 'rounded-4 size-32 shrink-0 bg-neutral-100 text-neutral-900 text-12 font-semibold hocus:bg-neutral-200 transition-colors ring-1.5 ring-neutral-400 flex items-center justify-center';

  &[data-selected] {
    --uno: 'bg-blue text-white ring-none';
  }
}
</style>
