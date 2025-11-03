<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.WhitepaperSliceSlice>())
</script>

<template>
  <ContentWhitepaperSlice :slice="slice as any" />
</template>
