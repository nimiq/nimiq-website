<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'

defineProps<{ info: RichTextField }>()

const locale = useLocale()
const percentageFormatter = new Intl.NumberFormat(locale.value, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 })
const amountFormatter = new Intl.NumberFormat(locale.value, { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 })

const { validators: sourceValidators } = useGlobalContent()
const data = computed(() => {
  if (!sourceValidators)
    return []
  const validators = []
  const smallValidators = { color: 'rgb(var(--nq-neutral-400))', value: 0, name: 'Others', src: '' }
  for (const v of sourceValidators) {
    const dominance = v.dominance || v.dominanceRatioViaBalance || v.dominanceRatioViaSlots
    if (dominance < 0.02)
      smallValidators.value += dominance
    else
      validators.push({ src: v.logo, color: v.accentColor, value: dominance, ...v })
  }
  return smallValidators.value > 0 ? [...validators, smallValidators] : validators
})
</script>

<template>
  <div flex="~ col items-center">
    <Donut :data="data!">
      <template #default="{ color, value, name, src }">
        <div :key="name" :style="{ '--c': color }" ring="1.5 $c" data-tooltip-container w-max rounded-8 bg-neutral-0 p-16 text-neutral font-semibold flex="~ items-center gap-16" shadow>
          <img v-if="src" :src size-40 loading="lazy">
          <div flex="~ gap-2 col" font-semibold lh-none text-sm>
            <h3 text-lg>
              {{ name }}
            </h3>
            <div flex="~ justify-between items-baseline gap-12" mt-4>
              <span text-neutral-800 lh-none>
                {{ percentageFormatter.format(value) }}
              </span>
              <p text="green xs" font-bold lh-none>
                {{ amountFormatter.format(120000) }} NIM
              </p>
            </div>
          </div>
        </div>
      </template>
    </Donut>
    <PrismicRichText :field="info" max-w-42ch text-center nq-mt-48 />
  </div>
</template>
