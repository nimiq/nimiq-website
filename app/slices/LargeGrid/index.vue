<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.LargeGridSlice>())
const colors = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="colors" relative z-1>
    <div grid="~ gap-20 cols-[repeat(auto-fill,minmax(400px,1fr))] justify-center">
      <PrismicLink v-for="({ color, headline, iconName, linkHref, shape, subline }, i) in slice.items" :key="i" internal-component="a" :style="`--c:${color}`" :field="linkHref" p="32 lg:40 2xl:48" group relative nq-hoverable>
        <div v-if="shape === 'Hexagons'" pointer-events-none absolute inset-0 of-hidden rounded-8>
          <div pointer-events-none relative size-full text="neutral-500/60 group-hocus:white/10" children:transition-colors>
            <div i-nimiq:logos-nimiq-mono absolute bottom="-50%" left--164 text-360 />
            <div i-nimiq:logos-nimiq-mono absolute right--214 top--140 text-360 />
          </div>
        </div>
        <div :class="iconName" text="blue  96 md:120" max-w-128 nq-prose-compact />
        <PrismicRichText :field="headline" z-1 transition-colors />
        <PrismicRichText :field="subline" z-1 transition-colors f-m-2xs md:text-center />
      </PrismicLink>
    </div>
  </section>
</template>
