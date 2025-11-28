<script setup lang="ts">
const { darkHeader = false, footerBgColor = 'grey', draft } = defineProps<{ darkHeader?: boolean, footerBgColor?: 'white' | 'grey' | 'darkblue', draft?: boolean, showSocialsHexagonBg?: boolean }>()
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <NuxtRouteAnnouncer />
  <NavigationAnnouncementBanner />
  <NavigationHeader :dark-header />
  <slot />
  <div bottom-20 right-20 fixed z-102>
    <PageInfo :draft with-env />
  </div>
  <HexagonsBackground z-1 :bg-color="footerBgColor" :with-socials="showSocialsHexagonBg" />
  <NavigationFooter :bg-color="footerBgColor" />
</template>
