<script setup lang="ts">
const props = defineProps<{ milestones: string, firstLayer: string, secondLayer: string, thirdLayer: string }>()

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

const milestonesData = tryParse(props.milestones, 'milestones')
const firstLayer = tryParse(props.firstLayer, 'firstLayer')
const secondLayer = tryParse(props.secondLayer, 'secondLayer')
const thirdLayer = tryParse(props.thirdLayer, 'thirdLayer')

const layers = [firstLayer, secondLayer, thirdLayer]
</script>

<template>
  <div class="mx-0 px-0 bg-neutral-0 block [&>*]:max-w-none">
    <Roadmap :milestones="milestonesData" :layers :first-year :first-month />
  </div>
</template>
