<script setup lang="ts">
import type { NodeHexagon, SelfHexagon } from './NetworkMap'
import { NetworkStatus } from '@/types/network'
import { NetworkClient } from '@nimiq/network-client'
import { createPopper } from '@popperjs/core'
import { computed, onMounted, ref, watch } from 'vue'
import NetworkMap, { HEIGHT, SCALING_FACTOR, WIDTH } from './NetworkMap'
// import ConsensusIcon from './ConsensusIcon.vue'

const props = defineProps({
  texts: {
    type: Object,
    required: true,
    validator: (value: Record<string, string>) => {
      const requiredTextsKeys = [
        'thisIsYou',
        'connect',
        'connected',
        'connecting',
        'notConnected',
        'notApplicableAcronym',
        'blockHeight',
        'connectedTo',
        'consensus',
      ]
      const missingKeys = requiredTextsKeys.filter(key => !(key in value))
      if (missingKeys.length) {
        console.error(`ConsensusMap: missing texts for keys: ${missingKeys.join(', ')}`)
        return false
      }
      return true
    },
  },
  backgroundColor: {
    type: String as () => 'grey' | 'blue-dark',
    default: 'blue-dark',
    validator: (value: string) => ['grey', 'blue-dark'].includes(value),
  },
})

const container$ = ref<HTMLDivElement | null>(null)
const network$ = ref<HTMLCanvasElement | null>(null)
const nodes = ref<NodeHexagon[]>([])
const overlay$ = ref<HTMLCanvasElement | null>(null)
const userNode$ = ref<HTMLDivElement | null>(null)
const trigger$ = ref<HTMLDivElement | null>(null)
const scale = ref(SCALING_FACTOR)
const width = ref(2 * WIDTH)
const height = ref(2 * HEIGHT)
const x = ref(0)
const y = ref(0)
const networkMap = ref<NetworkMap | null>(null)
const tooltipPosition = ref<'top' | 'bottom'>('top')
const initialized = ref(false)
const disconnected = ref(false)

// Nimiq Network
const networkStatus = ref<NetworkStatus>(NetworkStatus.CONNECTING)
const networkHeight = ref(0)
const networkPeerCount = ref(0)

let popperInstance: ReturnType<typeof createPopper> | null = null
const client = ref<NetworkClient | null>(null)

onMounted(() => init())

function init() {
  if (!networkMap.value) {
    networkMap.value = new NetworkMap(
      network$.value!,
      overlay$.value!,
      (n) => {
        nodes.value = n
      },
      setTooltip,
      selfNodeScrollIntoView,
      props.backgroundColor === 'blue-dark' ? [255, 255, 255] : [31, 35, 72],
    )
  }
  requestAnimationFrame(() => setDimensions())
}

watch(networkStatus, () => {
  setTimeout(() => popperInstance && popperInstance.forceUpdate())
})

function setDimensions() {
  if (!container$.value)
    return
  const containerWidth = container$.value.offsetWidth
  const containerHeight = container$.value.offsetHeight

  if (containerHeight * (WIDTH / HEIGHT) > containerWidth) {
    width.value = Math.round(containerWidth / 2) * 2
    height.value = Math.round(containerWidth / (WIDTH / HEIGHT) / 2) * 2
    scale.value = (SCALING_FACTOR * width.value) / (2 * WIDTH)
  }
  else {
    width.value = Math.round((containerHeight * (WIDTH / HEIGHT)) / 2) * 2
    height.value = Math.round(containerHeight / 2) * 2
    scale.value = (SCALING_FACTOR * height.value) / (2 * HEIGHT)
  }
  container$.value!.style.height = `${height.value}px`
}

function selfNodeScrollIntoView(x: number) {
  if (!x)
    return
  const mapWidth = container$.value!.children[0]!.clientWidth
  const adjustedX = x * (mapWidth / WIDTH)

  const scrollTarget = adjustedX - window.innerWidth / 2
  container$.value!.parentElement!.scrollTo(scrollTarget, 0)
}

useEventListener('resize', () => setDimensions())

async function setNetworkClient() {
  if (!client.value) {
    client.value = NetworkClient.createInstance()
    await client.value.init()
  }
}

async function launchNetwork() {
  await setNetworkClient()

  client.value!.on(NetworkClient.Events.CONSENSUS, (state) => {
    if (initialized.value && !disconnected.value && state === NetworkStatus.CONNECTING)
      state = NetworkStatus.SYNCING
    networkStatus.value = state
  })
  client.value!.on(NetworkClient.Events.HEAD_HEIGHT, height => networkHeight.value = height)
  client.value!.on(NetworkClient.Events.PEER_COUNT, peerCount => networkPeerCount.value = peerCount)
}

async function connect() {
  if (!networkMap.value)
    return

  networkStatus.value = NetworkStatus.SYNCING
  initialized.value = true

  await launchNetwork()

  let askForAddressesTimeout = 0
  const updateKnownAddresses = () => {
    if (!askForAddressesTimeout) {
      askForAddressesTimeout = window.setTimeout(async () => {
        const newKnownAddresses = await NetworkClient.Instance.getPeerAddresses()
        if (networkMap.value!.updateNodes(newKnownAddresses)) {
          networkMap.value!.draw()
        }
        askForAddressesTimeout = 0
      }, 500)
    }
  }

  NetworkClient.Instance.on(NetworkClient.Events.PEER_ADDRESSES_ADDED, updateKnownAddresses)
  NetworkClient.Instance.on(NetworkClient.Events.PEERS_CHANGED, updateKnownAddresses)
  if (NetworkClient.Instance.consensusState === 'established') {
    updateKnownAddresses()
  }
}

async function disconnect() {
  if (!client.value)
    return

  networkStatus.value = NetworkStatus.CONNECTING
  networkHeight.value = 0
  networkPeerCount.value = 0

  disconnected.value = true
  await client.value.disconnect()
}

function setTooltip({ x: newX, y: newY, position }: SelfHexagon) {
  if (!userNode$.value || !trigger$.value)
    return

  x.value = newX
  y.value = newY

  tooltipPosition.value = position.y > 25 ? 'top' : 'bottom'

  userNode$.value.classList.remove('invisible')
  popperInstance = createPopper(trigger$.value, userNode$.value, {
    placement: tooltipPosition.value,
    modifiers: [
      {
        name: 'offset',
        options: { offset: [0, 8] },
      },
      {
        name: 'preventOverflow',
        options: { mainAxis: false },
      },
      { name: 'flip', enabled: false },
    ],
  })
}

const isConnected = computed(() => networkStatus.value === NetworkStatus.ESTABLISHED)
const showBlockHeight = computed(() => isConnected.value && networkHeight.value > 0)
const showPeerCount = computed(() => isConnected.value && networkPeerCount.value > 0)
</script>

<template>
  <div id="network" class="widest relative">
    <div class="w-[calc(100vw-100vw-100%)] overflow-y-auto pb-[112px] lg:pb-[182px] sm:pb-[174px]">
      <div
        ref="container$"
        class="relative mx-auto h-[95vh] w-[calc(95vh*(1082/502))] overflow-hidden lg:max-w-[100vw] sm:w-full"
      >
        <canvas
          ref="network$"
          class="absolute-center pointer-events-none"
          :style="`width: ${width}px; height: ${height}px;`"
        />
        <canvas
          ref="overlay$"
          class="absolute-center pointer-events-none"
          :style="`width: ${width}px; height: ${height}px;`"
        />
        <div class="absolute-center overflow-y-auto" :style="`width: ${width}px; height: ${height}px;`">
          <div
            ref="trigger$"
            class="absolute left-0 inline-block -top-1"
            :style="`padding: ${scale / 2}em; transform: translate(${Math.floor(x * scale)}px, ${Math.floor(
              y * scale,
            )}px);`"
          />

          <div ref="userNode$" class="invisible w-max whitespace-nowrap">
            <div class="flex" :class="tooltipPosition === 'top' ? 'flex-col-reverse' : 'flex-col'">
              <div
                :class="{
                  'text-blue-light': !isConnected,
                  'text-green': isConnected,
                  'rotate-180': tooltipPosition === 'top',
                }"
                class="flex justify-center -mb-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" viewBox="0 0 28 10">
                  <path
                    fill="currentColor"
                    d="M12.63 1.83 8.27 8.25A4 4 0 0 1 4.97 10h17.8a4 4 0 0 1-3.3-1.75L15.1 1.83a1.5 1.5 0 0 0-2.48 0z"
                  />
                </svg>
              </div>

              <div id="tooltip">
                <div
                  class="flex items-center gap-x-14 rounded px-16 py-6 shadow"
                  :class="{
                    'bg-blue-light': !isConnected,
                    'bg-green': isConnected,
                  }"
                >
                  <template v-if="networkStatus === NetworkStatus.CONNECTING">
                    <span class="bold text-white">{{ texts.thisIsYou }}</span>
                    <button
                      v-if="!initialized"
                      class="nq_small-text text-blue-light cursor-pointer rounded bg-white px-12 py-5 font-bold -mr-10"
                      @click="connect"
                    >
                      {{ texts.connect }}
                    </button>
                  </template>
                  <template v-else-if="networkStatus === NetworkStatus.ESTABLISHED">
                    <span class="bold text-white">{{ texts.connected }}</span>
                    <svg
                      class="cursor-pointer"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      @click="disconnect"
                    >
                      <g opacity="0.7">
                        <line
                          x1="1.24805"
                          y1="10.0722"
                          x2="9.95439"
                          y2="1.36581"
                          stroke="white"
                          stroke-width="1.75895"
                          stroke-linecap="round"
                        />
                        <line
                          x1="9.95155"
                          y1="10.0723"
                          x2="1.2452"
                          y2="1.36592"
                          stroke="white"
                          stroke-width="1.75895"
                          stroke-linecap="round"
                        />
                      </g>
                    </svg>
                  </template>
                  <template v-else>
                    <span class="bold text-white">{{ texts.connecting }}</span>
                    <div class="spinner">
                      <div i-nimiq:spinner text="20 blue" />
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="pointer-events-none absolute inset-x-1/2 bottom-16 w-full flex justify-center px-8 lg:bottom-48 sm:bottom-40 -translate-x-1/2"
      :style="`height: ${height * 0.6}px`"
    >
      <div
        class="mask pointer-events-auto sticky bottom-16 max-w-max w-screen flex self-end gap-x-32 overflow-x-auto whitespace-nowrap rounded-6 bg-white/10 p-16 backdrop-blur-xl lg:bottom-48 sm:bottom-40 sm:w-max sm:justify-center sm:gap-x-40 sm:p-32"
        :class="{
          'theme_grey': backgroundColor === 'grey',
          'theme_blue-dark': backgroundColor === 'blue-dark',
        }"
      >
        <div class="stat">
          <h4 class="nq_small-label">
            {{ texts.consensus }}
          </h4>
          <div class="ml-2 flex items-center gap-8" :class="{ 'opacity-40': !isConnected }">
            <!-- TODO: consensusIcon -->
            <ConsensusIcon :consensus="networkStatus" :class="{ 'text-green': isConnected }" class="consensus" />
            <span v-if="isConnected">{{ texts.established }}</span>
            <span v-else-if="networkStatus === NetworkStatus.SYNCING">{{ texts.connecting || 'Connecting' }}</span>
            <span v-else>{{ texts.notConnected }}</span>
          </div>
        </div>
        <div class="stat">
          <h4 class="nq_small-label">
            {{ texts.blockHeight }}
          </h4>
          <span :class="{ 'opacity-40': !showBlockHeight }">{{
            showBlockHeight ? `# ${networkHeight.toLocaleString('fr')}` : texts.notApplicableAcronym
          }}</span>
        </div>
        <div class="stat pr-16 sm:pr-0">
          <h4 class="nq_small-label">
            {{ texts.connectedTo }}
          </h4>
          <span :class="{ 'opacity-40': !showPeerCount }">{{
            showPeerCount ? `${networkPeerCount} Peer${networkPeerCount === 1 ? '' : 's'}` : texts.notApplicableAcronym
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
*::-webkit-scrollbar {
  @apply h-6;
}

/* Handle */
*::-webkit-scrollbar-thumb {
  @apply rounded-6;
  background-color: #4b4b5c;
}

.absolute-center {
  @apply absolute inset-1/2 -translate-x-1/2 -translate-y-1/2;
}

.spinner {
  @apply animate-spin w-min;
}

.stat {
  @apply flex flex-col items-start gap-y-8;
}

.theme_grey {
  @apply bg-blue-dark/10;

  .stat {
    @apply text-blue-dark;

    .consensus ::v-deep svg path {
      @apply stroke-current text-blue-dark/60;
    }
  }

  /* TODO Review this! */
  h4 {
    @apply opacity-40;
  }
}

.theme_blue-dark {
  .stat {
    @apply text-white;

    h4 {
      @apply opacity-40;
    }
  }
}

/* stylelint-disable-next-line no-descending-specificity */
.spinner ::v-deep > svg path:first-child {
  @apply stroke-current text-white;
}

/* stylelint-disable-next-line no-descending-specificity */
.spinner ::v-deep > svg path:last-child {
  @apply text-white opacity-30 stroke-current;
}

.stat span {
  @apply text-20 leading-1 sm:text-24;
}

.stat ::v-deep svg {
  @apply text-20 sm:text-24;
}

@media screen and (max-width: 640px) {
  .mask {
    mask: linear-gradient(
      90deg,
      #c4c4c4 84.58%,
      #c4c4c4 84.69%,
      rgba(196, 196, 196, 0.99763) 85%,
      rgba(196, 196, 196, 0.992) 85.49%,
      rgba(196, 196, 196, 0.981037) 86.15%,
      rgba(196, 196, 196, 0.962963) 86.96%,
      rgba(196, 196, 196, 0.936) 87.89%,
      rgba(196, 196, 196, 0.89837) 88.93%,
      rgba(196, 196, 196, 0.848296) 90.06%,
      rgba(196, 196, 196, 0.784) 91.26%,
      rgba(196, 196, 196, 0.703704) 92.51%,
      rgba(196, 196, 196, 0.60563) 93.79%,
      rgba(196, 196, 196, 0.488) 95.09%,
      rgba(196, 196, 196, 0.349037) 96.39%,
      rgba(196, 196, 196, 0.186963) 97.66%,
      rgba(196, 196, 196, 0) 98.89%
    );
  }
}
</style>
