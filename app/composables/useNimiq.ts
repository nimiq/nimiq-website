import type { ConsensusState as _ConsensusState, PlainBlock } from '@nimiq/core/web'
import init, { Client, ClientConfiguration } from '@nimiq/core/web'

export type ConsensusState = _ConsensusState | 'idle'

export function useNimiq() {
  const { clientNetwork } = useRuntimeConfig().public
  const consensus = useState<ConsensusState>('nimiq-client', () => 'idle')
  const head = ref<PlainBlock>()
  const height = ref(0)
  const client = ref<Client>()

  async function launchNetwork() {
    consensus.value = 'connecting'
    await init()
    const config = new ClientConfiguration()
    config.network(clientNetwork)
    client.value = await Client.create(config.build())

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
  }

  return {
    client,
    launchNetwork,
    consensus,
    height,
    head,
  }
}
