<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.LargeGridSlice>())
const sectionRef = useSection(props.slice.id, props.slice.primary.bgColor)
</script>

<template>
  <section ref="sectionRef" relative z-1>
    <div class="flex flex-col items-stretch gap-20 md:flex-row" w-full>
      <PrismicLink v-for="({ color, headline, iconName, linkHref, shape, subline }, i) in slice.items" :key="i" internal-component="a" :style="`--c:${color}`" :field="linkHref" hocus:bg="$c" p="32 lg:40 2xl:48" group nq-no-color relative w-full flex-1 shrink-0 items-center nq-hoverable>
        <div v-if="shape === 'Hexagons'" pointer-events-none absolute inset-0 of-hidden rounded-8>
          <div pointer-events-none relative size-full text="neutral-500/60 group-hocus:white/10" children:transition-colors>
            <div i-nimiq:logos-nimiq-mono absolute bottom="-50%" left--164 text-360 />
            <div i-nimiq:logos-nimiq-mono absolute right--214 top--140 text-360 />
          </div>
        </div>
        <div :class="iconName" text="blue group-hocus:white 96 md:120" max-w-128 />
        <PrismicRichText :field="headline" duration z-1 transition-colors nq-mt-48 group-hocus:text-white />
        <PrismicRichText :field="subline" duration z-1 transition-colors nq-mt-16 text="neutral-900 group-hocus:neutral-400" />
      </PrismicLink>
    </div>
  </section>
</template>
