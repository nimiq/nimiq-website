<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.RichTextCardsSlice>())
const colors = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="colors">
    <ul grid="~ cols-1 gap-32 lg:cols-2">
      <li v-for="({ bgColor, content }, i) in slice.items" :key="i" nq-px-48 nq-py-48 rounded-8 shadow :style="`background: rgb(var(--nq-${bgColor}))`">
        <PrismicRichText :field="content" class="nq-prose-no-pb nq-prose-no-px nq-prose" />
      </li>
    </ul>
  </section>
</template>
