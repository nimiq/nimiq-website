// KV-based cache. Falls back to direct fetching when NuxtHub is unavailable (production SSG).
let kvModule: { kv: { get: <T>(key: string) => Promise<T | null>, set: (key: string, value: unknown, opts?: { ttl?: number }) => Promise<void>, del: (key: string) => Promise<void> } } | null = null
let kvChecked = false

async function getKv() {
  if (kvChecked)
    return kvModule
  kvChecked = true

  try {
    // @ts-expect-error hub:kv only exists when NuxtHub module is loaded
    kvModule = await import('hub:kv')
  }
  catch {
    kvModule = null
  }
  return kvModule
}

export async function getCachedData<T>(key: string, fetcher: () => Promise<T>, ttlSeconds = 3600): Promise<T> {
  if (import.meta.dev) {
    return fetcher()
  }

  const hub = await getKv()
  if (!hub) {
    return fetcher()
  }

  const cached = await hub.kv.get<T>(key)
  if (cached !== null) {
    return cached
  }

  const data = await fetcher()
  await hub.kv.set(key, data, { ttl: ttlSeconds })
  return data
}

export async function invalidateCache(key: string): Promise<void> {
  if (import.meta.dev)
    return

  const hub = await getKv()
  if (hub) {
    await hub.kv.del(key)
  }
}
