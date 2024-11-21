<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'
import type { DonutDatum } from '../Donut.vue'

defineProps<{ info: RichTextField }>()

const locale = useLocale()
const percentageFormatter = new Intl.NumberFormat(locale.value, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 })
const amountFormatter = new Intl.NumberFormat(locale.value, { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 })

const url = new URL('/api/v1/validators', useRuntimeConfig().public.validatorsApi)
url.searchParams.set('with-scores', 'true')
url.searchParams.set('with-identicons', 'true')

type ValidatorDatum = DonutDatum & Validator

const { data } = useFetch(url.href, {
  transform: (d: Validator[]) => d.map(v => ({ color: v.accentColor, value: v.sizeRatio, ...v }) satisfies ValidatorDatum),
})
</script>

<template>
  <div flex="~ col items-center">
    <Donut :data="data!">
      <template #default="{ color, value, name, icon: src, balance }">
        <div :key="name" :style="{ '--c': color }" ring="1.5 $c" data-tooltip-container w-max rounded-full bg-neutral-0 px-12 py-6 text-neutral font-semibold flex="~ items-center gap-8">
          <img v-if="src" :src size-24>
          <div size-24 rounded-full bg-pink />
          <div flex="~ gap-2 col">
            <p lh-none>
              {{ percentageFormatter.format(value) }}
            </p>
            <p text="green xs" font-bold lh-none>
              {{ amountFormatter.format(balance) }} USD
            </p>
          </div>
          {{ src }}
        </div>
      </template>
    </Donut>
    <PrismicRichText :field="info" max-w-42ch text-center nq-mt-48 />
  </div>
</template>
