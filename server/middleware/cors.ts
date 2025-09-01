export default defineEventHandler(async (event) => {
  // Only handle API routes
  if (!event.node.req.url?.startsWith('/api/')) {
    return
  }

  const { allowedOrigins } = useRuntimeConfig().cors
  const origin = getHeader(event, 'origin')

  // Check if origin is allowed
  if (origin && allowedOrigins.includes(origin)) {
    setHeader(event, 'Access-Control-Allow-Origin', origin)
    setHeader(event, 'Access-Control-Allow-Credentials', 'true')
  }

  // Handle preflight OPTIONS requests
  if (getMethod(event) === 'OPTIONS') {
    setHeader(event, 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type, Authorization')
    setHeader(event, 'Access-Control-Max-Age', '86400')
    return new Response(null, { status: 204 })
  }
})
