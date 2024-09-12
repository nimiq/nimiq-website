<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.SimpleHeadlineSlice>())
useSlice(props.slice.id, props.slice.primary.bgColor)
</script>

<template>
  <section v-if="slice.variation === 'default'" :ref="slice.id" relative z-1>
    <span v-if="slice.primary.label" text="14/16.8 center" mb-8 nq-label>{{ slice.primary.label }}</span>
    <PrismicText wrapper="h2" :field="slice.primary.headline" />
    <PrismicText v-if="slice.primary.subline" wrapper="p" :field="slice.primary.subline" />
  </section>
</template>

<style scoped>
</style>
