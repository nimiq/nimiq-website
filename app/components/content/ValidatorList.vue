<script setup lang="ts">
import ValidatorListComponent from '~/components/Validator/List.vue'

interface ValidatorListSlice {}

defineProps<{ slice: ValidatorListSlice }>()
</script>

<template>
  <section bg-neutral-0 relative z-11 of-y-initial>
    <ValidatorListComponent />
  </section>
</template>
