<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.ExchangesShowcaseSlice>())
</script>

<template>
  <ContentExchangesShowcase :slice="slice as any" />
</template>
