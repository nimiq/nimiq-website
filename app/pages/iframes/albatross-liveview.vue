<script setup lang="ts">
const allowSendTxQuery = useRouteQuery('allow-send-tx')
const allowSendTx = computed(() => allowSendTxQuery.value === 'true')

const networkNotice = 'Showing live Proof of Stake testnet data'
</script>

<template>
  <NuxtLayout name="iframe" class="dark" bg-darkblue>
    <Albatross :allow-send-tx :network-notice />
  </NuxtLayout>
</template>
