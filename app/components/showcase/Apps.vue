<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

const { apps } = defineProps<{ apps: AppItem[], banner?: { items: BannerItem[] } }>()
const bannerPositions = ['-bottom-10 -right-[30px] md:right-[88px] md:-bottom-11 xl:right-[180px]', 'invisible md:visible md:-right-[18px] md:bottom-[50px] lg:bottom-[100px] lg:-right-8 xl:right-[70px] xl:bottom-[60px]', 'invisible md:visible md:left-[88px] md:-bottom-[52px] xl:left-[180px]', 'invisible md:visible md:-left-9 md:bottom-[42px] lg:bottom-[92px] xl:left-[70px] xl:bottom-[60px]', 'invisible xl:visible xl:-bottom-10 xl:-left-[30px]', 'invisible xl:visible xl:-bottom-10 xl:-right-[30px]']
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
    <NuxtLink class="outline-solid outline-1.5 outline-neutral-300 p-8 md:p-40 lg:p-48 p-b-0! rounded-2 overflow-hidden grid gap-x-12 lg:gap-x-20 md:grid-rows-[auto_auto_1fr] md:grid-cols-[221px_1fr] lg:grid-rows-[repeat(4,auto)] lg:grid-cols-1" :to="app.link">
      <!-- Icon -->
      <div v-if="app.item === 'Nimiq Pay'" class="size-12 size-lg:56 rounded-3 bg-gradient-gold grid grid-place-content-center lg:mx-auto">
        <Icon class="text-32 text-[#ededee]" name="nimiq:logos-nimiq-pay-vertical-mono" />
      </div>
      <Icon v-else-if="app.item === 'CPL'" class="size-12 lg:mx-auto lg:size-14" name="nimiq:logos-cpl-tag" />

      <!-- Title -->
      <h3 class="text-22/28.6 lg:text-28/36.4 font-semibold mt-4 lg:text-center">
        {{ app.title }}
      </h3>

      <!-- Description -->
      <p class="mt-3 max-w-28ch lg:mx-auto text-16/24 md:text-17/25.5 lg:text-18/28 text-neutral-800 lg:text-center">
        {{ app.description }}
      </p>

      <!-- Mobile arrow -->
      <div class="grid grid-place-content-center mb-8 rounded-full bg-gradient-blue size-8 max-md:mt-3 md:hidden">
        <Icon class="text-9 text-white" name="nimiq:chevron-right" />
      </div>

      <!-- Preview image -->
      <div
        class="h-[196px] md:mx-auto lg:mt-10 lg:row-span-1 md:row-span-full lg:col-start-1 md:col-start-2" :class="{
          'max-md:-mr-32 md:ml-4': app.item === 'CPL',
          'md:max-w-[245px]': app.item === 'Nimiq Pay',
        }"
      >
        <NuxtImg :src="app.preview" :alt="app.title" />
      </div>
    </NuxtLink>
  </DefineSmallCard>

  <!-- Define large card template -->
  <DefineLargeCard v-slot="{ app }">
    <NuxtLink class="outline-solid outline-1.5 outline-neutral-300 p-8 md:p-40 lg:p-48 p-b-0! grid gap-x-12 lg:gap-x-20 md:grid-rows-[auto_auto_1fr] md:grid-cols-[221px_1fr] rounded-2 w-full overflow-hidden" :to="app.link">
      <!-- Icon -->
      <Icon v-if="app.item === 'Nimiq Wallet'" class="text-56 lg:ml-6" name="nimiq:logos-nimiq" />
      <Icon v-else-if="app.item === 'Multisig Wallet'" class="text-56 lg:ml-6" name="nimiq:logos-multisig" />

      <!-- Title -->
      <h3 class="text-22/28.6 lg:text-28/36.4 font-semibold mt-4 text-left lg:ml-6">
        {{ app.title }}
      </h3>

      <!-- Description -->
      <p class="mt-3 max-w-28ch text-16/24 md:text-17/25.5 lg:text-18/28 text-neutral-800 lg:ml-6">
        {{ app.description }}
      </p>

      <!-- Mobile arrow -->
      <div class="grid grid-place-content-center mb-8 rounded-full bg-gradient-blue size-8 max-md:mt-3 md:hidden">
        <Icon class="text-9 text-white" name="nimiq:chevron-right" />
      </div>

      <!-- Preview image -->
      <div class="h-[196px] lg:-mb-[120px] lg:ml-auto md:row-span-full md:col-start-2 lg:h-[490px] lg:w-[640px]" :class="{ 'max-md:-mr-32 -mr-32': app.item === 'Nimiq Wallet' || app.item === 'Multisig Wallet' }">
        <NuxtImg :src="app.preview" :alt="app.title" :class="{ 'max-xl:scale-155 scale-120 max-xl:transform-origin-top-left -bottom-8 relative': app.item === 'Nimiq Wallet' || app.item === 'Multisig Wallet' }" />
      </div>
    </NuxtLink>
  </DefineLargeCard>

  <!-- Grid with apps and banner -->
  <ul class="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-[22px]" f-px-sm>
    <!-- Regular apps (small cards) -->
    <li v-for="app in regularApps" :key="app.item" class="bg-neutral-300 hover:bg-neutral-0 focus:bg-neutral-0 p-0 overflow-visible isolate nq-hoverable" style="--ring-color: transparent">
      <SmallCard :app />
    </li>

    <!-- Highlighted apps (large cards) -->
    <li v-for="app in highlightedApps" :key="app.item" class="bg-neutral-300 hover:bg-neutral-0 focus:bg-neutral-0 p-0 overflow-visible isolate nq-hoverable lg:col-span-full" style="--ring-color: transparent">
      <UiRibbonContainer v-if="app.item === 'Multisig Wallet'" color="purple" label="New Release" icon="nimiq:verified-filled" var:top:25px>
        <LargeCard :app />
      </UiRibbonContainer>
      <LargeCard v-else :app />
    </li>

    <!-- Banner card (full width) - BannerViewAllApps inlined -->
    <li v-if="banner?.items?.[0]" class="p-0 lg:col-span-full">
      <div class="py-24 lg:py-72 px-32 rounded-8 bg-neutral-0 w-full relative overflow-hidden max-w-none lg:max-w-[calc(var(--nq-max-width)-32px)] mx-auto outline-1.5 outline-offset--1.5 outline outline-neutral/10 shadow">
        <!-- Background app logos -->
        <NuxtLink v-for="(bg, j) in bgApps" :key="j" class="size-[104px] absolute cursor-pointer" :to="bg.link" target="_blank" :aria-label="bg.name" tabindex="-1" :class="[bg.classes]" :style="{ color: bg.color }">
          <Icon class="size-full inset-0 absolute text-current" name="nimiq:logos-nimiq-mono" />
          <NuxtImg class="size-full pointer-events-none scale-110 object-contain" :src="bg.logo" :alt="bg.name" :class="bannerLogoClasses[bg.name]" />
        </NuxtLink>

        <!-- Curtain overlay for fading effect -->
        <div class="curtain pointer-events-none inset-0 absolute" />

        <!-- Content -->
        <div class="flex flex-wrap justify-between flex-col max-w-full w-max relative z-10 md:mx-auto lg:max-w-60ch md:items-center">
          <div class="max-w-60ch md:text-center">
            <h3 class="nq-heading mt-0">
              {{ banner.items[0].headline }}
            </h3>
            <p v-if="banner.items[0].subline" class="text-neutral-700 mb-0 mt-2 md:mt-3">
              {{ banner.items[0].subline }}
            </p>
          </div>
          <NuxtLink v-if="banner.items[0].link" class="mt-32 md:mt-24 nq-arrow nq-pill-lg nq-pill-blue md:mx-auto" :to="banner.items[0].link">
            Go to apps
          </NuxtLink>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.curtain {
  background: linear-gradient(180deg, rgb(255 255 255 / 0.1) 50%, rgb(255 255 255 / 0.5) 100%);
  box-shadow: inset 0 0 101px rgba(255, 255, 255, 0.75);
  z-index: 1;
}
</style>
