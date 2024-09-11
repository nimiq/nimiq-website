<script setup lang="ts">
import { Tweenable } from '@nimiq/utils'

const props = withDefaults(defineProps<{
  value?: number
  decimals?: number
  animationDuration?: number
  min?: number
  max?: number
  locale?: string
  digitsCount?: number
  allowAnimation?: boolean
}>(), {
  decimals: 0,
  value: 0,
  animationDuration: 1000,
  min: 0,
  max: 100,
  locale: 'en-US',
  allowAnimation: false,
})

const value = toRef(props, 'value')
const decimals = toRef(props, 'decimals')
const animationDuration = toRef(props, 'animationDuration')
const min = toRef(props, 'min')
const max = toRef(props, 'max')
const locale = toRef(props, 'locale')
const digitsCount = toRef(props, 'digitsCount')
const allowAnimation = toRef(props, 'allowAnimation')

const tweeningValue = ref(value)
let abortController: AbortController | null = null

const formatter = new Intl.NumberFormat(locale.value, {
  style: 'decimal',
  minimumFractionDigits: decimals.value,
  maximumFractionDigits: decimals.value,
})

const formattedValue = computed(() => {
  const formatted = formatter.format(tweeningValue.value)
  if (digitsCount.value) {
    const parts = formatted.split('.')
    const integerPart = parts[0]!.replace(/\D/g, '')
    const padding = '0'.repeat(Math.max(0, digitsCount.value - integerPart.length))
    return padding + formatted
  }
  return formatted
})

onMounted(() => {
  if (allowAnimation.value) { // Check allowAnimation prop
    if (value.value === 0 && min.value !== undefined && max.value !== undefined) {
      startLoadingAnimation()
    }
    else {
      tween(0, tweeningValue.value || 0)
    }
  }
  else {
    tweeningValue.value = value.value
  }
})

watch(value, (newValue) => {
  if (allowAnimation.value) { // Check allowAnimation prop
    if (abortController) {
      abortController.abort()
      abortController = null
    }
    tween(tweeningValue.value, newValue)
  }
  else {
    tweeningValue.value = newValue
  }
})

function tween(startValue: number, endValue: number) {
  if (import.meta.server)
    return

  const transition = new Tweenable(endValue, startValue, animationDuration.value)

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
  abortController = new AbortController()

  function animate() {
    if (abortController?.signal.aborted)
      return

    const randomValue = Math.random() * (max.value - min.value) + min.value
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
  <span data-allow-mismatch style="font-variant-numeric: tabular">{{ formattedValue }}</span>
</template>
