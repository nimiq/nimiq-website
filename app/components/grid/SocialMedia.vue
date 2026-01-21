<script setup lang="ts">
interface SocialMediaItem { category: string, socialMedia: string, socialMediaItem?: string }
interface Props {
  newsAndAnnouncementsLabel?: string
  discussionsAndSupportLabel?: string
  cultureAndInsightsLabel?: string
  showLabels?: boolean
  items: SocialMediaItem[]
}

const { newsAndAnnouncementsLabel = '', discussionsAndSupportLabel = '', cultureAndInsightsLabel = '', showLabels, items } = defineProps<Props>()

const { data: site } = await useAsyncData('site', () => queryCollection('site').first())

const socialMediaMap: Record<string, string> = { twitter: 'x', nimiq_forum: 'nimiqForum' }

function getSocialById(id: string) {
  const mappedId = socialMediaMap[id] || id
  const social = site.value?.socials?.find(s => s.id === mappedId)
  if (!social)
    return social
  // Contact grid shows lowercase labels for some socials, keeps proper case for others
  const lowercaseIds = ['reddit', 'facebook', 'telegram', 'youtube', 'discord', 'instagram']
  let label = social.label
  if (lowercaseIds.includes(mappedId)) {
    label = social.label.toLowerCase()
  }
  else if (mappedId === 'nimiqForum') {
    // Special case: nimiqForum should have lowercase 'n' in contact grid
    label = 'nimiqForum'
  }
  return { ...social, label }
}

function filterDefined<T>(arr: (T | undefined | null)[]): T[] {
  return arr.filter((x): x is T => x != null)
}

const columns = computed(() => [
  { label: newsAndAnnouncementsLabel, items: filterDefined(items.filter(i => i.category === 'NEWS & ANNOUNCEMENTS').map(i => getSocialById(i.socialMedia))) },
  { label: discussionsAndSupportLabel, items: filterDefined(items.filter(i => i.category === 'DISCUSSIONS & SUPPORT').map(i => getSocialById(i.socialMedia))) },
  { label: cultureAndInsightsLabel, items: filterDefined(items.filter(i => i.category === 'CULTURE & INSIGHTS').map(i => getSocialById(i.socialMedia))) },
])
</script>

<template>
  <ul class="grid grid-cols-1 grid-md:cols-3 gap-x-2 grid-lg:gap-x-4 gap-y-6 bg-neutral-100 w-full">
    <li v-for="(column, i) in columns.filter(c => c.items.length)" :key="i" class="flex flex-col flex-md:items-center">
      <span v-if="showLabels" class="text-12 text-md:14 text-neutral-700 nq-label">{{ column.label }}</span>
      <div class="w-full f-mt-md flex flex-col gap-y-2 flex-lg:gap-y-4">
        <NuxtLink v-for="(social, j) in column.items" :key="j" class="hocus:text-white hocus:var:nq-gradient-from:$c hocus:var:nq-gradient-to:$c flex flex-row flex-items-center gap-6 group nq-hoverable" :to="social.link" external target="_blank" :style="`--c:${social.color}`">
          <Icon class="size-8 md:size-10" :name="social.icon" />
          <span class="f-text-lg">{{ social.label }}</span>
        </NuxtLink>
      </div>
    </li>
  </ul>
</template>

<style scoped>
[nq-hoverable] {
  &:hover,
  &:focus-visible {
    &::before {
      background-image: none;
      background: var(--c);
    }
  }
}
</style>
