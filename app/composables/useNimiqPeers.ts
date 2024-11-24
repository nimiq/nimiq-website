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

export function useNimiqPeers() {
  const { client, consensus } = useNimiq()
  const { locate } = useGeoIp()

  const userPeer = useState<Peer>()

  async function setUserPeer() {
    const { lat, lng } = await locate()
    const { x, y } = getHexagonCoords({ lat, lng })
    userPeer.value = { peerId: 'user', lat, lng, x, y }
  }

  const peers = ref<Peer[]>([
  ])
  if (import.meta.client) {
    setTimeout(() => {
      peers.value = [
        // { peerId: 'user', lat: 40, lng: -3, ...getHexagonCoords({ lat: 40, lng: -3 }) },
        // // random point in south america
        // { peerId: '1', lat: -15, lng: -60, ...getHexagonCoords({ lat: -15, lng: -60 }) },
        // // in south africa
        // { peerId: '2', lat: -30, lng: 25, ...getHexagonCoords({ lat: -30, lng: 25 }) },
        // // in australia
        // { peerId: '3', lat: -30, lng: 135, ...getHexagonCoords({ lat: -30, lng: 135 }) },
        // // italy
        // { peerId: '4', lat: 42, lng: 12, ...getHexagonCoords({ lat: 42, lng: 12 }) },
        // // india
        // { peerId: '5', lat: 20, lng: 77, ...getHexagonCoords({ lat: 20, lng: 77 }) },
      ]
    }, 1000)
  }

  whenever(client, () => {
    let i = 0
    client.value!.addPeerChangedListener(async (peerId, reason, peerCount, peerInfo) => {
      // eslint-disable-next-line no-console
      console.log('Peer changed:', { peerId, reason, peerCount, peerInfo, i: i++ })
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
  })

  watch(consensus, async (newState, oldState) => {
    if (newState !== ConsensusState.Idle || oldState !== newState)
      return
    peers.value = []
  })

  return {
    setUserPeer,
    userPeer,
    peers,
  }
}
