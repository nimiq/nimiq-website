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
  <div :style="`--c: ${wordsList.length};`" max-w-none w-full absolute of-x-hidden>
    <div flex="~ col gap-24" h-full relative>
      <UiMarquee v-for="({ words }, i) in wordsList" :key="i" :items="words" :should-play="containerIsVisible" flex="~ gap-2" :style="`--direction: ${i % 2 === 0 ? -1 : 1}`">
        <template #default="{ index: j }">
          <div p-16 rounded-4 bg-neutral-300 relative>
            <span font="semibold mono" f-text-xl>{{ animatedWords[i * marqueeRows + j]![1] }}</span>
            <div inset-16 absolute>
              <span font="semibold mono" text="f-xl neutral-800">{{ animatedWords[i * marqueeRows + j]![0] }}</span>
              <span text="f-xl blue" font="semibold mono">{{ animatedWords[i * marqueeRows + j]![1].value.slice(animatedWords[i * marqueeRows + j]![0].value.length) }}</span>
            </div>
          </div>
        </template>
      </UiMarquee>
      <div inset-0 absolute flex="~ col gap-24 justify-between">
        <div v-for="i in wordsList.length" :key="i" class="marquee-overlay" size-full pointer-events-none z-1 />
      </div>
    </div>
  </div>
  <div ref="container" flex="~ col" class="dark" px="16 sm:64" mx-auto pb-48 pt-32 rounded-8 max-w-492 shadow relative z-1 of-hidden style="background-image: linear-gradient(to bottom, #260133, var(--colors-darkblue));">
    <div :class="{ 'slide-up': isChallengeFinished }">
      <h3 text-center>
        {{ headline }}
      </h3>
      <p mt-16 text="center neutral-800 f-sm">
        {{ subline }}
      </p>

      <div mt-32 relative>
        <transition enter-active-class="transition-opacity duration-300ms ease-out" enter-from-class="op-0" enter-to-class="op-100" leave-active-class="transition-opacity duration-300ms ease-out" leave-from-class="op-100" leave-to-class="op-0">
          <div v-if="isChallengeFinished" bg-neutral-0 bg-op-20 pointer-events-none inset-x--64 inset-y--16 absolute z-2 backdrop-blur-8 />
        </transition>
        <p text="center blue" font-bold>
          {{ guessLabel }}
        </p>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.7 228.6" w-90 left--20 top-8 absolute>
          <g fill="none" stroke-blue stroke-linecap="round" stroke-width="2">
            <path d="M76.8 10c-11 11-58.3 32.3-65.1 67-7 34.5 19.6 117 23.8 140.7M75.3 12.1C64.1 22.7 17.1 40.8 11 75c-6.3 34.5 22.7 119.8 27 143.5" />
            <path d="M23.8 198c3.9 8.6 12.3 14.6 14 20.6m-14-20.7c3 3.9 6.2 8.3 14 20.7m2.5-24.9c-2.6 10.3-.6 18-2.4 24.9m2.4-25c-.7 5-1.2 10.3-2.4 25" />
          </g>
        </svg>

        <ul grid="~ cols-3 gap-8" mt-16 relative z-0>
          <li v-for="word in firstRealWords" :key="word" py-9 rounded-4 bg="white/10" text="white center">
            {{ word }}
          </li>
          <li v-for="(input, i) in userInputs" :key="i" shrink-0>
            <input v-model="input.value" type="text" :aria-label="`Word ${i + 12 + 1}`" border="2 white/30 hocus:blue" :placeholder="`${i + 12}`" text="center blue" font-semibold px-2 outline-none caret-blue rounded-4 bg-transparent h-36 w-full transition un-placeholder="font-semibold text-white/30" autocomplete="off" @blur="submitWords">
          </li>
        </ul>
        <template v-if="isChallengeFinished">
          <div flex="~ justify-center items-center col" class="dark" scheme-dark w-492 inset-x--64 inset-y-0 absolute z-2>
            <p text="center 40 red-neon" font-retro class="challenge-over">
              Try again
            </p>
            <p text="center white/80 f-lg" class="delayed" px-40 max-w-40ch f-mt-md>
              Even using a computer, it would take you <b text-white>10 lifetimes</b> to crack this wallet...
            </p>
            <button f-mt-xs nq-pill-tertiary class="delayed" @click="reset">
              Restart
            </button>
          </div>
        </template>
      </div>
    </div>

    <div mt-32 relative>
      <!-- SyntheticWave inlined -->
      <div :style="`--grid-color: var(--colors-${isChallengeFinished ? 'purple' : 'blue'})`" flex="~ col" pointer-events-none inset--64 top-0 absolute z-0>
        <div class="grid-container" flex="~ basis-200" bg-inherit perspective-1200 relative before="absolute inset-0" />
        <div inset-0 absolute class="retro-overlay" />
      </div>
      <p text="f-xl white/80 center" font-semibold relative z-1>
        {{ chanceLabel }}
      </p>
      <Icon name="custom:10-million-nim" class="mt-32 h-66 w-full relative z-1" />
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
