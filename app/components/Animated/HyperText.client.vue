<script setup lang="ts">
const { text, duration = 100, shouldPlay } = defineProps<{ text: string, duration?: number, shouldPlay?: boolean }>()

const alphabets = '!#$%&()_+{}|:<>?-=[]\;/'
const displayText = ref(text.split(''))
const iterations = ref(0)
const getRandomLetter = () => alphabets[Math.floor(Math.random() * alphabets.length)]!

function triggerAnimation() {
  iterations.value = 0
  startAnimation()
}

const { pause, resume, isActive } = useIntervalFn(
  () => {
    if (iterations.value >= text.length) {
      pause()
      return
    }

    displayText.value = displayText.value.map((l, i) =>
      l === ' ' ? l : i <= iterations.value ? text[i]! : getRandomLetter(),
    )
    iterations.value += 0.1
  },
  computed(() => duration / (text.length * 3)),
  {
    immediate: false,
  },
)

watch(() => shouldPlay, (shouldPlay) => {
  if (shouldPlay)
    resume()
  else pause()
})

function startAnimation() {
  pause()
  resume()
}

useIntervalFn(() => {
  if (isActive.value)
    return
  if (Math.random() < 0.035)
    triggerAnimation()
}, 100)
</script>

<template>
  <div flex scale-100 cursor-default of-hidden :style="`width: ${text.length}ch`">
    <div flex>
      <span
        v-for="(letter, i) in displayText"
        :key="i"
        inline-block w-12 lh="[1.1]" font-mono
        :class="{
          'text-blue': letter !== text[i],
        }"
      >
        {{ letter }}
      </span>
    </div>
  </div>
</template>
