<script setup lang="ts">
interface RoadmapData {
  milestones: string
  firstLayer: string
  secondLayer: string
  thirdLayer: string
}

const { roadmap } = defineProps<{ roadmap: RoadmapData }>()

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

const milestones = tryParse(roadmap.milestones, 'milestones')
const firstLayer = tryParse(roadmap.firstLayer, 'firstLayer')
const secondLayer = tryParse(roadmap.secondLayer, 'secondLayer')
const thirdLayer = tryParse(roadmap.thirdLayer, 'thirdLayer')

const layers = [firstLayer, secondLayer, thirdLayer]
</script>

<template>
  <div mx-0 px-0 bg-neutral-0 block children:max-w-none>
    <Roadmap :milestones :layers :first-year :first-month />
  </div>
</template>
