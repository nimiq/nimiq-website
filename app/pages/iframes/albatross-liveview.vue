<script setup lang="ts">
const allowSendTxQuery = useRouteQuery('allow-send-tx')
const allowSendTx = computed(() => allowSendTxQuery.value === 'true')

const { canSendTx } = useAlbatrossDummyTx()
watch(() => allowSendTx.value, value => canSendTx.value = value || false, { immediate: true })

const theme = useRouteQuery('theme')
// @unocss-include
const cssClasses = computed(() => theme.value === 'light' ? 'bg-neutral-0' : 'bg-darkblue dark')
const networkNotice = 'Showing live Proof of Stake testnet data'
const statsTooltipContent = `This information is meant solely to project potential NIM staking rewards for Nimiq PoS. The rewards percentage is subject to change based on the actual percentage of NIM  staked compared to the total circulating NIM.`
</script>

<template>
  <NuxtLayout name="iframe" :class="cssClasses">
    <div flex="~ col items-center" w-full of-x-hidden>
      <AlbatrossLiveviewBlockchain w-screen />
      <AlbatrossInfo :network-notice :stats-tooltip-content :allow-send-tx mt="32 lg:48 xl:72" />
    </div>
  </NuxtLayout>
</template>
