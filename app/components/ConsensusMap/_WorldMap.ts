import bitmap from './NetworkBitMap'

/** Map width in hexagons */
export const NETWORK_MAP_WIDTH = 129
/** Map height in hexagons */
export const NETWORK_MAP_HEIGHT = 52

/** Map scaling factor */
export const SCALING_FACTOR = 0.6

/** distance between 2 hexagons vertically in relation to its height */
const VERTICAL_HEXAGON_DISTANCE = 1.142
/** overlap between 2 hexagons horizontally in relation to its width */
const HORIZONTAL_HEXAGON_OVERLAP = 0.98

class Hexagon {
  public position: { x: number, y: number } = {
    x: 0,
    y: 0,
  }

  private _canvasSize: { width: number, height: number }

  public constructor(x: number, y: number, canvasSize: { width: number, height: number }) {
    this.position.x = x
    this.position.y = y
    this._canvasSize = canvasSize
  }

  /**
   * x coordinate of top left border of the bounding box
   */
  public get x() {
    // Remove left padding and scaling adjustment
    return this.position.x * this.scale * HORIZONTAL_HEXAGON_OVERLAP
  }

  /**
   * y coordinate of top left border of the bounding box
   */
  public get y() {
    const off = this.position.x % 2 === 0 ? 0.5 : 0
    // Remove vertical padding and scaling adjustment
    return (this.position.y + off) * this.scale * VERTICAL_HEXAGON_DISTANCE
  }

  public get scale() {
    // Adjust scale to fit the map within the canvas width
    return this._canvasSize.width / (NETWORK_MAP_WIDTH * HORIZONTAL_HEXAGON_OVERLAP)
  }

  public draw(dc: CanvasRenderingContext2D): boolean {
    dc.lineWidth = 1
    dc.beginPath()
    dc.moveTo(this.x + 0.22 * this.scale, this.y + 0.04 * this.scale)
    dc.arc(
      this.x + 0.298 * this.scale,
      this.y + 0.0825 * this.scale,
      0.0825 * this.scale,
      (7 / 6) * Math.PI,
      1.5 * Math.PI,
    )
    dc.lineTo(this.x + 0.71 * this.scale, this.y)
    dc.arc(
      this.x + 0.71 * this.scale,
      this.y + 0.0825 * this.scale,
      0.0825 * this.scale,
      1.5 * Math.PI,
      (11 / 6) * Math.PI,
    )
    dc.lineTo(this.x + 0.9875 * this.scale, this.y + 0.4 * this.scale)
    dc.arc(
      this.x + 0.9175 * this.scale,
      this.y + 0.445 * this.scale,
      0.0825 * this.scale,
      (11 / 6) * Math.PI,
      (1 / 6) * Math.PI,
    )
    dc.lineTo(this.x + 0.78 * this.scale, this.y + 0.85 * this.scale)
    dc.arc(
      this.x + 0.71 * this.scale,
      this.y + 0.8075 * this.scale,
      0.0825 * this.scale,
      (1 / 6) * Math.PI,
      0.5 * Math.PI,
    )
    dc.lineTo(this.x + 0.29 * this.scale, this.y + 0.89 * this.scale)
    dc.arc(
      this.x + 0.298 * this.scale,
      this.y + 0.8075 * this.scale,
      0.0825 * this.scale,
      0.5 * Math.PI,
      (5 / 6) * Math.PI,
    )
    dc.lineTo(this.x + 0.0125 * this.scale, this.y + 0.49 * this.scale)
    dc.arc(
      this.x + 0.0825 * this.scale,
      this.y + 0.445 * this.scale,
      0.0825 * this.scale,
      (5 / 6) * Math.PI,
      (7 / 6) * Math.PI,
    )
    dc.closePath()
    dc.fill()
    return false
  }

  protected createGradient(dc: CanvasRenderingContext2D, colorStop1: string, colorStop2: string) {
    const gradient = dc.createRadialGradient(
      this.x + this.scale / 2,
      this.y + this.scale / 2,
      this.scale,
      this.x + this.scale / 2,
      this.y + this.scale / 2,
      2 * this.scale,
    )

    gradient.addColorStop(0, colorStop1)
    gradient.addColorStop(1, colorStop2)

    return gradient
  }
}

export class HexagonMap {
  private _hexagons: Hexagon[] = []
  private _requestedAnimationFrame = 0
  private _mapDc: CanvasRenderingContext2D
  private _mapCanvas: HTMLCanvasElement

  public constructor(_mapCanvas: HTMLCanvasElement) {
    this._mapCanvas = _mapCanvas
    this._mapDc = this._mapCanvas.getContext('2d') as CanvasRenderingContext2D

    // build Hexagon Map (TODO: might as well be compile time)
    for (let x = 0; x < NETWORK_MAP_WIDTH; x++) {
      for (let y = 0; y < NETWORK_MAP_HEIGHT; y++) {
        if (bitmap[x]?.[y] === 1)
          this._hexagons.push(new Hexagon(x, y, { width: this._mapCanvas.width, height: this._mapCanvas.height }))
      }
    }

    window.onresize = () => {
      if (!this._requestedAnimationFrame) {
        this._requestedAnimationFrame = window.requestAnimationFrame(this.draw.bind(this))
      }
    }

    this.draw()
  }

  private _drawMap() {
    // Clear the entire canvas without extra padding
    this._mapDc.clearRect(0, 0, this._mapCanvas.width, this._mapCanvas.height)
    // this._mapDc.strokeStyle = `rgba(${this._nodeColor.join(',')}, 0.1)`
    this._mapDc.fillStyle! = `rgb(228, 228, 233)`
    this._hexagons.forEach(hexagon => hexagon.draw(this._mapDc))
  }

  /**
   * main drawing function which is calling itself while animating
   */
  public draw() {
    // in case there is a animation frame requested, reset it
    if (this._requestedAnimationFrame) {
      window.cancelAnimationFrame(this._requestedAnimationFrame)
      this._requestedAnimationFrame = 0
    }

    this._drawMap()
  }
}
