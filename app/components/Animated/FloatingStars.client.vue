<script setup lang="ts">
import { computed, ref } from 'vue'

const { color = '#e9b213' } = defineProps<{ color?: string }>()

const canvas = useTemplateRef<HTMLCanvasElement>('canvas')
const ctx = computed(() => canvas.value?.getContext('2d'))
const { pixelRatio } = useDevicePixelRatio()

const stars = ref<Star[]>([])

const starsCount = 8

function animate() {
  ctx.value!.clearRect(0, 0, canvas.value!.width, canvas.value!.height)
  stars.value.forEach((star) => {
    star.update()
    star.draw(ctx.value!)
  })
}

const { resume } = useRafFn(animate, { immediate: false })

const minAngle = Math.PI
const maxAngle = (420 * Math.PI) / 180

const step = (maxAngle - minAngle) / starsCount

const angles = Array.from({ length: starsCount }, (_, i) => {
  const minAngleStep = minAngle + i * step
  const maxAngleStep = minAngle + (i + 1) * step
  return Math.random() * (maxAngleStep - minAngleStep) + minAngleStep
})

whenever(ctx, () => {
  canvas.value!.width = canvas.value!.offsetWidth * pixelRatio.value
  canvas.value!.height = canvas.value!.offsetHeight * pixelRatio.value
  ctx.value!.scale(pixelRatio.value, pixelRatio.value)
  stars.value = []

  for (let i = 0; i < starsCount; i++) {
    stars.value.push(new Star(angles[i]!))
  }

  resume()
})

const starSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 11">
  <path stroke="${color}" stroke-linecap="round" stroke-width="2" d="M1.9 5h8M6 9V1"/>
</svg>`

const starImage = new Image()
starImage.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(starSVG)}`

class Star {
  x: number = 0
  y: number = 0
  originalX: number = 0
  originalY: number = 0
  dx: number = 0
  dy: number = 0
  startTime: number = 0
  progress: number = 0
  size: number = 0
  angle: number = 0
  speed: number = 0
  initialOpacity: number = 0
  duration: number = 0

  constructor(angle: number) {
    this.angle = angle

    // Randomize the initial progress so the first frame we already have populated stars. Value between 5 and 40 seconds
    const initialProgress = Math.random() * 50 + 5
    this.reset(performance.now() - initialProgress * 1000)
  }

  reset(startTime = performance.now()) {
    if (!canvas.value)
      return

    const centerX = canvas.value.width / 2
    const centerY = canvas.value.height / 2

    this.x = centerX
    this.y = centerY
    this.originalX = this.x
    this.originalY = this.y

    const minSpeed = 1.5
    const maxSpeed = 3
    this.speed = Math.random() * (maxSpeed - minSpeed) + minSpeed

    this.dx = Math.cos(this.angle) * this.speed
    this.dy = Math.sin(this.angle) * this.speed

    this.size = Math.random() * 2.25 + 1
    // Opacity between 0.4 and 1.0
    this.initialOpacity = Math.random() * 0.6 + 0.4

    this.duration = Math.random() * 50000 + 80000 // 30-70 seconds
    this.startTime = startTime
  }

  update() {
    const now = performance.now()
    const elapsed = now - this.startTime
    this.progress = elapsed / this.duration

    if (this.progress >= 1) {
      this.reset()
      return
    }

    const t = elapsed / 1000 // Convert to seconds
    this.x = this.originalX + this.dx * t
    this.y = this.originalY + this.dy * t
  }

  draw(ctx: CanvasRenderingContext2D) {
    const elapsed = performance.now() - this.startTime
    const remainingTime = this.duration - elapsed
    let opacity = this.initialOpacity

    if (remainingTime <= 5000) { // Last 5 seconds
      const fadeProgress = remainingTime / 5000
      opacity = this.initialOpacity * fadeProgress
    }

    ctx.globalAlpha = opacity
    const size = this.size * 5
    const x = this.x - size / 2
    const y = this.y - size / 2
    ctx.drawImage(starImage, x, y, size, size)
    ctx.globalAlpha = 1
  }
}
</script>

<template>
  <canvas ref="canvas" pointer-events-none h-400 w-600 of-hidden />
</template>
