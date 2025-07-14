export function useLocale() {
  return useState<string>('locale', () =>
    (import.meta.server
      ? useRequestHeaders()['accept-language']?.split(',')[0] || 'en-US'
      : navigator.language) || 'en-US')
}
