<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.RichTextSlice>())

const colors = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="colors">
    <PrismicRichText class="nq-prose" text="18 neutral-900/90" wrapper="article" :field="slice.primary.richText" />
  </section>
</template>
