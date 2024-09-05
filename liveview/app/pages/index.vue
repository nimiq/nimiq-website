<script setup lang="ts">
const isDev = import.meta.dev
</script>

<template>
  <main pt-32>
    <DebugPanel v-if="isDev" mx-32 />
    <Liveview />
  </main>
</template>
