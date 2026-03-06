function sanitizeLocale(locale: string | undefined): string {
  if (!locale || typeof locale !== 'string')
    return 'en-US'

  const sanitized = locale.split('@')[0]?.trim()
  if (!sanitized || !/^[a-z]{2}(?:-[A-Z]{2})?$/i.test(sanitized))
    return 'en-US'

  return sanitized
}

export function useLocale() {
  return useState<string>('locale', () => {
    try {
      if (import.meta.server) {
        const acceptLanguage = useRequestHeaders()?.['accept-language']
        return sanitizeLocale(acceptLanguage?.split(',')[0])
      }
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
