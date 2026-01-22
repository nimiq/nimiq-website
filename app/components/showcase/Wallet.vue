<script setup lang="ts">
import type { WalletPlaygroundMessage } from '~/composables/usePlaygroundIframe'

defineProps<{ playgroundUrl: string }>()

function handlePlaygroundError(error: Error) {
  console.error('Playground iframe error:', error)
}
function handlePlaygroundMessage(_message: WalletPlaygroundMessage) {}

// Desktop background parallax clouds
function getScrollbarWidth(): number {
  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.overflow = 'scroll'
  document.body.appendChild(outer)
  const inner = document.createElement('div')
  outer.appendChild(inner)
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth
  outer.parentNode?.removeChild(outer)
  return scrollbarWidth
}

const scrollbarWidth = ref(0)
function updateScrollbarWidth(): void {
  scrollbarWidth.value = getScrollbarWidth()
}

function debounce<T extends (...args: any[]) => any>(fn: T, ms = 300) {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any, ...args: Parameters<T>): void {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

const debouncedUpdate = debounce(updateScrollbarWidth)

const containerRef = ref<HTMLElement | null>(null)
const { y: scrollY } = useWindowScroll()
const isVisible = shallowRef(false)

useIntersectionObserver(containerRef, ([entry]) => {
  isVisible.value = entry?.isIntersecting || false
}, { threshold: 0.1 })

const currentCloudTranslations = computed(() => {
  const rect = containerRef.value?.getBoundingClientRect()
  if (!rect)
    return { one: 0, two: 0, three: 0, four: 0 }
  const scrollProgress = Math.trunc(((scrollY.value - rect.top) / window.innerHeight) * 50)
  const speeds = { one: 2, two: 1, three: 3, four: 1 }
  return { one: -scrollProgress * speeds.one, two: -scrollProgress * speeds.two, three: scrollProgress * speeds.three, four: scrollProgress * speeds.four }
})

const cloudTranslations = reactive({ one: 0, two: 0, three: 0, four: 0 })

const { pause, resume } = useRafFn(() => {
  if (cloudTranslations.one !== currentCloudTranslations.value.one)
    cloudTranslations.one = currentCloudTranslations.value.one
  if (cloudTranslations.two !== currentCloudTranslations.value.two)
    cloudTranslations.two = currentCloudTranslations.value.two
  if (cloudTranslations.three !== currentCloudTranslations.value.three)
    cloudTranslations.three = currentCloudTranslations.value.three
  if (cloudTranslations.four !== currentCloudTranslations.value.four)
    cloudTranslations.four = currentCloudTranslations.value.four
}, { immediate: false })

watch(isVisible, visible => visible ? resume() : pause())

onMounted(() => {
  updateScrollbarWidth()
  window.addEventListener('resize', debouncedUpdate)
})

onUnmounted(() => {
  window.removeEventListener('resize', debouncedUpdate)
})
</script>

<template>
  <!-- Desktop -->
  <div class="relative max-md:hidden">
    <div class="h-[calc(100%+400px)] max-w-screen pointer-events-none -top-[400px]" />
    <div class="mx-auto size-full" stack>
      <!-- Ribbon fold -->
      <div class="self-start-! justify-self-end-! -mr-[18px] mt-12 w-11 origin-bottom-right rotate--45 z-1 border-22 border-x-transparent border-t-0 border-#EC991C" aria-hidden />

      <!-- Playground Background -->
      <div ref="containerRef" class="playground-background" :style="{ '--scrollbar-width': `${scrollbarWidth}px` }">
        <div class="metawrapper">
          <div class="metacontainer">
            <svg class="one metacloud" :style="{ '--translate-x': cloudTranslations.one }" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" />
            </svg>
            <svg class="metacloud two" :style="{ '--translate-x': cloudTranslations.two }" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" />
            </svg>
            <svg class="metacloud three max-sm:hidden" :style="{ '--translate-x': cloudTranslations.three }" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" />
            </svg>
            <svg class="metacloud four" :style="{ '--translate-x': cloudTranslations.four }" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" />
            </svg>
            <svg class="metarect max-sm:aspect-9/16" viewBox="0 0 1096 658" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7.99999C0 3.58171 3.58172 0 8 0H1088C1092.42 0 1096 3.58172 1096 8V650C1096 654.418 1092.42 658 1088 658H7.99997C3.58169 658 0 654.418 0 650V7.99999Z" />
            </svg>
          </div>
        </div>
        <div class="pb-container">
          <div class="rect max-sm:hidden">
            <svg viewBox="0 0 1096 658" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g class="opacity-0.5 max-sm:hidden">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 26C23.7614 26 26 23.7614 26 21C26 18.2386 23.7614 16 21 16C18.2386 16 16 18.2386 16 21C16 23.7614 18.2386 26 21 26Z" fill="#1F2348" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M37 26C39.7614 26 42 23.7614 42 21C42 18.2386 39.7614 16 37 16C34.2386 16 32 18.2386 32 21C32 23.7614 34.2386 26 37 26Z" fill="#1F2348" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M53 26C55.7614 26 58 23.7614 58 21C58 18.2386 55.7614 16 53 16C50.2386 16 48 18.2386 48 21C48 23.7614 50.2386 26 53 26Z" fill="#1F2348" />
              </g>
              <g class="opacity-0.5">
                <rect x="368" y="12" width="360" height="14" rx="7" fill="#1F2348" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div class="p-t-48 p-x-10 p-b-10 size-full z-1">
        <div v-if="playgroundUrl" class="rounded-1 size-full">
          <ShowcaseWalletPlaygroundIframe :playground-url="playgroundUrl" height="600px" @message="handlePlaygroundMessage" @error="handlePlaygroundError" />
        </div>
        <div v-else class="rounded-1 size-full">
          <ShowcaseWalletPlaygroundIframe height="600px" @message="handlePlaygroundMessage" @error="handlePlaygroundError" />
        </div>
      </div>

      <!-- Ribbon -->
      <div class="self-start-! justify-self-end-! -mr-[18px] mt-[11px] w-max relative z-10">
        <UiFloatingStars class="translate--50% absolute left-50% top-50% z-1" />
        <div class="bg-#E9B213 text-base md:text-lg text-white rounded-1.5 rounded-br-0 font-semibold ml-auto px-5 py-4 w-max relative z-2">
          Try live preview
        </div>
      </div>

      <!-- Selector -->
      <ShowcaseWalletActionSelector class="translate-y-[calc(50%-10px)]" />
    </div>

    <ShowcaseWalletCurrencies class="mt-6 md:mt-8" />
  </div>

  <!-- Mobile -->
  <div class="pb-8 relative md:hidden">
    <div class="mobile-bg left-[calc(var(--px)*-1)] w-[calc(100%+var(--px)*2)] inset-0 -top-40 absolute z--1" />

    <div class="w-[calc(100%+48px)] p-2 rounded-3.5 size-full aspect-0.7 -left-6 relative mt-8 md:mt-12">
      <div class="rounded-3.5 bg-neutral-300 op-50 inset-0 absolute backdrop-blur-3.5" style="box-shadow: inset 0px 0px 40px #FFFFFF;" />
      <div class="rounded-2 size-full relative z-1">
        <ShowcaseWalletPlaygroundIframe :playground-url height="100%" @message="handlePlaygroundMessage" @error="handlePlaygroundError" />
      </div>
    </div>
    <ShowcaseWalletActionSelector class="mx-auto w-max translate-y--50%" />

    <ShowcaseWalletCurrencies class="mt-1 md:mt-1.5" />
  </div>
</template>

<style scoped>
@property --translate-x {
  syntax: '<number>';
  initial-value: 0;
  inherits: false;
}

.playground-background {
  --border-width: 4;
  --blur-rect: 2px;
  --blur-cloud: 4px;
  --contrast: 30;
  --opacity: 0.3;
  --meta-border-color: #e2e2e8;
  --meta-bg-color: #000;
  --scrollbar-width: 0px;
  --total-width: calc(100vw - var(--scrollbar-width));
  --total-height: calc(100% + (var(--f-pt) * 2) + (var(--f-pb) * 2) - (var(--border-width) * 2px));
  --rect-width: min(calc(100% - (var(--px) * 2)), var(--nq-max-width));
  --rect-height: calc(var(--rect-width) * (658 / 1096));
  --gradient-shape: to bottom in oklch;
  --gradient-1-size: calc(100% * (1 / 1.8) + 1px);
  --gradient-1: linear-gradient(
    var(--gradient-shape),
    oklch(0.41150469274331075 0.10583049548165781 276.66014489473963 / 1) 0%,
    oklch(0.4142135236722443 0.10642338330152949 276.15440478036044 / 1) 12.5%,
    oklch(0.42234001645904484 0.10820204676114457 274.63718443722286 / 1) 25%,
    oklch(0.43588417110371247 0.11116648586050303 272.1084838653269 / 1) 37.5%,
    oklch(0.4548459876062471 0.11531670059960486 268.5683030646725 / 1) 50%,
    oklch(0.4792254659666488 0.12065269097845008 264.01664203525974 / 1) 62.5%,
    oklch(0.5090226061849176 0.1271744569970387 258.45350077708855 / 1) 75%,
    oklch(0.5442374082610533 0.13488199865537068 251.878879290159 / 1) 87.5%,
    oklch(0.5848698721950562 0.14377531595344603 244.29277757447107 / 1) 100%
  );
  --gradient-2-size: calc(100% * (0.8 / 1.8));
  --gradient-2: linear-gradient(
    var(--gradient-shape),
    oklch(0.5848698721950562 0.14377531595344603 244.29277757447107 / 1) 0%,
    oklch(0.579131109122486 0.14207849232464118 244.8602151123167 / 1) 12.5%,
    oklch(0.5619148199047753 0.13698802143822664 246.56252772585358 / 1) 25%,
    oklch(0.5332210045419243 0.12850390329420242 249.39971541508174 / 1) 37.5%,
    oklch(0.493049663033933 0.11662613789256851 253.37177818000114 / 1) 50%,
    oklch(0.44140079538080124 0.1013547252333249 258.4787160206118 / 1) 62.5%,
    oklch(0.3782744015825291 0.0826896653164716 264.72052893691375 / 1) 75%,
    oklch(0.30367048163911653 0.0606309581420086 272.0972169289069 / 1) 87.5%,
    oklch(0.21758903555056358 0.03517860370993592 280.60877999659135 / 1) 100%
  );
  justify-self: unset;
  height: 100%;
}

.metacontainer,
.metawrapper {
  position: absolute;
  top: 0;
  z-index: -1;
}

.metawrapper {
  background:
    var(--gradient-1) no-repeat,
    var(--gradient-2) no-repeat;
  background-size:
    var(--total-width) var(--gradient-1-size),
    var(--total-width) var(--gradient-2-size);
  background-position:
    0 0,
    0 100%;
  height: var(--total-height);
  width: var(--total-width);
  margin-top: calc(-1 * var(--f-pt));
  left: calc(-1 * var(--px));
  overflow: hidden;
}

.metacontainer {
  width: 100%;
  height: 100%;
  background-color: var(--meta-bg-color);
  filter: contrast(var(--contrast));
  opacity: var(--opacity);
  mix-blend-mode: lighten;
}

.metarect {
  box-sizing: content-box;
  border-radius: 10px;
  width: calc(100% - (var(--px) * 2));
  height: auto;
  position: absolute;
  top: var(--f-pt);
  left: calc(50vw - (var(--scrollbar-width) / 2));
  transform: translateX(-50%);
  border: calc(1px * var(--border-width)) solid var(--meta-border-color);
  background-color: var(--meta-border-color);
  filter: blur(var(--blur-rect));
}

.metacloud {
  --top: 0px;
  --left: 0px;
  --width: 120px;
  --height: 64px;
  --rotate: 0deg;
  --left-side: calc((-1 * var(--rect-width) / 2) - var(--width) / 2);
  --right-side: calc(var(--rect-width) / 2 + var(--width) / 2);
  --top-side: calc((-1 * var(--rect-height) / 2) - var(--height) / 2);
  --bottom-side: calc(var(--rect-height) / 2 + var(--height) / 2);
  --auto-width: calc(var(--height) * (120 / 64));
  --auto-height: calc(var(--width) * (64 / 120));
  overflow: visible;
  z-index: -1;
  position: absolute;
  top: calc(50% + var(--top));
  left: calc(50% + var(--left));
  width: var(--width);
  height: var(--height);
  fill: var(--meta-border-color);
  filter: blur(var(--blur-cloud));
  transform: translate(-50%, -50%) translateX(calc(var(--translate-x) * 1px)) rotateY(var(--rotate));
  will-change: --translate-x, transform;
}

.metacloud.one {
  --rotate: 180deg;
  --height: 180px;
  --width: var(--auto-width);
  --left: calc(var(--left-side) + 115px);
  --top: calc(var(--top-side) + 120px);
}

.metacloud.two {
  --rotate: 180deg;
  --height: 90px;
  --width: var(--auto-width);
  --left: calc(var(--left-side) + 60px);
  --top: calc(var(--bottom-side) - 180px);
}

.metacloud.three {
  --height: 288px;
  --width: var(--auto-width);
  --left: calc(var(--right-side) - 340px);
  --top: calc(var(--top-side) + 120px);
}

.metacloud.four {
  --height: 96px;
  --width: var(--auto-width);
  --left: calc(var(--right-side) - 65px);
  --top: calc(var(--bottom-side) - 140px);
}

.pb-container {
  z-index: 0;
  position: relative;
  top: calc((var(--border-width) * 1px));
  left: 0;
  width: 100%;
  height: 100%;
}

.rect {
  border-radius: 7px;
  overflow: hidden;
  position: relative;
}

.rect:before,
.rect:after {
  content: '';
  display: block;
  position: absolute;
  z-index: -1;
  height: var(--total-height);
  width: var(--total-width);
  margin-top: calc(-1 * var(--f-pt));
  left: calc(-1 * var(--px));
}

.rect:before {
  background:
    var(--gradient-1) no-repeat,
    var(--gradient-2) no-repeat;
  background-size:
    var(--total-width) var(--gradient-1-size),
    var(--total-width) var(--gradient-2-size);
  background-position:
    0 0,
    0 100%;
}

.rect:after {
  top: 0;
  background-color: var(--meta-border-color);
  opacity: 0.2;
}

/* Mobile background */
.mobile-bg {
  --gradient-shape: to bottom in oklch;
  --gradient-1-size: calc(100% * (1 / 1.8) + 1px);
  --gradient-1: linear-gradient(
    var(--gradient-shape),
    oklch(0.41150469274331075 0.10583049548165781 276.66014489473963 / 1) 0%,
    oklch(0.4142135236722443 0.10642338330152949 276.15440478036044 / 1) 12.5%,
    oklch(0.42234001645904484 0.10820204676114457 274.63718443722286 / 1) 25%,
    oklch(0.43588417110371247 0.11116648586050303 272.1084838653269 / 1) 37.5%,
    oklch(0.4548459876062471 0.11531670059960486 268.5683030646725 / 1) 50%,
    oklch(0.4792254659666488 0.12065269097845008 264.01664203525974 / 1) 62.5%,
    oklch(0.5090226061849176 0.1271744569970387 258.45350077708855 / 1) 75%,
    oklch(0.5442374082610533 0.13488199865537068 251.878879290159 / 1) 87.5%,
    oklch(0.5848698721950562 0.14377531595344603 244.29277757447107 / 1) 100%
  );
  --gradient-2-size: calc(100% * (0.8 / 1.8));
  --gradient-2: linear-gradient(
    var(--gradient-shape),
    oklch(0.5848698721950562 0.14377531595344603 244.29277757447107 / 1) 0%,
    oklch(0.579131109122486 0.14207849232464118 244.8602151123167 / 1) 12.5%,
    oklch(0.5619148199047753 0.13698802143822664 246.56252772585358 / 1) 25%,
    oklch(0.5332210045419243 0.12850390329420242 249.39971541508174 / 1) 37.5%,
    oklch(0.493049663033933 0.11662613789256851 253.37177818000114 / 1) 50%,
    oklch(0.44140079538080124 0.1013547252333249 258.4787160206118 / 1) 62.5%,
    oklch(0.3782744015825291 0.0826896653164716 264.72052893691375 / 1) 75%,
    oklch(0.30367048163911653 0.0606309581420086 272.0972169289069 / 1) 87.5%,
    oklch(0.21758903555056358 0.03517860370993592 280.60877999659135 / 1) 100%
  );
  background:
    var(--gradient-1) no-repeat,
    var(--gradient-2) no-repeat;
  background-size:
    var(--total-width) var(--gradient-1-size),
    var(--total-width) var(--gradient-2-size);
  background-position:
    0 0,
    0 100%;
}
</style>
