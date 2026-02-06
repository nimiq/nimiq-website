export default defineNitroPlugin(() => {
  // Cloudflare (unenv) may polyfill `localStorage` with a non-WebStorage shape (e.g. Map),
  // which breaks dependencies expecting `getItem/setItem` during prerender.
  const ls: any = (globalThis as any).localStorage
  if (!ls || typeof ls.getItem === 'function')
    return

  const store = new Map<string, string>()

  ;(globalThis as any).localStorage = {
    get length() {
      return store.size
    },
    clear() {
      store.clear()
    },
    getItem(key: string) {
      return store.has(key) ? store.get(key)! : null
    },
    key(index: number) {
      return Array.from(store.keys())[index] ?? null
    },
    removeItem(key: string) {
      store.delete(key)
    },
    setItem(key: string, value: string) {
      store.set(key, String(value))
    },
  }
})
