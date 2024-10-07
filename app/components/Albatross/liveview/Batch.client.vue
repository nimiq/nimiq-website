<script setup lang="ts">
import { Policy } from '@nimiq/core'

const props = defineProps<{ batchNumber: number, blockNumber: number }>()

const GENESIS_BLOCK_NUMBER = 3032010

const { microblocks } = storeToRefs(useLiveviewBlocks())

function getBlockColor(n: number) {
  const blockNumber = GENESIS_BLOCK_NUMBER + (props.batchNumber - 1) * Policy.BLOCKS_PER_BATCH + n
  const block = microblocks.value.find(b => b.number === blockNumber)
  return block?.producer.publicKey
    ? getLiveviewColorValue({ publicKey: block.producer.publicKey })
    : 'rgb(var(--nq-neutral) / 1)'
}

const showColors = ref(false)
const toggleColors = useToggle(showColors)

const remainingBlockCount = computed(() => {
  if (props.batchNumber <= 0)
    return Math.max(0, Policy.BLOCKS_PER_BATCH - 1)
  const remaining = GENESIS_BLOCK_NUMBER + (props.batchNumber * Policy.BLOCKS_PER_BATCH) - props.blockNumber - 1
  return Math.min(Math.max(remaining, 0), Policy.BLOCKS_PER_BATCH - 1)
})

const createdBlockCount = computed(() => Math.max(Policy.BLOCKS_PER_BATCH - remainingBlockCount.value - 1, 0))
const pastMacro = computed(() => props.blockNumber > (props.batchNumber * Policy.BLOCKS_PER_BATCH) + GENESIS_BLOCK_NUMBER)
const isWaitingForMacro = computed(() => props.blockNumber === (props.batchNumber * Policy.BLOCKS_PER_BATCH) + GENESIS_BLOCK_NUMBER - 1)

// @unocss-include

const batchClass = computed(() => {
  const classes = []
  if (isWaitingForMacro.value)
    classes.push('animate-pulse')
  else if (pastMacro.value)
    classes.push('text-neutral op-100')
  else if (props.batchNumber > 999)
    classes.push('text-9')
  return classes.join(' ')
})

const batchNumberClass = computed(() => {
  if (props.batchNumber > 99999) {
    return 'text-7'
  }
  else if (props.batchNumber > 9999) {
    return 'text-8'
  }
  return 'text-9'
})
</script>

<template>
  <div
    w-388 max-w="[calc(100vw-12px)] md:full" flex="~ justify-between items-start" px-16
    @click="() => toggleColors()"
  >
    <div flex="~ col wrap" h="56 md:44">
      <div
        v-for="n in createdBlockCount" :key="`micro-block-${n}`" m-4 inline-block size-6 rounded-2 transition-colors
        :style="{ backgroundColor: showColors ? getBlockColor(n) : 'rgb(var(--nq-neutral-800) / 1)' }"
      />
      <div
        v-for="n in remainingBlockCount" :key="`micro-block-${createdBlockCount + n}`" m-4 inline-block size-6
        rounded-2 bg-neutral-500
      />
    </div>

    <div
      text="14 neutral-900 center" flex="~ justify-center col items-center" relative ml-4 size-44 shrink-0 rounded-8
      bg-neutral-600 font-bold op-60 transition-all :class="batchClass"
    >
      <span>M</span>
      <span :class="batchNumberClass">{{ batchNumber }}</span>
    </div>
  </div>
</template>
