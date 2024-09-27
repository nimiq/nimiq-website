<script setup lang="ts">
import type { Layer, Header as Milestone } from '~/components/Roadmap/types'

const firstYear = 2017
const firstMonth = 1

// @unocss-include

const milestones: Milestone[] = [
  { label: 'Vision', year: firstYear, month: firstMonth },
  { label: 'Crowd funding', year: 2018, month: 2 },
  { label: 'Initial Launch', year: 2019, month: 2 },
  { label: 'Accesibility for users', year: 2020, month: 2 },
  { label: 'Accessibility for Merchants', year: 2021, month: 1 },
  { label: 'Integration/Consolidation', year: 2022, month: 1 },
  { label: 'Adoption offensive', year: 2023, month: 6, untilMonth: 3, untilYear: 2025 },
]
const layers: Layer[] = [
  {
    name: 'Network Layer',
    layerClasses: 'bg-blue/10',
    text: 'text-blue-1100',
    icon: 'i-nimiq:icons-lg-network',
    blocksClasses: 'bg-blue text-white',
    blocks: [
      {
        name: 'Research',
        items: [
          {
            icon: 'i-roadmap:js',
            name: 'First Blockchain in JS',
            year: firstYear,
            month: firstMonth,
            tooltip: {
              label: 'Highly customazible. You can edit each entry with the year and month + tooltip.',
              cta: { label: 'See an example', link: 'https://github.com/nimiq/nimiq-website/blob/main/app/pages/roadmap.vue#L29-L39' },
            },
          },
          {
            icon: 'i-nimiq:mining',
            name: 'Browser mining',
            year: 2018,
            month: 8,
            tooltip: {
              label: 'Para ser minero, lah lah lah, mineeerooooo.',
            },
          },
          {
            icon: 'i-nimiq:leaf-2',
            name: 'Albatross PoS design',
            year: 2019,
            month: 7,
          },
          {
            icon: 'i-nimiq:divergence',
            name: 'Fiat-crypto HTLCs ',
            year: 2020,
            month: 11,
          },
          {
            icon: 'i-nimiq:eyeslash',
            name: 'ZKP system',
            year: 2022,
            month: 1,
          },
          {
            icon: 'i-nimiq:locked-lock',
            name: 'Passkeys',
            year: 2024,
            month: 2,
          },
        ],
      },
      {
        name: 'Blockchain',
        items: [
          {
            icon: 'i-nimiq:pacifier',
            name: 'First prototype',
            withBg: true,
            year: 2017,
            month: 4,
          },
          {
            icon: 'i-nimiq:tools',
            name: 'Development PoW',
            year: 2018,
            month: 2,
          },
          {
            icon: 'i-nimiq:moon',
            name: 'Luna Testnet',
            year: 2018,
            month: 4,
            row: 2,
          },
          {
            name: '<b>1.0</b> Nimiq PoW',
            year: 2019,
            month: 1,
            milestone: 'Crowd funding',
          },
          {
            icon: 'i-nimiq:mining',
            name: 'Browser mining',
            year: 2019,
            month: 9,
          },
          {
            icon: 'i-roadmap:rust relative scale-120',
            name: 'Rust implementation',
            year: 2019,
            month: 11,
            row: 2,
          },
          {
            icon: 'i-nimiq:tools',
            name: 'Development PoS',
            year: 2020,
            month: 8,
          },
          {
            icon: 'i-roadmap:wasm',
            name: 'WASM support',
            year: 2021,
            month: 7,
          },
          {
            icon: 'i-nimiq:handshake',
            name: 'Sync protocol redesign',
            year: 2022,
            month: 2,
            row: 2,
          },
          {
            icon: 'i-nimiq:leaf-2',
            name: 'PoS Testnet',
            year: 2022,
            month: 6,
          },
          {
            name: '<b>2.0</b> Nimiq PoS',
            year: 2024,
            month: 7,
            withBg: true,
          },
        ],
      },
      {
        name: 'Swap Technology',
        items: [
          {
            icon: 'i-nimiq:logos-nimiq-mono',
            name: 'OASIS',
            year: 2020,
            month: 12,
          },
        ],
      },
    ],
  },

  {
    name: 'App Layer',
    layerClasses: 'bg-gold/10 pl-120',
    text: 'text-gold-1100',
    icon: 'i-nimiq:icons-lg-nim-phone',
    blocksClasses: 'bg-gold text-white',
    blocks: [
      {
        name: 'Wallet',
        items: [
          {
            icon: 'i-nimiq:logos-nimiq-wallet-horizontal-mono',
            name: '1.0',
            withBg: true,
            year: 2019,
            month: 2,
          },
          {
            icon: 'i-nimiq:logos-nimiq-wallet-horizontal-mono',
            name: '2.0',
            withBg: true,
            year: 2020,
            month: 1,
            milestone: 'Initial Launch',
          },
          {
            icon: 'i-nimiq:ledger-2',
            name: 'Ledger integration',
            year: 2020,
            month: 9,
            row: 3,
          },
          {
            icon: 'i-nimiq:logos-btc-mono',
            name: 'BTC Integration',
            year: 2021,
            month: 4,
          },
          {
            icon: 'i-nimiq:logos-usdc-mono',
            name: 'USDC Integration',
            year: 2021,
            month: 4,
            row: 2,
          },
          {
            icon: 'i-nimiq:icons-lg-btc-nim-swap',
            name: 'Crypto swaps',
            year: 2022,
            month: 6,
          },
          {
            icon: 'i-nimiq:icons-lg-usdc-nim-swap',
            name: 'Crypto/fiat swaps',
            year: 2022,
            month: 12,
            row: 2,
          },
          {
            icon: 'i-nimiq:leaf-3',
            name: 'Pre-Staking',
            year: 2024,
            month: 5,
          },
        ],
      },
      {
        name: 'Merchants App',
        items: [
          [
            {
              icon: 'i-nimiq:logos-nimiq-horizontal-mono w-68 h-16',
              name: 'Checkout',
              year: 2020,
              month: 2,
            },
          ],
          [
            {
              icon: 'i-nimiq:logos-cpl-horizontal-mono',
              name: '1.0',
              year: 2020,
              month: 12,
            },
            {
              icon: 'i-nimiq:logos-cpl-horizontal-mono',
              name: '2.0',
              year: 2022,
              month: 1,
              milestone: 'Accessibility for Merchants',
            },
          ],
        ],
      },
      {
        name: 'Exchange Service',
        nestedBlocksClasses: 'first:z-1 last:ml--12 last:rounded-0 last:w-[calc(100%+12px)] last:pl-32 last:shadow-none last:bg-gold-500 last:text-gold-1100 last:font-semibold',
        items: [
          [
            {
              icon: 'i-nimiq:logos-super-simple-swap-mono',
              name: 'SuperSimpleSwap',
              year: 2020,
              month: 11,
            },
          ],
          [
            {
              name: 'Paused for regulatory reasons',
              year: 2023,
              month: 4,
            },
          ],
        ],
      },
      {
        name: 'Payment App',
        items: [
          {
            icon: 'i-nimiq:logos-nimiq-pay-horizontal-mono text-18',
            year: 2024,
            month: 5,
          },
        ],
      },
    ],
  },

  {
    layerClasses: 'bg-orange/10 pl-146',
    text: 'text-orange-1100',
    icon: 'i-nimiq:icons-lg-group',
    name: 'Adoption Layer',
    blocksClasses: 'bg-orange text-white',
    blocks: [
      {
        name: 'Adoption campaigns',
        items: [
          {
            icon: 'i-nimiq:logos-cryptocity-horizontal-mono text-23',
            withBg: true,
            year: 2022,
            month: 6,
          },
          {
            icon: 'i-nimiq:landmark',
            name: 'Pilot city onboarding',
            year: 2023,
            month: 9,
          },
          {
            icon: 'i-nimiq:escalator',
            row: 2,
            name: 'Onboarding campaigns',
            year: 2023,
            month: 11,
          },
          {
            icon: 'i-nimiq:tag-cash',
            row: 3,
            name: 'Cash-back rewards',
            year: 2024,
            month: 1,
          },
        ],
      },
      {
        name: 'Acceptence registry',
        items: [
          {
            year: 2023,
            month: 2,
            icon: 'i-nimiq:logos-crypto-map-horizontal-mono',
          },
        ],
      },
    ],
  },
]

const refSection = useSection('roadmap', 'grey', { paddingX: false, limitWidth: false, useDefaultColors: false })
</script>

<template>
  <NuxtLayout footer-bg-color="grey" draft>
    <section ref="refSection" block>
      <Roadmap :milestones :layers :first-year :first-month />
    </section>
  </NuxtLayout>
</template>
