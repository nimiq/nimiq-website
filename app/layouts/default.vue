<script setup lang="ts">
const { darkHeader = false, footerBgColor = 'grey', draft } = defineProps<{ darkHeader: boolean, footerBgColor?: 'white' | 'grey' | 'darkblue', draft?: boolean }>()

const { navigation } = storeToRefs(useGlobalContent())
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <NavigationAnnouncementBanner v-if="navigation?.announcementBannerShow" v-bind="navigation" />
  <NavigationHeader :dark-header />
  <NuxtRouteAnnouncer />
  <slot />
  <div fixed bottom-32 right-32 z-102>
    <LockBadge v-if="draft" />
  </div>
  <HexagonsBackground z-1 class="hexagon-bg" :bg-color="footerBgColor" />
  <NavigationFooter :bg-color="footerBgColor" />
</template>
