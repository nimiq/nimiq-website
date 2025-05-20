<script setup lang="ts">
defineProps<{ nonce: number }>()
</script>

<template>
  <div rounded-full size-8 :class="getLiveviewBgColor({ nonce })" />
</template>
