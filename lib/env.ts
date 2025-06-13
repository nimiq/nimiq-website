import type { InferOutput } from 'valibot'
import process from 'node:process'
import { consola } from 'consola'
import { $fetch } from 'ofetch'
import { literal, union } from 'valibot'
import { repositoryName } from '../slicemachine.config.json'

// Define environment type
export const environmentSchema = union([
  literal('local'),
  literal('production'),
  literal('github-pages'),
  literal('nuxthub-production'),
  literal('nuxthub-preview'),
  literal('internal-static'),
  literal('internal-static-drafts'),
])

export type EnvironmentName = InferOutput<typeof environmentSchema>

// Get environment from process.env or default to production
const environment: EnvironmentName = (process.env.NUXT_ENVIRONMENT as EnvironmentName) || (process.env.NODE_ENV === 'development' ? 'local' : 'production')

// Set up environment convenience variables
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

consola.info(`Running in ${environment} environment and drafts are ${showDrafts ? 'enabled' : 'disabled'}`)

export default {
  showDrafts,
  checkInternetConnection,
  useNuxtHub,
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
