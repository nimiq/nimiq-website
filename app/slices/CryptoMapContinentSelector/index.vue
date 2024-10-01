<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.CryptoMapContinentSelectorSlice>())
const sectionRef = useSection(props.slice.id, 'grey', { paddingX: false })

const activeContinent = ref(props.slice.primary.continents.at(0)!.label)

const { cryptoMapContinentsStats: stats } = storeToRefs(useGlobalContent())
const { language } = useNavigatorLanguage()

const formatter = computed(() => new Intl.NumberFormat(language.value, { notation: 'compact', maximumFractionDigits: 1 }))

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

const allowMapInteraction = ref(false)
</script>

<template>
  <section ref="sectionRef" flex="col lg:row gap-x-24 gap-y-32" max-w="$nq-max-width">
    <div max-lg:my--40 max-md:w-full>
      <ul max-md:w-full flex="~ lg:col gap-16" max-lg="snap-x snap-mandatory scroll-pl-32 of-x-auto nq-scrollbar-hide py-40">
        <li
          v-for="({ label, hasCryptoCities, hasLocations, cryptoCitiesCount, locationsCount, svg, selected }) in continents"
          :key="label!"
          max-lg="snap-start shrink-0 first:pl-32 last:pr-32"
          rounded-8
          :data-selected="selected ? '' : undefined"
        >
          <button p="x-24 y-20" relative w-full of-hidden nq-hoverable lg:max-w-410 md:min-w-385 @click="activeContinent = label">
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
    </div>
    <div grid="~ *:col-span-full *:row-span-full" mx-auto flex-1 self-stretch justify-self-stretch max-lg:w-full lg:self-stretch max-lg:px-32>
      <transition leave-active-class="transition duration-500 [&_:is(button,p)]:duration-300 ease-nq [&_:is(button,p)]:ease-out [&_:is(button,p)]:transition" leave-to-class="op-0 [&_button]:translate-y-96 [&_p]:translate-y--96 [&_:is(button,p)]:op-0" leave-from-class="op-100 [&_p]:translate-y-0 [&_button]:translate-y-0 [&_:is(button,p)]:op-100">
        <div v-if="!allowMapInteraction" flex="~ col gap-8 items-center justify-center" z-1 rounded-8>
          <p text="neutral xl" style="font-size: var(--nq-font-size)" font-bold>
            Explore in {{ activeContinent }}
          </p>
          <button gap-12 nq-pill-lg nq-pill-blue @click="allowMapInteraction = true">
            <div i-nimiq:pin />
            <span text-white>Let's go!</span>
          </button>
        </div>
      </transition>

      <iframe
        v-if="allowMapInteraction"
        aspect="9/16 lg:initial" h-full w-full rounded-8 max-lg:max-h-80dvh ring="1.5 neutral-200" title="Crypto Map"
        :src="iframeUrl"
        sandbox="allow-scripts allow-same-origin allow-popups"
        frameborder="0"
      />
      <div v-else aspect="9/16 lg:initial" ring="1.5 neutral-200" h-full rounded-8 bg-neutral-400 max-lg:max-h-80dvh />
    </div>
  </section>
</template>
