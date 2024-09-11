import type { Block, MacroBlock, MicroBlock } from 'nimiq-rpc-client-ts'

export enum LiveviewBlockType {
  MicroBlock = 'micro',
  MacroBlock = 'macro',
  PlaceholderBlock = 'placeholder',
}

export type LiveviewMicroBlock = {
  kind: LiveviewBlockType.MicroBlock
  delay: number
  matchedTxs: number[]
  unmatchedTxs: string[]
  isSkip: boolean
} & Pick<MicroBlock, 'producer' | 'number' | 'batch' | 'timestamp'>

export type LiveviewMacroBlock = {
  kind: LiveviewBlockType.MacroBlock
  unmatchedTxs: string[]
  votes: number
} & Pick<MacroBlock, 'batch' | 'number'>

export type KiveviewPlaceholderBlock = Pick<Block, 'timestamp'> & { kind: LiveviewBlockType.PlaceholderBlock, number?: undefined }
export type LiveviewBlock = LiveviewMicroBlock | LiveviewMacroBlock | KiveviewPlaceholderBlock
