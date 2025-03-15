<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.ContactFormSlice>())
const colors = getColorClass(slice.primary.bgColor)
</script>

<template>
  <section :class="colors">
    <iframe
      mx-auto rounded-6 h-651 max-w-392 w-full
      src="https://notionforms.io/forms/nim-prospect-contact-form"
      frameborder="0"
    />
  </section>
</template>
