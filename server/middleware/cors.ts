export default defineEventHandler((event) => {
  const { allowedOrigins } = useRuntimeConfig().cors
  const origin = getHeader(event, 'Origin') || ''

  if (!allowedOrigins.includes(origin))
    return

  setResponseHeaders(event, {
    'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Expose-Headers': '*',
  })

  if (event.method === 'OPTIONS') {
    event.node.res.statusMessage = 'No Content.'
    return 'OK'
  }
})
