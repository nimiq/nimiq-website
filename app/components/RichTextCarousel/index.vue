<script setup lang="ts">
interface TextCarouselItem { slide?: string }
interface TabCarouselItem { slide?: string, key?: string, buttonLogo?: string, content?: string, comingSoon?: boolean, comingSoonLabel?: string }

const props = defineProps<{
  content?: string
  items?: TextCarouselItem[] | TabCarouselItem[]
  variation?: 'default' | 'withTabs'
}>()

const images = computed(() => (props.items as TextCarouselItem[])?.map(i => i.slide).filter((s): s is string => Boolean(s)) || [])
</script>

<template>
  <RichTextCarouselDefault v-if="variation === 'default' && content" :content="content" :images />
  <RichTextCarouselWithTabs v-else-if="variation === 'withTabs' && items" :items="items as TabCarouselItem[]" />
</template>
