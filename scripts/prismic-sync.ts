import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
/**
 * Prismic Sync Script
 * Fetches all documents from Prismic API and saves as raw JSON
 * Run: nr prismic:sync
 */
import process from 'node:process'
import { consola } from 'consola'

const PRISMIC_API = 'https://nimiq.cdn.prismic.io/api/v2'
const PRISMIC_TOKEN = process.env.PRISMIC_ACCESS_TOKEN

// Document types to sync
const DOCUMENT_TYPES = ['blog_page', 'page', 'exchange']

interface PrismicDocument {
  id: string
  uid: string
  type: string
  [key: string]: any
}

interface PrismicResponse {
  results: PrismicDocument[]
  next_page: string | null
}

let masterRef: string

async function getMasterRef(): Promise<string> {
  if (masterRef)
    return masterRef

  const url = `${PRISMIC_API}?access_token=${PRISMIC_TOKEN}`
  const response = await fetch(url)
  const data = await response.json()
  masterRef = data.refs.find((ref: any) => ref.id === 'master')?.ref || ''
  return masterRef
}

async function fetchDocumentType(type: string): Promise<PrismicDocument[]> {
  const ref = await getMasterRef()
  const allDocs: PrismicDocument[] = []
  let page = 1

  consola.start(`Fetching ${type}...`)

  while (true) {
    const url = new URL(`${PRISMIC_API}/documents/search`)
    url.searchParams.set('q', `[[at(document.type,"${type}")]]`)
    url.searchParams.set('pageSize', '100')
    url.searchParams.set('page', page.toString())
    url.searchParams.set('ref', ref)
    url.searchParams.set('access_token', PRISMIC_TOKEN!)

    const response = await fetch(url.href)
    const data: PrismicResponse = await response.json()
    allDocs.push(...data.results)

    if (!data.next_page)
      break
    page++
  }

  consola.success(`Fetched ${allDocs.length} ${type} documents`)
  return allDocs
}

async function saveDocuments(type: string, docs: PrismicDocument[]) {
  const baseDir = join(process.cwd(), 'scripts', 'prismic-data', type)
  await mkdir(baseDir, { recursive: true })

  for (const doc of docs) {
    const filename = `${doc.uid || doc.id}.json`
    const filepath = join(baseDir, filename)
    await writeFile(filepath, JSON.stringify(doc, null, 2))
  }

  consola.info(`Saved to scripts/prismic-data/${type}/`)
}

async function main() {
  if (!PRISMIC_TOKEN) {
    consola.error('PRISMIC_ACCESS_TOKEN not found in environment')
    process.exit(1)
  }

  consola.info('Starting Prismic sync...')

  let totalDocs = 0
  for (const type of DOCUMENT_TYPES) {
    const docs = await fetchDocumentType(type)
    await saveDocuments(type, docs)
    totalDocs += docs.length
  }

  consola.success(`Sync complete! ${totalDocs} documents saved to scripts/prismic-data/`)
}

main().catch((error) => {
  consola.error('Sync failed:', error)
  process.exit(1)
})
