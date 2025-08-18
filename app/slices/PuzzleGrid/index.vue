<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.PuzzleGridSlice>())

const bgClass = getColorClass(slice.primary.bgColor)
</script>

<template>
  <section :class="bgClass">
    <ul grid="~ cols-1 md:cols-2 lg:cols-3" bg="white/10" rounded-6 w-full of-clip>
      <li v-for="({ logo, headline, description }, i) in slice.items" :key="i" flex="~ items-center col" nq-prose-compact f-py-lg first:border="b-1.5 lg:b-0 lg:r-1.5 white/20">
        <!-- <ProxiedPrismicImage :field="logo" max-h-64 /> -->
        <ProxiedPrismicImage :field="logo" max-h-64 />
        <h3 text-center f-mt-2xs>
          {{ headline }}
        </h3>
        <RichText wrapper="div" :field="description" text="white/80 center" />
      </li>
      <li :style="{ '--c': `rgb(var(--nq-${slice.primary.mainPieceBackgroundColor}))` }" bg="$c" flex="~ items-center justify-center col" px-0="!" py-24 relative>
        <div text="$c" translate-y="-50%" w-32 absolute i-nimiq:tooltip-triangle lg:origin-right-center lg:rotate--90 lg:left--39 max-lg:top--7 />
        <ProxiedPrismicImage :field="slice.primary.image" h-114 />
        <RichText wrapper="div" :field="slice.primary.description" text="darkblue center f-2xl" f-mt-sm />
      </li>
    </ul>
  </section>
</template>
