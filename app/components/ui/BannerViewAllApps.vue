<script lang="ts">
// @unocss-include
const positions = ['bottom--40 right--30 md:right-88 md:bottom--44 xl:right-180', 'invisible md:visible md:right--18 md:bottom-50 lg:bottom-100 lg:right--32 xl:right-70 xl:bottom-60', 'invisible md:visible md:left-88 md:bottom--52 xl:left-180', 'invisible md:visible md:left--36 md:bottom-42 lg:bottom-92 xl:left-70 xl:bottom-60', 'invisible xl:visible xl:bottom--40 xl:left--30', 'invisible xl:visible xl:bottom--40 xl:right--30']
const colors: Record<string, string> = { 'Games': 'rgb(var(--nq-purple))', 'Insights': 'rgb(var(--nq-green))', 'Faucet': '#FA7268', 'E-commerce': 'rgb(var(--nq-blue))', 'Infrastructure': 'rgb(var(--nq-red))', 'Wallets': 'rgb(var(--nq-orange))', 'Bots': 'rgb(var(--nq-gold))' }
function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}
</script>

<script setup lang="ts">
defineProps<{ headline: string, subline?: string, link?: string }>()

const { data } = await useAsyncData('banner-community-apps', () => queryCollection('communityApps').first())

// Shuffle apps client-side on every page load
const bgApps = ref<Array<{ name: string, type: string, logo: string, link: string, color: string, classes: string }>>([])
onMounted(() => {
  if (!data.value?.apps)
    return
  bgApps.value = shuffle(data.value.apps).slice(0, 6).map((app, i) => ({ ...app, color: colors[app.type] || 'rgb(var(--nq-neutral))', classes: positions[i]! }))
})
</script>

<template>
  <div py="24 lg:72" px-32 rounded-8 bg-neutral w-full shadow relative of-hidden outline="1.5 offset--1.5 ~ neutral/10">
    <!-- Background app logos -->
    <NuxtLink v-for="(bg, j) in bgApps" :key="j" :to="bg.link" target="_blank" :aria-label="bg.name" tabindex="-1" :class="[bg.classes]" pointer-cursor stack size-104 absolute>
      <div size-full i-nimiq:logos-nimiq-mono :style="{ color: bg.color }" />
      <img :src="bg.logo" :alt="bg.name" p-16 size-full pointer-events-none object-contain>
    </NuxtLink>

    <!-- Content -->
    <div flex="~ wrap justify-between" flex-col max-w-full w-max relative z-10 md:mx-auto lg:max-w-60ch md:items-center>
      <div max-w-60ch md:text-center>
        <h3 nq-heading>
          {{ headline }}
        </h3>
        <p v-if="subline" text-neutral-700 f-mt-xs>
          {{ subline }}
        </p>
      </div>
      <NuxtLink v-if="link" :to="link" mt="32 md:24" nq-arrow nq-pill-lg nq-pill-blue md:mx-auto>
        View all apps
      </NuxtLink>
    </div>
  </div>
</template>
