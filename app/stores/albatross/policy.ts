import type { PolicyConstants } from 'nimiq-rpc-client-ts'

export const useAlbatrossPolicy = defineStore('albatross-policy', () => {
  const { data: policy } = useFetch<PolicyConstants>('/api/albatross/policy')

  return {
    policy,
    genesisBlockNumber: computed(() => policy.value?.genesisBlockNumber || 1),
    blocksPerBatch: computed(() => policy.value?.blocksPerBatch || 1),
    slots: computed(() => policy.value?.slots || 512),
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAlbatrossPolicy, import.meta.hot))
}
