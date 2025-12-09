<script setup lang="ts">
defineProps<{ headline: string, subline?: string, cta?: string, label?: string, iconName?: string }>()
</script>

<template>
  <div flex="~ col md:items-center">
    <div v-if="iconName" :class="iconName" text-54 op-15 f-mt-sm />
    <p v-if="label" mb-16 w-max block f-text-sm nq-label md:mx-auto>
      {{ label }}
    </p>
    <h2 nq-heading break-keep md:text-center>
      {{ headline }}
    </h2>
    <p v-if="subline" md:text-center>
      {{ subline }}
    </p>
    <NuxtLink v-if="cta" :to="cta" f-mt-lg nq-arrow nq-pill-lg nq-pill-blue md:mx-auto />
  </div>
</template>
