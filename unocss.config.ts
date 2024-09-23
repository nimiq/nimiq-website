import { readFile } from 'node:fs/promises'
import { presetRemToPx } from '@unocss/preset-rem-to-px'
import transformerDirectives from '@unocss/transformer-directives'
import { presetNimiq } from 'nimiq-css'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [
    // TODO move this to nimiq-css
    [/^nq-(mt|mb|pt|pb)-16$/, ([, t]) => `${t}-12 xl:${t}-16`],
    [/^nq-(mt|mb|pt|pb)-32$/, ([, t]) => `${t}-24 md:${t}-32`],
    [/^nq-(mt|mb|pt|pb)-40$/, ([, t]) => `${t}-32 xl:${t}-40`],
    [/^nq-(mt|mb|pt|pb)-48$/, ([, t]) => `${t}-32 xl:${t}-40 2xl:${t}-48`],
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

    (matcher) => {
      const motionVariants = ['from-start', 'to-start', 'from-end', 'to-end']
      for (const variant of motionVariants) {
        if (matcher.startsWith(`motion-${variant}:`)) {
          return {
            matcher: matcher.slice(`motion-${variant}:`.length),
            selector: s => `[data-motion=${variant}]${s}`,
          }
        }
      }
      return matcher
    },

    (matcher) => {
      if (matcher.startsWith('data-visible:')) {
        return {
          matcher: matcher.slice('data-visible:'.length),
          selector: s => `[data-state=visible]${s}, [data-state=visible] ${s}`,
        }
      }
      if (matcher.startsWith('data-hidden:')) {
        return {
          matcher: matcher.slice('data-hidden:'.length),
          selector: s => `[data-state=hidden]${s}, [data-state=hidden] ${s}`,
        }
      }
      if (!matcher.startsWith('data-closed:'))
        return matcher
      return {
        matcher: matcher.slice(12),
        selector: s => `[data-state=closed]${s}, [data-state=closed] ${s}`,
      }
      return matcher
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
