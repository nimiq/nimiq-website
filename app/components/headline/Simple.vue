<script setup lang="ts">
defineProps<{ headline: string, subline?: string, cta?: string, label?: string, iconName?: string, links?: string[], linkHref?: string, linkLabel?: string }>()

function getLinkMeta(url: string) {
  if (url.includes('t.me') || url.includes('telegram'))
    return { icon: 'i-nimiq:logos-telegram-mono', label: 'Telegram' }
  if (url.includes('discord'))
    return { icon: 'i-nimiq:logos-discord-mono', label: 'Discord' }
  if (url.includes('twitter') || url.includes('x.com'))
    return { icon: 'i-nimiq:logos-twitter-x-mono', label: 'Twitter' }
  if (url.includes('github'))
    return { icon: 'i-nimiq:logos-github-mono', label: 'GitHub' }
  return { icon: 'i-nimiq:arrow-right', label: 'Link' }
}
</script>

<template>
  <div flex="~ col md:items-center">
    <div v-if="iconName" :class="iconName" text-54 op-15 f-mt-sm />
    <p v-if="label" mb-16 w-max block f-text-sm nq-label md:mx-auto>
      {{ label }}
    </p>
    <h2 nq-heading break-keep md:text-center>
      {{ headline }}
    </h2>
    <p v-if="subline" max-w-prose md:text-center>
      {{ subline }}
    </p>
    <NuxtLink v-if="cta" :to="cta" f-mt-lg nq-arrow nq-pill-lg nq-pill-blue md:mx-auto />
    <NuxtLink v-else-if="linkHref" :to="linkHref" :external="linkHref.startsWith('http') || linkHref.startsWith('mailto')" :target="linkHref.startsWith('http') ? '_blank' : undefined" f-mt-lg nq-pill-lg nq-pill-blue md:mx-auto>
      {{ linkLabel || 'Learn more' }}
    </NuxtLink>
    <div v-if="links?.length" flex="~ gap-16 wrap" f-mt-lg md:mx-auto>
      <NuxtLink v-for="link in links" :key="link" :to="link" :external="link.startsWith('http')" :target="link.startsWith('http') ? '_blank' : undefined" nq-pill-lg nq-pill-secondary flex="~ items-center gap-8">
        <div :class="getLinkMeta(link).icon" text-20 />
        <span>{{ getLinkMeta(link).label }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
