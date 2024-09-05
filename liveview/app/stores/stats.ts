import type { StatsLiveview } from '~~/server/types'

export const useStats = defineStore('stats', () => {
  const { status, data, error } = useEventSource('/api/stream-stats', [], {
    autoReconnect: {
      retries: 3,
      delay: 1000,
      onFailed() {
        // eslint-disable-next-line no-alert
        alert('Failed to connect Stats EventSource after 3 retries')
      },
    },
  })

  const emptyStats: StatsLiveview = { duration: 0, numberBlocks: 0, txLimit: 0, throughput: 0, blockTime: 0, fromBlock: 0, toBlock: 0 }
  const stats = computed<StatsLiveview>(() => data.value ? JSON.parse(data.value) : emptyStats)

  return {
    status,
    error,
    stats,
  }
})
