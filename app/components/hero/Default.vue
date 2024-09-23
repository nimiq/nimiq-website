<script setup lang="ts">
import type { Content } from '@prismicio/client'

interface Props {
  primary: Content.HeroSectionSliceDefaultSlicePrimary
  items: Content.HeroSectionSliceDefaultSliceItem[]
}
const { primary: p, items } = defineProps<Props>()

const isEmpty = (object: any) => Object.keys(object).length === 0
const hasLink = computed(() => !isEmpty(p.linkHref) && p.linkLabel)
const hasSecondaryLink = computed(() => !isEmpty(p.secondaryLinkHref) && p.secondaryLinkLabel)
const hasVideoLink = computed(() => !isEmpty(p.videoHref) && p.videoLabel)
const showLink = computed(() => hasLink.value || hasSecondaryLink.value || hasVideoLink.value)

const { sectionRef } = useSection('hero', p.bgColor, { paddingY: false })
const highlightsItems = computed(() => items.map(i => i.highlight?.trim()).filter(Boolean) || [])
</script>

<template>
  <section ref="sectionRef" relative pt="148 md:153 lg:160">
    <PrismicText :field="p.headline" wrapper="h1" />
    <PrismicText v-if="p.subline" :field="p.subline" wrapper="p" />
    <ul v-if="highlightsItems.length > 0" :aria-label="`Highlights of ${p.headline[0]?.text}`" role="list" nq-mt-16 flex="~ md:justify-center items-center wrap gap-x-16 gap-y-4">
      <li v-for="(highlight, i) in highlightsItems" :key="i" contents>
        <div v-if="i > 0" size-6 rounded-full bg-neutral-500 />
        <span text="20 md:22 xl:24 green" font-semibold>{{ highlight }}</span>
      </li>
    </ul>
    <div v-if="showLink" class="nq_r-mt-48 link-wrapper" flex="~ wrap gap-x-32 gap-y-16" nq-mt-48 style="--nq-font-size-min:18;--nq-font-size-max:22">
      <PrismicLink v-if="hasLink" nq-arrow nq-pill nq-pill-lg nq-pill-blue :field="p.linkHref">
        {{ p.linkLabel }}
      </PrismicLink>

      <PrismicLink v-if="hasVideoLink" un-text="neutral-700 hocus:neutral-800" transition-colors :field="p.videoHref" flex="~ gap-10 items-center">
        <div i-nimiq:triangle-right text-16 />
        <span font-semibold>
          {{ p.videoLabel }}
        </span>
      </PrismicLink>
    </div>
  </section>
</template>
