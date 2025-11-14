<script setup lang="ts">
import type { LinkField, RichTextField } from '@prismicio/client'

interface HeroSectionSlice {
  primary: {
    beTheFirstToKnowLabel?: string | undefined
    cta?: LinkField
    headline?: RichTextField
    items?: any
    link?: LinkField
    subheadline?: RichTextField
    subline?: RichTextField
  }
  variation?: string
  slice_type?: string
}

const { slice } = defineProps<{ slice: HeroSectionSlice, slices: any[], index: number, context: any }>()
</script>

<template>
  <HeroDefault v-if="slice.variation === 'default-slice'" v-bind="slice as any" :data-slice-type="slice.slice_type" />
  <HeroTwoColumn v-if="slice.variation === 'twoColumn'" v-bind="slice as any" :data-slice-type="slice.slice_type" />
  <HeroHome v-if="slice.variation === 'home2024'" :headline="slice.primary.headline!" :subline="slice.primary.subheadline as any" :link="slice.primary.link!" :data-slice-type="slice.slice_type" />
  <HeroLeftAligned v-if="slice.variation === 'leftAligned'" :headline="slice.primary.headline!" :subline="slice.primary.subline!" />
  <HeroStaking v-if="slice.variation === 'staking'" :headline="slice.primary.headline!" :cta="slice.primary.cta!" />
  <HeroBuyAndSell v-if="slice.variation === 'buyAndSell'" v-bind="$props as any" />
  <HeroOasisWorld v-if="slice.variation === 'oasis'" :items="slice.primary.items" :label="slice.primary.beTheFirstToKnowLabel!" />
</template>
