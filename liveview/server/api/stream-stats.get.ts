import type { Block, MicroBlock, PartialBlock, PolicyConstants } from 'nimiq-rpc-client-ts'
import { NimiqRPCClient } from 'nimiq-rpc-client-ts'
import type { StatsLiveview } from '../types'

const STATS_WINDOW_SIZE = 3 * 128
const STATS_REFRESH_EVERY = 3
const TXS_PER_BLOCK = 500 // Adjust this value as needed

const matchedTxsCount = (block: Block) => block.transactions.filter(tx => tx.to.length === 8).length
const unmatchedTxsCount = (block: Block) => block.transactions.filter(tx => tx.to.length !== 8).length

export default defineEventHandler(async (event) => {
  const blocks: Block[] = []
  const rpcUrl = useRuntimeConfig().rpcUrl
  const eventStream = createEventStream(event)

  const client = new NimiqRPCClient(rpcUrl)

  // Fetch the latest block number and policy
  const { data: head, error: headError } = await client.blockchain.getBlockNumber()
  const { data: policy, error: policyError } = await client.policy.getPolicyConstants()
  if (!head || headError || !policy || policyError)
    throw createError({ statusCode: 500, message: 'Failed to fetch head block' })

  function getThroughput() {
    if (blocks.length < 3)
      return 0
    // Blocks in the array might be placeholders, so we split the array at placeholders into segments
    // of length >= 3 and compute throughput individually per segment. The overall throughput is calculated
    // as the segment-length-weighted average of the individual throughput values.
    const segments: MicroBlock[][] = []
    for (const block of blocks.reverse()) {
      if (block.type === 'micro') {
        segments.at(-1)?.push(block)
        continue
      }
      segments.push([])
      if (segments.length >= 3)
        break
    }

    const weightedTxps = segments.reduce((sum, segment) => {
      const txs = segment.reduce((txs, block) => txs + matchedTxsCount(block) + unmatchedTxsCount(block), 0)
      const [first, last] = [segment.at(0), segment.at(-1)]
      if (!first || !last)
        return sum
      const timespan = (first.timestamp - last.timestamp) / 1000
      return sum + (segment.length * (txs / timespan))
    }, 0)
    const numBlocks = segments.reduce((sum, segment) => sum + segment.length, 0)
    return Math.round(weightedTxps / numBlocks)
  }

  async function getLatestBlock() {
    if (blocks.length === 0) {
      const { data: block } = await client.blockchain.getBlockByNumber(head!)
      return block!
    }
    const latestBlock = blocks.at(-1)
    return latestBlock
  }

  async function getFirstBlock(latestBlock: PartialBlock) {
    const blockNumber = Math.max(1, latestBlock.number - STATS_WINDOW_SIZE)
    const maybeBlock = blocks.find(block => block.number === blockNumber)
    if (maybeBlock)
      return maybeBlock
    const { data: block, error } = await client.blockchain.getBlockByNumber(blockNumber)
    if (!block || error) {
      console.error(`Error fetching block ${blockNumber}: ${JSON.stringify(error)}`)
      return blocks[0]
    }
    return block
  }

  async function sendStats() {
    const latestBlock = await getLatestBlock()
    if (!latestBlock)
      return
    const firstBlock = await getFirstBlock(latestBlock)
    if (!firstBlock)
      return
    const fromBlock = firstBlock.number
    const toBlock = latestBlock.number
    const numberBlocks = toBlock - fromBlock + 1
    const duration = latestBlock.timestamp - firstBlock.timestamp
    const blockTime = roundToSignificant(duration / 1000 / numberBlocks, 2)
    const txLimit = getTxLimit({ numberBlocks, duration, blocksPerBatch: policy!.blocksPerBatch })
    const throughput = getThroughput()
    const stats: StatsLiveview = { duration, txLimit, throughput, blockTime, fromBlock, toBlock, numberBlocks }
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

function getTxLimit({ numberBlocks, duration, blocksPerBatch }: Pick<StatsLiveview, 'numberBlocks' | 'duration'> & Pick<PolicyConstants, 'blocksPerBatch'>) {
  const microBlockCount = numberBlocks - Math.floor(numberBlocks / blocksPerBatch)
  return Math.round(microBlockCount * TXS_PER_BLOCK / (duration / 1000))
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
