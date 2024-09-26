import { readFile } from 'node:fs/promises'
import { presetRemToPx } from '@unocss/preset-rem-to-px'
import transformerDirectives from '@unocss/transformer-directives'
import { presetNimiq } from 'nimiq-css'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
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
        roadmap: {
          js: '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 18 18" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M13.795 16.589c-1.57 0-2.585-.749-3.08-1.728l1.377-.798c.362.593.833 1.027 1.667 1.027.7 0 1.148-.35 1.148-.833 0-.727-.97-1.012-1.655-1.305-1.22-.52-2.03-1.172-2.03-2.55 0-1.268.966-2.234 2.477-2.234 1.075 0 1.848.374 2.404 1.352l-1.317.846c-.29-.519-.604-.724-1.087-.724-.496 0-.81.314-.81.724 0 .508.314.713 1.04 1.027 1.52.652 2.67 1.164 2.67 2.84 0 1.522-1.196 2.356-2.804 2.356ZM9.9 14.039c0 1.752-1.08 2.679-2.578 2.679-1.353 0-2.164-.518-2.563-1.418h-.023l1.376-.962c.265.47.505.805 1.084.805.557 0 .904-.282.904-1.127V8.1h1.8v5.94ZM0 18h18V0H0v18Z" clip-rule="evenodd"/></svg>',
          rust: '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="none"><g clip-path="url(#a)"><path fill="currentColor" d="m19.863 9.755-.84-.52A11.769 11.769 0 0 0 19 8.991l.721-.673a.287.287 0 0 0-.095-.482l-.923-.345c-.023-.08-.047-.16-.072-.238l.575-.8A.289.289 0 0 0 19.02 6l-.973-.158a7.34 7.34 0 0 0-.117-.22l.409-.896a.288.288 0 0 0-.274-.409l-.986.035a7.76 7.76 0 0 0-.157-.19l.227-.96a.288.288 0 0 0-.347-.348l-.962.226a12.308 12.308 0 0 0-.189-.156l.034-.987a.287.287 0 0 0-.408-.273l-.897.409c-.073-.04-.146-.08-.219-.118l-.158-.972a.288.288 0 0 0-.454-.188l-.8.575a8.854 8.854 0 0 0-.237-.072l-.345-.923a.288.288 0 0 0-.482-.096l-.673.723c-.082-.01-.163-.018-.245-.024l-.52-.84a.289.289 0 0 0-.49 0l-.52.84A8.09 8.09 0 0 0 8.99 1L8.318.279a.29.29 0 0 0-.482.095l-.345.923c-.08.023-.16.047-.238.072l-.8-.575A.287.287 0 0 0 6 .98l-.159.973-.219.118-.896-.409a.288.288 0 0 0-.409.273l.035.987a8.978 8.978 0 0 0-.19.156l-.96-.226a.29.29 0 0 0-.35.347l.228.962a8.914 8.914 0 0 0-.156.189l-.987-.035a.289.289 0 0 0-.273.41l.408.897c-.04.071-.078.144-.117.218L.982 6a.289.289 0 0 0-.188.454l.575.8c-.025.078-.049.158-.072.237l-.923.346a.289.289 0 0 0-.095.482L1 8.99a7.9 7.9 0 0 0-.025.244l-.84.52a.289.289 0 0 0 0 .491l.84.52c.007.082.015.163.025.245l-.722.673a.288.288 0 0 0 .095.482l.923.345c.023.08.047.16.072.237l-.575.8a.289.289 0 0 0 .188.454l.972.158c.039.074.077.147.118.219l-.41.897a.289.289 0 0 0 .274.408l.987-.034c.05.064.103.127.156.19l-.227.961a.287.287 0 0 0 .348.347l.961-.226.19.156-.035.987a.288.288 0 0 0 .41.273l.896-.41c.072.04.145.08.219.118l.158.972a.288.288 0 0 0 .454.189l.8-.576c.078.025.158.05.237.072l.345.923a.288.288 0 0 0 .482.095L8.99 19c.08.01.162.018.244.025l.52.84a.29.29 0 0 0 .491 0l.52-.84c.082-.007.163-.015.245-.025l.673.722a.287.287 0 0 0 .481-.095l.346-.923a8.01 8.01 0 0 0 .237-.072l.8.576a.29.29 0 0 0 .454-.189l.159-.972c.073-.038.145-.078.218-.117l.897.409a.288.288 0 0 0 .408-.274l-.034-.987c.064-.05.127-.102.19-.155l.96.226a.287.287 0 0 0 .348-.347l-.226-.962.156-.189.987.034a.287.287 0 0 0 .273-.408l-.41-.897c.04-.072.08-.145.118-.219l.972-.158a.287.287 0 0 0 .188-.454l-.575-.8c.025-.079.05-.158.072-.237l.923-.345a.29.29 0 0 0 .174-.36.287.287 0 0 0-.079-.122L19 11.01c.01-.082.017-.163.025-.245l.84-.52a.289.289 0 0 0 0-.49Zm-5.62 6.965a.595.595 0 0 1 .25-1.163.595.595 0 0 1-.25 1.163Zm-.285-1.93a.54.54 0 0 0-.642.417l-.298 1.391a7.281 7.281 0 0 1-3.018.65c-1.1 0-2.144-.244-3.08-.68l-.299-1.39a.541.541 0 0 0-.642-.417l-1.228.264a7.3 7.3 0 0 1-.635-.748h5.975c.068 0 .113-.013.113-.074V12.09c0-.061-.045-.073-.113-.073H8.344v-1.34h1.89c.172 0 .922.048 1.162 1.007.075.295.24 1.254.353 1.56.112.345.57 1.033 1.057 1.033h2.978a.612.612 0 0 0 .108-.01c-.206.28-.433.546-.677.793l-1.256-.269Zm-8.264 1.9a.595.595 0 0 1-.25-1.162.593.593 0 0 1 .707.457.595.595 0 0 1-.458.706ZM3.427 7.5a.594.594 0 1 1-1.086.482.594.594 0 0 1 1.086-.482ZM2.73 9.15l1.28-.57a.542.542 0 0 0 .274-.715l-.263-.595h1.037v4.67H2.967a7.32 7.32 0 0 1-.237-2.79Zm5.614-.454V7.32h2.468c.127 0 .9.148.9.725 0 .48-.593.652-1.08.652H8.344Zm8.969 1.24c0 .182-.007.362-.021.542h-.75c-.075 0-.105.05-.105.123v.344c0 .812-.458.988-.858 1.033-.381.042-.805-.16-.857-.394-.225-1.266-.6-1.536-1.193-2.004.735-.466 1.5-1.155 1.5-2.077 0-.995-.682-1.622-1.147-1.93-.653-.43-1.375-.516-1.57-.516H4.553a7.303 7.303 0 0 1 4.09-2.309l.915.96a.54.54 0 0 0 .766.017l1.024-.978a7.32 7.32 0 0 1 5.005 3.565l-.7 1.582a.543.543 0 0 0 .275.716l1.349.598c.023.24.036.482.036.727ZM9.559 1.932a.594.594 0 1 1 .82.858.594.594 0 0 1-.82-.858Zm6.952 5.595a.594.594 0 1 1 1.085.482.594.594 0 0 1-1.085-.482Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>',
          wasm: '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 18 18" fill="none"><path fill="currentColor" d="M11.059 0v.097a2.064 2.064 0 0 1-4.128 0V0H0v18h18V0h-6.941Zm2.3 11.271-.52 2.339h1.618l-.597-2.339h-.501ZM8.59 16.073l-.876-4.337h-.015l-.949 4.337H5.543L4.175 9.701h1.192l.816 4.337h.015L7.182 9.7h1.116l.883 4.39h.014l.932-4.39h1.17l-1.52 6.372H8.59Zm6.567 0-.407-1.418h-2.146l-.313 1.418H11.1l1.542-6.372h1.882l1.875 6.372h-1.241Z"/></svg>',
          circle: '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" fill="none"><path fill="currentColor" d="M15.76 9.935A7.999 7.999 0 1 1 .24 6.064a7.999 7.999 0 0 1 15.52 3.871Z"/></svg>',
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
