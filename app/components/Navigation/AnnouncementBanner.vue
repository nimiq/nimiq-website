<script setup lang="ts">
import type { KeyTextField, LinkField } from '@prismicio/client'
import { breakpointsTailwind } from '@vueuse/core'

const {
  announcementBannerCtaLabel: ctaLabel,
  announcementBannerCtaLink: ctaLink,
  announcementBannerHeadline: headline,
} = defineProps<{ announcementBannerHeadline: KeyTextField, announcementBannerCtaLink: LinkField, announcementBannerCtaLabel: KeyTextField }>()

const { md, lg } = useBreakpoints(breakpointsTailwind)
</script>

<template>
  <div role="banner" p="x-32 t-20 b-24 md:y-20" aria-label="Announcement" relative w-full of-hidden bg-purple flex="~ col md:items-center lg:row lg:justify-center gap-y-12 gap-x-16">
    <!-- Cool filters -->
    <div top="100%" absolute z-10 w-full flex>
      <div max-w-600 w-full opacity-30 class="circle-filter" />
      <div max-w-600 w-full opacity-80 class="circle-filter" />
      <div max-w-600 w-full opacity-30 class="circle-filter" />
    </div>
    <div absolute left-0 top-0 h-full w-full opacity-10 class="radial-filter" />
    <div absolute left-0 top-0 h-full w-full class="linear-filter" />

    <div xl:inset-x="0 [calc((100%-1120px)/2)]" absolute inset-y-0 max-w-1120 w-full>
      <div v-if="!lg" i-announcement:sm-identicons-right absolute right--35 top="-56 md:-60" h-223 w-220 />
      <div v-if="md && !lg" i-announcement:md-identicons-left absolute left--65 top--60 h-231 w-220 />
      <div v-if="lg" i-announcement:lg-identicons-right absolute right--65 top--80 h-223 w-220 />
      <div v-if="lg" i-announcement:lg-identicons-left absolute left--65 top--80 h-223 w-220 />
    </div>

    <p text="md white" font-bold>
      {{ headline }}
    </p>
    <PrismicLink v-if="hasLink(ctaLink)" :field="ctaLink" mx-0 nq-pill-secondary>
      {{ ctaLabel }}
    </PrismicLink>
  </div>
</template>

  <style>
  main {
  --uno: 'mt--91 md:mt--114';
}
</style>

<style scoped>
.radial-filter {
  background: radial-gradient(79% 73% at 12% 15%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.62) 100%);
}

.linear-filter {
  background: linear-gradient(180deg, rgba(4, 6, 40, 0.5) 0%, rgba(4, 6, 40, 0.25) 50%, rgba(4, 6, 40, 0.5) 100%);
}

.circle-filter {
  box-shadow: 0px 0px 240px 30px rgba(143, 63, 213);
}
</style>
