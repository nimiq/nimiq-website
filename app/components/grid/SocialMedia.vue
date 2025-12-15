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
  return site.value?.socials?.find(s => s.id === mappedId)
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
  <ul grid="~ cols-1 md:cols-3 gap-x-8 lg:gap-x-16 gap-y-24" bg-neutral-100 w-full>
    <li v-for="(column, i) in columns.filter(c => c.items.length)" :key="i" flex="~ col md:items-center">
      <span v-if="showLabels" text="12 md:14 neutral-700" nq-label>{{ column.label }}</span>
      <div w-full f-mt-md flex="~ col gap-y-8 lg:gap-y-16">
        <NuxtLink v-for="(social, j) in column.items" :key="j" :to="social.link" external target="_blank" flex="~ row items-center gap-24" :style="`--c:${social.color}`" group nq-hoverable class="hocus:text-white hocus:var:nq-gradient-from:$c hocus:var:nq-gradient-to:$c">
          <Icon :name="social.icon" class="size-32 md:size-40" />
          <span capitalize f-text-lg>{{ social.label }}</span>
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
