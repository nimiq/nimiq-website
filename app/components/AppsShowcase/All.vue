<script setup lang="ts">
import type { AppsShowcaseSliceDefaultPrimary } from '~~/prismicio-types'
import { breakpointsTailwind } from '@vueuse/core'

const { labelTeamNimiq } = defineProps<AppsShowcaseSliceDefaultPrimary>()

const { smaller, between } = useBreakpoints(breakpointsTailwind)
const isMediumScreen = between('md', 'xl')
const isSmallScreen = smaller('md')

const { data } = await useApps({ labelTeamNimiq: labelTeamNimiq! })
const { filteredApps, getSpotlightAppsPosition, madeBy } = useAppsGrid(data.value!)

function useAppsGrid({ apps, spotLightApps }: { apps: NimiqApp[], spotLightApps: string[] }) {
  type MadeByType = 'anyone' | 'official' | 'community'

  const madeBy = useRouteQuery<MadeByType>('made-by', 'anyone')

  function getSpotlightAppsPosition({ name, isHighlighted }: NimiqApp) {
    if (!isHighlighted)
      return

    const appIndex = spotLightApps.indexOf(name!)

    if (isSmallScreen.value || isMediumScreen.value) {
      return {
        gridColumn: `1 / span ${isSmallScreen.value ? 1 : 2}`,
        gridRow: `${(appIndex + 1) * 3 - 2}`,
      }
    }

    // For larger screens, place each app in its own row with increasing numbers
    // This ensures Nimiq Pay App (index 1) goes to row 3
    return {
      gridColumn: `${(appIndex % 2 === 0) ? '1' : '2'} / span 2`,
      gridRow: `${(appIndex * 2) + 1}`,
    }
  }

  const filteredApps = computed(() =>
    apps?.filter(item =>
      madeBy.value === 'anyone'
      || (madeBy.value === 'official' && item.isOfficial)
      || (madeBy.value === 'community' && !item.isOfficial),
    ),
  )

  return {
    filteredApps,
    madeBy,
    getSpotlightAppsPosition,
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
        <input id="anyone" v-model="madeBy" type="radio" value="anyone">
        <span>Anyone</span>
      </label>
      <label f-py-xs>
        <input id="official" v-model="madeBy" type="radio" value="official">
        <span>Official</span>
      </label>
      <label f-py-xs f-pr-xs>
        <input id="community" v-model="madeBy" type="radio" value="community">
        <span>Community</span>
      </label>
    </fieldset>
  </form>

  <ul v-if="filteredApps.length" f-mt-xl grid="~ gap-16 cols-[repeat(auto-fit,350px)] 2xl:gap-32 xl:gap-24">
    <li v-for="(app, i) in filteredApps" :key="i" :style="getSpotlightAppsPosition(app)" w-full>
      <CardApp v-if="!app.isHighlighted" v-bind="app" w-full />
      <CardHighlighted v-else v-bind="app" w-full />
    </li>
  </ul>
</template>

<style scoped>
fieldset label {
  input {
    --uno: 'sr-only';
  }
  span {
    --uno: 'text-neutral-700 transition-colors f-px-xs text-16 font-semibold';
  }

  input:checked + span {
    --uno: 'text-neutral';
  }

  input:where(:focus-visible, :hover) + span {
    --uno: 'text-neutral-900';
  }
}
</style>
