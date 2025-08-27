interface PlaygroundMessage {
  type: 'demo:ready' | 'action:change' | 'action:open-buy-modal' | 'action:open-staking-modal' | 'action:open-swap-modal' | 'action:close-modal'
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

  function isStandardizedAction(messageType: PlaygroundMessage['type']): boolean {
    return [
      'demo:ready',
      'action:open-buy-modal',
      'action:open-staking-modal',
      'action:open-swap-modal',
      'action:close-modal',
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
    // Prevent state desynchronization between parent and iframe
    sendMessage({
      type: 'action:change',
      data: {
        action: playgroundState.value.selectedAction,
        isDemoMode: playgroundState.value.isDemoMode,
      },
    })
  }

  function setSelectedAction(action: 'idle' | 'stake' | 'buy' | 'swap') {
    playgroundState.value.selectedAction = action

    // Prevent iframe from falling out of sync when parent changes
    sendMessage({
      type: 'action:change',
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

    // Ensure iframe doesn't remain in stale action state
    sendMessage({
      type: 'action:change',
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

    // Ensure wallet UI matches host modal state
    const modalMap = {
      buy: 'action:open-buy-modal',
      stake: 'action:open-staking-modal',
      swap: 'action:open-swap-modal',
    } as const

    sendMessage({
      type: modalMap[type],
    })
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
      case 'demo:ready':
        activateDemoMode()
        break

      case 'action:open-buy-modal':
        openModal('buy')
        break

      case 'action:open-staking-modal':
        openModal('stake')
        break

      case 'action:open-swap-modal':
        openModal('swap')
        break

      case 'action:close-modal':
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
