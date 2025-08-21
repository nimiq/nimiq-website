/**
 * Prismic API helpers for document fetching
 * Extracted from the main prismic-images utils for use by crawler
 */
import { filter } from '@prismicio/client'
import { $fetch } from 'ofetch'
import { repositoryName } from '~~/slicemachine.config.json'

let masterRef: string

export async function fetchDocuments<T>(
  documentType: string,
  prismicAccessToken: string,
  showDrafts = false,
): Promise<T[]> {
  const url = await buildPrismicUrl(documentType, prismicAccessToken, showDrafts)
  const allDocs: T[] = []
  let page = 1

  while (true) {
    url.searchParams.set('page', page.toString())
    const response = await $fetch<{ results: T[], next_page: string | null }>(url.href)
    allDocs.push(...response.results)

    if (!response.next_page)
      break
    page++
  }

  return allDocs
}

async function buildPrismicUrl(
  documentType: string,
  prismicAccessToken: string,
  showDrafts = false,
): Promise<URL> {
  if (!masterRef) {
    const refsUrl = `https://${repositoryName}.cdn.prismic.io/api/v2?access_token=${prismicAccessToken}`
    const response = await $fetch<{ refs: { id: string, ref: string }[] }>(refsUrl)
    masterRef = response.refs.find(ref => ref.id === 'master')?.ref || ''
  }

  const url = new URL(`https://${repositoryName}.cdn.prismic.io/api/v2/documents/search`)

  let query = `[at(document.type,"${documentType}")]`
  if (!showDrafts && ['page', 'blog_page'].includes(documentType)) {
    query += filter.not(`my.${documentType}.draft`, true)
  }

  url.searchParams.set('q', `[${query}]`)
  url.searchParams.set('pageSize', '100')
  url.searchParams.set('ref', masterRef)
  url.searchParams.set('access_token', prismicAccessToken)

  return url
}
