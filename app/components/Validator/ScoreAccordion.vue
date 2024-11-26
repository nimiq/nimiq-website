<script setup lang="ts">
defineProps<{ score: Validator['score'] }>()
</script>

<template>
  <AccordionRoot ring="1.5 neutral-400" children:border="b neutral-400 last:b-0" type="multiple" mt-1.5 rounded-8>
    <AccordionItem value="reliability">
      <AccordionTrigger class="trigger">
        <div text="10 neutral-600" i-nimiq:chevron-right transition-transform data-open:rotate-90 />
        <h4 text="neutral sm left" flex-1 font-semibold>
          Reliability
        </h4>
        <ValidatorTrustscore :score="score.reliability" px-0 text-12 />
      </AccordionTrigger>
      <AccordionContent class="content">
        Some text
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="availability">
      <AccordionTrigger class="trigger">
        <div text="10 neutral-600" i-nimiq:chevron-right transition-transform data-open:rotate-90 />
        <h4 text="neutral sm left" flex-1 font-semibold>
          Availability
        </h4>
        <ValidatorTrustscore :score="score.availability" px-0 text-12 />
      </AccordionTrigger>
      <AccordionContent class="content">
        Some text
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="dominance">
      <AccordionTrigger class="trigger">
        <div text="10 neutral-600" i-nimiq:chevron-right transition-transform data-open:rotate-90 />
        <h4 text="neutral sm left" flex-1 font-semibold>
          Dominance
        </h4>
        <ValidatorTrustscore :score="score.dominance" px-0 text-12 />
      </AccordionTrigger>
      <AccordionContent class="content">
        Some text
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>

<style scoped>
.trigger {
  --uno: 'flex items-center gap-8 w-full bg-transparent px-12 py-8';
}
.content {
  --uno: 'p-12 pt-0 of-y-clip';
  &[data-state='open'] {
    animation: slideDown 200ms ease-out both;
  }
  &[data-state='closed'] {
    animation: slideUp 150ms ease-out both;
  }
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}
</style>
