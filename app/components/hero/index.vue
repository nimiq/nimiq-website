<script setup lang="ts">
defineProps<{ title?: string, description?: string, link?: { label?: string, href: string } }>()
</script>

<template>
  <h1>
    <slot name="title" mdc-unwrap="p">
      {{ title }}
    </slot>
  </h1>
  <p v-if="$slots.description || description || link">
    <slot name="description" mdc-unwrap="p">
      {{ description }}
    </slot>
    <NuxtLink v-if="link" :to="link.href">
      {{ link.label }}
    </NuxtLink>
  </p>
</template>
