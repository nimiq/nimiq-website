<script setup lang="ts">
defineProps<{ headline: string, subheadline: string, guessTheRemainingWordsLabel: string, youDoNotStandAChanceToTake: string, rewardAmount: string }>()

const { getRandomWords } = useWords()
const marqueeRows = 6
const wordsPerRow = 14
const wordsList = Array.from({ length: marqueeRows }, () => ({ words: getRandomWords(wordsPerRow) }))

const container = useTemplateRef<HTMLDivElement>('container')
const containerIsVisible = ref(false)
useIntersectionObserver(container, ([entry]) => containerIsVisible.value = entry?.isIntersecting || false)
const { items: animatedWords } = useRandomAnimatedTexts(wordsList.flatMap(row => row.words).map(word => word.word), { shouldPlay: containerIsVisible })

const firstRealWords = ['coyote', 'flush', 'rug', 'snack', 'cash', 'artwork', 'question', 'sword', 'cinnamon', 'civil', 'lens', 'warfare']
const prizeAddress = 'NQ78 H0BC MUGB TG2Q E2SC 0GAB UGD5 NJ0B Y335'

const userInputs = reactive([ref(''), ref(''), ref(''), ref(''), ref(''), ref(''), ref(''), ref(''), ref(''), ref(''), ref(''), ref('')])
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
  <div :style="`--c: ${wordsList.length};`" absolute max-w-none w-full of-x-hidden>
    <div relative flex="~ col gap-24" h-full>
      <AnimatedMarquee v-for="({ words }, i) in wordsList" :key="i" :items="words" :should-play="containerIsVisible" flex="~ gap-2" :style="`--direction: ${i % 2 === 0 ? -1 : 1}`">
        <template #default="{ index: j }">
          <div relative rounded-4 bg-neutral-300 p-16>
            <span font="semibold mono" text-xl>{{ animatedWords[i * marqueeRows + j]![1] }}</span>
            <div absolute inset-16>
              <span font="semibold mono" text="xl neutral-800">
                {{ animatedWords[i * marqueeRows + j]![0] }}
              </span>
              <span text="xl blue" font="semibold mono">
                {{ animatedWords[i * marqueeRows + j]![1].value.slice(animatedWords[i * marqueeRows + j]![0].value.length) }}
              </span>
            </div>
          </div>
        </template>
      </AnimatedMarquee>
      <div absolute inset-0 flex="~ col gap-24 justify-between">
        <div v-for="i in wordsList.length" :key="i" class="marquee-overlay" pointer-events-none z-1 size-full />
      </div>
    </div>
  </div>
  <div ref="container" flex="~ col" bg-gradient="to-b from-[#260133] to-darkblue" class="dark" relative z-1 mx-auto max-w-492 of-hidden rounded-8 px="16 sm:64" pb-48 pt-32 shadow>
    <div :class="{ 'slide-up': isChallengeFinished }">
      <h3 text-center>
        {{ headline }}
      </h3>
      <p mt-16 text="center neutral-800 sm">
        {{ subheadline }}
      </p>

      <div relative mt-32>
        <transition enter-active-class="transition-opacity duration-300ms ease-out" enter-from-class="op-0" enter-to-class="op-100" leave-active-class="transition-opacity duration-300ms ease-out" leave-from-class="op-100" leave-to-class="op-0">
          <div v-if="isChallengeFinished" pointer-events-none absolute inset-x--64 inset-y--16 z-2 bg-neutral-0 bg-op-20 backdrop-blur-8 />
        </transition>
        <p text="center blue" font-bold>
          {{ guessTheRemainingWordsLabel }}
        </p>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.7 228.6" absolute left--20 top-8 w-90>
          <g fill="none" stroke-blue stroke-linecap="round" stroke-width="2">
            <path d="M76.8 10c-11 11-58.3 32.3-65.1 67-7 34.5 19.6 117 23.8 140.7M75.3 12.1C64.1 22.7 17.1 40.8 11 75c-6.3 34.5 22.7 119.8 27 143.5" />
            <path d="M23.8 198c3.9 8.6 12.3 14.6 14 20.6m-14-20.7c3 3.9 6.2 8.3 14 20.7m2.5-24.9c-2.6 10.3-.6 18-2.4 24.9m2.4-25c-.7 5-1.2 10.3-2.4 25" />
          </g>
        </svg>

        <ul grid="~ cols-3 gap-8" relative z-0 mt-16>
          <li v-for="word in firstRealWords" :key="word" rounded-4 py-9 bg="white/10" text="white center">
            {{ word }}
          </li>
          <li v-for="(input, i) in userInputs" :key="i" shrink-0>
            <input v-model="input.value" type="text" border="2 white/30 hocus:blue" :placeholder="`${i + 12}`" text="center blue" h-36 w-full rounded-4 bg-transparent px-2 font-semibold caret-blue outline-none transition un-placeholder="font-semibold text-white/30" @blur="submitWords">
          </li>
        </ul>
        <template v-if="isChallengeFinished">
          <div flex="~ justify-center items-center col" absolute inset-x--64 inset-y-0 z-2 w-492>
            <p text="center 40 red-neon" font-retro class="challenge-over">
              Try again
            </p>
            <p text="center neutral-900 lg" class="delayed" nq-mt-32 max-w-40ch px-40>
              Even using a computer, it would take you <b text-neutral>10 lifetimes</b> to crack this wallet...
            </p>
            <button nq-mt-16 nq-pill nq-pill-tertiary class="delayed" @click="reset">
              Restart
            </button>
          </div>
        </template>
      </div>
    </div>

    <div relative mt-32>
      <AnimatedSyntheticWave :style="`--grid-color: var(--nq-${isChallengeFinished ? 'purple' : 'blue'})`" absolute inset--64 top-0 z-0 />
      <p text="xl white/80 center" relative z-1 font-semibold>
        {{ youDoNotStandAChanceToTake }}
      </p>
      <div i-custom:10-million-nim relative z-1 mt-32 h-66 w-full />
    </div>
  </div>
</template>

<style scoped>
.marquee-overlay {
  --x1: 5vw;
  --x2: 17vw;
  background-image: linear-gradient(
    90deg,
    rgba(var(--nq-neutral-0) / 1) 0%,
    rgba(var(--nq-neutral-0) / 1) var(--x1),
    rgba(var(--nq-neutral-0) / 0.6) var(--x2),
    rgba(var(--nq-neutral-0) / 0.6) calc(100% - var(--x2)),
    rgba(var(--nq-neutral-0) / 1) calc(100% - var(--x1)),
    rgba(var(--nq-neutral-0) / 1) 100%
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
</style>
