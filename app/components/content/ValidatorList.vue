<script setup lang="ts">
interface ValidatorListSlice {}

defineProps<{ slice: ValidatorListSlice }>()
</script>

<template>
  <section bg-neutral-0 relative z-11 of-y-initial>
    <ValidatorList />
  </section>
</template>
