<script setup lang="ts">
import type { Content } from '@prismicio/client'

// TODO Replace CtaSectionSlice with your slice
const props = defineProps(getSliceComponentProps<Content.ConsensusMapSlice>())
const { sectionRef } = useSection(props.slice.id, 'white')
</script>

<template>
  <section ref="sectionRef">
    TODO!
  </section>
</template>
