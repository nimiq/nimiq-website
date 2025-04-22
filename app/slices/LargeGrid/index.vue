<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.LargeGridSlice>())
const bgClass = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="bgClass" relative z-1>
    <div grid="~ gap-20 cols-[repeat(auto-fill,minmax(400px,1fr))] justify-center">
      <PrismicLink v-for="({ color, headline, iconName, linkHref, shape, subline }, i) in slice.items" :key="i" internal-component="a" :style="`--c:${color}`" :field="linkHref" p="32 lg:40 2xl:48" group relative nq-hoverable>
        <div v-if="shape === 'Hexagons'" pointer-events-none absolute inset-0 of-hidden rounded-8>
          <div text="neutral-500/60 group-hocus:white/10" pointer-events-none relative size-full children:transition-colors>
            <div bottom="-50%" absolute left--164 text-360 i-nimiq:logos-nimiq-mono />
            <div absolute right--214 top--140 text-360 i-nimiq:logos-nimiq-mono />
          </div>
        </div>
        <div :class="iconName" text="blue  96 md:120" nq-prose-compact max-w-128 />
        <RichText wrapper="div" :field="headline" z-1 transition-colors />
        <RichText wrapper="div" :field="subline" z-1 transition-colors f-mt-2xs md:text-center />
      </PrismicLink>
    </div>
  </section>
</template>
