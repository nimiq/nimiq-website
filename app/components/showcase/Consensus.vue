<script setup lang="ts">
defineProps<{ label: string, headline: string, subline: string, thisIsYou: string, connect: string, connecting: string }>()
</script>

<template>
  <div flex="~ col xl:row items-stretch" gap-40>
    <div flex="~ col shrink-0" xl:w-400>
      <p v-if="label" mb-16 w-max block f-text-sm nq-label>
        {{ label }}
      </p>
      <h2 nq-heading break-keep>
        {{ headline }}
      </h2>
      <p max-w-prose>
        {{ subline }}
      </p>
    </div>
    <ClientOnly>
      <ShowcaseConsensusConsensusMap :connect-label="connect" :this-is-you="thisIsYou" :connecting />
    </ClientOnly>
  </div>
</template>
