<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.LargeGridSlice>())
const colors = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="colors" relative z-1>
    <div grid="~ gap-20 cols-[repeat(auto-fill,minmax(400px,1fr))] justify-center">
      <PrismicLink v-for="({ color, headline, iconName, linkHref, shape, subline }, i) in slice.items" :key="i" internal-component="a" :style="`--c:${color}`" :field="linkHref" p="32 lg:40 2xl:48" group nq-hoverable relative>
        <div v-if="shape === 'Hexagons'" rounded-8 pointer-events-none inset-0 absolute of-hidden>
          <div text="neutral-500/60 group-hocus:white/10" size-full pointer-events-none relative children:transition-colors>
            <div bottom="-50%" i-nimiq:logos-nimiq-mono text-360 left--164 absolute />
            <div i-nimiq:logos-nimiq-mono text-360 right--214 top--140 absolute />
          </div>
        </div>
        <div :class="iconName" text="blue  96 md:120" nq-prose-compact max-w-128 />
        <RichText wrapper="div" :field="headline" transition-colors z-1 />
        <RichText wrapper="div" :field="subline" transition-colors z-1 f-mt-2xs md:text-center />
      </PrismicLink>
    </div>
  </section>
</template>
