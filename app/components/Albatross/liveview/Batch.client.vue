<script setup lang="ts">
import { PROOF_OF_STAKE_MIGRATION_BLOCK } from '@nimiq/utils/albatross-policy'

const props = defineProps<{ batchNumber: number, blockNumber: number }>()
const blocksPerBatch = 60
const genesisBlockNumber = PROOF_OF_STAKE_MIGRATION_BLOCK

const { microblocks } = useAlbatrossBlocks()

function getBlockColor(n: number) {
  const blockNumber = genesisBlockNumber + (props.batchNumber - 1) * blocksPerBatch + n
  const block = microblocks.value.find(b => b.number === blockNumber)
  return block?.producer.publicKey
    ? getLiveviewColorValue({ publicKey: block.producer.publicKey })
    : 'var(--color-neutral)'
}

const showColors = ref(false)
const toggleColors = useToggle(showColors)

const remainingBlockCount = computed(() => {
  if (props.batchNumber <= 0)
    return Math.max(0, blocksPerBatch - 1)
  const remaining = genesisBlockNumber + (props.batchNumber * blocksPerBatch) - props.blockNumber - 1
  return Math.min(Math.max(remaining, 0), blocksPerBatch - 1)
})

const createdBlockCount = computed(() => Math.max(blocksPerBatch - remainingBlockCount.value - 1, 0))
const pastMacro = computed(() => props.blockNumber > (props.batchNumber * blocksPerBatch) + genesisBlockNumber)
const isWaitingForMacro = computed(() => props.blockNumber === (props.batchNumber * blocksPerBatch) + genesisBlockNumber - 1)

const batchClass = computed(() => {
  const classes = []
  if (isWaitingForMacro.value)
    classes.push('animate-pulse')
  else if (pastMacro.value)
    classes.push('text-neutral opacity-100')
  else if (props.batchNumber > 999)
    classes.push('text-[9px]')
  return classes.join(' ')
})

const batchNumberClass = computed(() => {
  if (props.batchNumber > 99999)
    return 'text-[8px] leading-none'
  else if (props.batchNumber > 9999)
    return 'text-[9px] leading-none'
  return 'text-[10px] leading-none'
})
</script>

<template>
  <div
    class="max-w-[calc(100vw-12px)] md:max-w-full flex justify-between items-start px-16 w-[388px]"
    @click="() => toggleColors()"
  >
    <div class="flex flex-col flex-wrap h-56 md:h-44">
      <div
        v-for="n in createdBlockCount" :key="`micro-block-${n}`" class="m-[4px] rounded-full size-[6px] inline-block transition-colors"
        :style="{ backgroundColor: showColors ? getBlockColor(n) : 'var(--color-neutral-800)' }"
      />
      <div
        v-for="n in remainingBlockCount" :key="`micro-block-${createdBlockCount + n}`"
        class="m-[4px] rounded-2 bg-neutral-500 size-[6px] inline-block"
      />
    </div>

    <div
      class="text-14 text-neutral-900 text-center flex justify-center flex-col items-center font-bold ml-[4px] rounded-8 bg-neutral-600 opacity-60 shrink-0 size-44 transition-all relative" :class="batchClass"
    >
      <span>M</span>
      <span :class="batchNumberClass">{{ batchNumber }}</span>
    </div>
  </div>
</template>
