<script setup lang="ts">
const props = defineProps<{ score: Validator['score'] }>()

const availability = computed(() => props.score.availability)
const reliability = computed(() => props.score.reliability)
const dominance = computed(() => props.score.dominance)

const ScoreThresholds = {
  EXCELLENT: 0.9,
  GOOD: 0.75,
  FAIR: 0.5,
}

// Function for status classes
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

// Computed properties for status messages
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
    return 'This pool controls a large share of the total stake.\nSupport the network by staking with a smaller pool.'
  if (dominance.value > ScoreThresholds.FAIR)
    return 'This pool controls an almost critical share of the total stake.\nChoose a smaller pool to improve the network\'s security.'
  return 'Do not stake with this pool!\nIt controls a critical share of the total stake, making it a potential threat to the network.'
})
</script>

<template>
  <AccordionRoot ring="1.5 neutral-400" children:border="b neutral-400 last:b-0" type="multiple" mt-1.5 rounded-8>
    <AccordionItem value="availability">
      <AccordionTrigger class="trigger">
        <div text="10 neutral-600" transition-transform i-nimiq:chevron-right data-open:rotate-90 />
        <h4 text="neutral f-sm left" flex-1 font-semibold>
          Availability
        </h4>
        <ValidatorTrustscore :score="availability" px-0 text-12 />
      </AccordionTrigger>
      <AccordionContent class="content">
        <p>
          Rates the pool's availability to be selected for block production, which earns rewards.
        </p>
        <p :class="getStatusClass(availability)">
          {{ availabilityStatus }}
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="reliability">
      <AccordionTrigger class="trigger">
        <div text="10 neutral-600" transition-transform i-nimiq:chevron-right data-open:rotate-90 />
        <h4 text="neutral f-sm left" flex-1 font-semibold>
          Reliability
        </h4>
        <ValidatorTrustscore :score="reliability" px-0 text-12 />
      </AccordionTrigger>
      <AccordionContent class="content">
        <p>
          Rates the pool's ability to correctly produce blocks and earn rewards when selected.
        </p>
        <p :class="getStatusClass(reliability)">
          {{ reliabilityStatus }}
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="dominance">
      <AccordionTrigger class="trigger">
        <div text="10 neutral-600" transition-transform i-nimiq:chevron-right data-open:rotate-90 />
        <h4 text="neutral f-sm left" flex-1 font-semibold>
          Dominance
        </h4>
        <ValidatorTrustscore :score="dominance" px-0 text-12 />
      </AccordionTrigger>
      <AccordionContent class="content">
        <p>
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
.trigger {
  --uno: 'flex items-center gap-8 w-full bg-transparent px-12 py-8';
}
.content {
  --uno: 'p-12 pt-0 of-y-clip f-text-sm font-semibold';
  &[data-state='open'] {
    animation: slideDown 200ms ease-out both;
  }
  &[data-state='closed'] {
    animation: slideUp 150ms ease-out both;
  }

  p:first-child {
    padding-bottom: 1rem;
  }
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
