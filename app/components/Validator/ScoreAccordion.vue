<script setup lang="ts">
import type { Validator } from '~/composables/useValidatorsInfo'
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'

const props = defineProps<{ score: Validator['score'] }>()

const availability = computed(() => props.score.availability)
const reliability = computed(() => props.score.reliability)
const dominance = computed(() => props.score.dominance)

const ScoreThresholds = { EXCELLENT: 0.9, GOOD: 0.75, FAIR: 0.5 }

function getStatusClass(score: number | null) {
  if (score === null)
    return 'text-neutral-400 italic'
  if (score > ScoreThresholds.EXCELLENT)
    return 'text-green'
  if (score > ScoreThresholds.GOOD)
    return ''
  if (score > ScoreThresholds.FAIR)
    return 'text-orange'
  return 'text-red'
}

const availabilityStatus = computed(() => {
  if (!availability.value)
    return 'No availability data available yet.'
  if (availability.value > ScoreThresholds.EXCELLENT)
    return 'This pool is reliably available for block production.'
  if (availability.value > ScoreThresholds.GOOD)
    return 'This pool is usually available for block production.'
  if (availability.value > ScoreThresholds.FAIR)
    return 'The pool sometimes fails to be available for block production.'
  return 'This pool regularly fails to be available for block production.'
})

const reliabilityStatus = computed(() => {
  if (!reliability.value)
    return 'No reliability data available yet.'
  if (reliability.value > ScoreThresholds.EXCELLENT)
    return 'This pool reliably produces blocks.'
  if (reliability.value > ScoreThresholds.GOOD)
    return 'This pool usually produces blocks.'
  if (reliability.value > ScoreThresholds.FAIR)
    return 'This pool sometimes fails to produce blocks.'
  return 'This pool regularly fails to produce blocks.'
})

const dominanceStatus = computed(() => {
  if (!dominance.value)
    return 'No dominance data available yet.'
  if (dominance.value > ScoreThresholds.EXCELLENT)
    return 'This pool is safe to stake with.'
  if (dominance.value > ScoreThresholds.GOOD)
    return `This pool controls a large share of the total stake. Support the network by staking with a smaller pool.`
  if (dominance.value > ScoreThresholds.FAIR)
    return `This pool controls an almost critical share of the total stake. Choose a smaller pool to improve the network's security.`
  return 'Do not stake with this pool! It controls a critical share of the total stake, making it a potential threat to the network.'
})
</script>

<template>
  <AccordionRoot class="[&>*]:border-b [&>*]:border-neutral-400 [&>*:last-child]:border-b-0 mt-1.5 rounded-2" style="outline: 1.5px solid var(--color-neutral-400)" type="multiple">
    <AccordionItem value="availability">
      <AccordionTrigger class="flex items-center gap-2 w-full bg-transparent px-3 py-2">
        <Icon class="text-10 text-neutral-600 transition-transform reka-open:rotate-90" name="nimiq:chevron-right" />
        <h4 class="text-neutral text-sm font-semibold flex-1 text-left">
          Availability
        </h4>
        <ValidatorTrustscore :score="availability" class="text-12 px-0" />
      </AccordionTrigger>
      <AccordionContent class="content p-3 pt-0 overflow-y-clip text-sm font-semibold">
        <p class="pb-4">
          Rates the pool's availability to be selected for block production, which earns rewards.
        </p>
        <p :class="getStatusClass(availability)">
          {{ availabilityStatus }}
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="reliability">
      <AccordionTrigger class="flex items-center gap-2 w-full bg-transparent px-3 py-2">
        <Icon class="text-10 text-neutral-600 transition-transform reka-open:rotate-90" name="nimiq:chevron-right" />
        <h4 class="text-neutral text-sm font-semibold flex-1 text-left">
          Reliability
        </h4>
        <ValidatorTrustscore :score="reliability" class="text-12 px-0" />
      </AccordionTrigger>
      <AccordionContent class="content p-3 pt-0 overflow-y-clip text-sm font-semibold">
        <p class="pb-4">
          Rates the pool's ability to correctly produce blocks and earn rewards when selected.
        </p>
        <p :class="getStatusClass(reliability)">
          {{ reliabilityStatus }}
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="dominance">
      <AccordionTrigger class="flex items-center gap-2 w-full bg-transparent px-3 py-2">
        <Icon class="text-10 text-neutral-600 transition-transform reka-open:rotate-90" name="nimiq:chevron-right" />
        <h4 class="text-neutral text-sm font-semibold flex-1 text-left">
          Dominance
        </h4>
        <ValidatorTrustscore :score="dominance" class="text-12 px-0" />
      </AccordionTrigger>
      <AccordionContent class="content p-3 pt-0 overflow-y-clip text-sm font-semibold">
        <p class="pb-4">
          Rates the pool's potential to harm the network, based on its size.
        </p>
        <p :class="getStatusClass(dominance)">
          {{ dominanceStatus }}
        </p>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>

<style scoped>
.content[data-state='open'] {
  animation: slideDown 200ms ease-out both;
}
.content[data-state='closed'] {
  animation: slideUp 150ms ease-out both;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--reka-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--reka-accordion-content-height);
  }
  to {
    height: 0;
  }
}
</style>
