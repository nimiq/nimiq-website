<script setup lang="ts">
import type { ImageField, KeyTextField, LinkField, RichTextField } from '@prismicio/client'

defineProps<{
  isHighlighted: boolean
  isOfficial: boolean
  name: KeyTextField
  description: RichTextField
  linkHref: LinkField
  type: 'Insights' | 'E-commerce' | 'Games' | 'Faucet' | 'Promotion' | 'Miner' | 'Wallets' | 'Infrastructure' | 'Bots'
  logo: ImageField
  // eslint-disable-next-line vue/prop-name-casing
  priority_level: 'low' | 'medium' | 'high' | null
  screenshot: ImageField
  developer: KeyTextField
}>()
</script>

<template>
  <div flex="~ wrap items-center gap-8" h-full rounded-6 bg-neutral-0 shadow f-p-xs>
    <div w-320 rounded-4 stack>
      <PrismicImage :field="screenshot!" h-auto max-h-full max-w-full rounded-4 object-cover />
    </div>
    <div flex="~ col gap-12" flex-1 p-24 nq-prose-compact>
      <h3>{{ name }}</h3>
      <PrismicRichText text-neutral-900 f-p-2xs :field="description" />
      <PrismicLink :field="linkHref" nq-arrow nq-pill-blue f-mt-40>
        Learn more
      </PrismicLink>
    </div>
  </div>
</template>
