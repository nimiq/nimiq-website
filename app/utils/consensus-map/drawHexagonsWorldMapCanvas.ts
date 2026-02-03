import type { Peer } from '~/types/nimiq'
import ConsensusBitMap from './ConsensusBitMap'

export const HEXAGONS_WORLD_MAP_WIDTH = 129
export const HEXAGONS_WORLD_MAP_HEIGHT = 52
export const HEXAGONS_WORLD_MAP_WIDTH_PIXELS = 1037
export const HEXAGONS_WORLD_MAP_HEIGHT_PIXELS = 531

// Aspect ratio for the hexagons world map
export const HEXAGONS_WORLD_MAP_ASPECT_RATIO = HEXAGONS_WORLD_MAP_WIDTH_PIXELS / HEXAGONS_WORLD_MAP_HEIGHT_PIXELS

export function getHexagonsWorldMapAspectRatio() {
  if (typeof window === 'undefined')
    return HEXAGONS_WORLD_MAP_ASPECT_RATIO
  const isMobile = window.innerWidth < 768
  return isMobile ? HEXAGONS_WORLD_MAP_HEIGHT_PIXELS / HEXAGONS_WORLD_MAP_WIDTH_PIXELS : HEXAGONS_WORLD_MAP_WIDTH_PIXELS / HEXAGONS_WORLD_MAP_HEIGHT_PIXELS
}
export const HEXAGONS_WORLD_MAP_VERTICAL_HEXAGON_DISTANCE = 1.142
export const HEXAGONS_WORLD_MAP_HEIGHT_HORIZONTAL_HEXAGON_OVERLAP = 0.98
export const HEXAGONS_WORLD_MAP_SCALE = (2 * HEXAGONS_WORLD_MAP_WIDTH_PIXELS) / (HEXAGONS_WORLD_MAP_WIDTH * HEXAGONS_WORLD_MAP_HEIGHT_HORIZONTAL_HEXAGON_OVERLAP)

const CURVINESS_ANGLE = Math.PI / 6
const CURVINESS_FACTOR = 0.2
const SPLINE_ANIMATION_DURATION = 2000
const easeOut = (t: number) => 1 - (1 - t) ** 3

function paintUserHexagon(dc: CanvasRenderingContext2D, self: WorldMapHexagon) {
  const scale = HEXAGONS_WORLD_MAP_SCALE
  const halfScale = scale / 2
  const radialGradient = dc.createRadialGradient(self.left + halfScale, self.top + halfScale, scale, self.left + halfScale, self.top + halfScale, 2 * scale)
  const gradient = ['rgb(236, 153, 28)', 'rgb(233, 178, 19)']
  gradient.forEach((color, i) => radialGradient.addColorStop(i, color))
  dc.fillStyle = radialGradient
}

function paintPeerHexagon(dc: CanvasRenderingContext2D, _self: WorldMapHexagon) {
  dc.fillStyle = 'rgba(255,255,255,0.3)'
}

function paintNormalHexagon(dc: CanvasRenderingContext2D, _self: WorldMapHexagon) {
  dc.fillStyle = 'rgba(255,255,255,0.1)'
}

export class WorldMapHexagon {
  public position: { x: number, y: number } = { x: 0, y: 0 }
  public paintHexagon = paintNormalHexagon

  public constructor(x: number, y: number) {
    this.position.x = x
    this.position.y = y
  }

  public get left() {
    return this.position.x * HEXAGONS_WORLD_MAP_SCALE * HEXAGONS_WORLD_MAP_HEIGHT_HORIZONTAL_HEXAGON_OVERLAP
  }

  public get top() {
    const off = this.position.x % 2 === 0 ? 0.5 : 0
    return (this.position.y + off) * HEXAGONS_WORLD_MAP_SCALE * HEXAGONS_WORLD_MAP_VERTICAL_HEXAGON_DISTANCE - 0.5 * HEXAGONS_WORLD_MAP_SCALE + 2
  }

  public draw(dc: CanvasRenderingContext2D): boolean {
    dc.lineWidth = 1
    dc.beginPath()
    dc.moveTo(this.left + 0.22 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.04 * HEXAGONS_WORLD_MAP_SCALE)
    dc.arc(this.left + 0.298 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.0825 * HEXAGONS_WORLD_MAP_SCALE, 0.0825 * HEXAGONS_WORLD_MAP_SCALE, (7 / 6) * Math.PI, 1.5 * Math.PI)
    dc.lineTo(this.left + 0.71 * HEXAGONS_WORLD_MAP_SCALE, this.top)
    dc.arc(this.left + 0.71 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.0825 * HEXAGONS_WORLD_MAP_SCALE, 0.0825 * HEXAGONS_WORLD_MAP_SCALE, 1.5 * Math.PI, (11 / 6) * Math.PI)
    dc.lineTo(this.left + 0.9875 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.4 * HEXAGONS_WORLD_MAP_SCALE)
    dc.arc(this.left + 0.9175 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.445 * HEXAGONS_WORLD_MAP_SCALE, 0.0825 * HEXAGONS_WORLD_MAP_SCALE, (11 / 6) * Math.PI, (1 / 6) * Math.PI)
    dc.lineTo(this.left + 0.78 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.85 * HEXAGONS_WORLD_MAP_SCALE)
    dc.arc(this.left + 0.71 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.8075 * HEXAGONS_WORLD_MAP_SCALE, 0.0825 * HEXAGONS_WORLD_MAP_SCALE, (1 / 6) * Math.PI, 0.5 * Math.PI)
    dc.lineTo(this.left + 0.29 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.89 * HEXAGONS_WORLD_MAP_SCALE)
    dc.arc(this.left + 0.298 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.8075 * HEXAGONS_WORLD_MAP_SCALE, 0.0825 * HEXAGONS_WORLD_MAP_SCALE, 0.5 * Math.PI, (5 / 6) * Math.PI)
    dc.lineTo(this.left + 0.0125 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.49 * HEXAGONS_WORLD_MAP_SCALE)
    dc.arc(this.left + 0.0825 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.445 * HEXAGONS_WORLD_MAP_SCALE, 0.0825 * HEXAGONS_WORLD_MAP_SCALE, (5 / 6) * Math.PI, (7 / 6) * Math.PI)
    dc.closePath()
    this.paintHexagon(dc, this)
    dc.fill()
    return false
  }
}

class WorldMapArc {
  public left1: number
  public top1: number
  public left2: number
  public top2: number
  public ts: number | undefined
  public animation = 0
  public onAnimationEnd: (() => void) | undefined
  public state: 'animation-in' | 'animation-out' | 'normal' | 'animation-out-finished' = 'animation-in'

  constructor(from: { top: number, left: number }, to: { top: number, left: number }) {
    this.left1 = from.left
    this.top1 = from.top
    this.left2 = to.left
    this.top2 = to.top
    this.state = 'animation-in'
  }

  remove() {
    this.state = 'animation-out'
    this.animation = 0
    this.ts = Date.now()
  }

  draw(dc: CanvasRenderingContext2D, t: number) {
    if (this.state === 'animation-out-finished')
      return
    const now = Date.now()
    this.ts ||= now
    t = now - this.ts
    this.animation = Math.min((this.animation + t) / SPLINE_ANIMATION_DURATION, 1)

    const x1mid = this.left1 + 0.5 * HEXAGONS_WORLD_MAP_SCALE
    const y1mid = this.top1 + 0.445 * HEXAGONS_WORLD_MAP_SCALE
    const x2mid = this.left2 + 0.5 * HEXAGONS_WORLD_MAP_SCALE
    const y2mid = this.top2 + 0.445 * HEXAGONS_WORLD_MAP_SCALE

    let angle = Math.atan2(y2mid - y1mid, x2mid - x1mid)
    const distance = Math.hypot(x2mid - x1mid, y2mid - y1mid)

    dc.lineWidth = 3.5

    if (this.state === 'animation-in' || this.state === 'animation-out') {
      dc.strokeStyle = 'rgba(117, 121, 157, 1)'
      dc.setLineDash([distance, distance])
      dc.lineDashOffset = this.state === 'animation-in' ? -(distance + easeOut(this.animation) * distance) : -easeOut(this.animation) * distance
    }
    else if (this.state === 'normal') {
      dc.strokeStyle = 'rgba(117, 121, 157, 1)'
      dc.setLineDash([])
      dc.lineDashOffset = 0
    }

    dc.lineCap = 'round'
    dc.beginPath()

    if (distance >= 3.5 * HEXAGONS_WORLD_MAP_SCALE) {
      let counterAngle = 0
      let tangent = 0
      if (Math.abs(angle) > Math.PI / 2) {
        counterAngle = angle + Math.PI - CURVINESS_ANGLE
        tangent = angle + Math.PI / 2
        angle += CURVINESS_ANGLE
      }
      else {
        counterAngle = angle + Math.PI + CURVINESS_ANGLE
        tangent = angle - Math.PI / 2
        angle -= CURVINESS_ANGLE
      }
      dc.moveTo(x1mid + Math.cos(angle) * HEXAGONS_WORLD_MAP_SCALE, y1mid + Math.sin(angle) * HEXAGONS_WORLD_MAP_SCALE * 0.89)
      dc.quadraticCurveTo(
        (x1mid + x2mid) / 2 + Math.cos(tangent) * distance * CURVINESS_FACTOR,
        (y1mid + y2mid) / 2 + Math.sin(tangent) * distance * CURVINESS_FACTOR,
        x2mid + Math.cos(counterAngle) * HEXAGONS_WORLD_MAP_SCALE,
        y2mid + Math.sin(counterAngle) * HEXAGONS_WORLD_MAP_SCALE * 0.89,
      )
    }
    else if (distance > 1.5 * HEXAGONS_WORLD_MAP_SCALE) {
      dc.moveTo(x1mid + Math.cos(angle) * HEXAGONS_WORLD_MAP_SCALE, y1mid + Math.sin(angle) * HEXAGONS_WORLD_MAP_SCALE * 0.89)
      dc.lineTo(x2mid + Math.cos(angle + Math.PI) * HEXAGONS_WORLD_MAP_SCALE, y2mid + Math.sin(angle + Math.PI) * HEXAGONS_WORLD_MAP_SCALE * 0.89)
    }

    dc.stroke()

    if (this.animation === 1 && this.state === 'animation-in') {
      this.state = 'normal'
    }
    return this.animation < 1
  }
}

export interface DrawHexagonsWorldMapOptions {
  userPeer: Ref<Peer | undefined>
  peers: Ref<Peer[]>
  centerOnUser?: boolean
}

export function drawHexagonsWorldMap(canvas: Readonly<globalThis.Ref<HTMLCanvasElement, HTMLCanvasElement>>, options: DrawHexagonsWorldMapOptions) {
  const container = computed(() => canvas.value?.parentElement as HTMLElement)
  const { userPeer, peers, centerOnUser = false } = options
  const { height: containerHeight } = useElementSize(container)
  const context = computed(() => canvas.value?.getContext('2d'))

  const hexagons = ref<WorldMapHexagon[]>([])
  for (let x = 0; x < HEXAGONS_WORLD_MAP_WIDTH; x++) {
    for (let y = 0; y < HEXAGONS_WORLD_MAP_HEIGHT; y++) {
      if (ConsensusBitMap[x]?.[y] === 1)
        hexagons.value.push(new WorldMapHexagon(x, y))
    }
  }

  const userHexagon = ref<WorldMapHexagon>()
  watch(userPeer, () => {
    if (!userPeer.value)
      return
    userHexagon.value = hexagons.value.find(({ left: x, top: y }) => x === userPeer.value!.x && y === userPeer.value!.y)
    if (!userHexagon.value) {
      userHexagon.value = new WorldMapHexagon(userPeer.value!.x, userPeer.value!.y)
      hexagons.value.push(userHexagon.value)
    }
    userHexagon.value.paintHexagon = paintUserHexagon
  }, { immediate: true, deep: true })

  const peerHexagons = ref<WorldMapHexagon[]>([])
  const arcs = ref<WorldMapArc[]>([])
  const { pixelRatio } = useDevicePixelRatio()

  function resetCanvas() {
    if (!canvas.value || !context.value)
      return

    canvas.value.width = Math.round((containerHeight.value * getHexagonsWorldMapAspectRatio())) * pixelRatio.value
    canvas.value.height = Math.round(containerHeight.value) * pixelRatio.value

    const scale = (canvas.value.height) / (3 * HEXAGONS_WORLD_MAP_HEIGHT_PIXELS)
    context.value!.resetTransform()
    context.value!.scale(scale, scale)
    context.value!.clearRect(0, 0, context.value!.canvas.width, context.value!.canvas.height)

    if (centerOnUser && userHexagon.value) {
      const userX = userHexagon.value.left + (HEXAGONS_WORLD_MAP_SCALE / 2)
      const userY = userHexagon.value.top + (HEXAGONS_WORLD_MAP_SCALE / 2)
      const centerX = (canvas.value.width / pixelRatio.value) / (2 * scale)
      const centerY = (canvas.value.height / pixelRatio.value) / (2 * scale)
      context.value!.translate(centerX - userX, centerY - userY)
    }
  }

  resetCanvas()

  const { pause, resume: draw } = useRafFn(() => {
    resetCanvas()
    const stillAnimating = arcs.value.map(arc => arc.draw(context.value!, 1)).some(animating => animating)
    hexagons.value.forEach(hexagon => hexagon.draw(context.value!))
    if (!stillAnimating) {
      arcs.value = arcs.value.filter(arc => arc.state !== 'animation-out-finished')
      pause()
    }
  })

  watch([containerHeight, userHexagon], draw, { deep: true })
  watchArray(peers, (_newPeers, _oldPeers, addedPeers, removedPeers) => {
    addedPeers.forEach((peer) => {
      let hexagon = hexagons.value.find(({ position: { x, y } }) => x === peer.x && y === peer.y)
      if (!hexagon) {
        hexagon = new WorldMapHexagon(peer.x, peer.y)
        hexagons.value.push(hexagon)
      }
      hexagon.paintHexagon = paintPeerHexagon
      arcs.value.push(new WorldMapArc(userHexagon.value!, hexagon))
      peerHexagons.value.push(hexagon)
      return hexagon
    })

    removedPeers.forEach((peer) => {
      const hexagon = peerHexagons.value.find(({ position }) => position.x === peer.x && position.y === peer.y)
      if (!hexagon)
        return undefined
      const arc = arcs.value.find(arc => arc.left2 === hexagon.left && arc.top2 === hexagon.top)
      if (!arc)
        return undefined
      if (arc.state === 'animation-out' && arc.animation !== 1) {
        arcs.value = arcs.value.filter(arc => arc.left2 !== peer.x && arc.top2 !== peer.y)
        const removedHexagons = peerHexagons.value.filter(peerHexagon => peerHexagon.position.x === peer.x && peerHexagon.position.y === peer.y)
        removedHexagons.forEach(removedHexagon => removedHexagon.paintHexagon = paintNormalHexagon)
        peerHexagons.value = peerHexagons.value.filter(peerHexagon => removedHexagons?.indexOf(peerHexagon) === -1)
        return undefined
      }
      arc.remove()
      return hexagon
    })

    draw()
  }, { deep: true })

  return { userHexagon }
}
