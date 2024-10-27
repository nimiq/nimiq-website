<script setup lang="ts">
import type { KeyTextField, LinkField, TitleField } from '@prismicio/client'
import { NuxtLink, TweenedNumber } from '#components'
import Map from './Map.vue'
// import { breakpointsTailwind } from '@vueuse/core'

const props = defineProps<{ headline: TitleField, subHeadlineTemplate: KeyTextField, cta: LinkField, ctaLabel: KeyTextField }>()

const { cryptoMapLocationsCount: locationsCount } = storeToRefs(useGlobalContent())

// const { md, xl } = useBreakpoints(breakpointsTailwind)

// @unocss-include

const locationsSpan = h(NuxtLink, { class: 'text-blue', to: 'https://map.nimiq.com', target: '_blank' }, () => [
  h(TweenedNumber, {
    value: locationsCount.value || 0,
    min: 0,
    max: locationsCount.value || 20_000,
    animationDuration: 1300,
    digitsCount: 5,
    allowAnimation: true,
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

// Add these lines to handle responsive sizing
const { width: windowWidth } = useWindowSize()

const ellipseSize = computed(() => {
  const minWidth = 375
  const maxWidth = 1440
  const minEllipseWidth = 1048.481
  const maxEllipseWidth = 2885
  const aspectRatio = 2444 / 2885 // Aspect ratio of the largest ellipse

  // Calculate the scaling factor based on window width
  const scale = (windowWidth.value - minWidth) / (maxWidth - minWidth)
  const clampedScale = Math.max(0, Math.min(1, scale)) // Ensure scale is between 0 and 1

  // Calculate the ellipse width using a quadratic easing function
  const easedScale = clampedScale < 0.5
    ? 2 * clampedScale * clampedScale
    : 1 - (-2 * clampedScale + 2) ** 2 / 2
  const ellipseWidth = minEllipseWidth + (maxEllipseWidth - minEllipseWidth) * easedScale

  // Calculate the ellipse height maintaining the aspect ratio
  const ellipseHeight = ellipseWidth * aspectRatio

  return {
    '--width': `${ellipseWidth < 1535 ? 1535 : ellipseWidth}px`, // min 1535
    '--height': `${ellipseHeight < 1300 ? 1300 : ellipseHeight}px`, // min 1300
  }
})
</script>

<template>
  <section
    class="dark hero-section relative mx-0 of-hidden bg-darkblue py-0 text-neutral children:max-w-none"
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
      <div class="map-container" :style="ellipseSize">
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
  margin-top: 80px;
  display: flex;
  justify-content: center;
}

.map-container {
  position: relative;
  z-index: 1;
  --width: 2885px;
  --height: 2444px;
  min-width: 750px;
  padding-top: 23px;

  .ellipse {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    width: var(--width);
    height: var(--height);
    flex-shrink: 0;
    background: white;
    clip-path: ellipse(50% 50% at 50% 50%);
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

  .content-wrapper {
    padding-bottom: 40px; /* Reduced padding for smaller screens */
  }
}

.blur-sm {
  filter: blur(60px);
}

.blur-sm.darken {
  filter: blur(60px) brightness(0.8);
}
</style>
