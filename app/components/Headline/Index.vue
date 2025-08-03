<script setup lang="ts">
import type { KeyTextField, LinkField, RichTextField } from '@prismicio/client'

const { headline, cta, links = [] } = defineProps<{
  iconName?: KeyTextField
  label?: KeyTextField
  headline: RichTextField
  subline?: RichTextField
  cta?: LinkField
  links?: LinkField<string, string, unknown, 'filled', 'nq-pill-blue' | 'nq-pill-secondary' | 'nq-pill-tertiary' | 'video'>[]
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
    <p v-if="label" mb-16 w-max block f-text-sm nq-label :class="{ 'md:mx-auto': !leftAlign }">
      {{ label }}
    </p>
    <PrismicText :wrapper="headlineTag" :field="headline" :class="{ 'text-left': leftAlign }" break-keep />
    <PrismicText v-if="hasText(subline)" wrapper="p" :field="subline" :class="{ 'text-left': leftAlign }" />

    <!-- TODO Deprecate this -->
    <template v-if="links.length === 0 && cta && hasLink(cta)">
      <PrismicLink v-if="!ctaIsVideo" :field="cta" f-mt-lg nq-arrow nq-pill-lg nq-pill-blue :class="{ 'md:mx-auto': !leftAlign }" />
      <PrismicLink v-else :field="cta" flex="~ gap-12 items-center" hocus:bg="blue/6" un-text-blue p-8 rounded-4 transition-colors f-mt-sm>
        <div ring="1.5 blue" stack text-16 rounded-full size-32>
          <div i-nimiq:triangle-right />
        </div>
        <p font-bold>
          {{ cta.text }}
        </p>
      </PrismicLink>
    </template>

    <template v-else-if="links.length > 0">
      <ul flex="~ gap-16 lg:gap-20 wrap" f-mt-md>
        <li v-for="(link, i) in links" :key="i">
          <PrismicLink
            v-if="link.variant?.startsWith('nq-pill')" :field="link" nq-arrow nq-pill-lg :class="{
              'md:mx-auto': !leftAlign,
              'nq-pill-blue': link.variant === 'nq-pill-blue',
              'nq-pill-secondary': link.variant === 'nq-pill-secondary',
              'nq-pill-tertiary': link.variant === 'nq-pill-tertiary',
            }"
          />

          <PrismicLink
            v-else-if="link.variant === 'video'" :field="link" flex="~ gap-12 items-center" hocus:bg="blue/6" un-text-blue p-8 rounded-4 transition-colors
          >
            <div ring="1.5 blue" stack text-16 rounded-full size-32>
              <div i-nimiq:triangle-right />
            </div>
            <p font-bold>
              {{ link.text }}
            </p>
          </PrismicLink>
        </li>
      </ul>
    </template>
  </div>
</template>
