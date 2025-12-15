<script setup lang="ts">
defineProps<{ headline: string, subheadline: string, guessTheRemainingWordsLabel: string, youDoNotStandAChanceToTake: string, rewardamount: string }>()
</script>

<template>
  <ClientOnly>
    <ShowcaseWalletWordsChallenge :headline :subheadline :guess-the-remaining-words-label="guessTheRemainingWordsLabel" :you-do-not-stand-a-chance-to-take="youDoNotStandAChanceToTake" :reward-amount="rewardamount" />
  </ClientOnly>
</template>
