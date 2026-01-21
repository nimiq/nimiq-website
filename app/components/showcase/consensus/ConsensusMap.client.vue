<script setup lang="ts">
import type { Client, PlainBlock } from '@nimiq/core'
import type { CSSProperties } from 'vue'
import type { Peer } from '~/types/nimiq'
import type { WorldMapHexagon } from '~/utils/consensus-map/drawHexagonsWorldMapCanvas'
import init, * as Nimiq from '@nimiq/core/web'
import { consola } from 'consola'
import { ConsensusState } from '~/types/nimiq'
import { drawHexagonsWorldMap, HEXAGONS_WORLD_MAP_ASPECT_RATIO, HEXAGONS_WORLD_MAP_HEIGHT_PIXELS, HEXAGONS_WORLD_MAP_SCALE } from '~/utils/consensus-map/drawHexagonsWorldMapCanvas'
import { getHexagonCoords } from '~/utils/consensus-map/drawHexagonsWorldMapProjection'

defineProps<{ connectLabel: string, thisIsYou: string, connecting: string }>()

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
onMounted(async () => {
  await setUserPeer()
  const { userHexagon } = drawHexagonsWorldMap(canvas as Ref<HTMLCanvasElement>, { peers, userPeer, centerOnUser: true })
  setPositionTooltip(userHexagon)
})

const { pixelRatio } = useDevicePixelRatio()

async function setPositionTooltip(userHexagon: Ref<WorldMapHexagon | undefined>) {
  await nextTick()
  if (!userPeer.value || !userHexagon.value || !canvas.value)
    return

  const userX = userHexagon.value.left + (HEXAGONS_WORLD_MAP_SCALE / 2)
  const userY = userHexagon.value.top + (HEXAGONS_WORLD_MAP_SCALE / 2)

  const scale = (canvas.value.height) / (2 * HEXAGONS_WORLD_MAP_HEIGHT_PIXELS)
  const centerX = (canvas.value.width / pixelRatio.value) / (2 * scale)
  const centerY = (canvas.value.height / pixelRatio.value) / (2 * scale)

  const finalX = scale * (userX + (centerX - userX)) - 6
  const finalY = scale * (userY + (centerY - userY)) + 32

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
  <div class="of-hidden">
    <div class="relative xl:w-65vw" :style="`aspect-ratio: ${HEXAGONS_WORLD_MAP_ASPECT_RATIO}`">
      <div class="curtain size-full absolute z-1 xl:max-w-50vw" />
      <div class="size-full absolute">
        <canvas ref="canvas" />
        <div v-if="showTooltip" class="left-0 top-0 absolute z-1 animate-delay-500 animate-fade-in animate-both" :style="tooltipPosition">
          <div class="dark left-[calc(-50%+2px)] flex flex-col flex-items-center mt-16 relative" scheme-dark>
            <Icon class="text-12 translate-y-3.5" name="nimiq:tooltip-triangle" :class="{ 'text-blue': consensus === 'idle', 'text-orange': consensus === 'connecting', 'text-green': consensus === 'established' }" />
            <div v-if="consensus === 'idle'" class="ring-0.2 ring-blue flex flex-items-center rounded-full bg-gradient-blue transition-colors top--1" layout-id="connect">
              <span class="text-white font-bold px-16 py-8">{{ thisIsYou }}</span>
              <button class="text-blue font-bold m-6 px-12 py-5 rounded-full bg-white" layout-id="connect-label" as="button" @click="connect">
                {{ connectLabel }}
              </button>
            </div>
            <div v-else-if="consensus === 'connecting'" class="bg-gradient-orange ring-0.2 ring-orange flex flex-items-center flex-gap-8 text-white font-semibold px-16 py-8 outline-none rounded-full w-max transition-colors top--3" layout-id="connect">
              <div layout-id="connect-label" as="span">
                {{ connecting }}
              </div>
              <Icon class="animate-ease-out shrink-0 animate-scale-in animate-delay-2s" name="nimiq:spinner" />
            </div>
            <div v-else-if="consensus === 'established'" class="bg-gradient-green flex flex-items-center flex-gap-8 text-white font-semibold px-16 py-8 outline-none rounded-full w-max transition-colors top--3 z-3" layout-id="connect">
              <div layout-id="connect-label" as="span">
                <div class="flex flex-items-center flex-justify-between flex-gap-8">
                  <span>Connected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="consensus !== 'idle'" class="bottom-0 bottom-xl:32 font-semibold mx-auto p-24 rounded-6 bg-white bg-op-6 h-auto max-w-400 transition-height inset-x-0 absolute z-2 backdrop-blur-24 animate-fade-in-up animate-both animate-delay-1250ms">
        <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y--1lh" enter-to-class="translate-y-0" leave-active-class="transition duration-200 ease-out" leave-from-class="translate-y-0" leave-to-class="translate-y--1lh">
          <p v-if="consensus === 'connecting'" class="text-neutral-800 text-11 text-center w-[calc(100%-48px)] top--1.4lh absolute nq-label">
            Did you know that
          </p>
        </transition>
        <transition mode="out-in" enter-active-class="transition duration-200 ease-out origin-center-bottom" enter-from-class="transform translate-y-1lh op-0 blur-4 scale-95" enter-to-class="translate-y-0 op-100 blur-0 scale-100" leave-active-class="transition duration-200 ease-out origin-center-top" leave-from-class="transform translate-y-0 op-100 scale-100" leave-to-class="translate-y--1lh op-0 scale-95">
          <p v-if="consensus === 'connecting'" :key="currentFact" class="text-white/60 text-center text-f-lg h-2lh">
            {{ currentFact }}
          </p>
          <p v-else key="connected" class="text-white/60 text-center text-f-lg h-2lh">
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
      var(--colors-neutral-0) 0%,
      transparent var(--curtain-size),
      transparent calc(100% - var(--curtain-size)),
      var(--colors-neutral-0) 100%
    ),
    linear-gradient(
      to right,
      var(--colors-neutral-0) 0%,
      transparent var(--curtain-size),
      transparent calc(100% - var(--curtain-size)),
      var(--colors-neutral-0) 100%
    );
}
</style>
