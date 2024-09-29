<script setup lang="ts">
const allowSendTxQuery = useRouteQuery('allow-send-tx')
const allowSendTx = computed(() => allowSendTxQuery.value === 'true')

const networkNotice = 'Showing live Proof of Stake test net data'
</script>

<template>
  <NuxtLayout name="iframe" class="dark" bg-neutral-100>
    <AlbatrossLiveview :allow-send-tx :network-notice />
  </NuxtLayout>
</template>
