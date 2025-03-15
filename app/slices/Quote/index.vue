<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.QuoteSlice>())
</script>

<template>
  <section relative z-1 f-p-5xl>
    <div bg-green h-200 max-w-none pointer-events-none inset-x-0 top-0 absolute />
    <div class="bg" h-600 max-w-none pointer-events-none inset-x-0 top-200 absolute />
    <div i-nimiq:icons-lg-safe-lock text="left md:center 96 md:112 white" />
    <RichText wrapper="div" :field="slice.primary.quote" text="white f-2xl left md:center" max-w-36ch relative z-1 f-mt-md />
    <PrismicLink v-if="hasLink(slice.primary.cta)" :field="slice.primary.cta" nq-arrow nq-pill-lg nq-pill-tertiary shadow-none f-mt-sm />
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
