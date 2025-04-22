<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.PuzzleGridSlice>())

const bgClass = getColorClass(slice.primary.bgColor)
</script>

<template>
  <section :class="bgClass">
    <ul grid="~ cols-1 md:cols-2 lg:cols-3" bg="white/10" w-full of-clip rounded-6>
      <li v-for="({ logo, headline, description }, i) in slice.items" :key="i" flex="~ items-center col" nq-prose-compact f-py-lg first:border="b-1.5 lg:b-0 lg:r-1.5 white/20">
        <!-- <NuxtImg :src="$prismic.asImageSrc(logo)!" max-h-64 /> -->
        <PrismicImage :field="logo" max-h-64 />
        <h3 text-center f-mt-2xs>
          {{ headline }}
        </h3>
        <RichText wrapper="div" :field="description" text="white/80 center" />
      </li>
      <li :style="{ '--c': `rgb(var(--nq-${slice.primary.mainPieceBackgroundColor}))` }" bg="$c" flex="~ items-center justify-center col" px-0="!" relative py-24>
        <div text="$c" absolute w-32 i-nimiq:tooltip-triangle translate-y="-50%" lg:left--39 max-lg:top--7 lg:origin-right-center lg:rotate--90 />
        <PrismicImage :field="slice.primary.image" h-114 />
        <RichText wrapper="div" :field="slice.primary.description" text="darkblue center f-2xl" f-mt-sm />
      </li>
    </ul>
  </section>
</template>
