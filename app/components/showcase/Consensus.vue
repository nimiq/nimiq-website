<script setup lang="ts">
defineProps<{ label: string, headline: string, subline: string, thisIsYou: string, connect: string, connecting: string }>()
</script>

<template>
  <div class="flex flex-col xl:flex-row justify-center m-0 max-w-none w-full">
    <div class="flex flex-col pl-[var(--px)] xl:pb-[200px] xl:pt-8 xl:w-[50vw]">
      <p v-if="label" class="mb-4 w-max block nq-label f-text-sm">
        {{ label }}
      </p>
      <h2 class="text-left break-keep consensus-headline">
        {{ headline }}
      </h2>
      <p class="text-left xl:max-w-[40ch]">
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
