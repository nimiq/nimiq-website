<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.HeroSectionSlice>())
</script>

<template>
  <HeroDefault v-if="slice.variation === 'default-slice'" :headline="slice.primary.headline" :sub-headline="slice.primary.subline" :bg-color="slice.primary.bgColor" />
  <HeroHome v-if="slice.variation === 'home2024'" :headline="slice.primary.headline" :sub-headline-template="slice.primary.subheadline" :cta="slice.primary.cta" :cta-label="slice.primary.cta_label" />
</template>
