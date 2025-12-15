import { consola } from 'consola'

interface ConsentData {
  accepted: boolean
  version: string
  timestamp: number
}

export default defineNuxtRouteMiddleware((to) => {
  const { public: { environment, enableDevAnalytics } } = useRuntimeConfig()
  const isDev = environment.name === 'local' && enableDevAnalytics

  const consent = useCookie<ConsentData | null>('nimiq-consent', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 100,
  })

  const CONSENT_VERSION = '1.0'
  const hasValidConsent = consent.value?.accepted
    && consent.value.version === CONSENT_VERSION

  if (!hasValidConsent)
    return

  if (isDev) {
    consola.log('📊 [DEV] Would track page view:', {
      url: to.fullPath,
      title: document?.title || 'Loading...',
      matomo: `setCustomUrl: ${to.fullPath}, setDocumentTitle: ${document?.title || 'Loading...'}, trackPageView`,
    })
    return
  }

  // Wait for Matomo script loaded via registry
  nextTick(() => {
    if ((window as any)._paq) {
      try {
        ;(window as any)._paq.push(['setCustomUrl', to.fullPath])
        ;(window as any)._paq.push(['setDocumentTitle', document.title])
        ;(window as any)._paq.push(['trackPageView'])
      }
      catch (error) {
        console.error('Failed to track page view:', error)
      }
    }
  })
})
