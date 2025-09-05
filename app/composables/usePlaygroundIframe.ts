export interface WalletPlaygroundMessage {
  type: 'demo:ready' | 'action:open-buy-modal' | 'action:open-staking-modal' | 'action:open-swap-modal' | 'action:close-modal'
  data?: {
    connected?: boolean
    address?: string
    action?: Action
    isDemoMode?: boolean
  }
}

export type Action = 'idle' | 'stake' | 'buy' | 'swap'

interface PlaygroundState {
  isConnected: boolean
  currentAddress: string | null
  selectedAction: Action
  isDemoMode: boolean
  isModalOpen: boolean
  openModalType: 'buy' | 'stake' | 'swap' | null
  playgroundUrl: string
}

export function usePlaygroundIframe() {
  const playgroundState = useState<PlaygroundState>('playground-state', () => ({
    isConnected: false,
    currentAddress: null,
    selectedAction: 'idle',
    isDemoMode: false,
    isModalOpen: false,
    openModalType: null,
    playgroundUrl: 'https://wallet.nimiq.com',
  }))

  const iframeWrapper = useState<{ sendMessage: (message: WalletPlaygroundMessage) => void } | null>('playground-iframe-ref', () => null)

  const allowedMessageTypes: WalletPlaygroundMessage['type'][] = [
    'demo:ready',
    'action:open-buy-modal',
    'action:open-staking-modal',
    'action:open-swap-modal',
    'action:close-modal',
  ]

  const ActionToMessageType: Record<Action, WalletPlaygroundMessage['type']> = {
    idle: 'demo:ready',
    stake: 'action:open-staking-modal',
    buy: 'action:open-buy-modal',
    swap: 'action:open-swap-modal',
  }

  function isStandardizedAction(messageType: WalletPlaygroundMessage['type']): boolean {
    return allowedMessageTypes.includes(messageType)
  }

  function sendMessage(message: WalletPlaygroundMessage) {
    if (iframeWrapper.value?.sendMessage) {
      iframeWrapper.value.sendMessage(message)
    }
    else {
      console.warn('usePlaygroundIframe: Iframe not available, message not sent:', message.type)
    }
  }

  function setIframeRef(ref: { sendMessage: (message: WalletPlaygroundMessage) => void }) {
    iframeWrapper.value = ref
  }

  function onIframeReady() {
    // Prevent state desynchronization between parent and iframe
    sendMessage({
      type: 'demo:ready',
      data: {
        action: playgroundState.value.selectedAction,
        isDemoMode: playgroundState.value.isDemoMode,
      },
    })
  }

  function setSelectedAction(action: Action) {
    playgroundState.value.selectedAction = action

    // Keep iframe in sync when parent changes action
    sendMessage({
      type: ActionToMessageType[action],
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
      type: 'demo:ready',
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

    const modalMap = {
      buy: 'action:open-buy-modal',
      stake: 'action:open-staking-modal',
      swap: 'action:open-swap-modal',
    } as const

    sendMessage({ type: modalMap[type] })
  }

  function closeModal() {
    playgroundState.value.isModalOpen = false
    playgroundState.value.openModalType = null
    playgroundState.value.selectedAction = 'idle'
  }

  function activateDemoMode() {
    playgroundState.value.isDemoMode = true
  }

  function setPlaygroundUrl(url: string) {
    playgroundState.value.playgroundUrl = url
  }

  async function handlePlaygroundMessage(type: WalletPlaygroundMessage['type']) {
    switch (type) {
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
        console.warn('Unknown message type:', type)
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
    allowedMessageTypes,
    sendMessage,
    handlePlaygroundMessage,
    openModal,
    closeModal,
    activateDemoMode,
    setPlaygroundUrl,
    isStandardizedAction,
    ActionToMessageType,
  }
}
