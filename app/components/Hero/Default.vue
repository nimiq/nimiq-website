<script setup lang="ts">
import type { Content } from '@prismicio/client'

interface Props {
  primary: Partial<Content.HeroSectionSliceDefaultSlicePrimary>
  items?: Content.HeroSectionSliceDefaultSliceItem[]
}
const { primary: p, items = [] } = defineProps<Props>()

const hasPrimaryLink = computed(() => hasLink(p.link))
const hasSecondaryLink = computed(() => hasLink(p.secondaryLink))
const hasVideoLink = computed(() => hasLink(p.video))
const showLink = computed(() => hasPrimaryLink.value || hasSecondaryLink.value || hasVideoLink.value)

const hasAppStore = computed(() => hasLink(p.appStore))
const hasPlayStore = computed(() => hasLink(p.playStore))
const hasAnApp = computed(() => hasAppStore.value || hasPlayStore.value)

const colors = getColorClass(p.bgColor)
const highlightsItems = computed(() => items.map(i => i.highlight?.trim()).filter(Boolean) || [])
</script>

<template>
  <section :class="colors" relative f-p-5xl>
    <PrismicText :field="p.headline" wrapper="h1" />
    <PrismicText v-if="p.subline" :field="p.subline" wrapper="p" font-400 dark:text-neutral-900 />
    <ul v-if="highlightsItems.length > 0" :aria-label="`Highlights of ${p.headline?.[0]?.text}`" role="list" f-mt-xs flex="~ md:justify-center items-center wrap gap-x-16 gap-y-4">
      <li v-for="(highlight, i) in highlightsItems" :key="i" contents>
        <div v-if="i > 0" rounded-full bg-neutral-500 size-6 />
        <span text="20 md:22 xl:24 green" font-semibold>{{ highlight }}</span>
      </li>
    </ul>
    <div v-if="showLink" flex="~ wrap gap-x-32 gap-y-16 items-center" f-mt-lg style="--nq-font-size-min:18;--nq-font-size-max:22">
      <PrismicLink v-if="hasLink(primary.link)" :field="primary.link" nq-arrow nq-pill nq-pill-lg nq-pill-blue dark:nq-pill-white />

      <PrismicLink v-if="hasVideoLink" internal-component="a" un-text="neutral-700 hocus:neutral-800" transition-colors :field="p.videoHref!" flex="~ gap-10 items-center">
        <div i-nimiq:triangle-right text-16 />
        <span font-semibold>
          {{ p.videoLabel }}
        </span>
      </PrismicLink>

      <PrismicLink v-if="hasSecondaryLink" internal-component="a" :field="p.secondaryLink!" un-text-white nq-arrow font-bold />
    </div>

    <ul v-if="hasAnApp" f-mt-xl flex="~ wrap gap-32 lg:gap-40">
      <li v-if="hasAppStore">
        <PrismicLink internal-component="a" :field="p.appStore!">
          <NuxtImg v-if="hasAppStore" src="/assets/images/apple-store-badge.png" h="32 lg:40" alt="Get it on Apple Store" />
        </PrismicLink>
      </li>
      <li v-if="hasPlayStore">
        <PrismicLink internal-component="a" :field="p.playStore!">
          <NuxtImg src="/assets/images/google-play-badge.png" h="32 lg:40" alt="Get it on Google Play" />
        </PrismicLink>
      </li>
    </ul>
  </section>
</template>
