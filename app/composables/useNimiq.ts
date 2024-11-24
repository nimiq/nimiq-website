import type { PlainBlock } from '@nimiq/core/web'
import init, { Client, ClientConfiguration } from '@nimiq/core/web'

export enum ConsensusState {
  Idle = 'idle',
  Connecting = 'connecting', // We do not differentiate between connecting and syncing
  Established = 'established',
}

export function useNimiq() {
  const { clientNetwork } = useRuntimeConfig().public
  const consensus = useState<ConsensusState>('nimiq-client', () => ConsensusState.Idle)
  const head = ref<PlainBlock>()
  const height = ref(0)
  const client = useState<Client>()

  async function launchNetwork() {
    consensus.value = ConsensusState.Connecting
    await init()
    const config = new ClientConfiguration()
    config.network(clientNetwork)
    config.logLevel('debug')

    client.value = await Client.create(config.build())

    client.value!.addConsensusChangedListener((state) => {
      // eslint-disable-next-line no-console
      console.log('Consensus state changed:', state)
      consensus.value = state === 'syncing' ? ConsensusState.Connecting : ConsensusState.Established
    })

    client.value!.addHeadChangedListener(async (hash /* , reason, revertedBlocks, adoptedBlocks */) => {
      const block = await client.value!.getBlock(hash)
      head.value = block
      height.value = block.height
    })
  }

  function disconnect() {
    client.value.free()
    consensus.value = ConsensusState.Idle
  }

  return {
    client,
    launchNetwork,
    consensus,
    height,
    head,
    disconnect,
  }
}
