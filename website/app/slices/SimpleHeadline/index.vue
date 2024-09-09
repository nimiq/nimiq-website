<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.SimpleHeadlineSlice>())
</script>

<template>
  <section v-if="slice.variation === 'default'" class="pt-24" :class="{ dark: !!slice.primary.dark }">
    <span v-if="slice.primary.label" text="14/16.8 center" mb-8 nq-label>{{ slice.primary.label }}</span>
    <PrismicText wrapper="h2" :field="slice.primary.headline" />
    <PrismicText v-if="slice.primary.subline" wrapper="p" :field="slice.primary.subline" />
  </section>
</template>
