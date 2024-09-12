<script setup lang="ts">
const props = defineProps<{ items: (keyof typeof SocialMedia)[] }>()

const { socialMedias } = storeToRefs(useGlobalContent())
const socialMediasToShow = computed(() => props.items.map(p => socialMedias.value[p]))
</script>

<template>
  <ul v-if="socialMediasToShow.length > 0" role="list" flex="~ items-center gap-2 wrap">
    <li v-for="({ platform, icon, link }) in socialMediasToShow" :key="platform!" self-stretch justify-self-stretch aria-label="Links to some of our social media pages">
      <PrismicLink :field="link" un-text="18 neutral-700 hocus:neutral-800" h-max flex rounded-4 p-8 focusable hocus:bg-neutral-200 :aria-label="`Visit Nimiq on ${platform}`">
        <div :class="icon" text-18 />
      </PrismicLink>
    </li>
  </ul>
</template>
