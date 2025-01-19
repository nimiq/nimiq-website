<script setup lang="ts">
import type { KeyTextField, LinkField, RichTextField } from '@prismicio/client'

defineProps<{
  items: {
    kind: 'Europe' | 'Central America' | 'World'
    content: RichTextField
    link: LinkField
  }[]
  label: KeyTextField
}>()

const { socialMedias } = useGlobalContent()

const scrollerContainer = useTemplateRef<HTMLDivElement>('scroller')
const scroller = computed(() => scrollerContainer.value?.querySelector<HTMLDivElement>('ul'))

const { x } = useScroll(scroller)
const { width } = useElementBounding(scroller)
const progress = computed(() => {
  if (!width.value || !scroller.value)
    return 0
  const containerWidth = scroller.value!.scrollWidth
  const totalScrollable = width.value - containerWidth
  const percentage = Math.min(100, Math.max(0, (-x.value / totalScrollable) * 100))
  return Math.round(percentage) / 100
})

// @unocss-include

const bgColor = { 'Europe': 'bg-green', 'Central America': 'bg-blue', 'World': 'bg-orange' }
const fiatIcons = { 'Europe': ['i-nimiq:logos-euro-outline-mono translate-x--1.5'], 'Central America': ['i-nimiq:logos-usd-outline-mono', 'i-nimiq:logos-colones-outline-mono'], 'World': [] }
const cryptoIcons = { 'Europe': ['i-nimiq:logos-nimiq-hexagon-outline-mono', 'i-nimiq:logos-bitcoin-outline-mono translate-x--1.5'], 'Central America': ['i-nimiq:logos-nimiq-hexagon-outline-mono', 'i-nimiq:logos-bitcoin-outline-mono translate-x-0.5'], 'World': [] }

// const left = computed(() => {
//   const p = progress.value

//   if (p <= 0.33) {
//     const factor = p / 0.33
//     return 35 + (25 - 35) * factor
//   }
//   else if (p <= 0.66) {
//     const factor = (p - 0.33) / (0.66 - 0.33)
//     return 25 + (38 - 25) * factor
//   }
//   else {
//     const factor = (p - 0.66) / (1 - 0.66)
//     return 38 + (50 - 38) * factor
//   }
// })
</script>

<template>
  <section bg-darkerblue px-0 py-0>
    <div class="world-container" :style="`--progress: ${progress}`" :class="{ first: progress < 0.33, second: progress >= 0.33 && progress < 0.66, third: progress >= 0.66 }" relative max-w-none>
      <div rounded="100%" absolute top-0 aspect-2 bg-pink w="200%" f-h="min-200 max-400 " />
      <!-- <div class="oval" bg-neutral-400 stack :style="`left: ${left}px`">
        <div relative bg-neutral-0>
          <div i-oasis-regions:europe pointer-events-none transition-colors />
          <div i-oasis-regions:central-america pointer-events-none transition-colors />
          <div i-oasis-regions:rest-of-the-world pointer-events-none transition-colors />
        </div>
      </div> -->
    </div>
    <div max-w-none bg-neutral-100>
      <div ref="scroller" relative mx-auto max-w-480 w-full>
        <Carousel :items style="--px: 32px; --pb:64px">
          <template #default="{ item: { content, kind, link } }">
            <div :class="bgColor[kind]" max-w-480 w-full rounded-8 f-p-48 md:w-416>
              <PrismicRichText :field="content" class="dark" text-white nq-prose-compact />
              <div v-if="kind !== 'World'" flex="~ gap-8 items-center" text-white f-mt-24>
                <div v-for="(icon, i) in fiatIcons[kind]" :key="i" flex="~ gap-8">
                  <div size-40 rounded-full stack ring="1.5 white/40">
                    <div :class="icon" size-24 />
                  </div>
                </div>
                <div i-nimiq:exchange mx-12 op-50 text-2xl />
                <div v-for="(icon, i) in cryptoIcons[kind]" :key="i" flex="~ gap-8">
                  <div size-40 rounded-full stack ring="1.5 white/40">
                    <div :class="icon" size-24 />
                  </div>
                </div>
              </div>
              <PrismicLink v-if="hasLink(link)" :field="link" internal-component="a" external nq-arrow nq-pill-lg nq-pill-white f-mt-32 />
              <div v-if="kind !== 'Europe'" f-mt-24>
                <h4 text="xs white/50" nq-label>
                  {{ label }}
                </h4>
                <div flex="~ gap-8 items-center" text-white f-mt-12>
                  <PrismicLink :field="socialMedias.x.link" internal-component="a" bg="white/20 hocus:white/40" external size-40 rounded-full transition-colors stack>
                    <div text="white/80 xl hocus:white" i-nimiq:logos-twitter-mono transition-colors />
                  </PrismicLink>
                  <PrismicLink :field="socialMedias.telegram.link" internal-component="a" bg="white/20 hocus:white/40" external size-40 rounded-full transition-colors stack>
                    <div text="white/80 lg hocus:white" i-nimiq:logos-telegram-mono translate-x--1 translate-y-1 transition-colors />
                  </PrismicLink>
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  overflow-x: clip;
}
/* .world-container {
  --halo: 24px;

  --min-height: 300px;
  --max-height: 340px;
  --height: calc(var(--min-height) + (1 - var(--progress)) * (var(--max-height) - var(--min-height)));
  height: var(--height);

  width: calc(var(--min-width) + (1 - var(--progress)) * (var(--max-width) - var(--min-width)));
  --uno: 'relative';
  --min-width: 450vw;
  --max-width: 500vw;

  @screen md {
    --min-width: 150vw;
    --max-width: 200vw;
    --max-height: 350px;
    --min-height: 480px;
  }

  .oval {
    --uno: 'absolute inset-0  px-$halo';
    height: calc(var(--height) * 4 + var(--halo) * 2);
    clip-path: ellipse(50% 50% at 50% 50%);
    transition: left 400ms ease-out;

    > div {
      --uno: 'size-full';
      clip-path: ellipse(50% 50% at 50% 50%);
      height: calc(var(--height) * 4);

      > div {
        --uno: 'absolute top-32 w-full h-$height';

        transform-origin: top center;
        transform: scale(calc(var(--initial-scale) + var(--progress) * (var(--final-scale) - var(--initial-scale))));
        --initial-scale: 1.5;
        --final-scale: 0.5;

        @screen md {
          --initial-scale: 1.8;
          --final-scale: 1;
        }
      }
    }
  }

  &:where(.first) {
    [i-oasis-regions\:rest-of-the-world],
    [i-oasis-regions\:central-america] {
      --uno: 'text-neutral-400';
    }

    [i-oasis-regions\:europe] {
      --uno: 'text-green';
    }
  }

  &:where(.second) {
    [i-oasis-regions\:rest-of-the-world] {
      --uno: 'text-neutral-400';
    }

    [i-oasis-regions\:central-america] {
      --uno: 'text-blue';
    }

    [i-oasis-regions\:europe] {
      --uno: 'text-neutral-600';
    }
  }

  &:where(.third) {
    [i-oasis-regions\:rest-of-the-world] {
      --uno: 'text-orange';
    }

    [i-oasis-regions\:central-america],
    [i-oasis-regions\:europe] {
      --uno: 'text-neutral-600';
    }
  }
} */

::deep([data-prev]) {
  transform: translateX(calc(-100% - 32px));
  --uno: 'bg-neutral-400 text-neutral-900 m-0 ring-1.5 ring-neutral-500/60';
}

:deep([data-next]) {
  transform: translateX(calc(100% + 32px));
  --uno: 'bg-neutral-400 text-neutral-900 m-0 ring-1.5 ring-neutral-500/60';
}
</style>
