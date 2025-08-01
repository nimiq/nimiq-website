<script setup lang="ts">
import type { Content, FilledContentRelationshipField } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.SocialMediaGridSlice>())

const bgColor = getColorClass(props.slice.primary.bgColor || 'grey')

const { data: socialMedias } = await useSocialMedias()
const getSocialMediaById = (id: string) => Object.values(socialMedias.value).find(socialMedia => socialMedia.id === id)

const columns = [
  {
    label: props.slice.primary.newsAndAnnouncementsLabel || '',
    items: props.slice.items
      .filter(i => i.category === 'NEWS & ANNOUNCEMENTS')
      .map(i => (i.socialMediaItem as FilledContentRelationshipField<'socialMedia'>).id)
      .map(getSocialMediaById)
      .filter(Boolean),
  },
  {
    label: props.slice.primary.discussionsAndSupportLabel || '',
    items: props.slice.items
      .filter(i => i.category === 'DISCUSSIONS & SUPPORT')
      .map(i => (i.socialMediaItem as FilledContentRelationshipField<'socialMedia'>).id)
      .map(getSocialMediaById)
      .filter(Boolean),
  },
  {
    label: props.slice.primary.cultureAndInsightsLabel || '',
    items: props.slice.items
      .filter(i => i.category === 'CULTURE & INSIGHTS')
      .map(i => (i.socialMediaItem as FilledContentRelationshipField<'socialMedia'>).id)
      .map(getSocialMediaById)
      .filter(Boolean),
  },
] as { label: string, items: SocialMediaAttributes[] }[]
</script>

<template>
  <section :class="bgColor">
    <ul grid="~ cols-1 md:cols-3 gap-x-8 lg:gap-x-16 gap-y-24" w-full>
      <li v-for="(column, i) in columns.filter(c => c.items)" :key="i" flex="~ col md:items-center">
        <span v-if="slice.primary.showLabels" text="12 md:14 neutral-700" nq-label>{{ column.label }}</span>
        <div w-full f-mt-md flex="~ col gap-y-8 lg:gap-y-16">
          <PrismicLink v-for="({ link, color, icon, platform }, j) in column.items" :key="j" internal-component="a" :field="link" flex="~ row items-center gap-24" :style="`--c:${color}`" bg="neutral-300 hocus:$c" style=" transition: background 300ms ease-out,transform 200ms ease-out, box-shadow 200ms ease-out, color 200ms ease-out;" group bg-none="!" nq-hoverable hocus:text-white>
            <div :class="icon" size="32 md:40" style="--un-scale-x: 1;--un-scale-y:1" />
            <span capitalize f-text-lg>{{ platform }}</span>
          </PrismicLink>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section [nq-hoverable] {
  &:hover,
  &:focus-visible {
    &::before {
      background-image: none;
      background: var(--c);
    }
  }
}
</style>
