<template>
  <h4 :id="id">
    <NuxtLink v-if="id && generate" :href="`#${id}`">
      <slot />
    </NuxtLink>
    <slot v-else />
  </h4>
</template>

<script setup lang="ts">
const { id } = defineProps<{ id?: string }>()
const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => id && (headings?.anchorLinks === true || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h4)))
</script>
