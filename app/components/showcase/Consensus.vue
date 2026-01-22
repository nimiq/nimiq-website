<script setup lang="ts">
defineProps<{ label: string, headline: string, subline: string, thisIsYou: string, connect: string, connecting: string }>()
</script>

<template>
  <div class="flex flex-col flex-xl:row flex-justify-center m-0 max-w-none w-full">
    <div class="flex flex-col pl-$px xl:pb-[200px] xl:pt-8 xl:w-50vw">
      <p v-if="label" class="mb-4 w-max text-xs md:text-sm nq-label" block>
        {{ label }}
      </p>
      <h2 class="text-left break-keep">
        {{ headline }}
      </h2>
      <p class="text-left">
        {{ subline }}
      </p>
    </div>
    <div class="xl:w-50vw">
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
