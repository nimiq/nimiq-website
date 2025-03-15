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

const { data: socialMedias } = await useSocialMedias()

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
  <section of-x-clip bg-darkerblue px-0 py-0>
    <div
      class="world-container" :style="`--progress: ${progress}`"
      :class="{ first: progress < 0.33, second: progress >= 0.33 && progress < 0.66, third: progress >= 0.66 }"
      relative aspect-2 max-w-none w-full
    >
      <div absolute left-0 top-0>
        <div rounded="100%" class="oval" bg-neutral-100 stack children="!self-start">
          <div i-oasis-regions:europe />
          <div i-oasis-regions:central-america />
          <div i-oasis-regions:rest-of-the-world />
        </div>
      </div>
      <!-- <div class="oval" bg-neutral-400 stack :style="`left: ${left}px`">
        <div relative bg-neutral-0>
          <div i-oasis-regions:central-america pointer-events-none transition-colors />
          <div i-oasis-regions:rest-of-the-world pointer-events-none transition-colors />
        </div>
      </div> -->
    </div>
    <div z-1 max-w-none w-full bg-neutral-100>
      <div ref="scroller" relative mx-auto max-w-480 w-full>
        <Carousel :items style="--px: 32px; --pb:64px">
          <template #default="{ item: { content, kind, link } }">
            <div :class="bgColor[kind]" max-w-480 w-full rounded-8 f-pt-lg md:w-416>
              <RichText wrapper="div" :field="content" class="dark" nq-prose-compact text-white />
              <div v-if="kind !== 'World'" flex="~ gap-8 items-center" text-white f-mt-sm>
                <div v-for="(icon, i) in fiatIcons[kind]" :key="i" flex="~ gap-8">
                  <div size-40 rounded-full stack ring="1.5 white/40">
                    <div :class="icon" size-24 />
                  </div>
                </div>
                <div i-nimiq:exchange mx-12 op-50 f-text-2xl />
                <div v-for="(icon, i) in cryptoIcons[kind]" :key="i" flex="~ gap-8">
                  <div size-40 rounded-full stack ring="1.5 white/40">
                    <div :class="icon" size-24 />
                  </div>
                </div>
              </div>
              <PrismicLink v-if="hasLink(link)" :field="link" internal-component="a" external nq-arrow nq-pill-lg nq-pill-white f-mt-md />
              <div v-if="kind !== 'Europe'" f-mt-sm>
                <h4 text="f-xs white/50" nq-label>
                  {{ label }}
                </h4>
                <div flex="~ gap-8 items-center" text-white f-mt-2xs>
                  <PrismicLink :field="socialMedias!.x.link" internal-component="a" bg="white/20 hocus:white/40" external size-40 rounded-full transition-colors stack>
                    <div text="white/80 f-xl" i-nimiq:logos-twitter-mono transition-colors />
                  </PrismicLink>
                  <PrismicLink :field="socialMedias!.telegram.link" internal-component="a" bg="white/20 hocus:white/40" external size-40 rounded-full transition-colors stack>
                    <div text="white/80 f-lg hocus:white" i-nimiq:logos-telegram-mono translate-x--1 translate-y-1 transition-colors />
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

  .world-container {
    --min-globe-pt: 20vw;
    --max-globe-pt: 25vw;
    height: calc((1 - var(--progress)) * var(--min-globe-pt) + var(--max-globe-pt) * var(--progress));

    .oval {
      /* --uno: 'f-$screen-1/100 f-$screen-base-percent'; */
      /* // progress 0 -> 16
      // progress 0.5 ->
      // progress 1 -> 8 */
      --uno: 'f-$ring-0/1';
      --f-ring-unit: 1;
      --un-ring-width: calc(var(--f-ring) * 8px + (1 - var(--f-ring)) * 150px);
      --uno: 'ring ring-neutral-400';
      --min-globe-width: 150vw;
      --max-globe-width: 110vw;
      width: calc((1 - var(--progress)) * var(--min-globe-width) + var(--max-globe-width) * var(--progress));
      aspect-ratio: 984 / 368;
      translate: calc(-50% + 50vw);

      /* Icons */
      > div {
        --uno: '!self-start pointer-events-none mt-$f-ring transition-colors h-max';
        width: calc(var(--progress) * var(--f-t) + (100vw - var(--px) * 2) - (var(--f-t-max) * 1px));
      }
    }
  }
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
