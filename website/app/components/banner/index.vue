<script setup lang="ts">
import type { LinkField } from '@prismicio/client'
import type { BannerSliceSliceBannerWithBackgroundImagePrimary } from '~~/prismicio-types'

const props = defineProps<{
  title: string
  description?: string
  ctaLabel: string
  cta: LinkField
  background: BannerSliceSliceBannerWithBackgroundImagePrimary['background']
}>()

const { socialMedias, nimiqApps } = storeToRefs(useGlobalContent())

// @unocss-include

const items = computed(() => {
  switch (props.background) {
    case 'Social Media': {
      const classesPositions = [
        'bottom--40 right--30 md:right-88 md:bottom--44',
        'invisible md:visible md:right--18 md:bottom-50 lg:bottom-100 lg:right--32',
        'invisible md:visible md:left-88 md:bottom--52',
        'invisible md:visible md:left--36 md:bottom-42 lg:bottom-92',
      ]
      return [
        { ...socialMedias.value.youtube, name: 'Nimiq\'s YouTube', classes: `text-48 ${classesPositions[0]}` },
        { ...socialMedias.value.github, name: 'Nimiq \'s GitHub', classes: `text-60 ${classesPositions[1]}` },
        { ...socialMedias.value.x, name: 'Nimiq\'s X', classes: `text-54 ${classesPositions[2]}` },
        { ...socialMedias.value.telegram, name: 'Nimiq\'s Telegram', classes: `text-60 ${classesPositions[3]}` },
      ]
    }
    case 'Nimiq Apps': {
      const classesPositions = [
        'bottom--40 right--30 md:right-88 md:bottom--44 xl:right-180',
        'invisible md:visible md:right--18 md:bottom-50 lg:bottom-100 lg:right--32 xl:right-70 xl:bottom-60',
        'invisible md:visible md:left-88 md:bottom--52 xl:left-180',
        'invisible md:visible md:left--36 md:bottom-42 lg:bottom-92 xl:left-70 xl:bottom-60',
        'invisible xl:visible xl:bottom--40 xl:left--30',
        'invisible xl:visible xl:bottom--40 xl:right--30',
      ]
      const apps = Object.values(nimiqApps.value || []).filter(({ logo }) => Object.keys(logo).length > 0)
      if (apps.length < 4)
        return []
      return apps.sort(() => Math.random() - 0.5).slice(0, 6).map(({ color, logo, linkHref, name }, i) => ({ color, icon: logo, link: linkHref, classes: `text-52 ${classesPositions[i]}`, name: name! }))
    }
    default : return []
  }
})
</script>

<template>
  <div border="1 solid neutral-400" relative w-full of-hidden rounded-8 bg-neutral-0 px-32 py-72 shadow>
    <BannerBackground v-if="items.length > 0" :items />
    <div relative z-10 mx-auto max-w-full w-max lg:max-w-50ch md:max-w-40ch>
      <h2>{{ title }}</h2>
      <p v-if="description" mx-auto>
        {{ description }}
      </p>
      <PrismicLink v-if="ctaLabel && cta" :field="cta" nq-arrow nq-pill-lg nq-pill-blue md:mx-auto mt="32 md:24">
        {{ ctaLabel }}
      </PrismicLink>
    </div>
  </div>
</template>
