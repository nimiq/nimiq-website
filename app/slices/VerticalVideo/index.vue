<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.VerticalVideoSlice>())

const playVideo = ref(false)
</script>

<template>
  <section relative bg-neutral-0>
    <div absolute hidden max-w-none w-900 sm:stack="!" :style="`aspect-ratio: ${getAspectRatio(slice.primary.backgroundImage)}`">
      <PrismicImage loading="lazy" :field="slice.primary.backgroundImage" />
      <div bg-gradient="to-b from-transparent to-neutral-0" pointer-events-none h-200 w-full self-end="!" />
    </div>
    <button v-if="!playVideo" relative stack @click="playVideo = true">
      <PrismicImage loading="lazy" :field="slice.primary.poster" max-w-420 w-full rounded-8 bg-neutral-0 shadow />
      <div bg="neutral/40" ring="1.5 neutral/10" size-64 rounded-full stack>
        <div i-nimiq:triangle-right size-32 text-white />
      </div>
    </button>
    <PrismicEmbed v-else :field="slice.primary.video" :style="`aspect-ratio: ${getAspectRatio(slice.primary.poster)}`" z-1 max-w-420 w-full rounded-8 bg-neutral-0 shadow />
    <div nq-mt-72 flex="~ items-center gap-12">
      <div style="background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, #0582CA 0%, rgba(5, 130, 202, 0.62) 100%)" size-32 shrink-0 rounded-full stack>
        <div i-nimiq:shield text="16 white" />
      </div>
      <h3 font-semibold text-xl>
        {{ slice.primary.title }}
      </h3>
    </div>
    <p max-w-32ch text="center lg" nq-mt-16>
      {{ slice.primary.subline }}
    </p>
  </section>
</template>
