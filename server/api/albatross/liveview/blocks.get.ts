import type { MacroBlock, MicroBlock } from 'nimiq-rpc-client-ts'
import { BlockType, NimiqRPCClient } from 'nimiq-rpc-client-ts'

/**
 * This WebSocket handler provides real-time block updates for the Albatross Liveview blockchain.
 * It performs the following tasks:
 * 1. Initialise a connection to the Nimiq RPC client.
 * 2. Subscribes to new micro and macro blocks and keeps them in a queue.
 * 3. Fetches the initial set of blocks (BLOCKS_WINDOW_SIZE) to populate the view and sends them to the client as an array.
 * 4. Sends the elements of the queue 1 by 1.
 * 5. Processes incoming blocks and sends them to the client.
 * 6. Clears subscriptions on connection close or error.
 */

let lastBlockTimestamp: number | undefined
let shouldEnqueue = true
const blockQueue = new Map<number, any>()
let closeFn: (() => void) | undefined

export default defineWebSocketHandler({
  async open(peer) {
    // Resets the state. This is useful for dev
    lastBlockTimestamp = undefined
    shouldEnqueue = true
    blockQueue.clear()
    if (closeFn)
      closeFn()

    const nodeRpcUrl = useRuntimeConfig().albatross.nodeRpcUrl
    const client = new NimiqRPCClient(nodeRpcUrl)

    // Subscribe to new blocks
    const { next: nextBlock, close } = await client.blockchainStreams.subscribeForBlocks()
    closeFn = close

    // Handler for incoming blocks
    nextBlock(async ({ data: block }) => {
      if (block) {
        const processedBlock = await (block.type === BlockType.Micro ? getMicroblock(block) : getMacroblock(block as MacroBlock))
        if (shouldEnqueue)
          blockQueue.set(processedBlock.number, processedBlock)
        else
          peer.send(JSON.stringify(processedBlock))
      }
    })

    // Fetch initial blocks
    const { data: head } = await client.blockchain.getBlockNumber()
    if (!head)
      throw createError({ status: 500, message: 'Failed to get block number' })
    const promises = []
    for (let i = 0; i < BLOCKS_WINDOW_SIZE; i++) {
      const blockNumber = head - i
      promises.unshift(
        client.blockchain.getBlockByNumber(blockNumber, { includeTransactions: true }).then(async ({ data: block, error }) => {
          if (!block || error)
            throw createError({ status: 500, message: `Failed to get block ${blockNumber}` })
          return await (block.type === BlockType.Macro ? getMacroblock(block as MacroBlock) : getMicroblock(block))
        }),
      )
    }

    const blocks = await Promise.all(promises)
    const blockNumbers = blocks.map(block => block.number)
    peer.send(JSON.stringify(blocks))
    const sortedBlockNumbers = Array.from(blockQueue.keys()).filter(b => !blockNumbers.includes(b)).sort((a, b) => a - b)
    for (const blockNumber of sortedBlockNumbers) {
      peer.send(JSON.stringify(blockQueue.get(blockNumber)))
    }
    shouldEnqueue = false
    blockQueue.clear()
  },

  // async message(peer) {
  // },

  close(_peer, _event) {
    if (closeFn)
      closeFn()
  },

  error(_peer, _event) {
    if (closeFn)
      closeFn()
  },
})

async function getMicroblock(block: MicroBlock): Promise<LiveviewMicroBlock> {
  const { producer, justification, transactions, number, batch, timestamp } = block
  const isSkip = 'skip' in justification

  const matchedTxs = transactions.filter(tx => tx.recipientData.length === 8).map(tx => Number.parseInt(tx.recipientData, 16))
  const unmatchedTxs = transactions.filter(tx => tx.recipientData.length !== 8).map(tx => tx.hash.substring(0, 8))
  const kind = LiveviewBlockType.MicroBlock
  const duration = lastBlockTimestamp ? timestamp - lastBlockTimestamp : 0
  lastBlockTimestamp = timestamp
  return { producer, isSkip, matchedTxs, unmatchedTxs, duration, kind, number, batch, timestamp }
}

async function getMacroblock(block: MacroBlock): Promise<LiveviewMacroBlock> {
  const { transactions, justification, batch, number, timestamp } = block
  const unmatchedTxs = transactions.map(tx => tx.hash.substring(0, 8))
  const votes = justification.sig.signers.length
  const kind = LiveviewBlockType.MacroBlock
  lastBlockTimestamp = timestamp
  return { unmatchedTxs, votes, batch, kind, number }
}
