<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.PuzzleGridSlice>())

const colors = getColorClass(slice.primary.bgColor)

// const { smaller } = useBreakpoints(breakpointsTailwind)
// const smallScreen = smaller('md')

// const left = { left: '-6px', top: 'calc(50% - 10px)', transform: 'scaleY(2.2) scaleX(1.6) rotate(90deg)' }
// const bottom = { bottom: '2px', left: 'calc(50% - 28px)', transform: 'scaleX(2.2) scaleY(1.6)' }
// const top = { top: '2px', left: 'calc(50% - 28px)', transform: 'scaleX(2.2) scaleY(1.6) rotate(180deg)' }

// const arrowPosition = computed(() => {
//   if (slice.primary.direction === 'column')
//     return 'bottom'
//   return !smallScreen.value ? 'left' : 'top'
// })
// const svgStyles = computed(() => {
//   if (arrowPosition.value === 'left')
//     return left
//   if (arrowPosition.value === 'bottom')
//     return bottom
//   return top
// })
</script>

<template>
  <section :class="colors">
    <ul grid="~ cols-1 md:cols-2 lg:cols-3" bg="white/10" w-full of-clip rounded-6>
      <li v-for="({ logo, headline, description }, i) in slice.items" :key="i" flex="~ items-center col" nq-my-48 nq-px-48 nq-prose-compact first:border="r-1.5 white/20">
        <PrismicImage :field="logo" max-h-64 />
        <h3 text-center nq-mt-12>
          {{ headline }}
        </h3>
        <PrismicRichText :field="description" text="white/80 center" />
      </li>
      <li :style="{ '--c': `rgb(var(--nq-${slice.primary.mainPieceBackgroundColor}))` }" bg="$c" flex="~ items-center justify-center col" px-0="!" relative>
        <div text="$c" i-nimiq:tooltip-triangle absolute left--24 origin-right lg:rotate--90 bordera="b-1 $c" />
        <PrismicImage :field="slice.primary.image" h-114 />
        <PrismicRichText :field="slice.primary.description" text="darkblue center 2xl" nq-mt-24 />
      </li>
    </ul>
  </section>
</template>
