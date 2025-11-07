<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.StakingSliceSlice>())
</script>

<template>
  <ContentStakingSlice :slice="slice as any" />
</template>
