import type { InferOutput } from 'valibot'
import process from 'node:process'
import { consola } from 'consola'
import { $fetch } from 'ofetch'
import { literal, object, optional, safeParse, string, union } from 'valibot'
import { repositoryName } from '../slicemachine.config.json'

// Define environment type
const environmentSchema = union([
  literal('local'),
  literal('production'),
  literal('github-pages'),
  literal('nuxthub-production'),
  literal('nuxthub-preview'),
  literal('internal-static'),
  literal('internal-static-drafts'),
])

export type EnvironmentName = InferOutput<typeof environmentSchema>

// Define the schema for environment variables
const envSchema = object({
  // Required variables
  PRISMIC_ACCESS_TOKEN: string(),

  // Optional variables with defaults
  NUXT_ENVIRONMENT: optional(environmentSchema, process.env.NODE_ENV === 'development' ? 'local' : 'production'),

  // API endpoints
  NUXT_PUBLIC_API_ENDPOINT: optional(string()),
  NUXT_PUBLIC_VALIDATORS_API: optional(string()),

  // Albatross settings
  NUXT_ALBATROSS_NODE_RPC_URL: optional(string()),
  NUXT_ALBATROSS_LIVEVIEW_PRIVATE_KEY: optional(string()),
  NUXT_ALBATROSS_LIVEVIEW_TX_RECIPIENT: optional(string()),
  NUXT_ALBATROSS_LIVEVIEW_TX_VALUE: optional(string()),
  NUXT_ALBATROSS_LIVEVIEW_TX_FEE: optional(string()),

  // Supabase settings
  NUXT_PUBLIC_SUPABASE_URL: optional(string()),
  NUXT_PUBLIC_SUPABASE_KEY: optional(string()),

  // Zoho settings
  NUXT_ZOHO_REQUEST_URL: optional(string()),
  NUXT_ZOHO_CLIENT_ID: optional(string()),
  NUXT_ZOHO_CLIENT_SECRET: optional(string()),
  NUXT_ZOHO_SCOPE: optional(string()),
  NUXT_ZOHO_CODE: optional(string()),
  NUXT_ZOHO_REFRESH_TOKEN: optional(string()),
  NUXT_ZOHO_LISTKEY: optional(string()),

  // NuxtHub settings
  NUXT_HUB_ENV: optional(string()),
  NUXT_HUB_PROJECT_KEY: optional(string()),

  // Site configuration
  NUXT_SITE_ENV: optional(string()),
  NIMIQ_STATIC_PREVIEW: optional(string()),
})

// Validate the environment variables
const result = safeParse(envSchema, process.env)

if (!result.success) {
  console.error('Environment validation failed:', result.issues)
  throw new Error(`Environment validation failed: ${result.issues.map(i => i.message).join(', ')}`)
}

// Set up environment convenience variables
const env = result.output
const environment: EnvironmentName = env.NUXT_ENVIRONMENT

const isLocal = environment === 'local'
const isNuxthubPreview = environment === 'nuxthub-preview'
const isNuxthubProduction = environment === 'nuxthub-production'
const isGitHubPages = environment === 'github-pages'
const isInternalStatic = environment === 'internal-static'
const isInternalDrafts = environment === 'internal-static-drafts'
const isProduction = environment === 'production'

const showDrafts = isLocal || isInternalDrafts || isNuxthubPreview || isNuxthubProduction || isGitHubPages
const useNuxtHub = isNuxthubPreview || isNuxthubProduction || isLocal

// GitHub Pages requires a specific base URL
if (isGitHubPages)
  process.env.NUXT_APP_BASE_URL = '/nimiq-website/'

// Function to check internet connection by trying to fetch the Prismic home page
async function checkInternetConnection(): Promise<boolean> {
  try {
    if (!env.PRISMIC_ACCESS_TOKEN) {
      throw new Error('PRISMIC_ACCESS_TOKEN is required for internet connection check')
    }

    // Build the Prismic URL to fetch the home page
    const prismicUrl = new URL(`https://${repositoryName}.cdn.prismic.io`)
    const refsUrl = new URL('/api/v2', prismicUrl)
    refsUrl.searchParams.set('access_token', env.PRISMIC_ACCESS_TOKEN)

    // Attempt to fetch data from Prismic
    await $fetch(refsUrl.href, { timeout: 5000 })
    return true
  }
  catch (error) {
    console.error('Internet connection check failed:', error)
    return false
  }
}

consola.info(`Running in ${environment} environment and drafts are ${showDrafts ? 'enabled' : 'disabled'}`)

export default {
  showDrafts,
  checkInternetConnection,
  useNuxtHub,
  prismicAccessToken: env.PRISMIC_ACCESS_TOKEN,
  environment: {
    name: environment,
    isLocal,
    isGitHubPages,
    isNuxthubPreview,
    isNuxthubProduction,
    isInternalStatic,
    isInternalDrafts,
    isProduction,
  },
}
