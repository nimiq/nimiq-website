<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.GridSectionSlice>())
</script>

<template>
  <ContentGridSection :slice="slice as any" />
</template>

<style scoped>
[data-slice-variation='withBackground'] {
  [nq-hoverable]:hover,
  [nq-hoverable]:focus-visible {
    &::before {
      background-image: none;
      background: var(--c);
    }
  }
}
</style>
