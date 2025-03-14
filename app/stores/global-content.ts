import type {
  NimiqAppDocument,
  NimiqAppDocumentData,
} from '~~/prismicio-types.js'
import { useRuntimeConfig, useState } from '#imports'
import { useQuery } from '@pinia/colada'
import { defineStore } from 'pinia'

export type AppsAttributes = NimiqAppDocument['data'] & {
  color: `#${string}`
}

const appColor: Record<Exclude<NimiqAppDocumentData['type'], null>, string> = {
  'E-commerce': colors.blue,
  'Games': colors.purple,
  'Infrastructure': colors.red,
  'Insights': colors.green,
  'Miner': 'rgb(var(--nq-neutral) / 1)',
  'Wallets': colors.orange,
  'Bots': colors.gold,
  'Faucet': '#FA7268', // pink
  'Promotion': '#795548', // brown
}

export const useGlobalContent = defineStore('global-content', () => {
  const { client } = usePrismic()

  // Load apps data with useQuery
  const { data: apps } = useQuery({
    key: () => ['apps'],
    query: async () => {
      const res = await client.getByType('nimiq_app')
      return res.results
    },
  })
  const nimiqApps = computed(() => {
    if (!apps.value)
      return {} as Record<string, AppsAttributes>
    return Object.fromEntries(
      apps.value.map((app) => {
        const data = app.data
        return [
          data.name,
          { ...data, color: data.type ? appColor[app.data.type] : '#000' },
        ]
      }),
    ) as Record<string, AppsAttributes>
  })

  function getRandomApps(n: number) {
    // Using Nuxt's useState is fine here.
    const randomApps = useState('random_apps', () => {
      const apps = Object.values(nimiqApps.value || []).filter(({ logo }) =>
        hasImage(logo),
      )
      return apps.sort(() => Math.random() - 0.5).slice(0, Math.min(n, apps.length))
    })
    return randomApps
  }

  const { supabase } = useRuntimeConfig().public
  const getSupabaseEndpoint = (fn: string) =>
    `${supabase.url}/rest/v1/rpc/${fn}?apikey=${supabase.key}`

  // Load cryptoMap stats with useQuery
  const { data: cryptoMapStats } = useQuery({
    key: () => ['get_stats'],
    query: () => $fetch<{ locations: number }>(getSupabaseEndpoint('get_stats')),
  })
  const cryptoMapLocationsCount = computed(() => cryptoMapStats.value?.locations || 30335)
  const { data: cryptoMapContinentsStats } = useQuery({
    key: () => ['get_stats_for_all_continents'],
    query: () => $fetch<{ locations: number }>(getSupabaseEndpoint('get_stats_for_all_continents')),
  })

  return {
    cryptoMapLocationsCount,
    cryptoMapContinentsStats,
    getRandomApps,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalContent, import.meta.hot))
}
