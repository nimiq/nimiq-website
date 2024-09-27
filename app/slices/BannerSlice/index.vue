<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { BannerSliceSliceDefaultItem } from '~~/prismicio-types'

const props = defineProps(getSliceComponentProps<Content.BannerSliceSlice>())
const sectionRef = useSection(props.slice.id, 'grey', { paddingX: false })

const { socialMedias, nimiqApps } = storeToRefs(useGlobalContent())

// @unocss-include

function getBackgroundItems(background: BannerSliceSliceDefaultItem['backgroundPattern']) {
  switch (background) {
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
      const apps = Object.values(nimiqApps.value || []).filter(({ logo }) => hasImage(logo))
      if (apps.length < 4)
        return []
      return apps.sort(() => Math.random() - 0.5).slice(0, 6).map(({ color, logo, linkHref, name }, i) => ({ color, icon: logo, link: linkHref, classes: `text-52 ${classesPositions[i]}`, name: name! }))
    }
    default : return []
  }
}

const items = computed(() => {
  return props.slice.items.map((item) => {
    const bgItems = getBackgroundItems(item.backgroundPattern).filter(i => i.link)
    return {
      bgItems,
      hasBgItems: bgItems.length > 0,
      ...item,
    }
  })
})
</script>

<template>
  <section ref="sectionRef" relative z-10 max-w="$nq-max-width" max-lg:px-32>
    <div v-for="({ headline, subline, bgItems, bgColor, backgroundPattern, label, linkHref, linkLabel, hasBgItems }, i) in items" :key="i" border="1 solid neutral-400" :style="`background: var(--nq-${bgColor || 'neutral'})`" :data-inverted="bgColor === 'green' ? '' : undefined" py="24 lg:72" relative w-full of-hidden rounded-8 px-32 shadow>
      <PrismicLink v-for="({ classes, color, icon, link, name }, j) in bgItems" :key="j" :aria-label="name" flex="~ items-center justify-center" :field="link" tabindex="-1" :style="{ backgroundColor: color }" :class="[classes]" pointer-cursor absolute size-104 rounded-full text-white>
        <div v-if="typeof icon === 'string'" :class="icon" pointer-events-none />
        <PrismicImage v-else :field="icon" pointer-events-none />
        <div :style="{ borderColor: color }" top="50%" left="50%" border="2 solid" translate-x="-50%" translate-y="-50%" pointer-events-none absolute size-full scale-100 rounded-full op-0 />
      </PrismicLink>
      <div v-if="bgColor === 'white'" class="curtain" pointer-events-none absolute inset-0 />

      <div v-if="backgroundPattern === 'Nimiq Hexagon'" text="200 md:300 lg:400" pointer-events-none absolute bottom="-10 lg:-0.2775em" right="-0.2em lg:-0.25em">
        <div i-nimiq:logos-nimiq-mono text-transparent>
          <div size-full bg-gradient="to-bl from-transparent via-transparent to-neutral/20" />
        </div>
      </div>

      <div relative z-10 max-w-full :class="{ 'lg:max-w-60ch items-center flex-col mx-auto w-max': hasBgItems, 'items-end w-full': !hasBgItems }" flex="~ wrap justify-between">
        <div max-w-60ch>
          <p v-if="label" text-12 nq-label nq-mb-32>
            {{ label }}
          </p>
          <PrismicRichText :field="headline" :class="{ 'md:text-center': backgroundPattern === 'Nimiq Apps' || backgroundPattern === 'Social Media' }" />
          <PrismicRichText nq-mt-32 :field="subline" :class="{ 'text-center': hasBgItems }" />
        </div>
        <PrismicLink v-if="hasLink(linkHref) && linkLabel" :field="linkHref" mt="32 md:24" text-blue nq-arrow nq-pill-lg nq-pill-tertiary :class="{ 'md:mx-auto': hasBgItems, 'lg:mr-128': !hasBgItems }">
          {{ linkLabel }}
        </PrismicLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.curtain {
  background: linear-gradient(180deg, rgb(var(--nq-neutral-0) / 0.1) 50%, rgb(var(--nq-neutral-0) / 0.5) 100%);
  box-shadow: inset 0px 0px 101.171px rgba(var(--nq-neutral-0) / 0.75);
}

a:hover div:last-child {
  animation: radar-pulse 1.2s ease-out infinite;
}

@keyframes radar-pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.95);
    border-width: 2px;
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    border-width: 0;
    opacity: 0;
  }
}
</style>
