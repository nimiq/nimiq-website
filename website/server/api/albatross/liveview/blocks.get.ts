import type { Block, MacroBlock, MicroBlock } from 'nimiq-rpc-client-ts'
import { NimiqRPCClient, RetrieveType } from 'nimiq-rpc-client-ts'

const INITIAL_BLOCK_FETCH = 60
const CACHE_SIZE = 100
const blockCache = new Map<number, Block>()

export default defineEventHandler(async (event) => {
  blockCache.clear()
  const eventStream = createEventStream(event)
  handleStream(eventStream)
  return eventStream.send()
})

function pruneCache() {
  if (blockCache.size > CACHE_SIZE) {
    const sortedKeys = [...blockCache.keys()].sort((a, b) => b - a)
    for (let i = CACHE_SIZE; i < sortedKeys.length; i++) {
      blockCache.delete(sortedKeys[i])
    }
  }
}

async function handleStream(eventStream: ReturnType<typeof createEventStream>) {
  const rpcUrl = useRuntimeConfig().albatross.nodeRpcUrl
  const client = new NimiqRPCClient(rpcUrl)

  let lastBlockTimestamp: number | undefined

  function sendPayload(block: LiveviewBlock) {
    eventStream.push(`${JSON.stringify(block)}\n`)
  }

  async function fetchAndCacheBlocks(startBlock: number, count: number) {
    const promises = []
    for (let i = 0; i < count; i++) {
      const blockNumber = startBlock - i
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
    const results = await Promise.all(promises)
    return results.filter(result => result.block !== null)
  }

  async function processBlock(block: Block) {
    if (block.type === 'micro') {
      await sendMicroblock(block as MicroBlock)
    }
    else if (block.type === 'macro') {
      await sendMacroblock(block as MacroBlock)
    }
    lastBlockTimestamp = block.timestamp
  }

  // Fetch initial blocks
  const { data: head } = await client.blockchain.getBlockNumber()
  if (!head)
    throw createError({ status: 500, message: 'Failed to get block number' })

  const blocks = await fetchAndCacheBlocks(head, INITIAL_BLOCK_FETCH)
  for (const { block } of blocks) {
    if (block)
      await processBlock(block)
  }

  // Subscribe to new blocks
  const { next: nextMicroblock } = await client.blockchainStreams.subscribeForMicroBlocks({ retrieve: RetrieveType.Full })
  const { next: nextMacroblock } = await client.blockchainStreams.subscribeForMacroBlocks({ retrieve: RetrieveType.Full })

  nextMicroblock(async ({ data: block }) => {
    if (block) {
      await processBlock(block)
      blockCache.set(block.number, block)
      pruneCache()
    }
  })

  nextMacroblock(async ({ data: block }) => {
    if (!block)
      return
    await processBlock(block)
    blockCache.set(block.number, block)
    pruneCache()
  })

  async function sendMicroblock(block: MicroBlock) {
    const { producer, justification, transactions, number, batch, timestamp } = block
    const isSkip = 'skip' in justification

    const matchedTxs = transactions.filter(tx => tx.recipientData.length === 8).map(tx => Number.parseInt(tx.recipientData, 16))
    const unmatchedTxs = transactions.filter(tx => tx.recipientData.length !== 8).map(tx => tx.hash.substring(0, 8))
    const kind = LiveviewBlockType.MicroBlock
    const delay = lastBlockTimestamp ? timestamp - lastBlockTimestamp : 0
    sendPayload({ producer, isSkip, matchedTxs, unmatchedTxs, delay, kind, number, batch, timestamp })
  }

  async function sendMacroblock(block: MacroBlock) {
    const { transactions, justification, batch, number } = block
    const unmatchedTxs = transactions.map(tx => tx.hash.substring(0, 8))
    const votes = justification.sig.signers.length
    const kind = LiveviewBlockType.MacroBlock
    sendPayload({ unmatchedTxs, votes, batch, kind, number })
  }
}
