<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.WalletWordsChallengeSlice>())
</script>

<template>
  <section px-8 bg-neutral-0 relative of-x-clip>
    <WalletWordsChallenge
      :headline="slice.primary.headline!" :subheadline="slice.primary.subheadline!"
      :guess-the-remaining-words-label="slice.primary.guessTheRemainingWordsLabel!"
      :you-do-not-stand-a-chance-to-take="slice.primary.youDoNotStandAChanceToTake!"
      :reward-amount="slice.primary.rewardamount!"
    />
  </section>
</template>

r
