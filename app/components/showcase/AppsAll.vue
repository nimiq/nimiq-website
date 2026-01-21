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
  <form rounded-full bg-neutral-300 @submit.prevent>
    <fieldset flex>
      <p sr-only>
        Filter by author of the app
      </p>
      <label f-py-xs f-pl-xs>
        <input id="anyone" v-model="madeBy" type="radio" value="anyone" sr-only>
        <span text="neutral-700" text-16 font-semibold transition-colors f-px-xs>Anyone</span>
      </label>
      <label f-py-xs>
        <input id="official" v-model="madeBy" type="radio" value="official" sr-only>
        <span text="neutral-700" text-16 font-semibold transition-colors f-px-xs>Official</span>
      </label>
      <label f-py-xs f-pr-xs>
        <input id="community" v-model="madeBy" type="radio" value="community" sr-only>
        <span text="neutral-700" text-16 font-semibold transition-colors f-px-xs>Community</span>
      </label>
    </fieldset>
  </form>

  <ul v-if="filteredApps.length" f-mt-xl grid="~ gap-16 cols-1 md:cols-[repeat(auto-fit,min(100%,350px))] xl:gap-24 2xl:gap-32 justify-center">
    <li v-for="(app, i) in filteredApps" :key="i" :style="getSpotlightPosition(app)" :class="getSpotlightPosition(app)?.class" w-full>
      <!-- CardApp (non-highlighted) -->
      <NuxtLink v-if="!app.isHighlighted" :to="getAppLink(app)" target="_blank" w="[min(calc(100vw-var(--px,32px)*2),350px)]" :style="`--c: ${app.color}`" external group p-6 rounded-6 gap-24 h-full nq-hoverable :aria-label="`Go to ${app.name} website`">
        <div bg="$c" stack mb-0 rounded-4 h-240>
          <Icon v-if="app.name === 'Nimiq Tip Bot'" name="nimiq:logos-telegram-mono" class="text-white/80 size-96" />
          <NuxtImg v-else :src="app.logo" max-w="45%" rounded-4 h-auto max-h-full min-w-82 object-cover :class="getLogoClasses(app.name)" />
          <p text="12 white/70" self-start right-12 top-12 justify-self-end relative nq-label>
            {{ app.type }}
          </p>
        </div>
        <div p-26 pt-0 flex-1 flex="~ col gap-12">
          <h3>{{ app.name }}</h3>
          <p text="16 neutral-800 group-hover:neutral-900" mt-0 transition-colors leading-150>
            {{ app.description }}
          </p>
          <div class="nq-hoverable-cta" mt-auto w-max>
            <p v-if="app.developer" text-14 nq-label>
              By <span text-blue>{{ app.developer }}</span>
            </p>
          </div>
        </div>
      </NuxtLink>

      <!-- CardHighlighted -->
      <div v-else flex="~ wrap items-center gap-8" rounded-6 bg-neutral-0 h-full shadow f-p-xs>
        <NuxtImg v-if="app.screenshot" :src="app.screenshot" rounded-4 rounded-8 h-auto max-h="445 md:full" max-w-full w="full md:320" object-cover />
        <div flex="~ col gap-12" p-24 flex-1>
          <h3>{{ app.name }}</h3>
          <p text="16 neutral-800" mt-0 leading-150>
            {{ app.description }}
          </p>
          <NuxtLink :to="getHighlightedUrl(app.link)" mx-0 f-mt-md nq-arrow nq-pill-lg nq-pill-blue>
            Learn more
          </NuxtLink>
        </div>
      </div>
    </li>
  </ul>

  <p v-else text-neutral-700 text-center f-mt-xl>
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
