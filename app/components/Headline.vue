<script setup lang="ts">
import type { KeyTextField, LinkField, RichTextField } from '@prismicio/client'

const props = defineProps<{
  iconName?: KeyTextField
  label?: KeyTextField
  headline: RichTextField
  subline?: RichTextField
  ctaHref?: LinkField
  ctaLabel?: KeyTextField
}>()

const headlineTag = computed(() => props.headline.filter(i => i.type.startsWith('heading')).at(0)?.type.replace('heading', 'h') || 'h2')
</script>

<template>
  <div>
    <div v-if="iconName" :class="iconName" text-54 op-15 nq-mb-24 />
    <p v-if="label" text="14/16.8" mb-16 block w-max nq-label md:mx-auto>
      {{ label }}
    </p>
    <PrismicText :wrapper="headlineTag" :field="headline" />
    <PrismicText v-if="hasText(subline)" wrapper="p" :field="subline" />
    <PrismicLink v-if="ctaHref && ctaLabel" :field="ctaHref" nq-mt-48 nq-arrow nq-pill-lg nq-pill-blue md:mx-auto>
      {{ ctaLabel }}
    </PrismicLink>
  </div>
</template>

<style>
/* After Pill Slice, we don't leave space */
section[data-slice-type='pill_link'] + section[data-slice-type='simple_headline'] {
  --uno: 'pt-24';
}

/* If the headline is after a slice that is the same theme (dark or light) we increase space */
section.dark:not([data-slice-type='pill_link']) + section[data-slice-type='simple_headline'].dark,
section:not(.dark):not([data-slice-type='pill_link']) + section[data-slice-type='simple_headline']:not(.dark) {
  --uno: 'pt-160 lg:pt-200';
}

[nq-label] {
  &:has(+ h2) {
    --uno: 'ring-1.5 ring-neutral-500 rounded-full px-20 py-10 nq-mb-32';
  }
}
</style>
