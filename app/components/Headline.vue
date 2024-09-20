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

function isEmpty<T>(obj: T | undefined): obj is T & Record<string, never> {
  return !!obj && Object.keys(obj).length === 0
}

const headlineTag = computed(() => props.headline.filter(i => i.type.startsWith('heading')).at(0)?.type.replace('heading', 'h') || 'h2')
</script>

<template>
  <div v-if="iconName" :class="iconName" nq-mb-24 text-54 op-15 />
  <span v-if="label" text="14/16.8 center" mb-8 nq-label>{{ label }}</span>
  <PrismicText :wrapper="headlineTag" :field="headline" />
  <PrismicText v-if="!isEmpty(subline)" wrapper="p" :field="subline" />
  <PrismicLink v-if="ctaHref && ctaLabel" :field="ctaHref" nq-arrow nq-pill-lg nq-pill-blue nq-mt-48>
    {{ ctaLabel }}
  </PrismicLink>
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
</style>
