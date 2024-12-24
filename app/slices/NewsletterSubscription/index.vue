<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.NewsletterSubscriptionSlice>())
const colors = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="colors" data-slice-type="newsletter-subscription">
    <PrismicText :field="slice.primary.cta" wrapper="h3" text-center />
    <NewsletterEmailInput text-24 nq-mt-40 />
  </section>
</template>
