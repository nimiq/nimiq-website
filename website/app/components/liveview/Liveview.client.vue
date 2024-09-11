<script setup lang="ts">
const props = defineProps<{
  allowSendTx?: boolean
  networkNotice?: string
  statsTooltipContent?: string
  txSecLabel?: string
  txSpeedLabel?: string
  averageRewardsLabel: string
}>()

const { canSendTx } = storeToRefs(useLiveviewTx())
watch(() => props.allowSendTx, value => canSendTx.value = value || false, { immediate: true })
</script>

<template>
  <LiveviewBlockchain />
  <LiveviewInfo :network-notice :stats-tooltip-content :tx-sec-label :average-rewards-label :tx-speed-label />
</template>
