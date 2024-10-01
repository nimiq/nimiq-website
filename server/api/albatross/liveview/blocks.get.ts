import type { Block, MacroBlock, MicroBlock } from 'nimiq-rpc-client-ts'
import { BlockType, NimiqRPCClient, RetrieveType } from 'nimiq-rpc-client-ts'

const INITIAL_BLOCK_FETCH = 60
const CACHE_SIZE = 100
const blockCache = new Map<number, Block>()
let lastBlockTimestamp: number | undefined
let client: NimiqRPCClient

export default defineWebSocketHandler({
  async open(peer) {
    const nodeRpcUrl = useRuntimeConfig().albatross.nodeRpcUrl
    client = new NimiqRPCClient(nodeRpcUrl)
    // Fetch initial blocks
    const { data: head } = await client.blockchain.getBlockNumber()
    if (!head)
      throw createError({ status: 500, message: 'Failed to get block number' })

    const promises = []
    for (let i = 0; i < INITIAL_BLOCK_FETCH; i++) {
      const blockNumber = head - i
      if (!blockCache.has(blockNumber)) {
        promises.push(
          client.blockchain.getBlockByNumber(blockNumber, { includeTransactions: true }).then(({ data: block, error }) => {
            if (block && !error) {
              blockCache.set(blockNumber, block)
              return { blockNumber, block }
            }
            return { blockNumber, block: null }
          }),
        )
      }
    }
    const blocks = await Promise.all(promises)

    for (const { block } of blocks) {
      if (block) {
        peer.send(await (block.type === BlockType.Macro ? getMacroblock(block as MacroBlock) : getMicroblock(block)))
        lastBlockTimestamp = block.timestamp
      }
    }

    // Subscribe to new blocks
    const { next: nextMicroblock } = await client.blockchainStreams.subscribeForMicroBlocks({ retrieve: RetrieveType.Full })
    const { next: nextMacroblock } = await client.blockchainStreams.subscribeForMacroBlocks({ retrieve: RetrieveType.Full })

    nextMicroblock(async ({ data: block }) => {
      if (block) {
        peer.send(await getMicroblock(block))
        blockCache.set(block.number, block)
        pruneCache()
      }
    })

    nextMacroblock(async ({ data: block }) => {
      if (!block)
        return
      peer.send(await getMacroblock(block))
      blockCache.set(block.number, block)
      pruneCache()
    })
  },

  // async message(peer) {
  // },

  // close(peer, event) {
  // console.log('[ws] close', peer, event)
  // },

  // error(peer, error) {
  // console.log('[ws] error', peer, error)
  // },
})

function pruneCache() {
  if (blockCache.size > CACHE_SIZE) {
    const sortedKeys = [...blockCache.keys()].sort((a, b) => b - a)
    for (let i = CACHE_SIZE; i < sortedKeys.length; i++) {
      blockCache.delete(sortedKeys[i])
    }
  }
}

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
