export const useAlbatrossStats = defineStore('albatross-stats', () => {
  const { status, data, error } = useEventSource('/api/albatross/stats', [], {
    autoReconnect: {
      retries: 3,
      delay: 1000,
      onFailed() {
        console.error('Failed to connect Stats EventSource after 3 retries')
      },
    },
  })

  const emptyStats: LiveviewStats = { duration: 0, numberBlocks: 0, txLimit: 0, throughput: 0, blockTime: 0, fromBlock: 0, toBlock: 0 }
  const stats = computed<LiveviewStats>(() => data.value ? JSON.parse(data.value) : emptyStats)

  return {
    status,
    error,
    stats,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAlbatrossStats, import.meta.hot))
}
