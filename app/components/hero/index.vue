<script setup lang="ts">
defineProps<{ headline: string, subline?: string }>()
</script>

<template>
  <div flex="~ col md:items-center" py="80 md:120">
    <h1 nq-heading-lg md:text-center>
      {{ headline }}
    </h1>
    <p v-if="subline" text="neutral-700 f-lg md:center" mt-24 max-w-prose>
      {{ subline }}
    </p>
  </div>
</template>
