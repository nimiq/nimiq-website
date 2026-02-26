const LUNA_PER_NIM = 1e5
const TOTAL_SUPPLY_LUNA = 21e14
const SUPPLY_DECAY = 0.9999999999960264

const WALLET_GENESIS_DATE = new Date('2024-11-19T16:00:00.000Z')
const WALLET_GENESIS_SUPPLY_LUNA = 12_893_109_654_06244

const PROTOCOL_MIGRATION_DATE = new Date('2024-11-19T16:45:20.000Z')
const PROTOCOL_GENESIS_SUPPLY_MAIN_NIM = 12_893_109_654.06244
const PROTOCOL_GENESIS_SUPPLY_TEST_NIM = 12_030_755_339.52899
const POS_DECAY_PER_DAY = 3432600460362e-16

export interface StakingDistributionResponse {
  staked: number
  circulating: number
  stakedRatio: number
}

export interface CalculateWalletAlignedRewardRatioParams {
  currentlyStakedNim: number
  days?: number
  fee?: number
}

export interface CalculateProtocolStakingRewardsParams {
  stakedSupplyRatio: number
  amount?: number
  days?: number
  autoRestake?: boolean
  network?: 'main-albatross' | 'test-albatross'
  fee?: number
}

export interface CalculateProtocolStakingRewardsResult {
  totalAmount: number
  gain: number
  gainRatio: number
}

export function calculateWalletAlignedRewardRatio(params: CalculateWalletAlignedRewardRatioParams): number {
  const {
    currentlyStakedNim,
    days = 365,
    fee = 0,
  } = params

  if (!Number.isFinite(currentlyStakedNim) || currentlyStakedNim <= 0)
    return 0

  if (fee < 0 || fee > 1)
    throw new Error(`Invalid fee: ${fee}. It must be between 0 and 1.`)

  const now = Date.now()
  const currentSupplyLuna = walletSupplyAtTimeLuna(now)
  const futureSupplyLuna = walletSupplyAtTimeLuna(now + days * 24 * 60 * 60 * 1e3)
  const currentlyStakedLuna = currentlyStakedNim * LUNA_PER_NIM

  return ((futureSupplyLuna - currentSupplyLuna) / currentlyStakedLuna) * (1 - fee)
}

export function calculateProtocolStakingRewards(params: CalculateProtocolStakingRewardsParams): CalculateProtocolStakingRewardsResult {
  const {
    amount = 1e5,
    days = 365,
    autoRestake = true,
    stakedSupplyRatio,
    network = 'main-albatross',
    fee = 0,
  } = params

  if (stakedSupplyRatio < 0 || stakedSupplyRatio > 1)
    throw new Error(`Invalid stakedSupplyRatio: ${stakedSupplyRatio}. It must be in the range [0, 1].`)

  if (fee < 0 || fee > 1)
    throw new Error(`Invalid fee: ${fee}. It must be between 0 and 1.`)

  const genesisSupply = network === 'test-albatross' ? PROTOCOL_GENESIS_SUPPLY_TEST_NIM : PROTOCOL_GENESIS_SUPPLY_MAIN_NIM
  const oneDayAfterGenesis = PROTOCOL_MIGRATION_DATE.getTime() + 24 * 60 * 60 * 1e3
  const initialRewardsPerDay = protocolPosSupplyAt(oneDayAfterGenesis, { network }) - genesisSupply
  const decayFactor = Math.E ** (-POS_DECAY_PER_DAY * days)

  let gainRatio = 0

  if (autoRestake) {
    const rewardFactor = initialRewardsPerDay / (POS_DECAY_PER_DAY * stakedSupplyRatio * genesisSupply)
    gainRatio = rewardFactor * (1 - decayFactor)
  }
  else {
    gainRatio = 1 / stakedSupplyRatio * (Math.log(
      POS_DECAY_PER_DAY * genesisSupply * (1 / decayFactor) + initialRewardsPerDay * (1 / decayFactor) - initialRewardsPerDay,
    ) - POS_DECAY_PER_DAY * days - Math.log(POS_DECAY_PER_DAY * genesisSupply))
  }

  gainRatio *= 1 - fee

  const totalAmount = amount * (1 + gainRatio)
  return {
    totalAmount,
    gain: totalAmount - amount,
    gainRatio,
  }
}

function walletSupplyAtTimeLuna(timestampMs: number): number {
  const t = timestampMs - WALLET_GENESIS_DATE.getTime()

  if (t < 0)
    throw new Error(`Invalid timestamp: ${timestampMs}. It must be greater than ${WALLET_GENESIS_DATE.getTime()}.`)

  return TOTAL_SUPPLY_LUNA - ((TOTAL_SUPPLY_LUNA - WALLET_GENESIS_SUPPLY_LUNA) * powi(SUPPLY_DECAY, t))
}

function protocolPosSupplyAt(timestampMs: number, { network = 'main-albatross' }: { network?: 'main-albatross' | 'test-albatross' } = {}): number {
  const ts = timestampMs - PROTOCOL_MIGRATION_DATE.getTime()

  if (ts < 0)
    throw new Error(`Invalid timestamp: ${timestampMs}. It must be greater than ${PROTOCOL_MIGRATION_DATE.getTime()}.`)

  const genesisSupply = network === 'test-albatross' ? PROTOCOL_GENESIS_SUPPLY_TEST_NIM : PROTOCOL_GENESIS_SUPPLY_MAIN_NIM
  return (TOTAL_SUPPLY_LUNA - (TOTAL_SUPPLY_LUNA - genesisSupply * LUNA_PER_NIM) * powi(SUPPLY_DECAY, ts)) / LUNA_PER_NIM
}

function powi(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x
    n *= -1
  }
  if (!n)
    return 1

  let y = 1
  while (n > 1) {
    if (n % 2) {
      y *= x
      n -= 1
    }
    x *= x
    n /= 2
  }
  return x * y
}
