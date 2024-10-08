import bitmap from './NetworkBitMap'

/** Map width in hexagons */
export const NETWORK_MAP_WIDTH = 129
/** Map height in hexagons */
export const NETWORK_MAP_HEIGHT = 52

/**
 * These WIDTH and HEIGHT values are used in Network.vue CSS to calculate the width of the map on mobile!
 */
/** Map width in pixel */
export const WIDTH = 1082
/** Map height in pixel */
export const HEIGHT = 502

const ratio = WIDTH / HEIGHT

/** distance between 2 hexagons vertically in relation to its height */
const VERTICAL_HEXAGON_DISTANCE = 1.142
/** overlap between 2 hexagons horizontally in relation to its width */
const HORIZONTAL_HEXAGON_OVERLAP = 0.98

const SCALE = (2 * WIDTH) / (NETWORK_MAP_WIDTH * HORIZONTAL_HEXAGON_OVERLAP)

class WorldMapHexagon {
  public position: { x: number, y: number } = {
    x: 0,
    y: 0,
  }

  public constructor(x: number, y: number) {
    this.position.x = x
    this.position.y = y
  }

  /**
   * x coordinate of top left border of the bounding box
   */
  public get x() {
    // 0.025% left padding
    return this.position.x * SCALE * HORIZONTAL_HEXAGON_OVERLAP
  }

  /**
   * y coordinate of top left border of the bounding box
   */
  public get y() {
    const off = this.position.x % 2 === 0 ? 0.5 : 0
    return (
      (this.position.y + off) * SCALE * VERTICAL_HEXAGON_DISTANCE
      - 0.5 * SCALE
      + 2
    )
  }

  public draw(dc: CanvasRenderingContext2D): boolean {
    dc.lineWidth = 1
    dc.beginPath()
    dc.moveTo(this.x + 0.22 * SCALE, this.y + 0.04 * SCALE)
    dc.arc(
      this.x + 0.298 * SCALE,
      this.y + 0.0825 * SCALE,
      0.0825 * SCALE,
      (7 / 6) * Math.PI,
      1.5 * Math.PI,
    )
    dc.lineTo(this.x + 0.71 * SCALE, this.y)
    dc.arc(
      this.x + 0.71 * SCALE,
      this.y + 0.0825 * SCALE,
      0.0825 * SCALE,
      1.5 * Math.PI,
      (11 / 6) * Math.PI,
    )
    dc.lineTo(this.x + 0.9875 * SCALE, this.y + 0.4 * SCALE)
    dc.arc(
      this.x + 0.9175 * SCALE,
      this.y + 0.445 * SCALE,
      0.0825 * SCALE,
      (11 / 6) * Math.PI,
      (1 / 6) * Math.PI,
    )
    dc.lineTo(this.x + 0.78 * SCALE, this.y + 0.85 * SCALE)
    dc.arc(
      this.x + 0.71 * SCALE,
      this.y + 0.8075 * SCALE,
      0.0825 * SCALE,
      (1 / 6) * Math.PI,
      0.5 * Math.PI,
    )
    dc.lineTo(this.x + 0.29 * SCALE, this.y + 0.89 * SCALE)
    dc.arc(
      this.x + 0.298 * SCALE,
      this.y + 0.8075 * SCALE,
      0.0825 * SCALE,
      0.5 * Math.PI,
      (5 / 6) * Math.PI,
    )
    dc.lineTo(this.x + 0.0125 * SCALE, this.y + 0.49 * SCALE)
    dc.arc(
      this.x + 0.0825 * SCALE,
      this.y + 0.445 * SCALE,
      0.0825 * SCALE,
      (5 / 6) * Math.PI,
      (7 / 6) * Math.PI,
    )
    dc.closePath()
    dc.fill()
    return false
  }
}

export interface UseHexagonsWorldMapOptions {
  /**
   * Whether the container is scrollable in the x-axis. Relevant for mobile.
   * @default true
   */
  scrollable?: boolean
}

export function useHexagonsWorldMap(container: MaybeRef<HTMLDivElement | undefined>, options: UseHexagonsWorldMapOptions = {}) {
  const { scrollable = true } = options
  const { height: containerHeight, width: containerWidth } = useElementSize(container)

  const canvas = ref<HTMLCanvasElement>()
  const context = computed(() => canvas.value?.getContext('2d'))

  const hexagons = ref<WorldMapHexagon[]>([])

  for (let x = 0; x < NETWORK_MAP_WIDTH; x++) {
    for (let y = 0; y < NETWORK_MAP_HEIGHT; y++) {
      if (bitmap[x]?.[y] === 1)
        hexagons.value.push(new WorldMapHexagon(x, y))
    }
  }

  function draw() {
    // Resize the canvas
    if (scrollable && containerHeight.value * (ratio) > containerWidth.value) {
      // Mobile
      canvas.value!.width = Math.round(containerWidth.value / 2) * 2
      canvas.value!.height = Math.round(containerWidth.value / (ratio) / 2) * 2
    }
    else {
      // Desktop
      canvas.value!.width = Math.round((containerHeight.value * (ratio)))
      canvas.value!.height = Math.round(containerHeight.value)
      const scale = (canvas.value!.height) / (2 * HEIGHT)
      context.value!.scale(scale, scale)
    }
    toValue(container)!.style.height = `${canvas.value!.height}px`

    // Draw the hexagons
    context.value!.clearRect(0, 0, context.value!.canvas.width, context.value!.canvas.height)
    // Light
    // context.value!.fillStyle = `rgba(31 35 72 / 0.1)`
    // dark
    context.value!.fillStyle = `rgba(255, 255, 255, 0.1)`
    hexagons.value.forEach(hexagon => hexagon.draw(context.value!))
  }

  onMounted(draw)
  useResizeObserver(canvas, draw)

  return {
    canvas,
  }
}
