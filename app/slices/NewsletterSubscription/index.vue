<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.NewsletterSubscriptionSlice>())
</script>

<template>
  <ContentNewsletterSubscription :slice="slice as any" />
</template>
