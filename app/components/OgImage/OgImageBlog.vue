<script setup lang="ts">
const { title } = defineProps<{ title: string, subline?: string }>()

if (!title)
  throw new Error('Title is required. Please provide a title for the OG image.')
</script>

<template>
  <div relative h-full flex="~ col justify-end">
    <img absolute inset-0 size-full object-cover src="/assets/og-images/og-background.jpg" :alt="title" width="1200" height="630">
    <div p-96>
      <h1 font-semibold text="white 64">
        {{ title }}
      </h1>
      <p v-if="subline" text="white/60 40" mt-32>
        {{ subline }}
      </p>
    </div>
  </div>
</template>
