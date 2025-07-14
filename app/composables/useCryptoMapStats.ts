import { useRuntimeConfig } from '#imports'
import { useQuery } from '@pinia/colada'

export interface ContinentStat {
  continent_name: string
  locations_count: number
  cryptocities_count: number
}

export function useCryptoMapStats() {
  const { cryptoMapSupabase } = useRuntimeConfig().public

  const getSupabaseEndpoint = (fn: string) =>
    `${cryptoMapSupabase.url}/rest/v1/rpc/${fn}?apikey=${cryptoMapSupabase.key}`

  // Load cryptoMap stats with useQuery
  const { data: cryptoMapStats } = useQuery({
    key: () => ['get_stats'],
    query: () => $fetch<{ locations: number }>(getSupabaseEndpoint('get_stats')),
  })

  const cryptoMapLocationsCount = computed(() => cryptoMapStats.value?.locations || 30335)

  const { data: cryptoMapContinentsStats } = useQuery({
    key: () => ['get_stats_for_all_continents'],
    query: () => $fetch<ContinentStat[]>(getSupabaseEndpoint('get_stats_for_all_continents')),
  })

  return {
    cryptoMapLocationsCount,
    cryptoMapContinentsStats,
  }
}
