<script setup lang="ts">
import type { ConsensusState } from '@nimiq/core'

defineProps<{
  consensus: ConsensusState | null
}>()
</script>

<template>
  <div mt--2px>
    <div v-if="consensus === 'established'" i-nimiq:world-check />
    <div v-else-if="consensus === 'connecting' || consensus === 'syncing'" i-nimiq:world />
  </div>
</template>
