import type { MaybeRef } from '@vueuse/core'
import { useIntervalFn } from '@vueuse/core'
import { computed, ref, toValue } from 'vue'

interface UseRandomAnimatedTextsOptions {
  shouldPlay?: MaybeRef<boolean>
}

interface AnimationState {
  revealed: string
  current: string
  currentLetterIndex: number
  iterationsBeforeReveal: number
  currentIterations: number
  iterationsAfterReveal: number
  currentPostRevealIterations: number
  totalAnimationTime: number
  timePerLetter: number
  startTime: number
  isComplete: boolean
  lastRevealTime: number
  waitingToRestart: boolean
  restartTime: number
}

export function useRandomAnimatedTexts(
  texts: MaybeRef<string[]>,
  { shouldPlay = false }: UseRandomAnimatedTextsOptions = {},
) {
  const alphabets = '!#$%&()_+{}|:<>?-=[]\\;/~@^*'

  // Generate random interval between 80-200ms
  const getRandomInterval = () => Math.floor(Math.random() * 120) + 80

  // Generate random restart delay between 3-7 seconds
  const getRandomRestartDelay = () => (Math.random() * 4 + 3) * 1000

  // Generate random string of specified length
  const generateRandomString = (length: number) => {
    return Array.from({ length }, () => {
      const index = Math.floor(Math.random() * alphabets.length)
      return alphabets[index]
    }).join('')
  }

  // Get random number of iterations before revealing next letter (3-8 iterations)
  const getRandomIterationsCount = () => Math.floor(Math.random() * 6) + 3

  const animationStates = computed(() => {
    return toValue(texts).map((text) => {
      // Random total animation time between 25-45 seconds
      const totalTime = (Math.random() * 20 + 25) * 1000
      const timePerLetter = totalTime / text.length
      const currentTime = Date.now()

      // Initialize with random state
      const randomInitialization = Math.random()

      let state: AnimationState

      if (randomInitialization < 0.3) {
        // 30% chance: Start with some letters already revealed
        const revealedCount = Math.floor(Math.random() * Math.min(text.length, 3))
        const revealed = text.slice(0, revealedCount)
        const remaining = text.slice(revealedCount)

        state = {
          revealed,
          current: revealed + generateRandomString(remaining.length),
          currentLetterIndex: revealedCount,
          iterationsBeforeReveal: getRandomIterationsCount(),
          currentIterations: Math.floor(Math.random() * 3), // Random progress
          iterationsAfterReveal: getRandomIterationsCount(),
          currentPostRevealIterations: Math.floor(Math.random() * 3),
          totalAnimationTime: totalTime,
          timePerLetter,
          startTime: currentTime - (revealedCount * timePerLetter * Math.random()),
          isComplete: false,
          lastRevealTime: currentTime,
          waitingToRestart: false,
          restartTime: 0,
        }
      }
      else if (randomInitialization < 0.6) {
        // 30% chance: Start in waiting/restart phase
        state = {
          revealed: text,
          current: text,
          currentLetterIndex: text.length,
          iterationsBeforeReveal: getRandomIterationsCount(),
          currentIterations: 0,
          iterationsAfterReveal: getRandomIterationsCount(),
          currentPostRevealIterations: 0,
          totalAnimationTime: totalTime,
          timePerLetter,
          startTime: currentTime,
          isComplete: true,
          lastRevealTime: currentTime,
          waitingToRestart: true,
          restartTime: currentTime + getRandomRestartDelay(),
        }
      }
      else {
        // 40% chance: Start fresh but with time offset
        const timeOffset = Math.random() * timePerLetter * 2 // Up to 2 letters worth of time

        state = {
          revealed: '',
          current: generateRandomString(text.length),
          currentLetterIndex: 0,
          iterationsBeforeReveal: getRandomIterationsCount(),
          currentIterations: Math.floor(Math.random() * 3), // Random progress
          iterationsAfterReveal: getRandomIterationsCount(),
          currentPostRevealIterations: 0,
          totalAnimationTime: totalTime,
          timePerLetter,
          startTime: currentTime - timeOffset,
          isComplete: false,
          lastRevealTime: currentTime,
          waitingToRestart: false,
          restartTime: 0,
        }
      }

      return ref(state)
    })
  })

  const items = computed(() => {
    return animationStates.value.map(state => [
      computed(() => state.value.revealed),
      computed(() => state.value.current),
    ] as const)
  })

  // Reset animation state for restart
  const resetAnimationState = (state: AnimationState, text: string) => {
    const totalTime = (Math.random() * 20 + 25) * 1000
    const currentTime = Date.now()

    state.revealed = ''
    state.current = generateRandomString(text.length)
    state.currentLetterIndex = 0
    state.iterationsBeforeReveal = getRandomIterationsCount()
    state.currentIterations = 0
    state.iterationsAfterReveal = getRandomIterationsCount()
    state.currentPostRevealIterations = 0
    state.totalAnimationTime = totalTime
    state.timePerLetter = totalTime / text.length
    state.startTime = currentTime
    state.isComplete = false
    state.lastRevealTime = currentTime
    state.waitingToRestart = false
    state.restartTime = 0
  }

  const updateAnimation = () => {
    if (!toValue(shouldPlay))
      return

    const textsArray = toValue(texts)

    animationStates.value.forEach((stateRef, index) => {
      const state = stateRef.value
      const text = textsArray[index]!
      const currentTime = Date.now()

      // Check if we're waiting to restart
      if (state.waitingToRestart) {
        if (currentTime >= state.restartTime) {
          resetAnimationState(state, text)
        }
        return
      }

      // Check if animation should be complete based on time
      if (currentTime - state.startTime > state.totalAnimationTime) {
        if (!state.isComplete) {
          state.revealed = text
          state.current = text
          state.isComplete = true
          state.waitingToRestart = true
          state.restartTime = currentTime + getRandomRestartDelay()
        }
        return
      }

      // If already complete, don't update
      if (state.isComplete)
        return

      // If we've revealed all letters, mark as complete
      if (state.currentLetterIndex >= text.length) {
        state.revealed = text
        state.current = text
        state.isComplete = true
        state.waitingToRestart = true
        state.restartTime = currentTime + getRandomRestartDelay()
        return
      }

      // Always generate new random characters for unrevealed portion
      const unrevealedLength = text.length - state.revealed.length
      const newRandomPart = generateRandomString(unrevealedLength)
      state.current = state.revealed + newRandomPart

      // Check if we're still in the post-reveal iteration phase
      if (state.currentPostRevealIterations < state.iterationsAfterReveal) {
        state.currentPostRevealIterations++
        return // Don't proceed to next letter yet
      }

      // Check if it's time to reveal the next letter
      const expectedRevealTime = state.startTime + (state.currentLetterIndex * state.timePerLetter)
      const shouldConsiderReveal = currentTime >= expectedRevealTime

      if (shouldConsiderReveal) {
        state.currentIterations++

        // Reveal next letter after enough iterations
        if (state.currentIterations >= state.iterationsBeforeReveal) {
          const nextChar = text[state.currentLetterIndex]
          state.revealed += nextChar
          state.currentLetterIndex++
          state.lastRevealTime = currentTime

          // Reset counters for next letter
          state.currentIterations = 0
          state.iterationsBeforeReveal = getRandomIterationsCount()

          // Reset post-reveal counters
          state.currentPostRevealIterations = 0
          state.iterationsAfterReveal = getRandomIterationsCount()

          // Update current to include the newly revealed letter
          const remainingLength = text.length - state.revealed.length
          if (remainingLength > 0) {
            const newRandomPart = generateRandomString(remainingLength)
            state.current = state.revealed + newRandomPart
          }
          else {
            state.current = state.revealed
          }
        }
      }
    })
  }

  // Use dynamic interval that changes randomly
  let intervalId: ReturnType<typeof setInterval> | null = null
  let currentInterval = getRandomInterval()

  const startAnimation = () => {
    if (intervalId)
      clearInterval(intervalId)

    const runUpdate = () => {
      updateAnimation()

      // Set next random interval
      currentInterval = getRandomInterval()
      intervalId = setTimeout(runUpdate, currentInterval)
    }

    runUpdate()
  }

  const stopAnimation = () => {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  // Watch for shouldPlay changes
  const shouldPlayValue = computed(() => toValue(shouldPlay))
  let lastShouldPlay = shouldPlayValue.value

  useIntervalFn(() => {
    const currentShouldPlay = shouldPlayValue.value
    if (currentShouldPlay !== lastShouldPlay) {
      if (currentShouldPlay) {
        startAnimation()
      }
      else {
        stopAnimation()
      }
      lastShouldPlay = currentShouldPlay
    }
  }, 100) // Check every 100ms for play state changes

  return {
    items,
  }
}
