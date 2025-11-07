<script setup lang="ts">
import WalletWordsChallengeComponent from '~/components/Wallet/WordsChallenge.client.vue'

interface WalletWordsChallengeSlice {
  primary: {
    headline: string
    subheadline: string
    guessTheRemainingWordsLabel: string
    youDoNotStandAChanceToTake: string
    rewardamount: string
  }
}

defineProps<{ slice: WalletWordsChallengeSlice }>()
</script>

<template>
  <section px-8 bg-neutral-0 relative of-x-clip>
    <WalletWordsChallengeComponent
      :headline="slice.primary.headline" :subheadline="slice.primary.subheadline"
      :guess-the-remaining-words-label="slice.primary.guessTheRemainingWordsLabel"
      :you-do-not-stand-a-chance-to-take="slice.primary.youDoNotStandAChanceToTake"
      :reward-amount="slice.primary.rewardamount"
    />
  </section>
</template>
