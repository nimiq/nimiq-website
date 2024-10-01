<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.AlbatrossTechnicalDetailsSlice>())
const sectionRef = useSection(props.slice.id, 'darkblue', { paddingY: false })
</script>

<template>
  <section ref="sectionRef">
    <AlbatrossTechnicalDetails />
  </section>
</template>
