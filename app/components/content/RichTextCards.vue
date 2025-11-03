<script setup lang="ts">
interface RichTextCardsSlice {
  primary: {
    bgColor: string | undefined
  }
  items?: any[]
}

const props = defineProps<{ slice: RichTextCardsSlice, slices?: any[] }>()
const bgClass = getColorClass(props.slice.primary.bgColor as any)
</script>

<template>
  <section :class="bgClass">
    <ul grid="~ cols-1 gap-32 lg:cols-2">
      <li v-for="({ bgColor, content }, i) in slice.items" :key="i" rounded-8 shadow f-pt-lg :style="`background: rgb(var(--nq-${bgColor}))`">
        <RichText wrapper="div" :field="content" class="nq-prose nq-prose-no-pb nq-prose-no-px" />
      </li>
    </ul>
  </section>
</template>
