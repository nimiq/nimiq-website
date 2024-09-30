<script setup lang="ts">
import { NetworkStatus } from '@/types/network'

defineProps<{
  consensus: NetworkStatus
}>()
</script>

<template>
  <div mt--2px>
    <div v-if="consensus === NetworkStatus.ESTABLISHED" i-nimiq:world-check />
    <div v-else-if="consensus === NetworkStatus.CONNECTING || consensus === NetworkStatus.SYNCING" i-nimiq:world />
  </div>
</template>
