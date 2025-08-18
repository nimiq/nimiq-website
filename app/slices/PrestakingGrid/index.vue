<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.PrestakingGridSlice>())
</script>

<template>
  <section class="dark" data-gradient text-neutral pt-32 bg-darkblue relative>
    <NuxtImg src="/assets/images/prestaking-glowing-background.webp" alt="" size-full max-w-none pointer-events-none rotate-180 inset-0 top-0 absolute z-1 object-cover object-bottom />
    <ul flex="~ items-center col lg:row gap-x-24 gap-y-20 justify-center" z-10>
      <li v-for="({ image, content }, i) in slice.primary.items" :key="i" flex="~ col self-stretch lg:row md:items-center gap-x-12 gap-y-24" p-32 rounded-6 relative>
        <ProxiedPrismicImage :field="image" size-80 z-20 md:mx-auto />
        <RichText wrapper="div" :field="content" z-1 text="16/24 md:17/25.5 lg:18:28 neutral-900" />
        <div class="glass" ring="1.5 neutral-0/15" aria-hidden rounded-6 inset-0 absolute backdrop-blur-20 />
      </li>
    </ul>
    <Ember bottom-96 left-96 :scale=".65" />
    <Ember bottom-156 right="40 md:170" :scale=".85" />
    <Ember hidden bottom-532 left-160 md:block :scale=".75" :opacity=".25" />
    <Ember hidden bottom-682 left-490 md:block :scale=".65" :opacity=".25" />
    <PrismicLink :field="slice.primary.cta" mt-32 z-10 nq-arrow nq-pill-lg nq-pill-blue>
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
