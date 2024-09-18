<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.RichTextSlice>())

const { sectionRef } = useSection(props.slice.id, props.slice.primary.bgColor)
</script>

<template>
  <section ref="sectionRef">
    <PrismicRichText class="nq-prose" text="18 neutral-900/90" wrapper="article" :field="slice.primary.richText" />
  </section>
</template>
