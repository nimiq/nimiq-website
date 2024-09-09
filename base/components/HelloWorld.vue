<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div text-pink>
    <h1>Hello World!</h1>
    <pre>{{ myLayer }}</pre>
  </div>
</template>
