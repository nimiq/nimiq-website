<script setup lang="ts">
defineProps<{ nonce: number }>()
</script>

<template>
  <div size-8 rounded-full :class="getBgColor({ nonce })" />
</template>
