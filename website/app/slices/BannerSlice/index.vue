<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.BannerSliceSlice>())
</script>

<template>
  <section v-if="slice.variation === 'bannerWithBackgroundImage'" class="sgap-96">
    <div border="1 solid neutral/15" relative w-full rounded-8 bg-neutral-0 px-32 py-72>
      <PrismicImage :field="slice.primary.background" pointer-events-none absolute inset-0 />
      <h2>{{ slice.primary.title }}</h2>
      <p v-if="slice.primary.description" mx-auto>
        {{ slice.primary.description }}
      </p>
      <PrismicLink v-if="slice.primary.cta_label" :field="slice.primary.cta" mx-auto nq-arrow nq-pill-lg nq-pill-blue mt="32 md:24">
        {{ slice.primary.cta_label }}
      </PrismicLink>
    </div>
  </section>
</template>
