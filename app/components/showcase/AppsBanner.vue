<script setup lang="ts">
interface BannerItem { headline: string, subline?: string, link?: string }
const { banner } = defineProps<{ banner?: { items: BannerItem[] } }>()

const bannerPositions = ['bottom--40 right--30 md:right-88 md:bottom--44 xl:right-180', 'invisible md:visible md:right--18 md:bottom-50 lg:bottom-100 lg:right--32 xl:right-70 xl:bottom-60', 'invisible md:visible md:left-88 md:bottom--52 xl:left-180', 'invisible md:visible md:left--36 md:bottom-42 lg:bottom-92 xl:left-70 xl:bottom-60', 'invisible xl:visible xl:bottom--40 xl:left--30', 'invisible xl:visible xl:bottom--40 xl:right--30']
const bannerLogoClasses: Record<string, string> = { 'NimWorld': 'filter-brightness-0 filter-invert scale-75', 'Trust Wallet': 'scale-150' }

// Load community apps for background (developer !== '@nimiq')
const { data: appsData } = await useApps()
const bgApps = ref<Array<{ name: string, type: string, logo: string, link: string, color: string, classes: string }>>([])
onMounted(() => {
  if (!appsData.value?.communityApps)
    return
  bgApps.value = shuffle(appsData.value.communityApps).slice(0, 6).map((app, i) => ({ ...app, classes: bannerPositions[i]! }))
})
</script>

<template>
  <div v-if="banner?.items?.[0]" f-px-sm>
    <div py="24 lg:72" px-32 rounded-8 bg-white w-full shadow relative of-hidden max-w="none lg:[calc(var(--nq-max-width)-32px)]" outline="1.5 offset--1.5 ~ neutral/10">
      <!-- Background app logos -->
      <NuxtLink v-for="(bg, j) in bgApps" :key="j" :to="bg.link" target="_blank" :aria-label="bg.name" tabindex="-1" :class="[bg.classes]" pointer-cursor size-104 absolute :style="{ color: bg.color }">
        <Icon name="nimiq:logos-nimiq-mono" size-full inset-0 absolute />
        <NuxtImg :src="bg.logo" :alt="bg.name" size-full pointer-events-none scale-110 object-contain :class="bannerLogoClasses[bg.name]" />
      </NuxtLink>

      <!-- Content -->
      <div flex="~ wrap justify-between" flex-col max-w-full w-max relative z-10 md:mx-auto lg:max-w-60ch md:items-center>
        <div max-w-60ch md:text-center>
          <h3 nq-heading mt-0>
            {{ banner.items[0].headline }}
          </h3>
          <p v-if="banner.items[0].subline" text-neutral-700 mb-0 f-mt-xs>
            {{ banner.items[0].subline }}
          </p>
        </div>
        <NuxtLink v-if="banner.items[0].link" :to="banner.items[0].link" mt="32 md:24" nq-arrow nq-pill-lg nq-pill-blue md:mx-auto>
          Go to apps
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
