import type { PolicyConstants } from 'nimiq-rpc-client-ts'

export const usePolicy = defineStore('policy', () => {
  const { data: policy } = useFetch<PolicyConstants>('/api/policy')

  return {
    policy,
    genesisBlockNumber: computed(() => policy.value?.genesisBlockNumber || 1),
    blocksPerBatch: computed(() => policy.value?.blocksPerBatch || 1),
    slots: computed(() => policy.value?.slots || 512),
  }
})
