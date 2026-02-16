<script setup lang="ts">
import type { Client, PlainBlock } from '@nimiq/core'
import type { CSSProperties } from 'vue'
import type { Peer } from '~/types/nimiq'
import type { WorldMapHexagon } from '~/utils/consensus-map/drawHexagonsWorldMapCanvas'
import init, * as Nimiq from '@nimiq/core/web'
import { consola } from 'consola'
import { ConsensusState } from '~/types/nimiq'
import { drawHexagonsWorldMap, getHexagonsWorldMapAspectRatio, HEXAGONS_WORLD_MAP_HEIGHT_PIXELS, HEXAGONS_WORLD_MAP_SCALE } from '~/utils/consensus-map/drawHexagonsWorldMapCanvas'
import { getHexagonCoords } from '~/utils/consensus-map/drawHexagonsWorldMapProjection'

defineProps<{ connectLabel: string, thisIsYou: string, connecting: string }>()

// Called during setup - safe in .client.vue
const aspectRatio = getHexagonsWorldMapAspectRatio()

function useNimiq() {
  const { clientNetwork } = useRuntimeConfig().public
  const consensus = useState<ConsensusState>('nimiq-client', () => ConsensusState.Idle)
  const head = ref<PlainBlock>()
  const height = ref(0)
  const client = useState<Client | undefined>()

  const { locate } = useGeoIp()
  const peers = ref<Peer[]>([])
  const userPeer = useState<Peer>()

  const unwatch = ref<(() => Promise<any>)>()

  async function launchNetwork() {
    consensus.value = ConsensusState.Connecting
    await init()
    const config = new Nimiq.ClientConfiguration()
    config.network(clientNetwork)
    config.syncMode('pico')
    config.logLevel('debug')

    client.value = await Nimiq.Client.create(config.build())

    const removeConsensusListener = client.value!.addConsensusChangedListener((state) => {
      consola.log('Consensus state changed:', state)
      consensus.value = state === 'syncing' ? ConsensusState.Connecting : ConsensusState.Established
    })

    const removeHeadListener = client.value!.addHeadChangedListener(async (hash) => {
      const block = await client.value!.getBlock(hash)
      head.value = block
      height.value = block.height
    })

    const removePeerChanged = client.value!.addPeerChangedListener(async (peerId, reason, peerCount, peerInfo) => {
      consola.log('Peer changed:', { peerId, reason, peerCount, peerInfo })
      if (reason === 'left') {
        peers.value = peers.value.filter(peer => peer.peerId !== peerId)
        return
      }
      if (!peerInfo)
        return

      const locator = peerInfo.address.split('/')[2]
      if (!locator || locator === '0.0.0.0')
        return

      const { lat, lng } = await locate(locator)
      const { x, y } = getHexagonCoords({ lat, lng })
      const peer = { peerId, x, y, lat, lng }
      peers.value.push(peer)
    })

    unwatch.value = () => Promise.all([removeConsensusListener, removeHeadListener, removePeerChanged])
  }

  async function disconnect(timeout = 10000) {
    await client.value?.disconnectNetwork()
    await until(peers.value.length).toBe(0, { timeout })
  }

  async function setUserPeer() {
    const { lat, lng } = await locate()
    const { x, y } = getHexagonCoords({ lat, lng })
    userPeer.value = { peerId: 'user', lat, lng, x, y }
  }

  return { client, launchNetwork, consensus, height, head, disconnect, setUserPeer, userPeer, peers }
}

const { launchNetwork, setUserPeer, consensus, peers, userPeer } = useNimiq()

const canvas = useTemplateRef('canvas')

const tooltipPosition = ref<CSSProperties>({ transform: 'translate(0, 0)' })
const mapError = ref<Error | null>(null)
let cachedUserHexagon: Ref<WorldMapHexagon | undefined> | null = null

const { pixelRatio } = useDevicePixelRatio()

async function updateTooltipPosition() {
  await nextTick()
  if (!userPeer.value || !cachedUserHexagon?.value || !canvas.value)
    return

  const userX = cachedUserHexagon.value.left + (HEXAGONS_WORLD_MAP_SCALE / 2)
  const userY = cachedUserHexagon.value.top + (HEXAGONS_WORLD_MAP_SCALE / 2)

  const scale = (canvas.value.height) / (2 * HEXAGONS_WORLD_MAP_HEIGHT_PIXELS)
  const centerX = (canvas.value.width / pixelRatio.value) / (2 * scale)
  const centerY = (canvas.value.height / pixelRatio.value) / (2 * scale)

  const finalX = scale * (userX + (centerX - userX)) - 6
  const finalY = scale * (userY + (centerY - userY)) + 32

  tooltipPosition.value = { transform: `translate(${finalX + 4}px, ${finalY - 36}px)` }
}

onMounted(async () => {
  try {
    await setUserPeer()
  }
  catch (error) {
    console.warn('Failed to get user location, using default:', error)
    userPeer.value = { peerId: 'user', lat: 52.52, lng: 13.405, x: 64, y: 26 }
  }
  try {
    const { userHexagon } = drawHexagonsWorldMap(canvas as Ref<HTMLCanvasElement>, { peers, userPeer, centerOnUser: true })
    cachedUserHexagon = userHexagon
    updateTooltipPosition()
  }
  catch (error) {
    console.error('Failed to draw consensus map:', error)
    mapError.value = error as Error
  }
})

useEventListener(window, 'resize', updateTooltipPosition)

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
  if (consensus.value === 'connecting')
    resumeFactsLoop()
  else
    pauseFactsLoop()
}, { immediate: true })

async function connect() {
  currentFact.value = didYouKwnowThatFacts[Math.floor(Math.random() * didYouKwnowThatFacts.length)]!
  await launchNetwork()
}
</script>

<template>
  <div class="overflow-hidden w-full">
    <div class="relative w-full xl:w-[65vw]" :style="`aspect-ratio: ${aspectRatio}`">
      <div class="curtain size-full absolute z-1 xl:max-w-50vw" />
      <div class="size-full absolute">
        <canvas ref="canvas" class="size-full" />
        <div v-if="showTooltip" class="left-0 top-0 absolute z-1 animate-delay-500 animate-fade-in animate-both" :style="tooltipPosition">
          <div class="dark left-[calc(-50%+2px)] flex flex-col items-center mt-4 relative" scheme-dark>
            <Icon class="text-12 translate-y-[3.5px]" name="nimiq:tooltip-triangle" :class="{ 'text-blue': consensus === 'idle', 'text-orange': consensus === 'connecting', 'text-green': consensus === 'established' }" />
            <div v-if="consensus === 'idle'" class="ring-0.2 ring-blue flex items-center rounded-full bg-gradient-blue transition-colors -top-px" layout-id="connect">
              <span class="text-white font-bold px-4 py-2">{{ thisIsYou }}</span>
              <button class="text-blue font-bold m-1.5 px-3 py-[5px] rounded-full bg-white" layout-id="connect-label" as="button" @click="connect">
                {{ connectLabel }}
              </button>
            </div>
            <div v-else-if="consensus === 'connecting'" class="bg-gradient-orange ring-0.2 ring-orange flex items-center gap-2 text-white font-semibold px-4 py-2 outline-none rounded-full w-max transition-colors -top-[3px]" layout-id="connect">
              <div layout-id="connect-label" as="span">
                {{ connecting }}
              </div>
              <Icon class="animate-ease-out shrink-0 animate-scale-in animate-delay-2s" name="nimiq:spinner" />
            </div>
            <div v-else-if="consensus === 'established'" class="bg-gradient-green flex items-center gap-2 text-white font-semibold px-4 py-2 outline-none rounded-full w-max transition-colors -top-[3px] z-3" layout-id="connect">
              <div layout-id="connect-label" as="span">
                <div class="flex items-center justify-between gap-2">
                  <span>Connected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="consensus !== 'idle'" class="bottom-0 bottom-xl:32 font-semibold mx-auto p-6 rounded-1.5 bg-white bg-white/6 h-auto max-w-[400px] transition-height inset-x-0 absolute z-2 backdrop-blur-24 animate-fade-in-up animate-both animate-delay-1250ms">
        <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y--1lh" enter-to-class="translate-y-0" leave-active-class="transition duration-200 ease-out" leave-from-class="translate-y-0" leave-to-class="translate-y--1lh">
          <p v-if="consensus === 'connecting'" class="text-neutral-800 text-11 text-center w-[calc(100%-48px)] -top-px.4lh absolute nq-label">
            Did you know that
          </p>
        </transition>
        <transition mode="out-in" enter-active-class="transition duration-200 ease-out origin-center-bottom" enter-from-class="transform translate-y-1lh opacity-0 blur-4 scale-95" enter-to-class="translate-y-0 opacity-100 blur-0 scale-100" leave-active-class="transition duration-200 ease-out origin-center-top" leave-from-class="transform translate-y-0 opacity-100 scale-100" leave-to-class="translate-y--1lh opacity-0 scale-95">
          <p v-if="consensus === 'connecting'" :key="currentFact" class="text-white/60 text-center text-base md:text-lg h-2lh">
            {{ currentFact }}
          </p>
          <p v-else key="connected" class="text-white/60 text-center text-base md:text-lg h-2lh">
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
      var(--color-darkerblue) 0%,
      transparent var(--curtain-size),
      transparent calc(100% - var(--curtain-size)),
      var(--color-darkerblue) 100%
    ),
    linear-gradient(
      to right,
      var(--color-darkerblue) 0%,
      transparent var(--curtain-size),
      transparent calc(100% - var(--curtain-size)),
      var(--color-darkerblue) 100%
    );
}
</style>
