<script setup lang="ts">
import { Tweenable } from '@nimiq/utils'

const {
  decimals = 0,
  value = 0,
  duration = 1000,
  digitsCount,
  min,
  max,
} = defineProps<{
  value?: number
  decimals?: number
  duration?: number
  min?: number
  max?: number
  digitsCount?: number
}>()

const locale = useLocale()

const tweeningValue = ref(value)

let abortController: AbortController | undefined

const formatter = new Intl.NumberFormat(locale.value, {
  style: 'decimal',
  minimumFractionDigits: decimals,
  maximumFractionDigits: decimals,
})

const formattedValue = computed(() => {
  const formatted = formatter.format(tweeningValue.value)

  // Only add padding if digitsCount is defined and valid
  if (digitsCount && digitsCount > 0) {
    const decimalSeparator = (0.1).toLocaleString(locale.value).replace(/\d/g, '')
    const parts = formatted.split(decimalSeparator)
    const integerPart = parts[0]!.replace(/\D/g, '')
    const padding = '0'.repeat(Math.max(0, digitsCount - integerPart.length))
    return padding + formatted
  }

  return formatted
})

onMounted(() => {
  if (value === 0 && min && max) {
    startLoadingAnimation()
  }
  else {
    tween(0, tweeningValue.value || 0)
  }
})

watch(() => value, (newValue) => {
  if (abortController) {
    abortController.abort()
    abortController = undefined
  }
  tween(tweeningValue.value, newValue)
})

function tween(startValue: number, endValue: number) {
  if (import.meta.server)
    return

  const transition = new Tweenable(endValue, startValue, duration)

  function animate() {
    const progress = transition.progress
    const currentValue = transition.currentValue
    tweeningValue.value = currentValue
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  animate()
}

function startLoadingAnimation() {
  if (!min || !max)
    return

  abortController = new AbortController()

  function animate() {
    if (abortController?.signal.aborted)
      return

    const randomValue = Math.random() * (max! - min!) + min!
    const randomDuration = Math.random() * 1000 + 500 // Random duration between 500ms and 1500ms

    const transition = new Tweenable(randomValue, tweeningValue.value, randomDuration)

    function step() {
      if (abortController?.signal.aborted)
        return

      const progress = transition.progress
      tweeningValue.value = transition.currentValue

      if (progress < 1) {
        requestAnimationFrame(step)
      }
      else {
        animate() // Start the next animation immediately
      }
    }

    step()
  }

  animate()
}
</script>

<template>
  <span data-allow-mismatch tabular-nums>{{ formattedValue }}</span>
</template>
