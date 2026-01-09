<script setup lang="ts">
import Tweenable from '@nimiq/utils/tweenable'

const { decimals = 0, value = 0, duration = 1000 } = defineProps<{ value?: number, decimals?: number, duration?: number }>()

const locale = useLocale()
const tweeningValue = ref(value)
let abortController: AbortController | undefined

const formatter = new Intl.NumberFormat(locale.value, { style: 'decimal', minimumFractionDigits: decimals, maximumFractionDigits: decimals })
const formattedValue = computed(() => formatter.format(tweeningValue.value))

onMounted(() => tween(0, tweeningValue.value || 0))

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
    if (progress < 1)
      requestAnimationFrame(animate)
  }
  animate()
}
</script>

<template>
  <span data-allow-mismatch tabular-nums>{{ formattedValue }}</span>
</template>
