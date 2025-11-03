<script setup lang="ts">
interface ContactFormSlice {
  primary: {
    bgColor: string | undefined
  }
}

const { slice } = defineProps<{ slice: ContactFormSlice, slices?: any[] }>()
const bgClass = getColorClass(slice.primary.bgColor as any)
</script>

<template>
  <section :class="bgClass">
    <iframe
      mx-auto rounded-6 h-651 max-w-392 w-full
      src="https://notionforms.io/forms/nim-prospect-contact-form"
      frameborder="0"
    />
  </section>
</template>
