<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.BuySellWalletSlice>())
</script>

<template>
  <ContentBuySellWallet :slice="slice as any" />
</template>
