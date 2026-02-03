<script setup lang="ts">
const { darkHeader = false, footerBgColor = 'grey' } = defineProps<{ darkHeader?: boolean, showSocialsHexagonBg?: boolean, footerBgColor?: 'grey' | 'darkblue' }>()
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <NuxtRouteAnnouncer />
  <AppNavigationAnnouncementBanner />
  <AppHeader :dark-header />
  <main id="main-content">
    <slot />
  </main>
  <div v-if="false" class="bottom-5 right-5 fixed z-102">
    <AppPageInfo with-env />
  </div>
  <AppHexagonsBackground class="z-1" :with-socials="showSocialsHexagonBg" :bg-color="footerBgColor" />
  <AppFooter :bg-color="footerBgColor" />
</template>
