<script setup lang="ts">
import type { ImageField, KeyTextField, LinkField, RichTextField } from '@prismicio/client'

interface HeroSectionSlice {
  primary: {
    beTheFirstToKnowLabel?: string | undefined
    cta?: LinkField
    headline?: RichTextField
    items?: any
    link?: LinkField
    subheadline?: KeyTextField
    subline?: RichTextField
    worksWithLabel?: KeyTextField
    worksWithItems?: ({ logo: ImageField, link: LinkField })[]
  }
  variation?: string
  slice_type?: string
}

const { slice } = defineProps<{ slice: HeroSectionSlice, slices: any[], index: number, context: any }>()
</script>

<template>
  <HeroDefault v-if="slice.variation === 'default-slice'" v-bind="slice as any" :data-slice-type="slice.slice_type" />
  <HeroTwoColumn v-if="slice.variation === 'twoColumn'" v-bind="slice as any" :data-slice-type="slice.slice_type" />
  <HeroHome v-if="slice.variation === 'home2024'" :headline="slice.primary.headline!" :sub-headline="slice.primary.subheadline!" :link="slice.primary.link!" :works-with-label="slice.primary.worksWithLabel!" :works-with-items="slice.primary.worksWithItems || []" :data-slice-type="slice.slice_type" />
  <HeroLeftAligned v-if="slice.variation === 'leftAligned'" :headline="slice.primary.headline!" :subline="slice.primary.subline!" />
  <HeroStaking v-if="slice.variation === 'staking'" :headline="slice.primary.headline!" :cta="slice.primary.cta!" />
  <HeroBuyAndSell v-if="slice.variation === 'buyAndSell'" v-bind="$props as any" />
  <HeroOasisWorld v-if="slice.variation === 'oasis'" :items="slice.primary.items" :label="slice.primary.beTheFirstToKnowLabel!" />
</template>
