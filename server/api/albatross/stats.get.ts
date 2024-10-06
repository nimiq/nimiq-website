/**
 * This WebSocket handler provides real-time statistics updates for the Albatross blockchain.
 * It performs the following tasks:
 * 1. Initialise a connection to the Nimiq RPC client.
 * 2. Subscribes to new blocks and maintains a rolling window of recent blocks.
 * 3. Calculates key statistics: transactions per second and average block time.
 * 4. Sends initial statistics to the client on connection.
 * 5. Periodically updates and sends new statistics based on incoming blocks.
 * 6. Clears subscriptions on connection termination or error.
 */

import type { Block, MicroBlock } from 'nimiq-rpc-client-ts'
import { NimiqRPCClient } from 'nimiq-rpc-client-ts'

const STATS_WINDOW_SIZE = 3 * 128
const STATS_REFRESH_EVERY = 3

const blocks: Block[] = []
let closeFn: (() => void) | undefined

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
  return timeSpan > 0 ? roundToSignificant(timeSpan / 1000 / (microblocks.length - 1), 1) : 0
}

export default defineWebSocketHandler({
  async open(peer) {
    const nodeRpcUrl = useRuntimeConfig().albatross.nodeRpcUrl
    const client = new NimiqRPCClient(nodeRpcUrl)

    const txPerSecond = calculateTxPerSecond(blocks)
    const blockTime = calculateBlockTime(blocks)
    const stats: LiveviewStats = { txPerSecond, blockTime }
    peer.send(JSON.stringify(stats))

    const { next: nextBlock, close } = await client.blockchainStreams.subscribeForBlocks()
    closeFn = close

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
        peer.send(JSON.stringify(stats))
      }
    })
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
