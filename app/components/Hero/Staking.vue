<script setup lang="ts">
import type { LinkField, RichTextField } from '@prismicio/client'

defineProps<{ headline: RichTextField, cta?: LinkField }>()
</script>

<template>
  <section relative of-x-clip bg-neutral-0 pb-0 nq-pt-200 max-md:pb-100>
    <AnimatedCircleRipple left="-100vw lg:-5vw" size="300vw lg:110vw" absolute z-0 max-w-none bottom="10 lg:-300" />
    <div pointer-events-none absolute inset-0 z-1 h-200 max-w-none bg-neutral-0 />
    <div class="bg-radial-green" pointer-events-none absolute inset-0 top="20vh lg:200" z-1 max-w-none />
    <div class="bg-linear-white-1" pointer-events-none absolute inset-0 top="20vh lg:200" z-1 max-w-none />
    <div class="bg-linear-white-2" pointer-events-none absolute inset-0 top="20vh lg:200" z-1 max-w-none />
    <HeadlineStaking :headline :cta show-staking-icon primary-pill relative z-2 />
    <AnimatedBreathArrow z-2 hidden nq-mt-200 md:block max-md:self-center />
  </section>
</template>

<style scoped>
.bg-radial-green {
  background: radial-gradient(
    101.57% 50% at 50% 50%,
    rgba(var(--nq-green) / 0) 0%,
    rgba(var(--nq-green) / 0.0737185) 11.79%,
    rgba(var(--nq-green) / 0.153748) 21.38%,
    rgba(var(--nq-green) / 0.2384) 29.12%,
    rgba(var(--nq-green) / 0.325985) 35.34%,
    rgba(var(--nq-green) / 0.414815) 40.37%,
    rgba(var(--nq-green) / 0.5032) 44.56%,
    rgba(var(--nq-green) / 0.589452) 48.24%,
    rgba(var(--nq-green) / 0.671881) 51.76%,
    rgba(var(--nq-green) / 0.7488) 55.44%,
    rgba(var(--nq-green) / 0.818519) 59.63%,
    rgba(var(--nq-green) / 0.879348) 64.66%,
    rgba(var(--nq-green) / 0.9296) 70.88%,
    rgba(var(--nq-green) / 0.967585) 78.62%,
    rgba(var(--nq-green) / 0.991615) 88.21%,
    rgb(var(--nq-green)) 100%
  );
}

.bg-linear-white-1 {
  background: linear-gradient(
    180deg,
    rgb(var(--nq-neutral-0) / 1) 0,
    rgb(var(--nq-neutral-0) / 0.991615) 11.79%,
    rgb(var(--nq-neutral-0) / 0.967585) 21.38%,
    rgb(var(--nq-neutral-0) / 0.9296) 29.12%,
    rgb(var(--nq-neutral-0) / 0.879348) 35.34%,
    rgb(var(--nq-neutral-0) / 0.818519) 40.37%,
    rgb(var(--nq-neutral-0) / 0.7488) 44.56%,
    rgb(var(--nq-neutral-0) / 0.671881) 48.24%,
    rgb(var(--nq-neutral-0) / 0.589452) 51.76%,
    rgb(var(--nq-neutral-0) / 0.5032) 55.44%,
    rgb(var(--nq-neutral-0) / 0.414815) 59.63%,
    rgb(var(--nq-neutral-0) / 0.325985) 64.66%,
    rgb(var(--nq-neutral-0) / 0.2384) 70.88%,
    rgb(var(--nq-neutral-0) / 0.153748) 78.62%,
    rgb(var(--nq-neutral-0) / 0.0737185) 88.21%,
    rgb(var(--nq-neutral-0) / 0) 100%
  );
}

.bg-linear-white-2 {
  background: linear-gradient(
    180deg,
    rgb(var(--nq-neutral-0) / 1) 0,
    rgb(var(--nq-neutral-0) / 0.991615) 11.79%,
    rgb(var(--nq-neutral-0) / 0.967585) 21.38%,
    rgb(var(--nq-neutral-0) / 0.9296) 29.12%,
    rgb(var(--nq-neutral-0) / 0.879348) 35.34%,
    rgb(var(--nq-neutral-0) / 0.818519) 40.37%,
    rgb(var(--nq-neutral-0) / 0.7488) 44.56%,
    rgb(var(--nq-neutral-0) / 0.671881) 48.24%,
    rgb(var(--nq-neutral-0) / 0.589452) 51.76%,
    rgb(var(--nq-neutral-0) / 0.5032) 55.44%,
    rgb(var(--nq-neutral-0) / 0.414815) 59.63%,
    rgb(var(--nq-neutral-0) / 0.325985) 64.66%,
    rgb(var(--nq-neutral-0) / 0.2384) 70.88%,
    rgb(var(--nq-neutral-0) / 0.153748) 78.62%,
    rgb(var(--nq-neutral-0) / 0.0737185) 88.21%,
    rgb(var(--nq-neutral-0) / 0) 100%
  );
}
</style>
