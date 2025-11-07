<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.StakingDistributionSlice>())
</script>

<template>
  <ContentStakingDistribution :slice="slice as any" />
</template>
