<script setup lang="ts">
import { computed, ref } from 'vue'

const { color = '#e9b213' } = defineProps<{ color?: string }>()

const canvas = useTemplateRef<HTMLCanvasElement>('canvas')
const ctx = computed(() => canvas.value?.getContext('2d'))
const { pixelRatio } = useDevicePixelRatio()

const starsCount = 12

// Adjusting angle range to be between 9 and 6 o'clock (270° to 180° in radians)
const minAngle = Math.PI / 2 // 90 degrees (6 o'clock)
const maxAngle = Math.PI * 1.5 // 270 degrees (9 o'clock)

const angles = Array.from({ length: starsCount * 2 }, () => {
  return minAngle + Math.random() * (maxAngle - minAngle)
})

const stars = ref<Star[]>([])

function animate() {
  ctx.value!.clearRect(0, 0, canvas.value!.width, canvas.value!.height)

  // Check if we need to spawn a new star based on randomness (increased probability)
  if (stars.value.length < starsCount && Math.random() < 0.03) {
    const randomAngleIndex = Math.floor(Math.random() * angles.length)
    stars.value.push(new Star(angles[randomAngleIndex]!))
  }

  // Update and draw existing stars
  for (let i = stars.value.length - 1; i >= 0; i--) {
    const star = stars.value[i]!
    star.update()

    // Remove stars that have completed their lifecycle
    if (star.completed) {
      stars.value.splice(i, 1)
    }
    else {
      star.draw(ctx.value!)
    }
  }
}

const { resume } = useRafFn(animate, { immediate: false })

whenever(ctx, () => {
  canvas.value!.width = canvas.value!.offsetWidth * pixelRatio.value
  canvas.value!.height = canvas.value!.offsetHeight * pixelRatio.value
  ctx.value!.scale(pixelRatio.value, pixelRatio.value)
  stars.value = []

  // Initialize with more stars at random states for initial load
  const initialStarCount = Math.floor(starsCount * 0.75)
  for (let i = 0; i < initialStarCount; i++) {
    const star = new Star(angles[Math.floor(Math.random() * angles.length)]!)

    // Set each star to a random point in its lifecycle (between 0-80%)
    const randomProgress = Math.random() * 0.8
    const progressTime = star.duration * randomProgress
    star.startTime = performance.now() - progressTime

    // Update position based on this progress
    const t = progressTime / 1000
    star.x = star.originalX + star.dx * t
    star.y = star.originalY + star.dy * t

    stars.value.push(star)
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
  completed: boolean = false

  constructor(angle: number) {
    this.angle = angle
    this.reset()
  }

  reset() {
    if (!canvas.value)
      return

    const canvasWidth = canvas.value.width / pixelRatio.value
    const canvasHeight = canvas.value.height / pixelRatio.value

    // Position stars closer to the ribbon in the top-right
    // Smaller distribution area to ensure stars are visible
    const originX = canvasWidth * 0.85
    const originY = canvasHeight * 0.15

    // Add some noise to the origin point (smaller range)
    this.originalX = originX + (Math.random() * 30 - 15)
    this.originalY = originY + (Math.random() * 30 - 15)

    this.x = this.originalX
    this.y = this.originalY

    // Adjust speed for better visibility
    const minSpeed = 1.2
    const maxSpeed = 2.5
    this.speed = Math.random() * (maxSpeed - minSpeed) + minSpeed

    // Movement direction is outward along the angle
    this.dx = Math.cos(this.angle) * this.speed
    this.dy = Math.sin(this.angle) * this.speed

    // Slightly larger stars to be more visible
    this.size = Math.random() * 2.5 + 1.5
    // Higher opacity for better visibility
    this.initialOpacity = Math.random() * 0.4 + 0.6

    // Shorter duration for more active animation
    this.duration = Math.random() * 10000 + 15000 // 15-25 seconds
    this.startTime = performance.now()
    this.completed = false
  }

  update() {
    const now = performance.now()
    const elapsed = now - this.startTime
    this.progress = elapsed / this.duration

    if (this.progress >= 1) {
      this.completed = true
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

    // Fade-in first 10% of lifetime
    if (elapsed <= this.duration * 0.1) {
      const fadeInProgress = elapsed / (this.duration * 0.1)
      opacity = this.initialOpacity * fadeInProgress
    }
    // Fade-out last 10% of lifetime
    else if (remainingTime <= this.duration * 0.1) {
      const fadeProgress = remainingTime / (this.duration * 0.1)
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
