export interface Validator {
  id: number
  name: string
  address: string
  fee: number
  payoutType: string
  payoutSchedule: string
  description: null | string
  accentColor: string
  isMaintainedByNimiq: boolean
  hasDefaultIcon: boolean
  website: null
  score: Score
  icon?: string
  sizeRatio: number
  balance: number
}

export interface Score {
  liveness: number
  total: number
  size: number
  reliability: number
}
