<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.LargeGridSlice>())
const bgClass = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="bgClass" relative z-1>
    <div grid="~ gap-20 cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] justify-center" w-full>
      <PrismicLink v-for="({ color, headline, iconName, linkHref, shape, subline }, i) in slice.items" :key="i" internal-component="a" :style="`--c:${color}`" :field="linkHref" p="32 lg:40 2xl:48" group relative nq-hoverable class="hocus:var:nq-gradient-from:$c hocus:var:nq-gradient-to:$c">
        <div v-if="shape === 'Hexagons'" rounded-8 pointer-events-none inset-0 absolute of-hidden>
          <div text="neutral-500/60 group-hocus:white/10" size-full pointer-events-none relative children:transition-colors>
            <div bottom="-50%" text-360 left--164 absolute i-nimiq:logos-nimiq-mono />
            <div text-360 right--214 top--140 absolute i-nimiq:logos-nimiq-mono />
          </div>
        </div>
        <div text="blue  96 md:120" nq-prose-compact max-w-128 f-mb-sm group-hocus:text-white :class="[iconName, { 'md:mx-auto': hasText(subline) }]" />
        <RichText wrapper="div" :field="headline" z-1 :class="{ 'md:text-center': hasText(subline) }" />
        <RichText wrapper="div" :field="subline" transition-colors z-1 f-mt-2xs text="md:center group-hocus:white/80" />
      </PrismicLink>
    </div>
  </section>
</template>

<style scoped>
[group]:where(:focus-visible, :hover) :deep(h3) {
  --uno: 'text-white transition-colors';
}
</style>
