<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.CurrencyComparisonSlice>())
</script>

<template>
  <ContentCurrencyComparison :slice="slice as any" />
</template>

<style scoped>
.gradient {
  background: radial-gradient(
    78.95% 73.1% at 12.5% 14.72%,
    rgb(var(--nq-neutral) / 0.4) 0%,
    rgb(var(--nq-neutral) / 0.25) 100%
  );
}
</style>
