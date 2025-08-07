<script setup lang="ts">
const { environment, enableDevAnalytics } = useRuntimeConfig().public
const showConsentBanner = environment.isProduction || enableDevAnalytics
</script>

<template>
  <div>
    <NuxtPage />
    <ConsentBanner v-if="showConsentBanner" />
  </div>
</template>

<style>
body {
  color-scheme: light;
}
</style>
