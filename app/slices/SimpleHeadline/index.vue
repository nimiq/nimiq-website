<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.SimpleHeadlineSlice>())
const colors = getColorClass(props.slice.primary.bgColor)

const gradientClass = computed(() => {
  if (props.slice.variation === 'stakeHeadline') {
    return props.slice.primary.gradient
  }
  return ''
})
</script>

<template>
  <section relative :data-slice-type="slice.variation" :class="[colors, gradientClass]">
    <Headline
      v-if="slice.variation === 'default'"
      :headline="slice.primary.headline"
      :subline="slice.primary.subline"
      :cta-href="slice.primary.linkHref"
      :cta-label="slice.primary.linkLabel"
      :label="slice.primary.label"
      :icon-name="slice.primary.iconName"
    />
    <HeadlineStaking
      v-else-if="slice.variation === 'stakeHeadline'"
      :headline="slice.primary.headline"
      :subline="slice.primary.subline"
      :cta-href="slice.primary.linkHref"
      :cta-label="slice.primary.linkLabel"
      :interes-per-year="slice.primary.interestPerYear || ''"
      :note="slice.primary.note || ''"
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
