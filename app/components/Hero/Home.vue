<script setup lang="ts">
import type { KeyTextField, LinkField, TitleField } from '@prismicio/client'
import { AnimatedTweenedNumber, NuxtLink } from '#components'
import Map from './Map.vue'

// import { breakpointsTailwind } from '@vueuse/core'

const props = defineProps<{ headline: TitleField, subHeadlineTemplate: KeyTextField, cta: LinkField, ctaLabel: KeyTextField }>()

const { cryptoMapLocationsCount: locationsCount } = useCryptoMapStats()

// const { md, xl } = useBreakpoints(breakpointsTailwind)

// @unocss-include

const locationsSpan = h(NuxtLink, { class: 'text-blue', to: 'https://map.nimiq.com', target: '_blank' }, () => [
  h(AnimatedTweenedNumber, {
    value: locationsCount.value || 0,
    duration: 1300,
  }),
  ' locations',
])

const subheadline = computed(() => {
  const pre = props.subHeadlineTemplate?.split('{{')[0]?.toString()
  const post = props.subHeadlineTemplate?.split('}}')[1]?.toString()
  return h('p', {}, [pre, locationsSpan, post])
})

const subheadlineStr = computed(() => {
  const pre = props.subHeadlineTemplate?.split('{{')[0]?.toString()
  const post = props.subHeadlineTemplate?.split('}}')[1]?.toString()
  return `${pre} ${locationsCount.value} ${post}`
})

watch(subheadlineStr, () => {
  useHead({
    title: props.headline.at(0)!.text,
    meta: [
      { name: 'description', content: subheadlineStr.value },
    ],
  })
})
</script>

<template>
  <section
    class="dark hero-section" relative mx-0 of-hidden bg-darkblue py-0 text-neutral children:max-w-none
    pt="148 md:153 lg:160"
  >
    <div class="content-wrapper z-10 children:md:mx-auto">
      <PrismicText nq-heading-lg :field="headline" wrapper="h1" />
      <component :is="subheadline" text-neutral-800 />
      <PrismicLink internal-component="a" mt-40 :field="cta" nq-arrow nq-pill-lg nq-pill-blue>
        {{ ctaLabel }}
      </PrismicLink>
    </div>
    <NuxtImg
      pointer-events-none
      absolute
      inset-0
      m-0
      size-full
      src="/assets/images/gods-light.webp"
      alt="Nimiq Gods Rays Background"
      class="darken blur-sm"
    />
    <div bg-gradient="to-b from-darkblue/0 to-darkblue" pointer-events-none absolute inset-0 m-0 op-80 />
    <Ember left-100 top="77 sm:112 md:200" :scale="1.05" />
    <Ember right-80 top-170 :scale="0.7" />
    <Ember bottom="302 md:430" left="56vw md:30vw" :scale="0.92" />
    <Ember bottom-460 right-32 />

    <div class="map-wrapper">
      <div class="map-container">
        <div class="counter-blue-ring" />
        <div class="blue-ring" />
        <div class="ellipse" />
        <Map />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    min-height: 100vh;
  }
}

.content-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.map-wrapper {
  width: 100%;
  max-width: none;
  margin-top: 120px;
  display: flex;
  justify-content: center;
}

.map-container {
  /**
  * Design values/breakpoints:
  *
  * screen:
  *   width: 1440px;
  *   height: 914px;
  * ellipse:
  *   width: 2018px;
  *   height: 1098px;
  *
  * screen:
  *   width: 1152px;
  *   height: 914px;
  * ellipse:
  *   width: 2411px;
  *   height: 2183px;
  *
  * screen:
  *   width: 768px;
  *   height: 842px;
  * ellipse:
  *   width: 1048px;
  *   height: 605px;
  */

  --width: calc(2018 * (100vw / 1440));
  --height: calc(1098 * (100vw / 1440));

  @media (max-width: 1152px) {
    --width: calc(2411 * (100vw / 1152));
    --height: calc(2183 * (100vw / 1152));
  }

  @media (max-width: 768px) {
    --width: 1048px;
    --height: 605px;
  }

  position: relative;
  z-index: 1;
  width: 80%;
  min-width: 680px;
  padding-top: 23px;

  .ellipse {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    width: var(--width);
    height: var(--height);
    border-radius: 50%;
    flex-shrink: 0;
    background: white;
    z-index: -1;
  }

  .blue-ring,
  .counter-blue-ring {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    border-radius: 50%;
    width: var(--width);
    height: var(--height);
    flex-shrink: 0;
  }

  .blue-ring {
    z-index: -2;
    background: radial-gradient(100% 100% at 100% 100%, #0b7ff2 0%, #0ca6fe 100%);
    filter: blur(120px);
  }

  .counter-blue-ring {
    z-index: -1;
    opacity: 0.4;
    background: #1f2348;
    mix-blend-mode: multiply;
    filter: blur(20px);
  }
}

@media (max-height: 800px) {
  .hero-section {
    min-height: auto;
  }
}

.blur-sm {
  filter: blur(60px);
}

.blur-sm.darken {
  filter: blur(60px) brightness(0.8);
}
</style>
