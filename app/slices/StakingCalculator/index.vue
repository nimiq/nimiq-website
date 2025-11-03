<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.StakingCalculatorSlice>())
</script>

<template>
  <ContentStakingCalculator :slice="slice as any" />
</template>
