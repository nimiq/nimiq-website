<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.NewsletterSubscriptionSlice>())
const bgClass = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="bgClass" data-slice-type="newsletter-subscription">
    <PrismicText :field="slice.primary.cta" wrapper="h3" text-center />
    <NewsletterEmailInput text-24 f-mt-xl />
  </section>
</template>
