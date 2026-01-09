function sanitizeLocale(locale: string | undefined): string {
  if (!locale || typeof locale !== 'string')
    return 'en-US'

  // Remove @posix suffix and other invalid suffixes that can come from test environments
  const sanitized = locale.split('@')[0].trim()

  // Basic validation: should match xx or xx-XX format
  if (!/^[a-z]{2}(?:-[A-Z]{2})?$/i.test(sanitized))
    return 'en-US'

  return sanitized
}

export function useLocale() {
  return useState<string>('locale', () => {
    try {
      if (import.meta.server) {
        const acceptLanguage = useRequestHeaders()['accept-language']
        return sanitizeLocale(acceptLanguage?.split(',')[0])
      }
      // Client-side: safely get navigator.language with fallback
      if (typeof globalThis !== 'undefined' && globalThis.navigator) {
        return sanitizeLocale(globalThis.navigator.language)
      }
      return 'en-US'
    }
    catch {
      return 'en-US'
    }
  })
}
