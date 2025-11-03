<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.RichTextCardsSlice>())
</script>

<template>
  <ContentRichTextCards :slice="slice as any" />
</template>
