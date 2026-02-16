import { defineConfig } from 'vitest/config'
import baseConfig from './vitest.config'

export default defineConfig({
  ...baseConfig,
  test: {
    ...(baseConfig.test ?? {}),
    include: ['tests/vrt/**/*.vrt.test.ts'],
    testTimeout: 180000,
    hookTimeout: 180000,
  },
})
