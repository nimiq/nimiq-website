<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.HeroSectionSlice>())
</script>

<template>
  <HeroDefault v-if="slice.variation === 'default-slice'" v-bind="slice" :data-slice-type="slice.slice_type" />
  <HeroTwoColumn v-if="slice.variation === 'twoColumn'" v-bind="slice" :data-slice-type="slice.slice_type" />
  <HeroHome v-if="slice.variation === 'home2024'" :headline="slice.primary.headline" :sub-headline-template="slice.primary.subheadline" :cta="slice.primary.cta" :cta-label="slice.primary.cta_label" :data-slice-type="slice.slice_type" />
  <HeroLeftAligned v-if="slice.variation === 'leftAligned'" :headline="slice.primary.headline" :subline="slice.primary.subline" />
</template>
