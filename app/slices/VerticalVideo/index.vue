<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.VerticalVideoSlice>())

const playVideo = ref(false)
</script>

<template>
  <section bg-neutral-0 relative of-hidden>
    <div stack>
      <div stack max-w-none w-initial :style="`aspect-ratio: ${getAspectRatio(slice.primary.backgroundImage)}`">
        <PrismicImage loading="lazy" :field="slice.primary.backgroundImage" />
        <div bg-gradient="to-b from-transparent to-neutral-0" h-200 w-full pointer-events-none self-end="!" />
      </div>
      <button v-if="!playVideo" stack w-max relative bg-none @click="playVideo = true">
        <PrismicImage loading="lazy" :field="slice.primary.poster" rounded-8 bg-neutral-0 max-w-420 w-full shadow />
        <div bg="neutral/40" ring="1.5 neutral/10" stack rounded-full size-64>
          <div text-white size-32 i-nimiq:triangle-right />
        </div>
      </button>
      <video v-else :src="getUrl(slice.primary.video)" :style="`aspect-ratio: ${getAspectRatio(slice.primary.poster) * -1}`" autoplay controls loop muted playsinline rounded-8 bg-neutral-0 max-w-900 w-full shadow z-1 />
    </div>
    <div f-mt-xl flex="~ items-center gap-12">
      <div style="background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, #0582CA 0%, rgba(5, 130, 202, 0.62) 100%)" stack rounded-full shrink-0 size-32>
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
