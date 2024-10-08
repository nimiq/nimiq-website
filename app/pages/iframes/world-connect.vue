<script setup lang="ts">
const theme = useRouteQuery('theme')
// @unocss-include
const cssClasses = computed(() => theme.value === 'light' ? 'bg-white' : 'bg-darkblue')
</script>

<template>
  <NuxtLayout name="iframe" :class="cssClasses">
    <ClientOnly fallback-tag="span" fallback="Loading map...">
      <HexagonsWorld :bg-color="theme === 'light' ? 'white' : 'darkblue'" />
    </ClientOnly>
  </NuxtLayout>
</template>
