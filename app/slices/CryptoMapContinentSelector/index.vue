<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.CryptoMapContinentSelectorSlice>())

const activeItemIndex = ref(0)
const activeItem = computed(() => props.slice.primary.continents[activeItemIndex.value])

const { cryptoMapContinentsStats: stats } = storeToRefs(useGlobalContent())
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

  return props.slice.primary.continents.map((continent, i) => {
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
  <section grid="~ cols-1 lg:cols-[min(calc(100vw-64px),411px)_1fr] gap-x-24" max-w="none lg:$nq-max-width" w-screen bg-neutral-100 px-0 pb-0 max-lg:mx-0 max-lg:children:max-w-none data-slice-type="crypto-map-continent-selector">
    <ul flex="~ lg:col gap-16" max-lg="snap-x snap-mandatory scroll-pl-32 of-x-auto nq-scrollbar-hide py-20 lg:py-40">
      <li
        v-for="({ label, hasCryptoCities, hasLocations, cryptoCitiesCount, locationsCount, svg, selected }, i) in continents"
        :key="label!"
        max-lg="snap-start shrink-0 first:pl-32 last:pr-32"
        rounded-8
        :data-selected="selected ? '' : undefined"
      >
        <button p="x-24 y-20" relative w-full of-hidden nq-hoverable lg:max-w-410 md:min-w-385 max-md:selected:bg-white @click="activeItemIndex = i">
          <p text="20/26 lg:22/28.6" whitespace-nowrap text-left font-semibold>
            {{ label }}
          </p>
          <div flex="~ gap-12 items-center" mt="8 md:12" h-21>
            <div v-if="hasCryptoCities" flex="~ gap-6 items-center">
              <div i-nimiq:logos-cryptocity text-20 />
              <span text="14 md:15 neutral-800" whitespace-nowrap font-semibold>{{ cryptoCitiesCount }}</span>
            </div>
            <div v-if="hasCryptoCities && hasLocations" w-1 self-stretch bg-neutral-500 />
            <p text="14 md:15 neutral-800" whitespace-nowrap>
              <span font-semibold>
                {{ locationsCount }}
              </span>
              locations
            </p>
          </div>
          <div pointer pointer-events-none invisible absolute inset-y-0 right-0 of-hidden md:visible>
            <div relative text-neutral-500 :class="svg" transition-colors />
          </div>
        </button>
      </li>
      <!-- Sorry if you're from Antarctica, we don't have any locations there **yet**. -->
    </ul>
    <div grid="~ *:col-span-full *:row-span-full" mx-auto w-full self-stretch justify-self-stretch max-lg:mt-24 max-lg:w-full lg:self-stretch max-lg:px-32>
      <transition leave-active-class="transition duration-500 [&_:is(button,p)]:duration-300 ease-nq [&_:is(button,p)]:ease-out [&_:is(button,p)]:transition" leave-to-class="op-0 [&_button]:translate-y-96 [&_p]:translate-y--96 [&_:is(button,p)]:op-0" leave-from-class="op-100 [&_p]:translate-y-0 [&_button]:translate-y-0 [&_:is(button,p)]:op-100">
        <div v-if="!allowMapInteraction" flex="~ col gap-8 items-center justify-center" z-1 rounded-8 bg-darkblue bg-op-80>
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
        z-1
        loading="lazy"
        w-full aspect="9/16 lg:initial" rounded-8 lg:h-full max-lg:max-h-80dvh ring="1.5 neutral-200" title="Crypto Map"
        :src="cryptoMapUrl"
        sandbox="allow-scripts allow-same-origin allow-popups"
        frameborder="0"
      />
    </div>
    <div flex="~ col gap-16 md:items-center" relative top--8 w="[calc(100%-64px)] lg:full" rounded-b-12 bg-neutral-400 px-24 py-32 lg:col-start-2 lg:row-start-2 max-lg:mx-32>
      <div i-nimiq:logos-cryptocity-horizontal h-32 w-155 />
      <PrismicRichText :field="slice.primary.cryptocitiesDescription" max-w-40ch md:text-center />
      <PrismicLink :field="slice.primary.cryptocitiesCta" nq-arrow nq-pill-blue />
    </div>
  </section>
</template>
