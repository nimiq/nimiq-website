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
const fiatIcons = { 'Europe': ['i-nimiq:logos-euro-outline-mono translate-x--1.5'], 'Central America': ['i-nimiq:logos-usd-outline-mono', 'i-nimiq:logos-colones-outline-mono'], 'World': [] } as const
const cryptoIcons = { 'Europe': ['i-nimiq:logos-nimiq-hexagon-outline-mono', 'i-nimiq:logos-bitcoin-outline-mono translate-x--1.5'], 'Central America': ['i-nimiq:logos-nimiq-hexagon-outline-mono', 'i-nimiq:logos-bitcoin-outline-mono translate-x-0.5'], 'World': [] } as const
</script>

<template>
  <div px-0 pb-0 bg-darkerblue of-x-clip f-pt-3xl>
    <div class="world-container" :style="`--progress: ${progress}`" :class="{ first: progress < 0.33, second: progress >= 0.33 && progress < 0.66, third: progress >= 0.66 }" max-w-none w-full aspect-2 relative>
      <div left-0 top-0 absolute>
        <div rounded="100%" class="oval" stack bg-neutral-100>
          <div i-oasis-regions:europe />
          <div i-oasis-regions:central-america />
          <div i-oasis-regions:rest-of-the-world />
        </div>
      </div>
    </div>
    <div bg-neutral-100 max-w-none w-full z-1>
      <div ref="scroller" mx-auto max-w-480 w-full relative>
        <ul flex="~ gap-16 md:gap-32 items-stretch" snap="x mandatory" pb-64 h-full w-full justify-self-start of-x-auto scroll-px-32 nq-scrollbar-hide>
          <li v-for="(item, i) in items" :key="i" snap="start always" p="first:l-32 last:r-32" data-slide flex-1 shrink-0 h-full>
            <div :class="bgColor[item.kind]" rounded-8 max-w-480 w-full f-p-lg md:w-416>
              <h3 text="white f-2xl" font-bold mb-8>
                {{ item.title }}
              </h3>
              <p text="white/80 f-base" mb-16>
                {{ item.subline }}
              </p>
              <div v-if="item.kind !== 'World'" flex="~ gap-8 items-center" text-white f-mt-sm>
                <div v-for="(icon, j) in fiatIcons[item.kind]" :key="j" flex="~ gap-8">
                  <div stack rounded-full size-40 ring="1.5 white/40">
                    <div :class="icon" size-24 />
                  </div>
                </div>
                <div mx-12 op-50 f-text-2xl i-nimiq:exchange />
                <div v-for="(icon, j) in cryptoIcons[item.kind]" :key="j" flex="~ gap-8">
                  <div stack rounded-full size-40 ring="1.5 white/40">
                    <div :class="icon" size-24 />
                  </div>
                </div>
              </div>
              <a v-if="item.linkHref" :href="item.linkHref" target="_blank" rel="noopener noreferrer" f-mt-md nq-arrow nq-pill-lg nq-pill-white>{{ item.linkLabel }}</a>
              <div v-if="item.kind !== 'Europe' && beTheFirstToKnowLabel" f-mt-sm>
                <h4 text="f-xs white/50" nq-label>
                  {{ beTheFirstToKnowLabel }}
                </h4>
                <div flex="~ gap-8 items-center" text-white f-mt-2xs>
                  <a href="https://twitter.com/nimiq" target="_blank" rel="noopener noreferrer" bg="white/20 hocus:white/40" stack rounded-full size-40 transition-colors aria-label="Twitter">
                    <div text="white/80 f-xl" transition-colors i-nimiq:logos-twitter-mono />
                  </a>
                  <a href="https://t.me/nimiq" target="_blank" rel="noopener noreferrer" bg="white/20 hocus:white/40" stack rounded-full size-40 transition-colors aria-label="Telegram">
                    <div text="white/80 f-lg hocus:white" translate-x--1 translate-y-1 transition-colors i-nimiq:logos-telegram-mono />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div flex="~ gap-6 justify-center" pb-32>
          <div v-for="i in 3" :key="i" rounded-full size-8 transition-colors :class="(progress < 0.33 && i === 1) || (progress >= 0.33 && progress < 0.66 && i === 2) || (progress >= 0.66 && i === 3) ? 'bg-green' : 'bg-neutral-300'" />
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
