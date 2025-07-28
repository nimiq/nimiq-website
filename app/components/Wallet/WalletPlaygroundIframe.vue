<script setup lang="ts">
interface PlaygroundMessage {
  type: string
  kind?: string
  data?: any
  id?: string
}

const {
  playgroundUrl,
  allowedOrigins = [],
  height = '600px',
  width = '100%',
  sandbox = 'allow-scripts allow-same-origin',
} = defineProps<{
  playgroundUrl: string
  allowedOrigins?: string[]
  height?: string
  width?: string
  sandbox?: string
}>()

const emit = defineEmits<{
  message: [message: PlaygroundMessage]
  ready: []
  error: [error: Error]
}>()

// Get composable functions
const { setIframeRef, onIframeReady, handlePlaygroundMessage } = usePlaygroundIframe()

// Validate playground URL is HTTPS
const validatedPlaygroundUrl = computed(() => {
  try {
    const url = new URL(playgroundUrl)
    if (url.protocol !== 'https:')
      throw new Error(`WalletPlaygroundIframe: Only HTTPS URLs are allowed: ${url.href}`)
    return playgroundUrl
  }
  catch {
    console.error('WalletPlaygroundIframe: Invalid URL provided')
    return ''
  }
})

const iframeRef = ref<HTMLIFrameElement>()

/**
 * Check if the origin is allowed for communication
 */
function isOriginAllowed(origin: string): boolean {
  if (allowedOrigins.length === 0) {
    // If no specific origins are set, allow the iframe's origin
    try {
      const iframeUrl = new URL(playgroundUrl)
      return origin === iframeUrl.origin
    }
    catch {
      return false
    }
  }
  return allowedOrigins.includes(origin)
}

/**
 * Send a message to the iframe
 */
function sendMessage(message: PlaygroundMessage) {
  if (!iframeRef.value?.contentWindow) {
    console.warn('WalletPlaygroundIframe: No iframe contentWindow available')
    return
  }

  try {
    const targetOrigin = new URL(playgroundUrl).origin
    iframeRef.value.contentWindow.postMessage(message, targetOrigin)
  }
  catch (error) {
    console.error('WalletPlaygroundIframe: Failed to send message:', error)
    emit('error', new Error(`Failed to send message: ${error}`))
  }
}

/**
 * Handle incoming messages from the iframe
 */
function handleMessage(event: MessageEvent) {
  // Debug: Log all incoming messages
  // eslint-disable-next-line no-console
  console.log('🔄 WalletPlaygroundIframe: Received message from:', event.origin, 'Data:', event.data)

  // Verify origin
  if (!isOriginAllowed(event.origin)) {
    console.warn('Received message from unauthorized origin:', event.origin)
    return
  }

  try {
    const message = event.data as PlaygroundMessage

    // Validate message structure - handle both 'type' and 'kind' properties
    const messageType = message.type || message.kind
    if (!message || typeof message !== 'object' || typeof messageType !== 'string') {
      console.warn('WalletPlaygroundIframe: Invalid message structure received')
      return
    }

    /*
     * CLEANUP COMPLETED: STANDARDIZED MESSAGE FORMAT
     * ==============================================
     *
     * ALL MESSAGES NOW USE SPECIFIC ACTION FORMAT:
     * - 'playground:ready' → Iframe initialization
     * - 'wallet:demo:ready' → Demo mode activation
     * - 'wallet:action:open-buy-demo-nim-modal' → Opens buy modal
     * - 'wallet:action:open-staking-modal' → Opens staking modal
     * - 'wallet:action:open-swap-modal' → Opens swap modal
     * - 'wallet:action:close-modal' → Closes any open modal, returns to idle
     *
     * REMOVED LEGACY FORMAT:
     * - 'FlowChange' → Replaced with specific wallet:action:* messages
     *
     * MESSAGE MAPPING:
     * ================
     * FlowChange('stake') → 'wallet:action:open-staking-modal'
     * FlowChange('buy') → 'wallet:action:open-buy-demo-nim-modal'
     * FlowChange('swap') → 'wallet:action:open-swap-modal'
     * FlowChange('idle') → 'wallet:action:close-modal'
     */

    // Validate message type (whitelist approach)
    const allowedMessageTypes = [
      // Core system messages
      'playground:ready',

      // Standardized wallet action messages
      'wallet:demo:ready',
      'wallet:action:open-buy-demo-nim-modal',
      'wallet:action:open-staking-modal',
      'wallet:action:open-swap-modal',
      'wallet:action:close-modal',
    ]

    if (!allowedMessageTypes.includes(messageType)) {
      console.warn('WalletPlaygroundIframe: Unknown/unauthorized message type:', messageType)
      return
    }

    // Handle special ready message
    if (messageType === 'playground:ready') {
      emit('ready')
      onIframeReady()
      return
    }

    // Handle demo ready message (future action)
    if (messageType === 'wallet:demo:ready') {
      emit('ready')
      onIframeReady()
      // Message will also be passed to composable for demo mode activation
    }

    // Normalize message structure for composable (ensure it has type property)
    const normalizedMessage = {
      ...message,
      type: messageType,
    }

    // Pass message to composable for handling
    handlePlaygroundMessage(normalizedMessage)

    // Also emit to parent component
    emit('message', message)
  }
  catch (error) {
    console.error('WalletPlaygroundIframe: Failed to process message:', error)
    emit('error', new Error(`Failed to process message: ${error}`))
  }
}

/**
 * Handle iframe load event
 */
function handleIframeLoad() {
  // Send a ready check message to the iframe
  sendMessage({ type: 'parent:ready' })
}

/**
 * Handle iframe error
 */
function handleIframeError() {
  console.error('WalletPlaygroundIframe: Iframe failed to load')
  emit('error', new Error('Failed to load iframe'))
}

// Set up message listener
useEventListener(window, 'message', handleMessage)

// Set iframe reference in composable when component mounts
onMounted(() => {
  setIframeRef({
    sendMessage,
  })
})

// Expose methods for parent component
defineExpose({
  sendMessage,
})
</script>

<template>
  <div size-full inline-block relative aspect="16/9 desktop:9/16">
    <iframe
      v-if="validatedPlaygroundUrl" ref="iframeRef" :src="validatedPlaygroundUrl" :sandbox :width :height
      frameborder="0" allowtransparency="true"
      outline-none rounded-8 border-none size-full shadow-lg transition-opacity duration-300 ease @load="handleIframeLoad" @error="handleIframeError"
    />
  </div>
</template>

<!-- All styles converted to UnoCSS attributify mode -->
