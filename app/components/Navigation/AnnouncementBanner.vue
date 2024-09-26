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
  <div role="banner" h="$annoucement-height" p="x-32 t-20 b-24 md:y-20" aria-label="Announcement" relative w-full of-hidden bg-purple flex="~ col md:items-center lg:row lg:justify-center gap-y-12 gap-x-16 lg:items-center">
    <p text="md white" font-bold>
      {{ headline }}
    </p>
    <PrismicLink v-if="hasLink(ctaLink)" :field="ctaLink" mx-0 nq-pill-secondary>
      {{ ctaLabel }}
    </PrismicLink>

    <div absolute inset-y-0 inset-x="[calc((100%-1120px)/2)]" max-w-1120>
      <div v-if="!lg" i-annoucement:sm-identicons-right absolute right--65 top="-46 md:-60" h-223 w-220 />
      <div v-if="md && !lg" i-annoucement:md-identicons-left absolute left--65 top--60 h-231 w-220 />
      <div v-if="lg" i-annoucement:lg-identicons-right absolute right--65 top--80 h-223 w-220 />
      <div v-if="lg" i-annoucement:lg-identicons-left absolute left--65 top--80 h-223 w-220 />
    </div>
  </div>
</template>

<style>
:root {
  --annoucement-height: 102px;

  @screen md {
    --annoucement-height: 108px;
  }

  @screen lg {
    --annoucement-height: 72px;
  }
}
</style>
