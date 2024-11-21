<script setup lang="ts">
defineProps<{ headline: string, subheadline: string, guessTheRemainingWordsLabel: string, youDoNotStandAChanceToTake: string, rewardAmount: string }>()

const { getRandomWords } = useWords()
const wordsList = Array.from({ length: 6 }, () => ({ words: getRandomWords(14) }))

// coyote flush rug snack cash artwork question sword cinnamon civil lens warfare
const firstRealWords = ['coyote', 'flush', 'rug', 'snack', 'cash', 'artwork', 'question', 'sword', 'cinnamon', 'civil', 'lens', 'warfare']
const prizeAddress = 'NQ78 H0BC MUGB TG2Q E2SC 0GAB UGD5 NJ0B Y335'

const userInputs = reactive([ref(''), ref(''), ref(''), ref(''), ref(''), ref(''), ref(''), ref(''), ref(''), ref(''), ref(''), ref('')])
if (import.meta.env.DEV)
  userInputs.forEach(input => input.value = 'dummy')
const isGameOver = ref(false)

async function unlockWallet(words: string[]) {
  try {
    const { KeyPair, MnemonicUtils } = await import('@nimiq/core')
    const wallet = KeyPair.derive(MnemonicUtils.mnemonicToEntropy(words).toExtendedPrivateKey().derivePath(`m/44'/242'/0'/0'`).privateKey)
    const address = wallet.toAddress().toUserFriendlyAddress()
    isGameOver.value = address !== prizeAddress
    if (!isGameOver.value)
      window?.open('https://wallet.nimiq.com', '_blank')!.focus()
  }
  catch {
    isGameOver.value = true
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

watch(isGameOver, (value) => {
  if (!value)
    return
  setTimeout(() => {
    const audio = new Audio('/sounds/game-over.wav')
    audio.play()
  }, 200)
})

function reset() {
  isGameOver.value = false
  userInputs.forEach(input => input.value = '')
}
</script>

<template>
  <div absolute max-w-none w-full of-x-hidden :style="`--c: ${wordsList.length};`">
    <div relative flex="~ col gap-24" h-full>
      <AnimatedMarquee v-for="({ words }, key) in wordsList" :key :items="words" flex="~ gap-2" :style="`--direction: ${key % 2 === 0 ? -1 : 1}`">
        <template #default="{ item: { word } }">
          <div flex="~ gap-12 items-center" rounded-4 bg-neutral-100 p-16>
            <span text-neutral-800 font-semibold lh-none text-xl>
              <AnimatedHyperText :text="word" />
            </span>
          </div>
        </template>
      </AnimatedMarquee>
      <div absolute inset-0 flex="~ col gap-24 justify-between">
        <div v-for="i in wordsList.length" :key="i" class="marquee-overlay" pointer-events-none z-1 size-full />
      </div>
    </div>
  </div>
  <div flex="~ col" bg-gradient="to-b from-[#260133] to-darkblue" class="dark" relative z-1 mx-auto h-937 max-w-492 of-hidden rounded-8 px-64 pb-48 pt-32 shadow>
    <div :class="{ 'slide-up': isGameOver }">
      <h3 text-center>
        {{ headline }}
      </h3>
      <p mt-16 text="center neutral-800">
        {{ subheadline }}
      </p>

      <div relative mt-32>
        <p text="center blue" font-bold>
          {{ guessTheRemainingWordsLabel }}
        </p>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.7 228.6" absolute left--20 top-8 w-90>
          <g fill="none" stroke-blue stroke-linecap="round" stroke-width="2">
            <path d="M76.8 10c-11 11-58.3 32.3-65.1 67-7 34.5 19.6 117 23.8 140.7M75.3 12.1C64.1 22.7 17.1 40.8 11 75c-6.3 34.5 22.7 119.8 27 143.5" />
            <path d="M23.8 198c3.9 8.6 12.3 14.6 14 20.6m-14-20.7c3 3.9 6.2 8.3 14 20.7m2.5-24.9c-2.6 10.3-.6 18-2.4 24.9m2.4-25c-.7 5-1.2 10.3-2.4 25" />
          </g>
        </svg>
      </div>

      <ul grid="~ cols-3 gap-8" mt-16>
        <li v-for="word in firstRealWords" :key="word" rounded-4 py-9 bg="white/10" text="white center">
          {{ word }}
        </li>
        <li v-for="(input, i) in userInputs" :key="i" shrink-0>
          <input v-model="input.value" type="text" border="2 white/30 hocus:blue" :placeholder="`${i + 12}`" text="center blue" h-36 w-full rounded-4 bg-transparent px-2 font-semibold caret-blue outline-none transition un-placeholder="font-semibold text-white/30" @blur="submitWords">
        </li>
      </ul>
    </div>

    <div :class="{ fall: isGameOver }" z-1 mt-auto>
      <p text="xl white/80 center" font-semibold>
        {{ youDoNotStandAChanceToTake }}
      </p>
      <div i-custom:10-million-nim mt-32 h-66 w-full />
    </div>
    <div v-if="isGameOver" class="dark game-over" absolute inset-0 flex="~ justify-center items-center col" w-492>
      <p text="center 64/70 red-neon" font-retro class="game-over">
        Game over
      </p>
      <button text="white/90 18" group left--20 mt-64 bg-transparent font-retro class="delayed" @click="reset">
        <span op="0 group-hocus:80" font-retro>></span> Restart
      </button>
      <p text="left 10/24" mt-128 px-40 font-retro class="delayed">
        Even using a computer, it would take you <span text-white font-retro>10,000,000,000,000,000,000,000,000,000 years</span> to crack this wallet... <br><br> Good luck!
      </p>
    </div>
    <AnimatedSyntheticWave :style="`--grid-color: var(--nq-${isGameOver ? 'purple' : 'blue'})`" absolute inset-x-0 bottom-0 h-200 />
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

.slide-up {
  transition:
    transform 0.6s ease-in-out,
    opacity 0.6s ease-in-out;
  will-change: transform, opacity;
  transform: translateY(-100%);
  opacity: 0;
}

.game-over {
  .game-over {
    text-shadow:
      0 0 10px rgba(255, 0, 85, 0.8),
      0 0 20px rgba(255, 0, 85, 0.5);
    will-change: transform;
    @media (prefers-reduced-motion: no-preference) {
      animation:
        stamp 180ms both 800ms,
        shake 140ms infinite alternate 950ms;
      animation-timing-function: ease-out;
    }
  }

  .delayed {
    opacity: 0;
    animation: fadeIn 150ms forwards 3.6s;
    animation-timing-function: ease-out;
  }
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

.fall {
  transform-origin: top left;
  will-change: transform;
  animation: hinge 2s ease-in-out forwards;
}
@keyframes shake {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-1px, 1px);
  }
  50% {
    transform: translate(1px, -1px);
  }
  75% {
    transform: translate(-1px, -1px);
  }
}

@keyframes hinge {
  20%,
  60% {
    animation-timing-function: ease-in-out;
  }
  20%,
  60% {
    transform: rotate(80deg);
  }
  40%,
  80% {
    animation-timing-function: ease-in-out;
    opacity: 1;
    transform: rotate(60deg);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 700px, 0);
  }
}
</style>
