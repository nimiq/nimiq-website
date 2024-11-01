<script setup lang="ts">
defineProps<{ connectLabel: string, thisIsYou: string, connecting: string }>()

const canvas = templateRef('canvas')
const { peers, userPeer } = useNimiqPeers()
useHexagonsWorldMap(canvas, { peers, userPeer })

const { width, height } = useElementSize(canvas)

const tooltipPosition = computed(() => {
  if (!userPeer.value || !canvas.value)
    return
  const { x, y } = userPeer.value
  const newX = (x * width.value) / HEXAGONS_WORLD_MAP_WIDTH
  const newY = (y * height.value) / HEXAGONS_WORLD_MAP_HEIGHT
  return { transform: `translate(${newX}px, ${newY}px)` }
})

const canvasIsShown = useElementVisibility(canvas)
const showTooltip = computed(() => canvasIsShown.value && tooltipPosition.value)

const didYouKwnowThatFacts = [
  'Nimiq is a browser-first blockchain',
  'Nimiq 2.0 uses Proof-of-Stake consensus',
  'You are connecting directly to the blockchain',
  'Nimiq supports atomic swaps with Bitcoin, USDC and USDT',
  'Nimiq was founded in 2018',
  'You can use NIM in over 29K locations',
  'Nimiq is a non-profit foundation',
  'You can find us on Twitter or Telegram',
  'Nimiq is a decentralized payment protocol',
]
const currentFact = ref('')

useIntervalFn(() => {
  currentFact.value = didYouKwnowThatFacts[Math.floor(Math.random() * didYouKwnowThatFacts.length)]!
}, 6000)

const states = [
  'idle',
  'connecting',
  'Connected',
]
const state = ref(states[0])
function connect() {
  currentFact.value = didYouKwnowThatFacts[Math.floor(Math.random() * didYouKwnowThatFacts.length)]!
  state.value = 'connecting'
}

// loop over the three state
// useIntervalFn(() => {
//   const index = states.indexOf(state.value!)
//   state.value = states[(index + 1) % states.length]
// }, 2000)
</script>

<template>
  <div relative size-full>
    <canvas ref="canvas" />
    <!-- <transition enter-active-class="transition duration-500 ease-out" enter-from-class="transform mb--30 op-0" enter-to-class="mb-0 op-100"> -->
    <div v-if="showTooltip" absolute left-0 top-0 :style="tooltipPosition" animate="delay-500 fade-in">
      <div relative left="[calc(-50%+2px)]" mt-16 flex="~ col items-center">
        <div i-nimiq:tooltip-triangle text-12 :class="{ 'text-blue': state === 'idle', 'text-orange': state === 'connecting' }" />
        <Motion v-if="state === 'idle'" top--1 rounded-full transition-colors ring="0.2 blue" bg-gradient-blue>
          <span px-16 py-8 text-white font-bold>
            {{ thisIsYou }}
          </span>
          <button m-6 rounded-full bg-white px-12 py-5 text-blue font-bold @click="connect">
            {{ connectLabel }}
          </button>
        </Motion>
        <div v-else-if="state === 'connecting'" ring="0.2 blue" top--1 rounded-full px-22 py-12 transition-colors bg-gradient-orange>
          Conneting
        </div>
      </div>
    </div>
    <!-- </transition> -->

    <div bg="white/6" absolute inset-x-0 bottom-0 mx-auto h-auto max-w-400 rounded-6 p-24 font-semibold backdrop-blur-24 transition-height>
      <p text="neutral-800 11 center" w="[calc(100%-48px)]" absolute top--1.4lh nq-label>
        Did you know that
      </p>
      <transition
        mode="out-in" enter-active-class="transition duration-300 ease-out" enter-from-class="transform translate-y-1lh op-0" enter-to-class="translate-y-0 op-100"
        leave-active-class="transition duration-300 ease-out" leave-from-class="transform translate-y-0 op-100" leave-to-class="translate-y--1lh op-0"
      >
        <p :key="currentFact" text="white/60 center lg" h-2lh>
          {{ currentFact }}
        </p>
      </transition>
    </div>
  </div>
</template>
