<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.ValidatorListSlice>())
</script>

<template>
  <section relative z-11 of-y-initial bg-neutral-0>
    <ValidatorList />
  </section>
</template>
