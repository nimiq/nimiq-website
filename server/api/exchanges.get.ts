import type { ImageField } from '@prismicio/client'
import type { AllDocumentTypes } from '~~/prismicio-types'
import { createClient } from '@prismicio/client'
import { getLink } from '../../shared/utils/prismic'

export default cachedEventHandler(async () => {
  const clientConfig = useRuntimeConfig().public.prismic?.clientConfig
  if (!clientConfig)
    throw createError({ statusCode: 500, statusMessage: 'Prismic options not found' })
  const client = createClient<AllDocumentTypes>('nimiq', clientConfig)
  const data = await client.getAllByType('exchange', {
    orderings: [{
      field: 'last_publication_date',
      direction: 'desc',
    }],
    pageSize: 100,
  }).then(res => res.map(exchange => ({
    link: getLink(exchange.data.link),
    name: exchange.data.name,
    logo: exchange.data.logo satisfies ImageField,
  })))
  return data
}, {
  getKey: () => 'exchanges',
  maxAge: 60 * 60 * 6, // 24 hours
})
