<script setup lang="ts">
defineProps<{ headline: string, subline?: string, guessLabel?: string, chanceLabel?: string, reward?: string }>()

const marqueeRows = 6
const wordsPerRow = 14
const wordsList = Array.from({ length: marqueeRows }, () => ({ words: getRandomWords(wordsPerRow) }))

const container = useTemplateRef<HTMLDivElement>('container')
const containerIsVisible = ref(false)
useIntersectionObserver(container, ([entry]) => containerIsVisible.value = entry?.isIntersecting || false)
const { items: animatedWords } = useRandomAnimatedTexts(wordsList.flatMap(row => row.words).map(word => word.word), { shouldPlay: containerIsVisible })

const { publicAddress: prizeAddress, firstRealWords: firstRealWordsStr } = useRuntimeConfig().public.wordsChallenge
const firstRealWords = firstRealWordsStr.split(',')

const userInputs = reactive(Array.from({ length: 12 }, () => ref('')))
if (import.meta.env.DEV)
  userInputs.forEach(input => input.value = 'dummy')
const isChallengeFinished = ref(false)

async function unlockWallet(words: string[]) {
  try {
    const { KeyPair, MnemonicUtils } = await import('@nimiq/core/web')
    const wallet = KeyPair.derive(MnemonicUtils.mnemonicToEntropy(words).toExtendedPrivateKey().derivePath(`m/44'/242'/0'/0'`).privateKey)
    const address = wallet.toAddress().toUserFriendlyAddress()
    isChallengeFinished.value = address !== prizeAddress
    if (!isChallengeFinished.value)
      window?.open('https://wallet.nimiq.com', '_blank')!.focus()
  }
  catch {
    isChallengeFinished.value = true
  }
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
async function submitWords() {
  const userHasEnteredAllWords = userInputs.every(input => input.value)
  if (!userHasEnteredAllWords)
    return
  sleep(300)
  await unlockWallet([...firstRealWords, ...userInputs.map(input => input.value)])
}
function reset() {
  isChallengeFinished.value = false
  userInputs.forEach(input => input.value = '')
}
</script>

<template>
  <div class="max-w-none w-full absolute of-x-hidden" :style="`--c: ${wordsList.length};`">
    <div class="flex flex-col gap-6 h-full relative">
      <UiMarquee v-for="({ words }, i) in wordsList" :key="i" class="flex gap-0.5" :items="words" :should-play="containerIsVisible" :style="`--direction: ${i % 2 === 0 ? -1 : 1}`">
        <template #default="{ index: j }">
          <div class="p-4 rounded-1 bg-neutral-300 relative">
            <span class="font-semibold font-mono f-text-xl">{{ animatedWords[i * marqueeRows + j]![1] }}</span>
            <div class="inset-4 absolute">
              <span class="font-semibold font-mono text-f-xl text-neutral-800">{{ animatedWords[i * marqueeRows + j]![0] }}</span>
              <span class="text-f-xl text-blue font-semibold font-mono">{{ animatedWords[i * marqueeRows + j]![1].value.slice(animatedWords[i * marqueeRows + j]![0].value.length) }}</span>
            </div>
          </div>
        </template>
      </UiMarquee>
      <div class="inset-0 absolute flex flex-col gap-6 flex-justify-between">
        <div v-for="i in wordsList.length" :key="i" class="marquee-overlay size-full pointer-events-none z-1" />
      </div>
    </div>
  </div>
  <div ref="container" class="dark flex flex-col px-4 px-sm:64 mx-auto pb-12 pt-8 rounded-2 max-w-[492px] relative z-1 of-hidden" shadow style="background-image: linear-gradient(to bottom, #260133, var(--colors-darkblue));">
    <div :class="{ 'slide-up': isChallengeFinished }">
      <h3 class="text-center">
        {{ headline }}
      </h3>
      <p class="mt-4 text-center text-neutral-800 text-f-sm">
        {{ subline }}
      </p>

      <div class="mt-8 relative">
        <transition enter-active-class="transition-opacity duration-300ms ease-out" enter-from-class="op-0" enter-to-class="op-100" leave-active-class="transition-opacity duration-300ms ease-out" leave-from-class="op-100" leave-to-class="op-0">
          <div v-if="isChallengeFinished" class="bg-neutral-0 bg-op-20 pointer-events-none -inset-x-16 -inset-y-4 absolute z-2 backdrop-blur-8" />
        </transition>
        <p class="text-center text-blue font-bold">
          {{ guessLabel }}
        </p>

        <svg class="w-[90px] -left-5 top-2 absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.7 228.6">
          <g class="stroke-blue stroke-width-2" fill="none" stroke-linecap="round">
            <path d="M76.8 10c-11 11-58.3 32.3-65.1 67-7 34.5 19.6 117 23.8 140.7M75.3 12.1C64.1 22.7 17.1 40.8 11 75c-6.3 34.5 22.7 119.8 27 143.5" />
            <path d="M23.8 198c3.9 8.6 12.3 14.6 14 20.6m-14-20.7c3 3.9 6.2 8.3 14 20.7m2.5-24.9c-2.6 10.3-.6 18-2.4 24.9m2.4-25c-.7 5-1.2 10.3-2.4 25" />
          </g>
        </svg>

        <ul class="grid grid-cols-3 gap-2 mt-4 relative z-0">
          <li v-for="word in firstRealWords" :key="word" class="py-[9px] rounded-1 bg-white/10 text-white text-center">
            {{ word }}
          </li>
          <li v-for="(input, i) in userInputs" :key="i" class="shrink-0">
            <input v-model="input.value" class="border-2 border-white/30 border-hocus:blue text-center text-blue font-semibold px-0.5 outline-none caret-blue rounded-1 bg-transparent h-9 w-full transition" type="text" :aria-label="`Word ${i + 12 + 1}`" :placeholder="`${i + 12}`" un-placeholder="font-semibold text-white/30" autocomplete="off" @blur="submitWords">
          </li>
        </ul>
        <template v-if="isChallengeFinished">
          <div class="dark flex flex-justify-center flex-items-center flex-col w-[492px] -inset-x-16 inset-y-0 absolute z-2" scheme-dark>
            <p class="challenge-over text-center text-40 text-red-neon font-retro">
              Try again
            </p>
            <p class="delayed text-center text-white/80 text-f-lg px-10 max-w-40ch f-mt-md">
              Even using a computer, it would take you <b class="text-white">10 lifetimes</b> to crack this wallet...
            </p>
            <button class="delayed f-mt-xs nq-pill-tertiary" @click="reset">
              Restart
            </button>
          </div>
        </template>
      </div>
    </div>

    <div class="mt-8 relative">
      <!-- SyntheticWave inlined -->
      <div class="flex flex-col pointer-events-none -inset-16 top-0 absolute z-0" :style="`--grid-color: var(--colors-${isChallengeFinished ? 'purple' : 'blue'})`">
        <div class="grid-container flex flex-basis-200 bg-inherit relative" perspective-1200 before="absolute inset-0" />
        <div class="retro-overlay inset-0 absolute" />
      </div>
      <p class="text-f-xl text-white/80 text-center font-semibold relative z-1">
        {{ chanceLabel }}
      </p>
      <Icon class="mt-8 h-[66px] w-full relative z-1" name="custom:10-million-nim" />
    </div>
  </div>
</template>

<style scoped>
.marquee-overlay {
  --x1: 5vw;
  --x2: 17vw;
  background-image: linear-gradient(
    90deg,
    var(--colors-neutral-0) 0%,
    var(--colors-neutral-0) var(--x1),
    color-mix(in oklch, var(--colors-neutral-0) 60%, transparent) var(--x2),
    color-mix(in oklch, var(--colors-neutral-0) 60%, transparent) calc(100% - var(--x2)),
    var(--colors-neutral-0) calc(100% - var(--x1)),
    var(--colors-neutral-0) 100%
  );
  &:nth-child(2n) {
    --x1: 8vw;
    --x2: 30vw;
  }
}
.challenge-over {
  text-shadow:
    0 0 10px rgba(255, 0, 85, 0.8),
    0 0 20px rgba(255, 0, 85, 0.5);
  will-change: transform;
  @media (prefers-reduced-motion: no-preference) {
    animation: stamp 180ms both 800ms;
    animation-timing-function: ease-out;
  }
}
.delayed {
  opacity: 0;
  animation: fadeIn 150ms forwards 3.6s;
  animation-timing-function: ease-out;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes stamp {
  0% {
    opacity: 0;
    transform: scale(10);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* SyntheticWave styles */
.grid-container:before {
  --uno: 'content-empty absolute inset-0';
  --uno: 'rotate-x-50 scale-173 translate-z--200';
  background:
    linear-gradient(to right, var(--grid-color, var(--colors-blue)) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-color, var(--colors-blue)) 1px, transparent 1px);
  background-size:
    2.5rem 10rem,
    10rem 0.75rem;
  animation: grid 16s linear infinite;
  filter: drop-shadow(0 0 2px var(--grid-color, var(--colors-blue)));
}
@keyframes grid {
  from {
    background-position-y: -14rem;
  }
  to {
    background-position-y: 0%;
  }
}
.retro-overlay {
  --bg-color: 25.41% 0.0676 286.74;
  --gradient-height: 128px;
  background: linear-gradient(
    180deg,
    oklch(var(--bg-color)) 0px,
    oklch(var(--bg-color) / 0.991) calc(0.117 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.967) calc(0.213 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.929) calc(0.291 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.879) calc(0.353 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.818) calc(0.403 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.748) calc(0.445 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.671) calc(0.482 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.589) calc(0.517 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.503) calc(0.554 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.414) calc(0.596 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.325) calc(0.646 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.238) calc(0.708 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.153) calc(0.786 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.073) calc(0.882 * var(--gradient-height)),
    transparent var(--gradient-height)
  );
}
</style>
