<script setup lang="ts">
const { environment, enableDevAnalytics } = useRuntimeConfig().public
const showConsentBanner = environment.isProduction || enableDevAnalytics
</script>

<template>
  <NuxtPage />
  <AppConsentBanner v-if="showConsentBanner" />
</template>

<style>
body {
  color-scheme: light;
}
</style>
