<script setup lang="ts">
const { environment, enableDevAnalytics } = useRuntimeConfig().public
const showConsentBanner = environment.isProduction || enableDevAnalytics
</script>

<template>
  <div v-if="!environment.isNuxthubPreview && !environment.isNuxthubPreview">
    ">
    <NuxtPage />
    <ConsentBanner v-if="true || showConsentBanner" />
  </div>
  <div v-else>
    This is a limited environment for previewing Nuxthub. Please visit
    <NuxtLink href="https://nimiq.com" target="_blank" class="underline">
      nimiq.com
    </NuxtLink> for the full experience.
  </div>
</template>

<style>
body {
  color-scheme: light;
}
</style>
