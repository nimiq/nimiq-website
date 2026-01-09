interface UseRandomAnimatedTextsOptions { shouldPlay?: MaybeRef<boolean> }

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

export function useRandomAnimatedTexts(texts: MaybeRef<string[]>, { shouldPlay = false }: UseRandomAnimatedTextsOptions = {}) {
  const alphabets = '!#$%&()_+{}|:<>?-=[]\\;/~@^*'

  const getRandomInterval = () => Math.floor(Math.random() * 120) + 80
  const getRandomRestartDelay = () => (Math.random() * 4 + 3) * 1000

  const generateRandomString = (length: number) => Array.from({ length }, () => {
    const index = Math.floor(Math.random() * alphabets.length)
    return alphabets[index]
  }).join('')

  const getRandomIterationsCount = () => Math.floor(Math.random() * 6) + 3

  const animationStates = computed(() => {
    return toValue(texts).map((text) => {
      const totalTime = (Math.random() * 20 + 25) * 1000
      const timePerLetter = totalTime / text.length
      const currentTime = Date.now()
      const randomInitialization = Math.random()

      let state: AnimationState

      if (randomInitialization < 0.3) {
        const revealedCount = Math.floor(Math.random() * Math.min(text.length, 3))
        const revealed = text.slice(0, revealedCount)
        const remaining = text.slice(revealedCount)
        state = { revealed, current: revealed + generateRandomString(remaining.length), currentLetterIndex: revealedCount, iterationsBeforeReveal: getRandomIterationsCount(), currentIterations: Math.floor(Math.random() * 3), iterationsAfterReveal: getRandomIterationsCount(), currentPostRevealIterations: Math.floor(Math.random() * 3), totalAnimationTime: totalTime, timePerLetter, startTime: currentTime - (revealedCount * timePerLetter * Math.random()), isComplete: false, lastRevealTime: currentTime, waitingToRestart: false, restartTime: 0 }
      }
      else if (randomInitialization < 0.6) {
        state = { revealed: text, current: text, currentLetterIndex: text.length, iterationsBeforeReveal: getRandomIterationsCount(), currentIterations: 0, iterationsAfterReveal: getRandomIterationsCount(), currentPostRevealIterations: 0, totalAnimationTime: totalTime, timePerLetter, startTime: currentTime, isComplete: true, lastRevealTime: currentTime, waitingToRestart: true, restartTime: currentTime + getRandomRestartDelay() }
      }
      else {
        const timeOffset = Math.random() * timePerLetter * 2
        state = { revealed: '', current: generateRandomString(text.length), currentLetterIndex: 0, iterationsBeforeReveal: getRandomIterationsCount(), currentIterations: Math.floor(Math.random() * 3), iterationsAfterReveal: getRandomIterationsCount(), currentPostRevealIterations: 0, totalAnimationTime: totalTime, timePerLetter, startTime: currentTime - timeOffset, isComplete: false, lastRevealTime: currentTime, waitingToRestart: false, restartTime: 0 }
      }
      return ref(state)
    })
  })

  const items = computed(() => animationStates.value.map(state => [computed(() => state.value.revealed), computed(() => state.value.current)] as const))

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

      if (state.waitingToRestart) {
        if (currentTime >= state.restartTime)
          resetAnimationState(state, text)
        return
      }

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

      if (state.isComplete)
        return

      if (state.currentLetterIndex >= text.length) {
        state.revealed = text
        state.current = text
        state.isComplete = true
        state.waitingToRestart = true
        state.restartTime = currentTime + getRandomRestartDelay()
        return
      }

      const unrevealedLength = text.length - state.revealed.length
      const newRandomPart = generateRandomString(unrevealedLength)
      state.current = state.revealed + newRandomPart

      if (state.currentPostRevealIterations < state.iterationsAfterReveal) {
        state.currentPostRevealIterations++
        return
      }

      const expectedRevealTime = state.startTime + (state.currentLetterIndex * state.timePerLetter)
      const shouldConsiderReveal = currentTime >= expectedRevealTime

      if (shouldConsiderReveal) {
        state.currentIterations++
        if (state.currentIterations >= state.iterationsBeforeReveal) {
          const nextChar = text[state.currentLetterIndex]
          state.revealed += nextChar
          state.currentLetterIndex++
          state.lastRevealTime = currentTime
          state.currentIterations = 0
          state.iterationsBeforeReveal = getRandomIterationsCount()
          state.currentPostRevealIterations = 0
          state.iterationsAfterReveal = getRandomIterationsCount()
          const remainingLength = text.length - state.revealed.length
          state.current = remainingLength > 0 ? state.revealed + generateRandomString(remainingLength) : state.revealed
        }
      }
    })
  }

  let intervalId: ReturnType<typeof setInterval> | null = null
  let currentInterval = getRandomInterval()

  const startAnimation = () => {
    if (intervalId)
      clearInterval(intervalId)
    const runUpdate = () => {
      updateAnimation()
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

  watch(() => toValue(shouldPlay), (play) => {
    if (play)
      startAnimation()
    else
      stopAnimation()
  }, { immediate: true })

  onScopeDispose(stopAnimation)

  return { items }
}
