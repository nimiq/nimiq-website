<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.QuoteSlice>())
</script>

<template>
  <section relative z-1 nq-pt-200>
    <div absolute inset-0 h-200 max-w-none bg-green-staking />
    <div h="[calc(100%+140px)]" class="bg" absolute inset-0 top-200 max-w-none />
    <PrismicRichText :field="slice.primary.quote" text="white 2xl center" relative z-1 max-w-36ch />
  </section>
</template>

<style scoped>
.bg {
  background: linear-gradient(
    180deg,
    #21bca5 0%,
    rgba(33, 188, 165, 0.991615) 11.79%,
    rgba(33, 188, 165, 0.967585) 21.38%,
    rgba(33, 188, 165, 0.9296) 29.12%,
    rgba(33, 188, 165, 0.879348) 35.34%,
    rgba(33, 188, 165, 0.818519) 40.37%,
    rgba(33, 188, 165, 0.7488) 44.56%,
    rgba(33, 188, 165, 0.671881) 48.24%,
    rgba(33, 188, 165, 0.589452) 51.76%,
    rgba(33, 188, 165, 0.5032) 55.44%,
    rgba(33, 188, 165, 0.414815) 59.63%,
    rgba(33, 188, 165, 0.325985) 64.66%,
    rgba(33, 188, 165, 0.2384) 70.88%,
    rgba(33, 188, 165, 0.153748) 78.62%,
    rgba(33, 188, 165, 0.0737185) 88.21%,
    rgba(33, 188, 165, 0) 100%
  );
}
</style>
