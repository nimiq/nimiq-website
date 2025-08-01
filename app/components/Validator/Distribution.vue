<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'
import type { DonutDatum } from '../Chart/Donut.client.vue'

defineProps<{ info: RichTextField }>()

const locale = useLocale()
const percentageFormatter = new Intl.NumberFormat(locale.value, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 })
const amountFormatter = new Intl.NumberFormat(locale.value, { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 })

const { validators } = useValidatorsInfo() // TODO Loading/Error states

const data = computed(() => {
  if (!validators.value)
    return []
  const validatorsList: (DonutDatum & Validator)[] = []
  const smallValidators = { color: 'rgb(var(--nq-neutral-400))', value: 0, name: 'Others', logo: '', balance: 0 }
  for (const { dominanceRatio, accentColor, ...v } of validators.value) {
    if (dominanceRatio < 0.02) {
      smallValidators.value += dominanceRatio
      smallValidators.balance += v.balance
    }
    else {
      validatorsList.push({ color: accentColor, value: dominanceRatio, dominanceRatio, accentColor, ...v })
    }
  }
  return smallValidators.value > 0 ? [...validatorsList, smallValidators] : validatorsList
})
</script>

<template>
  <div flex="~ col items-center">
    <ChartDonut :data="data!">
      <template #default="{ color, value, name, logo, balance }">
        <div :key="name" :style="{ '--c': color }" ring="1.5 $c" flex="~ items-center gap-16" data-tooltip-container text-neutral font-semibold p-16 rounded-8 bg-neutral-0 w-max shadow>
          <img v-if="logo" :src="logo" size-40 loading="lazy">
          <div flex="~ gap-2 col" font-semibold lh-none>
            <h3 f-text-lg>
              {{ name }}
            </h3>
            <div flex="~ justify-between items-baseline gap-12" mt-4>
              <span text="f-sm neutral-800" lh-none>
                {{ percentageFormatter.format(value) }}
              </span>
              <p v-if="balance > 0" text="green f-xs" font-bold lh-none>
                {{ amountFormatter.format(balance / 1e5) }} NIM
              </p>
            </div>
          </div>
        </div>
      </template>
    </ChartDonut>
    <RichText wrapper="div" :field="info" text-center max-w-42ch f-m-lg />
  </div>
</template>
