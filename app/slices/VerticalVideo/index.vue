<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.VerticalVideoSlice>())

const playVideo = ref(false)
</script>

<template>
  <section relative of-hidden bg-neutral-0>
    <div stack>
      <div max-w-none w-initial stack :style="`aspect-ratio: ${getAspectRatio(slice.primary.backgroundImage)}`">
        <PrismicImage loading="lazy" :field="slice.primary.backgroundImage" />
        <div bg-gradient="to-b from-transparent to-neutral-0" pointer-events-none h-200 w-full self-end="!" />
      </div>
      <button v-if="!playVideo" relative w-max bg-none stack @click="playVideo = true">
        <PrismicImage loading="lazy" :field="slice.primary.poster" max-w-420 w-full rounded-8 bg-neutral-0 shadow />
        <div bg="neutral/40" ring="1.5 neutral/10" size-64 rounded-full stack>
          <div size-32 text-white i-nimiq:triangle-right />
        </div>
      </button>
      <video v-else :src="getUrl(slice.primary.video)" :style="`aspect-ratio: ${getAspectRatio(slice.primary.poster) * -1}`" autoplay controls loop muted playsinline z-1 max-w-900 w-full rounded-8 bg-neutral-0 shadow />
    </div>
    <div f-mt-xl flex="~ items-center gap-12">
      <div style="background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, #0582CA 0%, rgba(5, 130, 202, 0.62) 100%)" size-32 shrink-0 rounded-full stack>
        <div i-nimiq:shield text="f-md white" />
      </div>
      <h3 font-semibold f-text-xl>
        {{ slice.primary.title }}
      </h3>
    </div>
    <p text="md:center f-lg" max-w-32ch f-mt-xs>
      {{ slice.primary.subline }}
    </p>
  </section>
</template>
