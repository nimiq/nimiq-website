<script setup lang="ts">
const props = defineProps<{ items: (keyof typeof SocialMedia)[] }>()

const { socialMedias } = storeToRefs(useGlobalContent())
const socialMediasToShow = computed(() => {
  return props.items.map(p => socialMedias.value[p]).filter(Boolean)
})

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
</script>

<template>
  <ul v-if="socialMediasToShow?.length > 0" role="list" flex="~ items-center gap-2 wrap" text-neutral-700>
    <li v-for="({ platform, icon, link }) in socialMediasToShow || []" :key="platform || '123'" self-stretch justify-self-stretch aria-label="Links to some of our social media pages">
      <PrismicLink internal-component="a" :title="capitalize(platform!)" :field="link" focusable h-max flex rounded-4 p-8 bg="hocus:darkblue/6" :aria-label="`Visit Nimiq on ${platform}`">
        <div :class="icon" />
      </PrismicLink>
    </li>
  </ul>
</template>
