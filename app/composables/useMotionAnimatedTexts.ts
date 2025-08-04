import { animate } from 'motion-v'

interface UseMotionAnimatedTextsOptions {
  duration?: MaybeRef<number>
  shouldPlay?: MaybeRef<boolean>
}

interface RollingCharacter {
  char: string
  id: string
  yPosition: number
}

interface CharacterSlot {
  original: string
  rollingChars: RollingCharacter[]
  isRolling: boolean
  isRevealed: boolean
  finalChar: string
}

export function useMotionAnimatedTexts(
  texts: MaybeRef<string[]>,
  { duration = 40000, shouldPlay = false }: UseMotionAnimatedTextsOptions = {},
) {
  const alphabets = '!#$%&()_+{}|:<>?-=[]\\;/'

  const getRandomSymbol = (): string => alphabets[Math.floor(Math.random() * alphabets.length)]!

  // Create reactive character slots for each word
  const words = computed(() => {
    return toValue(texts).map((text) => {
      return text.split('').map(char => reactive<CharacterSlot>({
        original: char,
        rollingChars: [
          { char: getRandomSymbol(), id: `init-0`, yPosition: 0 },
          { char: getRandomSymbol(), id: `init-1`, yPosition: -100 },
          { char: getRandomSymbol(), id: `init-2`, yPosition: -200 },
        ],
        isRolling: false,
        isRevealed: false,
        finalChar: getRandomSymbol(),
      }))
    })
  })

  const activeAnimations = new Map<string, any>()

  const startRolling = (charSlot: CharacterSlot, slotId: string) => {
    charSlot.isRolling = true
    charSlot.isRevealed = false

    // Generate rolling sequence
    let charCounter = 0
    const rollInterval = setInterval(() => {
      if (!charSlot.isRolling) {
        clearInterval(rollInterval)
        return
      }

      // Add new character from bottom
      const newChar = {
        char: getRandomSymbol(),
        id: `${slotId}-${charCounter++}`,
        yPosition: -300,
      }

      charSlot.rollingChars.push(newChar)

      // Animate all characters up
      charSlot.rollingChars.forEach((rollingChar) => {
        const newY = rollingChar.yPosition + 100

        animate(
          {},
          {},
          {
            duration: 0.1,
            onUpdate: (progress: number) => {
              rollingChar.yPosition = rollingChar.yPosition + (100 * progress)
            },
            onComplete: () => {
              rollingChar.yPosition = newY
            },
          },
        )
      })

      // Remove characters that have scrolled off-screen
      charSlot.rollingChars = charSlot.rollingChars.filter(char => char.yPosition < 200)

      // Ensure we always have visible characters
      if (charSlot.rollingChars.length < 3) {
        for (let i = charSlot.rollingChars.length; i < 3; i++) {
          charSlot.rollingChars.push({
            char: getRandomSymbol(),
            id: `${slotId}-fill-${charCounter++}`,
            yPosition: -100 * (i + 1),
          })
        }
      }
    }, 80) // Roll every 80ms for smooth effect

    activeAnimations.set(slotId, rollInterval)
  }

  const stopRolling = (charSlot: CharacterSlot, slotId: string) => {
    charSlot.isRolling = false

    // Clear rolling interval
    const rollInterval = activeAnimations.get(slotId)
    if (rollInterval) {
      clearInterval(rollInterval)
      activeAnimations.delete(slotId)
    }

    // Animate to final position with the correct character
    setTimeout(() => {
      charSlot.rollingChars = [
        { char: charSlot.original, id: `final-${slotId}`, yPosition: 0 },
      ]
      charSlot.finalChar = charSlot.original
      charSlot.isRevealed = true
    }, 200) // Small delay for dramatic effect
  }

  const startAnimation = () => {
    const totalDuration = toValue(duration) / 1000 // Convert to seconds

    words.value.forEach((word, wordIndex) => {
      word.forEach((charSlot, charIndex) => {
        const slotId = `word-${wordIndex}-char-${charIndex}`

        // Reset slot
        charSlot.rollingChars = [
          { char: getRandomSymbol(), id: `reset-0`, yPosition: 0 },
          { char: getRandomSymbol(), id: `reset-1`, yPosition: -100 },
          { char: getRandomSymbol(), id: `reset-2`, yPosition: -200 },
        ]
        charSlot.isRevealed = false
        charSlot.finalChar = getRandomSymbol()

        // Start rolling immediately
        setTimeout(() => {
          startRolling(charSlot, slotId)
        }, Math.random() * 500) // Small random delay to start rolling

        // Stop rolling at random time within duration
        const stopDelay = Math.random() * totalDuration * 1000
        setTimeout(() => {
          stopRolling(charSlot, slotId)
        }, stopDelay)
      })
    })
  }

  const resetAnimation = () => {
    // Clear all active animations
    activeAnimations.forEach(animation => clearInterval(animation))
    activeAnimations.clear()

    words.value.forEach((word) => {
      word.forEach((charSlot) => {
        charSlot.isRolling = false
        charSlot.isRevealed = false
        charSlot.rollingChars = [
          { char: getRandomSymbol(), id: `reset-0`, yPosition: 0 },
          { char: getRandomSymbol(), id: `reset-1`, yPosition: -100 },
          { char: getRandomSymbol(), id: `reset-2`, yPosition: -200 },
        ]
        charSlot.finalChar = getRandomSymbol()
      })
    })
  }

  // Watch shouldPlay to control animations
  watch(() => toValue(shouldPlay), (play) => {
    if (play) {
      startAnimation()
      // Restart the animation cycle every 45 seconds (40s duration + 5s buffer)
      const interval = setInterval(() => {
        if (toValue(shouldPlay)) {
          resetAnimation()
          setTimeout(startAnimation, 500) // Delay for reset
        }
        else {
          clearInterval(interval)
        }
      }, toValue(duration) + 5000)
    }
    else {
      resetAnimation()
    }
  })

  return { words }
}
