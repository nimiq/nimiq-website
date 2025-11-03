<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.QuoteSlice>())
</script>

<template>
  <ContentQuote :slice="slice as any" />
</template>

<style scoped>
.bg {
  background: linear-gradient(
    180deg,
    rgb(var(--nq-green)) 0%,
    rgba(var(--nq-green) / 0.991615) 11.79%,
    rgba(var(--nq-green) / 0.967585) 21.38%,
    rgba(var(--nq-green) / 0.9296) 29.12%,
    rgba(var(--nq-green) / 0.879348) 35.34%,
    rgba(var(--nq-green) / 0.818519) 40.37%,
    rgba(var(--nq-green) / 0.7488) 44.56%,
    rgba(var(--nq-green) / 0.671881) 48.24%,
    rgba(var(--nq-green) / 0.589452) 51.76%,
    rgba(var(--nq-green) / 0.5032) 55.44%,
    rgba(var(--nq-green) / 0.414815) 59.63%,
    rgba(var(--nq-green) / 0.325985) 64.66%,
    rgba(var(--nq-green) / 0.2384) 70.88%,
    rgba(var(--nq-green) / 0.153748) 78.62%,
    rgba(var(--nq-green) / 0.0737185) 88.21%,
    rgba(var(--nq-green) / 0) 100%
  );

  --uno: 'bg-neutral-100';
}
</style>
