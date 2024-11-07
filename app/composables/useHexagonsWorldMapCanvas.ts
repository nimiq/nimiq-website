import ConsensusBitMap from './ConsensusBitMap'

/** Map width in hexagons */
export const HEXAGONS_WORLD_MAP_WIDTH = 129
/** Map height in hexagons */
export const HEXAGONS_WORLD_MAP_HEIGHT = 52

export const HEXAGONS_WORLD_MAP_WIDTH_PIXELS = 1037
export const HEXAGONS_WORLD_MAP_HEIGHT_PIXELS = 531

export const HEXAGONS_WORLD_MAP_ASPECT_RATIO = HEXAGONS_WORLD_MAP_WIDTH_PIXELS / HEXAGONS_WORLD_MAP_HEIGHT_PIXELS

/** distance between 2 hexagons vertically in relation to its height */
export const HEXAGONS_WORLD_MAP_VERTICAL_HEXAGON_DISTANCE = 1.142
/** overlap between 2 hexagons horizontally in relation to its width */
export const HEXAGONS_WORLD_MAP_HEIGHT_HORIZONTAL_HEXAGON_OVERLAP = 0.98

export const HEXAGONS_WORLD_MAP_SCALE = (2 * HEXAGONS_WORLD_MAP_WIDTH_PIXELS) / (HEXAGONS_WORLD_MAP_WIDTH * HEXAGONS_WORLD_MAP_HEIGHT_HORIZONTAL_HEXAGON_OVERLAP)

export class WorldMapHexagon {
  public position: { x: number, y: number } = { x: 0, y: 0 }
  public kind: 'normal' | 'user-disconnected'

  public constructor(x: number, y: number, kind: 'normal' | 'user-disconnected' = 'normal') {
    this.position.x = x
    this.position.y = y
    this.kind = kind
  }

  /**
   * x coordinate of top left border of the bounding box
   */
  public get x() {
    // 0.025% left padding
    return this.position.x * HEXAGONS_WORLD_MAP_SCALE * HEXAGONS_WORLD_MAP_HEIGHT_HORIZONTAL_HEXAGON_OVERLAP
  }

  /**
   * y coordinate of top left border of the bounding box
   */
  public get y() {
    const off = this.position.x % 2 === 0 ? 0.5 : 0
    return (
      (this.position.y + off) * HEXAGONS_WORLD_MAP_SCALE * HEXAGONS_WORLD_MAP_VERTICAL_HEXAGON_DISTANCE
      - 0.5 * HEXAGONS_WORLD_MAP_SCALE
      + 2
    )
  }

  public draw(dc: CanvasRenderingContext2D): boolean {
    dc.lineWidth = 1
    dc.beginPath()
    dc.moveTo(this.x + 0.22 * HEXAGONS_WORLD_MAP_SCALE, this.y + 0.04 * HEXAGONS_WORLD_MAP_SCALE)
    dc.arc(
      this.x + 0.298 * HEXAGONS_WORLD_MAP_SCALE,
      this.y + 0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      (7 / 6) * Math.PI,
      1.5 * Math.PI,
    )
    dc.lineTo(this.x + 0.71 * HEXAGONS_WORLD_MAP_SCALE, this.y)
    dc.arc(
      this.x + 0.71 * HEXAGONS_WORLD_MAP_SCALE,
      this.y + 0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      1.5 * Math.PI,
      (11 / 6) * Math.PI,
    )
    dc.lineTo(this.x + 0.9875 * HEXAGONS_WORLD_MAP_SCALE, this.y + 0.4 * HEXAGONS_WORLD_MAP_SCALE)
    dc.arc(
      this.x + 0.9175 * HEXAGONS_WORLD_MAP_SCALE,
      this.y + 0.445 * HEXAGONS_WORLD_MAP_SCALE,
      0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      (11 / 6) * Math.PI,
      (1 / 6) * Math.PI,
    )
    dc.lineTo(this.x + 0.78 * HEXAGONS_WORLD_MAP_SCALE, this.y + 0.85 * HEXAGONS_WORLD_MAP_SCALE)
    dc.arc(
      this.x + 0.71 * HEXAGONS_WORLD_MAP_SCALE,
      this.y + 0.8075 * HEXAGONS_WORLD_MAP_SCALE,
      0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      (1 / 6) * Math.PI,
      0.5 * Math.PI,
    )
    dc.lineTo(this.x + 0.29 * HEXAGONS_WORLD_MAP_SCALE, this.y + 0.89 * HEXAGONS_WORLD_MAP_SCALE)
    dc.arc(
      this.x + 0.298 * HEXAGONS_WORLD_MAP_SCALE,
      this.y + 0.8075 * HEXAGONS_WORLD_MAP_SCALE,
      0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      0.5 * Math.PI,
      (5 / 6) * Math.PI,
    )
    dc.lineTo(this.x + 0.0125 * HEXAGONS_WORLD_MAP_SCALE, this.y + 0.49 * HEXAGONS_WORLD_MAP_SCALE)
    dc.arc(
      this.x + 0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      this.y + 0.445 * HEXAGONS_WORLD_MAP_SCALE,
      0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      (5 / 6) * Math.PI,
      (7 / 6) * Math.PI,
    )
    dc.closePath()

    switch (this.kind) {
      case 'user-disconnected': {
        const scale = HEXAGONS_WORLD_MAP_SCALE
        const halfScale = scale / 2
        const radialGradient = dc.createRadialGradient(this.x + halfScale, this.y + halfScale, scale, this.x + halfScale, this.y + halfScale, 2 * scale)
        const gradient = ['rgb(236, 153, 28)', 'rgb(233, 178, 19)']
        gradient.forEach((color, i) => radialGradient.addColorStop(i, color))
        dc.fillStyle = radialGradient
        break
      }
      case 'normal': {
        dc.fillStyle = 'rgba(255, 255, 255, 0.1)'
      }
    }
    dc.fill()

    return false
  }
}

export interface UseHexagonsWorldMapOptions {
  /**
   * Whether the container is scrollable in the x-axis. Relevant for mobile.
   * @default true
   */
  // scrollable?: boolean

  /* */
  userPeer: Ref<Peer | undefined>
  peers: Ref<Peer[]>
}

export function useHexagonsWorldMap(canvas: Readonly<globalThis.Ref<HTMLCanvasElement, HTMLCanvasElement>>, options: UseHexagonsWorldMapOptions) {
  const container = computed(() => canvas.value?.parentElement as HTMLElement)
  const { userPeer, peers } = options
  const { height: containerHeight } = useElementSize(container)

  const context = computed(() => canvas.value?.getContext('2d'))

  const hexagons = ref<WorldMapHexagon[]>([])

  for (let x = 0; x < HEXAGONS_WORLD_MAP_WIDTH; x++) {
    for (let y = 0; y < HEXAGONS_WORLD_MAP_HEIGHT; y++) {
      if (ConsensusBitMap[x]?.[y] === 1)
        hexagons.value.push(new WorldMapHexagon(x, y))
    }
  }

  const isUserHexagon = (hexagon: WorldMapHexagon) => hexagon.position.x === userPeer.value?.x && hexagon.position.y === userPeer.value?.y

  function _draw() {
    canvas.value.width = Math.round((containerHeight.value * (HEXAGONS_WORLD_MAP_ASPECT_RATIO)))
    canvas.value.height = Math.round(containerHeight.value)
    const scale = (canvas.value.height) / (2 * HEXAGONS_WORLD_MAP_HEIGHT_PIXELS)
    context.value!.scale(scale, scale)
    // toValue(container)!.style.height = `${canvas.value.height}px`

    // Clear the canvas
    context.value!.clearRect(0, 0, context.value!.canvas.width, context.value!.canvas.height)
    hexagons.value.forEach(hexagon => hexagon.draw(context.value!))
  }

  const draw = useDebounceFn(_draw, 300, { maxWait: 100 })

  onMounted(draw)
  useResizeObserver(canvas, draw)
  watch(peers, draw, { deep: true })
  onMounted(async () => {
    await until(userPeer).toBeTruthy()
    const userHexagon = hexagons.value.find(isUserHexagon)
    if (!userHexagon) // User is in the "water". Let's create an island for him
      hexagons.value.push(new WorldMapHexagon(userPeer.value!.x, userPeer.value!.y, 'user-disconnected'))
    else
      userHexagon.kind = 'user-disconnected'
  })

  return {
    container,
  }
}
