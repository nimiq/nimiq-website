<script setup lang="ts">
const { id } = defineProps<{ id?: string }>()
const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => id && (headings?.anchorLinks === true || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h2)))
</script>

<template>
  <h2 :id="id">
    <NuxtLink v-if="id && generate" :href="`#${id}`">
      <slot />
    </NuxtLink>
    <slot v-else />
  </h2>
</template>
