import { readFile } from 'node:fs/promises'
import { presetRemToPx } from '@unocss/preset-rem-to-px'
import transformerDirectives from '@unocss/transformer-directives'
import { presetNimiq } from 'nimiq-css'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [],
  rules: [
    [/^area-(.*)$/, ([, t]) => ({ 'grid-area': t })],
  ],
  presets: [
    presetUno({ attributifyPseudo: true }),
    presetNimiq({
      utilities: true,
      attributifyUtilities: true,
      typography: true,
      staticContent: true,
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
    'i-nimiq:icons-lg-hands-hexagon',
    'i-nimiq:icons-lg-document',
    'i-nimiq:icons-lg-document-vertical-line',
    'i-nimiq:icons-lg-three-hands-hexagon',
    'i-nimiq:logos-super-simple-swap-text',
    'i-nimiq:logos-nimiq-horizontal',
  ],

  theme: {
    animation: {
      timingFns: {
        'scale-in': 'ease',
        'scale-out': 'ease',
        'fade-in': 'ease',
        'fade-out': 'ease',
        'enter-from-left': 'ease',
        'enter-from-right': 'ease',
        'exit-to-left': 'ease',
        'exit-to-right': 'ease',
      },
      durations: {
        'scale-out': '200ms',
        'scale-in': '200ms',
        'fade-in': '200ms',
        'fade-out': '200ms',
        'enter-from-left': '250ms',
        'enter-from-right': '250ms',
        'exit-to-left': '250ms',
        'exit-to-right': '250ms',
      },
      keyframes: {
        'enter-from-right': '{from {opacity:0;transform:translateX(200px)} to {opacity:1;transform:translateX(0)}}',
        'enter-from-left': '{from {opacity:0;transform:translateX(-200px)} to {opacity:1;transform:translateX(0)}}',
        'exit-to-right': '{from {opacity:1;transform:translateX(0)} to {opacity:0;transform:translateX(200px)}}',
        'exit-to-left': '{from {opacity:1;transform:translateX(0)} to {opacity:0;transform:translateX(-200px)}}',
        'scale-in': '{from {opacity:0;transform:rotateX(-10deg) scale(0.9)} to {opacity:1;transform:rotateX(0deg) scale(1)}}',
        'scale-out': '{from {opacity:1;transform:rotateX(0deg) scale(1)} to {opacity:0;transform:rotateX(-10deg) scale(0.95)}}',
        'fade-in': '{from {opacity:0} to {opacity:1}}',
        'fade-out': '{from {opacity:1} to {opacity:0}}',
      },
    },
  },
})
