import type { MacroBlock, MicroBlock } from 'nimiq-rpc-client-ts/types'
import { initRpcClient } from 'nimiq-rpc-client-ts/client'
import { getBlockByNumber, getBlockNumber } from 'nimiq-rpc-client-ts/http'
import { BlockTypeEnum } from 'nimiq-rpc-client-ts/types'
import { subscribeForHeadBlock } from 'nimiq-rpc-client-ts/ws'

export default defineWebSocketHandler({
  async open(peer) {
    let lastBlockTimestamp: number | undefined
    let shouldEnqueue = true
    const blockQueue = new Map<number, any>()

    // Debug
    peer.send(JSON.stringify({ type: 'ping' }))

    const nodeRpcUrl = useRuntimeConfig().albatross.nodeRpcUrl
    initRpcClient({ url: nodeRpcUrl })

    const eventEmitter = await subscribeForHeadBlock(true)
    const closeFn = (eventEmitter as any).close?.bind(eventEmitter)

    eventEmitter.addEventListener('data', async (event: CustomEvent) => {
      const { data: block } = event.detail
      if (!block)
        return
      const processedBlock
        = await (block.type === BlockTypeEnum.Micro
          ? getMicroblock(block)
          : getMacroblock(block as MacroBlock))
      if (shouldEnqueue) {
        blockQueue.set(processedBlock.number, processedBlock)
      }
      else {
        peer.send(JSON.stringify(processedBlock))
      }
    })

    eventEmitter.addEventListener('close', () => {
      peer.close()
    })

    const [isOk, error, head] = await getBlockNumber()
    if (!isOk)
      throw createError({ status: 500, message: `Failed to get block number: ${error}` })

    const start = Math.max(0, head - BLOCKS_WINDOW_SIZE + 1)
    const promises: Promise<any>[] = []
    for (let blockNumber = start; blockNumber <= head; blockNumber++) {
      promises.push(
        getBlockByNumber({ blockNumber, includeBody: true }).then(async ([ok, err, block]) => {
          if (!ok)
            throw createError({ status: 500, message: `Failed to get block ${blockNumber}: ${err}` })
          return block.type === BlockTypeEnum.Macro
            ? getMacroblock(block as MacroBlock)
            : getMicroblock(block)
        }),
      )
    }

    const blocks = await Promise.all(promises)
    const sent = new Set(blocks.map(b => b.number))
    peer.send(JSON.stringify(blocks))

    // Flush queued blocks
    const pending = [...blockQueue.keys()].filter(n => !sent.has(n)).sort((a, b) => a - b)
    for (const n of pending) {
      peer.send(JSON.stringify(blockQueue.get(n)))
    }
    shouldEnqueue = false
    blockQueue.clear()

    // helpers now close over this connection’s state
    async function getMicroblock(block: MicroBlock): Promise<LiveviewMicroBlock> {
      const { producer, justification, transactions, number, batch, timestamp } = block
      const isSkip = 'skip' in justification
      const duration = lastBlockTimestamp ? timestamp - lastBlockTimestamp : 0
      lastBlockTimestamp = timestamp
      return { producer, isSkip, transactions, duration, kind: LiveviewBlockType.MicroBlock, number, batch, timestamp }
    }

    async function getMacroblock(block: MacroBlock): Promise<LiveviewMacroBlock> {
      const { transactions, justification, batch, number, timestamp } = block
      const votes = justification?.sig?.signers.length ?? 0
      lastBlockTimestamp = timestamp
      return { transactions, votes, batch, kind: LiveviewBlockType.MacroBlock, number }
    }

    // stash a disposer on the peer
    ;(peer as any)._dispose = () => {
      closeFn?.()
    }
  },

  close(peer) { (peer as any)._dispose?.() },
  error(peer) { (peer as any)._dispose?.() },
})
