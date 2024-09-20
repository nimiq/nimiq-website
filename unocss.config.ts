import { readFile } from 'node:fs/promises'
import { presetRemToPx } from '@unocss/preset-rem-to-px'
import transformerDirectives from '@unocss/transformer-directives'
import { presetNimiq } from 'nimiq-css'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [
    [/^nq-(mt|mb|pt|pb)-16$/, ([, t]) => `${t}-12 xl:${t}-16`],
    [/^nq-(mt|mb|pt|pb)-32$/, ([, t]) => `${t}-24 md:${t}-32`],
    [/^nq-(mt|mb|pt|pb)-48$/, ([, t]) => `${t}-32 xl:${t}-40 2xl:${t}-48`],

    // TODO move this to nimiq-css
    { 'text-xs': 'text-12 lg:text-13 2xl:text-14 lh-[1.3]' },
    { 'text-sm': 'text-14 lg:text-15 2xl:text-16 lh-[1.3]' },
  ],
  rules: [
    [/^area-(.*)$/, ([, t]) => ({ 'grid-area': t })],

    // TODO move this to nimiq-css
    [/^text-min-(.*)$/, ([, t]) => ({ '--nq-font-size-min': t })],
    [/^text-max-(.*)$/, ([, t]) => ({ '--nq-font-size-max': t })],
    ['nq-ease', { 'transition-timing-function': 'var(--nq-ease)' }],
  ],
  variants: [
    (matcher) => {
      if (!matcher.startsWith('global-dark:'))
        return matcher
      return {
        matcher: matcher.slice('global-dark:'.length),
        selector: s => `html.dark ${s}`,
      }
    },
  ],
  presets: [
    presetUno({ attributifyPseudo: true }),
    presetNimiq({
      utilities: true,
      attributifyUtilities: true,
      typography: true,
      staticContent: true,
      icons: false,
      scrollbar: true,
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
