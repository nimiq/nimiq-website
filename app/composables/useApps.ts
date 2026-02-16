type AppType = 'Insights' | 'E-commerce' | 'Games' | 'Faucet' | 'Promotion' | 'Miner' | 'Wallets' | 'Infrastructure' | 'Bots'
type MadeBy = 'anyone' | 'official' | 'community'

export interface NimiqApp {
  name: string
  description?: string
  link: string
  type: AppType
  logo: string
  screenshot?: string
  developer?: string
  isHighlighted: boolean
  color: string
}

const appColor: Record<AppType, string> = {
  'E-commerce': 'var(--color-blue)',
  'Games': 'var(--color-purple)',
  'Infrastructure': 'var(--color-red)',
  'Insights': 'var(--color-green)',
  'Miner': 'var(--color-neutral)',
  'Wallets': 'var(--color-orange)',
  'Bots': 'var(--color-gold)',
  'Faucet': '#FA7268',
  'Promotion': '#795548',
}

const spotlightApps = ['Nimiq Wallet', 'Nimiq Pay App', 'Crypto Map']

// Fixed display order for regular (non-spotlight) apps to match production
const regularAppsOrder = [
  'Cryptopayment.link',
  'Nimiq Game Store',
  'Trust Wallet',
  'Twini',
  'Nimiq Tip Bot',
  'Nimiq Shop',
  'Pixels',
  'Nimiq FM',
  'Nimiq Gift Cards',
  'Nimiq DOOM',
  'NimWorld',
  'Nimiq 2048',
  'Multisig Wallet',
  'Nimtris',
  'NIM Donations',
  'Staking Calculator',
  'Nimiq Sunset Cyberspace',
]

const validTypes: AppType[] = ['Insights', 'E-commerce', 'Games', 'Faucet', 'Promotion', 'Miner', 'Wallets', 'Infrastructure', 'Bots']

function transformApp(app: { name: string, type: string, logo: string, link: string, description?: string, developer?: string, screenshot?: string }): NimiqApp {
  const type = validTypes.includes(app.type as AppType) ? app.type as AppType : 'Infrastructure'
  return {
    ...app,
    type,
    developer: app.developer || '@nimiq',
    isHighlighted: spotlightApps.includes(app.name),
    color: appColor[type],
  }
}

export function useApps() {
  return useAsyncData('all-apps', async () => {
    const data = await queryCollection('allApps').first()
    if (!data?.apps?.length)
      throw new Error('Failed to fetch apps data. Build cannot continue without apps.')

    const transformed = data.apps.map(transformApp)
    const highlighted = transformed.filter(app => app.isHighlighted)
    const regular = transformed.filter(app => !app.isHighlighted)

    // Sort spotlight apps by their position in the spotlightApps array
    highlighted.sort((a, b) => spotlightApps.indexOf(a.name) - spotlightApps.indexOf(b.name))

    // Sort regular apps by fixed display order, unknown apps go to the end
    regular.sort((a, b) => {
      const ai = regularAppsOrder.indexOf(a.name)
      const bi = regularAppsOrder.indexOf(b.name)
      return (ai === -1 ? Infinity : ai) - (bi === -1 ? Infinity : bi)
    })

    const apps = [...highlighted, ...regular]
    return {
      apps,
      spotlightApps: highlighted,
      communityApps: apps.filter(app => app.developer !== '@nimiq'),
      officialApps: apps.filter(app => app.developer === '@nimiq'),
    }
  })
}

export function useAppsFilter(apps: Ref<NimiqApp[] | undefined>) {
  const madeBy = useRouteQuery<MadeBy>('made-by', 'anyone')

  const filteredApps = computed(() => {
    if (!apps.value)
      return []
    if (madeBy.value === 'official')
      return apps.value.filter(app => app.developer === '@nimiq')
    if (madeBy.value === 'community')
      return apps.value.filter(app => app.developer !== '@nimiq')
    return apps.value
  })

  function getSpotlightPosition(app: NimiqApp) {
    if (!app.isHighlighted)
      return undefined
    const index = spotlightApps.indexOf(app.name)
    // Position spotlight apps at rows 1, 4, 7 (every 3rd row starting at 1)
    return { gridRow: `${(index + 1) * 3 - 2}`, class: 'spotlight-app spotlight-span-2' }
  }

  return { madeBy, filteredApps, getSpotlightPosition }
}
