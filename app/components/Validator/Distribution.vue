<script setup lang="ts">
import type { DonutDatum } from '../Chart/Donut.client.vue'
import type { Validator } from '~/composables/useValidatorsInfo'

defineProps<{ headline?: string, info?: string }>()

const locale = useLocale()
const percentageFormatter = new Intl.NumberFormat(locale.value, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 })
const amountFormatter = new Intl.NumberFormat(locale.value, { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 })

const { validators } = useValidatorsInfo()

const data = computed(() => {
  if (!validators.value)
    return []
  const validatorsList: (DonutDatum & Validator)[] = []
  const smallValidators = { color: 'var(--color-neutral-400)', value: 0, name: 'Others', logo: '', balance: 0 }
  for (const { dominanceRatio, accentColor, ...v } of validators.value) {
    if (dominanceRatio < 0.02) {
      smallValidators.value += dominanceRatio
      smallValidators.balance += v.balance
    }
    else {
      validatorsList.push({ color: accentColor, value: dominanceRatio, dominanceRatio, accentColor, ...v } as any)
    }
  }
  return smallValidators.value > 0 ? [...validatorsList, smallValidators] : validatorsList
})
</script>

<template>
  <div class="flex flex-col items-center">
    <ChartDonut :data="data!">
      <template #default="{ color, value, name, logo, balance }">
        <div :key="name" class="ring-1.5 flex items-center gap-4 text-neutral font-semibold p-4 rounded-2 bg-neutral-0 w-max shadow" data-tooltip-container :style="`--c: ${color}; --tw-ring-color: var(--c)`">
          <img v-if="logo" :src="logo" class="size-10" loading="lazy">
          <div class="flex gap-0.5 flex-col font-semibold leading-none">
            <h3 class="text-lg">
              {{ name }}
            </h3>
            <div class="flex justify-between items-baseline gap-3 mt-1">
              <span class="text-sm text-neutral-800 leading-none">
                {{ percentageFormatter.format(value) }}
              </span>
              <p v-if="balance > 0" class="text-green text-xs font-bold leading-none">
                {{ amountFormatter.format(balance / 1e5) }} NIM
              </p>
            </div>
          </div>
        </div>
      </template>
    </ChartDonut>
    <h3 v-if="headline" class="text-center font-bold text-xl md:text-2xl mt-4">
      {{ headline }}
    </h3>
    <p v-if="info" class="text-center max-w-[42ch] mt-2">
      {{ info }}
    </p>
  </div>
</template>
