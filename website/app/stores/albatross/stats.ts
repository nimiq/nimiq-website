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

  const emptyStats: LiveviewStats = { txPerSecond: 0, blockTime: 0 }
  const stats = computed<LiveviewStats>(() => data.value ? JSON.parse(data.value) : emptyStats)

  return {
    status,
    error,
    data,
    stats,
    txPerSecond: computed(() => stats.value.txPerSecond),
    blockTime: computed(() => stats.value.blockTime),
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAlbatrossStats, import.meta.hot))
}
