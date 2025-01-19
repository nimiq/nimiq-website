<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.PuzzleGridSlice>())

const colors = getColorClass(slice.primary.bgColor)
</script>

<template>
  <section :class="colors">
    <ul grid="~ cols-1 md:cols-2 lg:cols-3" bg="white/10" w-full of-clip rounded-6>
      <li v-for="({ logo, headline, description }, i) in slice.items" :key="i" flex="~ items-center col" nq-prose-compact f-my-48 f-px-48 first:border="r-1.5 white/20">
        <PrismicImage :field="logo" max-h-64 />
        <h3 f-mt-12ext-center>
          {{ headline }}
        </h3>
        <PrismicRichText :field="description" text="white/80 center" />
      </li>
      <li :style="{ '--c': `rgb(var(--nq-${slice.primary.mainPieceBackgroundColor}))` }" bg="$c" flex="~ items-center justify-center col" px-0="!" relative py-24>
        <div text="$c" i-nimiq:tooltip-triangle absolute max-lg:top--15 lg:left="-39.6px" lg:origin-right-center lg:rotate--90 />
        <PrismicImage :field="slice.primary.image" h-114 />
        <PrismicRichText :field="slice.primary.description" text="darkblue center 2xl" f-mt-24 />
      </li>
    </ul>
  </section>
</template>
