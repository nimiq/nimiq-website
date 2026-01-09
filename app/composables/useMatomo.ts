import { consola } from 'consola'

interface ConsentData {
  accepted: boolean
  version: string
  timestamp: number
}

export function useMatomo() {
  const CONSENT_VERSION = '1.0'
  const { public: { environment, enableDevAnalytics } } = useRuntimeConfig()
  const isDev = environment.name === 'local' && enableDevAnalytics

  const consentDefault = () => null
  const consentMaxAge = 60 * 60 * 24 * 100
  const consent = useCookie<ConsentData | null>('nimiq-consent', { default: consentDefault, maxAge: consentMaxAge })

  const { proxy: matomoProxy } = useScriptMatomoAnalytics()
  const { proxy: gtmProxy } = useScriptGoogleTagManager()

  function acceptConsent() {
    consent.value = { accepted: true, version: CONSENT_VERSION, timestamp: Date.now() }

    if (isDev) {
      consola.log('📊 [DEV] Analytics consent accepted - would initialize download tracking')
      return
    }

    // Preserve download tracking behavior from legacy implementation
    if (import.meta.client && matomoProxy?._paq) {
      matomoProxy._paq.push(['addDownloadExtensions', 'deb|rpm|msi|sha256|asc|pub'])
    }
  }

  function rejectConsent() {
    consent.value = { accepted: false, version: CONSENT_VERSION, timestamp: Date.now() }

    if (isDev) {
      consola.log('📊 [DEV] Analytics consent rejected - would opt out user')
      return
    }

    if (import.meta.client) {
      if (matomoProxy?._paq)
        matomoProxy._paq.push(['optUserOut'])

      // GTM lacks opt-out API, so we signal rejection via dataLayer
      if (gtmProxy?.dataLayer) {
        const event = 'consent_rejected'
        gtmProxy.dataLayer.push({ event })
      }
    }
  }

  interface TrackEventParams {
    eventName: string
    eventCategory?: string
    eventAction?: string
    label?: string
  }

  function trackEvent(params: TrackEventParams) {
    if (!consent.value?.accepted || !import.meta.client)
      return
    const { eventName, eventCategory = 'Custom', eventAction = eventName, label = '' } = params

    if (isDev) {
      const matomo = `trackEvent: ${eventCategory} > ${eventAction} > ${label}`
      const gtm = { event: eventName, event_category: eventCategory, event_action: eventAction, event_label: label }
      consola.log('📊 [DEV] Would track event:', { eventName, eventCategory, eventAction, label, matomo, gtm })
      return
    }

    if (matomoProxy?._paq) {
      matomoProxy._paq.push(['trackEvent', eventCategory, eventAction, label])
    }

    if (gtmProxy?.dataLayer) {
      const event = eventName
      const event_category = eventCategory
      const event_action = eventAction
      const event_label = label
      gtmProxy.dataLayer.push({ event, event_category, event_action, event_label })
    }
  }

  return { consent: readonly(consent), acceptConsent, rejectConsent, trackEvent }
}
