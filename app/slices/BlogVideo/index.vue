<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.BlogVideoSlice>())
</script>

<template>
  <ContentBlogVideo :slice="slice as any" />
</template>
