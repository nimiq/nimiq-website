import type { InferOutput } from 'valibot'
import process from 'node:process'
import { $fetch } from 'ofetch'
import { literal, parse, union } from 'valibot'
import { repositoryName } from '../slicemachine.config.json'

if (import.meta.client || 'window' in globalThis)
  throw new Error('env.ts should not be imported on the client side')

// Define environment type
export const environmentSchema = union([
  literal('local'),
  literal('production'),
  literal('github-pages'),
  literal('nuxthub-production'),
  literal('nuxthub-preview'),
  literal('internal-static'),
  literal('internal-static-drafts'),
  literal('internal-dynamic'),
])

export type EnvironmentName = InferOutput<typeof environmentSchema>

// Define site environment schema
export const siteEnvironmentSchema = union([
  literal('preview'),
  literal('production'),
])

export type SiteEnvironmentName = InferOutput<typeof siteEnvironmentSchema>

// Get environment from process.env or default to production
const environment: EnvironmentName = (process.env.NUXT_ENVIRONMENT as EnvironmentName) || (process.env.NODE_ENV === 'development' ? 'local' : 'production')

// Set up environment convenience variables
const isLocal = environment === 'local'
const isNuxthubPreview = environment === 'nuxthub-preview'
const isNuxthubProduction = environment === 'nuxthub-production'
const isGitHubPages = environment === 'github-pages'
const isInternalStatic = environment === 'internal-static'
const isInternalDrafts = environment === 'internal-static-drafts'
const isInternalDynamic = environment === 'internal-dynamic'
const isProduction = environment === 'production'

const showDrafts = isLocal || isInternalDrafts
const useNuxtHub = isNuxthubPreview || isNuxthubProduction

// Enable/disable Prismic SSR based on environment
// See README.md "Prismic SSR Configuration" for details
const enablePrismicSSR = isInternalDynamic || isLocal

// Validate NUXT_SITE_ENV
const siteEnv = process.env.NUXT_SITE_ENV as SiteEnvironmentName
if (siteEnv) {
  try {
    // Parse and validate the site environment value
    parse(siteEnvironmentSchema, siteEnv)
  }
  catch (error) {
    if (error instanceof Error) {
      throw new TypeError(`Invalid NUXT_SITE_ENV: ${error.message}`)
    }
    throw error
  }
}

// GitHub Pages requires a specific base URL
if (isGitHubPages)
  process.env.NUXT_APP_BASE_URL = '/nimiq-website/'

// Function to check internet connection by trying to fetch the Prismic home page
async function checkInternetConnection(): Promise<boolean> {
  try {
    if (!process.env.PRISMIC_ACCESS_TOKEN)
      throw new Error('PRISMIC_ACCESS_TOKEN is required for internet connection check')

    // Build the Prismic URL to fetch the home page
    const prismicUrl = new URL(`https://${repositoryName}.cdn.prismic.io`)
    const refsUrl = new URL('/api/v2', prismicUrl)
    refsUrl.searchParams.set('access_token', process.env.PRISMIC_ACCESS_TOKEN)

    // Attempt to fetch data from Prismic
    await $fetch(refsUrl.href, { timeout: 5000 })
    return true
  }
  catch (error) {
    console.error('Internet connection check failed:', error)
    return false
  }
}

const baseUrl = process.env.NUXT_PUBLIC_BASE_URL || '/'

// eslint-disable-next-line no-console
console.table({
  'Environment': environment,
  'Site Environment': siteEnv || 'not set',
  'Drafts': showDrafts ? 'enabled' : 'disabled',
  'NuxtHub': useNuxtHub ? 'enabled' : 'disabled',
  'GitHub Pages': isGitHubPages ? 'yes' : 'no',
  'Production': isProduction ? 'yes' : 'no',
  'Local': isLocal ? 'yes' : 'no',
  'Prismic SSR': enablePrismicSSR ? 'enabled' : 'disabled',
  'Base URL': baseUrl,
})

export default {
  showDrafts,
  enablePrismicSSR,
  checkInternetConnection,
  useNuxtHub,
  siteEnv,
  environment: {
    name: environment,
    isLocal,
    isGitHubPages,
    isNuxthubPreview,
    isNuxthubProduction,
    isInternalStatic,
    isInternalDrafts,
    isProduction,
    isInternalDynamic,
  },
  baseUrl,
}

export function getSiteUrl(environment: EnvironmentName) {
  switch (environment) {
    case 'github-pages':
      return 'https://nimiq.github.io'
    case 'production':
      return 'https://nimiq.com'
    default:
      return ''
  }
}
