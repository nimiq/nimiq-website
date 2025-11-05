const appColor: Record<AppType, string> = {
  'E-commerce': 'rgb(var(--nq-blue))',
  'Games': 'rgb(var(--nq-purple))',
  'Infrastructure': 'rgb(var(--nq-red))',
  'Insights': 'rgb(var(--nq-green))',
  'Miner': 'rgb(var(--nq-neutral) / 1)',
  'Wallets': 'rgb(var(--nq-orange))',
  'Bots': 'rgb(var(--nq-gold))',
  'Faucet': '#FA7268', // pink
  'Promotion': '#795548', // brown
}

export interface UseAppsOption {
  labelTeamNimiq?: string
}

type PriorityLevel = 'high' | 'low' | 'medium'
type AppType = 'Insights' | 'E-commerce' | 'Games' | 'Faucet' | 'Promotion' | 'Miner' | 'Wallets' | 'Infrastructure' | 'Bots'

interface AppApi {
  name: string
  description: string
  link: string
  type: AppType
  logo: string
  screenshot: string
  developer?: string
}

export interface NimiqApp extends AppApi {
  isHighlighted: boolean
  priorityLevel: PriorityLevel
  color: string
}

const spotLightApps = ['Nimiq Wallet', 'Nimiq Pay App', 'Crypto Map']

function transformAppToAttributes(app: NimiqApp, labelTeamNimiq: string): NimiqApp {
  const slug = (app as any).slug || app.name.toLowerCase().replace(/\s+/g, '-')

  // Transform remote asset URLs to local paths
  let logo = app.logo
  let screenshot = app.screenshot

  if (logo) {
    const logoExt = logo.split('.').pop() || 'svg'
    logo = `/apps/${slug}-logo.${logoExt}`
  }

  if (screenshot) {
    const screenshotExt = screenshot.split('.').pop() || 'png'
    screenshot = `/apps/${slug}-screenshot.${screenshotExt}`
  }

  return {
    ...app,
    logo,
    screenshot,
    isHighlighted: spotLightApps.includes(app.name),
    priorityLevel: spotLightApps.includes(app.name) ? 'high' : 'low',
    developer: app.developer || labelTeamNimiq,
    color: app.type ? appColor[app.type] : '#000',
  } satisfies NimiqApp
}

export function useApps({ labelTeamNimiq = 'Team Nimiq' }: UseAppsOption = {}) {
  return useAsyncData(async () => {
    const { data: apps } = await useFetch('https://raw.githubusercontent.com/onmax/nimiq-awesome/main/src/data/dist/nimiq-apps.json', {
      transform: d => JSON.parse(d as string) as AppApi[]
    })

    if (!apps.value)
      throw new Error('Failed to fetch apps')

    const spotlightedApps = apps.value.filter(app => spotLightApps.includes(app.name))
    const nonSpotlightedApps = apps.value.filter(app => !spotLightApps.includes(app.name))

    spotlightedApps.sort((a, b) => spotLightApps.indexOf(a.name) - spotLightApps.indexOf(b.name))

    for (let i = nonSpotlightedApps.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = nonSpotlightedApps[i]!
      nonSpotlightedApps[i] = nonSpotlightedApps[j]!
      nonSpotlightedApps[j] = temp
    }

    const processedApps = [...spotlightedApps, ...nonSpotlightedApps]

    const transformedApps = processedApps.map(app => transformAppToAttributes(app, labelTeamNimiq))
    const communityApps = transformedApps.filter(app => app.developer !== '@nimiq')
    const officialApps = transformedApps.filter(app => app.developer === '@nimiq')

    return {
      apps: transformedApps,
      spotLightApps,
      communityApps,
      officialApps,
    }
  })
}
