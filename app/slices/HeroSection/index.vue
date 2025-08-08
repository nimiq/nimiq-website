<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.HeroSectionSlice>())
</script>

<template>
  <HeroDefault v-if="slice.variation === 'default-slice'" v-bind="slice" :data-slice-type="slice.slice_type" />
  <HeroTwoColumn v-if="slice.variation === 'twoColumn'" v-bind="slice" :data-slice-type="slice.slice_type" />
  <HeroHome v-if="slice.variation === 'home2024'" :headline="slice.primary.headline" :sub-headline-template="slice.primary.subheadline" :link="slice.primary.link" :data-slice-type="slice.slice_type" />
  <HeroLeftAligned v-if="slice.variation === 'leftAligned'" :headline="slice.primary.headline" :subline="slice.primary.subline" />
  <HeroStaking v-if="slice.variation === 'staking'" :headline="slice.primary.headline" :cta="slice.primary.cta" />
  <HeroBuyAndSell v-if="slice.variation === 'buyAndSell'" v-bind="$props" />
  <HeroOasisWorld v-if="slice.variation === 'oasis'" :items="slice.primary.items" :label="slice.primary.beTheFirstToKnowLabel" />
</template>
