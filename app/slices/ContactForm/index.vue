<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.ContactFormSlice>())
</script>

<template>
  <ContentContactForm :slice="slice as any" />
</template>
