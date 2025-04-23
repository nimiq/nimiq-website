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

const bgColor = { 'Europe': 'bg-green', 'Central America': 'bg-blue', 'World': 'bg-orange' } as const
const fiatIcons = { 'Europe': ['i-nimiq:logos-euro-outline-mono translate-x--1.5'], 'Central America': ['i-nimiq:logos-usd-outline-mono', 'i-nimiq:logos-colones-outline-mono'], 'World': [] } as const
const cryptoIcons = { 'Europe': ['i-nimiq:logos-nimiq-hexagon-outline-mono', 'i-nimiq:logos-bitcoin-outline-mono translate-x--1.5'], 'Central America': ['i-nimiq:logos-nimiq-hexagon-outline-mono', 'i-nimiq:logos-bitcoin-outline-mono translate-x-0.5'], 'World': [] } as const
</script>

<template>
  <section of-x-clip bg-darkerblue px-0 pb-0 f-pt-3xl>
    <div
      class="world-container" :style="`--progress: ${progress}`"
      :class="{ first: progress < 0.33, second: progress >= 0.33 && progress < 0.66, third: progress >= 0.66 }" relative
      aspect-2 max-w-none w-full
    >
      <div absolute left-0 top-0>
        <div rounded="100%" class="oval" bg-neutral-100 stack>
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
            <div :class="bgColor[kind]" max-w-480 w-full rounded-8 f-p-lg md:w-416>
              <RichText wrapper="div" :field="content" class="dark" nq-prose-compact text-white />
              <div v-if="kind !== 'World'" flex="~ gap-8 items-center" text-white f-mt-sm>
                <div v-for="(icon, i) in fiatIcons[kind]" :key="i" flex="~ gap-8">
                  <div size-40 rounded-full stack ring="1.5 white/40">
                    <div :class="icon" size-24 />
                  </div>
                </div>
                <div mx-12 op-50 i-nimiq:exchange f-text-2xl />
                <div v-for="(icon, i) in cryptoIcons[kind]" :key="i" flex="~ gap-8">
                  <div size-40 rounded-full stack ring="1.5 white/40">
                    <div :class="icon" size-24 />
                  </div>
                </div>
              </div>
              <PrismicLink
                v-if="hasLink(link)" :field="link" internal-component="a" external nq-arrow nq-pill-lg
                nq-pill-white f-mt-md
              />
              <div v-if="kind !== 'Europe'" f-mt-sm>
                <h4 text="f-xs white/50" nq-label>
                  {{ label }}
                </h4>
                <div flex="~ gap-8 items-center" text-white f-mt-2xs>
                  <PrismicLink
                    :field="socialMedias!.x.link" internal-component="a" bg="white/20 hocus:white/40"
                    external size-40 rounded-full transition-colors stack
                  >
                    <div text="white/80 f-xl" transition-colors i-nimiq:logos-twitter-mono />
                  </PrismicLink>
                  <PrismicLink
                    :field="socialMedias!.telegram.link" internal-component="a" bg="white/20 hocus:white/40"
                    external size-40 rounded-full transition-colors stack
                  >
                    <div
                      text="white/80 f-lg hocus:white" translate-x--1 translate-y-1 transition-colors
                      i-nimiq:logos-telegram-mono
                    />
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
    --f-w-min-container: 100;
    --f-w-max-container: 100;
    --uno: 'f-$globemin-base-vw f-$globemin-min-20 f-$globemin-max-20 f-$globemin';
    --uno: 'f-$globemax-base-vw f-$globemax-min-9 f-$globemax-max-25 f-$globemax';

    --min-globe-pt: var(--f-globemin);
    --max-globe-pt: var(--f-globemax);
    height: calc((1 - var(--progress)) * var(--min-globe-pt) + var(--max-globe-pt) * var(--progress));

    .oval {
      --uno: 'f-$ring-0/1';
      --f-ring-unit: 1;
      --uno: 'ring ring-neutral-400 ring-8 z-1';
      --min-globe-width: 150vw;
      --max-globe-width: 110vw;
      width: calc((1 - var(--progress)) * var(--min-globe-width) + var(--max-globe-width) * var(--progress));
      aspect-ratio: 984 / 368;
      translate: calc(-50% + 50vw);

      /* Icons */
      > div {
        --uno: 'pointer-events-none mt-16 transition-colors h-max !self-start';

        --uno: 'f-$w-base-vw f-$w-min-70 f-$w-max-50 f-$w w-$f-w';

        aspect-ratio: 984 / 368;
        /* scale from 1 to 1.35 with progress from top center */
        transform: scale(calc(1 + 0.35 * var(--progress)));
        transform-origin: top center;
      }

      [i-oasis-regions\:rest-of-the-world] {
        --uno: 'text-neutral-600' opacity: calc(0.8 + 0.2 * var(--progress));
      }

      /* Green when progress is 0-0.33  */
      [i-oasis-regions\:europe] {
        --primary: rgb(var(--nq-orange));
        --grey: rgb(var(--nq-neutral-600));
        --mix: clamp(0%, calc((var(--progress) / 0.33) * 100%), 100%);
        color: color-mix(in srgb, var(--primary) calc(100% - var(--mix)), var(--grey) calc(1 * var(--mix)));
      }

      /* Blue when progress is 0.33-0.66 */
      [i-oasis-regions\:central-america] {
        --primary: rgb(var(--nq-blue));
        --grey: rgb(var(--nq-neutral-600));
        --ramp-up: clamp(0, calc(var(--progress) / 0.33), 1);
        --ramp-down: clamp(0, calc((1 - var(--progress)) / 0.34), 1);
        --mix: clamp(0%, calc((var(--ramp-up) + var(--ramp-down) - 1) * 100%), 100%);
        color: color-mix(in srgb, var(--grey) calc(100% - var(--mix)), var(--primary) var(--mix));
      }
    }
  }
}

::deep([data-prev]) {
  transform: translateX(calc(-100% - 32px));
  --uno: 'bg-neutral-400 text-neutral-900 m-0 ring-1.5 ring-neutral-500/60';
}

:deep([data-next]) {
  transform: translateX(calc(100% + 32px));
  --uno: 'bg-neutral-400 text-neutral-900 m-0 ring-1.5 ring-neutral-500/60';
}
</style>
