<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.RoadmapSlice>())
</script>

<template>
  <ContentRoadmap :slice="slice as any" />
</template>
