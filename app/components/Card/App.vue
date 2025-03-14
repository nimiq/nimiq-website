<script setup lang="ts">
import type { Content, ImageField, KeyTextField, LinkField, RichTextField } from '@prismicio/client'

const { type } = defineProps<{
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

// @unocss-include

const appColor: { [key in Content.NimiqAppDocument['data']['type']]: string } = {
  'Insights': 'bg-green',
  'E-commerce': 'bg-blue',
  'Games': 'bg-purple',
  'Faucet': 'bg-pink',
  'Promotion': 'bg-brown',
  'Miner': 'bg-darkblue',
  'Wallets': 'bg-orange',
  'Infrastructure': 'bg-red',
  'Bots': 'bg-gold',
}

const bgColor = computed(() => appColor[type])
</script>

<template>
  <NuxtLink :to="getLink(linkHref)" target="_blank" external h-full gap-24 rounded-6 p-6 nq-hoverable w="[min(calc(100vw-var(--px,32px)*2),350px)]">
    <div :class="bgColor" mb-0 h-240 rounded-4 stack>
      <PrismicImage :field="logo!" h-auto max-h-full max-w-full rounded-4 object-cover op-60 />
      <p relative right-12 top-12 self-start justify-self-end text="12 white/70" nq-label>
        {{ type }}
      </p>
    </div>
    <div nq-prose-compact flex-1 p-26 pt-0 flex="~ col gap-12">
      <h3>{{ name }}</h3>
      <RichText wrapper="div" text-neutral-900 f-pt-2xs f-pt-sm :field="description" />
      <p v-if="developer" mt-auto text-14 nq-label>
        By <span text-blue>{{ developer }}</span>
      </p>
    </div>
  </NuxtLink>
</template>
