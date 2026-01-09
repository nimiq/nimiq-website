import type { InferOutput } from 'valibot'
import process from 'node:process'
import { literal, union } from 'valibot'

if (import.meta.client || 'window' in globalThis)
  throw new Error('env.ts should not be imported on the client side')

// Define environment type
export const environmentSchema = union([
  literal('local'),
  literal('production'),
  literal('studio'),
])

export type EnvironmentName = InferOutput<typeof environmentSchema>

// Get environment from process.env or default to production
const environment: EnvironmentName = (process.env.NUXT_ENVIRONMENT as EnvironmentName) || (process.env.NODE_ENV === 'development' ? 'local' : 'production')

// Set up environment convenience variables
const isLocal = environment === 'local'
const isStudio = environment === 'studio'
const isProduction = environment === 'production'

const useNuxtHub = isStudio

const baseUrl = process.env.NUXT_PUBLIC_BASE_URL || '/'

// eslint-disable-next-line no-console
console.table({
  'Environment': environment,
  'NuxtHub': useNuxtHub ? 'enabled' : 'disabled',
  'Studio': isStudio ? 'yes' : 'no',
  'Production': isProduction ? 'yes' : 'no',
  'Local': isLocal ? 'yes' : 'no',
  'Base URL': baseUrl,
})

export default {
  useNuxtHub,
  environment: {
    name: environment,
    isLocal,
    isStudio,
    isProduction,
  },
  baseUrl,
}

export function getSiteUrl(environment: EnvironmentName) {
  switch (environment) {
    case 'production':
      return 'https://nimiq.com'
    case 'studio':
      return 'https://studio.nimiq.dev'
    default:
      return ''
  }
}
