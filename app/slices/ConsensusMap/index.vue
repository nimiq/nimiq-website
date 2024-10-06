<script setup lang="ts">
import type { Content } from '@prismicio/client'
import ConsensusMap from '~/components/ConsensusMap/index.vue'

defineProps(getSliceComponentProps<Content.ConsensusMapSlice>())
</script>

<template>
  <section bg-neutral-100>
    <ClientOnly fallback-tag="span" fallback="Loading map...">
      <ConsensusMap :texts="{ ...slice.primary }" :background-color="slice.primary.backgroundColor" />
    </ClientOnly>
  </section>
</template>
