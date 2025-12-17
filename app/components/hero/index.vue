<script setup lang="ts">
defineProps<{ title: string, description?: string, link?: { label: string, href: string } }>()
</script>

<template>
  <div flex="~ col md:items-center" py="80 md:120">
    <h1 nq-heading-lg md:text-center>
      {{ title }}
    </h1>
    <p v-if="description || link" text="neutral-700 f-lg md:center" mt-24 max-w-prose>
      {{ description }}
      <a v-if="link" :href="link.href">{{ link.label }}</a>
    </p>
  </div>
</template>
