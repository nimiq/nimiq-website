<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'
import RichTextComponent from '~/components/RichText.vue'

interface RichTextSlice {
  primary: {
    bgColor: string | undefined
    richText: RichTextField
  }
}

const props = defineProps<{ slice: RichTextSlice, slices?: any[] }>()

const bgClass = getColorClass(props.slice.primary.bgColor as any)
</script>

<template>
  <section :class="bgClass">
    <RichTextComponent nq-prose text-20 wrapper="article" :field="slice.primary.richText" />
  </section>
</template>
