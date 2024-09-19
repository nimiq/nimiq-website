<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.CtaSectionSlice>())
const { sectionRef } = useSection(props.slice.id, 'white')
</script>

<template>
  <section ref="sectionRef">
    <Headline :headline="slice.primary.headline" :label="slice.primary.label" :icon-name="slice.primary.iconName" :subline="slice.primary.subline" :cta-href="slice.primary.linkHref" :cta-label="slice.primary.linkLabel" />
  </section>
</template>
