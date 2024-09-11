<script setup lang="ts">
const withTxQuery = useRoute().query.withTx
const withTx = withTxQuery === 'true'
</script>

<template>
  <LiveviewWithTx v-if="withTx" />
  <LiveviewWithoutTx v-else />
</template>
