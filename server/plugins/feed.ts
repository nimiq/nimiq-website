import type { Feed } from 'nuxt-module-feed'
import { getPrismicData } from '../../shared/services/prismic-data'
import { getBlogMetadata } from '../../shared/utils/blog-post'

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

    const { prismicAccessToken } = useRuntimeConfig()

    const data = await getPrismicData({ prismicAccessToken, showDrafts: false })
    data.blogPosts.forEach((post) => {
      const { titleText: title, url, abstract: description, prose: content, date, imageURL: image, authors } = getBlogMetadata(post)
      feed.addItem({ date, description, title, link: url, content, image, author: authors?.map(author => ({ name: author })) })
    })

    // feed.addCategory('Nimiq')

    feed.addContributor({
      name: 'Nimiq Team',
      link: 'https://nimiq.com/',
    })
  }
})
