interface PlaygroundMessage {
  type: string
  data?: any
  id?: string
}

interface PlaygroundState {
  isConnected: boolean
  currentAddress: string | null
  selectedAction: 'idle' | 'stake' | 'buy' | 'swap'
}

export function usePlaygroundIframe() {
  // Simplified state - removed isReady since we'll rely on iframe load
  const playgroundState = useState<PlaygroundState>('playground-state', () => ({
    isConnected: false,
    currentAddress: null,
    selectedAction: 'idle',
  }))

  // Reference to the iframe component
  const iframeRef = useState<any>('playground-iframe-ref', () => null)

  /**
   * Send a message to the playground iframe
   */
  function sendMessage(message: PlaygroundMessage) {
    if (iframeRef.value?.sendMessage) {
      iframeRef.value.sendMessage(message)
    }
    else {
      console.warn('usePlaygroundIframe: Iframe not available, message not sent:', message.type)
    }
  }

  /**
   * Set the iframe reference (called by WalletPlaygroundIframe component)
   */
  function setIframeRef(ref: any) {
    iframeRef.value = ref
  }

  /**
   * Handle when iframe becomes ready - simplified to just send initial state
   */
  function onIframeReady() {
    // Send initial flow state to iframe
    sendMessage({
      type: 'wallet:action:change',
      data: {
        action: playgroundState.value.selectedAction,
      },
    })
  }

  /**
   * Handle action selection from ActionSelector
   */
  function setSelectedAction(action: 'idle' | 'stake' | 'buy' | 'swap') {
    // eslint-disable-next-line no-console
    console.log('Action changed to:', action)
    playgroundState.value.selectedAction = action

    // Send flow change to iframe
    sendMessage({
      type: 'wallet:action:change',
      data: {
        action,
      },
    })
  }

  /**
   * Handle wallet connection
   */
  async function connectWallet(address: string) {
    playgroundState.value.isConnected = true
    playgroundState.value.currentAddress = address
  }

  /**
   * Handle wallet disconnection
   */
  function disconnectWallet() {
    playgroundState.value.isConnected = false
    playgroundState.value.currentAddress = null
  }

  /**
   * Reset action state to idle (used when modals are closed)
   */
  function resetActionState() {
    playgroundState.value.selectedAction = 'idle'

    // Send flow change to iframe
    sendMessage({
      type: 'wallet:action:change',
      data: {
        action: 'idle',
      },
    })
  }

  /**
   * Handle incoming messages from playground iframe
   */
  async function handlePlaygroundMessage(message: PlaygroundMessage) {
    // eslint-disable-next-line no-console
    console.log('Received message from playground:', message)

    const messageType = message.type || (message as any).kind

    switch (messageType) {
      case 'FlowChange':
        // Handle flow change from iframe (e.g., when modal closes and flow returns to idle)
        // eslint-disable-next-line no-console
        console.log('Flow changed to:', message.data)
        if (message.data === 'idle') {
          // eslint-disable-next-line no-console
          console.log('Flow changed to idle, resetting action state')
          playgroundState.value.selectedAction = 'idle'
        }
        else if (['stake', 'buy', 'swap'].includes(message.data)) {
          // Update action state to match iframe flow
          playgroundState.value.selectedAction = message.data
        }
        break
      default:
        // eslint-disable-next-line no-console
        console.log('Unknown message type:', messageType)
    }
  }

  return {
    // State
    playgroundState: readonly(playgroundState),

    // Methods
    setIframeRef,
    onIframeReady,
    setSelectedAction,
    resetActionState,
    connectWallet,
    disconnectWallet,
    sendMessage,
    handlePlaygroundMessage,
  }
}
