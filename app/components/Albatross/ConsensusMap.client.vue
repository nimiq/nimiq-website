<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { drawHexagonsWorldMap, HEXAGONS_WORLD_MAP_ASPECT_RATIO, HEXAGONS_WORLD_MAP_HEIGHT, HEXAGONS_WORLD_MAP_WIDTH } from '~/utils/consensus-map/drawHexagonsWorldMapCanvas'

defineProps<{ connectLabel: string, thisIsYou: string, connecting: string }>()

const canvas = templateRef('canvas')
const { launchNetwork, disconnect, setUserPeer } = useNimiq()
const { consensus, peers, userPeer } = storeToRefs(useNimiq())

const tooltipPosition = ref<CSSProperties>({ transform: 'translate(0, 0)' })
onMounted(async () => {
  await setUserPeer()
  drawHexagonsWorldMap(canvas, { peers, userPeer, centerOnUser: true })
  await nextTick()
  setPositionTooltip()
})

async function setPositionTooltip() {
  await nextTick()
  const { x, y } = userPeer.value!
  const newX = ((x * canvas.value.width) / HEXAGONS_WORLD_MAP_WIDTH) + 4
  const newY = ((y * canvas.value.height) / HEXAGONS_WORLD_MAP_HEIGHT) - 36
  tooltipPosition.value = { transform: `translate(${newX}px, ${newY}px)` }
}

useEventListener(window, 'resize', setPositionTooltip)

const showTooltip = computed(() => userPeer.value && tooltipPosition.value)

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

const { pause: pauseFactsLoop, resume: resumeFactsLoop } = useIntervalFn(() => {
  currentFact.value = didYouKwnowThatFacts[Math.floor(Math.random() * didYouKwnowThatFacts.length)]!
}, 6000, { immediate: false })

watch(consensus, () => {
  if (consensus.value === 'connecting') {
    resumeFactsLoop()
  }
  else {
    pauseFactsLoop()
  }
}, { immediate: true })

async function connect() {
  currentFact.value = didYouKwnowThatFacts[Math.floor(Math.random() * didYouKwnowThatFacts.length)]!
  await launchNetwork()
}
</script>

<template>
  <div of-hidden>
    <div relative xl:w-65vw :style="`aspect-ratio: ${HEXAGONS_WORLD_MAP_ASPECT_RATIO}`">
      <div absolute z-1 size-full class="curtain" />
      <div absolute size-full>
        <canvas ref="canvas" />
        <div v-if="showTooltip" absolute left-0 top-0 z-1 :style="tooltipPosition" animate="delay-500 fade-in both">
          <div relative left="[calc(-50%+2px)]" mt-16 flex="~ col items-center">
            <div :class="{ 'text-blue': consensus === 'idle', 'text-orange': consensus === 'connecting', 'text-green': consensus === 'established' }" i-nimiq:tooltip-triangle text-12 />
            <Hero v-if="consensus === 'idle'" layout-id="connect" ring="0.2 blue" class="bg-gradient-blue" top--1 rounded-full transition-colors>
              <span px-16 py-8 text-white font-bold>
                {{ thisIsYou }}
              </span>
              <Hero layout-id="connect-label" as="button" m-6 rounded-full bg-white px-12 py-5 text-blue font-bold @click="connect">
                {{ connectLabel }}
              </Hero>
            </Hero>
            <Hero v-else-if="consensus === 'connecting'" layout-id="connect" ring="0.2 orange" flex="~ items-center gap-8" class="bg-gradient-orange" top--3 w-max rounded-full px-16 py-8 text-white font-semibold outline-none transition-colors>
              <Hero layout-id="connect-label" as="span">
                Connecting
              </Hero>
              <div i-nimiq:spinner animate="ease-out scale-in delay-2s" shrink-0 />
            </Hero>
            <Hero v-else-if="consensus === 'established'" layout-id="connect" flex="~ items-center gap-8" class="bg-gradient-green" top--3 z-3 w-max rounded-full px-16 py-8 text-white font-semibold outline-none ring-3 ring-green transition-colors>
              <Hero layout-id="connect-label" as="span">
                <div flex="~ items-center justify-between gap-8">
                  <span>
                    Connected
                  </span>
                  <button bg="transparent hocus:white/30" rounded-2 p-5 text-11 transition-colors stack @click="disconnect">
                    <div i-nimiq:cross />
                  </button>
                </div>
              </Hero>
            </Hero>
          </div>
        </div>
      </div>
      <!-- </transition> -->

      <div v-if="consensus !== 'idle'" absolute inset-x-0 bottom-0 z-2 mx-auto h-auto max-w-400 rounded-6 bg-white bg-op-6 p-24 font-semibold backdrop-blur-24 transition-height animate="fade-in-up both delay-1250ms">
        <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y--1lh" enter-to-class="translate-y-0" leave-active-class="transition duration-200 ease-out" leave-from-class="translate-y-0" leave-to-class="translate-y--1lh">
          <p v-if="consensus === 'connecting'" text="neutral-800 11 center" w="[calc(100%-48px)]" absolute top--1.4lh nq-label>
            Did you know that
          </p>
        </transition>
        <transition
          mode="out-in" enter-active-class="transition duration-200 ease-out origin-center-bottom" enter-from-class="transform translate-y-1lh op-0 blur-4 scale-95" enter-to-class="translate-y-0 op-100 blur-0 scale-100"
          leave-active-class="transition duration-200 ease-out origin-center-top" leave-from-class="transform translate-y-0 op-100 scale-100" leave-to-class="translate-y--1lh op-0 scale-95"
        >
          <p v-if="consensus === 'connecting'" :key="currentFact" text="white/60 center lg" h-2lh>
            {{ currentFact }}
          </p>
          <p v-else key="connected" text="white/60 center lg" h-2lh>
            Your browser is now directly connected to {{ peers.length }} peers on the network.
          </p>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.curtain {
  --curtain-size: 128px;
  background-image: radial-gradient(
    circle at center,
    rgb(var(--nq-neutral-0) / 0) 0%,
    rgb(var(--nq-neutral-0) / 0) calc(100% - var(--curtain-size)),
    rgb(var(--nq-neutral-0) / 1) 100%
  );
}
</style>
