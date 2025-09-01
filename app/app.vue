<script setup lang="ts">
const { useNuxtHub, environment, enableDevAnalytics } = useRuntimeConfig().public
const showConsentBanner = environment.isProduction || enableDevAnalytics
</script>

<template>
  <div v-if="useNuxtHub">
    <NuxtPage />
    <ConsentBanner v-if="showConsentBanner" />
  </div>
  <div v-else nq-prose-compact mx-auto rounded-12 bg-neutral-0 max-w-520 shadow f-m-lg f-p-sm>
    <div flex="~ gap-8 items-center" f-text-lg>
      <div i-nimiq:info />
      <h1 f-text-lg>
        Server Preview
      </h1>
    </div>
    <p f-mt-xs>
      This is a limited environment for previewing.
    </p>
    <p inline f-mt-2xs>
      Please visit
      <NuxtLink to="https://nimiq.com" target="_blank" flex="~ gap-4 items-center" external ml-2 inline-flex>
        <div size-14 i-nimiq:logos-nimiq />
        nimiq.com
      </NuxtLink> for the website or <NuxtLink
        to="https://github.com/nimiq/nimiq-website" external ml-2 inline-flex
        target="_blank" flex="~ gap-4 items-center"
      >
        <div size-14 i-nimiq:logos-github />GitHub
      </NuxtLink> for the code.
    </p>
  </div>
</template>

<style>
body {
  color-scheme: light;
}
</style>
