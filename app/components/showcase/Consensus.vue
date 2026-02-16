<script setup lang="ts">
defineProps<{ label: string, headline: string, subline: string, thisIsYou: string, connect: string, connecting: string }>()
</script>

<template>
  <div class="flex flex-col xl:flex-row justify-center m-0 max-w-none w-full">
    <div class="flex flex-col pl-[var(--px)] xl:pb-[200px] xl:pt-8 xl:w-[50vw]">
      <p v-if="label" class="mb-4 w-max block nq-label f-text-sm">
        {{ label }}
      </p>
      <h2 class="break-keep consensus-headline">
        {{ headline }}
      </h2>
      <p class="consensus-subline">
        {{ subline }}
      </p>
    </div>
    <div class="xl:w-[50vw] min-h-[400px] xl:min-h-0 xl:h-full">
      <ClientOnly>
        <ShowcaseConsensusMap :connect-label="connect" :this-is-you="thisIsYou" :connecting />
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
.consensus-headline,
.consensus-subline {
  text-align: left;
}

@media (min-width: 1280px) {
  .consensus-subline {
    max-width: 536px;
  }
}
</style>
