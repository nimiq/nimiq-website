<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.NimTokenDistributionSlice>())
</script>

<template>
  <ContentNimTokenDistribution :slice="slice as any" />
</template>

<style scoped>
.content[data-state='open'] {
  animation: slideDown 300ms ease-out;
}
.content[data-state='closed'] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--reka-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--reka-accordion-content-height);
  }
  to {
    height: 0;
  }
}
</style>
