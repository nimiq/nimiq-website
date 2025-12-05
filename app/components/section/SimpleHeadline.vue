<script setup lang="ts">
const props = defineProps<{
  headline: string
  subline?: string
  bgColor?: string
  cta?: string
  label?: string
  iconName?: string
}>()

const bgClass = computed(() => {
  switch (props.bgColor) {
    case 'white': return 'bg-neutral-0'
    case 'grey': return 'bg-neutral-100'
    case 'darkblue': return 'bg-darkblue dark'
    case 'green': return 'bg-green'
    default: return 'bg-neutral-0'
  }
})
</script>

<template>
  <section :class="bgClass" nq-section-gap relative data-slice-type="simple-headline">
    <div flex="~ col md:items-center">
      <div v-if="props.iconName" :class="props.iconName" text-54 op-15 f-mt-sm />
      <p v-if="props.label" mb-16 w-max block f-text-sm nq-label md:mx-auto>
        {{ props.label }}
      </p>
      <h2 nq-heading break-keep md:text-center>
        {{ props.headline }}
      </h2>
      <p v-if="props.subline" md:text-center>
        {{ props.subline }}
      </p>
      <NuxtLink v-if="props.cta" :to="props.cta" f-mt-lg nq-arrow nq-pill-lg nq-pill-blue md:mx-auto />
    </div>
  </section>
</template>
