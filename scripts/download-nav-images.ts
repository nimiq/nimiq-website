import { Buffer } from 'node:buffer'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'

interface AppLink {
  logo: { url: string }
  visual: { url: string }
  label: string
}

const NAV_DATA = JSON.parse(readFileSync('scripts/prismic-data/navigation.json', 'utf-8'))
const appsLinks: AppLink[] = NAV_DATA[0].data.appsLinks

function getExt(url: string): string {
  const match = url.match(/\.(svg|jpg|jpeg|png|webp)/)
  return match ? match[1] : 'png'
}

const slugs = ['wallet', 'multisig', 'cpl', 'cryptomap', 'nimiqpay', 'allapps']

const downloads = appsLinks.flatMap((app, i) => {
  const slug = slugs[i]
  return [
    { url: app.logo.url, path: `public/img/nav/${slug}-logo.${getExt(app.logo.url)}` },
    { url: app.visual.url, path: `public/img/nav/${slug}-preview.${getExt(app.visual.url)}` },
  ]
})

mkdirSync('public/img/nav', { recursive: true })

for (const { url, path } of downloads) {
  console.log(`Downloading: ${path}`)
  const res = await fetch(url)
  if (!res.ok) {
    console.error(`Failed to download ${url}: ${res.status}`)
    continue
  }
  const buf = Buffer.from(await res.arrayBuffer())
  writeFileSync(path, buf)
  console.log(`  ✓ Saved: ${path} (${buf.length} bytes)`)
}

console.log('\nDone! Downloaded', downloads.length, 'files')
