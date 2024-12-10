import type { PlainBlock } from '@nimiq/core/web'
import init, { Client, ClientConfiguration } from '@nimiq/core/web'
import { getHexagonCoords, type LatLng } from '~/utils/consensus-map/drawHexagonsWorldMapProjection'

export interface Peer {
  peerId: string
  lat: number
  lng: number
  x: number
  y: number
}

export interface UseNimiqPeersOptions {
  userLocation?: LatLng
}

export enum ConsensusState {
  Idle = 'idle',
  Connecting = 'connecting', // We do not differentiate between connecting and syncing
  Established = 'established',
}

export const useNimiq = defineStore('nimiq', () => {
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
    const config = new ClientConfiguration()
    config.network(clientNetwork)
    config.logLevel('debug')

    client.value = await Client.create(config.build())

    const removeConsensusListener = client.value!.addConsensusChangedListener((state) => {
      // eslint-disable-next-line no-console
      console.log('Consensus state changed:', state)
      consensus.value = state === 'syncing' ? ConsensusState.Connecting : ConsensusState.Established
    })

    const removeHeadListener = client.value!.addHeadChangedListener(async (hash /* , reason, revertedBlocks, adoptedBlocks */) => {
      const block = await client.value!.getBlock(hash)
      head.value = block
      height.value = block.height
    })

    const removePeerChanged = client.value!.addPeerChangedListener(async (peerId, reason, peerCount, peerInfo) => {
      // eslint-disable-next-line no-console
      console.log('Peer changed:', { peerId, reason, peerCount, peerInfo })
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

  // if (import.meta.client && false) {
  //   setTimeout(() => {
  //     peers.value = [
  //       // { peerId: '22', lat: 40, lng: -3, ...getHexagonCoords({ lat: 40, lng: -3 }) },
  //       // random point in south america
  //       { peerId: '1', lat: -15, lng: -60, ...getHexagonCoords({ lat: -15, lng: -60 }) },
  //       // in south africa
  //       // { peerId: '2', lat: -30, lng: 25, ...getHexagonCoords({ lat: -30, lng: 25 }) },
  //       // // in australia
  //       // { peerId: '3', lat: -30, lng: 135, ...getHexagonCoords({ lat: -30, lng: 135 }) },
  //       // // italy
  //       // { peerId: '4', lat: 42, lng: 12, ...getHexagonCoords({ lat: 42, lng: 12 }) },
  //       // // india
  //       // { peerId: '5', lat: 20, lng: 77, ...getHexagonCoords({ lat: 20, lng: 77 }) },
  //     ]
  //   }, 1000)
  //   setTimeout(() => {
  //     console.log('Pushing new peer')
  //     peers.value.push({ peerId: '6', lat: 30, lng: 25, ...getHexagonCoords({ lat: 30, lng: -25 }) })
  //   }, 2000)
  // }

  return {
    client,
    launchNetwork,
    consensus,
    height,
    head,
    disconnect,

    setUserPeer,
    userPeer,
    peers,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNimiq, import.meta.hot))
}
