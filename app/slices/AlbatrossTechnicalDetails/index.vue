<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.AlbatrossTechnicalDetailsSlice>())
</script>

<template>
  <ContentAlbatrossTechnicalDetails :slice="slice as any" />
</template>

<style>
.modal-container h3 {
  --uno: 'f-text-2xl text-center';
}

.modal-container [nq-prose-compact] .block-img img {
  --uno: 'mx-auto w-160';
}
</style>
