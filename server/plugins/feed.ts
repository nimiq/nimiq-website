import type { Feed } from 'nuxt-module-feed'
import { buildPrismicUrl, getBlogPosts } from '../../lib/crawler'

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

    const blogPostsUrl = await buildPrismicUrl('blog_page', { prismicAccessToken, showDrafts: false })
    const posts = await getBlogPosts(blogPostsUrl)
    posts.forEach(({ content, date, description, title, url, image, authors }) => {
      feed.addItem({ date, description, title, link: url, content, image, author: authors?.map(author => ({ name: author })) })
    })

    // feed.addCategory('Nimiq')

    feed.addContributor({
      name: 'Nimiq Team',
      link: 'https://nimiq.com/',
    })
  }
})
