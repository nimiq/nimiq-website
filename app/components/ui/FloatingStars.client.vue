<script setup lang="ts">
const { color = '#e9b213' } = defineProps<{ color?: string }>()

const canvas = useTemplateRef<HTMLCanvasElement>('canvas')
const ctx = computed(() => canvas.value?.getContext('2d'))
const { pixelRatio } = useDevicePixelRatio()
const isVisible = shallowRef(false)

useIntersectionObserver(canvas, ([entry]) => {
  isVisible.value = entry?.isIntersecting || false
}, { threshold: 0.1 })

const starsCount = 10

const MIN_DURATION = 30 * 1000 // 30s
const MAX_DURATION = 60 * 1000 // 60s

// Spawn everywhere except the 6–9 o'clock wedge (angles π/2 → π)
const blockedStart = Math.PI / 2
const blockedEnd = Math.PI
const allowedRanges = [
  { start: 0, end: blockedStart },
  { start: blockedEnd, end: Math.PI * 2 },
]
const slotCount = starsCount * 2
const totalAllowedLength = allowedRanges.reduce((sum, { start, end }) => sum + Math.max(0, end - start), 0)
const angleSlots: number[] = []
let slotsRemaining = slotCount

for (const [index, range] of allowedRanges.entries()) {
  const length = Math.max(0, range.end - range.start)
  if (length === 0)
    continue

  let rangeSlots = index === allowedRanges.length - 1
    ? slotsRemaining
    : Math.max(1, Math.round(slotCount * (length / totalAllowedLength)))
  rangeSlots = Math.min(rangeSlots, slotsRemaining)
  if (rangeSlots <= 0)
    continue

  const step = length / rangeSlots
  for (let i = 0; i < rangeSlots; i++) {
    const base = range.start + (i + 0.5) * step
    const jitter = (Math.random() - 0.5) * step * 0.4
    angleSlots.push(normalizeAngle(base + jitter))
  }

  slotsRemaining -= rangeSlots
}

if (slotsRemaining > 0 && allowedRanges.length) {
  const { start, end } = allowedRanges.at(-1)!
  const step = (end - start) / slotsRemaining || (Math.PI * 2) / slotsRemaining
  for (let i = 0; i < slotsRemaining; i++) {
    const base = start + (i + 0.5) * step
    angleSlots.push(normalizeAngle(base))
  }
}

angleSlots.sort(() => Math.random() - 0.5)
let nextSlotIndex = 0

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

  while (stars.value.length < starsCount) {
    if (!spawnStar())
      break
  }
}

const { pause, resume } = useRafFn(animate, { immediate: false })

watch(isVisible, (visible) => {
  if (visible && ctx.value)
    resume()
  else
    pause()
})

whenever(ctx, () => {
  if (!canvas.value)
    return
  canvas.value.width = canvas.value.offsetWidth * pixelRatio.value
  canvas.value.height = canvas.value.offsetHeight * pixelRatio.value
  ctx.value!.scale(pixelRatio.value, pixelRatio.value)

  nextSlotIndex = Math.floor(Math.random() * angleSlots.length)

  // clear & refill with stars evenly distributed across their journey
  // so animation appears already in motion when user sees it
  stars.value = []
  for (let i = 0; i < starsCount; i++) {
    // distribute stars evenly from 10% to 90% progress (avoiding fade edges)
    const progress = 0.1 + (i / starsCount) * 0.8 + Math.random() * 0.08
    if (!spawnStar(progress))
      break
  }

  if (isVisible.value)
    resume()
})

const starSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 11">
  <path stroke="${color}" stroke-linecap="round" stroke-width="2" d="M1.9 5h8M6 9V1"/>
</svg>`
const starImage = new Image()
starImage.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(starSVG)}`

function normalizeAngle(angle: number) {
  const twoPi = Math.PI * 2
  angle %= twoPi
  return angle < 0 ? angle + twoPi : angle
}

function spawnStar(progress?: number) {
  const slotIndex = findAvailableSlot()
  if (slotIndex === undefined)
    return false

  const star = new Star(angleSlots[slotIndex]!, slotIndex)
  if (progress !== undefined)
    star.seedProgress(progress)
  stars.value.push(star)
  return true
}

function findAvailableSlot(attempts = angleSlots.length) {
  for (let i = 0; i < attempts; i++) {
    const slotIndex = nextSlotIndex
    nextSlotIndex = (nextSlotIndex + 1) % angleSlots.length
    const hasYoungStar = stars.value.some(star => star.slotIndex === slotIndex && star.progress < 0.25)
    if (hasYoungStar)
      continue
    return slotIndex
  }
  return undefined
}

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
  slotIndex = 0

  constructor(angle: number, slotIndex: number) {
    this.angle = angle
    this.slotIndex = slotIndex
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

    // duration 30–60s
    this.duration = Math.random() * (MAX_DURATION - MIN_DURATION) + MIN_DURATION
    this.startTime = performance.now()
    this.progress = 0
    this.completed = false
  }

  seedProgress(p: number) {
    this.startTime = performance.now() - this.duration * p
    this.progress = p
    this.x = this.originalX + this.dx * p
    this.y = this.originalY + this.dy * p
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
