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
  <div flex="~ col items-center">
    <div v-if="iconName" :class="iconName" text-54 op-15 nq-mb-24 />
    <p v-if="label" text="14/16.8" mb-16 block w-max nq-label md:mx-auto>
      {{ label }}
    </p>
    <PrismicText :wrapper="headlineTag" :field="headline" />
    <PrismicText v-if="hasText(subline)" wrapper="p" :field="subline" />
    <PrismicLink v-if="ctaHref && ctaLabel" internal-component="a" :field="ctaHref" nq-mt-48 nq-arrow nq-pill-lg nq-pill-blue md:mx-auto>
      {{ ctaLabel }}
    </PrismicLink>
  </div>
</template>

<style>
[nq-label] {
  &:has(+ h2) {
    --uno: 'ring-1.5 ring-neutral-500 rounded-full px-20 py-10 nq-mb-32';
  }
}
</style>
