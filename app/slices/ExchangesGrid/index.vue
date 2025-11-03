<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.ExchangesGridSlice>())
</script>

<template>
  <ContentExchangesGrid :slice="slice as any" />
</template>
