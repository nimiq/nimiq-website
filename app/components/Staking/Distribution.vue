<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'
import type { StyleValue } from 'vue'
import type { DonutDatum } from '../Donut.vue'

defineProps<{ info: RichTextField }>()

const url = new URL('/api/v1/distribution', useRuntimeConfig().public.validatorsApi)

interface DistributionResponse { staked: number, circulating: number, ratio: number }
type ValidatorDatum = DonutDatum & { label: string, anotation: StyleValue }

const locale = useLocale()
const formatter = new Intl.NumberFormat(locale.value, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 })

const { data } = useFetch(url.href, {
  transform: (d: DistributionResponse) => ([
    { color: `rgb(var(--nq-gold)/1)`, value: 1 - d.ratio, label: 'Circulating', anotation: { top: '40px', left: '-42px' } },
    { color: `rgb(var(--nq-green)/1)`, value: d.ratio, label: `${formatter.format(d.ratio * 100)} staked`, anotation: { bottom: '40px', right: '-72px' } },
  ] satisfies ValidatorDatum[]),
})
</script>

<template>
  <div flex="~ col items-center">
    <Donut :data="data!" />
    <PrismicRichText :field="info" max-w-42ch text-center nq-mt-48 />
  </div>
</template>
