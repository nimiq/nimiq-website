// Polyfill navigator.language for test environments (e.g., Playwright)
// where navigator exists but navigator.language may be undefined
export default defineNuxtPlugin(() => {
  if (typeof globalThis !== 'undefined' && globalThis.navigator && !globalThis.navigator.language) {
    Object.defineProperty(globalThis.navigator, 'language', {
      value: 'en-US',
      writable: true,
      configurable: true,
    })
  }
})
