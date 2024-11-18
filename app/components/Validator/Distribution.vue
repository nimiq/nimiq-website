<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'
import { VisDonut, VisSingleContainer } from '@unovis/vue'

defineProps<{ info: RichTextField }>()

const url = new URL('/api/v1/validators', useRuntimeConfig().public.validatorsApi)
url.searchParams.set('with-scores', 'true')
url.searchParams.set('with-identicons', 'true')

interface Datum { color: string, value: number, label: string }

const { data } = useFetch(url.href, {
  transform: (d: Validator[]) => d.map(({ accentColor: color, sizeRatio: value, name: label }) => ({ color, value, label }) satisfies Datum),
})

const value = (d: Datum) => d.value
const color = (d: Datum) => d.color
</script>

<template>
  <div flex="~ col items-center">
    <VisSingleContainer :height="280" :width="280" relative size-280 max-w-280>
      <VisDonut :data :color :value :corner-radius="8" :arc-width="64" :pad-angle="0.05" :show-background="false" />
    </VisSingleContainer>
    <PrismicRichText :field="info" max-w-42ch text-center nq-mt-48 />
  </div>
</template>
