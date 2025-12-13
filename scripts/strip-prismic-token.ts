/**
 * Post-build script to strip Prismic access token from client bundles.
 * The token is needed at build time for prerendering but should not be exposed in production.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import process from 'node:process'
import consola from 'consola'
import { glob } from 'tinyglobby'

// Match any Prismic access token pattern (MC5 followed by base64-ish characters)
const PRISMIC_TOKEN_PATTERN = /MC5[\w-]{10,}\.[\w+\-]{30,}/g

const OUTPUT_DIR = '.output/public'

async function stripTokens() {
  consola.start('Stripping Prismic access tokens from build output...')

  const files = await glob([`${OUTPUT_DIR}/**/*.js`, `${OUTPUT_DIR}/**/*.html`])
  let filesModified = 0
  let totalReplacements = 0

  for (const file of files) {
    const content = readFileSync(file, 'utf-8')
    const matches = content.match(PRISMIC_TOKEN_PATTERN)
    if (matches && matches.length > 0) {
      const newContent = content.replace(PRISMIC_TOKEN_PATTERN, 'REDACTED_BUILD_TIME_ONLY')
      writeFileSync(file, newContent)
      filesModified++
      totalReplacements += matches.length
      consola.info(`  Stripped ${matches.length} token(s) from: ${file}`)
    }
  }

  if (filesModified > 0) {
    consola.success(`Stripped ${totalReplacements} token occurrence(s) from ${filesModified} file(s)`)
  }
  else {
    consola.warn('No Prismic tokens found in build output')
  }
}

stripTokens().catch((err) => {
  consola.error('Failed to strip tokens:', err)
  process.exit(1)
})
