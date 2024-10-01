<script setup lang="ts">
const allowSendTxQuery = useRouteQuery('allow-send-tx')
const allowSendTx = computed(() => allowSendTxQuery.value === 'true')

const networkNotice = 'Showing live Proof of Stake testnet data'
const statsTooltipContent = `This information is meant solely to project potential NIM staking rewards for Nimiq PoS. The rewards percentage is subject to change based on the actual percentage of NIM  staked compared to the total circulating NIM.

The content on this website must not be considered financial advice and does not constitute any offer or solicitation to offer or recommendation of any investment product.`
</script>

<template>
  <NuxtLayout name="iframe" class="dark" bg-darkblue>
    <Albatross :allow-send-tx :network-notice :stats-tooltip-content />
  </NuxtLayout>
</template>
