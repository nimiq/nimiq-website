<script setup lang="ts">
import type { KeyTextField, LinkField, RichTextField } from '@prismicio/client'

const { headline, cta } = defineProps<{
  iconName?: KeyTextField
  label?: KeyTextField
  headline: RichTextField
  subline?: RichTextField
  cta?: LinkField
  leftAlign?: boolean
}>()

const headlineTag = computed(() => headline.filter(i => i.type.startsWith('heading')).at(0)?.type.replace('heading', 'h') || 'h2')

const hostingVideos = ['youtube.com', 'vimeo.com']
const ctaIsVideo = computed(() => hostingVideos.some(host => getLink(cta)?.includes(host)))
</script>

<template>
  <div flex="~ col" :class="{ 'md:items-center': !leftAlign }">
    <div v-if="iconName" :class="iconName" text-54 op-15 f-m-sm />
    <p v-if="label" mb-16 block w-max text-sm nq-label f-m-md :class="{ 'md:mx-auto': !leftAlign }">
      {{ label }}
    </p>
    <PrismicText :wrapper="headlineTag" :field="headline" :class="{ 'text-left': leftAlign }" />
    <PrismicText v-if="hasText(subline)" wrapper="p" :field="subline" :class="{ 'text-left': leftAlign }" />
    <template v-if="cta && hasLink(cta)">
      <PrismicLink v-if="!ctaIsVideo" internal-component="a" :field="cta" nq-arrow nq-pill-lg nq-pill-blue f-m-lg :class="{ 'md:mx-auto': !leftAlign }" />
      <PrismicLink v-else internal-component="a" :field="cta" flex="~ gap-12 items-center" hocus:bg="blue/6" un-text-blue rounded-4 p-8 transition-colors f-m-sm>
        <div size-32 ring="1.5 blue" rounded-full text-16 stack>
          <div i-nimiq:triangle-right />
        </div>
        <p font-bold>
          {{ cta.text }}
        </p>
      </PrismicLink>
    </template>
  </div>
</template>
