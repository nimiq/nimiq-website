<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.RichTextSlice>())
</script>

<template>
  <ContentRichText :slice="slice as any" />
</template>
