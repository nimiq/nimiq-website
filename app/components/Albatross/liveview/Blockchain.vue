<script setup lang="ts">
const BLOCK_WIDTH = 208
const TARGET_OFFSET = -BLOCK_WIDTH / 4
const CHAIN_SPEED_FACTOR = 0.55

const { blocks, batchNumber, blockNumber, status } = useAlbatrossBlocks()

let velocity = 0
let offset = blocks.value.length * BLOCK_WIDTH
let frame: number | null = null

const target = ref<HTMLElement>()
const chainElement = ref<HTMLElement>()
const blockchainIsVisible = useElementVisibility(target)

const canAnimate = ref(false)
const isAnimating = ref(false)

function startAnimation() {
  if (frame)
    return
  if (!canAnimate.value)
    return

  function loop() {
    frame = requestAnimationFrame(loop)
    velocity = -Math.floor((-TARGET_OFFSET + offset) ** CHAIN_SPEED_FACTOR)
    offset += velocity

    if (chainElement.value)
      chainElement.value.style.transform = `translate3d(${offset}px, 0, 0)`
  }

  isAnimating.value = true
  loop()
}

function stopAnimation() {
  if (!frame)
    return
  cancelAnimationFrame(frame)
  frame = null
  isAnimating.value = false
}

watchEffect(() => {
  const newCanAnimate = status.value === 'OPEN' && blocks.value.length >= BLOCKS_WINDOW_SIZE && blockchainIsVisible.value
  if (canAnimate.value !== newCanAnimate) {
    canAnimate.value = newCanAnimate
    if (newCanAnimate && !isAnimating.value)
      startAnimation()
    else if (!newCanAnimate && isAnimating.value)
      stopAnimation()
  }
})

onBeforeUnmount(() => {
  stopAnimation()
})

watch(() => blocks.value.length, () => {
  if (!canAnimate.value)
    return
  offset += BLOCK_WIDTH
})

const { clientNetwork } = useRuntimeConfig().public
</script>

<template>
  <div ref="target" class="relative overflow-x-clip">
    <div class="flex justify-end items-center px-24 min-h-[208px] overflow-hidden">
      <div ref="chainElement" class="flex justify-end items-center" style="will-change: transform">
        <TransitionGroup
          tag="div" class="flex justify-end items-center" enter-from-class="opacity-0" enter-active-class="transition-opacity duration-400 ease-in"
        >
          <AlbatrossLiveviewBlock v-for="block in blocks" :key="`block-${block.number}`" :block :style="{ width: `${BLOCK_WIDTH}px` }" />
        </TransitionGroup>
      </div>
    </div>

    <div v-if="status !== 'OPEN' || blocks.length === 0" class="flex justify-center items-center font-bold min-h-[224px] inset-0 absolute">
      <div v-if="status === 'CONNECTING' || blocks.length === 0" class="text-f-lg text-white">
        Loading...
      </div>
      <div v-else-if="status === 'CLOSED'" class="text-18 text-white px-32 py-24 rounded-4 bg-red shadow ring-[1.5px] ring-red/30">
        We couldn't connect to the {{ clientNetwork }}
      </div>
    </div>

    <div v-else class="flex justify-center px-32 w-full overflow-hidden f-mt-lg">
      <div class="flex justify-center">
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
