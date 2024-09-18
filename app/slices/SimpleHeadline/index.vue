<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.SimpleHeadlineSlice>())
const { sectionRef } = useSection(props.slice.id, props.slice.primary.bgColor)
</script>

<template>
  <section v-if="slice.variation === 'default'" ref="sectionRef" relative>
    <span v-if="slice.primary.label" text="14/16.8 center" mb-8 nq-label>{{ slice.primary.label }}</span>
    <PrismicText wrapper="h2" :field="slice.primary.headline" z-20 />
    <PrismicText v-if="slice.primary.subline" wrapper="p" z-20 :field="slice.primary.subline" />
  </section>
</template>

<style scoped>
/* After Pill Slice, we don't leave space */
section[data-slice-type='pill_link'] + section[data-slice-type='simple_headline'] {
  --uno: 'pt-24';
}

/* If the headline is after a slice that is the same theme (dark or light) we increase space */
section.dark:not([data-slice-type='pill_link']) + section[data-slice-type='simple_headline'].dark,
section:not(.dark):not([data-slice-type='pill_link']) + section[data-slice-type='simple_headline']:not(.dark) {
  --uno: 'pt-160 lg:pt-200';
}
</style>
