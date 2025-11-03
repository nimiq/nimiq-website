<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.LinkGridSlice>())
</script>

<template>
  <ContentLinkGrid :slice="slice as any" />
</template>
