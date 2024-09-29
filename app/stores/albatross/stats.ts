import type { LiveviewStats } from '~~/server/utils/albatross.types'

export const useAlbatrossStats = defineStore('albatross-stats', () => {
  const url = `${useRuntimeConfig().public.apiDomain}/api/albatross/stats`
  const { status, data: statsStr } = useWebSocket(url, {
    autoReconnect: {
      retries: 3,
      delay: 1000,
      onFailed() {
        console.error('Failed to connect to Stats WS after 3 retries')
      },
    },
  })

  const stats = computed(() => JSON.parse(statsStr.value || '{ "txPerSecond": 0 , "blockTime": 0 }') as LiveviewStats)

  return {
    status,
    stats,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAlbatrossStats, import.meta.hot))
}
