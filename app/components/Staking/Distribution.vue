<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'
import type { StyleValue } from 'vue'
import { VisDonut, VisSingleContainer } from '@unovis/vue'

defineProps<{ info: RichTextField }>()

const url = new URL('/api/v1/distribution', useRuntimeConfig().public.validatorsApi)

interface DistributionResponse { staked: number, circulating: number, ratio: number }
interface Datum { color: string, value: number, label: string, anotation: StyleValue }

const locale = useLocale()
const formatter = new Intl.NumberFormat(locale.value, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 })

const { data } = useFetch(url.href, {
  transform: (d: DistributionResponse) => ([
    { color: `rgb(var(--nq-gold)/1)`, value: 1 - d.ratio, label: 'Circulating', anotation: { top: '40px', left: '-42px' } },
    { color: `rgb(var(--nq-green)/1)`, value: d.ratio, label: `${formatter.format(d.ratio * 100)} staked`, anotation: { bottom: '40px', right: '-72px' } },
  ] satisfies [Datum, Datum]),
})

const startAngle = 0.22
const angleRange: [number, number] = [startAngle, 2 * Math.PI + startAngle]

const value = (d: Datum) => d.value
const color = (d: Datum) => d.color
</script>

<template>
  <div flex="~ col items-center">
    <VisSingleContainer :height="280" :width="280" relative size-280 max-w-280>
      <VisDonut :data :angle-range :color :value :corner-radius="8" :arc-width="64" :pad-angle="0.05" :show-background="false" />
      <!-- <div data-vis-component /> -->
      <div absolute inset-0 size-280>
        <div v-for="(d, i) in data" :key="i" :style="{ '--c': `${d.color}`, ...d.anotation }" ring="1.5 $c" absolute w-max rounded-full bg-neutral-0 px-12 py-6 text-neutral font-semibold>
          <p>{{ d.label }}</p>
        </div>
      </div>
    </VisSingleContainer>
    <PrismicRichText :field="info" max-w-42ch text-center nq-mt-48 />
  </div>
</template>
