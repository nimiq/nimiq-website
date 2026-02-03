<script setup lang="ts">
defineProps<{ title: string, description?: string, link?: { label?: string, href: string } }>()
</script>

<template>
  <h1>{{ title }}</h1>
  <p v-if="description || link">
    {{ description }}
    <a v-if="link" :href="link.href">{{ link.label }}</a>
  </p>
</template>
