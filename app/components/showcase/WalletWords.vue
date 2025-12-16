<script setup lang="ts">
defineProps<{ headline: string, subline: string, guessLabel: string, chanceLabel: string, reward: string }>()
</script>

<template>
  <ClientOnly>
    <ShowcaseWalletWordsChallenge :headline :subline :guess-label="guessLabel" :chance-label="chanceLabel" :reward="reward" />
  </ClientOnly>
</template>
