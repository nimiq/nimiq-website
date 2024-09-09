<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.PrestakingGridSlice>())
</script>

<template>
  <section class="dark pb-200" style="--top: 136px; top: calc(var(--top) * -1)" data-gradient relative top--136 of-hidden>
    <NuxtImg src="/assets/images/prestaking-glowing-background.webp" alt="" pointer-events-nonce absolute inset-0 z-0 object-cover />
    <ul flex="~ items-center col lg:row gap-x-24 gap-y-20 justify-center" style="padding-top: calc(var(--top) + 4rem)">
      <li v-for="({ image, content }, i) in slice.primary.items" :key="i" flex="~ col lg:row md:items-center gap-x-12 gap-y-24" relative rounded-6 p-32>
        <PrismicImage :field="image" :imgix-params="{ w: 80, h: 80 }" z-1 size-80 md:mx-auto />
        <PrismicRichText :field="content" z-1 text="16/24 md:17/25.5 lg:18:28 neutral-900" />
        <div aria-hidden absolute inset-0 rounded-6 class="glass" />
      </li>
    </ul>
    <PrismicLink :field="slice.primary.cta" mt-32 nq-arrow nq-pill-lg nq-pill-blue>
      {{ slice.primary.cta_label }}
    </PrismicLink>
  </section>
</template>

<style scoped>
.glass {
  background: radial-gradient(83.64% 49.88% at 50% 0, #ffffff1a 0, #fff0 50%), #ffffff0d;
  background-blend-mode: normal, color-dodge, normal;
  backdrop-filter: blur(20px);
  border: 1.5px solid hsla(0, 0%, 100%, 0.2);
}
</style>
