<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.PrestakingGridSlice>())
const { sectionRef } = useSection(props.slice.id, 'darkblue')
</script>

<template>
  <section ref="sectionRef" data-gradient relative pt-32>
    <NuxtImg src="/assets/images/prestaking-glowing-background.webp" alt="" class="nq-max-width" pointer-events-none absolute inset-0 top-0 z-1 size-full rotate-180 object-cover object-bottom />
    <ul flex="~ items-center col lg:row gap-x-24 gap-y-20 justify-center" z-10>
      <li v-for="({ image, content }, i) in slice.primary.items" :key="i" flex="~ col self-stretch lg:row md:items-center gap-x-12 gap-y-24" relative rounded-6 p-32>
        <PrismicImage :field="image" :imgix-params="{ w: 80, h: 80 }" z-20 size-80 md:mx-auto />
        <PrismicRichText :field="content" z-1 text="16/24 md:17/25.5 lg:18:28 neutral-900" />
        <div aria-hidden absolute inset-0 rounded-6 class="glass" ring="1.5 neutral-0/15" backdrop-blur-20 />
      </li>
    </ul>
    <PrismicLink :field="slice.primary.cta" z-10 mt-32 nq-arrow nq-pill-lg nq-pill-blue>
      {{ slice.primary.cta_label }}
    </PrismicLink>
  </section>
</template>

<style scoped>
.glass {
  background: radial-gradient(83.64% 49.88% at 50% 0, #ffffff1a 0, #fff0 50%), #ffffff0d;
  background-blend-mode: normal, color-dodge, normal;
}
</style>
