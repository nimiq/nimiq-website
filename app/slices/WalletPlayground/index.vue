<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.WalletPlaygroundSlice>())
</script>

<template>
  <ContentWalletPlayground :slice="slice as any" />
</template>
