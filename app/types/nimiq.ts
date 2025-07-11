export interface Peer {
  peerId: string
  lat: number
  lng: number
  x: number
  y: number
}

export enum ConsensusState {
  Idle = 'idle',
  Connecting = 'connecting', // We do not differentiate between connecting and syncing
  Established = 'established',
}
