<script setup lang="ts">
import { useScroll } from '@vueuse/core'

interface OasisItem {
  kind: 'Europe' | 'Central America' | 'World'
  title: string
  subline: string
  linkLabel?: string
  linkHref?: string
}

defineProps<{
  headline?: string
  subline?: string
  linkHref?: string
  linkLabel?: string
  secondaryLinkHref?: string
  secondaryLinkLabel?: string
  items: OasisItem[]
  beTheFirstToKnowLabel?: string
}>()

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

const bgColor = { 'Europe': 'bg-green', 'Central America': 'bg-blue', 'World': 'bg-orange' } as const
const fiatIcons = { 'Europe': [{ icon: 'nimiq:logos-euro-outline-mono', class: '-translate-x-[1.5px]' }], 'Central America': [{ icon: 'nimiq:logos-usd-outline-mono', class: '' }, { icon: 'nimiq:logos-colones-outline-mono', class: '' }], 'World': [] } as const
const cryptoIcons = { 'Europe': [{ icon: 'nimiq:logos-nimiq-hexagon-outline-mono', class: '' }, { icon: 'nimiq:logos-bitcoin-outline-mono', class: '-translate-x-[1.5px]' }], 'Central America': [{ icon: 'nimiq:logos-nimiq-hexagon-outline-mono', class: '' }, { icon: 'nimiq:logos-bitcoin-outline-mono', class: 'translate-x-[0.5px]' }], 'World': [] } as const
</script>

<template>
  <section class="px-0 pb-0 bg-darkerblue overflow-x-clip">
    <div class="nq-section-gap text-center">
      <h1 class="nq-h1 text-white">
        {{ headline }}
      </h1>
      <p class="text-neutral-700 nq-text mx-auto mt-1.5 max-w-40">
        {{ subline }}
      </p>
      <div class="flex gap-4 justify-center flex-wrap mt-2">
        <a v-if="linkHref" class="nq-arrow nq-pill-lg nq-pill-white" :href="linkHref" target="_blank" rel="noopener noreferrer">{{ linkLabel }}</a>
        <a v-if="secondaryLinkHref" class="text-white font-bold nq-arrow" :href="secondaryLinkHref">{{ secondaryLinkLabel }}</a>
      </div>
    </div>
    <div class="world-container max-w-none w-full relative overflow-hidden" :style="`--progress: ${progress}`" :class="{ first: progress < 0.33, second: progress >= 0.33 && progress < 0.66, third: progress >= 0.66 }">
      <div class="left-0 top-0 absolute">
        <div class="oval rounded-full bg-neutral-100 grid place-items-center">
          <Icon class="region-icon europe" name="oasis-regions:europe" />
          <Icon class="region-icon central-america" name="oasis-regions:central-america" />
          <Icon class="region-icon rest-of-world" name="oasis-regions:rest-of-the-world" />
        </div>
      </div>
    </div>
    <div class="bg-neutral-100 max-w-none w-full z-1">
      <div ref="scroller" class="mx-auto max-w-[480px] w-full relative">
        <ul class="flex gap-4 md:gap-8 items-stretch pb-16 h-full w-full justify-self-start overflow-x-auto scroll-px-8 nq-scrollbar-hide snap-x snap-mandatory">
          <li v-for="(item, i) in items" :key="i" class="first:pl-8 last:pr-8 flex-1 shrink-0 h-full snap-start snap-always" data-slide>
            <div class="rounded-2 max-w-[480px] w-full p-6 md:p-8 md:w-[416px]" :class="bgColor[item.kind]">
              <h3 class="text-white text-xl md:text-2xl font-bold mb-2">
                {{ item.title }}
              </h3>
              <p class="text-white/80 text-sm md:text-base mb-4">
                {{ item.subline }}
              </p>
              <div v-if="item.kind !== 'World'" class="flex gap-2 items-center text-white mt-3 md:mt-4">
                <div v-for="(fiatIcon, j) in fiatIcons[item.kind]" :key="j" class="flex gap-2">
                  <div class="rounded-full size-10 ring-1.5 ring-white/40 grid place-items-center">
                    <Icon class="size-6" :class="fiatIcon.class" :name="fiatIcon.icon" />
                  </div>
                </div>
                <Icon class="mx-3 opacity-50 text-xl md:text-2xl" name="nimiq:exchange" />
                <div v-for="(cryptoIcon, j) in cryptoIcons[item.kind]" :key="j" class="flex gap-2">
                  <div class="rounded-full size-10 ring-1.5 ring-white/40 grid place-items-center">
                    <Icon class="size-6" :class="cryptoIcon.class" :name="cryptoIcon.icon" />
                  </div>
                </div>
              </div>
              <a v-if="item.linkHref" class="mt-4 md:mt-6 nq-arrow nq-pill-lg nq-pill-white" :href="item.linkHref" target="_blank" rel="noopener noreferrer">{{ item.linkLabel }}</a>
              <div v-if="item.kind !== 'Europe' && beTheFirstToKnowLabel" class="mt-3 md:mt-4">
                <h4 class="text-[11px] md:text-xs text-white/50 nq-label">
                  {{ beTheFirstToKnowLabel }}
                </h4>
                <div class="flex gap-2 items-center text-white mt-1 md:mt-1.5">
                  <a class="bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-full size-10 transition-colors grid place-items-center" href="https://twitter.com/nimiq" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Icon class="text-white/80 text-lg md:text-xl transition-colors" name="nimiq:logos-twitter-mono" />
                  </a>
                  <a class="bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-full size-10 transition-colors grid place-items-center" href="https://t.me/nimiq" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                    <Icon class="text-white/80 text-base md:text-lg hover:text-white focus:text-white -translate-x-px translate-y-px transition-colors" name="nimiq:logos-telegram-mono" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="flex gap-1.5 justify-center pb-8">
          <div v-for="i in 3" :key="i" class="rounded-full size-2 transition-colors" :class="(progress < 0.33 && i === 1) || (progress >= 0.33 && progress < 0.66 && i === 2) || (progress >= 0.66 && i === 3) ? 'bg-green' : 'bg-neutral-300'" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.world-container {
  /* Fluid globe height: constant 20vw */
  --min-globe-pt: 20vw;
  /* Fluid globe height: 9vw to 25vw */
  --max-globe-pt: clamp(9vw, calc(4.43vw + 1.43 * (100vw - 320px) / 112), 25vw);
  height: calc((1 - var(--progress)) * var(--min-globe-pt) + var(--max-globe-pt) * var(--progress));

  .oval {
    box-shadow: 0 0 0 8px var(--color-neutral-400);
    z-index: 1;
    --min-globe-width: 150vw;
    --max-globe-width: 110vw;
    width: calc((1 - var(--progress)) * var(--min-globe-width) + var(--max-globe-width) * var(--progress));
    aspect-ratio: 984 / 368;
    translate: calc(-50% + 50vw);

    .region-icon {
      pointer-events: none;
      transition-property: color, background-color, border-color, fill, stroke;
      transition-duration: 150ms;
      height: max-content;
      grid-area: 1 / 1;
      align-self: start !important;
      margin-top: 16px;
      width: clamp(50vw, 70vw, 100%);
      aspect-ratio: 984 / 368;
      transform: scale(calc(1 + 0.35 * var(--progress)));
      transform-origin: top center;
    }

    .rest-of-world {
      color: var(--color-neutral-600);
      opacity: calc(0.8 + 0.2 * var(--progress));
    }

    .europe {
      --primary: rgb(var(--nq-orange));
      --grey: rgb(var(--nq-neutral-600));
      --mix: clamp(0%, calc((var(--progress) / 0.33) * 100%), 100%);
      color: color-mix(in srgb, var(--primary) calc(100% - var(--mix)), var(--grey) calc(1 * var(--mix)));
    }

    .central-america {
      --primary: rgb(var(--nq-blue));
      --grey: rgb(var(--nq-neutral-600));
      --ramp-up: clamp(0, calc(var(--progress) / 0.33), 1);
      --ramp-down: clamp(0, calc((1 - var(--progress)) / 0.34), 1);
      --mix: clamp(0%, calc((var(--ramp-up) + var(--ramp-down) - 1) * 100%), 100%);
      color: color-mix(in srgb, var(--grey) calc(100% - var(--mix)), var(--primary) var(--mix));
    }
  }
}
</style>
