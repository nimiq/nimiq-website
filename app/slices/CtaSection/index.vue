<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.CtaSectionSlice>())
const { sectionRef } = useSection(props.slice.id, 'white')
</script>

<template>
  <section ref="sectionRef">
    <PrismicText wrapper="h2" :field="slice.primary.headline" z-20 />
    <PrismicText v-if="slice.primary.subline" wrapper="p" z-20 :field="slice.primary.subline" />
    <PrismicLink :field="slice.primary.linkHref" nq-arrow nq-pill-lg nq-pill-blue nq-mt-48>
      {{ slice.primary.linkLabel }}
    </PrismicLink>
  </section>
</template>
