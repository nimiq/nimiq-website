<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

const { apps } = defineProps<{ apps: AppItem[], banner?: { items: BannerItem[] } }>()
const bannerPositions = ['bottom--40 right--30 md:right-88 md:bottom--44 xl:right-180', 'invisible md:visible md:right--18 md:bottom-50 lg:bottom-100 lg:right--32 xl:right-70 xl:bottom-60', 'invisible md:visible md:left-88 md:bottom--52 xl:left-180', 'invisible md:visible md:left--36 md:bottom-42 lg:bottom-92 xl:left-70 xl:bottom-60', 'invisible xl:visible xl:bottom--40 xl:left--30', 'invisible xl:visible xl:bottom--40 xl:right--30']
const bannerLogoClasses: Record<string, string> = { 'NimWorld': 'filter-brightness-0 filter-invert scale-75', 'Trust Wallet': 'scale-150' }

interface AppItem { highlight?: boolean, title: string, description: string, preview: string, item: string, link: string }
interface BannerItem { headline: string, subline?: string, link?: string }

const highlightedApps = computed(() => apps.filter(app => app.highlight))
const regularApps = computed(() => apps.filter(app => !app.highlight))

const [DefineSmallCard, SmallCard] = createReusableTemplate<{ app: AppItem }>()
const [DefineLargeCard, LargeCard] = createReusableTemplate<{ app: AppItem }>()

// BannerViewAllApps - load community apps for background (developer !== '@nimiq')
const { data: appsData } = await useApps()
const bgApps = ref<Array<{ name: string, type: string, logo: string, link: string, color: string, classes: string }>>([])
onMounted(() => {
  if (!appsData.value?.communityApps)
    return
  bgApps.value = shuffle(appsData.value.communityApps).slice(0, 6).map((app, i) => ({ ...app, classes: bannerPositions[i]! }))
})
</script>

<template>
  <!-- Define small card template -->
  <DefineSmallCard v-slot="{ app }">
    <NuxtLink class="outline-solid outline-1.5 outline-neutral-300 p-32 p-md:40 p-lg:48 p-b-0! rounded-8 of-hidden grid grid-gap-x-48 grid-lg:gap-x-80 grid-md:rows-[auto_auto_1fr] grid-md:cols-[221px_1fr] grid-lg:rows-[repeat(4,auto)] grid-lg:cols-1" :to="app.link">
      <!-- Icon -->
      <div v-if="app.item === 'Nimiq Pay'" class="size-48 size-lg:56 rounded-12 bg-gradient-gold grid grid-place-content-center lg:mx-auto">
        <Icon class="text-32 text-[#ededee]" name="nimiq:logos-nimiq-pay-vertical-mono" />
      </div>
      <Icon v-else-if="app.item === 'CPL'" class="size-48 lg:mx-auto lg:size-56" name="nimiq:logos-cpl-tag" />

      <!-- Title -->
      <h3 class="text-22/28.6 text-lg:28/36.4 font-semibold mt-16 lg:text-center">
        {{ app.title }}
      </h3>

      <!-- Description -->
      <p class="mt-12 max-w-28ch lg:mx-auto text-16/24 text-md:17/25.5 text-lg:18/28 text-neutral-800 lg:text-center">
        {{ app.description }}
      </p>

      <!-- Mobile arrow -->
      <div class="grid grid-place-content-center mb-32 rounded-full bg-gradient-blue size-32 max-md:mt-12 md:hidden">
        <Icon class="text-9 text-white" name="nimiq:chevron-right" />
      </div>

      <!-- Preview image -->
      <div
        class="h-196 md:mx-auto lg:mt-40 lg:row-span-1 md:row-span-full lg:col-start-1 md:col-start-2" :class="{
          'max-md:mr--128 md:ml-16': app.item === 'CPL',
          'md:max-w-245': app.item === 'Nimiq Pay',
        }"
      >
        <NuxtImg :src="app.preview" :alt="app.title" />
      </div>
    </NuxtLink>
  </DefineSmallCard>

  <!-- Define large card template -->
  <DefineLargeCard v-slot="{ app }">
    <NuxtLink class="outline-solid outline-1.5 outline-neutral-300 p-32 p-md:40 p-lg:48 p-b-0! grid grid-gap-x-48 grid-lg:gap-x-80 grid-md:rows-[auto_auto_1fr] grid-md:cols-[221px_1fr] rounded-8 w-full of-hidden" :to="app.link">
      <!-- Icon -->
      <Icon v-if="app.item === 'Nimiq Wallet'" class="text-56 lg:ml-24" name="nimiq:logos-nimiq" />
      <Icon v-else-if="app.item === 'Multisig Wallet'" class="text-56 lg:ml-24" name="nimiq:logos-multisig" />

      <!-- Title -->
      <h3 class="text-22/28.6 text-lg:28/36.4 font-semibold mt-16 text-left lg:ml-24">
        {{ app.title }}
      </h3>

      <!-- Description -->
      <p class="mt-12 max-w-28ch text-16/24 text-md:17/25.5 text-lg:18/28 text-neutral-800 lg:ml-24">
        {{ app.description }}
      </p>

      <!-- Mobile arrow -->
      <div class="grid grid-place-content-center mb-32 rounded-full bg-gradient-blue size-32 max-md:mt-12 md:hidden">
        <Icon class="text-9 text-white" name="nimiq:chevron-right" />
      </div>

      <!-- Preview image -->
      <div class="h-196 lg:mb--120 lg:ml-auto md:row-span-full md:col-start-2 lg:h-490 lg:w-640" :class="{ 'max-md:mr--128 mr--128': app.item === 'Nimiq Wallet' || app.item === 'Multisig Wallet' }">
        <NuxtImg :src="app.preview" :alt="app.title" :class="{ 'max-xl:scale-155 scale-120 max-xl:transform-origin-top-left bottom--32 relative': app.item === 'Nimiq Wallet' || app.item === 'Multisig Wallet' }" />
      </div>
    </NuxtLink>
  </DefineLargeCard>

  <!-- Grid with apps and banner -->
  <ul class="grid grid-cols-1 grid-lg:cols-2 grid-gap-20 grid-md:gap-22 f-px-sm">
    <!-- Regular apps (small cards) -->
    <li v-for="app in regularApps" :key="app.item" class="bg-neutral-300 bg-hocus:neutral-0 p-0 of-initial isolate nq-hoverable" style="--ring-color: transparent">
      <SmallCard :app />
    </li>

    <!-- Highlighted apps (large cards) -->
    <li v-for="app in highlightedApps" :key="app.item" class="bg-neutral-300 bg-hocus:neutral-0 p-0 of-initial isolate nq-hoverable lg:col-span-full" style="--ring-color: transparent">
      <UiRibbonContainer v-if="app.item === 'Multisig Wallet'" color="purple" label="New Release" icon="nimiq:verified-filled" var:top:25px>
        <LargeCard :app />
      </UiRibbonContainer>
      <LargeCard v-else :app />
    </li>

    <!-- Banner card (full width) - BannerViewAllApps inlined -->
    <li v-if="banner?.items?.[0]" class="p-0 lg:col-span-full">
      <div class="py-24 py-lg:72 px-32 rounded-8 bg-white w-full relative of-hidden max-w-none max-w-lg:[calc(var(--nq-max-width)-32px)] outline-1.5 outline-offset--1.5 outline outline-neutral/10" shadow>
        <!-- Background app logos -->
        <NuxtLink v-for="(bg, j) in bgApps" :key="j" class="size-104 absolute" :to="bg.link" target="_blank" :aria-label="bg.name" tabindex="-1" :class="[bg.classes]" pointer-cursor :style="{ color: bg.color }">
          <Icon class="size-full inset-0 absolute" name="nimiq:logos-nimiq-mono" />
          <NuxtImg class="size-full pointer-events-none scale-110 object-contain" :src="bg.logo" :alt="bg.name" :class="bannerLogoClasses[bg.name]" />
        </NuxtLink>

        <!-- Content -->
        <div class="flex flex-wrap flex-justify-between flex-col max-w-full w-max relative z-10 md:mx-auto lg:max-w-60ch md:items-center">
          <div class="max-w-60ch md:text-center">
            <h3 class="nq-heading mt-0">
              {{ banner.items[0].headline }}
            </h3>
            <p v-if="banner.items[0].subline" class="text-neutral-700 mb-0 f-mt-xs">
              {{ banner.items[0].subline }}
            </p>
          </div>
          <NuxtLink v-if="banner.items[0].link" class="mt-32 mt-md:24 nq-arrow nq-pill-lg nq-pill-blue md:mx-auto" :to="banner.items[0].link">
            View all apps
          </NuxtLink>
        </div>
      </div>
    </li>
  </ul>
</template>
