<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { Database } from '~/types/database.types'

const props = defineProps(getSliceComponentProps<Content.CryptoMapContinentSelectorSlice>())

const activeContinent = ref(props.slice.primary.continents.at(0)!.label)
const supabase = useSupabaseClient<Database>()

const { data: stats } = useAsyncData('continentStats', async () => {
  const { data, error } = await supabase.rpc('get_stats_for_all_continents')
  if (error || !data)
    throw createError('Error fetching continent stats')
  return data
})

const { language } = useNavigatorLanguage()

const formatter = computed(() => new Intl.NumberFormat(language.value, { notation: 'compact', maximumFractionDigits: 1 }))

// @unocss-include
const continentsSvg = {
  'Africa': 'i-continents:africa selected:text-orange size-160 right--20 top--8',
  'Asia': 'i-continents:asia selected:text-red size-200 right--40 top--80',
  'Europe': 'i-continents:europe selected:text-gold size-200 right--40 top--90',
  'North America': 'i-continents:north-america selected:text-green size-268 right--40 top--156 rotate-2',
  'Oceania': 'i-continents:oceania selected:text-blue size-180 right--40 top--8',
  'South America': 'i-continents:south-america selected:text-purple size-200 right--40 top--8',
}

const continents = computed(() => {
  if (!stats.value)
    return []

  return props.slice.primary.continents.map((continent) => {
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
      selected: activeContinent.value === continent.label,
    }
  })
})

const iframeUrl = computed(() => {
  const link = props.slice.primary.continents.find(c => c.label === activeContinent.value)!.crypto_map_link
  return link.embed_url
})
</script>

<template>
  <section class="nq-block-96 px-0 lg:px-72" flex="col lg:row gap-x-24 gap-y-32">
    <div max-lg:my--40 max-lg:w-full>
      <ul w-full flex="~ lg:col gap-16" max-lg="snap-x snap-mandatory scroll-pl-32 of-x-auto nq-scrollbar-hide py-40">
        <li
          v-for="({ label, hasCryptoCities, hasLocations, cryptoCitiesCount, locationsCount, svg, selected }) in continents"
          :key="label!"
          max-lg="snap-start shrink-0 first:pl-32 last:pr-32"
          rounded-8
          :data-selected="selected ? '' : undefined"
        >
          <button p="x-24 y-20" active="[--un-shadow:var(--nq-shadow)]" relative w-full rounded-8 transition ease-out lg:max-w-410 md:min-w-385 not-selected:hocus:translate-y--4 bg="not-selected:neutral-300 selected:white hocus:white" selected:ring="1.5 neutral-200" @click="activeContinent = label">
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
      </ul>
    </div>
    <div max-lg:w-full lg:self-stretch max-lg:px-32>
      <iframe
        aspect="9/16 lg:initial" mx-auto size-full max-h-80dvh rounded-8 ring="1.5 neutral-200" title="Crypto Map"
        :src="iframeUrl"
        sandbox="allow-scripts allow-same-origin allow-popups"
        frameborder="0"
      />
    </div>
  </section>
</template>
