<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.SimpleHeadlineSlice>())
const classes = useSectionColor(props.slice.primary.bgColor)
</script>

<template>
  <section v-if="slice.variation === 'default'" :class="classes" relative z-1>
    <span v-if="slice.primary.label" text="14/16.8 center" mb-8 nq-label>{{ slice.primary.label }}</span>
    <PrismicText wrapper="h2" :field="slice.primary.headline" />
    <PrismicText v-if="slice.primary.subline" wrapper="p" :field="slice.primary.subline" />
  </section>
</template>

<style scoped>
section:has(+ section[data-gradient]) {
  --uno: '!bg-transparent';
}

@layer default {
  section {
    --uno: 'pt-160 lg:pt-200';
    --uno: 'mt-160 lg:mt-200';
  }
}

section:not(.dark) + section:not(.dark),
section.dark + section.dark {
  --uno: 'mt-0 pt-160 lg:pt-200';
}
</style>
