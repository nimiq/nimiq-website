<script setup lang="ts">
const props = defineProps<{ hashes: string[] }>()

const WIDTH = 320
const HEIGHT = 240
const CIRCUMFERENCE = 2 * Math.PI

const canvas = ref <HTMLCanvasElement> ()

onMounted(() => {
  if (!canvas.value)
    return

  const ctx = canvas.value.getContext('2d')!
  const txCount = props.hashes.length
  let radius, step, padding

  if (txCount <= 88) {
    radius = 8
    step = radius * 2 + 12
    padding = 12
  }
  else if (txCount <= 352) {
    radius = 4
    step = radius * 2 + 6
    padding = 12
  }
  else {
    radius = 2
    step = radius * 2 + 4
    padding = 10
  }

  const startX = WIDTH - padding - radius
  const startY = HEIGHT - padding - radius

  let x = startX
  let y = startY

  for (const hash of props.hashes) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, CIRCUMFERENCE)
    ctx.fillStyle = getLiveviewColorValue({ hash })
    ctx.fill()

    y -= step // Go one step up

    if (y < radius) {
      y = startY // Go back to bottom
      x -= step // Go one step left
    }
  }
})
</script>

<template>
  <canvas ref="canvas" width="320" height="240" />
</template>
