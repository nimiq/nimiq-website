<script setup lang="ts">
import { useScroll } from '@vueuse/core'

interface OasisItem {
  kind: 'Europe' | 'Central America' | 'World'
  title: string
  subline: string
  linkLabel?: string
  linkHref?: string
}

defineProps<{ items: OasisItem[], beTheFirstToKnowLabel?: string }>()

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
const fiatIcons = { 'Europe': ['i-nimiq:logos-euro-outline-mono -translate-x-[1.5px]'], 'Central America': ['i-nimiq:logos-usd-outline-mono', 'i-nimiq:logos-colones-outline-mono'], 'World': [] } as const
const cryptoIcons = { 'Europe': ['i-nimiq:logos-nimiq-hexagon-outline-mono', 'i-nimiq:logos-bitcoin-outline-mono -translate-x-[1.5px]'], 'Central America': ['i-nimiq:logos-nimiq-hexagon-outline-mono', 'i-nimiq:logos-bitcoin-outline-mono translate-x-[0.5px]'], 'World': [] } as const
</script>

<template>
  <div class="px-0 pb-0 bg-darkerblue of-x-clip f-pt-3xl">
    <div class="world-container max-w-none w-full aspect-2 relative" :style="`--progress: ${progress}`" :class="{ first: progress < 0.33, second: progress >= 0.33 && progress < 0.66, third: progress >= 0.66 }">
      <div class="left-0 top-0 absolute">
        <div class="oval rounded-100% bg-neutral-100" stack>
          <div i-oasis-regions:europe />
          <div i-oasis-regions:central-america />
          <div i-oasis-regions:rest-of-the-world />
        </div>
      </div>
    </div>
    <div class="bg-neutral-100 max-w-none w-full z-1">
      <div ref="scroller" class="mx-auto max-w-[480px] w-full relative">
        <ul class="flex gap-4 flex-md:gap-8 flex-items-stretch pb-16 h-full w-full justify-self-start of-x-auto scroll-px-8 nq-scrollbar-hide" snap="x mandatory">
          <li v-for="(item, i) in items" :key="i" class="p-first:l-32 p-last:r-32 flex-1 shrink-0 h-full" snap="start always" data-slide>
            <div class="rounded-2 max-w-[480px] w-full f-p-lg md:w-[416px]" :class="bgColor[item.kind]">
              <h3 class="text-white text-f-2xl font-bold mb-2">
                {{ item.title }}
              </h3>
              <p class="text-white/80 text-f-base mb-4">
                {{ item.subline }}
              </p>
              <div v-if="item.kind !== 'World'" class="flex gap-2 flex-items-center text-white f-mt-sm">
                <div v-for="(icon, j) in fiatIcons[item.kind]" :key="j" class="flex gap-2">
                  <div class="rounded-full size-10 ring-1.5 ring-white/40" stack>
                    <div class="size-6" :class="icon" />
                  </div>
                </div>
                <div class="mx-3 op-50 f-text-2xl" i-nimiq:exchange />
                <div v-for="(icon, j) in cryptoIcons[item.kind]" :key="j" class="flex gap-2">
                  <div class="rounded-full size-10 ring-1.5 ring-white/40" stack>
                    <div class="size-6" :class="icon" />
                  </div>
                </div>
              </div>
              <a v-if="item.linkHref" class="f-mt-md nq-arrow nq-pill-lg nq-pill-white" :href="item.linkHref" target="_blank" rel="noopener noreferrer">{{ item.linkLabel }}</a>
              <div v-if="item.kind !== 'Europe' && beTheFirstToKnowLabel" class="f-mt-sm">
                <h4 class="text-f-xs text-white/50 nq-label">
                  {{ beTheFirstToKnowLabel }}
                </h4>
                <div class="flex gap-2 flex-items-center text-white f-mt-2xs">
                  <a class="bg-white/20 bg-hocus:white/40 rounded-full size-10 transition-colors" href="https://twitter.com/nimiq" target="_blank" rel="noopener noreferrer" stack aria-label="Twitter">
                    <div class="text-white/80 text-f-xl transition-colors" i-nimiq:logos-twitter-mono />
                  </a>
                  <a class="bg-white/20 bg-hocus:white/40 rounded-full size-10 transition-colors" href="https://t.me/nimiq" target="_blank" rel="noopener noreferrer" stack aria-label="Telegram">
                    <div class="text-white/80 text-f-lg text-hocus:white -translate-x-px translate-y-px transition-colors" i-nimiq:logos-telegram-mono />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="flex gap-1.5 flex-justify-center pb-8">
          <div v-for="i in 3" :key="i" class="rounded-full size-2 transition-colors" :class="(progress < 0.33 && i === 1) || (progress >= 0.33 && progress < 0.66 && i === 2) || (progress >= 0.66 && i === 3) ? 'bg-green' : 'bg-neutral-300'" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.world-container {
  --f-w-min-container: 100;
  --f-w-max-container: 100;
  --uno: 'f-$globemin-base-vw f-$globemin-min-20 f-$globemin-max-20 f-$globemin';
  --uno: 'f-$globemax-base-vw f-$globemax-min-9 f-$globemax-max-25 f-$globemax';

  --min-globe-pt: var(--f-globemin);
  --max-globe-pt: var(--f-globemax);
  height: calc((1 - var(--progress)) * var(--min-globe-pt) + var(--max-globe-pt) * var(--progress));

  .oval {
    --uno: 'ring ring-neutral-400 ring-8 z-1';
    --min-globe-width: 150vw;
    --max-globe-width: 110vw;
    width: calc((1 - var(--progress)) * var(--min-globe-width) + var(--max-globe-width) * var(--progress));
    aspect-ratio: 984 / 368;
    translate: calc(-50% + 50vw);

    > div {
      --uno: 'pointer-events-none transition-colors h-max !self-start';
      margin-top: 16px;
      width: clamp(50vw, 70vw, 100%);
      aspect-ratio: 984 / 368;
      transform: scale(calc(1 + 0.35 * var(--progress)));
      transform-origin: top center;
      opacity: var(--progress);
    }

    [i-oasis-regions\:rest-of-the-world] {
      --uno: 'text-neutral-600';
    }

    [i-oasis-regions\:europe] {
      --primary: rgb(var(--nq-orange));
      --grey: rgb(var(--nq-neutral-600));
      --mix: clamp(0%, calc((var(--progress) / 0.33) * 100%), 100%);
      color: color-mix(in srgb, var(--primary) calc(100% - var(--mix)), var(--grey) calc(1 * var(--mix)));
    }

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
</style>
