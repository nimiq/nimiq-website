<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.ValidatorListSlice>())
</script>

<template>
  <ContentValidatorList :slice="slice as any" />
</template>
