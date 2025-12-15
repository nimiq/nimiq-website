export default defineEventHandler(async () => {
  const posts = await queryCollection('blog').order('publishedAt', 'DESC').limit(50).all()
  return posts
})
