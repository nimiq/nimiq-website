<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.CtaSectionSlice>())
</script>

<template>
  <ContentCtaSection :slice="slice as any" />
</template>
