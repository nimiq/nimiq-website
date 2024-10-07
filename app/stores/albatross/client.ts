import initNimiqClient, { Policy } from '@nimiq/core/web'

export const useNimiqAlbatross = defineStore('nimiq-albatross', () => {
  const { data: policy } = useAsyncData('policy', async () => {
    await initNimiqClient()
    return Policy
  })
  const slots = computed(() => policy.value?.SLOTS || 512)
  const genesisBlockNumber = computed(() => policy.value?.GENESIS_BLOCK_NUMBER || 3032010)
  const blocksPerBatch = computed(() => policy.value?.BLOCKS_PER_BATCH || 60)

  return {
    slots,
    genesisBlockNumber,
    blocksPerBatch,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNimiqAlbatross, import.meta.hot))
}
