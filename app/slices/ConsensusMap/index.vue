<script setup lang="ts">
import type { Content } from '@prismicio/client'
import ConsensusMap from '~/components/ConsensusMap/index.vue'

const props = defineProps(getSliceComponentProps<Content.ConsensusMapSlice>())
const sectionRef = useSection(props.slice.id, 'grey')
</script>

<template>
  <section ref="sectionRef">
    <ClientOnly fallback-tag="span" fallback="Loading map...">
      <ConsensusMap :texts="{ ...slice.primary }" :background-color="slice.primary.backgroundColor" />
    </ClientOnly>
  </section>
</template>
