<script setup lang="ts">
import type { Content } from '@prismicio/client'
import ConsensusMap from '~/components/ConsensusMap/index.vue'

// TODO Replace CtaSectionSlice with your slice
const props = defineProps(getSliceComponentProps<Content.ConsensusMapSlice>())
const sectionRef = useSection(props.slice.id, 'white')
</script>

<template>
  <section ref="sectionRef">
    <ClientOnly fallback-tag="span" fallback="Loading map...">
      <ConsensusMap :texts="{ ...slice.primary }" :background-color="slice.primary.backgroundColor" />
    </ClientOnly>
  </section>
</template>
