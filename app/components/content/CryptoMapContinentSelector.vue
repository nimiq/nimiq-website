<script setup lang="ts">
import type { LinkField, RichTextField } from '@prismicio/client'

interface CryptoMapContinentSelectorSlice {
  primary: {
    continents: Array<{
      label?: string
      continent?: string
      coordinates?: any
    }>
    cryptocitiesCta: LinkField
    cryptocitiesDescription: RichTextField
  }
}

const props = defineProps<{ slice: CryptoMapContinentSelectorSlice, slices?: any[] }>()

const activeItemIndex = ref(0)
const activeItem = computed(() => props.slice.primary.continents[activeItemIndex.value])

const sectionElement = ref<HTMLElement | null>(null)
const isComponentVisible = ref(false)

useIntersectionObserver(
  sectionElement,
  ([entry]) => {
    isComponentVisible.value = entry?.isIntersecting || false
  },
  { threshold: 0.1, rootMargin: '100px' },
)

const { cryptoMapSupabase } = useRuntimeConfig().public

function getSupabaseEndpoint(fn: string) {
  return `${cryptoMapSupabase.url}/rest/v1/rpc/${fn}?apikey=${cryptoMapSupabase.key}`
}

const { data: stats } = useQuery({
  key: () => ['get_stats_for_all_continents'],
  query: () => $fetch<ContinentStat[]>(getSupabaseEndpoint('get_stats_for_all_continents')),
  enabled: isComponentVisible,
})

const locale = useLocale()

const formatter = computed(() => new Intl.NumberFormat(locale.value, { notation: 'compact', maximumFractionDigits: 1 }))

// @unocss-include
const continentsSvg = {
  'Africa': 'i-continents:africa selected:text-orange size-160 right--20 top--8',
  'Asia': 'i-continents:asia selected:text-red size-200 right--40 top--80',
  'Europe': 'i-continents:europe selected:text-gold size-200 right--40 top--90',
  'North America': 'i-continents:north-america selected:text-green size-268 right--40 top--156 rotate-2',
  'Oceania': 'i-continents:oceania selected:text-blue size-170 right--15 top--42',
  'South America': 'i-continents:south-america selected:text-purple size-200 right--40 top--8',
}

const continents = computed(() => {
  if (!stats.value)
    return []

  return props.slice.primary.continents.map((continent: any, i: number) => {
    const statContinent = stats.value?.find(item => item.continent_name.toLowerCase() === continent.label?.toLowerCase())
    if (!statContinent)
      throw createError(`Continent ${continent.label} not found in stats`)
    const cryptoCitiesCount = statContinent.cryptocities_count
    const locationsCount = formatter.value.format(statContinent.locations_count)
    const hasCryptoCities = cryptoCitiesCount > 0
    const hasLocations = statContinent.locations_count > 0
    if (Object.keys(continentsSvg).includes(continent.label!) === false)
      throw createError(`Continent ${continent.label} not found in continentsSvg`)

    return {
      ...continent,
      cryptoCitiesCount,
      locationsCount,
      hasCryptoCities,
      hasLocations,
      svg: continentsSvg[continent.label as keyof typeof continentsSvg],
      selected: activeItemIndex.value === i,
    }
  })
})

const iframe = ref<HTMLIFrameElement>()
// const cryptoMapUrl = `http://localhost:5173/${activeItem.value?.coordinates}?layout=compact`
const cryptoMapUrl = `https://map.nimiq.com/${activeItem.value?.coordinates}?layout=compact`

watch([activeItemIndex, iframe], () => {
  if (!iframe.value)
    return
  const coords = props.slice.primary.continents[activeItemIndex.value]?.coordinates
  if (!coords || !coords.includes(','))
    throw createError('Invalid coordinates')
  const [lat, lng, zoom] = coords.slice(1).split(',')

  iframe.value.contentWindow?.postMessage(JSON.stringify({ kind: 'map:position', data: { center: { lat, lng }, zoom: zoom?.replace('z', '') } }), '*')
}, { immediate: true })

const allowMapInteraction = ref(false)
</script>

<template>
  <section ref="sectionElement" px-0 pb-0 bg-neutral-0 max-lg:mx-0 data-slice-type="crypto-map-continent-selector">
    <div max-w="none lg:$nq-max-width children:none" w-screen grid="~ cols-1 lg:cols-[min(calc(100vw-64px),411px)_1fr] gap-x-24">
      <ul flex="~ lg:col gap-16" max-lg="snap-x snap-mandatory scroll-pl-32 of-x-auto nq-scrollbar-hide py-20 lg:py-40">
        <li
          v-for="({ label, hasCryptoCities, hasLocations, cryptoCitiesCount, locationsCount, svg, selected }, i) in continents"
          :key="label!"
          max-lg="snap-start shrink-0 first:pl-32 last:pr-32"
          rounded-8
          :data-selected="selected ? '' : undefined"
        >
          <button p="x-24 y-20" w-full relative of-hidden nq-hoverable lg:max-w-410 md:min-w-385 max-md:selected:bg-white @click="activeItemIndex = i">
            <p text="20/26 lg:22/28.6" font-semibold text-left whitespace-nowrap>
              {{ label }}
            </p>
            <div flex="~ gap-12 items-center" mt="8 md:12" h-21>
              <div v-if="hasCryptoCities" flex="~ gap-6 items-center">
                <div text-20 i-nimiq:logos-cryptocity />
                <span text="14 md:15 neutral-800" font-semibold whitespace-nowrap>{{ cryptoCitiesCount }}</span>
              </div>
              <div v-if="hasCryptoCities && hasLocations" bg-neutral-500 w-1 self-stretch />
              <p text="14 md:15 neutral-800" whitespace-nowrap>
                <span font-semibold>
                  {{ locationsCount }}
                </span>
                locations
              </p>
            </div>
            <div pointer invisible pointer-events-none inset-y-0 right-0 absolute of-hidden md:visible>
              <div :class="svg" text-neutral-500 transition-colors relative />
            </div>
          </button>
        </li>
      <!-- Sorry if you're from Antarctica, we don't have any locations there **yet**. -->
      </ul>
      <div grid="~ *:col-span-full *:row-span-full" mx-auto w-full self-stretch justify-self-stretch max-lg:mt-24 max-lg:px-32 max-lg:w-full lg:self-stretch>
        <transition leave-active-class="transition duration-500 [&_:is(button,p)]:duration-300 ease-nq [&_:is(button,p)]:ease-out [&_:is(button,p)]:transition" leave-to-class="op-0 [&_button]:translate-y-96 [&_p]:translate-y--96 [&_:is(button,p)]:op-0" leave-from-class="op-100 [&_p]:translate-y-0 [&_button]:translate-y-0 [&_:is(button,p)]:op-100">
          <div v-if="!allowMapInteraction" flex="~ col gap-8 items-center justify-center" rounded-8 bg-darkblue bg-op-80 z-1>
            <p text="white min-18 max-24" font-bold>
              Explore in {{ activeItem?.label }}
            </p>
            <button gap-12 nq-pill-lg nq-pill-blue @click="allowMapInteraction = true">
              <div i-nimiq:pin />
              <span text-white>Let's go!</span>
            </button>
          </div>
        </transition>

        <iframe
          ref="iframe"

          loading="lazy"
          aspect="9/16 lg:initial" rounded-8 w-full z-1 lg:h-full max-lg:max-h-80dvh ring="1.5 neutral-200" title="Crypto Map"
          :src="cryptoMapUrl"
          sandbox="allow-scripts allow-same-origin allow-popups"
          frameborder="0"
        />
      </div>
      <div flex="~ col gap-16 md:items-center" w="[calc(100%-64px)] lg:full" px-24 py-32 rounded-b-12 bg-neutral-400 top--8 relative max-lg:mx-32 lg:col-start-2 lg:row-start-2>
        <div h-32 w-155 i-nimiq:logos-cryptocity-horizontal />
        <RichText wrapper="div" :field="slice.primary.cryptocitiesDescription" max-w-40ch md:text-center />
        <PrismicLink :field="slice.primary.cryptocitiesCta" nq-arrow nq-pill-blue />
      </div>
    </div>
  </section>
</template>
