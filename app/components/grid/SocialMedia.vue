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

const site = await useSite()

// Map from content IDs to site.yaml social IDs
const socialMediaMap: Record<string, string> = { nimiq_forum: 'forum', twitter: 'x' }

function getSocialById(id: string) {
  const mappedId = socialMediaMap[id] || id
  const social = site.socials?.find(s => s.id === mappedId)
  if (!social)
    return social
  // Contact grid displays platform names - capitalize for display
  // Special case: forum should display as "NimiqForum" in contact grid
  const label = mappedId === 'forum' ? 'NimiqForum' : social.label
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
  <ul class="grid grid-cols-1 md:grid-cols-3 gap-x-[8px] lg:gap-x-16 gap-y-24 w-full">
    <li v-for="(column, i) in columns.filter(c => c.items.length)" :key="i" class="flex flex-col md:items-center">
      <span v-if="showLabels" class="social-label text-12 md:text-14 text-neutral-700 nq-label">{{ column.label }}</span>
      <div class="w-full f-mt-md flex flex-col gap-y-[8px] lg:gap-y-16">
        <NuxtLink v-for="(social, j) in column.items" :key="j" class="social-link group nq-hoverable" :to="social.link" external target="_blank" :style="`--social-color:${social.color}`">
          <Icon class="!size-32 md:!size-40" :name="social.icon" />
          <span class="capitalize f-text-lg">{{ social.label }}</span>
        </NuxtLink>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.social-label {
  display: block;
  width: 100%;
}

@media (min-width: 768px) {
  .social-label {
    min-height: 2.4em;
  }
}

.social-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  /* match color timing to gradient (300ms) so text doesn't turn white before bg is colored */
  transition:
    --nq-gradient-from 300ms var(--nq-ease),
    --nq-gradient-to 300ms var(--nq-ease),
    transform 200ms ease-out,
    box-shadow 200ms ease-out,
    color 300ms var(--nq-ease),
    outline-color 200ms ease-out;
}

.social-link:hover,
.social-link:focus-visible {
  color: white;
  --nq-gradient-from: var(--social-color);
  --nq-gradient-to: var(--social-color);
}
</style>
