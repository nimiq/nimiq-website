import { number, object, safeParse, string } from 'valibot'

export enum NewsletterTopics {
  Education = 'Education',
  Community = 'Community',
  ConsumerTech = 'Consumer Tech',
  BusinessTech = 'Business Tech',
  BlockchainTech = 'Blockchain Tech',
}

export enum NewsletterProducts {
  NimiqWallet = 'Nimiq Wallet',
  SuperSimpleSwap = 'SuperSimpleSwap',
  CryptopaymentLink = 'Cryptopayment.link',
  NimiqPay = 'Nimiq Pay',
}

const TokenCreationSchema = object({
  access_token: string(),
  scope: string(),
  api_domain: string(),
  token_type: string(),
  expires_in: number(),
})

/**
 * Retrieves Zoho tokens from the runtime config and creates a new token using the provided code.
 * This is only used for the initial token creation, where you need to provide the code and you get the access token and refresh token.
 */
export async function getZohoTokens() {
  const { clientId: client_id, clientSecret: client_secret, requestUrl, scope, code } = useRuntimeConfig().zoho

  const formData = new FormData()
  formData.append('client_id', client_id)
  formData.append('client_secret', client_secret)
  formData.append('scope', scope)
  formData.append('grant_type', 'authorization_code')
  formData.append('code', code)

  const res = await $fetch(requestUrl, { method: 'POST', body: formData })
  if (!res)
    throw createError({ statusCode: 500, statusMessage: 'Zoho token creation failed', message: 'No response' })

  // Check if token creation was successful
  const { output: token, issues: tokenIssues } = safeParse(TokenCreationSchema, res)
  if (tokenIssues)
    throw createError({ statusCode: 400, statusMessage: 'Invalid token data', message: JSON.stringify(tokenIssues) })

  // eslint-disable-next-line no-console
  console.log(`Zoho token created. Save it in .env`, JSON.stringify(token))
}

export async function getZohoAccessToken() {
  const { clientId, clientSecret, requestUrl, refreshToken, listkey } = useRuntimeConfig().zoho

  const formData = new FormData()
  formData.append('client_id', clientId)
  formData.append('client_secret', clientSecret)
  formData.append('grant_type', 'refresh_token')
  formData.append('refresh_token', refreshToken)

  const res = await $fetch(requestUrl, { method: 'POST', body: formData })
  if (!res)
    throw createError({ statusCode: 500, statusMessage: 'Zoho token creation failed', message: 'No response' })

  // Check if token creation was successful
  const { output: token, issues: tokenIssues } = safeParse(TokenCreationSchema, res)
  if (tokenIssues)
    throw createError({ statusCode: 400, statusMessage: 'Invalid token data', message: JSON.stringify(tokenIssues) })

  const domain = token.api_domain.split('.').at(-1)

  return { ...token, domain, listkey }
}
