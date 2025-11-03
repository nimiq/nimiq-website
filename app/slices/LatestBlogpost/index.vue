<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.LatestBlogpostSlice>())
</script>

<template>
  <ContentLatestBlogpost :slice="slice as any" />
</template>
