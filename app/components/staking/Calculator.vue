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
const autoRestake = useLocalStorage(`${storageKey}_auto-restake}`, true)

const rewards = computed(() => calculateStakingRewards({
  amount: amount.value,
  days: selectedStakingPeriod.value!.days,
  stakedSupplyRatio: stakeSupplyRatios.value[selectedStakedSupply.value]!,
  autoRestake: autoRestake.value,
}))
</script>

<template>
  <div class="flex flex-col gap-y-4 flex-md:items-center">
    <div class="ring-1.5 ring-neutral-400 mx-auto rounded-1 bg-neutral-0 max-w-full w-max flex flex-items-center flex-wrap" shadow>
      <div class="grid grid-max-md:cols-1 grid-md:rows-[auto_1fr] gap-x-8 gap-y-3 grid-md:flow-col mx-auto p-8 of-auto">
        <span class="text-max-md:center text-neutral-800 font-semibold">{{ amountLabel || 'Amount' }}</span>
        <label class="flex flex-items-baseline gap-2 text-neutral text-hocus:blue text-focus-within:blue h-max w-max transition-colors self-end max-md:mx-auto">
          <UiAmountInput v-model="amount" class="shadow-none outline-none max-w-9ch min-w-0 w-max text-blue text-f-2xl" :decimals :min="1" style="padding:0" />
          <span class="lh-none font-bold flex-1 text-blue text-f-lg">NIM</span>
        </label>

        <div class="flex gap-2 flex-items-center flex-max-md:justify-center max-md:mt-2">
          <span class="w-max">Total stake</span>
          <UiTooltip>
            <p>Choose a staking supply scenario or use live data</p>
          </UiTooltip>
        </div>
        <UiRadioInput v-model="selectedStakedSupply" class="h-max self-end max-md:mx-auto" :options="stakedSupplyOptions">
          <template #label="{ option }">
            <template v-if="(stakeSupplyRatios[option] ?? -1) >= 0">
              <span>{{ option }}</span>
              <div v-if="option === selectedStakedSupply && selectedStakedSupply === StakeSupply.Live" class="blink rounded-full bg-green size-1 right-0.5 top-0.5 absolute" />
            </template>
          </template>
        </UiRadioInput>

        <div class="flex gap-2 flex-items-center flex-max-md:justify-center max-md:mt-2">
          <p class="w-max">
            {{ periodLabel || 'Period' }}
          </p>
          <UiTooltip>
            <p>Select how long you plan to stake your NIM</p>
          </UiTooltip>
        </div>
        <UiRadioInput v-model="selectedStakingPeriod" class="h-max self-end max-md:mx-auto" :options="stakingPeriodOptions" :get-label="item => item.label" :is-selected="item => item.days === selectedStakingPeriod?.days" />
      </div>
      <div class="flex flex-col flex-md:justify-center flex-items-center flex-md:items-end bg-green/10 rounded-b-1 rounded-md:b-0 rounded-md:r-4 px-8 py-6 flex-1 self-stretch">
        <div class="flex flex-items-center text-neutral-800">
          <p class="mr-2">
            {{ rewardsLabel || 'Return in NIM' }}*
          </p>
          <UiTooltip class="mr-4">
            <p>Estimated rewards based on current network parameters</p>
          </UiTooltip>
          <p class="text-green/60 text-right font-bold w-8ch lg:ml-auto">
            +<UiTweenedNumber :value="rewards.gainRatio * 100" :duration="1000" :decimals="2" />%
          </p>
        </div>
        <span class="text-28 text-green lh-none font-semibold mt-3">
          +<UiTweenedNumber :value="rewards.gain" :duration="1000" /> NIM
        </span>
      </div>
    </div>
    <p class="text-max-md:center text-green-1100 font-semibold">
      *Assuming current network conditions remain constant
    </p>
    <label class="flex flex-items-center flex-max-md:justify-center">
      <input v-model="autoRestake" class="nq-switch" type="checkbox">
      <span class="ml-3 mr-1.5 cursor-pointer">Auto-restake rewards</span>
      <UiTooltip>
        <p>Automatically compound your staking rewards</p>
      </UiTooltip>
    </label>
  </div>
</template>

<style scoped>
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
