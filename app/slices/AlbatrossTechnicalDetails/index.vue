<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.AlbatrossTechnicalDetailsSlice>())
</script>

<template>
  <AlbatrossTechnicalDetails />
</template>
