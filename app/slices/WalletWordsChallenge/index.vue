<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.WalletWordsChallengeSlice>())
</script>

<template>
  <section relative bg-neutral-0 px-8>
    <!-- TODO: change slice name -->
    <ClientOnly>
      <WalletWordsChallenge :headline="slice.primary.headline!" :subheadline="slice.primary.subheadline!" :guess-the-remaining-words-label="slice.primary.guessTheRemainingWordsLabel!" :you-do-not-stand-a-chance-to-take="slice.primary.youDoNotStandAChanceToTake!" :reward-amount="slice.primary.rewardamount!" />
    </ClientOnly>
  </section>
</template>

r
