export interface Block {
  icon?: string
  name?: string
  year: number
  month: number
  withBg?: boolean
  row?: number
  untilYear?: number
  untilMonth?: number
  milestone?: string
  tooltip?: {
    label?: string
    cta?: { link: string, label: string }
  }
}

export interface Header {
  label: string
  year: number
  month: number
  untilYear?: number | `var(--current-year)`
  untilMonth?: number | `var(--current-month)`
}

export interface Layer {
  name: string
  bg: string
  text: string
  icon: string
  blocksClasses?: string
  blocks: {
    name: string
    nestedBlocksClasses?: string
    items: Block[] | Block[][]
  }[]
}
