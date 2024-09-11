<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.SimpleHeadlineSlice>())
</script>

<template>
  <section v-if="slice.variation === 'default'" class="nq-block-200" :class="useSectionColor(slice.primary.bgColor)" relative z-1>
    <span v-if="slice.primary.label" text="14/16.8 center" mb-8 nq-label>{{ slice.primary.label }}</span>
    <PrismicText wrapper="h2" :field="slice.primary.headline" />
    <PrismicText v-if="slice.primary.subline" wrapper="p" :field="slice.primary.subline" />
  </section>
</template>

<style>
section:has(+ section[data-gradient]) {
  --uno: '!bg-transparent';
}
</style>
