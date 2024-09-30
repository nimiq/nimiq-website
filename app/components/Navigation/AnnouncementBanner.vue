<script setup lang="ts">
import type { KeyTextField, LinkField } from '@prismicio/client'

const {
  announcementBannerCtaLabel: ctaLabel,
  announcementBannerCtaLink: ctaLink,
  announcementBannerHeadline: headline,
} = defineProps<{ announcementBannerHeadline: KeyTextField, announcementBannerCtaLink: LinkField, announcementBannerCtaLabel: KeyTextField }>()
</script>

<template>
  <div role="banner" p="x-32 t-20 b-24 md:y-20" aria-label="Announcement" relative w-full of-hidden bg-darkblue flex="~ col md:items-center lg:row lg:justify-center gap-y-12 gap-x-16">
    <p text="md white" z-1 font-semibold>
      {{ headline }}
    </p>
    <PrismicLink v-if="hasLink(ctaLink)" z-1 :field="ctaLink" mx-0 nq-pill-secondary>
      {{ ctaLabel }}
    </PrismicLink>

    <!-- Ellipses on the sides -->
    <div absolute inset-0 mx-auto max-w-1120 w-full>
      <div absolute top="36 lg:40" right="-300 lg:-261" h-159 w-606 rounded-8 op-30 blur-120 style="background: radial-gradient(141.42% 141.42% at 100% 100%, #693bc4 0%, #8f3fd5 100%);" />
      <div top="36 lg:40" left="-300 lg:-261" absolute h-159 w-606 rounded-8 op-30 blur-120 max-md:hidden style="background: radial-gradient(141.42% 141.42% at 100% 100%, #693bc4 0%, #8f3fd5 100%);" />
    </div>

    <!-- Layers on top -->
    <div absolute inset-0 op-10 style="background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, #FFFFFF 0%, rgba(255, 255, 255, 0.62) 100%)" />
    <div absolute inset-0 op-10 style="background: linear-gradient(180deg, rgba(4, 6, 40, 0.5) 0%, rgba(4, 6, 40, 0.25) 50%, rgba(4, 6, 40, 0.5) 100%);" />
    <div absolute inset-auto max-w="[calc(100%-64px)]" top-49 aspect-3.811 w-606 rounded-8 op-80 blur-120 style="background: radial-gradient(141.42% 141.42% at 100% 100%, #693bc4 0%, #8f3fd5 100%);" />

    <!-- Identicons on the sides -->
    <div absolute inset-y-0 max-w-1900 w-full xl:inset-x-0 xl:mx-auto>
      <div i-announcement:sm-identicons-right absolute lg:i-announcement:lg-identicons-right xl:i-announcement:xl-identicons-right right="-35 lg:-65 xl:-30" top="-56 md:-60 lg:-80 xl:-33" h="223 xl:136" w="220 xl:434" />
      <div absolute lg:i-announcement:lg-identicons-left md:i-announcement:md-identicons-left xl:i-announcement:xl-identicons-left left="-35 lg:-65 xl:-30" top="-56 md:-60 lg:-80 xl:-33" h="223 xl:136" w="220 xl:434" />
    </div>
  </div>
</template>

<style>
main {
  --uno: 'mt--107 lg:mt--114px';
}
</style>
