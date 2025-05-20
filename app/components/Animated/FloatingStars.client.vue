<script setup lang="ts">
import { computed, ref } from 'vue'

const { color = '#e9b213' } = defineProps<{ color?: string }>()

const canvas = useTemplateRef<HTMLCanvasElement>('canvas')
const ctx = computed(() => canvas.value?.getContext('2d'))
const { pixelRatio } = useDevicePixelRatio()

const starsCount = 6

const MIN_DURATION = 30 * 1000 // 30s
const MAX_DURATION = 60 * 1000 // 60s

// Adjusting angle range to be between 9 and ~4 o'clock
const minAngle = Math.PI
const maxAngle = Math.PI * 2.2

const angles = Array.from({ length: starsCount * 2 }, () => minAngle + Math.random() * (maxAngle - minAngle))

const stars = ref<Star[]>([])

function animate() {
  if (!ctx.value || !canvas.value)
    return
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)

  // draw debugging angles
  // ctx.value.save()
  // ctx.value.beginPath()
  // for (const angle of angles) {
  //   ctx.value.moveTo(canvas.value.width / 2, canvas.value.height / 2)
  //   ctx.value.lineTo(
  //     canvas.value.width / 2 + Math.cos(angle) * 100,
  //     canvas.value.height / 2 + Math.sin(angle) * 100,
  //   )
  // }
  // ctx.value.stroke()

  // spawn new stars up to starsCount
  if (stars.value.length < starsCount && Math.random() < 0.03) {
    const angle = angles[Math.floor(Math.random() * angles.length)]!
    stars.value.push(new Star(angle))
  }

  // update & draw
  for (let i = stars.value.length - 1; i >= 0; i--) {
    const star = stars.value[i]!
    star.update()
    if (star.completed) {
      stars.value.splice(i, 1)
    }
    else {
      star.draw(ctx.value)
    }
  }
}

const { resume } = useRafFn(animate, { immediate: false })

whenever(ctx, () => {
  if (!canvas.value)
    return
  canvas.value.width = canvas.value.offsetWidth * pixelRatio.value
  canvas.value.height = canvas.value.offsetHeight * pixelRatio.value
  ctx.value!.scale(pixelRatio.value, pixelRatio.value)

  // clear & refill with a few stars already in-flight
  stars.value = []
  const initialStarCount = Math.floor(starsCount * 0.75)
  for (let i = 0; i < initialStarCount; i++) {
    const star = new Star(angles[Math.floor(Math.random() * angles.length)]!)
    // jump into random progress of its life [0–0.8]
    const p = Math.random() * 0.8
    star.startTime = performance.now() - star.duration * p
    star.progress = p
    star.x = star.originalX + star.dx * p
    star.y = star.originalY + star.dy * p
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
  x = 0
  y = 0
  originalX = 0
  originalY = 0
  dx = 0 // total x-offset to travel
  dy = 0 // total y-offset to travel
  startTime = 0
  progress = 0 // 0…1
  size = 0
  angle = 0
  initialOpacity = 0
  duration = 0 // ms
  completed = false

  constructor(angle: number) {
    this.angle = angle
    this.reset()
  }

  reset() {
    if (!canvas.value)
      return
    const cw = canvas.value.width / pixelRatio.value
    const ch = canvas.value.height / pixelRatio.value

    // 1) spawn at center
    const cx = cw / 2
    const cy = ch / 2
    this.originalX = cx
    this.originalY = cy
    this.x = cx
    this.y = cy

    // 2) choose a travel distance along that angle between 45–90% of radius
    const radius = Math.min(cw, ch) / 2
    const minD = radius * 0.45
    const maxD = radius * 0.9
    const dist = Math.random() * (maxD - minD) + minD
    this.dx = Math.cos(this.angle) * dist
    this.dy = Math.sin(this.angle) * dist

    // size & opacity
    this.size = Math.random() * 2.5 + 0.75
    this.initialOpacity = Math.random() * 0.4 + 0.6

    // duration 15–25s
    this.duration = Math.random() * (MAX_DURATION - MIN_DURATION) + MIN_DURATION
    this.startTime = performance.now()
    this.progress = 0
    this.completed = false
  }

  update() {
    const now = performance.now()
    const elapsed = now - this.startTime
    const p = elapsed / this.duration
    if (p >= 1) {
      this.completed = true
      return
    }
    this.progress = p
    this.x = this.originalX + this.dx * p
    this.y = this.originalY + this.dy * p
  }

  draw(ctx: CanvasRenderingContext2D) {
    const elapsed = performance.now() - this.startTime
    const rem = this.duration - elapsed
    let alpha = this.initialOpacity

    // fade in/out
    if (elapsed <= this.duration * 0.1) {
      alpha *= elapsed / (this.duration * 0.1)
    }
    else if (rem <= this.duration * 0.1) {
      alpha *= rem / (this.duration * 0.1)
    }

    ctx.globalAlpha = alpha
    const s = this.size * 5
    ctx.drawImage(
      starImage,
      this.x - s / 2,
      this.y - s / 2,
      s,
      s,
    )
    ctx.globalAlpha = 1
  }
}
</script>

<template>
  <canvas ref="canvas" h-400 w-600 pointer-events-none of-hidden />
</template>
