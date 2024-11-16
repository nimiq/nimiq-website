<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'
import { calculateStakingRewards, type CalculateStakingRewardsParams } from '~~/lib/staking/rewards'

const { initialStakingAmount = 1_000_000 } = defineProps<{
  title: string
  stakingAmountLabel: string
  initialStakingAmount: number
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
const amount = ref(initialStakingAmount)
const liveValue = useLocalStorage(`${storageKey}_live-value`, '')
const lastEmittedValue = ref(0)

// Code from https://github.com/nimiq/vue3-components/blob/8d54857370cffc6c5fdb7b75b12b0e2eacbc8f04/src/components/AmountInput/AmountInput.vue#L96
const formattedValue = computed({
  get() {
    return liveValue.value
  },
  set(value: string) {
    liveValue.value = value

    if (!value) {
      liveValue.value = ''
      lastEmittedValue.value = 0
      amount.value = 0
      // context.emit(AmountInputEvent.MODELVALUE_UPDATE, valueInLuna.value)
      return
    }

    value = value.replace(/,/, '.')
    const regExp = new RegExp(`(\\d*)(\\.(\\d{0,${decimals.value}}))?`, 'g') // Backslashes are escaped
    const regExpResult = regExp.exec(value)!
    if (regExpResult[1] || regExpResult[2]) {
      liveValue.value = `${regExpResult[1] ? regExpResult[1] : '0'}${regExpResult[2] ? regExpResult[2] : ''}`
      amount.value = Number(`${regExpResult[1]}${(regExpResult[2] ? regExpResult[3]! : '').padEnd(decimals.value, '0')}`)
    }
    else {
      liveValue.value = ''
      amount.value = 0
    }

    if (lastEmittedValue.value !== amount.value) {
      lastEmittedValue.value = amount.value
    }
  },
})

function updateValue(newValue: number) {
  if (newValue === amount.value)
    return
  lastEmittedValue.value = newValue || 0
  formattedValue.value = newValue ? (newValue / 10 ** decimals.value).toString() : ''
}

watch(amount, newValue => updateValue(newValue), { immediate: true })

enum StakeSupply {
  Low = 'Low',
  Middle = 'Middle',
  High = 'High',
}

const stakedSupplyOptions = Object.values(StakeSupply) as StakeSupply[]
const selectedStakedSupply = useLocalStorage<StakeSupply>(`${storageKey}_staked-supply`, StakeSupply.Middle)

const stakingPeriodOptions = [
  { label: '1m', days: 30 },
  { label: '3m', days: 3 * 30 },
  { label: '6m', days: 6 * 30 },
  { label: '1y', days: 12 * 30 },
  { label: '5y', days: 5 * 12 * 30 },
]
const selectedStakingPeriod = useLocalStorage(`${storageKey}_staking-period`, stakingPeriodOptions.at(-2))
const autoRestake = useLocalStorage(`${storageKey}_auto-restake}`, false)

const stakeSupplyRatios: Record<StakeSupply, number> = {
  [StakeSupply.Low]: 0.25,
  [StakeSupply.Middle]: 0.5,
  [StakeSupply.High]: 0.75,
}

const params = computed(() => ({
  amount: amount.value,
  daysStaked: selectedStakingPeriod.value!.days,
  stakedSupplyRatio: stakeSupplyRatios[selectedStakedSupply.value]!,
  autoRestake: autoRestake.value,
} satisfies CalculateStakingRewardsParams))

const rewards = computed(() => calculateStakingRewards(params.value))
</script>

<template>
  <div flex="~ col gap-y-16 items-center">
    <h2 w-max text-12 nq-label>
      {{ title }}
    </h2>
    <div ring="1.5 neutral-400" mx-auto max-w-full w-max rounded-4 bg-neutral-0 shadow flex="~ items-center wrap">
      <div grid="~ rows-[auto_1fr] gap-x-32 gap-y-12 flow-col" of-auto p-32>
        <span text-neutral-800 font-semibold>{{ stakingAmountLabel }}</span>
        <label flex="~ items-baseline gap-8" h-max self-end text-blue>
          <input v-model="formattedValue" bg-transparent type="text" style="field-sizing: content" px-2 font-semibold lh-none text-xl inputmode="decimal">
          <span font-bold lh-none text-lg>NIM</span>
        </label>

        <div flex="~ gap-8 items-center">
          <span>Total stake</span>
          <Tooltip>
            <PrismicRichText :field="stakedSupplyInfo" />
          </Tooltip>
        </div>
        <RadioInput v-model="selectedStakedSupply" h-max :options="stakedSupplyOptions" self-end>
          <template #label="{ option }">
            <span>{{ option }}</span>
            <!-- <div v-if="option === selectedStakedSupply && selectedStakedSupply === StakeSupply.Live" class="blink" absolute right-2 top-2 size-4 rounded-full bg-green /> -->
          </template>
        </RadioInput>

        <div flex="~ gap-8 items-center">
          <p>{{ stakingPeriodLabel }}</p>
          <Tooltip>
            <PrismicRichText :field="stakingPeriodInfo" />
          </Tooltip>
        </div>
        <RadioInput v-model="selectedStakingPeriod" h-max self-end :options="stakingPeriodOptions" :get-label="item => item.label" :is-selected="item => item.days === selectedStakingPeriod?.days" />
      </div>
      <div flex="~ col" bg="green/10" flex-1 p-32>
        <div flex="~ items-center" text-neutral-800>
          <p mr-8>
            Return in NIM*
          </p>
          <Tooltip mr-16>
            <PrismicRichText :field="autoRestakeInfo" />
          </Tooltip>
          <p ml-auto text="green/60" font-bold>
            +<AnimatedTweenedNumber :value="rewards.gainRatio * 100" :duration="200" :decimals="2" />%
          </p>
        </div>
        <span text="28 green" mt-12 font-semibold lh-none>
          +<AnimatedTweenedNumber :value="rewards.gain" :duration="200" /> NIM
        </span>
      </div>
    </div>
    <p text-green-1100 font-semibold>
      {{ note }}
    </p>
    <label flex="~ items-center">
      <input v-model="autoRestake" type="checkbox" nq-switch>
      <span ml-12 mr-6 cursor-pointer>{{ autoRestakeLabel }}</span>
      <Tooltip>
        <PrismicRichText :field="autoRestakeInfo" />
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
