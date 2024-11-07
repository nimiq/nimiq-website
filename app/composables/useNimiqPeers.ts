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

  async function setUserPeer() {
    const { lat, lng } = await locate()
    const { x, y } = getHexagonCoords({ lat, lng })
    userPeer.value = { peerId: 'user', lat, lng, x, y }
  }

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

      const { lat, lng } = await locate(locator)
      const { x, y } = getHexagonCoords({ lat, lng })
      const peer = { peerId, x, y, lat, lng }
      peers.value.push(peer)
    })
  }

  return {
    peers,
    processPeersInfo,
    setUserPeer,
    userPeer,
  }
}
