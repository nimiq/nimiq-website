interface PlaygroundMessage {
  type: string
  data?: any
  id?: string
}

// Enhanced types for future actions can be added here if needed

interface PlaygroundState {
  isConnected: boolean
  currentAddress: string | null
  selectedAction: 'idle' | 'stake' | 'buy' | 'swap'
  // Add new state for future actions
  isDemoMode: boolean
  isModalOpen: boolean
  openModalType: 'buy' | 'stake' | 'swap' | null
}

export function usePlaygroundIframe() {
  // Enhanced state for future actions
  const playgroundState = useState<PlaygroundState>('playground-state', () => ({
    isConnected: false,
    currentAddress: null,
    selectedAction: 'idle',
    isDemoMode: false,
    isModalOpen: false,
    openModalType: null,
  }))

  // Reference to the iframe component
  const iframeRef = useState<any>('playground-iframe-ref', () => null)

  /**
   * Utility function to check if a message is a future action
   */
  function isFutureAction(messageType: string): boolean {
    return [
      'wallet:demo:ready',
      'wallet:action:open-buy-demo-nim-modal',
      'wallet:action:open-staking-modal',
      'wallet:action:open-swap-modal',
      'wallet:action:close-modal',
    ].includes(messageType)
  }

  /**
   * Utility function to check if a message is a legacy action
   */
  function isLegacyAction(messageType: string): boolean {
    return [
      'wallet:connect',
      'wallet:transaction',
      'wallet:sign',
      'wallet:action:request',
      'FlowChange',
    ].includes(messageType)
  }

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
   * Handle when iframe becomes ready - enhanced for both regular and demo modes
   */
  function onIframeReady() {
    // Send initial flow state to iframe
    sendMessage({
      type: 'wallet:action:change',
      data: {
        action: playgroundState.value.selectedAction,
        isDemoMode: playgroundState.value.isDemoMode,
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
        isDemoMode: playgroundState.value.isDemoMode,
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
    playgroundState.value.isModalOpen = false
    playgroundState.value.openModalType = null

    // Send flow change to iframe
    sendMessage({
      type: 'wallet:action:change',
      data: {
        action: 'idle',
        isDemoMode: playgroundState.value.isDemoMode,
      },
    })
  }

  /**
   * Handle opening specific modals (future actions)
   */
  function openModal(type: 'buy' | 'stake' | 'swap') {
    playgroundState.value.isModalOpen = true
    playgroundState.value.openModalType = type
    playgroundState.value.selectedAction = type

    // eslint-disable-next-line no-console
    console.log(`Opening ${type} modal`)
  }

  /**
   * Handle closing modals (future actions)
   */
  function closeModal() {
    playgroundState.value.isModalOpen = false
    playgroundState.value.openModalType = null
    playgroundState.value.selectedAction = 'idle'

    // eslint-disable-next-line no-console
    console.log('Closing modal')
  }

  /**
   * Handle demo mode activation (future actions)
   */
  function activateDemoMode() {
    playgroundState.value.isDemoMode = true
    // eslint-disable-next-line no-console
    console.log('Demo mode activated')
  }

  /**
   * Handle incoming messages from playground iframe
   *
   * TRANSITION GUIDE:
   * ================
   *
   * LEGACY ACTIONS (being phased out):
   * - 'wallet:connect' → handled by legacy wallet integration
   * - 'wallet:transaction' → handled by legacy wallet integration
   * - 'wallet:sign' → handled by legacy wallet integration
   * - 'wallet:action:request' → handled by legacy wallet integration
   * - 'FlowChange' → handled for backward compatibility
   *
   * FUTURE ACTIONS (new standardized approach):
   * - 'wallet:demo:ready' → activates demo mode and sends ready signal
   * - 'wallet:action:open-buy-demo-nim-modal' → opens buy modal, updates selectedAction to 'buy'
   * - 'wallet:action:open-staking-modal' → opens staking modal, updates selectedAction to 'stake'
   * - 'wallet:action:open-swap-modal' → opens swap modal, updates selectedAction to 'swap'
   * - 'wallet:action:close-modal' → closes any open modal, resets selectedAction to 'idle'
   *
   * USAGE EXAMPLE:
   * ==============
   *
   * From playground iframe:
   * @example
   * // New standardized way
   * parent.postMessage({
   *   type: 'wallet:action:open-staking-modal',
   *   data: { }
   * }, '*')
   *
   * // To close modal
   * parent.postMessage({
   *   type: 'wallet:action:close-modal'
   * }, '*')
   *
   * STATE MANAGEMENT:
   * ================
   * - playgroundState.isDemoMode → true when in demo mode
   * - playgroundState.isModalOpen → true when any modal is open
   * - playgroundState.openModalType → 'buy' | 'stake' | 'swap' | null
   * - playgroundState.selectedAction → current action state
   */
  async function handlePlaygroundMessage(message: PlaygroundMessage) {
    // eslint-disable-next-line no-console
    console.log('Received message from playground:', message)

    const messageType = message.type || (message as any).kind

    // Enhanced logging for debugging the transition
    if (isFutureAction(messageType)) {
      // eslint-disable-next-line no-console
      console.log('🚀 Processing future action:', messageType)
    }
    else if (isLegacyAction(messageType)) {
      // eslint-disable-next-line no-console
      console.log('⚠️  Processing legacy action:', messageType)
    }

    switch (messageType) {
      case 'FlowChange':
        // Handle flow change from iframe (e.g., when modal closes and flow returns to idle)
        // eslint-disable-next-line no-console
        console.log('Flow changed to:', message.data)
        if (message.data === 'idle') {
          // eslint-disable-next-line no-console
          console.log('Flow changed to idle, resetting action state')
          resetActionState()
        }
        else if (['stake', 'buy', 'swap'].includes(message.data)) {
          // Update action state to match iframe flow
          playgroundState.value.selectedAction = message.data
        }
        break

      // Future actions - Enhanced handling
      case 'wallet:demo:ready':
        activateDemoMode()
        break

      case 'wallet:action:open-buy-demo-nim-modal':
        openModal('buy')
        break

      case 'wallet:action:open-staking-modal':
        openModal('stake')
        break

      case 'wallet:action:open-swap-modal':
        openModal('swap')
        break

      case 'wallet:action:close-modal':
        closeModal()
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

    // New methods for future actions
    openModal,
    closeModal,
    activateDemoMode,

    // Utility functions
    isFutureAction,
    isLegacyAction,
  }
}
