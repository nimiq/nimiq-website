import type { Block, MicroBlock } from 'nimiq-rpc-client-ts'
import { NimiqRPCClient } from 'nimiq-rpc-client-ts'

const STATS_WINDOW_SIZE = 3 * 128
const STATS_REFRESH_EVERY = 3

const blocks: Block[] = []
let client: NimiqRPCClient

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

export default defineWebSocketHandler({
  async open(peer) {
    // eslint-disable-next-line no-console
    console.log('[ws] open', peer)
    const nodeRpcUrl = useRuntimeConfig().albatross.nodeRpcUrl
    client = new NimiqRPCClient(nodeRpcUrl)

    const txPerSecond = calculateTxPerSecond(blocks)
    const blockTime = calculateBlockTime(blocks)
    const stats: LiveviewStats = { txPerSecond, blockTime }
    peer.send(stats)

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
        const txPerSecond = calculateTxPerSecond(blocks)
        const blockTime = calculateBlockTime(blocks)
        const stats: LiveviewStats = { txPerSecond, blockTime }
        peer.send(stats)
      }
    })
  },

  // async message(peer) {
  // },

  close(peer, event) {
    // eslint-disable-next-line no-console
    console.log('[ws] close', peer, event)
  },

  error(peer, error) {
    // eslint-disable-next-line no-console
    console.log('[ws] error', peer, error)
  },
})

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
