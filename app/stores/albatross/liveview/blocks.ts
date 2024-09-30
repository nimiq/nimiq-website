import { LiveviewBlockType } from '~~/server/utils/liveview.types'

export const useLiveviewBlocks = defineStore('liveview-blocks', () => {
  const url = `${useRuntimeConfig().public.apiDomain}/api/albatross/liveview/blocks`
  const { status, data } = useWebSocket(url, {
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
    blocks.value = [...blocks.value, block].slice(-60)
  }
  watch(data, (data) => {
    if (!data)
      return
    pushBlock(JSON.parse(data) as LiveviewBlock)
  })

  return {
    status,
    blocks,
    microblocks: computed(() => blocks.value.filter(block => block.kind === LiveviewBlockType.MicroBlock) as LiveviewMicroBlock[]),
    blockNumber: computed(() => latestBlock.value?.number || -1),
    batchNumber: computed(() => latestBlock.value?.batch || -1),
    matchedTxs: computed(() => blocks.value.filter(block => block.kind === LiveviewBlockType.MicroBlock).map(block => block.matchedTxs).flat()),
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLiveviewBlocks, import.meta.hot))
}
