<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.AlbatrossLiveviewSlice>())
</script>

<template>
  <section class="nq-no-mx grey bg-neutral-100 px-0 children:max-w-none">
    <Albatross
      :allow-send-tx="slice.primary.allowSendTx"
      :average-rewards-label="slice.primary.averageRewardsLabel!"
      :network-notice="slice.primary.networkNotice!"
      :stats-tooltip-content="slice.primary.statsTooltipContent!"
      :tx-sec-label="slice.primary.txSecLabel!"
      :tx-speed-label="slice.primary.txSpeedLabel!"
      :average-rewards-value="slice.primary.estimatedAverageRewardsValue!"
    />
  </section>
</template>
