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
  <NuxtLink :to="getLink(linkHref)" target="_blank" external nq-hoverable p-6 rounded-6 gap-24 h-full w="[min(calc(100vw-var(--px,32px)*2),350px)]">
    <div :class="bgColor" stack mb-0 rounded-4 h-240>
      <PrismicImage :field="logo!" rounded-4 op-60 h-auto max-h-full max-w-full object-cover />
      <p text="12 white/70" nq-label self-start right-12 top-12 justify-self-end relative>
        {{ type }}
      </p>
    </div>
    <div nq-prose-compact p-26 pt-0 flex-1 flex="~ col gap-12">
      <h3>{{ name }}</h3>
      <RichText wrapper="div" text-neutral-900 f-pt-2xs f-pt-sm :field="description" />
      <p v-if="developer" nq-label text-14 mt-auto>
        By <span text-blue>{{ developer }}</span>
      </p>
    </div>
  </NuxtLink>
</template>
