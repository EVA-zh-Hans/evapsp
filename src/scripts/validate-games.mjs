import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'data', 'games.json')
const games = JSON.parse(readFileSync(dataPath, 'utf8'))

const STATUSES = ['done', 'working', 'planned', 'not-planned']
const errors = []
const seenSlugs = new Set()
const seenIds = new Set()

for (const g of games) {
  for (const field of ['id', 'slug', 'status', 'nameJa', 'nameZh', 'nameEn', 'serials']) {
    if (g[field] === undefined || g[field] === null || g[field] === '') {
      errors.push(`[${g.id ?? g.slug ?? '?'}] missing required field: ${field}`)
    }
  }
  if (g.status && !STATUSES.includes(g.status)) {
    errors.push(`[${g.id}] invalid status: ${g.status}`)
  }
  if (g.id) {
    if (seenIds.has(g.id)) errors.push(`duplicate id: ${g.id}`)
    seenIds.add(g.id)
  }
  if (g.slug) {
    if (!/^[a-z0-9-]+$/.test(g.slug)) {
      errors.push(`[${g.id}] slug must be lowercase alphanumeric + hyphens: ${g.slug}`)
    }
    if (seenSlugs.has(g.slug)) errors.push(`duplicate slug: ${g.slug}`)
    seenSlugs.add(g.slug)
  }
  if (!Array.isArray(g.serials) || g.serials.some((s) => typeof s !== 'string' || !s)) {
    errors.push(`[${g.id}] serials must be a non-empty array of strings`)
  }
  if (g.status === 'done' || g.status === 'working') {
    if (typeof g.repoUrl !== 'string' || !/^https:\/\//.test(g.repoUrl)) {
      errors.push(`[${g.id}] done/working games require an https repoUrl`)
    }
    if (!Array.isArray(g.releases) || g.releases.length === 0) {
      errors.push(`[${g.id}] done/working games require at least one release`)
    } else {
      for (const r of g.releases) {
        for (const f of ['version', 'file', 'url']) {
          if (typeof r[f] !== 'string' || !r[f]) {
            errors.push(`[${g.id}] release missing field: ${f}`)
          }
        }
        if (r.url && !/^https:\/\//.test(r.url)) {
          errors.push(`[${g.id}] release url must be https: ${r.url}`)
        }
      }
    }
  }
}

if (errors.length) {
  console.error(`games.json validation failed (${errors.length}):`)
  for (const e of errors) console.error(`  - ${e}`)
  process.exit(1)
}
console.log(`games.json OK: ${games.length} games`)
