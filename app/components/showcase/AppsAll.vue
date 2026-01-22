<script setup lang="ts">
import type { NimiqApp } from '~/composables/useApps'

const { data } = await useApps()
const apps = computed(() => data.value?.apps)
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
  <form class="rounded-full bg-neutral-300" @submit.prevent>
    <fieldset class="flex">
      <p class="sr-only">
        Filter by author of the app
      </p>
      <label class="py-2 md:py-3 pl-2 md:pl-3">
        <input id="anyone" v-model="madeBy" class="sr-only" type="radio" value="anyone">
        <span class="text-neutral-700 text-16 font-semibold transition-colors px-2 md:px-3">Anyone</span>
      </label>
      <label class="py-2 md:py-3">
        <input id="official" v-model="madeBy" class="sr-only" type="radio" value="official">
        <span class="text-neutral-700 text-16 font-semibold transition-colors px-2 md:px-3">Official</span>
      </label>
      <label class="py-2 md:py-3 pr-2 md:pr-3">
        <input id="community" v-model="madeBy" class="sr-only" type="radio" value="community">
        <span class="text-neutral-700 text-16 font-semibold transition-colors px-2 md:px-3">Community</span>
      </label>
    </fieldset>
  </form>

  <ul v-if="filteredApps.length" class="mt-8 md:mt-12 grid gap-4 grid-cols-1 grid-md:cols-[repeat(auto-fit,min(100%,350px))] grid-xl:gap-6 grid-2xl:gap-8 grid-justify-center">
    <li v-for="(app, i) in filteredApps" :key="i" class="w-full" :style="getSpotlightPosition(app)" :class="getSpotlightPosition(app)?.class">
      <!-- CardApp (non-highlighted) -->
      <NuxtLink v-if="!app.isHighlighted" class="w-[min(calc(100vw-var(--px,32px)*2),350px)] group p-1.5 rounded-1.5 gap-6 h-full nq-hoverable" :to="getAppLink(app)" target="_blank" :style="`--c: ${app.color}`" external :aria-label="`Go to ${app.name} website`">
        <div class="bg-$c mb-0 rounded-1 h-60" stack>
          <Icon v-if="app.name === 'Nimiq Tip Bot'" class="text-white/80 size-24" name="nimiq:logos-telegram-mono" />
          <NuxtImg v-else class="max-w-45% rounded-1 h-auto max-h-full min-w-[82px] object-cover" :src="app.logo" :class="getLogoClasses(app.name)" />
          <p class="text-12 text-white/70 self-start right-3 top-3 justify-self-end relative nq-label">
            {{ app.type }}
          </p>
        </div>
        <div class="p-[26px] pt-0 flex-1 flex flex-col gap-3">
          <h3>{{ app.name }}</h3>
          <p class="text-16 text-neutral-800 text-group-hover:neutral-900 mt-0 transition-colors leading-150">
            {{ app.description }}
          </p>
          <div class="nq-hoverable-cta mt-auto w-max">
            <p v-if="app.developer" class="text-14 nq-label">
              By <span class="text-blue">{{ app.developer }}</span>
            </p>
          </div>
        </div>
      </NuxtLink>

      <!-- CardHighlighted -->
      <div v-else class="flex flex-wrap flex-items-center gap-2 rounded-1.5 bg-neutral-0 h-full p-2 md:p-3" shadow>
        <NuxtImg v-if="app.screenshot" class="rounded-1 rounded-2 h-auto max-h-[445px] max-h-md:full max-w-full w-full w-md:320 object-cover" :src="app.screenshot" />
        <div class="flex flex-col gap-3 p-6 flex-1">
          <h3>{{ app.name }}</h3>
          <p class="text-16 text-neutral-800 mt-0 leading-150">
            {{ app.description }}
          </p>
          <NuxtLink class="mx-0 mt-4 md:mt-6 nq-arrow nq-pill-lg nq-pill-blue" :to="getHighlightedUrl(app.link)">
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
fieldset label {
  input:checked + span {
    --uno: 'text-neutral';
  }

  input:where(:focus-visible, :hover) + span {
    --uno: 'text-neutral-900';
  }
}

@media (min-width: 768px) {
  .spotlight-span-2 {
    grid-column-end: span 2;
  }
}
</style>
