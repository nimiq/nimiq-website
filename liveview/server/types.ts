import type { Block, MacroBlock, MicroBlock } from 'nimiq-rpc-client-ts'

export interface StatsLiveview {
  txLimit: number
  throughput: number
  blockTime: number
  duration: number
  fromBlock: number
  toBlock: number
  numberBlocks: number
}

export enum BlockLiveviewType {
  MicroBlock = 'micro',
  MacroBlock = 'macro',
  PlaceholderBlock = 'placeholder',
}

export type MicroBlockLiveview = {
  kind: BlockLiveviewType.MicroBlock
  delay: number
  matchedTxs: number[]
  unmatchedTxs: string[]
  isSkip: boolean
} & Pick<MicroBlock, 'producer' | 'number' | 'batch' | 'timestamp'>

export type MacroBlockLiveview = {
  kind: BlockLiveviewType.MacroBlock
  unmatchedTxs: string[]
  votes: number
} & Pick<MacroBlock, 'batch' | 'number'>

export type PlaceholderBlockLiveview = Pick<Block, 'timestamp'> & { kind: BlockLiveviewType.PlaceholderBlock, number?: undefined }
export type BlockLiveview = MicroBlockLiveview | MacroBlockLiveview | PlaceholderBlockLiveview
