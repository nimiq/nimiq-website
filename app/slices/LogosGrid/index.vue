<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.LogosGridSlice>())
</script>

<template>
  <ContentLogosGrid :slice="slice as any" />
</template>

<style>
:where(.nq-overlaps, [nq-overlaps]) + [data-slice-type='logos-grid'] {
  --uno: 'f-pt-2xl';
}
</style>
