import { LiveviewBlockType } from '~~/server/utils/liveview.types'

export const useLiveviewBlocks = defineStore('liveview-blocks', () => {
  const { status, data } = useEventSource('/api/albatross/liveview/blocks', [], {
    autoReconnect: {
      retries: 3,
      delay: 1000,
      onFailed() {
        console.error('Failed to connect Blocks EventSource after 3 retries')
      },
    },
  })

  const latestBlock = ref<LiveviewMicroBlock | LiveviewMacroBlock>()
  const blocks = ref<LiveviewBlock[]>([])
  function pushBlock(block: LiveviewBlock) {
    if (block.kind === LiveviewBlockType.MacroBlock || block.kind === LiveviewBlockType.MicroBlock)
      latestBlock.value = block
    blocks.value = [...blocks.value, block].slice(-30)
  }
  watch(data, (data) => {
    if (!data)
      return
    pushBlock(JSON.parse(data) as LiveviewBlock)
  })

  return {
    status,
    blocks,
    blockNumber: computed(() => latestBlock.value?.number || -1),
    batchNumber: computed(() => latestBlock.value?.batch || -1),
    matchedTxs: computed(() => blocks.value.filter(block => block.kind === LiveviewBlockType.MicroBlock).map(block => block.matchedTxs).flat()),
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLiveviewBlocks, import.meta.hot))
}
