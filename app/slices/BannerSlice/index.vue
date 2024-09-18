<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.BannerSliceSlice>())
const { sectionRef } = useSection(props.slice.id, 'grey')
</script>

<template>
  <section v-if="slice.variation === 'bannerWithBackgroundImage'" ref="sectionRef">
    <Banner
      :title="slice.primary.title!"
      :cta="slice.primary.cta!"
      :cta-label="slice.primary.ctaLabel!"
      :description="slice.primary.description!"
      :background="slice.primary.background"
    />
  </section>
</template>
