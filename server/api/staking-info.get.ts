import { getCachedData } from '../utils/cache'

interface SupplyResponse {
  total: number
  vested: number
  burned: number
  max: number
  initial: number
  staking: number
  minted: number
  circulating: number
  mined: number
}

export default defineEventHandler(async (_event) => {
  const { validatorsApi } = useRuntimeConfig().public

  return getCachedData('staking-info', async () => {
    try {
      const data = await $fetch<SupplyResponse>(`${validatorsApi}/api/v1/supply`)
      const stakingRatio = data.staking / data.circulating

      return {
        circulating: data.circulating,
        staking: data.staking,
        stakingRatio,
      }
    }
    catch (error) {
      console.error('Failed to fetch staking info:', error)
      throw createError({ statusCode: 502, message: 'Failed to fetch staking info from upstream' })
    }
  }, 300) // 5 minutes
})
