import { object, picklist, safeParse } from 'valibot'
import { fetchPricesLast5Years } from '~~/shared/utils/nim-price'

const PeriodParamsSchema = object({
  period: picklist(['1y', '2y', '5y']),
})

export default defineCachedEventHandler(async (event) => {
  const { output: body, issues: bodyIssues } = await readValidatedBody(event, body => safeParse(PeriodParamsSchema, body))
  if (bodyIssues)
    throw createError({ statusCode: 400, statusMessage: 'Invalid period', message: JSON.stringify(bodyIssues) })

  const rates = await fetchPricesLast5Years(body.period)
  return rates
}, {
  maxAge: 60 * 60 * 24, // 1 day
})
