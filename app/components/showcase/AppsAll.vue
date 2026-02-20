<script setup lang="ts">
import type { NimiqApp } from '~/composables/useApps'
import { AnimatePresence, motion } from 'motion-v'
import { TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'

const data = await useApps()
const apps = computed(() => data.apps)
const { madeBy, filteredApps, getSpotlightPosition } = useAppsFilter(apps)
const requestUrl = useRequestURL()

const hoveredApp = ref<string | null>(null)

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
  'Twini': { classes: 'scale-140' },
  'Nimiq DOOM': { classes: 'scale-40 opacity-40' },
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
    return url.host === requestUrl.host ? url.pathname : link
  }
  catch { return link }
}
</script>

<template>
  <TabsRoot v-model="madeBy">
    <TabsList class="relative flex w-full md:w-auto rounded-full bg-neutral-300 p-[5px]">
      <TabsIndicator class="absolute left-0 inset-y-[5px] rounded-full bg-white w-(--reka-tabs-indicator-size)" style="transform: translateX(var(--reka-tabs-indicator-position)); box-shadow: 0 1px 4px rgba(0,0,0,0.10), 0 0 1px rgba(0,0,0,0.06)" />
      <TabsTrigger value="anyone" class="flex-1 md:flex-none py-[7px] px-[14px] md:py-[9px] md:px-[20px] text-[15px] md:text-[17px] font-bold text-neutral-700 data-[state=active]:text-neutral hover:text-neutral-900 transition-colors relative z-1 rounded-full cursor-pointer select-none">
        Anyone
      </TabsTrigger>
      <TabsTrigger value="official" class="flex-1 md:flex-none py-[7px] px-[14px] md:py-[9px] md:px-[20px] text-[15px] md:text-[17px] font-bold text-neutral-700 data-[state=active]:text-neutral hover:text-neutral-900 transition-colors relative z-1 rounded-full cursor-pointer select-none">
        Official
      </TabsTrigger>
      <TabsTrigger value="community" class="flex-1 md:flex-none py-[7px] px-[14px] md:py-[9px] md:px-[20px] text-[15px] md:text-[17px] font-bold text-neutral-700 data-[state=active]:text-neutral hover:text-neutral-900 transition-colors relative z-1 rounded-full cursor-pointer select-none">
        Community
      </TabsTrigger>
    </TabsList>
  </TabsRoot>

  <AnimatePresence mode="popLayout">
    <motion.ul
      v-if="filteredApps.length"
      :key="madeBy"
      class="mt-[32px] md:mt-[48px] grid gap-[16px] grid-flow-row-dense grid-cols-1 md:grid-cols-[repeat(auto-fit,min(100%,350px))] xl:gap-[24px] 2xl:gap-[32px] justify-center"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 0.35 }"
    >
      <motion.li
        v-for="(app, i) in filteredApps"
        :key="app.name"
        class="w-full"
        v-bind="getSpotlightPosition(app)"
        :initial="{ opacity: 0, y: 12 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.3, delay: Math.min(i * 0.04, 0.3) }"
      >
        <!-- CardApp (non-highlighted) -->
        <NuxtLink
          v-if="!app.isHighlighted"
          class="w-[min(calc(100vw-var(--px,32px)*2),350px)] group p-[6px] rounded-[6px] gap-[24px] h-full nq-hoverable"
          :to="getAppLink(app)"
          target="_blank"
          :style="`--c: ${app.color}`"
          external
          :aria-label="`Go to ${app.name} website`"
          @mouseenter="hoveredApp = app.name"
          @mouseleave="hoveredApp = null"
        >
          <div class="bg-[var(--c)] mb-0 rounded-[4px] h-[160px] md:h-[240px] grid place-items-center relative">
            <Icon v-if="app.name === 'Nimiq Tip Bot'" class="text-white/80" size="80" name="nimiq:logos-telegram-mono" />
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
            <div class="mt-auto relative overflow-hidden" style="height: 1.4em">
              <motion.div
                class="text-[14px] nq-label absolute inset-0"
                :animate="{ opacity: hoveredApp === app.name ? 0 : 1, y: hoveredApp === app.name ? -6 : 0 }"
                :transition="{ duration: 0.15 }"
              >
                <template v-if="app.developer">
                  By <span class="text-blue">{{ app.developer }}</span>
                </template>
              </motion.div>
              <motion.div
                class="text-blue font-bold text-[14px] absolute inset-0"
                :animate="{ opacity: hoveredApp === app.name ? 1 : 0, y: hoveredApp === app.name ? 0 : 6 }"
                :transition="{ duration: 0.15 }"
              >
                Learn more →
              </motion.div>
            </div>
          </div>
        </NuxtLink>

        <!-- CardHighlighted -->
        <NuxtLink
          v-else
          class="nq-hoverable h-full flex flex-col md:flex-row rounded-[6px] overflow-hidden"
          :to="getHighlightedUrl(app.link)"
        >
          <div class="md:w-[42%] shrink-0 p-[10px] md:p-[16px] md:pr-0 min-h-[240px]">
            <div class="size-full rounded-[4px] overflow-hidden bg-neutral-200">
              <NuxtImg v-if="app.screenshot" class="size-full object-cover object-left-top" :src="app.screenshot" />
            </div>
          </div>
          <div class="flex flex-col justify-center gap-[40px] px-[26px] md:px-[48px] py-[26px] md:py-[32px] flex-1">
            <div class="flex flex-col gap-[24px]">
              <h3 class="text-[28px] font-semibold leading-[1.3] mt-0 text-neutral">
                {{ app.name }}
              </h3>
              <p class="text-[18px] text-neutral-900/80 leading-[1.5] mt-0">
                {{ app.description }}
              </p>
            </div>
            <span class="nq-arrow nq-pill-lg nq-pill-blue w-max inline-flex">Learn more</span>
          </div>
        </NuxtLink>
      </motion.li>
    </motion.ul>
  </AnimatePresence>

  <p v-if="!filteredApps.length" class="text-neutral-700 text-center mt-8 md:mt-12">
    No apps found for this filter.
  </p>
</template>

<style scoped>
:deep([data-reka-tabs-indicator]) {
  transition:
    width 200ms var(--nq-ease),
    transform 300ms var(--nq-ease);
}

@media (min-width: 768px) {
  .spotlight-left {
    grid-column: span 2;
  }
  .spotlight-right {
    grid-column: -3 / span 2;
  }
  /* odd rows (1,3,5...) for highlighted; even rows fill with regulars via grid-flow dense */
  .spotlight-row-0 {
    grid-row: 1;
  }
  .spotlight-row-1 {
    grid-row: 3;
  }
  .spotlight-row-2 {
    grid-row: 5;
  }
}
</style>
