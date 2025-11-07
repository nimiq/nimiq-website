<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.WalletWordsChallengeSlice>())
</script>

<template>
  <ContentWalletWordsChallenge :slice="slice as any" />
</template>
