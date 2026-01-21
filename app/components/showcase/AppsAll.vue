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
      <label class="f-py-xs f-pl-xs">
        <input id="anyone" v-model="madeBy" class="sr-only" type="radio" value="anyone">
        <span class="text-neutral-700 text-16 font-semibold transition-colors f-px-xs">Anyone</span>
      </label>
      <label class="f-py-xs">
        <input id="official" v-model="madeBy" class="sr-only" type="radio" value="official">
        <span class="text-neutral-700 text-16 font-semibold transition-colors f-px-xs">Official</span>
      </label>
      <label class="f-py-xs f-pr-xs">
        <input id="community" v-model="madeBy" class="sr-only" type="radio" value="community">
        <span class="text-neutral-700 text-16 font-semibold transition-colors f-px-xs">Community</span>
      </label>
    </fieldset>
  </form>

  <ul v-if="filteredApps.length" class="f-mt-xl grid grid-gap-16 grid-cols-1 grid-md:cols-[repeat(auto-fit,min(100%,350px))] grid-xl:gap-24 grid-2xl:gap-32 grid-justify-center">
    <li v-for="(app, i) in filteredApps" :key="i" class="w-full" :style="getSpotlightPosition(app)" :class="getSpotlightPosition(app)?.class">
      <!-- CardApp (non-highlighted) -->
      <NuxtLink v-if="!app.isHighlighted" class="w-[min(calc(100vw-var(--px,32px)*2),350px)] group p-6 rounded-6 gap-24 h-full nq-hoverable" :to="getAppLink(app)" target="_blank" :style="`--c: ${app.color}`" external :aria-label="`Go to ${app.name} website`">
        <div class="bg-$c mb-0 rounded-4 h-240" stack>
          <Icon v-if="app.name === 'Nimiq Tip Bot'" class="text-white/80 size-96" name="nimiq:logos-telegram-mono" />
          <NuxtImg v-else class="max-w-45% rounded-4 h-auto max-h-full min-w-82 object-cover" :src="app.logo" :class="getLogoClasses(app.name)" />
          <p class="text-12 text-white/70 self-start right-12 top-12 justify-self-end relative nq-label">
            {{ app.type }}
          </p>
        </div>
        <div class="p-26 pt-0 flex-1 flex flex-col flex-gap-12">
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
      <div v-else class="flex flex-wrap flex-items-center flex-gap-8 rounded-6 bg-neutral-0 h-full f-p-xs" shadow>
        <NuxtImg v-if="app.screenshot" class="rounded-4 rounded-8 h-auto max-h-445 max-h-md:full max-w-full w-full w-md:320 object-cover" :src="app.screenshot" />
        <div class="flex flex-col flex-gap-12 p-24 flex-1">
          <h3>{{ app.name }}</h3>
          <p class="text-16 text-neutral-800 mt-0 leading-150">
            {{ app.description }}
          </p>
          <NuxtLink class="mx-0 f-mt-md nq-arrow nq-pill-lg nq-pill-blue" :to="getHighlightedUrl(app.link)">
            Learn more
          </NuxtLink>
        </div>
      </div>
    </li>
  </ul>

  <p v-else class="text-neutral-700 text-center f-mt-xl">
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
