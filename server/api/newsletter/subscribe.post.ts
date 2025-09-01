import { array, literal, object, pipe, safeParse, string, transform, union, enum as vEnum } from 'valibot'
import { getZohoAccessToken, NewsletterProducts, NewsletterTopics } from '../../utils/newsletter'

const NewsletterSignupSchema = object({
  email: string(),
  communicationPermission: pipe(
    union([literal(true), string()]),
    transform(v => v === true || (typeof v === 'string' && v.toLowerCase() === 'true')),
    literal(true),
  ),
  topics: pipe(
    union([array(vEnum(NewsletterTopics)), string()]),
    transform(v => Array.isArray(v) ? v : (v ? (v as string).split(',').filter(Boolean) : [])),
    array(vEnum(NewsletterTopics)),
  ),
  products: pipe(
    union([array(vEnum(NewsletterProducts)), string()]),
    transform(v => Array.isArray(v) ? v : (v ? (v as string).split(',').filter(Boolean) : [])),
    array(vEnum(NewsletterProducts)),
  ),
})

export default defineEventHandler(async (event) => {
  const { output: body, issues: bodyIssues } = await readValidatedBody(event, b => safeParse(NewsletterSignupSchema, b))
  if (bodyIssues)
    throw createError({ statusCode: 400, statusMessage: 'Invalid newsletter signup data', message: JSON.stringify(bodyIssues) })

  const { communicationPermission, email, products, topics } = body

  const { access_token, domain, listkey } = await getZohoAccessToken()
  const headers = { Authorization: `Zoho-oauthtoken ${access_token}` }

  // Create contact - https://www.zoho.com/contacts/api/add-contact.html
  const payload = { 'Contact Email': email, 'Topics': topics.join(';'), 'Products': products.join(';'), 'Consent': communicationPermission }
  const url = `https://campaigns.zoho.${domain}/api/v1.1/json/listsubscribe`
  const res = await $fetch(url, { method: 'POST', headers, query: { listkey, resfmt: 'JSON', source: 'Nimiq-Website', contactinfo: payload } })
  return res
})
