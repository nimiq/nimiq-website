export function useLocale() {
  return useState<string>('locale', () =>
    (import.meta.server
      ? useRequestHeaders()['accept-language']?.split(',')[0]
      : navigator.language) || 'en-US')
}
