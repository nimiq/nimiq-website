import type { MacroBlock, MicroBlock } from 'nimiq-rpc-client-ts/types'
import { initRpcClient } from 'nimiq-rpc-client-ts/client'
import { getBlockByNumber, getBlockNumber } from 'nimiq-rpc-client-ts/http'
import { BlockType } from 'nimiq-rpc-client-ts/types'
import { subscribeForHeadBlock } from 'nimiq-rpc-client-ts/ws'

export default defineLazyEventHandler(() => {
  // Lazy initialization prevents module-loading issues on Cloudflare Workers
  let lastBlockTimestamp: number | undefined
  let shouldEnqueue = true
  const blockQueue = new Map<number, any>()
  let closeFn: (() => void) | undefined

  return defineWebSocketHandler({
    async open(peer) {
      // Reset state for new connections
      lastBlockTimestamp = undefined
      shouldEnqueue = true
      blockQueue.clear()
      if (closeFn)
        closeFn()

      const nodeRpcUrl = useRuntimeConfig().albatross.nodeRpcUrl
      initRpcClient({ url: nodeRpcUrl })
      const eventEmitter = await subscribeForHeadBlock(true)
      eventEmitter.addEventListener('data', async (event: CustomEvent) => {
        const { data: block } = event.detail
        if (block) {
          const processedBlock = await (block.type === BlockType.Micro ? getMicroblock(block) : getMacroblock(block as MacroBlock))
          if (shouldEnqueue)
            blockQueue.set(processedBlock.number, processedBlock)
          else
            peer.send(JSON.stringify(processedBlock))
        }
      })
      eventEmitter.addEventListener('close', () => close())
      const [isOk, error, head] = await getBlockNumber()
      if (!isOk)
        throw createError({ status: 500, message: `Failed to get block number: ${error}` })
      const promises = []
      for (let i = 0; i < BLOCKS_WINDOW_SIZE; i++) {
        const blockNumber = head - i
        promises.unshift(
          getBlockByNumber({ blockNumber, includeBody: true }).then(async ([isOk, error, block]) => {
            if (!isOk)
              throw createError({ status: 500, message: `Failed to get block ${blockNumber}: ${error}` })
            return await (block.type === BlockType.Macro ? getMacroblock(block as MacroBlock) : getMicroblock(block))
          }),
        )
      }

      const blocks = await Promise.all(promises)
      const blockNumbers = blocks.map(block => block.number)
      peer.send(JSON.stringify(blocks))

      // Send queued blocks that arrived during initial fetch
      const sortedBlockNumbers = Array.from(blockQueue.keys()).filter(b => !blockNumbers.includes(b)).sort((a, b) => a - b)
      for (const blockNumber of sortedBlockNumbers) {
        peer.send(JSON.stringify(blockQueue.get(blockNumber)))
      }
      shouldEnqueue = false
      blockQueue.clear()
    },

    close(_peer, _event) {
      if (closeFn)
        closeFn()
    },

    error(_peer, _event) {
      console.error('Albatross Blocks WebSocket error', _event)
      if (closeFn)
        closeFn()
    },
  })

  // Helper functions that need access to the lazy-initialized variables
  async function getMicroblock(block: MicroBlock): Promise<LiveviewMicroBlock> {
    const { producer, justification, transactions, number, batch, timestamp } = block
    const isSkip = 'skip' in justification

    const kind = LiveviewBlockType.MicroBlock
    const duration = lastBlockTimestamp ? timestamp - lastBlockTimestamp : 0
    lastBlockTimestamp = timestamp
    return { producer, isSkip, transactions, duration, kind, number, batch, timestamp }
  }

  async function getMacroblock(block: MacroBlock): Promise<LiveviewMacroBlock> {
    const { transactions, justification, batch, number, timestamp } = block
    const votes = justification?.sig.signers.length || 0
    const kind = LiveviewBlockType.MacroBlock
    lastBlockTimestamp = timestamp
    return { transactions, votes, batch, kind, number }
  }
})
