<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.ContactFormSlice>())
const colors = getColorClass(slice.primary.bgColor)
</script>

<template>
  <section :class="colors">
    <iframe
      mx-auto h-651 max-w-392 w-full rounded-6
      src="https://notionforms.io/forms/nim-prospect-contact-form"
      frameborder="0"
    />
  </section>
</template>
