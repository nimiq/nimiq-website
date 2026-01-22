// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    formatters: true,
    pnpm: true,
    vue: true,
    ignores: ['.eslintcache', 'cache/**', '.claude/**', 'prismicio-types.d.ts', 'scripts/prismic-data/**'],
  }),
  {
    files: ['app/components/**/*.vue'],
    rules: {
      'vue/no-restricted-html-elements': ['error', { element: 'section', message: 'Use <div> in components. <section> only in pages.' }],
    },
  },
)
