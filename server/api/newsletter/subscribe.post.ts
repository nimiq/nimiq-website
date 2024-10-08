import { array, literal, object, safeParse, string, enum as vEnum } from 'valibot'
import { getZohoAccessToken, NewsletterProducts } from '../../utils/newsletter'

// { "email": "test@test.com","communicationPermission": true,"interests": [], "products": []}
const NewsletterSignupSchema = object({
  email: string(),
  communicationPermission: literal(true),
  topics: array(vEnum(NewsletterTopics)),
  products: array(vEnum(NewsletterProducts)),
})

export default defineEventHandler(async (event) => {
  const { output: body, issues: bodyIssues } = await readValidatedBody(event, body => safeParse(NewsletterSignupSchema, body))
  if (bodyIssues)
    throw createError({ statusCode: 400, statusMessage: 'Invalid newsletter signup data', message: JSON.stringify(bodyIssues) })

  // await getZohoTokens()

  const { communicationPermission, email, products, topics } = body

  const { access_token, domain, listkey } = await getZohoAccessToken()
  const headers = { Authorization: `Zoho-oauthtoken ${access_token}` }

  // Create contact - https://www.zoho.com/contacts/api/add-contact.html
  const payload = { 'Contact Email': email, 'Topics': topics.join(';'), 'Products': products.join(';'), 'Consent': communicationPermission }
  const url = `https://campaigns.zoho.${domain}/api/v1.1/json/listsubscribe`
  const res = await $fetch(url, { method: 'POST', headers, query: { listkey, resfmt: 'JSON', source: 'Nimiq-Website', contactinfo: payload } })
  return res
})
