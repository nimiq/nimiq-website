import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import process from 'node:process'

const require = createRequire(import.meta.url)

let pkgPath
try {
  pkgPath = require.resolve('@resvg/resvg-js/package.json')
}
catch {
  process.exit(0)
}

const resvgScopeDir = path.dirname(path.dirname(pkgPath))

let entries
try {
  entries = fs.readdirSync(resvgScopeDir)
}
catch {
  process.exit(0)
}

for (const entry of entries) {
  const entryPath = path.join(resvgScopeDir, entry)
  let st
  try {
    st = fs.lstatSync(entryPath)
  }
  catch {
    continue
  }

  if (!st.isSymbolicLink())
    continue

  const linkTarget = fs.readlinkSync(entryPath)
  const absTarget = path.resolve(resvgScopeDir, linkTarget)

  if (!fs.existsSync(absTarget))
    fs.unlinkSync(entryPath)
}
