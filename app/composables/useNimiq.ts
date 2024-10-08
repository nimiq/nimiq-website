import type { Client, ConsensusState, PlainBlock } from '@nimiq/core'

export interface Peer {
  peerId: string
  multiAddress: string
  nodeType: string
  connected: boolean
}

export function useNimiq() {
  const client = ref<Client>()
  const isLaunched = ref(false)
  const consensus = ref<ConsensusState>()
  const head = ref<PlainBlock>()
  const height = ref(0)
  const numberOfPeers = ref(0)
  const peerAddress = ref<Peer[]>([])

  async function launchNetwork() {
    if (isLaunched.value || import.meta.server)
      return
    isLaunched.value = true
    consensus.value = 'connecting'
    if (import.meta.client) {
      const { default: init, Client, ClientConfiguration } = await import('@nimiq/core/web')

      await init()
      const config = new ClientConfiguration()
      config.network('testalbatross')
      client.value = await Client.create(config.build())
    }
  }

  async function addListeners() {
    await until(client).not.toBeNull()

    client.value!.addConsensusChangedListener((state) => {
      // eslint-disable-next-line no-console
      console.log('Consensus state changed:', state)
      consensus.value = state
    })

    client.value!.addHeadChangedListener(async (hash /* , reason, revertedBlocks, adoptedBlocks */) => {
      const block = await client.value!.getBlock(hash)
      head.value = block
      height.value = block.height
    })

    client.value!.addPeerChangedListener((peerId, reason, numPeers, peerInfo) => {
      // eslint-disable-next-line no-console
      console.log('Peer changed:', peerId, reason, numPeers, peerInfo)
      if (reason === 'joined' && peerInfo) {
        peerAddress.value.push({
          peerId,
          multiAddress: peerInfo.address,
          nodeType: peerInfo.type,
          connected: true,
        })
      }
      else if (reason === 'left') {
        // Remove peer from list
        peerAddress.value = peerAddress.value.filter(peer => peer.peerId !== peerId)
      }
      numberOfPeers.value = numPeers
    })
  }

  return {
    client,
    launchNetwork,
    addListeners,
    consensus,
    peerAddress,
    numberOfPeers,
    height,
    head,
  }
}
