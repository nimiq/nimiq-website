import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import presetIcons from '@unocss/preset-icons'
import { theme } from '@unocss/preset-wind4/theme'
import { presetNimiq } from 'nimiq-css'
import { defineConfig } from 'unocss'
import { presetOnmax } from 'unocss-preset-onmax'

export default defineConfig({
  rules: [
    [/^area-(.*)$/, ([, t]) => ({ 'grid-area': t })],
  ],
  // TODO In the nq-scrollbar-hide, we should include the pseudo-elements
  shortcuts: [
    [/^nq-grid-(\d+)$/, ([, d]) => `grid cols-[repeat(auto-fit,min(calc(100vw-64px),${d}px))] gap-32 md:gap-40 lg:gap-48 xl:gap-64`],
  ],
  variants: [
    // Pending testing
    // TODO Move variants to onmaxPreset?
    // (matcher) => {
    //   if (!matcher.startsWith('group-has-focus-visible:'))
    //     return matcher
    //   return {
    //     matcher: matcher.slice('group-has-focus-visible:'.length),
    //     selector: s => `:where(.group,[group]):has(:focus-visible) ${s}`,
    //   }
    // },
  ],
  presets: [
    presetOnmax(),
    presetNimiq({
      utilities: true,
      attributifyUtilities: true,
      typography: true,
      staticContent: true,
      fonts: false,
    }),
    presetIcons({
      collections: {
        'oasis-regions': FileSystemIconLoader('./public/assets/oasis-regions'),
        'custom': FileSystemIconLoader('./public/assets/custom-icons'),
      },
    }),
  ],

  safelist: [
    // Styling classes used in content YAML
    'nq-pill-tertiary',
    'bg-blue/10',
    'text-blue-1100',
    'bg-blue',
    'bg-gold/10',
    'text-gold-1100',
    'bg-gold',
    'bg-gold-500',
    'bg-orange/10',
    'text-orange-1100',
    'bg-orange',
    'pl-120',
    'pl-146',
    'w-42',
    'w-68',
    'w-96',
    'w-130',
    'h-16',
    'text-18',
    'text-23',
    'scale-120',
    'text-white',
    'text-inherit',
  ],

  theme: {
    colors: {
      red: { neon: '#ff0055' },
      brown: { DEFAULT: '#795548' },
      pink: { DEFAULT: '#FA7268' },
    },
    breakpoints: theme.breakpoint,
    font: {
      retro: '\'Press Start 2P\', \'system-ui\'',
    },
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
        'slide-down': 'ease',
        'slide-up': 'ease',
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
        'slide-down': '300ms',
        'slide-up': '300ms',
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
        'slide-down': '{from {height:0} to {height:var(--reka-accordion-content-height)}}',
        'slide-up': '{from {height:var(--reka-accordion-content-height)} to {height:0}}',
      },
    },
  },
})
