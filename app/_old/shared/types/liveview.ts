import type { MacroBlock, MicroBlock, Transaction } from 'nimiq-rpc-client-ts/types'

export enum LiveviewBlockType {
  MicroBlock = 'micro',
  MacroBlock = 'macro',
  PlaceholderBlock = 'placeholder',
}

export const BLOCKS_WINDOW_SIZE = 20

export type LiveviewMicroBlock = {
  kind: LiveviewBlockType.MicroBlock
  duration: number
  transactions: Transaction[]
  isSkip: boolean
} & Pick<MicroBlock, 'producer' | 'number' | 'batch' | 'timestamp'>

export type LiveviewMacroBlock = {
  kind: LiveviewBlockType.MacroBlock
  transactions: Transaction[]
  votes: number
} & Pick<MacroBlock, 'batch' | 'number'>

export interface LiveviewPlaceholderBlock { kind: LiveviewBlockType.PlaceholderBlock, number?: undefined, timestamp?: undefined }
export type LiveviewBlock = LiveviewMicroBlock | LiveviewMacroBlock | LiveviewPlaceholderBlock
