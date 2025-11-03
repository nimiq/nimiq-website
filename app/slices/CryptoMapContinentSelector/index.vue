<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.CryptoMapContinentSelectorSlice>())
</script>

<template>
  <ContentCryptoMapContinentSelector :slice="slice as any" />
</template>
