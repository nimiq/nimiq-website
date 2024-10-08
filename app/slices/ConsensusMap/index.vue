<script setup lang="ts">
import type { Content } from '@prismicio/client'
import ConsensusMap from '~/components/Albatross/Consensus/index.vue'

defineProps(getSliceComponentProps<Content.ConsensusMapSlice>())
</script>

<template>
  <section bg-neutral-100>
    <ClientOnly fallback-tag="span" fallback="Loading map...">
      <ConsensusMap v-bind="slice.primary" />
    </ClientOnly>
  </section>
</template>
