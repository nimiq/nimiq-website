import { createExternalPackageIconLoader } from '@iconify/utils/lib/loader/external-pkg'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { theme } from '@unocss/preset-wind4/theme'
import { presetNimiq } from 'nimiq-css'
import { defineConfig, presetIcons } from 'unocss'
import { presetOnmax } from 'unocss-preset-onmax'

export default defineConfig({
  preflights: [
    { getCSS: () => '@layer nq-static-content, nq-preflight, nq-typography, nq-utilities, nq-variants;' },
  ],
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
        ...createExternalPackageIconLoader('@iconify-json/logos'),
        ...createExternalPackageIconLoader('nimiq-icons'),
        ...createExternalPackageIconLoader('nimiq-flags'),
        'continents': FileSystemIconLoader('./public/assets/continents'),
        'oasis-regions': FileSystemIconLoader('./public/assets/oasis-regions'),
        'announcement': FileSystemIconLoader('./public/assets/announcement-identicons'),
        'custom': FileSystemIconLoader('./public/assets/custom-icons'),
        'roadmap': {
          js: '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 18 18" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M13.795 16.589c-1.57 0-2.585-.749-3.08-1.728l1.377-.798c.362.593.833 1.027 1.667 1.027.7 0 1.148-.35 1.148-.833 0-.727-.97-1.012-1.655-1.305-1.22-.52-2.03-1.172-2.03-2.55 0-1.268.966-2.234 2.477-2.234 1.075 0 1.848.374 2.404 1.352l-1.317.846c-.29-.519-.604-.724-1.087-.724-.496 0-.81.314-.81.724 0 .508.314.713 1.04 1.027 1.52.652 2.67 1.164 2.67 2.84 0 1.522-1.196 2.356-2.804 2.356ZM9.9 14.039c0 1.752-1.08 2.679-2.578 2.679-1.353 0-2.164-.518-2.563-1.418h-.023l1.376-.962c.265.47.505.805 1.084.805.557 0 .904-.282.904-1.127V8.1h1.8v5.94ZM0 18h18V0H0v18Z" clip-rule="evenodd"/></svg>',
          rust: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path fill="currentColor" d="M6.56 1.65a.41.41 0 1 1 .83 0 .41.41 0 0 1-.83 0ZM1.61 5.42a.41.41 0 1 1 .83 0 .41.41 0 0 1-.83 0Zm9.92.02a.41.41 0 1 1 .83 0 .41.41 0 0 1-.83 0ZM2.81 6A.38.38 0 0 0 3 5.5l-.19-.42h.73v3.27H2.08A5.15 5.15 0 0 1 1.9 6.4l.9-.4Zm3.03.08v-.97h1.73c.09 0 .63.1.63.51 0 .34-.42.46-.76.46h-1.6Zm-2.36 5.2a.41.41 0 1 1 .12.28.41.41 0 0 1-.12-.3m6.16.03a.41.41 0 1 1 .83 0 .41.41 0 0 1-.83 0Zm.13-.95a.38.38 0 0 0-.45.3l-.2.97a5.12 5.12 0 0 1-4.28-.02l-.2-.97a.38.38 0 0 0-.45-.3l-.86.19a5 5 0 0 1-.45-.53h4.18c.05 0 .08 0 .08-.05V8.46c0-.04-.03-.05-.08-.05H5.84v-.94h1.32a.83.83 0 0 1 .82.7c.05.21.16.89.25 1.1.07.24.4.72.73.72h2.17c-.15.2-.3.38-.48.55l-.88-.19Zm2.32-3.9c.03.3.04.59.01.88h-.52c-.05 0-.07.04-.07.09v.24c0 .57-.32.7-.6.72-.27.03-.57-.1-.6-.27a1.8 1.8 0 0 0-.84-1.4c.52-.33 1.05-.81 1.05-1.46a1.64 1.64 0 0 0-.8-1.35c-.33-.21-.71-.33-1.1-.36H3.19a5.12 5.12 0 0 1 2.86-1.62l.64.67a.38.38 0 0 0 .54.02l.72-.69a5.12 5.12 0 0 1 3.5 2.5l-.49 1.11a.38.38 0 0 0 .2.5l.93.41Zm1.22.01-.01-.16.5-.48a.2.2 0 0 0 0-.3.2.2 0 0 0-.06-.03l-.65-.25-.05-.16.4-.56a.21.21 0 0 0-.13-.32l-.68-.11-.08-.15.29-.63a.21.21 0 0 0 0-.17.21.21 0 0 0-.12-.1.2.2 0 0 0-.07-.02l-.7.02-.1-.13.15-.67a.21.21 0 0 0-.24-.24l-.67.15-.13-.1.02-.7a.21.21 0 0 0-.29-.19l-.62.29-.15-.08L9.8.68a.21.21 0 0 0-.25-.15.2.2 0 0 0-.06.02l-.56.4L8.76.9 8.52.26a.21.21 0 0 0-.28-.1.2.2 0 0 0-.06.03L7.7.7h-.17l-.37-.6a.21.21 0 0 0-.35 0l-.36.6H6.3L5.82.2a.21.21 0 0 0-.34.07L5.24.9l-.16.05-.56-.4a.21.21 0 0 0-.3.07.2.2 0 0 0-.02.06l-.11.69-.15.08-.63-.29a.21.21 0 0 0-.28.12.2.2 0 0 0 0 .07l.01.7-.13.1L2.24 2a.21.21 0 0 0-.25.25l.16.67-.1.13-.7-.02a.21.21 0 0 0-.19.29l.29.63-.08.15-.69.1a.21.21 0 0 0-.15.26l.02.07.4.56-.05.16-.64.24a.21.21 0 0 0-.1.28.2.2 0 0 0 .03.06l.5.47v.17l-.6.36a.21.21 0 0 0 0 .35l.6.36v.17l-.5.48a.21.21 0 0 0 0 .3.2.2 0 0 0 .07.03l.65.24.05.17-.4.56a.21.21 0 0 0 .06.3.2.2 0 0 0 .06.02l.69.11.08.15-.29.63a.21.21 0 0 0 .12.28.2.2 0 0 0 .07.01l.7-.02.1.13-.14.68a.21.21 0 0 0 .24.24l.67-.16.13.11-.02.7a.21.21 0 0 0 .29.18l.62-.28.16.08.1.68a.21.21 0 0 0 .26.16.2.2 0 0 0 .06-.03l.56-.4.17.05.24.64a.21.21 0 0 0 .34.07l.47-.5.17.01.36.59a.21.21 0 0 0 .35 0l.36-.59.17-.01.47.5a.2.2 0 0 0 .3 0 .2.2 0 0 0 .04-.07l.24-.64.17-.05.56.4a.2.2 0 0 0 .3-.06.2.2 0 0 0 .02-.07l.1-.68.16-.08.63.28a.2.2 0 0 0 .27-.12.2.2 0 0 0 .02-.07l-.03-.69.14-.1.67.15a.2.2 0 0 0 .15-.03.21.21 0 0 0 .09-.21l-.16-.68.11-.13.7.02a.21.21 0 0 0 .19-.13.2.2 0 0 0 0-.15l-.3-.63.09-.15.68-.11a.21.21 0 0 0 .13-.32l-.4-.56.05-.17.65-.24a.21.21 0 0 0 .06-.34l-.5-.47.01-.17.6-.37a.21.21 0 0 0 0-.34l-.6-.37Z"/></svg>',
          wasm: '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 18 18" fill="none"><path fill="currentColor" d="M11.059 0v.097a2.064 2.064 0 0 1-4.128 0V0H0v18h18V0h-6.941Zm2.3 11.271-.52 2.339h1.618l-.597-2.339h-.501ZM8.59 16.073l-.876-4.337h-.015l-.949 4.337H5.543L4.175 9.701h1.192l.816 4.337h.015L7.182 9.7h1.116l.883 4.39h.014l.932-4.39h1.17l-1.52 6.372H8.59Zm6.567 0-.407-1.418h-2.146l-.313 1.418H11.1l1.542-6.372h1.882l1.875 6.372h-1.241Z"/></svg>',
          circle: '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" fill="none"><path fill="currentColor" d="M15.76 9.935A7.999 7.999 0 1 1 .24 6.064a7.999 7.999 0 0 1 15.52 3.871Z"/></svg>',
        },
      },
    }),
  ],

  safelist: [
    'i-nimiq:duotone-three-hands-hexagon',
    'i-nimiq:duotone-document',
    'i-nimiq:duotone-document-vertical-line',
    'i-nimiq:duotone-document-text',
    'i-nimiq:logos-super-simple-swap-text',
    'i-nimiq:logos-nimiq-horizontal',
    'i-nimiq:document-filled',
    'i-nimiq:globe-filled',
    'i-nimiq:code',
    'i-nimiq:shield',
    'i-nimiq:duotone-htlc-box',
    'i-nimiq:duotone-envelope',
    'i-nimiq:logos-multisig',
    'i-nimiq:duotone-network',
    'i-roadmap:js',
    'i-nimiq:mining',
    'i-nimiq:leaf-2',
    'i-nimiq:divergence',
    'i-nimiq:eyeslash',
    'i-nimiq:locked-lock',
    'i-nimiq:pacifier',
    'i-nimiq:tools-wench-hammer',
    'i-nimiq:moon',
    'i-roadmap:rust',
    'i-roadmap:wasm',
    'i-nimiq:handshake',
    'i-nimiq:logos-nimiq-mono',
    'i-nimiq:duotone-nim-phone',
    'i-nimiq:logos-nimiq-wallet-horizontal-mono',
    'i-nimiq:ledger-2',
    'i-nimiq:logos-btc-mono',
    'i-nimiq:logos-usdc-mono',
    'i-nimiq:duotone-btc-nim-swap',
    'i-nimiq:duotone-usdc-nim-swap',
    'i-nimiq:leaf-3',
    'i-nimiq:logos-usdt-mono',
    'i-nimiq:logos-nimiq-horizontal-mono',
    'i-nimiq:logos-cpl-horizontal-mono',
    'i-nimiq:logos-super-simple-swap-mono',
    'i-nimiq:logos-nimiq-pay-horizontal-mono',
    'i-nimiq:duotone-group',
    'i-nimiq:logos-cryptocity-horizontal-mono',
    'i-nimiq:landmark',
    'i-nimiq:tag-cash',
    'i-nimiq:logos-crypto-map-horizontal-mono',
    'bg-blue/10',
    'text-blue-1100',
    'bg-blue',
    'bg-gold/10',
    'pl-120',
    'text-gold-1100',
    'bg-gold',
    'bg-orange/10',
    'pl-146',
    'text-orange-1100',
    'bg-orange',
    'w-68',
    'w-130',
    'w-42',
    'text-18',
    'text-23',
    'h-16',
    'relative',
    'scale-120',
    'text-white',
    'bg-gold-500',
    'text-gold-1100',
    'w-96',
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
