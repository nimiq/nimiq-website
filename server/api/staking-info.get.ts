import { getCachedData } from '../utils/cache'

interface DistributionResponse {
  staked: number
  circulating: number
  stakedRatio: number
}

export default defineEventHandler(async (_event) => {
  const { validatorsApi } = useRuntimeConfig().public

  return getCachedData('staking-info', async () => {
    try {
      return await $fetch<DistributionResponse>(`${validatorsApi}/api/v1/distribution`)
    }
    catch (error) {
      console.error('Failed to fetch staking info:', error)
      throw createError({ statusCode: 502, message: 'Failed to fetch staking info from upstream' })
    }
  }, 300) // 5 minutes
})
