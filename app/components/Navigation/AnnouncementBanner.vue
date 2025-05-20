<script setup lang="ts">
import type { KeyTextField, LinkField } from '@prismicio/client'

const {
  announcementBannerCtaLabel: ctaLabel,
  announcementBannerCtaLink: ctaLink,
  announcementBannerHeadline: headline,
} = defineProps<{ announcementBannerHeadline: KeyTextField, announcementBannerCtaLink: LinkField, announcementBannerCtaLabel: KeyTextField }>()
</script>

<template>
  <div role="banner" p="x-32 t-20 b-24 md:y-20" aria-label="Announcement" bg-darkblue w-full relative z-2 of-hidden flex="~ col md:items-center lg:row lg:justify-center gap-y-12 gap-x-16">
    <p text="md white" font-semibold z-1>
      {{ headline }}
    </p>
    <PrismicLink v-if="hasLink(ctaLink)" internal-component="a" :field="ctaLink" mx-0 z-1 nq-pill-secondary hocus:bg-neutral-300>
      {{ ctaLabel }}
    </PrismicLink>

    <!-- Ellipses on the sides -->
    <div mx-auto max-w-3120 w-full inset-0 absolute>
      <div top="36 lg:40" right="-300 lg:-261" rounded-8 op-30 h-159 w-606 absolute blur-120 style="background: radial-gradient(141.42% 141.42% at 100% 100%, #693bc4 0%, #8f3fd5 100%);" />
      <div top="36 lg:40" left="-300 lg:-261" rounded-8 op-30 h-159 w-606 absolute blur-120 max-md:hidden style="background: radial-gradient(141.42% 141.42% at 100% 100%, #693bc4 0%, #8f3fd5 100%);" />
    </div>

    <!-- Layers on top -->
    <div op-10 inset-0 absolute style="background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, #FFFFFF 0%, rgb(var(--nq-neutral-0) / 0.62)) 100%)" />
    <div op-10 inset-0 absolute style="background: linear-gradient(180deg, rgba(4, 6, 40, 0.5) 0%, rgba(4, 6, 40, 0.25) 50%, rgba(4, 6, 40, 0.5) 100%);" />
    <div max-w="[calc(100%-64px)]" rounded-8 op-80 w-606 aspect-3.811 inset-auto top-49 absolute blur-120 style="background: radial-gradient(141.42% 141.42% at 100% 100%, #693bc4 0%, #8f3fd5 100%);" />

    <!-- Identicons on the sides -->
    <div max-w-1900 w-full inset-y-0 absolute xl:mx-auto xl:inset-x-0>
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
