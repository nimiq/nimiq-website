export default defineEventHandler(async (event) => {
  const posts = await queryCollection(event, 'blog').order('publishedAt', 'DESC').limit(50).all()
  return posts
})
