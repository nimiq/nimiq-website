<script setup lang="ts">
defineProps<{ label: string, headline: string, subline: string, thisIsYou: string, connect: string, connecting: string }>()
</script>

<template>
  <div flex="~ col xl:row justify-center" m-0 max-w-none w-full>
    <div flex="~ col" pl="$px" xl:pb-200 xl:pt-32 xl:w-50vw>
      <p v-if="label" mb-16 w-max block f-text-sm nq-label>
        {{ label }}
      </p>
      <h2 text-left break-keep>
        {{ headline }}
      </h2>
      <p text-left>
        {{ subline }}
      </p>
    </div>
    <div xl:w-50vw>
      <ClientOnly>
        <ShowcaseConsensusConsensusMap :connect-label="connect" :this-is-you="thisIsYou" :connecting />
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
:deep(h2 + p) {
  --uno: 'xl:max-w-40ch';
}
</style>
