<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

const canvas = useTemplateRef<HTMLCanvasElement>('canvas')
const ctx = computed(() => canvas.value?.getContext('2d'))
const { pixelRatio } = useDevicePixelRatio()

const stars = ref<Star[]>([])

function animate() {
  ctx.value!.clearRect(0, 0, canvas.value!.width, canvas.value!.height)
  stars.value.forEach((star) => {
    star.update()
    star.draw(ctx.value!)
  })
}

const { resume } = useRafFn(animate, { immediate: false })
watch(pixelRatio, init, { immediate: true })
onMounted(init)

function init() {
  if (!canvas.value || !ctx.value)
    return
  canvas.value.width = canvas.value.offsetWidth * pixelRatio.value
  canvas.value.height = canvas.value.offsetHeight * pixelRatio.value
  ctx.value.scale(pixelRatio.value, pixelRatio.value)
  stars.value = []

  for (let i = 0; i < 20; i++) {
    stars.value.push(new Star())
  }

  resume()
}

const starSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 11">
  <path stroke="#fff" stroke-linecap="round" stroke-width="2" d="M1.9 5h8M6 9V1"/>
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

  constructor() {
    if (!canvas.value)
      throw new Error('Canvas not initialized')

    this.reset()
  }

  reset() {
    if (!canvas.value)
      return

    const centerX = canvas.value.width / 2
    const centerY = canvas.value.height / 2

    // Generate random point within a circle of radius 20px around the top-right corner
    const radius = 20 * Math.sqrt(Math.random())
    const angle = Math.random() * 2 * Math.PI

    this.x = centerX + radius * Math.cos(angle)
    this.y = centerY + radius * Math.sin(angle)
    this.originalX = this.x
    this.originalY = this.y

    // Generate shooting angle between 150 degrees and 285 degrees
    const minAngle = (150 * Math.PI) / 180 // Convert degrees to radians
    const maxAngle = (285 * Math.PI) / 180

    this.angle = Math.random() * (maxAngle - minAngle) + minAngle

    const minSpeed = 0.5
    const maxSpeed = 2
    this.speed = Math.random() * (maxSpeed - minSpeed) + minSpeed

    this.dx = Math.cos(this.angle) * this.speed
    this.dy = Math.sin(this.angle) * this.speed

    this.size = Math.random() * 2 + 1
    // Opacity between 0.4 and 1.0
    this.initialOpacity = Math.random() * 0.6 + 0.4

    this.duration = Math.random() * 20000 + 40000 // 20-60 seconds

    // Start somewhere in the middle of the animation
    const initialProgress = Math.random()
    this.startTime = performance.now() - this.duration * initialProgress
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
  <div>
    <canvas ref="canvas" h-400 w-600 of-hidden />
  </div>
</template>
