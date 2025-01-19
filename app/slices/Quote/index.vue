<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.QuoteSlice>())
</script>

<template>
  <section relative z-1 f-pt-200>
    <div pointer-events-none absolute inset-x-0 top-0 h-200 max-w-none bg-green />
    <div class="bg" pointer-events-none absolute inset-x-0 top-200 h-600 max-w-none />
    <div i-nimiq:icons-lg-safe-lock text="left md:center 96 md:112 white" />
    <PrismicRichText :field="slice.primary.quote" text="white 2xl left md:center" f-mt-32elative z-1 max-w-36ch />
    <PrismicLink v-if="hasLink(slice.primary.cta)" :field="slice.primary.cta" f-mt-24hadow-none nq-arrow nq-pill-lg nq-pill-tertiary />
  </section>
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
