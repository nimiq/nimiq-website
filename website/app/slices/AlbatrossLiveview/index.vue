<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.AlbatrossLiveviewSlice>())
const classes = useSectionColor('darkblue')
</script>

<template>
  <section :class="classes" px-0>
    <AlbatrossLiveview
      :allow-send-tx="slice.primary.allowSendTx"
      :average-rewards-label="slice.primary.averageRewardsLabel!"
      :network-notice="slice.primary.networkNotice!"
      :stats-tooltip-content="slice.primary.statsTooltipContent!"
      :tx-sec-label="slice.primary.txSecLabel!"
      :tx-speed-label="slice.primary.txSpeedLabel!"
    />
  </section>
</template>
