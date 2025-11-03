<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.NewsletterFormSlice>())
</script>

<template>
  <ContentNewsletterForm :slice="slice as any" />
</template>
