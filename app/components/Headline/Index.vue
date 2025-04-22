<script setup lang="ts">
import type { KeyTextField, LinkField, RichTextField } from '@prismicio/client'

const { headline, cta, links = [] } = defineProps<{
  iconName?: KeyTextField
  label?: KeyTextField
  headline: RichTextField
  subline?: RichTextField
  cta?: LinkField
  links?: LinkField<string, string, unknown, 'filled', 'nq-pill-blue' | 'nq-pill-secondary'>[]
  leftAlign?: boolean
}>()

const headlineTag = computed(() => headline.filter(i => i.type.startsWith('heading')).at(0)?.type.replace('heading', 'h') || 'h2')

const hostingVideos = ['youtube.com', 'vimeo.com']
const ctaIsVideo = computed(() => hostingVideos.some(host => getLink(cta)?.includes(host)))

if (hasLink(cta)) {
  console.warn(`The \`cta\` prop is deprecated. Use \`links\` instead. Found in ${useRoute().fullPath}`)
}
</script>

<template>
  <div flex="~ col" :class="{ 'md:items-center': !leftAlign }">
    <div v-if="iconName" :class="iconName" text-54 op-15 f-mt-sm />
    <p v-if="label" mb-16 block w-max nq-label f-text-sm :class="{ 'md:mx-auto': !leftAlign }">
      {{ label }}
    </p>
    <PrismicText :wrapper="headlineTag" :field="headline" :class="{ 'text-left': leftAlign }" break-keep />
    <PrismicText v-if="hasText(subline)" wrapper="p" :field="subline" :class="{ 'text-left': leftAlign }" />

    <!-- TODO Deprecate this -->
    <template v-if="cta && hasLink(cta)">
      <PrismicLink v-if="!ctaIsVideo" internal-component="a" :field="cta" nq-arrow nq-pill-lg nq-pill-blue f-mt-lg :class="{ 'md:mx-auto': !leftAlign }" />
      <PrismicLink v-else internal-component="a" :field="cta" flex="~ gap-12 items-center" hocus:bg="blue/6" un-text-blue rounded-4 p-8 transition-colors f-mt-sm>
        <div ring="1.5 blue" size-32 rounded-full text-16 stack>
          <div i-nimiq:triangle-right />
        </div>
        <p font-bold>
          {{ cta.text }}
        </p>
      </PrismicLink>
    </template>

    <template v-else-if="links.length > 0">
      <ul flex="~ gap-16 lg:gap-20 wrap">
        <li v-for="(link, i) in links" :key="i">
          <PrismicLink
            internal-component="a" :field="link" nq-arrow nq-pill-lg f-mt-lg :class="{
              'md:mx-auto': !leftAlign,
              'nq-pill-blue': link.variant === 'nq-pill-blue',
              'nq-pill-secondary': link.variant === 'nq-pill-secondary',
            }"
          />

          <!-- TODO If we do really use this, then use a variant -->
          <!-- <PrismicLink
            internal-component="a" :field="link" flex="~ gap-12 items-center" hocus:bg="blue/6" un-text-blue rounded-4 p-8 transition-colors f-mt-sm :class="{
              'nq-pill-blue': link.variant === 'nq-pill-blue',
              'nq-pill-secondary': link.variant === 'nq-pill-secondary',
            }"
          >
            <div ring="1.5 blue" size-32 rounded-full text-16 stack>
              <div i-nimiq:triangle-right />
            </div>
            <p font-bold>
              {{ link.text }}
            </p>
          </PrismicLink> -->
        </li>
      </ul>
    </template>
  </div>
</template>
