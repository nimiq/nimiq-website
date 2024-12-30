<script setup lang="ts" generic="T extends DataRecord">
import { VisArea, VisAxis, VisLine, VisXYContainer } from '@unovis/vue'

const { data: _data } = defineProps<{ data?: T[] }>()
const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

const x = (d: DataRecord) => d[0]
const y = (d: DataRecord) => d[1]

const tickFormat = (d: number) => dateFormatter.format(new Date(d))
</script>

<script lang="ts">
export type DataRecord = [number, number]
</script>

<template>
  <VisXYContainer :data>
    <VisArea color="url('gradient.svg#vertical-stripes')" :x :y />
    <VisLine :x :y color="rgb(var(--nq-green))" />
    <VisAxis type="x" :grid-line="false" :tick-format />
  </VisXYContainer>
</template>
