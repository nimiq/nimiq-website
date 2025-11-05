<script setup lang="ts">
import type { ImageField, LinkField, RichTextField } from '@prismicio/client'

interface BannerSlice { primary: { cta: LinkField, draft: string | undefined, features: any[], headline: RichTextField, icon: string | undefined, image: ImageField, label: string | undefined, link: LinkField, requirements: any[], subline: RichTextField }, items: any[], variation?: string }

const props = defineProps<{ slice: BannerSlice, slices?: any[], context?: any }>()

const { showDrafts } = useRuntimeConfig().public
const showBanner = computed(() => {
  if (props.slice.variation !== 'withRibbon')
    return true; return props.slice.primary.draft && showDrafts
})

// @unocss-include
const classesPositions = ['bottom--40 right--30 md:right-88 md:bottom--44 xl:right-180', 'invisible md:visible md:right--18 md:bottom-50 lg:bottom-100 lg:right--32 xl:right-70 xl:bottom-60', 'invisible md:visible md:left-88 md:bottom--52 xl:left-180', 'invisible md:visible md:left--36 md:bottom-42 lg:bottom-92 xl:left-70 xl:bottom-60', 'invisible xl:visible xl:bottom--40 xl:left--30', 'invisible xl:visible xl:bottom--40 xl:right--30']

async function getBackgroundItems(background: any) {
  switch (background) {
    case 'Social Media': {
      const { data: socialMedias } = await useSocialMedias()
      if (!socialMedias.value)
        return []
      return [{ ...socialMedias.value.youtube, name: 'Nimiq\'s YouTube', classes: `text-48 ${classesPositions[0]}` }, { ...socialMedias.value.github, name: 'Nimiq \'s GitHub', classes: `text-60 ${classesPositions[1]}` }, { ...socialMedias.value.x, name: 'Nimiq\'s X', classes: `text-54 ${classesPositions[2]}` }, { ...socialMedias.value.telegram, name: 'Nimiq\'s Telegram', classes: `text-40 children:translate-y-3 children:translate-x--4 ${classesPositions[3]}` }, { ...socialMedias.value.instagram, name: 'Nimiq\'s Instagram', classes: `text-60 ${classesPositions[4]}` }, { ...socialMedias.value.facebook, name: 'Nimiq\'s Instagram', classes: `text-60 ${classesPositions[5]}` }]
    }
    case 'Nimiq Apps': {
      const { data: apps } = await useApps()
      const randomApps = apps.value?.communityApps.sort(() => Math.random() - 0.5).slice(0, 6)
      return randomApps.map(({ color, logo, link: linkStr, name }, i) => { const link: any = { link_type: 'Web', url: linkStr, target: '_blank' }; return { color, icon: logo, classes: classesPositions[i], name: name!, link } })
    }
    default: return []
  }
}

const items = (await Promise.all(props.slice.items.map(async (item: any) => {
  if (props.slice.variation === 'withRibbon')
    return undefined; const bgItems = (await getBackgroundItems(item.backgroundPattern)).filter(i => i.link); if (!item.link)
    throw new Error(`Link is required in Banner. Context: ${JSON.stringify(props.context)}`); return { bgItems, hasBgItems: bgItems.length > 0, ...item }
}))).filter((item): item is NonNullable<typeof item> => item !== undefined)
</script>

<template>
  <section v-if="showBanner" nq-overlaps bg-neutral-0 relative z-10 of-x-clip :class="{ 'pb-0': slice.variation !== 'default', 'px-8 [--pt:0]': slice.variation === 'withRibbon' }" data-slice-type="banner">
    <BannerDefault v-if="slice.variation === 'default'" :items="items" />
    <BannerStaking v-else-if="slice.variation === 'staking'" :headline="slice.primary.headline" :cta="slice.primary.cta" :requirements="slice.primary.requirements" />
    <BannerBuyAndSell v-else-if="slice.variation === 'buyAndSell'" :headline="slice.primary.headline" :cta="slice.primary.cta" :features="slice.primary.features" />
    <BannerWithRibbon v-else-if="slice.variation === 'withRibbon'" :icon="slice.primary.icon" :label="slice.primary.label" :headline="slice.primary.headline" :subline="slice.primary.subline" :link="slice.primary.link" :image="slice.primary.image" />
  </section>
</template>
