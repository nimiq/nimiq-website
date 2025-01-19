<script setup lang="ts">
import type { AppsShowcaseSliceDefaultPrimary, NimiqAppDocumentData } from '~~/prismicio-types'
import { breakpointsTailwind } from '@vueuse/core'

const { labelTeamNimiq } = defineProps<AppsShowcaseSliceDefaultPrimary>()

const { client } = usePrismic()

const { smaller, between } = useBreakpoints(breakpointsTailwind)
const isMediumScreen = between('md', 'xl')
const isSmallScreen = smaller('md')

const priorityLevels = {
  high: 3,
  medium: 2,
  low: 1,
  null: 1,
}

enum MadeBy {
  Anyone = 'anyone',
  Official = 'official',
  Community = 'community',
}

const { data: apps } = useAsyncData(`apps_showcase_all`, async () => {
  const apps = await client.getAllByType('nimiq_app').then(apps => apps.map(doc => doc.data))
  apps.forEach((app) => {
    app.developer ||= labelTeamNimiq
  })
  return apps.sort(() => Math.random() - 0.5)
    .sort((a, b) => {
      const pla = priorityLevels[a.priority_level]
      const plb = priorityLevels[b.priority_level]
      if (pla > plb)
        return -1
      if (pla < plb)
        return 1
      return 0
    })
})

const highlightedOrder = Object.freeze(['Nimiq Wallet', 'Nimiq Pay App', 'Crypto Map', 'SuperSimpleSwap'])

function sortHighlightApps(selectedApps: NimiqAppDocumentData[]) {
  const highlightedApps = selectedApps.reduce((acc: { i: number, name: string }[], app, i) => {
    if (app.isHighlighted) {
      acc.push({ i, name: app.name ?? '' })
    }
    return acc
  }, [])

  highlightedApps.sort(({ name: nameA }, { name: nameB }) => {
    return highlightedOrder.indexOf(nameB) - highlightedOrder.indexOf(nameA)
  })
  return selectedApps
}

function getHighlightedAppPosition({ name, isHighlighted }: NimiqAppDocumentData) {
  if (!isHighlighted)
    return

  let appIndex = highlightedOrder.indexOf(name!)
  if (isSmallScreen.value || isMediumScreen.value) {
    const colSpan = isSmallScreen.value ? 1 : 2
    return {
      gridColumn: `1 / span ${colSpan}`,
      gridRow: `${(appIndex + 1) * 3 - 2}`,
    }
  }
  else {
    const columnStart = ++appIndex % 2 === 0 ? '2' : '1'
    return {
      gridColumn: `${columnStart} / span 2`,
      gridRow: `${appIndex * 2 - 1}`,
    }
  }
}

const selectedFilter = ref<MadeBy>(MadeBy.Anyone)
const selectedApps = computed(() => {
  if (!apps.value)
    return []
  switch (selectedFilter.value) {
    case MadeBy.Official:
      return sortHighlightApps(apps.value!.filter(item => item.isOfficial))
    case MadeBy.Community:
      return apps.value?.filter(item => !item.isOfficial)
    default:
      return sortHighlightApps(apps.value!)
  }
})
</script>

<template>
  <ul v-if="selectedApps && selectedApps.length > 0" f-m-xl grid="~ gap-16 cols-[repeat(auto-fit,350px)] 2xl:gap-32 xl:gap-24">
    <li v-for="(app, i) in selectedApps" :key="i" :style="getHighlightedAppPosition(app)" w-full>
      <CardApp v-if="!app.isHighlighted" v-bind="app" w-full />
      <CardHighlighted v-else v-bind="app" w-full />
    </li>
  </ul>
</template>
