<script setup lang="ts">
import type { MicroBlockLiveview } from '~~/server/types'

const props = defineProps<{ block: MicroBlockLiveview }>()

const MAX_TXS = 1102

const delay = computed(() => {
  if (!props.block.delay)
    return '?'
  return (props.block.delay / 1000).toFixed(1)
})

const txCount = computed(() => props.block.matchedTxs.length + props.block.unmatchedTxs.length)
const nonces = computed(() => props.block.matchedTxs.slice(0, MAX_TXS))
const hashes = computed(() => props.block.unmatchedTxs.slice(0, MAX_TXS - nonces.value.length))

// @unocss-include

const fontSizeClass = computed(() => {
  if (props.block.number > 999999)
    return 'text-15/13.5'
  if (props.block.number > 99999)
    return 'text-17'
  if (props.block.number > 9999)
    return 'text-20'
  return 'text-24/19'
})
</script>

<template>
  <div title="Micro Block">
    <div flex="~ col shrink-0" relative size-160 rounded-8 bg-neutral text-neutral-0>
      <div px-16 pb-10 pt-14 flex="~ items-center justify-between" text-15>
        <p font-bold :class="fontSizeClass">
          #{{ block.number }}
        </p>
        <p v-if="txCount > 0" text-13 font-semibold lh-none>
          {{ txCount }} TX
        </p>
      </div>

      <div v-if="!txCount" text="neutral-700 13 center" mt-80 grow-1 font-semibold>
        No Transactions
      </div>
      <div v-else grow-1>
        <TransactionCanvas absolute bottom-0 left-0 origin="[0_100%]" scale-50 :nonces :hashes />
      </div>
    </div>

    <footer flex="~ items-center justify-between" w-full px-8 pt-2 text="neutral-800 12">
      <p>
        Slot {{ block.producer.slotNumber }}
      </p>
      <p>
        {{ delay }}s block time
      </p>
    </footer>
  </div>
</template>
