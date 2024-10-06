<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.SimpleHeadlineSlice>())
const colors = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section v-if="slice.variation === 'default'" :class="colors" relative data-slice-type="simple-headline">
    <Headline
      :headline="slice.primary.headline"
      :subline="slice.primary.subline"
      :cta-href="slice.primary.linkHref"
      :cta-label="slice.primary.linkLabel"
      :label="slice.primary.label" :icon-name="slice.primary.iconName"
    />
  </section>
</template>

<style>
/* After Pill Slice, we don't leave space */
section[data-slice-type='pill-link'] + section[data-slice-type='simple-headline'] {
  --uno: 'pt-24';
}

/* If the headline is after a slice that is the same theme (dark or light) we increase space */
section.dark:not([data-slice-type='pill-link']) + section[data-slice-type='simple-headline'].dark,
section:not(.dark):not([data-slice-type='pill-link']) + section[data-slice-type='simple-headline']:not(.dark) {
  --uno: 'pt-160 lg:pt-200';
}
</style>
