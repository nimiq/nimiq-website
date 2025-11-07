<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.TiltedMediaSlice>())
</script>

<template>
  <ContentTiltedMedia :slice="slice as any" />
</template>
