<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.SteppedLottieSlice>())
</script>

<template>
  <ContentSteppedLottie :slice="slice as any" />
</template>
