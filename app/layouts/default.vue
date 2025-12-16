<script setup lang="ts">
const { darkHeader = false, footerBgColor = 'grey' } = defineProps<{ darkHeader?: boolean, showSocialsHexagonBg?: boolean, footerBgColor?: 'grey' | 'darkblue' }>()
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <NuxtRouteAnnouncer />
  <AppNavigationAnnouncementBanner />
  <AppHeader :dark-header />
  <main id="main-content">
    <slot />
  </main>
  <div bottom-20 right-20 fixed z-102>
    <AppPageInfo with-env />
  </div>
  <AppHexagonsBackground z-1 :with-socials="showSocialsHexagonBg" :bg-color="footerBgColor" />
  <AppFooter :bg-color="footerBgColor" />
</template>
