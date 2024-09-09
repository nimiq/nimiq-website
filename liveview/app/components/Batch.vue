<script setup lang="ts">
const props = defineProps<{ batchNumber: number, blockNumber: number }>()

const { blocksPerBatch, genesisBlockNumber } = storeToRefs(usePolicy())

const showColors = ref(false)
const toggleColors = useToggle(showColors)

const remainingBlockCount = computed(() => {
  if (props.batchNumber <= 0)
    return Math.max(0, blocksPerBatch.value - 1)
  const remaining = genesisBlockNumber.value + (props.batchNumber * blocksPerBatch.value) - props.blockNumber - 1
  return Math.min(Math.max(remaining, 0), blocksPerBatch.value - 1)
})

const createdBlockCount = computed(() => Math.max(blocksPerBatch.value - remainingBlockCount.value - 1, 0))
const pastMacro = computed(() => props.blockNumber > (props.batchNumber * blocksPerBatch.value) + genesisBlockNumber.value)
const isWaitingForMacro = computed(() => props.blockNumber === (props.batchNumber * blocksPerBatch.value) + genesisBlockNumber.value - 1)

// @unocss-include

const batchClass = computed(() => {
  const classes = []
  if (isWaitingForMacro.value)
    classes.push('pulsing')
  else if (pastMacro.value)
    classes.push('text-neutral-0 op-1')
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
    <div flex="~ col wrap" h="70 sm:56 md:44">
      <!-- :style="showColors && validators && `background: #${n}`" -->
      <div
        v-for="n in createdBlockCount" :key="`micro-block-${n}`" m-4 inline-block size-6 rounded-2 bg-neutral op-60
      />
      <div
        v-for="n in remainingBlockCount" :key="`micro-block-${createdBlockCount + n}`" m-4 inline-block size-6
        rounded-2 bg-neutral-300
      />
    </div>

    <div
      text="14 neutral-800 center" flex="~ justify-center col items-center" relative ml-4 size-44 shrink-0 rounded-8
      bg-neutral-200 font-bold op-60 transition-colors :class="batchClass"
    >
      <span>M</span>
      <span :class="batchNumberClass">{{ batchNumber }}</span>
    </div>
  </div>
</template>

<style scoped>
.macro-block.pulsing {
  animation: batch-pulse 1s linear infinite;
}

@keyframes batch-pulse {
  from {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0.6;
  }
}
</style>
