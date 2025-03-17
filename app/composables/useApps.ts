import { useQuery } from '@pinia/colada'

const appColor: Record<AppType, string> = {
  'E-commerce': colors.blue,
  'Games': colors.purple,
  'Infrastructure': colors.red,
  'Insights': colors.green,
  'Miner': 'rgb(var(--nq-neutral) / 1)',
  'Wallets': colors.orange,
  'Bots': colors.gold,
  'Faucet': '#FA7268', // pink
  'Promotion': '#795548', // brown
}

export interface UseAppsOption {
  labelTeamNimiq?: string
}

type PriorityLevel = 'high' | 'low' | 'medium'
const priorityLevelValues: Record<PriorityLevel, number> = {
  high: 3,
  medium: 2,
  low: 1,
}

const highlightedOrder = Object.freeze(['Nimiq Wallet', 'Nimiq Pay App', 'Crypto Map', 'SuperSimpleSwap'])

export const MadeBy = {
  Anyone: 'anyone',
  Official: 'official',
  Community: 'community',
} as const
type MadeByType = typeof MadeBy[keyof typeof MadeBy]

type AppType = 'Insights' | 'E-commerce' | 'Games' | 'Faucet' | 'Promotion' | 'Miner' | 'Wallets' | 'Infrastructure' | 'Bots'

interface AppApi {
  isOfficial: boolean
  name: string // Using strict string type instead of KeyTextField
  description: string
  link: string
  type: AppType
  logo: string
  screenshot: string
  developer: string | null
}

export interface NimiqApp extends AppApi {
  isHighlighted: boolean
  priorityLevel: PriorityLevel
  color: string
}

const highPriorityApps: string[] = ['Cryptopayment.link', 'Nimiq Wallet', 'Nimiq Pay App', 'Crypto Map', 'SuperSimpleSwap']

// Transform function to convert App to AppsAttributes
function transformAppToAttributes(app: NimiqApp, labelTeamNimiq: string): NimiqApp {
  return {
    ...app,
    isHighlighted: highPriorityApps.includes(app.name),
    priorityLevel: highPriorityApps.includes(app.name) ? 'high' : 'low',
    developer: app.developer || labelTeamNimiq,
    color: app.type ? appColor[app.type] : '#000',
  } satisfies NimiqApp
}

export function useApps({ labelTeamNimiq = 'Team Nimiq' }: UseAppsOption = {}) {
  const { data: apps } = useQuery({
    key: () => ['apps'],
    query: async () => {
      const apps = await $fetch<NimiqApp[]>('https://raw.githubusercontent.com/onmax/nimiq-awesome/refs/heads/main/src/data/dist/nimiq-apps.json')
      const processedApps = apps
        .sort((a, b) => {
          const highlightA = highlightedOrder.indexOf(a.name)
          const highlightB = highlightedOrder.indexOf(b.name)

          if (highlightA !== -1 || highlightB !== -1)
            return (highlightB === -1 ? -1 : highlightB) - (highlightA === -1 ? -1 : highlightA)

          const priorityA = highPriorityApps.includes(a.name) ? priorityLevelValues.high : priorityLevelValues.low
          const priorityB = highPriorityApps.includes(b.name) ? priorityLevelValues.high : priorityLevelValues.low
          return priorityB - priorityA
        })

      return Object.fromEntries(
        processedApps.map(app => [app.name, transformAppToAttributes(app, labelTeamNimiq)]),
      ) as Record<string, NimiqApp>
    },
    placeholderData: () => ({}) as Record<string, NimiqApp>,
  })

  function getRandomApps(n: number) {
    const randomApps = useState('random_apps', () => {
      const selectedApps = Object.values(apps.value || []).filter(({ logo }) => !!logo)
      return selectedApps.sort(() => Math.random() - 0.5).slice(0, Math.min(n, selectedApps.length))
    })
    return randomApps
  }

  // Filtering Apps
  const selectedAppsFilter = ref<MadeByType>(MadeBy.Anyone)
  const selectedApps = computed(() => {
    if (!apps.value)
      return []

    return Object.values(apps.value).filter((item) => {
      switch (selectedAppsFilter.value) {
        case MadeBy.Official:
          return item.isOfficial
        case MadeBy.Community:
          return !item.isOfficial
        default:
          return true
      }
    })
  })

  return {
    apps,
    getRandomApps,
    highlightedOrder,
    selectedAppsFilter,
    selectedApps,
  }
}
