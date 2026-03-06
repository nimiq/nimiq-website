<script setup lang="ts">
defineProps<{ headline: string, subline: string, guessLabel: string, chanceLabel: string, reward: string }>()

const WordsChallenge = defineAsyncComponent(() => import('./wallet/WordsChallenge.client.vue'))
</script>

<template>
  <ClientOnly>
    <WordsChallenge :headline :subline :guess-label="guessLabel" :chance-label="chanceLabel" :reward="reward" />
  </ClientOnly>
</template>
