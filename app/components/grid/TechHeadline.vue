<script setup lang="ts">
defineProps<{ headline: string, subline?: string }>()
</script>

<template>
  <div flex="~ col md:items-center">
    <h2 nq-heading break-keep md:text-center>
      {{ headline }}
    </h2>
    <p v-if="subline" text-neutral-600 md:text-center>
      {{ subline }}
    </p>
  </div>
</template>
