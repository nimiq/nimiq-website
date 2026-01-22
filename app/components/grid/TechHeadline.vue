<script setup lang="ts">
defineProps<{ headline: string, subline?: string }>()
</script>

<template>
  <div class="flex flex-col flex-md:items-center">
    <h2 class="nq-heading break-keep md:text-center">
      {{ headline }}
    </h2>
    <p v-if="subline" class="text-neutral-600 md:text-center">
      {{ subline }}
    </p>
  </div>
</template>
