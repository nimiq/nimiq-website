<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.AlbatrossLiveviewSlice>())
const { sectionRef } = useSlice(props.slice.id, 'darkblue')
</script>

<template>
  <section ref="sectionRef" px-0>
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
