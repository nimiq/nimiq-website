import { BLOCKS_WINDOW_SIZE } from '~~/server/utils/albatross.types'
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

  const blocks = ref<LiveviewBlock[]>([])
  watch(data, (d) => {
    if (!d)
      return

    /**
     * The websocket sends an array of blocks when the connection is established the first time.
     * After that, it sends a single block at a time.
     */
    const isArray = d.startsWith('[') && d.endsWith(']')
    if (isArray) {
      blocks.value = JSON.parse(d) as LiveviewBlock[]
    }
    else if (blocks.value.length >= BLOCKS_WINDOW_SIZE) {
      const newBlock = JSON.parse(d) as LiveviewBlock
      // we keep 60 because is the number of blocks in a batch and we want to display block colors in the bacth
      blocks.value = [...blocks.value, newBlock].slice(-60)
    }
  })
  const microblocks = computed(() => blocks.value.filter(block => block.kind === LiveviewBlockType.MicroBlock) as LiveviewMicroBlock[])
  const latestBlock = computed(() => microblocks.value.at(-1))
  const batchNumber = computed(() => latestBlock.value?.batch || -1)
  const blockNumber = computed(() => latestBlock.value?.number || -1)

  return {
    status,
    blocks,
    microblocks,
    blockNumber,
    batchNumber,
    matchedTxs: computed(() => blocks.value.filter(block => block.kind === LiveviewBlockType.MicroBlock).map(block => block.matchedTxs).flat()),
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLiveviewBlocks, import.meta.hot))
}
