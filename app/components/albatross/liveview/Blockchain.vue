<script setup lang="ts">
import { useRafFn } from '@vueuse/core'

const BLOCK_WIDTH = 208
const TARGET_OFFSET = -BLOCK_WIDTH / 4
const CHAIN_SPEED_FACTOR = 0.55

const { blocks, batchNumber, blockNumber, status } = storeToRefs(useLiveviewBlocks())

const velocity = ref(1000000)
const offset = ref(blocks.value.length * BLOCK_WIDTH)
watch(blocks, () => {
  if (status.value !== 'OPEN')
    return
  offset.value += BLOCK_WIDTH
}, { deep: true })

/*
Scrolling effect

This JS creates the effect of a continously scrolling blockchain.
New blocks arrive from the right and push the other blocks to the left.

Whenever a new block is added, a watcher (above) increases the offset of the
chain container, which reactively sets the DOM element's transform style.
In each animation frame, a velocity is calculated that enables the element's return
towards the target offset (resting state). This velocity is then applied to
the offset (which, again, updates the transform reactively).

The velocity is calculated as a root over the distance the element has to travel.
The lower the root (chain speed factor), the slower the element travels and vice-versa.
*/
const focused = useWindowFocus()
const { pause, resume } = useRafFn(() => {
  if (!focused.value)
    return
  velocity.value = -Math.floor((-TARGET_OFFSET + offset.value) ** CHAIN_SPEED_FACTOR)
  offset.value += velocity.value
}, { immediate: false })

onUnmounted(() => pause())

watch(status, async newStatus => (newStatus === 'OPEN' && focused.value) ? resume() : pause(), { immediate: true })
watch(focused, () => (focused.value) ? resume() : pause(), { immediate: true })

const { canSendTx } = storeToRefs(useLiveviewTx())
const AlbatrossLiveviewTxPending = defineAsyncComponent(() => import('./TxPending.vue'))
</script>

<template>
  <div relative>
    <div flex="~ justify-end items-center" min-h-224 of-hidden px-24 pr-84>
      <transition-group
        tag="div" flex="~ justify-end items-center" enter-from-class="op-0" enter-active-class="transition-opacity duration-400 ease-in"
        :style="{ transform: `translate3d(${offset}px, 0, 0)` }"
      >
        <AlbatrossLiveviewBlock v-for="block in blocks" :key="`block-${block.number}`" :block :style="{ width: BLOCK_WIDTH }" />
      </transition-group>

      <div v-if="canSendTx" absolute right-32>
        <AlbatrossLiveviewTxPending />
      </div>
    </div>

    <div v-if="status !== 'OPEN' || blocks.length === 0" absolute inset-0 flex="~ justify-center items-center" min-h-224 font-bold>
      <div v-if="status === 'CONNECTING' || blocks.length === 0" text-18>
        Loading...
      </div>
      <div v-else-if="status === 'CLOSED'" text="18 white" rounded-4 bg-red px-32 py-24>
        We couldn't connect to the Demonet
      </div>
    </div>

    <div v-show="status === 'OPEN'" w-full flex="~ justify-center" of-hidden px-32>
      <!-- :class="{ unimate: isMacro || isFirstBatchAfterPageLoad }"> -->
      <div flex="~ justify-center">
        <AlbatrossLiveviewBatch v-for="n in 7" :key="`batch-${batchNumber - 2 + n - 1}`" :batch-number="batchNumber - 3 + n - 1" :block-number class="animate-batch-unshift" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-batch-unshift {
  animation: batch-unshift 0.6s ease-in-out;
}

@keyframes batch-unshift {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}
</style>
