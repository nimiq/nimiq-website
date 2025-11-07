<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.SteppedSlidesSlice>())
</script>

<template>
  <ContentSteppedSlides :slice="slice as any" />
</template>
