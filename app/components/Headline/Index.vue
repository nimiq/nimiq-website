<script setup lang="ts">
import type { KeyTextField, LinkField, RichTextField } from '@prismicio/client'

const props = defineProps<{
  iconName?: KeyTextField
  label?: KeyTextField
  headline: RichTextField
  subline?: RichTextField
  cta?: LinkField
  leftAlign?: boolean
}>()

const headlineTag = computed(() => props.headline.filter(i => i.type.startsWith('heading')).at(0)?.type.replace('heading', 'h') || 'h2')
</script>

<template>
  <div flex="~ col" :class="{ 'items-center': !leftAlign }">
    <div v-if="iconName" :class="iconName" text-54 op-15 nq-mb-24 />
    <p v-if="label" text="14/16.8" mb-16 block w-max nq-label :class="{ 'md:mx-auto': !leftAlign }">
      {{ label }}
    </p>
    <PrismicText :wrapper="headlineTag" :field="headline" :class="{ 'text-left': leftAlign }" />
    <PrismicText v-if="hasText(subline)" wrapper="p" :field="subline" :class="{ 'text-left': leftAlign }" />
    <PrismicLink v-if=" hasLink(cta)" internal-component="a" :field="cta" nq-mt-48 nq-arrow nq-pill-lg nq-pill-blue :class="{ 'md:mx-auto': !leftAlign }" />
  </div>
</template>

<style>
[nq-label] {
  &:has(+ h2) {
    --uno: 'ring-1.5 ring-neutral-500 rounded-full px-20 py-10 nq-mb-32';
  }
}
</style>
