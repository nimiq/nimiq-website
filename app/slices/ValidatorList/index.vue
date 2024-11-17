<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.ValidatorListSlice>())
</script>

<template>
  <section bg-neutral-0>
    <ValidatorList />
  </section>
</template>
