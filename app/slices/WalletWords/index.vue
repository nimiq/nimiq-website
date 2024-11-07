<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.WalletWordsSlice>())
</script>

<template>
  <section relative bg-neutral-0>
    <WalletWordsGame :headline="slice.primary.headline!" :subheadline="slice.primary.subheadline!" :guess-the-remaining-words-label="slice.primary.guessTheRemainingWordsLabel!" :you-do-not-stand-a-chance-to-take="slice.primary.youDoNotStandAChanceToTake!" :reward-amount="slice.primary.rewardamount!" />
  </section>
</template>
