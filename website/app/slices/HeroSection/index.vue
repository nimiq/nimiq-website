<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.HeroSectionSlice>())
</script>

<template>
  <HomeHero v-if="slice.variation === 'home2024'" :headline="slice.primary.headline" :subline-template="slice.primary.subheadline" :cta="slice.primary.cta" :cta-label="slice.primary.cta_label" />
</template>
