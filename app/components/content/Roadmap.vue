<script setup lang="ts">
import RoadmapComponent from '~/components/Roadmap/index.vue'

interface RoadmapSlice {
  primary: {
    firstLayer: string | undefined
    milestones: string | undefined
    secondLayer: string | undefined
    thirdLayer: string | undefined
  }
}

const { slice } = defineProps<{ slice: RoadmapSlice, slices?: any[] }>()

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

const milestones = tryParse(slice.primary.milestones, 'milestones')
const firstLayer = tryParse(slice.primary.firstLayer, 'firstLayer')
const secondLayer = tryParse(slice.primary.secondLayer, 'secondLayer')
const thirdLayer = tryParse(slice.primary.thirdLayer, 'thirdLayer')

const layers = [firstLayer, secondLayer, thirdLayer]
</script>

<template>
  <section class="nq-no-color" mx-0 px-0 bg-neutral-0 block children:max-w-none>
    <RoadmapComponent :milestones :layers :first-year :first-month />
  </section>
</template>
