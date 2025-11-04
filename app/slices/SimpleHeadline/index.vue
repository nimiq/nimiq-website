<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice, slices } = defineProps(getSliceComponentProps<Content.SimpleHeadlineSlice>())
</script>

<template>
  <ContentSimpleHeadline :slice="slice as any" :slices="slices as any" />
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

section[bg-neutral-0]:not([data-slice-type='banner']):has(+ section[data-slice-type='simple-headline'].bg-neutral-0) {
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
</style>
