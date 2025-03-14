<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'
import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'

const { initialStakingAmount = 1_000_000 } = defineProps<{
  title: string
  stakingAmountLabel: string
  initialStakingAmount?: number
  stakedSupplyLabel: string
  stakedSupplyInfo: RichTextField
  stakingPeriodLabel: string
  stakingPeriodInfo: RichTextField
  autoRestakeLabel: string
  stakingRewardsLabel: string
  autoRestakeInfo: RichTextField
  note: string
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

const { stakedSupplyRatio } = storeToRefs(useStakingStore())
const stakedSupplyOptions = computed(() => {
  return !stakedSupplyRatio.value
    ? [StakeSupply.Low, StakeSupply.Middle, StakeSupply.High]
    : [StakeSupply.Low, StakeSupply.Middle, StakeSupply.High, StakeSupply.Live]
})
const selectedStakedSupply = useLocalStorage<StakeSupply>(`${storageKey}_staked-supply`, StakeSupply.Live)
const stakeSupplyRatios = computed(() => ({
  [StakeSupply.Low]: 0.25,
  [StakeSupply.Middle]: 0.5,
  [StakeSupply.High]: 0.75,
  [StakeSupply.Live]: stakedSupplyRatio?.value,
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
  <div flex="~ col gap-y-16 md:items-center">
    <h2 w-max text-12 nq-label>
      {{ title }}
    </h2>
    <div ring="1.5 neutral-400" mx-auto max-w-full w-max rounded-4 bg-neutral-0 shadow flex="~ items-center wrap">
      <div grid="~ max-md:cols-1 md:rows-[auto_1fr] gap-x-32 gap-y-12 md:flow-col " mx-auto of-auto p-32>
        <span text="max-md:center neutral-800" font-semibold>{{ stakingAmountLabel }}</span>
        <label flex="~ items-baseline gap-8" text="neutral hocus:blue focus-within:blue" h-max w-max self-end transition-colors max-md:mx-auto>
          <!-- <input v-model="formattedValue" bg-transparent type="text" style="field-sizing: content" px-2 font-semibold lh-none f-text-xl inputmode="decimal"> -->
          <AmountInput v-model="amount" :decimals :min="1" style="padding:0" max-w-9ch min-w-0 w-max shadow-none outline-none text="blue f-2xl" />
          <span flex-1 font-bold lh-none text="blue f-lg">NIM</span>
        </label>

        <div flex="~ gap-8 items-center max-md:justify-center" max-md:mt-8>
          <span w-max>Total stake</span>
          <Tooltip>
            <RichText wrapper="div" :field="stakedSupplyInfo" />
          </Tooltip>
        </div>
        <RadioInput v-model="selectedStakedSupply" :options="stakedSupplyOptions" h-max self-end max-md:mx-auto>
          <template #label="{ option }">
            <template v-if="stakeSupplyRatios[option] >= 0">
              <span>{{ option }}</span>
              <div v-if="option === selectedStakedSupply && selectedStakedSupply === StakeSupply.Live" class="blink" absolute right-2 top-2 size-4 rounded-full bg-green />
            </template>
          </template>
        </RadioInput>

        <div flex="~ gap-8 items-center max-md:justify-center" max-md:mt-8>
          <p w-max>
            {{ stakingPeriodLabel }}
          </p>
          <Tooltip>
            <RichText wrapper="div" :field="stakingPeriodInfo" />
          </Tooltip>
        </div>
        <RadioInput v-model="selectedStakingPeriod" h-max self-end max-md:mx-auto :options="stakingPeriodOptions" :get-label="item => item.label" :is-selected="item => item.days === selectedStakingPeriod?.days" />
      </div>
      <div flex="~ col md:justify-center items-center md:items-end" bg="green/10" flex-1 self-stretch rounded="b-4 md:b-0 md:r-4" px-32 py-24>
        <div flex="~ items-center" text-neutral-800>
          <p mr-8>
            Return in NIM*
          </p>
          <Tooltip mr-16>
            <RichText wrapper="div" :field="autoRestakeInfo" />
          </Tooltip>
          <p text="green/60" font-bold lg:ml-auto>
            +<AnimatedTweenedNumber :value="rewards.gainRatio * 100" :duration="1000" :decimals="2" />%
          </p>
        </div>
        <span text="28 green" mt-12 font-semibold lh-none>
          +<AnimatedTweenedNumber :value="rewards.gain" :duration="1000" /> NIM
        </span>
      </div>
    </div>
    <p text="max-md:center green-1100" font-semibold>
      {{ note }}
    </p>
    <label flex="~ items-center max-md:justify-center">
      <input v-model="autoRestake" type="checkbox" nq-switch>
      <span ml-12 mr-6 cursor-pointer>{{ autoRestakeLabel }}</span>
      <Tooltip>
        <RichText wrapper="div" :field="autoRestakeInfo" />
      </Tooltip>
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
