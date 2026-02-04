<script setup lang="ts">
defineProps<{ headline: string, subline?: string }>()
</script>

<template>
  <div class="flex flex-col md:items-center">
    <h2 class="break-keep md:text-center text-white tech-headline">
      {{ headline }}
    </h2>
    <p v-if="subline" class="md:text-center text-[rgba(162,163,170,0.85)]">
      {{ subline }}
    </p>
  </div>
</template>
