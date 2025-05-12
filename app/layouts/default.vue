<script setup lang="ts">
const { darkHeader = false, footerBgColor = 'grey', draft } = defineProps<{ darkHeader?: boolean, footerBgColor?: 'white' | 'grey' | 'darkblue', draft?: boolean, showSocialsHexagonBg?: boolean }>()

const { data: navigation } = await useNavigation()
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <NuxtRouteAnnouncer />
  <NavigationAnnouncementBanner v-if="navigation!.announcementBannerShow" v-bind="navigation!" />
  <NavigationHeader :dark-header />
  <slot />
  <div fixed bottom-20 right-20 z-102>
    <PageInfo :draft with-env />
  </div>
  <HexagonsBackground z-1 :bg-color="footerBgColor" :with-socials="showSocialsHexagonBg" />
  <NavigationFooter :bg-color="footerBgColor" />
</template>
