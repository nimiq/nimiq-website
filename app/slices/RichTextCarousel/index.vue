<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.RichTextCarouselSlice>())
const colors = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="{ colors, 'md:flex-row': slice.variation === 'default' }">
    <RichTextCarouselDefault v-if="slice.variation === 'default'" :content="slice.primary.content" :images="slice.items.map(i => i.slide)" />
    <RichTextCarouselWithTabs v-if="slice.variation === 'withTabs'" v-bind="slice" />
  </section>
</template>
