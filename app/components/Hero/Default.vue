<script setup lang="ts">
import type { Content } from '@prismicio/client'

interface Props {
  primary: Partial<Content.HeroSectionSliceDefaultSlicePrimary>
  items?: Content.HeroSectionSliceDefaultSliceItem[]
}
const { primary: p, items = [] } = defineProps<Props>()

const hasPrimaryLink = computed(() => hasLink(p.linkHref) && p.linkLabel)
const hasSecondaryLink = computed(() => hasLink(p.secondaryLinkHref) && p.secondaryLinkLabel)
const hasVideoLink = computed(() => hasLink(p.videoHref) && p.videoLabel)
const showLink = computed(() => hasPrimaryLink.value || hasSecondaryLink.value || hasVideoLink.value)

const hasAppStore = computed(() => hasLink(p.appStore))
const hasPlayStore = computed(() => hasLink(p.playStore))
const hasAnApp = computed(() => hasAppStore.value || hasPlayStore.value)

const colors = getColorClass(p.bgColor)
const highlightsItems = computed(() => items.map(i => i.highlight?.trim()).filter(Boolean) || [])
</script>

<template>
  <section :class="colors" relative pb-0 nq-pt-200>
    <PrismicText :field="p.headline" wrapper="h1" />
    <PrismicText v-if="p.subline" :field="p.subline" wrapper="p" />
    <ul v-if="highlightsItems.length > 0" :aria-label="`Highlights of ${p.headline?.[0]?.text}`" role="list" nq-mt-16 flex="~ md:justify-center items-center wrap gap-x-16 gap-y-4">
      <li v-for="(highlight, i) in highlightsItems" :key="i" contents>
        <div v-if="i > 0" size-6 rounded-full bg-neutral-500 />
        <span text="20 md:22 xl:24 green" font-semibold>{{ highlight }}</span>
      </li>
    </ul>
    <div v-if="showLink" class="nq_r-mt-48 link-wrapper" flex="~ wrap gap-x-32 gap-y-16" nq-mt-48 style="--nq-font-size-min:18;--nq-font-size-max:22">
      <PrismicLink v-if="hasPrimaryLink" internal-component="a" nq-arrow nq-pill nq-pill-lg nq-pill-blue :field="p.linkHref!">
        {{ p.linkLabel }}
      </PrismicLink>

      <PrismicLink v-if="hasVideoLink" internal-component="a" un-text="neutral-700 hocus:neutral-800" transition-colors :field="p.videoHref!" flex="~ gap-10 items-center">
        <div i-nimiq:triangle-right text-16 />
        <span font-semibold>
          {{ p.videoLabel }}
        </span>
      </PrismicLink>
    </div>

    <ul v-if="hasAnApp" nq-mt-40 flex="~ wrap gap-32 lg:gap-40">
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
