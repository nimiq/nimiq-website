<script setup lang="ts">
interface BannerItem { headline: string, subline?: string, link?: string }
const { banner } = defineProps<{ banner?: { items: BannerItem[] } }>()

const bannerPositions = ['-bottom-10 -right-[30px] md:right-[88px] md:-bottom-11 xl:right-[180px]', 'invisible md:visible md:-right-[18px] md:bottom-[50px] lg:bottom-[100px] lg:-right-8 xl:right-[70px] xl:bottom-[60px]', 'invisible md:visible md:left-[88px] md:-bottom-[52px] xl:left-[180px]', 'invisible md:visible md:-left-9 md:bottom-[42px] lg:bottom-[92px] xl:left-[70px] xl:bottom-[60px]', 'invisible xl:visible xl:-bottom-10 xl:-left-[30px]', 'invisible xl:visible xl:-bottom-10 xl:-right-[30px]']
const bannerLogoClasses: Record<string, string> = { 'NimWorld': 'filter-brightness-0 filter-invert scale-75', 'Trust Wallet': 'scale-150' }

// Load community apps for background (developer !== '@nimiq')
const { data: appsData } = await useApps()
// Shuffle community apps for varied display (randomized each page load)
const bgApps = computed(() => {
  if (!appsData.value?.communityApps)
    return []
  return shuffle(appsData.value.communityApps).slice(0, 6).map((app, i) => ({ ...app, classes: bannerPositions[i]! }))
})
</script>

<template>
  <div v-if="banner?.items?.[0]" class="w-full">
    <div class="nq-banner-card py-6 lg:py-[72px] px-8 w-full relative overflow-hidden max-w-none lg:max-w-[calc(var(--nq-max-width)-32px)] mx-auto">
      <!-- Background app logos -->
      <NuxtLink v-for="(bg, j) in bgApps" :key="j" class="size-[104px] absolute cursor-pointer" :to="bg.link" target="_blank" :aria-label="bg.name" tabindex="-1" :class="[bg.classes]" :style="{ color: bg.color }">
        <Icon class="size-full inset-0 absolute" name="nimiq:logos-nimiq-mono" />
        <NuxtImg class="size-full pointer-events-none scale-110 object-contain" :src="bg.logo" :alt="bg.name" :class="bannerLogoClasses[bg.name]" />
      </NuxtLink>

      <!-- Content -->
      <div class="flex flex-wrap justify-between flex-col max-w-full w-max relative z-10 md:mx-auto lg:max-w-[60ch] md:items-center">
        <div class="max-w-[60ch] md:text-center">
          <h3 class="nq-heading mt-0">
            {{ banner.items[0].headline }}
          </h3>
          <p v-if="banner.items[0].subline" class="text-neutral-700 mb-0 mt-2 md:mt-3">
            {{ banner.items[0].subline }}
          </p>
        </div>
        <NuxtLink v-if="banner.items[0].link" class="mt-8 md:mt-6 nq-arrow nq-pill-lg nq-pill-blue md:mx-auto" :to="banner.items[0].link">
          Go to apps
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
