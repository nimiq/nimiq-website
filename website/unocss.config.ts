import { readFile } from 'node:fs/promises'
import { mergeConfigs } from '@unocss/core'
import { presetIcons } from 'unocss'
import config from '../base/unocss.config.js'

export default mergeConfigs([config, {
  // Custom config
  presets: [
    presetIcons({
      collections: {
        nimiq: async () => {
          return await fetch(
            'https://raw.githubusercontent.com/onmax/nimiq-ui/main/packages/nimiq-icons/dist/icons.json',
          ).then(res => res.json() as any)
        },
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
  variants: [
    (matcher) => {
      if (!matcher.startsWith('selected:'))
        return matcher
      return {
        matcher: matcher.slice(9),
        selector: s => `[data-selected] ${s}`,
      }
    },
    (matcher) => {
      if (!matcher.startsWith('not-selected:'))
        return matcher
      return {
        matcher: matcher.slice(13),
        selector: s => `:not([data-selected]) ${s}`,
      }
    },
  ],
}])
