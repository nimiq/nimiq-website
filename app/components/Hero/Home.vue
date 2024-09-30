<script setup lang="ts">
import type { KeyTextField, LinkField, TitleField } from '@prismicio/client'
import { TweenedNumber } from '#components'

const props = defineProps<{ headline: TitleField, subHeadlineTemplate: KeyTextField, cta: LinkField, ctaLabel: KeyTextField }>()

const { cryptoMapLocationsCount: locationsCount } = storeToRefs(useGlobalContent())

// @unocss-include

const { language } = useNavigatorLanguage()

const locationsSpan = h('span', { class: 'text-blue' }, [
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

const [DefineNimFly, ReuseNimFly] = createReusableTemplate<{ css: string }>()

const shouldJump = ref(false)

function onHover() {
  shouldJump.value = Math.random() < 0.07
}

function onHoverEnd() {
  shouldJump.value = false
}

const sectionRef = useSection('home-hero', 'darkblue', { paddingY: false, limitWidth: false })
</script>

<template>
  <section ref="sectionRef" relative of-hidden pt="148 md:153 lg:160">
    <DefineNimFly v-slot="{ css }">
      <div
        :class="css"
        grid="~ *:row-span-full *:col-span-full *:self-center *:justify-self-center"
        group z-1 op-70
        @mouseenter="onHover"
        @mouseleave="onHoverEnd"
      >
        <div op="3 group-hover:1" pointer-events-none size-64 mix-blend-overlay blur-4 transition-opacity style="background: radial-gradient(circle, #FFFFFF 40%, rgba(255, 255, 255, 0) 100%);" />
        <div
          class="nim-fly-icon"
          :class="{ 'jump-and-flip': shouldJump }"
          i-nimiq:logos-shiny-nim
          size-25
        />
        <div size-40 mix-blend-screen blur-28 op="100 group-hover:60" transition-opacity style="background: radial-gradient(circle, #FFFFFF 30%, rgba(255, 255, 255, 0) 100%);" />
      </div>
    </DefineNimFly>
    <div z-10 children:md:mx-auto>
      <PrismicText nq-heading-lg :field="headline" wrapper="h1" />
      <component :is="subheadline" text-neutral-800 />
      <PrismicLink mt-40 :field="cta" nq-arrow nq-pill-lg nq-pill-blue>
        {{ ctaLabel }}
      </PrismicLink>
    </div>
    <NuxtImg pointer-events-none absolute inset-0 m-0 size-full src="/assets/images/gods-light.webp" />
    <div bg-gradient="to-b from-darkblue/0 to-darkblue" pointer-events-none absolute inset-0 m-0 op-80 />
    <ReuseNimFly css="absolute left-100 top-200 scale-105 [--delay:700ms]" />
    <ReuseNimFly css="absolute right-80 top-170 scale-70 [--delay:2500ms]" />
    <ReuseNimFly css="absolute left-30vw bottom-400 scale-92 [--delay:4350ms]" />
    <ReuseNimFly css="absolute right-32 bottom-550" />
    <div class="world-container" pointer-events-none absolute bottom-0 flex="~ justify-center" mx-0 of-y-hidden>
      <div class="ellipse blue-ring" min-w-900 of-hidden />
    </div>
    <div bg="darkblue/10" pointer-events-none absolute inset-0 backdrop-blur-40 />
    <div class="world-container" flex="~ justify-center" pointer-events-none mx-0 mb--16 of-y-hidden>
      <div class="ellipse" flex="~ justify-center" bg="neutral global-dark:neutral-0" min-w-900 of-hidden pt="16 lg:0">
        <div h="220 lg:330 xl:550" i-continents:world-dots min-w-900 text-neutral-800 lg:w-1100 mt="lg:-36" />
      </div>
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

  .nim-fly-icon {
    --animation-play-state: running;
    animation: float 6s ease-in-out infinite;
    animation-play-state: var(--animation-play-state);
    animation-delay: var(--delay, 0s);
    transition:
      filter 0.3s ease,
      transform 0.5s ease;
    --drop-shadow: 10px;
    filter: drop-shadow(0 0 var(--drop-shadow) rgba(255, 255, 255, 0.7));
  }

  [group]:hover .nim-fly-icon {
    --animation-play-state: paused;
    --drop-shadow: 12px;
  }

  .jump-and-flip {
    animation: jump-flip 0.5s ease-out;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.05);
  }
}

@keyframes jump-flip {
  0%,
  100% {
    transform: translateY(0) rotateY(0deg);
  }
  50% {
    transform: translateY(-20px) rotateY(180deg);
  }
  100% {
    transform: translateY(0) rotateY(360deg);
  }
}
</style>
