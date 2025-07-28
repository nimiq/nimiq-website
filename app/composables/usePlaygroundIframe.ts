interface PlaygroundMessage {
  type: string
  data?: any
  id?: string
}

interface PlaygroundState {
  isConnected: boolean
  currentAddress: string | null
  selectedAction: 'idle' | 'stake' | 'buy' | 'swap'
  isDemoMode: boolean
  isModalOpen: boolean
  openModalType: 'buy' | 'stake' | 'swap' | null
}

export function usePlaygroundIframe() {
  const playgroundState = useState<PlaygroundState>('playground-state', () => ({
    isConnected: false,
    currentAddress: null,
    selectedAction: 'idle',
    isDemoMode: false,
    isModalOpen: false,
    openModalType: null,
  }))

  const iframeRef = useState<any>('playground-iframe-ref', () => null)

  function isStandardizedAction(messageType: string): boolean {
    return [
      'wallet:demo:ready',
      'wallet:action:open-buy-demo-nim-modal',
      'wallet:action:open-staking-modal',
      'wallet:action:open-swap-modal',
      'wallet:action:close-modal',
    ].includes(messageType)
  }

  function sendMessage(message: PlaygroundMessage) {
    if (iframeRef.value?.sendMessage) {
      iframeRef.value.sendMessage(message)
    }
    else {
      console.warn('usePlaygroundIframe: Iframe not available, message not sent:', message.type)
    }
  }

  function setIframeRef(ref: any) {
    iframeRef.value = ref
  }

  function onIframeReady() {
    // Sync initial state with iframe on connection
    sendMessage({
      type: 'wallet:action:change',
      data: {
        action: playgroundState.value.selectedAction,
        isDemoMode: playgroundState.value.isDemoMode,
      },
    })
  }

  function setSelectedAction(action: 'idle' | 'stake' | 'buy' | 'swap') {
    playgroundState.value.selectedAction = action

    // Keep iframe in sync with parent state changes
    sendMessage({
      type: 'wallet:action:change',
      data: {
        action,
        isDemoMode: playgroundState.value.isDemoMode,
      },
    })
  }

  async function connectWallet(address: string) {
    playgroundState.value.isConnected = true
    playgroundState.value.currentAddress = address
  }

  function disconnectWallet() {
    playgroundState.value.isConnected = false
    playgroundState.value.currentAddress = null
  }

  function resetActionState() {
    playgroundState.value.selectedAction = 'idle'
    playgroundState.value.isModalOpen = false
    playgroundState.value.openModalType = null

    // Notify iframe that we've returned to idle state
    sendMessage({
      type: 'wallet:action:change',
      data: {
        action: 'idle',
        isDemoMode: playgroundState.value.isDemoMode,
      },
    })
  }

  function openModal(type: 'buy' | 'stake' | 'swap') {
    playgroundState.value.isModalOpen = true
    playgroundState.value.openModalType = type
    playgroundState.value.selectedAction = type
  }

  function closeModal() {
    playgroundState.value.isModalOpen = false
    playgroundState.value.openModalType = null
    playgroundState.value.selectedAction = 'idle'
  }

  function activateDemoMode() {
    playgroundState.value.isDemoMode = true
  }

  async function handlePlaygroundMessage(message: PlaygroundMessage) {
    const messageType = message.type

    switch (messageType) {
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
        console.warn('Unknown message type:', messageType)
    }
  }

  return {
    playgroundState: readonly(playgroundState),
    setIframeRef,
    onIframeReady,
    setSelectedAction,
    resetActionState,
    connectWallet,
    disconnectWallet,
    sendMessage,
    handlePlaygroundMessage,
    openModal,
    closeModal,
    activateDemoMode,
    isStandardizedAction,
  }
}
