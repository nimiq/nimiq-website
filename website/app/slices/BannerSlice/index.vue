<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.BannerSliceSlice>())
</script>

<template>
  <section v-if="slice.variation === 'bannerWithBackgroundImage'" class="nq-block-96">
    <Banner
      :title="slice.primary.title!"
      :cta="slice.primary.cta!"
      :cta-label="slice.primary.ctaLabel!"
      :description="slice.primary.description!"
      :background="slice.primary.background"
    />
  </section>
</template>
