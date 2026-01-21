<script setup lang="ts">
defineProps<{ title: string, description?: string, link?: { label?: string, href: string } }>()
</script>

<template>
  <div class="flex flex-col flex-md:items-center">
    <h1 class="nq-heading md:text-center">
      {{ title }}
    </h1>
    <p v-if="description || link" class="text-neutral-700 text-f-lg text-md:center mt-6 max-w-prose">
      {{ description }}
      <a v-if="link" :href="link.href">{{ link.label }}</a>
    </p>
  </div>
</template>
