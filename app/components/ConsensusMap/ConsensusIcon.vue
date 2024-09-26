<script setup lang="ts">
import { defineProps } from 'vue'
import World from '~/static/icons/world.svg?inline'
import WorldCheck from '~/static/icons/world-check.svg?inline'
import { NetworkStatus } from '~/types/network'

defineProps<{
  consensus: NetworkStatus
}>()
</script>

<template>
  <div class="consensus-icon">
    <WorldCheck v-if="consensus === NetworkStatus.ESTABLISHED" />
    <World v-else-if="consensus === NetworkStatus.CONNECTING || consensus === NetworkStatus.SYNCING" />
  </div>
</template>

<style scoped>
.consensus-icon {
  margin: -0.125rem;
}

svg {
  display: block;
}
</style>
