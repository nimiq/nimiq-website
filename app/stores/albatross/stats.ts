import type { LiveviewStats } from '~~/server/utils/albatross.types'

export const useAlbatrossStats = defineStore('albatross-stats', () => {
  const url = `${useRuntimeConfig().public.apiDomain}/api/albatross/stats`
  const { status, data: stats } = useWebSocket<LiveviewStats>(url, {
    autoReconnect: {
      retries: 3,
      delay: 1000,
      onFailed() {
        console.error('Failed to connect Stats EventSource after 3 retries')
      },
    },
  })

  return {
    status,
    stats,
    txPerSecond: computed(() => stats.value?.txPerSecond || 0),
    blockTime: computed(() => stats.value?.blockTime || 0),
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAlbatrossStats, import.meta.hot))
}
