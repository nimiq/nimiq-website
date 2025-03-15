<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { BannerSliceSliceDefaultItem } from '~~/prismicio-types'

const props = defineProps(getSliceComponentProps<Content.BannerSliceSlice>())

const { data: socialMedias } = await useSocialMedias()
const { getRandomApps } = useApps()

// @unocss-include

const classesPositions = [
  'bottom--40 right--30 md:right-88 md:bottom--44 xl:right-180',
  'invisible md:visible md:right--18 md:bottom-50 lg:bottom-100 lg:right--32 xl:right-70 xl:bottom-60',
  'invisible md:visible md:left-88 md:bottom--52 xl:left-180',
  'invisible md:visible md:left--36 md:bottom-42 lg:bottom-92 xl:left-70 xl:bottom-60',
  'invisible xl:visible xl:bottom--40 xl:left--30',
  'invisible xl:visible xl:bottom--40 xl:right--30',
]

function getBackgroundItems(background: BannerSliceSliceDefaultItem['backgroundPattern']) {
  switch (background) {
    case 'Social Media': {
      return [
        { ...socialMedias.value.youtube, name: 'Nimiq\'s YouTube', classes: `text-48 ${classesPositions[0]}` },
        { ...socialMedias.value.github, name: 'Nimiq \'s GitHub', classes: `text-60 ${classesPositions[1]}` },
        { ...socialMedias.value.x, name: 'Nimiq\'s X', classes: `text-54 ${classesPositions[2]}` },
        { ...socialMedias.value.telegram, name: 'Nimiq\'s Telegram', classes: `text-40 children:translate-y-3 children:translate-x--4 ${classesPositions[3]}` },
        { ...socialMedias.value.instagram, name: 'Nimiq\'s Instagram', classes: `text-60 ${classesPositions[4]}` },
        { ...socialMedias.value.facebook, name: 'Nimiq\'s Instagram', classes: `text-60 ${classesPositions[5]}` },
      ]
    }
    case 'Nimiq Apps': {
      return getRandomApps(6).value.map(({ color, logo, linkHref, name }, i) => ({ color, icon: logo, link: linkHref, classes: classesPositions[i], name: name! }))
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
  <section nq-overlaps relative z-10 bg-neutral-0 :class="{ 'pb-0': slice.variation !== 'default' }" data-slice-type="banner">
    <template v-if="slice.variation === 'default'">
      <div v-for="({ headline, subline, bgItems, bgColor, backgroundPattern, label, linkHref, linkLabel, hasBgItems }, i) in items" :key="i" border="1 solid neutral-400" :style="`background: var(--nq-${bgColor || 'neutral'})`" :data-inverted="bgColor === 'green' ? '' : undefined" py="24 lg:72" relative mx-auto w-full of-hidden rounded-8 px-32 shadow>
        <PrismicLink v-for="({ classes, color, icon, link, name }, j) in bgItems" :key="j" internal-component="a" :aria-label="name" flex="~ items-center justify-center" :field="link" tabindex="-1" :style="{ backgroundColor: color }" :class="[classes]" pointer-cursor absolute size-104 rounded-full text-white>
          <div v-if="typeof icon === 'string'" :class="icon" pointer-events-none />
          <PrismicImage v-else :field="icon" pointer-events-none scale-125 />
          <div :style="{ borderColor: color }" top="50%" left="50%" border="2 solid" translate-x="-50%" translate-y="-50%" pointer-events-none absolute size-full scale-100 rounded-full op-0 />
        </PrismicLink>
        <div v-if="bgColor === 'white'" class="curtain" pointer-events-none absolute inset-0 />
        <div v-else-if="bgColor === 'green'" pointer-events-none absolute inset-0 bg-gradient-green />

        <div v-if="backgroundPattern === 'Nimiq Hexagon'" text="200 md:300 lg:400" pointer-events-none absolute bottom="-10 lg:-0.2775em" right="-0.2em lg:-0.25em">
          <div i-nimiq:logos-nimiq-mono text-transparent>
            <div size-full bg-gradient="to-bl from-transparent via-transparent to-neutral/20" />
          </div>
        </div>

        <div relative z-10 max-w-full :class="{ 'lg:max-w-60ch md:items-center flex-col md:mx-auto w-max': hasBgItems, 'items-end w-full': !hasBgItems }" flex="~ wrap justify-between">
          <div max-w-60ch>
            <p v-if="label" text-12 :class="{ 'f-mt-md': bgColor !== 'green', 'f-mt-xs': bgColor === 'green' }" nq-label>
              {{ label }}
            </p>
            <RichText wrapper="div" :field="headline" :class="{ 'md:text-center': backgroundPattern === 'Nimiq Apps' || backgroundPattern === 'Social Media', 'children:!text-white': bgColor === 'green' }" />
            <RichText wrapper="div" :field="subline" :class="{ 'md:text-center f-mt-xs': hasBgItems, 'f-mt-md': !hasBgItems && bgColor !== 'green', 'children:text-white/70 f-mt-sm': bgColor === 'green' }" />
          </div>
          <PrismicLink v-if="hasLink(linkHref) && linkLabel" internal-component="a" :field="linkHref" mt="32 md:24" nq-arrow nq-pill-lg :class="{ 'md:mx-auto nq-pill-blue': hasBgItems, 'lg:mr-128 nq-pill-tertiary text-blue': !hasBgItems }">
            {{ linkLabel }}
          </PrismicLink>
        </div>
      </div>
    </template>
    <div v-else-if="slice.variation === 'staking'" w-full>
      <div absolute inset-0 size-full of-hidden>
        <AnimatedCircleRipple absolute bottom--300 left--5vw size-110vw max-w-none />
        <div absolute inset-x-0 top-0 h-200 bg-gradient="to-b from-neutral-0 to-transparent" />
        <div absolute inset-x-0 bottom-0 h-200 bg-gradient="to-b from-transparent to-green" />
      </div>
      <div grid="~ cols-1 lg:cols-[1fr_max-content] gap-x-32 lg:flow-col" ring="1.5 neutral-300" p="y-64 x-32 md:x-64 lg:72" relative gap-x-24 rounded-8 bg-neutral-0 shadow>
        <RichText wrapper="div" :field="slice.primary.headline" text="f-4xl neutral" nq-raw max-w-24ch font-bold />
        <PrismicLink :field="slice.primary.cta" nq-arrow nq-pill-lg nq-pill-blue f-mt-md />
        <ul flex="~ col gap-12 md:gap-16 lg:gap-24" mt-40 lg:row-span-2 lg:mt-0>
          <li v-for="({ description, icon }, i) in slice.primary.requirements" :key="i" flex="~ gap-12 items-center">
            <div size-32 rounded-full bg-green flex="~ items-center justify-center">
              <div :class="[icon!, { 'bottom--2': icon === 'i-nimiq:document-filled' }]" text="18 white" relative shrink-0 />
            </div>
            <p>{{ description }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div v-else-if="slice.variation === 'buyAndSell'" grid="~ cols-1 lg:cols-[1fr_max-content] gap-x-32 lg:flow-col" ring="1.5 neutral-300" p="y-64 x-32 md:x-64 lg:72" relative w-full gap-x-24 rounded-8 bg-neutral-0 shadow>
      <RichText wrapper="div" :field="slice.primary.headline" text="44 neutral" nq-raw max-w-24ch font-bold />
      <PrismicLink :field="slice.primary.cta" nq-arrow nq-pill-lg nq-pill-blue f-mt-md />
      <ul flex="~ col gap-12 md:gap-16 lg:gap-24" mt-40 lg:row-span-2 lg:mt-0>
        <li v-for="({ description, icon }, i) in slice.primary.features" :key="i" flex="~ gap-12 items-center">
          <div size-32 rounded-full bg-gold flex="~ items-center justify-center">
            <div :class="[icon!, { 'bottom--2': icon === 'i-nimiq:document-filled' }]" text="18 white" relative shrink-0 />
          </div>
          <p>{{ description }}</p>
        </li>
      </ul>
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
