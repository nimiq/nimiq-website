import type { MacroBlock, MicroBlock } from 'nimiq-rpc-client-ts/types'

export enum LiveviewBlockType {
  MicroBlock = 'micro',
  MacroBlock = 'macro',
  PlaceholderBlock = 'placeholder',
}

export const BLOCKS_WINDOW_SIZE = 20

export type LiveviewMicroBlock = {
  kind: LiveviewBlockType.MicroBlock
  duration: number
  matchedTxs: number[]
  unmatchedTxs: string[]
  isSkip: boolean
} & Pick<MicroBlock, 'producer' | 'number' | 'batch' | 'timestamp'>

export type LiveviewMacroBlock = {
  kind: LiveviewBlockType.MacroBlock
  unmatchedTxs: string[]
  votes: number
} & Pick<MacroBlock, 'batch' | 'number'>

export interface LiveviewPlaceholderBlock { kind: LiveviewBlockType.PlaceholderBlock, number?: undefined, timestamp?: undefined }
export type LiveviewBlock = LiveviewMicroBlock | LiveviewMacroBlock | LiveviewPlaceholderBlock
