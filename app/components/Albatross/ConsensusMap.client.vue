<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { WorldMapHexagon } from '~/utils/consensus-map/drawHexagonsWorldMapCanvas'
import { drawHexagonsWorldMap, HEXAGONS_WORLD_MAP_ASPECT_RATIO, HEXAGONS_WORLD_MAP_HEIGHT_PIXELS, HEXAGONS_WORLD_MAP_SCALE } from '~/utils/consensus-map/drawHexagonsWorldMapCanvas'

defineProps<{ connectLabel: string, thisIsYou: string, connecting: string }>()

const canvas = templateRef('canvas')
const { launchNetwork, /* disconnect, */ setUserPeer } = useNimiq()
const { consensus, peers, userPeer } = storeToRefs(useNimiq())

const tooltipPosition = ref<CSSProperties>({ transform: 'translate(0, 0)' })
onMounted(async () => {
  await setUserPeer()
  const { userHexagon } = drawHexagonsWorldMap(canvas, { peers, userPeer, centerOnUser: true })
  setPositionTooltip(userHexagon)
})

const { pixelRatio } = useDevicePixelRatio()

async function setPositionTooltip(userHexagon: Ref<WorldMapHexagon | undefined>) {
  await nextTick()
  if (!userPeer.value || !userHexagon.value)
    return

  // Compute original hex pixel position
  const userX = userHexagon.value.left + (HEXAGONS_WORLD_MAP_SCALE / 2)
  const userY = userHexagon.value.top + (HEXAGONS_WORLD_MAP_SCALE / 2)

  // Use the same logic as in resetCanvas()
  const scale = (canvas.value.height) / (2 * HEXAGONS_WORLD_MAP_HEIGHT_PIXELS)
  const centerX = (canvas.value.width / pixelRatio.value) / (2 * scale)
  const centerY = (canvas.value.height / pixelRatio.value) / (2 * scale)

  // Apply transformations
  const finalX = scale * (userX + (centerX - userX)) - 6
  const finalY = scale * (userY + (centerY - userY)) + 32

  // Add any tooltip offset as needed, for example +4 in X and -36 in Y:
  tooltipPosition.value = { transform: `translate(${finalX + 4}px, ${finalY - 36}px)` }
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
      <div absolute z-1 size-full xl:max-w-50vw class="curtain" />
      <div absolute size-full>
        <canvas ref="canvas" />
        <div v-if="showTooltip" absolute left-0 top-0 z-1 :style="tooltipPosition" animate="delay-500 fade-in both">
          <div relative left="[calc(-50%+2px)]" mt-16 flex="~ col items-center">
            <div :class="{ 'text-blue': consensus === 'idle', 'text-orange': consensus === 'connecting', 'text-green': consensus === 'established' }" i-nimiq:tooltip-triangle text-12 />
            <div v-if="consensus === 'idle'" layout-id="connect" ring="0.2 blue" top--1 rounded-full transition-colors flex="~ items-center" bg-gradient-blue>
              <span px-16 py-8 text-white font-bold>
                {{ thisIsYou }}
              </span>
              <div layout-id="connect-label" as="button" m-6 rounded-full bg-white px-12 py-5 text-blue font-bold @click="connect">
                {{ connectLabel }}
              </div>
            </div>
            <div v-else-if="consensus === 'connecting'" layout-id="connect" ring="0.2 orange" flex="~ items-center gap-8" class="bg-gradient-orange" top--3 w-max rounded-full px-16 py-8 text-white font-semibold outline-none transition-colors>
              <div layout-id="connect-label" as="span">
                Connecting
              </div>
              <div i-nimiq:spinner animate="ease-out scale-in delay-2s" shrink-0 />
            </div>
            <div v-else-if="consensus === 'established'" layout-id="connect" flex="~ items-center gap-8" class="bg-gradient-green" top--3 z-3 w-max rounded-full px-16 py-8 text-white font-semibold outline-none ring-3 ring-green transition-colors>
              <div layout-id="connect-label" as="span">
                <div flex="~ items-center justify-between gap-8">
                  <span>
                    Connected
                  </span>
                  <!-- TODO -->
                  <!-- <button bg="transparent hocus:white/30" rounded-2 p-5 text-11 transition-colors stack @click="() => disconnect()">
                    <div i-nimiq:cross />
                  </button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </transition> -->

      <div v-if="consensus !== 'idle'" absolute inset-x-0 bottom="0 xl:32" z-2 mx-auto h-auto max-w-400 rounded-6 bg-white bg-op-6 p-24 font-semibold backdrop-blur-24 transition-height animate="fade-in-up both delay-1250ms">
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
  background-image:
    linear-gradient(
      to bottom,
      rgb(var(--nq-neutral-0) / 1) 0%,
      rgb(var(--nq-neutral-0) / 0) var(--curtain-size),
      rgb(var(--nq-neutral-0) / 0) calc(100% - var(--curtain-size)),
      rgb(var(--nq-neutral-0) / 1) 100%
    ),
    linear-gradient(
      to right,
      rgb(var(--nq-neutral-0) / 1) 0%,
      rgb(var(--nq-neutral-0) / 0) var(--curtain-size),
      rgb(var(--nq-neutral-0) / 0) calc(100% - var(--curtain-size)),
      rgb(var(--nq-neutral-0) / 1) 100%
    );
}
</style>
