<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'

interface NewsletterSubscriptionSlice {
  primary: {
    bgColor: string | undefined
    cta: RichTextField
  }
}

const props = defineProps<{ slice: NewsletterSubscriptionSlice, slices?: any[] }>()
const bgClass = getColorClass(props.slice.primary.bgColor as any)
</script>

<template>
  <section :class="bgClass" data-slice-type="newsletter-subscription">
    <PrismicText :field="slice.primary.cta" wrapper="h3" text-center />
    <NewsletterEmailInput text-24 f-mt-xl />
  </section>
</template>
