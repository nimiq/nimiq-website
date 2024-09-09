<script setup lang="ts">
import { Tweenable } from '@nimiq/utils'

const { decimals = 0, value = 0, animationDuration = 0 } = defineProps<{ value?: number, decimals?: number, animationDuration?: number }>()

const tweeningValue = ref(value)

onMounted(() => tween(0, tweeningValue.value || 0))
watch(() => value, (newValue) => {
  tween(tweeningValue.value, newValue)
})

function tween(startValue: number, endValue: number) {
  if (import.meta.server)
    return

  const transition = new Tweenable(endValue, startValue, animationDuration)

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
</script>

<template>
  <span style="font-variant-numeric: normal">{{ tweeningValue.toFixed(decimals) }}</span>
</template>
