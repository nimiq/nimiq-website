import type { Layer, Header as Milestone } from '~/components/Roadmap/types'

export const firstYear = 2017
export const firstMonth = 1

// @unocss-include

export const milestones: Milestone[] = [
  { label: 'Vision', year: 2017, month: 1 },
  { label: 'Crowdfunding', year: 2018, month: 2 },
  { label: 'Initial Launch', year: 2019, month: 2 },
  { label: 'Accessibility for Users & Merchants', year: 2020, month: 2 },
  { label: 'Proof-of-Stake Integration/Consolidation', year: 2022, month: 1 },
  { label: 'Adoption offensive', year: 2023, month: 6, untilMonth: 3, untilYear: 2026 },
]

export const layers: Layer[] = [
  {
    name: 'Network Layer',
    layerClasses: 'bg-blue/10',
    text: 'text-blue-1100',
    icon: 'i-nimiq:duotone-network',
    blocksClasses: 'bg-blue text-white',
    blocks: [
      {
        name: 'Research',
        items: [
          // Did you know? You can also add tooltips with cta!
          { icon: 'i-roadmap:js', name: 'First Blockchain in JS', year: firstYear, month: firstMonth },
          { icon: 'i-nimiq:mining', name: 'Browser mining', year: 2018, month: 8 },
          { icon: 'i-nimiq:leaf-2', name: 'Albatross PoS design', year: 2019, month: 7 },
          { icon: 'i-nimiq:divergence', name: 'Fiat-crypto HTLCs ', year: 2020, month: 11 },
          { icon: 'i-nimiq:eyeslash', name: 'ZKP system', year: 2022, month: 1 },
          { icon: 'i-nimiq:locked-lock', name: 'Passkeys', year: 2024, month: 2 },

          // TODO add icon
          { name: 'Interoperability', year: 2025, month: 2 },
        ],
      },
      {
        name: 'Blockchain',
        items: [
          { icon: 'i-nimiq:pacifier', name: 'First prototype', withBg: true, year: 2017, month: 4 },
          { icon: 'i-nimiq:tools-wench-hammer', name: 'Development PoW', year: 2018, month: 2 },
          { icon: 'i-nimiq:moon', name: 'Luna Testnet', year: 2018, month: 4, row: 2 },
          { name: '<b>1.0</b> Nimiq PoW', year: 2019, month: 1, milestone: 'Crowdfunding' },
          { icon: 'i-nimiq:mining', name: 'Browser mining', year: 2019, month: 9 },
          { icon: 'i-roadmap:rust relative scale-120', name: 'Rust implementation', year: 2019, month: 11, row: 2 },
          { icon: 'i-nimiq:tools-wench-hammer', name: 'Development PoS', year: 2020, month: 8 },
          { icon: 'i-roadmap:wasm', name: 'WASM support', year: 2021, month: 7 },
          { icon: 'i-nimiq:handshake', name: 'Sync protocol redesign', year: 2022, month: 2, row: 2 },
          { icon: 'i-nimiq:leaf-2', name: 'PoS Testnet', year: 2022, month: 6 },
          { name: '<b>2.0</b> Nimiq PoS', year: 2024, month: 7, withBg: true },
        ],
      },
      {
        name: 'Swap Technology',
        items: [
          { icon: 'i-nimiq:logos-nimiq-mono', name: 'OASIS', year: 2020, month: 12 },
        ],
      },
    ],
  },

  {
    name: 'App Layer',
    layerClasses: 'bg-gold/10 pl-120',
    text: 'text-gold-1100',
    icon: 'i-nimiq:duotone-nim-phone',
    blocksClasses: 'bg-gold text-white',
    blocks: [
      {
        name: 'Wallet',
        items: [
          { icon: 'i-nimiq:logos-nimiq-wallet-horizontal-mono w-68', name: '1.0', withBg: true, year: 2019, month: 2 },
          { icon: 'i-nimiq:logos-nimiq-wallet-horizontal-mono w-68', name: '2.0', withBg: true, year: 2020, month: 1, milestone: 'Initial Launch' },
          { icon: 'i-nimiq:ledger-2', name: 'Ledger integration', year: 2020, month: 9, row: 3 },
          { icon: 'i-nimiq:logos-btc-mono', name: 'BTC Integration', year: 2021, month: 4 },
          { icon: 'i-nimiq:logos-usdc-mono', name: 'USDC Integration', year: 2021, month: 4, row: 2 },
          { icon: 'i-nimiq:duotone-btc-nim-swap', name: 'Crypto swaps', year: 2022, month: 6 },
          { icon: 'i-nimiq:duotone-usdc-nim-swap', name: 'Crypto/fiat swaps', year: 2022, month: 12, row: 2 },
          { icon: 'i-nimiq:leaf-3', name: 'Pre-Staking', year: 2024, month: 5 },
          { icon: 'i-nimiq:leaf-2', name: 'Staking', year: 2024, month: 11 },
          { icon: 'i-nimiq:logos-usdt-mono', name: 'Stablecoins Cashlink', year: 2025, month: 12 },
        ],
      },
      {
        name: 'Merchants App',
        items: [
          [
            { icon: 'i-nimiq:logos-nimiq-horizontal-mono w-68 h-16', name: 'Checkout', year: 2020, month: 2 },
          ],
          [
            { icon: 'i-nimiq:logos-cpl-horizontal-mono w-130', name: '1.0', year: 2020, month: 12 },
            { icon: 'i-nimiq:logos-cpl-horizontal-mono  w-130', name: '2.0', year: 2022, month: 1, milestone: 'Accessibility for Merchants' },
          ],
        ],
      },
      {
        name: 'Exchange Service',
        nestedBlocksClasses: 'first:z-1 last:ml--12 last:rounded-0 last:w-[calc(100%+12px)] last:pl-32 last:shadow-none last:bg-gold-500 last:text-gold-1100 last:font-semibold',
        items: [
          [
            { icon: 'i-nimiq:logos-super-simple-swap-mono', name: 'SuperSimpleSwap', year: 2020, month: 11 },
          ],
          [
            { name: 'Paused for regulatory reasons', year: 2023, month: 4 },
          ],
        ],
      },
      {
        name: 'Payment App',
        items: [
          { icon: 'i-nimiq:logos-nimiq-pay-horizontal-mono w-42 text-18', year: 2024, month: 4 },
          { name: 'BTC-Lightning Support', year: 2024, month: 7 },
          { name: 'Mini-App Framework', year: 2025, month: 12 },
        ],
      },
      {
        name: 'MultiSig App',
        items: [
          { name: 'NIM Support', year: 2025, month: 12 },
        ],
      },
      {
        name: 'Cryptopayment.link',
        items: [
          { name: 'First Version', year: 2020, month: 2 },
          { name: 'Improved Version Released', year: 2022, month: 6 },
          { icon: 'i-nimiq:logos-usdc-mono', name: 'USDC Support', year: 2023, month: 7 },
          { icon: 'i-nimiq:logos-usdt-mono', name: 'USDT Support', year: 2025, month: 12 },
        ],
      },
    ],
  },

  {
    layerClasses: 'bg-orange/10 pl-146',
    text: 'text-orange-1100',
    icon: 'i-nimiq:duotone-group',
    name: 'Adoption Layer',
    blocksClasses: 'bg-orange text-white',
    blocks: [
      {
        name: 'Adoption campaigns',
        items: [
          { icon: 'i-nimiq:logos-cryptocity-horizontal-mono w-68 text-23', withBg: true, year: 2022, month: 6,
          },
          { icon: 'i-nimiq:landmark', name: 'Criptociudad San Jose (Costa Rica)', year: 2023, month: 2 },
          { icon: 'i-nimiq:landmark', name: 'Kryptostadt Mannheim (Germany)', year: 2023, month: 6, row: 2 },
          { icon: 'i-nimiq:landmark', name: 'Criptocity Toronto (Canada)', year: 2024, month: 10 },
          { icon: 'i-nimiq:landmark', row: 2, name: 'Criptocity Gambia (Africa)', year: 2024, month: 11 },
          { icon: 'i-nimiq:tag-cash', row: 3, name: 'Cryptocity Loyalty Points', year: 2024, month: 1 },
        ],
      },
      {
        name: 'Acceptance registry',
        items: [
          { year: 2023, month: 2, icon: 'i-nimiq:logos-crypto-map-horizontal-mono' },
        ],
      },
    ],
  },
]
