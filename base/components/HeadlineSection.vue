<script setup lang="ts">
defineProps<{ headline: string, subheadline: string }>()
defineSlots
</script>

<template>
<section>
  <slot name="top" />

  <h2>{{ headline }}</h2>
  <p>{{ subheadline }}</p>

</section>
</template>