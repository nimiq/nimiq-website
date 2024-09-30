import type { Peer } from '@/composables/useNimiq'
import { type GeoIpResponse, useGeoIp } from '@/composables/useGeoIp'
import bitmap from './NetworkBitMap'
import RobinsonProjection from './RobinsonProjection'

/** how long the tangent to the control point is in relation to the distance between the two points */
const CURVINESS_FACTOR = 0.2
/**
 * start and end point offset on a circle
 * TODO calculated properly and only once depending on `CURVINESS_FACTOR`.
 */
const CURVINESS_ANGLE = Math.PI / 6

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

/** Map scaling factor */
export const SCALING_FACTOR = 0.95

/** distance between 2 hexagons vertically in relation to its height */
const VERTICAL_HEXAGON_DISTANCE = 1.142
/** overlap between 2 hexagons horizontally in relation to its width */
const HORIZONTAL_HEXAGON_OVERLAP = 0.98

//  easing functions
// TODO more and/or better easing functions
// const quadraticEasing = (t: number) => t < 0.5 ? 2 * t ** 2 : 1 - (2 * t - 2) ** 2 / 2
const cubicEasing = (t: number) => (t < 0.5 ? 4 * t ** 3 : 1 + (2 * t - 2) ** 3 / 2)
// const quarticEasing = (t: number) => t < 0.5 ? 8 * t ** 4 : 1 - (2 * t - 2) ** 4 / 2
const sinEasing = (t: number) => (Math.sin(t * Math.PI - Math.PI / 2) / 2 + 0.5) ** 2

/**
 * the PlainAddressInfo returned from the network, augmented with its asociated hexagon
 */
type PlainAddressInfo = Peer
export type Node = PlainAddressInfo & {
  hexagon: NodeHexagon
  selfNode: boolean
  host?: string
}

class Hexagon {
  public static SCALE = (2 * WIDTH) / (NETWORK_MAP_WIDTH * HORIZONTAL_HEXAGON_OVERLAP)

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
    return this.position.x * Hexagon.SCALE * HORIZONTAL_HEXAGON_OVERLAP + (1 - SCALING_FACTOR) * WIDTH
  }

  /**
   * y coordinate of top left border of the bounding box
   */
  public get y() {
    const off = this.position.x % 2 === 0 ? 0.5 : 0
    return (
      (this.position.y + off) * Hexagon.SCALE * VERTICAL_HEXAGON_DISTANCE
      - 0.5 * Hexagon.SCALE
      + 2 * (1 - SCALING_FACTOR) * HEIGHT
    )
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  public draw(dc: CanvasRenderingContext2D, timeDelta: number): boolean {
    dc.lineWidth = 1
    dc.beginPath()
    dc.moveTo(this.x + 0.22 * Hexagon.SCALE, this.y + 0.04 * Hexagon.SCALE)
    dc.arc(
      this.x + 0.298 * Hexagon.SCALE,
      this.y + 0.0825 * Hexagon.SCALE,
      0.0825 * Hexagon.SCALE,
      (7 / 6) * Math.PI,
      1.5 * Math.PI,
    )
    dc.lineTo(this.x + 0.71 * Hexagon.SCALE, this.y)
    dc.arc(
      this.x + 0.71 * Hexagon.SCALE,
      this.y + 0.0825 * Hexagon.SCALE,
      0.0825 * Hexagon.SCALE,
      1.5 * Math.PI,
      (11 / 6) * Math.PI,
    )
    dc.lineTo(this.x + 0.9875 * Hexagon.SCALE, this.y + 0.4 * Hexagon.SCALE)
    dc.arc(
      this.x + 0.9175 * Hexagon.SCALE,
      this.y + 0.445 * Hexagon.SCALE,
      0.0825 * Hexagon.SCALE,
      (11 / 6) * Math.PI,
      (1 / 6) * Math.PI,
    )
    dc.lineTo(this.x + 0.78 * Hexagon.SCALE, this.y + 0.85 * Hexagon.SCALE)
    dc.arc(
      this.x + 0.71 * Hexagon.SCALE,
      this.y + 0.8075 * Hexagon.SCALE,
      0.0825 * Hexagon.SCALE,
      (1 / 6) * Math.PI,
      0.5 * Math.PI,
    )
    dc.lineTo(this.x + 0.29 * Hexagon.SCALE, this.y + 0.89 * Hexagon.SCALE)
    dc.arc(
      this.x + 0.298 * Hexagon.SCALE,
      this.y + 0.8075 * Hexagon.SCALE,
      0.0825 * Hexagon.SCALE,
      0.5 * Math.PI,
      (5 / 6) * Math.PI,
    )
    dc.lineTo(this.x + 0.0125 * Hexagon.SCALE, this.y + 0.49 * Hexagon.SCALE)
    dc.arc(
      this.x + 0.0825 * Hexagon.SCALE,
      this.y + 0.445 * Hexagon.SCALE,
      0.0825 * Hexagon.SCALE,
      (5 / 6) * Math.PI,
      (7 / 6) * Math.PI,
    )
    dc.closePath()
    dc.fill()
    return false
  }

  protected createGradient(dc: CanvasRenderingContext2D, colorStop1: string, colorStop2: string) {
    const gradient = dc.createRadialGradient(
      this.x + Hexagon.SCALE / 2,
      this.y + Hexagon.SCALE / 2,
      Hexagon.SCALE,
      this.x + Hexagon.SCALE / 2,
      this.y + Hexagon.SCALE / 2,
      2 * Hexagon.SCALE,
    )

    gradient.addColorStop(0, colorStop1)
    gradient.addColorStop(1, colorStop2)

    return gradient
  }
}

export class SelfHexagon extends Hexagon {
  private static ANIMATION_TIME = 1000
  private _animation = 0

  public isSelf = true

  public nodeCount = 'YOU!'

  public override draw(dc: CanvasRenderingContext2D, timeDelta: number): boolean {
    this._animation = Math.min(this._animation + timeDelta / SelfHexagon.ANIMATION_TIME, 1)

    dc.fillStyle! = this.createGradient(
      dc,
      `rgba(236, 153, 28, ${this._animation})`,
      `rgba(233, 178, 19, ${this._animation})`,
    )

    super.draw(dc, timeDelta)

    return this._animation !== 1
  }
}

export class NodeHexagon extends Hexagon {
  private static HEXAGON_ANIMATION_TIME = 1000
  private static SPLINE_ANIMATION_TIME = 1000
  private _color = [255, 255, 255]
  private _connectedColor = [5, 130, 202]

  public constructor(x: number, y: number, color: number[], connectedColor: number[] = [5, 130, 202]) {
    super(x, y)
    this._color = color
    this._connectedColor = connectedColor
  }

  private static getAlpha(nodeCount: number): number {
    return 0.3 + 0.2 * nodeCount
  }

  private _animation = {
    hexagon: 1,
    connection: 1,
  }

  public peers: Set<Node> = new Set()
  private _connections: Set<string> = new Set()
  private _oldPeerCount = 0

  public addNode(node: Node) {
    if (this.peers.has(node))
      return false // do not add existing nodes explicitly update their state
    this._oldPeerCount = this.peers.size
    if (this.peers.size !== this.peers.add(node).size) {
      this._animation.hexagon = 0
    }
    else {
      return false // UNEXPECTED
    }

    if (node.connected) {
      let updated = false
      if (this._connections.size === 0) {
        updated = true
        this._animation.connection = 0
      }
      this._connections.add(node.peerId)
      return updated
    }
    return true
  }

  public updateState(node: Node) {
    if (!this.peers.has(node))
      return false // node is not present, do not update
    let updated = false
    if (node.connected) {
      if (this._connections.size === 0) {
        this._animation.connection = 0
        updated = true
      }
      this._connections.add(node.peerId)
    }
    else if (this._connections.size === 1 && this._connections.delete(node.peerId)) {
      updated = true
      this._animation.connection = 0
    }

    return updated
  }

  public removeNode(node: Node) {
    let updated = false
    if (this._connections.delete(node.peerId)) {
      if (!this.isConnected) {
        updated = true
        this._animation.connection = 0
        this._animation.hexagon = 0
      }
    }
    this._oldPeerCount = this.peers.size
    if (this.peers.delete(node) && (!this.isConnected || this.peers.size === 0)) {
      updated = true
      this._animation.hexagon = 0
    }
    return updated
  }

  public get nodeCount() {
    return this.peers.size
  }

  public get isConnected(): boolean {
    return this._connections.size > 0 || 1 - this._animation.connection > Number.EPSILON
  }

  public override draw(dc: CanvasRenderingContext2D, timeDelta: number): boolean {
    // nothing to render and animation finished.
    if (this.nodeCount === 0 && 1 - this._animation.hexagon < Number.EPSILON)
      return false

    this._animation.hexagon = Math.min(this._animation.hexagon + timeDelta / NodeHexagon.HEXAGON_ANIMATION_TIME, 1)

    if (!this.isConnected || this._connections.size === 0) {
      dc.fillStyle! = `rgba(${this._color.join(',')}, ${
        // maximum opacity
        0.3
        // old state
        * (NodeHexagon.getAlpha(this._oldPeerCount)
          // animation to new state
          + NodeHexagon.getAlpha(this.peers.size - this._oldPeerCount) * this._animation.hexagon)
      }`
      super.draw(dc, timeDelta)
    }

    if (this.isConnected) {
      dc.fillStyle = `rgba(${this._connectedColor.join(',')}, ${
        this._connections.size === 0 ? 1 - this._animation.hexagon : this._animation.hexagon
      })`
      super.draw(dc, timeDelta)
    }

    // draw

    return this._animation.hexagon !== 1
  }

  public drawSplineFrom(dc: CanvasRenderingContext2D, self: SelfHexagon, timeDelta: number): boolean {
    this._animation.connection = Math.min(this._animation.connection + timeDelta / NodeHexagon.SPLINE_ANIMATION_TIME, 1)

    // middle points of each hexagon, note that hexagons are 0.89 the height of their width
    const xPeer = this.x + 0.5 * Hexagon.SCALE
    const yPeer = this.y + 0.445 * Hexagon.SCALE
    const xSelf = self.x + 0.5 * Hexagon.SCALE
    const ySelf = self.y + 0.445 * Hexagon.SCALE

    let angle = Math.atan2(yPeer - ySelf, xPeer - xSelf)
    const distance = Math.sqrt((xSelf - xPeer) ** 2 + (ySelf - yPeer) ** 2)

    // set up stroke style depending on node state
    dc.lineWidth = 3.5
    if (this._animation.connection !== 1) {
      // animating is going on TODO
      switch (this._connections.size) {
        case 0: // animating towards disconnected
          dc.strokeStyle = `rgba(117, 121, 157, ${1 - sinEasing(this._animation.connection)})`
          dc.setLineDash([])
          dc.lineDashOffset = 0
          break
        default: // animating towards connected
          dc.strokeStyle = 'rgba(117, 121, 157, 1)'
          dc.setLineDash([distance, distance])
          dc.lineDashOffset = -(distance + cubicEasing(this._animation.connection) * distance)
      }
    }
    else {
      // no animation
      dc.strokeStyle = `rgba(117, 121, 157, ${this.isConnected ? 1 : 0})`
      dc.setLineDash([])
      dc.lineDashOffset = 0
    }

    dc.beginPath()
    if (distance >= 3.5 * Hexagon.SCALE) {
      // quadratic curves for distant nodes
      let counterAngle = 0
      let tangent = 0

      if (Math.abs(angle) > Math.PI / 2) {
        // atan2 returns positive and negative numbers between 0 and Math.PI
        counterAngle = angle + Math.PI - CURVINESS_ANGLE
        tangent = angle + Math.PI / 2
        angle += CURVINESS_ANGLE
      }
      else {
        counterAngle = angle + Math.PI + CURVINESS_ANGLE
        tangent = angle - Math.PI / 2
        angle -= CURVINESS_ANGLE
      }

      dc.moveTo(xSelf + Math.cos(angle) * Hexagon.SCALE, ySelf + Math.sin(angle) * Hexagon.SCALE * 0.89)
      dc.quadraticCurveTo(
        (xSelf + xPeer) / 2 + Math.cos(tangent) * distance * CURVINESS_FACTOR,
        (ySelf + yPeer) / 2 + Math.sin(tangent) * distance * CURVINESS_FACTOR,
        xPeer + Math.cos(counterAngle) * Hexagon.SCALE,
        yPeer + Math.sin(counterAngle) * Hexagon.SCALE * 0.89,
      )
    }
    else if (distance > 1.5 * Hexagon.SCALE) {
      // straight lines for close nodes
      dc.moveTo(xSelf + Math.cos(angle) * Hexagon.SCALE, ySelf + Math.sin(angle) * Hexagon.SCALE * 0.89)
      dc.lineTo(
        xPeer + Math.cos(angle + Math.PI) * Hexagon.SCALE,
        yPeer + Math.sin(angle + Math.PI) * Hexagon.SCALE * 0.89,
      )
    } // draw nothing if direct neighbour nodes or same node as self
    dc.stroke()

    return this._animation.connection !== 1
  }
}

export default class NetworkMap {
  private _nodes: Map<string, Node> = new Map()
  private _nodeColor: number[]
  private _connectedNodeColor: number[]
  private _hexagons: Hexagon[] = []
  private _self: SelfHexagon | null = null
  private _nodeHexagons: Map<number, Map<number, NodeHexagon>> = new Map()
  private _requestedAnimationFrame = 0
  private _lastFrameTime = 0
  private _mapDc: CanvasRenderingContext2D
  private _overlayDc: CanvasRenderingContext2D
  private _geoLocate: (host?: string) => Promise<GeoIpResponse>

  public constructor(
    _mapCanvas: HTMLCanvasElement,
    _overlayCanvas: HTMLCanvasElement,
    private _updateCallback: (nodes: NodeHexagon[]) => any,
    private _onInit: (selfNode: SelfHexagon) => any,
    private _selfNodeScrollIntoView: (x: number) => any,
    nodeColor = [255, 255, 255],
    connectedNodeColor = [5, 130, 202],
  ) {
    if (nodeColor.length !== 3) {
      throw new Error('nodeColor must be an array of 3 numbers')
    }
    if (connectedNodeColor.length !== 3) {
      throw new Error('connectedNodeColor must be an array of 3 numbers')
    }

    this._mapDc = _mapCanvas.getContext('2d') as CanvasRenderingContext2D
    this._overlayDc = _overlayCanvas.getContext('2d') as CanvasRenderingContext2D

    _mapCanvas.width = 2 * WIDTH
    _mapCanvas.height = 2 * HEIGHT

    _overlayCanvas.width = 2 * WIDTH
    _overlayCanvas.height = 2 * HEIGHT

    // Scale the map down to acomodate for 5% top padding, and 2.5% padding left and right.
    this._mapDc.scale(SCALING_FACTOR, SCALING_FACTOR)
    this._overlayDc.scale(SCALING_FACTOR, SCALING_FACTOR)

    this._overlayDc.lineCap = 'round'

    this._geoLocate = useGeoIp().locate

    // build Hexagon Map (TODO: might as well be compile time)
    for (let x = 0; x < NETWORK_MAP_WIDTH; x++) {
      for (let y = 0; y < NETWORK_MAP_HEIGHT; y++) {
        if (bitmap[x]?.[y] === 1)
          this._hexagons.push(new Hexagon(x, y))
      }
    }

    window.onresize = () => {
      if (!this._requestedAnimationFrame) {
        this._requestedAnimationFrame = window.requestAnimationFrame(this.draw.bind(this))
      }
    }

    this._nodeColor = nodeColor
    this._connectedNodeColor = connectedNodeColor

    // set up self location
    this._geoLocate()
      .then((response) => {
        if (response && response.location && response.location.latitude && response.location.longitude) {
          const selfPosition = this._hexagonByCoordinate(response.location.latitude, response.location.longitude)
          this._self = new SelfHexagon(selfPosition.x, selfPosition.y)

          // add a NodeHexagon for self as well which will not be drawn
          // use dummy Node data for it, as it will not be used
          const selfHexagon = new NodeHexagon(selfPosition.x, selfPosition.y, nodeColor)
          selfHexagon.addNode({
            connected: false,
            banned: false,
            peerId: '',
            peerAddress: '',
            services: [],
            netAddress: null,
            hexagon: selfHexagon,
            selfNode: true,
          })
          if (!this._nodeHexagons.has(selfPosition.x)) {
            this._nodeHexagons.set(selfPosition.x, new Map<number, NodeHexagon>())
          }
          this._nodeHexagons.get(selfPosition.x)!.set(selfPosition.y, selfHexagon)

          this.draw()

          _onInit(this._self)
          _selfNodeScrollIntoView((this._self.x / 2) * SCALING_FACTOR)
        } // TODO what to do when no response, or wrong response?
      })
      .catch(() => undefined)

    this.draw()
  }

  public updateNodes(nodeAddressInfos: PlainAddressInfo[]) {
    const knownNodes: Set<string> = new Set(this._nodes.keys())
    let nodesUpdated = false

    for (const node of nodeAddressInfos) {
      knownNodes.delete(node.peerId)
      nodesUpdated = this._updateOrAddNode(node) || nodesUpdated
    }

    for (const node of knownNodes) {
      nodesUpdated = this.removeNode(node) || nodesUpdated
    }

    return nodesUpdated
  }

  private _updateOrAddNode(nodeAddressInfo: PlainAddressInfo): boolean {
    if (this._nodes.has(nodeAddressInfo.peerId)) {
      // existing peer
      const node = this._nodes.get(nodeAddressInfo.peerId)!
      if (node.connected === nodeAddressInfo.connected) {
        return false // only case were there is no update
      }
      node.connected = nodeAddressInfo.connected
      node.hexagon.updateState(node)
    }
    else if (this._getPeerLocator(nodeAddressInfo)) {
      this._geoLocate(this._getPeerLocator(nodeAddressInfo)!)
        .then((response) => {
          if (response && response.location && response.location.latitude && response.location.longitude) {
            const nodePosition = this._hexagonByCoordinate(response.location.latitude, response.location.longitude)

            // create new Map if necessary
            if (!this._nodeHexagons.has(nodePosition.x)) {
              this._nodeHexagons.set(nodePosition.x, new Map<number, NodeHexagon>())
            }

            // create new Hexagon if necessary
            let hexagon = this._nodeHexagons.get(nodePosition.x)!.get(nodePosition.y)
            if (!hexagon) {
              hexagon = new NodeHexagon(nodePosition.x, nodePosition.y, this._nodeColor, this._connectedNodeColor)
              this._nodeHexagons.get(nodePosition.x)!.set(nodePosition.y, hexagon)
            }

            const node: Node = Object.assign(nodeAddressInfo, {
              hexagon,
              selfNode: false,
              locationData: {},
              host: this._getPeerHost(nodeAddressInfo),
            })

            hexagon.addNode(node)
            this._nodes.set(nodeAddressInfo.peerId, node)
          }
        })
        .catch(() => undefined)
    }
    return true
  }

  private removeNode(peerId: string) {
    if (!this._nodes.has(peerId))
      return false
    const node = this._nodes.get(peerId)!
    node.hexagon.removeNode(node)
    // TODO: Remove hexagon if this was its last node
    this._nodes.delete(peerId)
    return true
  }

  /**
   * 1. IP if reliable
   * 2. Hostname for WS and WSS peers if available (not 0.0.0.0)
   * 3. IP if available
   */
  private _getPeerLocator(addressInfo: PlainAddressInfo) {
    const locator = addressInfo.multiAddress.split('/')[2]
    if (locator && locator !== '0.0.0.0') {
      return locator
    }

    return null
  }

  private _getPeerHost(addressInfo: PlainAddressInfo) {
    const locator = this._getPeerLocator(addressInfo)
    if (locator && !this._isIp(locator)) {
      return locator
    }

    return undefined
  }

  private _isIp(locator: string) {
    return /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(locator) || locator.includes(':')
  }

  /**
   * Calculates the time passed in milliseconds since last frame. returns 0 on first invokation
   * and after renderingwas suspended.
   */
  private _frameTime() {
    const currentTime = Date.now()
    if (this._lastFrameTime) {
      const frameTime = currentTime - this._lastFrameTime
      this._lastFrameTime = currentTime

      return frameTime
    }
    this._lastFrameTime = currentTime
    return 0
  }

  /**
   * retrieves the hexagon indices of the hexagon corresponding to `latitude`  and `longitude`
   * @param latitude
   * @param longitude
   */

  private _hexagonByCoordinate(latitude: number, longitude: number): { x: number, y: number } {
    // the map that we have is cropped out from the full robinson projected map. We have to make
    // the computation on the full/original map, so we calculate the full size.
    const fullMapWidth = 1.0946808510638297 * 2 * WIDTH
    const fullMapHeight = fullMapWidth / 1.97165551906973 // RobinsonProjection maps have a fixed aspect ratio
    const point = RobinsonProjection.project(fullMapWidth, latitude, longitude)
    // the origin is centered in the middle of the map, so we translate it
    // to the top left corner
    point.x = fullMapWidth / 2 + point.x
    point.y = fullMapHeight / 2 - point.y
    // the map that we have is robinson projected and then cropped out and scaled
    point.x = Math.max(0, point.x - 0.07045675413022352 * fullMapWidth)
    point.y = Math.max(0, point.y - 0.012380952380952381 * fullMapHeight)

    const xHexagon = Math.floor(point.x / (Hexagon.SCALE * HORIZONTAL_HEXAGON_OVERLAP))
    const off = xHexagon % 2 === 0 ? 0.5 : 0

    return {
      x: xHexagon,
      y: Math.floor((point.y + 0.5 * Hexagon.SCALE) / (Hexagon.SCALE * VERTICAL_HEXAGON_DISTANCE) - off),
    }
  }

  /**
   * @param timeDelta time that passed since last animationFrame, or 0 if it is the first animation frame
   * @returns true if an animation is ongoing, false otherwise.
   */
  private _drawOverlay(timeDelta: number): boolean {
    this._overlayDc.clearRect(0, 0, (2 * WIDTH) / 0.95, (2 * HEIGHT) / 0.95)
    if (this._self) {
      let animating = false
      animating = this._self.draw(this._overlayDc, timeDelta) || animating

      // Connecting splines need to be drawn separately, as they  need to draw over hexagons
      const connectedNodes: NodeHexagon[] = []

      if (this._updateCallback) {
        const nodes: NodeHexagon[] = Array.from(this._nodeHexagons.values()).flatMap(hexagons =>
          Array.from(hexagons.values()).filter(hexagon => hexagon.peers.size > 0),
        )
        // nodes.push(this._self);
        this._updateCallback(nodes)
      }

      // Draw hexagons
      for (const [, xHexagonMap] of this._nodeHexagons) {
        for (const [, hexagon] of xHexagonMap) {
          if (hexagon.x === this._self.x && hexagon.y === this._self.y)
            continue // don't draw on self node
          if (hexagon.isConnected) {
            connectedNodes.push(hexagon)
          }
          animating = hexagon.draw(this._overlayDc, timeDelta) || animating
        }
      }

      // Draw connecting splines
      for (const connectedNode of connectedNodes) {
        animating = connectedNode.drawSplineFrom(this._overlayDc, this._self, timeDelta) || animating
      }

      return animating
    }
    return false
  }

  /**
   *
   * @param timeDelta time that passed since last animationFrame, or 0 if it is the first animation frame
   */
  private _drawMap(timeDelta: number) {
    this._mapDc.clearRect(0, 0, (2 * WIDTH) / 0.95, (2 * HEIGHT) / 0.95)
    this._mapDc.strokeStyle = `rgba(${this._nodeColor.join(',')}, 0.1)`
    this._mapDc.fillStyle! = `rgba(${this._nodeColor.join(',')}, 0.1)`
    this._hexagons.forEach(hexagon => hexagon.draw(this._mapDc, timeDelta))
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

    const ft = this._frameTime()

    // this._setDomensions();
    this._drawMap(ft)
    if (this._drawOverlay(ft)) {
      // only redraw after timeout if there is actual change to be drawn
      this._requestedAnimationFrame = window.requestAnimationFrame(this.draw.bind(this))
    }
    else {
      // if there is no change going on reset the lastFrameTime
      this._lastFrameTime = 0
    }
  }
}
