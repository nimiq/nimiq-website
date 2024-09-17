import { array, literal, number, object, safeParse, string } from 'valibot'

// { "email": "test@test.com","communicationPermission": true,"interests": [], "products": []}
const NewsletterSignupSchema = object({
  email: string(),
  communicationPermission: literal(true),
  interests: array(string()),
  products: array(string()),
})

const TokenCreationSchema = object({
  access_token: string(),
  scope: string(),
  api_domain: string(),
  token_type: string(),
  expires_in: number(),
})

export default defineEventHandler(async (event) => {
  const { output: body, issues: bodyIssues } = await readValidatedBody(event, body => safeParse(NewsletterSignupSchema, body))
  if (bodyIssues)
    throw createError({ statusCode: 400, statusMessage: 'Invalid newsletter signup data', message: JSON.stringify(bodyIssues) })

  // Get Zoho token
  const { clientId: client_id, clientSecret: client_secret, requestUrl, scope } = useRuntimeConfig().zoho
  const grant_type = 'client_credentials'
  const res = await $fetch(requestUrl, { method: 'POST', query: { grant_type, client_id, client_secret, scope } })
  if (!res)
    throw createError({ statusCode: 500, statusMessage: 'Zoho token creation failed', message: 'No response' })

  // Check if token creation was successful
  const { output: token, issues: tokenIssues } = safeParse(TokenCreationSchema, res)
  if (tokenIssues)
    throw createError({ statusCode: 400, statusMessage: 'Invalid token data', message: JSON.stringify(tokenIssues) })

  // Create contact
  const payload = { contacts: { emails: [{ email_id: body.email }] } }
  const headers = { Authorization: `${token.token_type} ${token.access_token}` }
  const domain = token.api_domain.split('.').at(-1)
  const contactUrl = `https://contacts.zoho.${domain}/api/v1/accounts/self/contacts`
  const createContactRes = await $fetch(contactUrl, { method: 'POST', headers, body: payload, query: { source: 'Nimiq-Website' } })

  return createContactRes
})
