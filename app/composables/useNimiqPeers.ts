import type { LatLng } from './useHexagonsWorldMapProjection'

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
  const { client } = useNimiq()
  const { locate } = useGeoIp()

  const userPeer = ref<Peer>()

  onMounted(async () => {
    const { lat, lng } = await locate()
    userPeer.value = getPeer('user', { lat, lng })
  })

  const peers = ref<Peer[]>([])

  function processPeersInfo() {
    client.value!.addPeerChangedListener(async (peerId, reason, peerCount, peerInfo) => {
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

      peers.value.push(getPeer(peerId, await locate(locator)))
    })
  }

  function getPeer(peerId: string, { lat, lng }: LatLng) {
    const { x, y } = getHexagonCoords({ lat, lng })
    return { peerId, lat, lng, x, y }
  }

  return {
    peers,
    processPeersInfo,
    userPeer,
  }
}
