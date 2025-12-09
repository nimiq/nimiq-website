import type { Feed } from 'nuxt-module-feed'

export default defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook('feed:generate', async ({ feed, options }) => {
    switch (options.path) {
      case '/feed.xml': {
        await createFeed(feed)
        break
      }
    }
  })

  async function createFeed(feed: Feed) {
    feed.options = {
      id: 'Nimiq Blog',
      title: 'Nimiq Blog',
      copyright: 'Nimiq',
    }

    // TODO: Re-implement once blog is migrated to Nuxt Content
    // const blogPosts = await queryCollection('blog').all()
    // blogPosts.forEach((post) => {
    //   feed.addItem({ ... })
    // })

    feed.addContributor({
      name: 'Nimiq Team',
      link: 'https://nimiq.com/',
    })
  }
})
