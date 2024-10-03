<script setup lang="ts">
const allowSendTxQuery = useRouteQuery('allow-send-tx')
const allowSendTx = computed(() => allowSendTxQuery.value === 'true')

const theme = useRouteQuery('theme')
// @unocss-include
const cssClasses = computed(() => theme.value === 'light' ? 'bg-neutral-0' : 'bg-darkblue dark')
const networkNotice = 'Showing live Proof of Stake testnet data'
const statsTooltipContent = `This information is meant solely to project potential NIM staking rewards for Nimiq PoS. The rewards percentage is subject to change based on the actual percentage of NIM  staked compared to the total circulating NIM.`
</script>

<template>
  <NuxtLayout name="iframe" :class="cssClasses">
    <Albatross :allow-send-tx :network-notice :stats-tooltip-content />
  </NuxtLayout>
</template>
