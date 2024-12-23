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
  function pushBlock(newBlock: LiveviewBlock) {
    // if new block is placeholder and last block is placeholder we don't add it
    if (newBlock.kind === LiveviewBlockType.PlaceholderBlock && blocks.value.at(-1)?.kind === LiveviewBlockType.PlaceholderBlock)
      return
    // we keep 180 because is the number of blocks in 3 batches and we want to display block colors in the bacth
    blocks.value = [...blocks.value, newBlock].slice(-180)
  }

  const visibility = useDocumentVisibility()
  const hasMissingBlocks = ref(false)
  watch(visibility, (v) => {
    if (v === 'visible' && hasMissingBlocks.value)
      pushBlock({ kind: LiveviewBlockType.PlaceholderBlock })
    else
      hasMissingBlocks.value = false
  })

  watch(data, (d) => {
    if (!d)
      return

    if (visibility.value === 'hidden') {
      hasMissingBlocks.value = true
      return
    }

    /**
     * The websocket sends an array of blocks when the connection is established the first time.
     * After that, it sends a single block at a time.
     */
    const isArray = d.startsWith('[') && d.endsWith(']')
    if (isArray)
      blocks.value = JSON.parse(d) as LiveviewBlock[]
    else if (blocks.value.length >= BLOCKS_WINDOW_SIZE)
      pushBlock(JSON.parse(d) as LiveviewBlock)
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
