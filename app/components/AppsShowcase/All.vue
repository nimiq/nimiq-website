<script setup lang="ts">
import type { AppsShowcaseSliceDefaultPrimary, NimiqAppDocumentData } from '~~/prismicio-types'
import { breakpointsTailwind } from '@vueuse/core'

const { labelTeamNimiq } = defineProps<AppsShowcaseSliceDefaultPrimary>()

const { smaller, between } = useBreakpoints(breakpointsTailwind)
const isMediumScreen = between('md', 'xl')
const isSmallScreen = smaller('md')

const { selectedApps, highlightedOrder } = useApps({ labelTeamNimiq: labelTeamNimiq! })

// Getting Highlighted App Position
function getHighlightedAppPosition({ name, isHighlighted }: NimiqApp) {
  if (!isHighlighted)
    return

  let appIndex = highlightedOrder.indexOf(name!)
  if (isSmallScreen.value || isMediumScreen.value) {
    return {
      gridColumn: `1 / span ${isSmallScreen.value ? 1 : 2}`,
      gridRow: `${(appIndex + 1) * 3 - 2}`,
    }
  }
  return {
    gridColumn: `${++appIndex % 2 === 0 ? '2' : '1'} / span 2`,
    gridRow: `${appIndex * 2 - 1}`,
  }
}
</script>

<template>
  <ul v-if="selectedApps.length" f-mt-xl grid="~ gap-16 cols-[repeat(auto-fit,350px)] 2xl:gap-32 xl:gap-24">
    <li v-for="(app, i) in selectedApps" :key="i" :style="getHighlightedAppPosition(app)" w-full>
      <CardApp v-if="!app.isHighlighted" v-bind="app" w-full />
      <CardHighlighted v-else v-bind="app" w-full />
    </li>
  </ul>
</template>
