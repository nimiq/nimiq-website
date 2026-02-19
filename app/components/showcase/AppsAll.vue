<script setup lang="ts">
import type { NimiqApp } from '~/composables/useApps'
import { TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'

const data = await useApps()
const apps = computed(() => data.apps)
const { madeBy, filteredApps, getSpotlightPosition } = useAppsFilter(apps)

const logoConfig: Record<string, { classes?: string, invert?: boolean }> = {
  'NIM Donations': { invert: true },
  'Multisig Wallet': { invert: true },
  'Cryptopayment.link': { invert: true, classes: 'scale-90' },
  'NimWorld': { invert: true, classes: 'scale-120' },
  'Nimiq Tip Bot': { classes: 'drop-shadow' },
  'Trust Wallet': { classes: 'scale-130' },
  'Nimtris': { classes: 'scale-130' },
  'Nimiq Game': { classes: 'scale-85' },
  'Nimiq Game Store': { classes: 'scale-70' },
  'Nimiq 2048': { classes: 'scale-70' },
  'Staking Calculator': { classes: 'scale-115' },
}

function getLogoClasses(name: string) {
  const config = logoConfig[name]
  if (!config)
    return ''
  const classes = []
  if (config.invert)
    classes.push('invert brightness-0')
  if (config.classes)
    classes.push(config.classes)
  return classes.join(' ')
}

function getAppLink(app: NimiqApp) {
  const url = 'https://nimiq.com'
  return app.link.replace(/\/$/, '').replace(url, '')
}

function getHighlightedUrl(link: string) {
  try {
    const url = new URL(link)
    const requestUrl = useRequestURL()
    return url.host === requestUrl.host ? url.pathname : link
  }
  catch {
    return link
  }
}
</script>

<template>
  <TabsRoot v-model="madeBy">
    <TabsList class="relative flex rounded-full bg-neutral-300 p-1">
      <TabsIndicator class="absolute inset-y-1 rounded-full bg-neutral-0 w-[--reka-tabs-indicator-size] translate-x-[--reka-tabs-indicator-position]" />
      <TabsTrigger value="anyone" class="py-2 md:py-3 px-2 md:px-3 text-[16px] font-semibold text-neutral-700 data-[state=active]:text-neutral hover:text-neutral-900 transition-colors relative z-1 rounded-full cursor-pointer select-none">
        Anyone
      </TabsTrigger>
      <TabsTrigger value="official" class="py-2 md:py-3 px-2 md:px-3 text-[16px] font-semibold text-neutral-700 data-[state=active]:text-neutral hover:text-neutral-900 transition-colors relative z-1 rounded-full cursor-pointer select-none">
        Official
      </TabsTrigger>
      <TabsTrigger value="community" class="py-2 md:py-3 px-2 md:px-3 text-[16px] font-semibold text-neutral-700 data-[state=active]:text-neutral hover:text-neutral-900 transition-colors relative z-1 rounded-full cursor-pointer select-none">
        Community
      </TabsTrigger>
    </TabsList>
  </TabsRoot>

  <ul v-if="filteredApps.length" class="mt-[32px] md:mt-[48px] grid gap-[16px] grid-cols-1 md:grid-cols-[repeat(auto-fit,min(100%,350px))] xl:gap-[24px] 2xl:gap-[32px] justify-center">
    <li v-for="(app, i) in filteredApps" :key="i" class="w-full" :style="getSpotlightPosition(app)" :class="getSpotlightPosition(app)?.class">
      <!-- CardApp (non-highlighted) -->
      <NuxtLink v-if="!app.isHighlighted" class="w-[min(calc(100vw-var(--px,32px)*2),350px)] group p-[6px] rounded-[6px] gap-[24px] h-full nq-hoverable" :to="getAppLink(app)" target="_blank" :style="`--c: ${app.color}`" external :aria-label="`Go to ${app.name} website`">
        <div class="bg-[var(--c)] mb-0 rounded-[4px] h-[240px] grid place-items-center relative">
          <Icon v-if="app.name === 'Nimiq Tip Bot'" class="text-white/80 size-[96px]" name="nimiq:logos-telegram-mono" />
          <NuxtImg v-else class="max-w-[45%] rounded-[4px] h-auto max-h-full min-w-[82px] object-cover" :src="app.logo" :class="getLogoClasses(app.name)" />
          <p class="text-[12px] text-white/70 self-start right-[12px] top-[12px] justify-self-end absolute nq-label">
            {{ app.type }}
          </p>
        </div>
        <div class="p-[26px] pt-0 flex-1 flex flex-col gap-[12px]">
          <h3>{{ app.name }}</h3>
          <p class="text-[16px] text-neutral-800 group-hover:text-neutral-900 mt-0 transition-colors leading-[150%]">
            {{ app.description }}
          </p>
          <div class="nq-hoverable-cta mt-auto w-max">
            <p v-if="app.developer" class="text-[14px] nq-label">
              By <span class="text-blue">{{ app.developer }}</span>
            </p>
          </div>
        </div>
      </NuxtLink>

      <!-- CardHighlighted -->
      <div v-else class="flex flex-wrap items-center gap-[8px] rounded-[6px] bg-neutral-0 h-full p-[8px] md:p-[12px] shadow">
        <NuxtImg v-if="app.screenshot" class="rounded-[4px] md:rounded-[8px] h-auto max-h-[445px] max-md:h-full max-w-full w-full md:w-[320px] object-cover" :src="app.screenshot" />
        <div class="flex flex-col gap-[12px] p-[24px] flex-1">
          <h3>{{ app.name }}</h3>
          <p class="text-[16px] text-neutral-800 mt-0 leading-[150%]">
            {{ app.description }}
          </p>
          <NuxtLink class="mx-0 mt-[16px] md:mt-[24px] nq-arrow nq-pill-lg nq-pill-blue" :to="getHighlightedUrl(app.link)">
            Learn more
          </NuxtLink>
        </div>
      </div>
    </li>
  </ul>

  <p v-else class="text-neutral-700 text-center mt-8 md:mt-12">
    No apps found for this filter.
  </p>
</template>

<style scoped>
[data-reka-tabs-indicator] {
  transition:
    width 200ms var(--nq-ease),
    transform 300ms var(--nq-ease);
}

@media (min-width: 768px) {
  .spotlight-span-2 {
    grid-column-end: span 2;
  }
}
</style>
