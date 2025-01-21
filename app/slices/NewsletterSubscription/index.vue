<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.NewsletterSubscriptionSlice>())
const colors = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="colors" data-slice-type="newsletter-subscription">
    <PrismicText :field="slice.primary.cta" wrapper="h3" text-center />
    <NewsletterEmailInput f-mt-40 text-24 />
  </section>
</template>
