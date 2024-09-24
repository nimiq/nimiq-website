<script setup lang="ts">
import type { Content } from '@prismicio/client'

// TODO Replace CtaSectionSlice with your slice
const props = defineProps(getSliceComponentProps<Content.CtaSectionSlice>())
const sectionRef = useSection(props.slice.id, 'white')
</script>

<template>
  <section ref="sectionRef">
    TODO!
  </section>
</template>
