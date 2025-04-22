<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.RichTextCarouselSlice>())
const bgClass = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="[bgClass, { 'md:flex-row': slice.variation === 'default' }]">
    <RichTextCarouselDefault v-if="slice.variation === 'default'" :content="slice.primary.content" :images="slice.items.map(i => i.slide)" />
    <RichTextCarouselWithTabs v-if="slice.variation === 'withTabs'" v-bind="slice" />
  </section>
</template>
