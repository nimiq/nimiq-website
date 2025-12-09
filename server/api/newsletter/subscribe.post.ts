import { array, literal, number, object, pipe, safeParse, string, transform, union, enum as vEnum } from 'valibot'

enum NewsletterTopics { Education = 'Education', Community = 'Community', ConsumerTech = 'Consumer Tech', BusinessTech = 'Business Tech', BlockchainTech = 'Blockchain Tech' }
enum NewsletterProducts { NimiqWallet = 'Nimiq Wallet', SuperSimpleSwap = 'SuperSimpleSwap', CryptopaymentLink = 'Cryptopayment.link', NimiqPay = 'Nimiq Pay' }

const NewsletterSignupSchema = object({
  email: string(),
  communicationPermission: pipe(union([literal(true), string()]), transform(v => v === true || (typeof v === 'string' && v.toLowerCase() === 'true')), literal(true)),
  topics: pipe(union([array(vEnum(NewsletterTopics)), string()]), transform(v => Array.isArray(v) ? v : (v ? (v as string).split(',').filter(Boolean) : [])), array(vEnum(NewsletterTopics))),
  products: pipe(union([array(vEnum(NewsletterProducts)), string()]), transform(v => Array.isArray(v) ? v : (v ? (v as string).split(',').filter(Boolean) : [])), array(vEnum(NewsletterProducts))),
})

const TokenSchema = object({ access_token: string(), scope: string(), api_domain: string(), token_type: string(), expires_in: number() })

async function getZohoAccessToken() {
  const { clientId, clientSecret, requestUrl, refreshToken, listkey } = useRuntimeConfig().zoho
  const formData = new FormData()
  formData.append('client_id', clientId)
  formData.append('client_secret', clientSecret)
  formData.append('grant_type', 'refresh_token')
  formData.append('refresh_token', refreshToken)

  const res = await $fetch(requestUrl, { method: 'POST', body: formData })
  if (!res)
    throw createError({ statusCode: 500, statusMessage: 'Zoho token creation failed' })

  const { output: token, issues } = safeParse(TokenSchema, res)
  if (issues)
    throw createError({ statusCode: 400, statusMessage: 'Invalid token data', message: JSON.stringify(issues) })

  return { ...token, domain: token.api_domain.split('.').at(-1), listkey }
}

export default defineEventHandler(async (event) => {
  const { output: body, issues: bodyIssues } = await readValidatedBody(event, b => safeParse(NewsletterSignupSchema, b))
  if (bodyIssues)
    throw createError({ statusCode: 400, statusMessage: 'Invalid newsletter signup data', message: JSON.stringify(bodyIssues) })

  const { communicationPermission, email, products, topics } = body
  const { access_token, domain, listkey } = await getZohoAccessToken()
  const payload = { 'Contact Email': email, 'Topics': topics.join(';'), 'Products': products.join(';'), 'Consent': communicationPermission }
  return $fetch(`https://campaigns.zoho.${domain}/api/v1.1/json/listsubscribe`, {
    method: 'POST',
    headers: { Authorization: `Zoho-oauthtoken ${access_token}` },
    query: { listkey, resfmt: 'JSON', source: 'Nimiq-Website', contactinfo: payload },
  })
})
