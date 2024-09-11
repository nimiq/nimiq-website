<script setup lang="ts">
const withTxQuery = useRoute().query.withTx
const withTx = withTxQuery === 'true'

const networkNotice = 'Showing live Proof of Stake test net data'
</script>

<template>
  <NuxtLayout name="iframe" class="dark bg-neutral-100">
    <AlbatrossLiveview :allow-send-tx="withTx" :network-notice />
  </NuxtLayout>
</template>
