import type { Block, MicroBlock } from 'nimiq-rpc-client-ts'
import { NimiqRPCClient } from 'nimiq-rpc-client-ts'

const STATS_WINDOW_SIZE = 3 * 128
const STATS_REFRESH_EVERY = 3
// const TXS_PER_BLOCK = 500 // Adjust this value as needed

export default defineEventHandler(async (event) => {
  const blocks: Block[] = []
  const { nodeRpcUrl } = useRuntimeConfig().albatross
  const eventStream = createEventStream(event)

  const client = new NimiqRPCClient(nodeRpcUrl)

  async function sendStats() {
    const txPerSecond = calculateTxPerSecond(blocks)
    const blockTime = calculateBlockTime(blocks)
    const stats: LiveviewStats = { txPerSecond, blockTime }
    eventStream.push(`${JSON.stringify(stats)}\n`)
  }

  sendStats()

  // Subscribe to new blocks
  const { next: nextBlock } = await client.blockchainStreams.subscribeForBlocks()
  nextBlock(async ({ error, data: block }) => {
    if (error?.code || !block) {
      console.error(`Error subscribing to head block: ${JSON.stringify(error)}`)
      return
    }

    blocks.push(block)
    if (blocks.length > STATS_WINDOW_SIZE) {
      blocks.shift()
    }

    if (block.number % STATS_REFRESH_EVERY === 0) {
      sendStats()
    }
  })

  return eventStream.send()
})

function calculateTxPerSecond(blocks: Block[]): number {
  if (blocks.length < 2)
    return 0

  const totalTransactions = blocks.reduce((sum, block) => sum + block.transactions.length, 0)
  const timeSpan = blocks[blocks.length - 1].timestamp - blocks[0].timestamp

  return timeSpan > 0 ? roundToSignificant(totalTransactions / (timeSpan / 1000)) : 0
}

function calculateBlockTime(blocks: Block[]): number {
  if (blocks.length < 2)
    return 0

  const microblocks = blocks.filter((block): block is MicroBlock => block.type === 'micro')
  const timeSpan = microblocks[microblocks.length - 1].timestamp - microblocks[0].timestamp
  return timeSpan > 0 ? roundToSignificant(timeSpan / 1000 / (microblocks.length - 1), 0) : 0
}

function roundToSignificant(number: number, places = 1) {
  const roundingFactor = number < 0.01
    ? 10 ** (2 + places)
    : number < 0.1
      ? 10 ** (1 + places)
      : number < 10
        ? 10 ** (places)
        : 1

  return Math.round(number * roundingFactor) / roundingFactor
}
