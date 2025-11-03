<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.AppsShowcaseSlice>())
</script>

<template>
  <ContentAppsShowcase :slice="slice as any" />
</template>
