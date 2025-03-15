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
  <div flex="~ wrap items-center gap-8" rounded-6 bg-neutral-0 h-full shadow f-pt-xs>
    <div stack rounded-4 w-320>
      <PrismicImage :field="screenshot!" rounded-4 h-auto max-h-full max-w-full object-cover />
    </div>
    <div flex="~ col gap-12" nq-prose-compact p-24 flex-1>
      <h3>{{ name }}</h3>
      <RichText wrapper="div" text-neutral-900 f-pt-2xs :field="description" />
      <PrismicLink :field="linkHref" nq-arrow nq-pill-blue f-mt-xl>
        Learn more
      </PrismicLink>
    </div>
  </div>
</template>
