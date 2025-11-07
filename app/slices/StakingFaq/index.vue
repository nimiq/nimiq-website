<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.StakingFaqSlice>())
</script>

<template>
  <ContentStakingFaq :slice="slice as any" />
</template>
