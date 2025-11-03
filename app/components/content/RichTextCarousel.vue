<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'

interface RichTextCarouselSlice {
  primary: {
    bgColor: string | undefined
    content?: RichTextField
  }
  items?: any[]
  variation?: string
}

const props = defineProps<{ slice: RichTextCarouselSlice, slices?: any[] }>()
const bgClass = getColorClass(props.slice.primary.bgColor as any)
</script>

<template>
  <section :class="[bgClass, { 'md:flex-row': slice.variation === 'default' }]">
    <RichTextCarouselDefault v-if="slice.variation === 'default'" :content="slice.primary.content!" :images="slice.items!.map((i: any) => i.slide)" />
    <RichTextCarouselWithTabs v-if="slice.variation === 'withTabs'" v-bind="slice as any" />
  </section>
</template>
