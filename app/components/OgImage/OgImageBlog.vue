<script setup lang="ts">
const { title = '', subline = '' } = defineProps<{
  title?: string
  subline?: string
}>()
</script>

<template>
  <div class="relative h-full flex flex-col justify-end bg-gray-100">
    <img
      class="absolute inset-0 h-full w-full object-cover"
      src="/assets/og-images/blog.jpg"
      :alt="title"
      width="1200"
      height="630"
    >
    <div class="px-24 py-24 text-white">
      <h1 class="text-6xl font-bold">
        {{ title }}
      </h1>
      <p class="text-4xl">
        {{ subline }}
      </p>
    </div>
  </div>
</template>
