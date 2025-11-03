<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.LottieSliceSlice>())
</script>

<template>
  <ContentLottieSlice :slice="slice as any" />
</template>
