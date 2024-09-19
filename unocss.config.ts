import { readFile } from 'node:fs/promises'
import { presetRemToPx } from '@unocss/preset-rem-to-px'
import transformerDirectives from '@unocss/transformer-directives'
import { presetNimiq } from 'nimiq-css'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: {
    'nq-mt-16': 'mt-12 xl:mt-16',
    'nq-mt-32': 'mt-24 md:mt-32',
    'nq-mt-48': 'mt-32 xl:mt-40 2xl:mt-48',
    'nq-mb-24': 'mb-16 xl:mb-24',
    'nq-mb-48': 'mb-32 xl:mb-40 2xl:mb-48',
  },
  presets: [
    presetUno({ attributifyPseudo: true }),
    presetNimiq({
      utilities: true,
      attributifyUtilities: true,
      typography: true,
      staticContent: true,
    }),
    presetRemToPx({ baseFontSize: 4 }),
    presetAttributify(),
    presetIcons({
      collections: {
        continents: {
          'africa': () => readFile('./public/assets/continents/africa.svg', 'utf-8'),
          'south-america': () => readFile('./public/assets/continents/south-america.svg', 'utf-8'),
          'north-america': () => readFile('./public/assets/continents/north-america.svg', 'utf-8'),
          'europe': () => readFile('./public/assets/continents/europe.svg', 'utf-8'),
          'asia': () => readFile('./public/assets/continents/asia.svg', 'utf-8'),
          'oceania': () => readFile('./public/assets/continents/oceania.svg', 'utf-8'),
          'world-dots': () => readFile('./public/assets/continents/world-dots.svg', 'utf-8'),
        },
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],

  safelist: [
    'three-hands-hexagon',
    'document-text',
    'document',
    'document-vertical-line',
  ].map(x => `i-nimiq:icons-lg-${x}`),
})
