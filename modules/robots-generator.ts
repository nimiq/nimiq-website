import { defineNuxtModule } from '@nuxt/kit'
import { consola } from 'consola'
import environment from '../lib/env'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-robots-generator',
    configKey: 'robotsGenerator',
  },
  hooks: {
    'nitro:build:public-assets': async (nitro) => {
      const fs = await import('node:fs/promises')
      const path = await import('node:path')

      let robotsContent = ''

      if (environment.environment.isProduction) {
        // Production: Allow indexing with restrictions
        robotsContent = `# Nimiq Website - Production Environment
User-agent: *
Allow: /

# Disallow sensitive/technical paths
Disallow: /api/
Disallow: /_nuxt/
Disallow: /_ipx/
Disallow: /iframes/
Disallow: /*.json$

# Sitemap
Sitemap: https://nimiq.com/sitemap.xml

# Search engine specific rules
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Crawl delay for respectful crawling
Crawl-delay: 1`
      }
      else {
        // All deployments: Block everything
        robotsContent = `# Nimiq Website - Deployment/Preview Environment
# This is a deployment or preview environment - blocking all crawlers
# Environment: ${environment.environment.name}

User-agent: *
Disallow: /

# No sitemap for non-production environments`
      }

      // Write robots.txt to the public assets directory
      const publicDir = path.resolve(nitro.options.output.publicDir)
      const robotsPath = path.join(publicDir, 'robots.txt')

      await fs.writeFile(robotsPath, robotsContent, 'utf8')
      consola.success(`Generated robots.txt for environment: ${environment.environment.name}`)
    },
  },
})
