import type { Feed } from 'nuxt-module-feed'

interface BlogPost { title: string, description: string, slug: string, publishedAt: string, authors: string[], image?: string }

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('feed:generate', async ({ feed, options }: { feed: Feed, options: { path: string } }) => {
    if (options.path !== '/feed.xml')
      return

    feed.options = {
      id: 'Nimiq Blog',
      title: 'Nimiq Blog',
      copyright: 'Nimiq',
      link: 'https://nimiq.com/blog',
      description: 'Latest news and updates from Nimiq',
    }

    const posts = await $fetch<BlogPost[]>('/api/blog-posts').catch(() => [])

    for (const post of posts) {
      feed.addItem({
        title: post.title,
        link: `https://nimiq.com/blog/${post.slug}`,
        description: post.description,
        date: new Date(post.publishedAt),
        image: post.image,
        author: post.authors?.map(author => ({ name: author })),
      })
    }

    feed.addContributor({ name: 'Nimiq Team', link: 'https://nimiq.com/' })
  })
})
