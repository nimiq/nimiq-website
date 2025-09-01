<script setup lang="ts">
import type { KeyTextField, LinkField, RichTextField } from '@prismicio/client'
import Map from './Map.vue'

const props = defineProps<{ headline: RichTextField, subHeadlineTemplate: KeyTextField, link: LinkField }>()

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
  useSeoMeta({
    title: getText(props.headline),
    description: subheadlineStr.value,
  })
})
</script>

<template>
  <section
    class="dark" text-neutral mx-0 py-0 bg-darkblue relative of-hidden children:max-w-none max-md:min-h-auto
    pt="148 md:153 lg:160" min-h="auto md:100vh lg:110vh" flex="~ col justify-between"
  >
    <div flex="grow ~ col justify-center" z-10 children:md:mx-auto>
      <PrismicText nq-heading-lg :field="headline" wrapper="h1" />
      <component :is="subheadline" text="neutral-800 f-xl" />
      <PrismicLink :field="link" mt-40 nq-arrow nq-pill-lg nq-pill-blue />
    </div>
    <NuxtImg
      width="1600"
      height="900"
      src="/assets/images/gods-light.webp"
      alt="Nimiq Gods Rays Background"
      loading="eager"
      priority
      m-0 size-full pointer-events-none inset-0 absolute blur-60 brightness-80
    />
    <div bg-gradient="to-b from-darkblue/0 to-darkblue" m-0 op-80 pointer-events-none inset-0 absolute />
    <Ember left-100 top="77 sm:112 md:200" style="--scale: 1.05" />
    <Ember right-80 top-170 style="--scale: 0.7" />
    <Ember bottom="302 md:430" left="56vw md:30vw" style="--scale: 0.92" />
    <Ember bottom-460 right-32 style="--scale: 1" />

    <div mt-120 max-w-none w-full flex="~ justify-center">
      <div class="map-container" w="80%" pt-23 min-w-680 relative z-1>
        <div class="ellipse-shape" bg-neutral-300 z--1 mix-blend-multiply blur-20 />
        <div class="ellipse-shape" z--2 blur-120 style="background: radial-gradient(100% 100% at 100% 100%, #0b7ff2 0%, #0ca6fe 100%)" />
        <div class="ellipse-shape" bg-white z--1 />
        <Map />
      </div>
    </div>
  </section>
</template>

<style scoped>
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

  .ellipse-shape {
    --uno: 'absolute left-50% translate-x--50% w-$width h-$height rounded-50% top-0 shrink-0';
  }
}
</style>
