<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.RichTextSlice>())

const bgClass = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="bgClass">
    <RichText nq-prose text="18" wrapper="article" :field="slice.primary.richText" />
  </section>
</template>
