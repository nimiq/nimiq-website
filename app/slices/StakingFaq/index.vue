<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.StakingFaqSlice>())
</script>

<template>
  <section bg-neutral-100>
    <StakingFaq :questions="slice.primary.questions" :title="slice.primary.title!" />
  </section>
</template>
