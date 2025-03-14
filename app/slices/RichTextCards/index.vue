<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.RichTextCardsSlice>())
const colors = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="colors">
    <ul grid="~ cols-1 gap-32 lg:cols-2">
      <li v-for="({ bgColor, content }, i) in slice.items" :key="i" rounded-8 shadow f-pt-lg :style="`background: rgb(var(--nq-${bgColor}))`">
        <RichText wrapper="div" :field="content" class="nq-prose nq-prose-no-pb nq-prose-no-px" />
      </li>
    </ul>
  </section>
</template>
