<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice, slices } = defineProps(getSliceComponentProps<Content.SimpleHeadlineSlice>())
const bgClass = getColorClass(slice.primary.bgColor)

const isLastSlice = slices.indexOf(slice) === slices.length - 1

const { client } = usePrismic()
const { data: stakingValues } = await useAsyncData('staking_values', () => client.getSingle('stakingValues').then(doc => doc.data!))
if (!stakingValues.value)
  throw new Error('No staking values found')

const isStakingSlice = getText(slice.primary.headline).includes(stakingValues.value.template!)

function getGradientClass() {
  if (!isStakingSlice || isLastSlice)
    return
  const currentIndex = slices.indexOf(slice)
  // @ts-expect-error the types are meh
  const nextSliceBgColor = slices.at(currentIndex + 1)?.primary.bgColor
  // @ts-expect-error the types are meh
  const prevSliceBgColor = slices.at(currentIndex - 1)?.primary.bgColor
  return (nextSliceBgColor === prevSliceBgColor) ? 'gradient-transparent-green-transparent' : 'gradient-transparent-green'
}
</script>

<template>
  <section :nq-section-gap="!isStakingSlice ? '' : undefined" :class="[bgClass, getGradientClass()]" relative data-slice-type="simple-headline">
    <Headline
      v-if="!isStakingSlice"
      :headline="slice.primary.headline"
      :subline="slice.primary.subline"
      :cta="slice.primary.cta"
      :links="slice.primary.links as any"
      :label="slice.primary.label"
      :icon-name="slice.primary.iconName" z-1
    />
    <HeadlineStaking
      v-else
      :headline="slice.primary.headline"
      :subline="slice.primary.subline"
      :show-staking-icon="!isLastSlice" :data-inverted="isLastSlice ? undefined : ''"
      :links="slice.primary.links as any"
      :primary-pill="isLastSlice"
    />
  </section>
</template>

<style>
/* After Pill Slice, we don't leave space */
section[data-slice-type='pill-link'] + section[data-slice-type='simple-headline'] {
  --uno: 'pt-24';
}

/* If the headline is after a slice that is the same theme (dark or light) we increase space */
/* section.dark:not([data-slice-type='pill-link']) + section[data-slice-type='simple-headline'].dark,
section:not(.dark):not([data-slice-type='pill-link']) + section[data-slice-type='simple-headline']:not(.dark), */
section:where([bg-neutral-0], .bg-neutral-0):not(
    :where(
      [data-slice-type='logos-grid'],
      [data-slice-type='grid-section'],
      [data-slice-type='banner'],
      [data-slice-type='pill-link'],
      [data-slice-type='crypto-map-continent-selector'],
      [data-slice-type='buy-and-sell-hero']
    )
  )
  + section[data-slice-type='simple-headline'].bg-neutral-0 {
  --uno: 'f-pt-5xl border-t border-neutral-300';
}

section[bg-neutral-0]:has(+ section[data-slice-type='simple-headline'].bg-neutral-0) {
  --uno: 'f-pt-5xl';
}

section[data-slice-type='staking-faq'] + section[data-slice-type='simple-headline'] {
  /* --uno: 'f-pt-5xl'; */
  small {
    --uno: 'text-neutral-700';
  }
}

[data-slice-type='newsletter-subscription'] + section[data-slice-type='simple-headline'] {
  --f-pt-min: 236;
  --f-pt-max: 272;
  padding-top: var(--f-pt);
}

section[data-slice-type='simple-headline'] + section[data-slice-type='simple-headline'] {
  display: none;
  visibility: hidden;
}
</style>
