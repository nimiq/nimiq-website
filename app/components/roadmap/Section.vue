<script setup lang="ts">
interface MilestonesData {
  label: string
  firstLayer: string
  secondLayer: string
  thirdLayer: string
}

const { milestones } = defineProps<{ milestones: MilestonesData }>()

function tryParse(input: any, key: string) {
  if (!input)
    throw new Error(`Missing input ${key}`)
  try {
    return JSON.parse(input)
  }
  catch (error) {
    console.error(`Error parsing input ${key}:`, error)
    return []
  }
}

const firstYear = 2017
const firstMonth = 1

const milestonesData = tryParse(milestones.label, 'milestones')
const firstLayer = tryParse(milestones.firstLayer, 'firstLayer')
const secondLayer = tryParse(milestones.secondLayer, 'secondLayer')
const thirdLayer = tryParse(milestones.thirdLayer, 'thirdLayer')

const layers = [firstLayer, secondLayer, thirdLayer]
</script>

<template>
  <div mx-0 px-0 bg-neutral-0 block children:max-w-none>
    <Roadmap :milestones="milestonesData" :layers :first-year :first-month />
  </div>
</template>
