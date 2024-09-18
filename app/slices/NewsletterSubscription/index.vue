<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.NewsletterSubscriptionSlice>())
const { sectionRef } = useSection(props.slice.id, props.slice.primary.bgColor)
</script>

<template>
  <section ref="sectionRef">
    <PrismicText :field="slice.primary.cta" wrapper="h3" />
    <input type="text" nq-input-box>
  </section>
</template>
