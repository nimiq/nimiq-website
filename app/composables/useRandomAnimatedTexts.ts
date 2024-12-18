import type { MaybeRef } from '@vueuse/core'
import { useIntervalFn } from '@vueuse/core'
import { computed, ref, toValue } from 'vue'

interface UseRandomAnimatedTextsOptions {
  duration?: MaybeRef<number>
  shouldPlay?: MaybeRef<boolean>
}

// Adjust this to control how often letters get revealed
const randomChance = 0.8

export function useRandomAnimatedTexts(
  texts: MaybeRef<string[]>,
  { duration = 100, shouldPlay = false }: UseRandomAnimatedTextsOptions = {},
) {
  const alphabets = '!#$%&()_+{}|:<>?-=[]\\;/'

  const items = computed(() => {
    return toValue(texts).map((text) => {
      const randomSymbols = Array.from({ length: text.length }, () => {
        const index = Math.floor(Math.random() * alphabets.length)
        return alphabets[index]
      }).join('')

      const revealed = ref('')
      const current = ref(randomSymbols)

      return [revealed, current] as const
    })
  })

  const revealNextLetter = (text: string, revealedSoFar: string, currentStr: string) => {
    const nextIndex = revealedSoFar.length
    if (nextIndex >= text.length)
      return { revealedSoFar, currentStr }

    if (Math.random() < randomChance) {
      const nextChar = text[nextIndex]
      const updatedRevealed = revealedSoFar + nextChar
      const updatedCurrent = updatedRevealed + currentStr.slice(nextIndex + 1)
      return { revealedSoFar: updatedRevealed, currentStr: updatedCurrent }
    }

    return { revealedSoFar, currentStr }
  }

  const resetWord = (text: string) => {
    const randomSymbols = Array.from({ length: text.length }, () => {
      const index = Math.floor(Math.random() * alphabets.length)
      return alphabets[index]
    }).join('')
    return { revealedSoFar: '', currentStr: randomSymbols }
  }

  useIntervalFn(() => {
    if (!toValue(shouldPlay))
      return

    items.value.forEach(([revealed, current], index) => {
      const text = toValue(texts)[index]!
      if (revealed.value.length < text.length) {
        const { revealedSoFar, currentStr } = revealNextLetter(text, revealed.value, current.value)
        revealed.value = revealedSoFar
        current.value = currentStr
      }
      else {
        const { revealedSoFar, currentStr } = resetWord(text)
        revealed.value = revealedSoFar
        current.value = currentStr
      }
    })
  }, computed(() => toValue(duration)))

  return {
    items,
  }
}
