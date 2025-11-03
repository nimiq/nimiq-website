<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.NimiqWalletHoverableSlice>())
</script>

<template>
  <ContentNimiqWalletHoverable :slice="slice as any" />
</template>

<style>
section[data-slice-type='simple-headline'] + section[data-slice-type='nimiq-wallet-hoverable'] {
  --uno: 'pt-0!';
}
</style>
