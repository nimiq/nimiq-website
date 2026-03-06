import { getCachedData } from '../utils/cache'

interface Validator {
  id: number
  name: string
  address: string
  fee: number
  payoutType: string
  payoutSchedule: string
  description: null | string
  accentColor: string
  isMaintainedByNimiq: boolean
  hasDefaultLogo: boolean
  website: string | null
  score: { total: number, dominance: number, reliability: number, availability: number }
  logo?: string
  dominanceRatio: number
  balance: number
}

export default defineEventHandler(async (_event) => {
  const { validatorsApi } = useSafeRuntimeConfig().public

  return getCachedData('validators', async () => {
    try {
      return $fetch<Validator[]>(`${validatorsApi}/api/v1/validators`)
    }
    catch (error) {
      console.error('Failed to fetch validators:', error)
      throw createError({ statusCode: 502, message: 'Failed to fetch validators from upstream' })
    }
  }, 300)
})
