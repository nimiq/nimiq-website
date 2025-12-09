<script setup lang="ts">
const { darkHeader = false, draft } = defineProps<{ darkHeader?: boolean, draft?: boolean, showSocialsHexagonBg?: boolean }>()
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <NuxtRouteAnnouncer />
  <AppNavigationAnnouncementBanner />
  <AppHeader :dark-header />
  <slot />
  <div bottom-20 right-20 fixed z-102>
    <AppPageInfo :draft with-env />
  </div>
  <AppHexagonsBackground z-1 :with-socials="showSocialsHexagonBg" />
  <AppFooter />
</template>
