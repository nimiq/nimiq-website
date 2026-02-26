<script setup lang="ts">
import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'

const { amountLabel, periodLabel, rewardsLabel, initialStakingAmount = 1_000_000 } = defineProps<{
  amountLabel?: string
  periodLabel?: string
  rewardsLabel?: string
  initialStakingAmount?: number
}>()

const decimals = ref(0)
const storageKey = 'staking-calculator'
const amount = useLocalStorage(`${storageKey}_amount`, initialStakingAmount)

enum StakeSupply {
  Low = 'Low',
  Middle = 'Middle',
  High = 'High',
  Live = 'Live',
}

const stakeSupplyLabels: Record<StakeSupply, string> = {
  [StakeSupply.Low]: '30%',
  [StakeSupply.Middle]: '50%',
  [StakeSupply.High]: '70%',
  [StakeSupply.Live]: 'Live',
}

const { stakingRatio } = useStakingInfo()
const stakedSupplyOptions = computed(() => {
  return !stakingRatio.value
    ? [StakeSupply.Low, StakeSupply.Middle, StakeSupply.High]
    : [StakeSupply.Low, StakeSupply.Middle, StakeSupply.High, StakeSupply.Live]
})
const selectedStakedSupply = useLocalStorage<StakeSupply>(`${storageKey}_staked-supply`, StakeSupply.Live)
const stakeSupplyRatios = computed(() => ({
  [StakeSupply.Low]: 0.25,
  [StakeSupply.Middle]: 0.5,
  [StakeSupply.High]: 0.75,
  [StakeSupply.Live]: stakingRatio.value,
}))

const stakingPeriodOptions = [
  { label: '1m', days: 30 },
  { label: '3m', days: 3 * 30 },
  { label: '6m', days: 6 * 30 },
  { label: '1y', days: 12 * 30 },
  { label: '5y', days: 5 * 12 * 30 },
]
const selectedStakingPeriod = useLocalStorage(`${storageKey}_staking-period`, stakingPeriodOptions.at(-2))
const autoRestake = useLocalStorage(`${storageKey}_auto-restake`, true)

const rewards = computed(() => {
  const ratio = stakeSupplyRatios.value[selectedStakedSupply.value]
  if (!ratio)
    return { gain: 0, gainRatio: 0 }
  return calculateStakingRewards({
    amount: amount.value,
    days: selectedStakingPeriod.value!.days,
    stakedSupplyRatio: ratio,
    autoRestake: autoRestake.value,
  })
})
</script>

<template>
  <div class="flex flex-col gap-y-4 md:items-center">
    <div class="calculator-card mx-auto rounded-1.5 bg-neutral-0 max-w-full w-max flex items-center flex-wrap overflow-clip">
      <div class="grid grid-max-md:cols-1 md:grid-rows-[auto_1fr] gap-x-8 gap-y-3 md:grid-flow-col mx-auto p-8 overflow-auto">
        <span class="text-max-md:center text-neutral-800 font-semibold">{{ amountLabel || 'Staking amount' }}</span>
        <label class="flex items-baseline gap-1 text-neutral hover:text-blue focus:text-blue focus-within:text-blue h-max w-max transition-colors self-end max-md:mx-auto">
          <UiAmountInput v-model="amount" grouping class="outline-none bg-transparent min-w-0 text-blue text-22" :decimals :min="1" style="padding:0" />
          <span class="leading-none font-bold flex-1 text-blue text-base tracking-1">NIM</span>
        </label>

        <div class="flex gap-2 items-center flex-max-md:justify-center max-md:mt-2">
          <span class="w-max">Total stake</span>
          <UiTooltip>
            <p>Choose a staking supply scenario or use live data</p>
          </UiTooltip>
        </div>
        <UiRadioInput v-model="selectedStakedSupply" class="h-max self-end max-md:mx-auto" :options="stakedSupplyOptions">
          <template #label="{ option }">
            <template v-if="(stakeSupplyRatios[option] ?? -1) >= 0">
              <span>{{ stakeSupplyLabels[option] }}</span>
              <div v-if="option === selectedStakedSupply && selectedStakedSupply === StakeSupply.Live" class="blink rounded-full bg-green size-1 right-0.5 top-0.5 absolute" />
            </template>
          </template>
        </UiRadioInput>

        <div class="flex gap-2 items-center flex-max-md:justify-center max-md:mt-2">
          <p class="w-max">
            {{ periodLabel || 'Staking period' }}
          </p>
          <UiTooltip>
            <p>Select how long you plan to stake your NIM</p>
          </UiTooltip>
        </div>
        <UiRadioInput v-model="selectedStakingPeriod" class="h-max self-end max-md:mx-auto" :options="stakingPeriodOptions" :get-label="item => item.label" :is-selected="item => item.days === selectedStakingPeriod?.days" />
      </div>
      <div class="flex flex-col gap-3 bg-green/10 px-8 py-6 flex-1 self-stretch justify-center max-md:items-center whitespace-nowrap">
        <div class="flex items-center justify-between text-neutral-800 w-full">
          <div class="flex items-center gap-1.5">
            <p>{{ rewardsLabel || 'Return in NIM' }}*</p>
            <UiTooltip>
              <p>Estimated rewards based on current network parameters</p>
            </UiTooltip>
          </div>
          <p class="text-green/60 font-bold">
            +<UiTweenedNumber :value="rewards.gainRatio * 100" :duration="1000" :decimals="2" />%
          </p>
        </div>
        <span class="text-28 text-green leading-none font-semibold">
          +<UiTweenedNumber :value="rewards.gain" :duration="1000" /> NIM
        </span>
      </div>
    </div>
    <p class="text-max-md:center text-green-1100 font-semibold">
      *depends on the current total stake
    </p>
    <label class="flex items-center gap-3 flex-max-md:justify-center cursor-pointer">
      <span class="nq-toggle" :class="{ active: autoRestake }" @click.prevent="autoRestake = !autoRestake">
        <input v-model="autoRestake" class="sr-only" type="checkbox">
        <span class="nq-toggle-handle" />
      </span>
      <span class="mr-1.5">Re-stake rewards</span>
      <UiTooltip>
        <p>Automatically compound your staking rewards</p>
      </UiTooltip>
    </label>
  </div>
</template>

<style scoped>
.calculator-card {
  border: 2px solid color-mix(in oklch, var(--color-neutral) 15%, transparent);
  box-shadow:
    0px 18px 38px rgba(31, 35, 72, 0.07),
    0px 7px 8.5px rgba(31, 35, 72, 0.04),
    0px 2px 2.5px rgba(31, 35, 72, 0.02);
}

.nq-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 33px;
  height: 20px;
  border-radius: 70px;
  background: color-mix(in oklch, var(--color-neutral) 10%, transparent);
  border: 1.5px solid color-mix(in oklch, var(--color-neutral) 10%, transparent);
  cursor: pointer;
  transition:
    background-color 200ms ease,
    border-color 200ms ease;
  flex-shrink: 0;
}

.nq-toggle.active {
  background: var(--color-blue);
  border-color: var(--color-blue);
}

.nq-toggle-handle {
  position: absolute;
  left: 1px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: white;
  border: 1px solid rgba(31, 35, 72, 0.15);
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.14);
  transition: left 200ms ease;
}

.nq-toggle.active .nq-toggle-handle {
  left: 15px;
}

.blink {
  animation: blink 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 600ms;
}

@keyframes blink {
  0%,
  10% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  90%,
  100% {
    opacity: 1;
  }
}
</style>
