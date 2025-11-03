// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    formatters: true,
    unocss: true,
    pnpm: true,
    vue: true,
    ignores: ['.eslintcache', 'cache/**', '.claude/**', 'prismicio-types.d.ts', 'scripts/prismic-data/**'],
  }),
)
