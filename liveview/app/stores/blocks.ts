import { type BlockLiveview, BlockLiveviewType, type MacroBlockLiveview, type MicroBlockLiveview } from '~~/server/types'

export const useBlocks = defineStore('blocks', () => {
  const { status, data } = useEventSource('/api/stream-blocks', [], {
    autoReconnect: {
      retries: 3,
      delay: 1000,
      onFailed() {
        // eslint-disable-next-line no-alert
        alert('Failed to connect Stats EventSource after 3 retries')
      },
    },
  })

  const latestBlock = ref<MicroBlockLiveview | MacroBlockLiveview>()
  const blocks = ref<BlockLiveview[]>([])
  function pushBlock(block: BlockLiveview) {
    if (block.kind === BlockLiveviewType.MacroBlock || block.kind === BlockLiveviewType.MicroBlock)
      latestBlock.value = block
    blocks.value = [...blocks.value, block].slice(-30)
  }
  watch(data, (data) => {
    if (!data)
      return
    pushBlock(JSON.parse(data) as BlockLiveview)
  })

  return {
    status,
    blocks,
    blockNumber: computed(() => latestBlock.value?.number || -1),
    batchNumber: computed(() => latestBlock.value?.batch || -1),
    matchedTxs: computed(() => blocks.value.filter(block => block.kind === BlockLiveviewType.MicroBlock).map(block => block.matchedTxs).flat()),
  }
})
