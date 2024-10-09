<script setup lang="ts">
import type { KeyTextField, LinkField, TitleField } from '@prismicio/client'
import { NuxtLink, TweenedNumber } from '#components'
import { breakpointsTailwind } from '@vueuse/core'

const props = defineProps<{ headline: TitleField, subHeadlineTemplate: KeyTextField, cta: LinkField, ctaLabel: KeyTextField }>()

const { cryptoMapLocationsCount: locationsCount } = storeToRefs(useGlobalContent())

const { md, xl } = useBreakpoints(breakpointsTailwind)

// @unocss-include

const { language } = useNavigatorLanguage()

const locationsSpan = h(NuxtLink, { class: 'text-blue', to: 'https://map.nimiq.com', target: '_blank' }, () => [
  h(TweenedNumber, {
    value: locationsCount.value || 0,
    min: 0,
    max: locationsCount.value || 20_000,
    animationDuration: 1300,
    locale: language.value,
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
</script>

<template>
  <section pt="148 md:153 lg:160" class="dark" dark relative mx-0 of-hidden bg-darkblue py-0 text-neutral children:max-w-none>
    <div z-10 children:md:mx-auto>
      <PrismicText nq-heading-lg :field="headline" wrapper="h1" />
      <component :is="subheadline" text-neutral-800 />
      <PrismicLink internal-component="a" mt-40 :field="cta" nq-arrow nq-pill-lg nq-pill-blue>
        {{ ctaLabel }}
      </PrismicLink>
    </div>
    <NuxtImg pointer-events-none absolute inset-0 m-0 size-full src="/assets/images/gods-light.webp" alt="Nimiq Gods Rays Background" />
    <div bg-gradient="to-b from-darkblue/0 to-darkblue" pointer-events-none absolute inset-0 m-0 op-80 />
    <Ember left-100 top="77 sm:112 md:200" :scale="1.05" />
    <Ember right-80 top-170 :scale="0.7" />
    <Ember bottom="302 md:430" left="56vw md:30vw" :scale="0.92" />
    <Ember bottom-460 right-32 />
    <!-- <div class="world-container" pointer-events-none absolute bottom-0 flex="~ justify-center" mx-0 of-y-hidden>
      <div class="ellipse blue-ring" min-w-900 of-hidden />
    </div>
    <div bg="darkblue/10" pointer-events-none absolute inset-0 backdrop-blur-40 /> -->
    <!-- <div class="world-container" flex="~ justify-center" pointer-events-none mx-0 mb--16 of-y-hidden>
      <div class="ellipse" flex="~ justify-center" bg="neutral global-dark:neutral-0" min-w-900 of-hidden pt="16 lg:0">
        <div h="220 lg:330 xl:550" i-continents:world-dots min-w-900 text-neutral-800 lg:w-1100 mt="lg:-36" />
      </div>
    </div> -->

    <div w="[calc(100%+var(--px)*2+2px)]" left="[calc(-1*var(--px))] md:0" relative bottom--1 z-1 max-w-none mt="-64 md:-96 lg:-156">
      <NuxtImg v-if="!md && !xl" src="/assets/images/home-hero/sm.webp" size-full loading="eager" width="768" height="588" />
      <NuxtImg v-else-if="!xl" src="/assets/images/home-hero/md.webp" size-full loading="eager" width="1152" height="759" />
      <NuxtImg v-else src="/assets/images/home-hero/xl.webp" size-full loading="eager" width="2396" height="1435" mb="-15%" />
    </div>
  </section>
</template>

<style scoped>
section {
  --mt-ellipsis: 128px;
  --aspect-ratio: 1.6;
  --uno: '[--ellipsis-width:200vw] md:[--ellipsis-width:340vh]';
  --ellipsis-height: calc(var(--ellipsis-width) / var(--aspect-ratio));

  .world-container {
    margin-top: var(--mt-ellipsis);
    --uno: 'h-190 sm:h-225 md:h-300 lg:h-413 mx--32';

    .ellipse {
      height: var(--ellipsis-height);
      clip-path: ellipse(50% 50% at 50% 50%);
      aspect-ratio: var(--aspect-ratio);
    }

    &:has(.blue-ring) {
      --uno: 'h-190 sm:h-225 md:h-300 lg:h-413';
    }

    .blue-ring {
      background: radial-gradient(100% 100% at 100% 100%, #0b7ff2 0%, #0ca6fe 100%);
    }
  }
}
</style>
