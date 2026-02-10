import { existsSync, readFileSync } from 'node:fs'
import process from 'node:process'

const PRISMIC_API = 'https://nimiq.cdn.prismic.io/api/v2'

interface Slice {
  slice_type?: string
  primary?: {
    video?: { url?: string | null } | null
  } | null
}

function getToken() {
  return (
    process.env.PRISMIC_ACCESS_TOKEN
    || process.env.PRISMIC_TOKEN
    || readTokenFromDotEnv(process.cwd())
    || ''
  )
}

function readTokenFromDotEnv(cwd: string) {
  const envPath = `${cwd}/.env`
  if (!existsSync(envPath))
    return ''
  const content = readFileSync(envPath, 'utf-8')
  for (const line of content.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#'))
      continue
    const eq = trimmed.indexOf('=')
    if (eq === -1)
      continue
    const key = trimmed.slice(0, eq).trim()
    if (key !== 'PRISMIC_ACCESS_TOKEN' && key !== 'PRISMIC_TOKEN')
      continue
    return trimmed.slice(eq + 1).trim()
  }
  return ''
}

function parseArgs(argv: string[]) {
  const args = new Map<string, string>()
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]!
    if (a.startsWith('--') && a.includes('=')) {
      const [k, v] = a.split('=', 2) as [string, string]
      args.set(k, v)
      continue
    }
    if (a.startsWith('--')) {
      const k = a
      const v = argv[i + 1]
      if (v && !v.startsWith('--')) {
        args.set(k, v)
        i++
      }
      else {
        args.set(k, 'true')
      }
    }
    else if (!args.has('_')) {
      args.set('_', a)
    }
  }
  return args
}

async function getMasterRef(token: string) {
  const url = `${PRISMIC_API}?access_token=${encodeURIComponent(token)}`
  const res = await fetch(url)
  if (!res.ok)
    throw new Error(`Failed to fetch Prismic refs: HTTP ${res.status}`)
  const json = await res.json() as any
  const master = (json.refs || []).find((r: any) => r.id === 'master')?.ref
  if (!master)
    throw new Error('Failed to find Prismic master ref')
  return master as string
}

async function fetchBlogPostByUid(token: string, ref: string, uid: string) {
  const url = new URL(`${PRISMIC_API}/documents/search`)
  url.searchParams.set('ref', ref)
  url.searchParams.set('access_token', token)
  url.searchParams.set('q', `[[at(my.blog_page.uid,"${uid}")]]`)
  url.searchParams.set('pageSize', '1')
  const res = await fetch(url)
  if (!res.ok)
    throw new Error(`Failed to fetch blog_page "${uid}": HTTP ${res.status}`)
  const json = await res.json() as any
  return json.results?.[0] as any | null
}

async function fetchAllBlogPosts(token: string, ref: string) {
  const all: any[] = []
  for (let page = 1; ; page++) {
    const url = new URL(`${PRISMIC_API}/documents/search`)
    url.searchParams.set('ref', ref)
    url.searchParams.set('access_token', token)
    url.searchParams.set('q', '[[at(document.type,"blog_page")]]')
    url.searchParams.set('pageSize', '100')
    url.searchParams.set('page', String(page))
    const res = await fetch(url)
    if (!res.ok)
      throw new Error(`Failed to fetch blog_page list: HTTP ${res.status}`)
    const json = await res.json() as any
    all.push(...(json.results || []))
    if (!json.next_page)
      break
  }
  return all
}

function findMissingVideoUrls(uid: string, body: Slice[]) {
  const issues: string[] = []
  body
    .filter(s => s?.slice_type === 'blog_video')
    .forEach((s, idx) => {
      const url = s?.primary?.video && 'url' in s.primary.video ? (s.primary.video as any).url : undefined
      if (!url)
        issues.push(`${uid}: blog_video slice missing primary.video.url (index ${idx})`)
    })
  return issues
}

async function main() {
  const token = getToken()
  if (!token) {
    console.error('Missing PRISMIC_ACCESS_TOKEN (or PRISMIC_TOKEN) in environment.')
    process.exit(2)
  }

  const args = parseArgs(process.argv.slice(2))
  const uid = args.get('--uid') || args.get('_') || ''
  const mode = (args.get('--mode') || 'strict').toLowerCase()
  const strict = mode !== 'warn'

  const ref = await getMasterRef(token)

  const issues: string[] = []

  if (uid) {
    const doc = await fetchBlogPostByUid(token, ref, uid)
    if (!doc) {
      console.error(`Not found: blog_page uid="${uid}"`)
      process.exit(2)
    }
    const body = (doc.data?.body || []) as Slice[]
    issues.push(...findMissingVideoUrls(uid, body))
  }
  else {
    const docs = await fetchAllBlogPosts(token, ref)
    for (const doc of docs) {
      const dUid = String(doc.uid || '')
      const body = (doc.data?.body || []) as Slice[]
      issues.push(...findMissingVideoUrls(dUid, body))
    }
  }

  if (issues.length === 0) {
    console.log('OK: all blog_video slices have a primary.video.url')
    return
  }

  const prefix = strict ? 'ERROR' : 'WARN'
  for (const i of issues) {
    const out = `${prefix}: ${i}`
    if (strict)
      console.error(out)
    else
      console.log(out)
  }

  if (strict)
    process.exit(1)
  else
    console.log(`WARN: found ${issues.length} issue(s)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
