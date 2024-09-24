<script setup lang="ts">
import type { Content } from '@prismicio/client'

// TODO Replace CtaSectionSlice with your slice
const props = defineProps(getSliceComponentProps<Content.ContactFormSlice>())
const sectionRef = useSection(props.slice.id, props.slice.primary.bgColor)
</script>

<template>
  <section ref="sectionRef">
    TODO!
  </section>
</template>
