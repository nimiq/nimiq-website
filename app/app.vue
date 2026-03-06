<script setup lang="ts">
const { environment } = useSafeRuntimeConfig().public
// Disabled for visual testing - prod shows banner but user accepts it
const showConsentBanner = environment.isProduction
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
