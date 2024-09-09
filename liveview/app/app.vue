<script setup lang="ts">
const route = useRoute()
const darkQueryParam = ref<'dark' | 'light'>(route.query.dark === 'false' ? 'light' : 'dark')
useDark({ initialValue: darkQueryParam })
</script>

<template>
  <NuxtPage />
</template>
