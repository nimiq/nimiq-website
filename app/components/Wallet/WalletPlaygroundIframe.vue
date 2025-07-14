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
     * DEPRECATION INSTRUCTIONS FOR OLD ACTIONS
     * =========================================
     *
     * TIMELINE FOR DEPRECATION:
     * 1. Phase 1 (Current): Both old and new actions work simultaneously
     * 2. Phase 2 (Future): Add deprecation warnings for old actions
     * 3. Phase 3 (Final): Remove old actions completely
     *
     * MIGRATION STEPS:
     * ================
     *
     * TO DEPRECATE OLD ACTIONS:
     * 1. Add console.warn() for each old action message received
     * 2. Update playground iframe code to use new actions only
     * 3. Test thoroughly with new actions
     * 4. Remove old actions from allowedMessageTypes array
     * 5. Remove old action handling from usePlaygroundIframe composable
     *
     * OLD ACTIONS TO REMOVE:
     * - 'wallet:connect' → No direct replacement (handled by demo mode)
     * - 'wallet:transaction' → No direct replacement (handled by demo mode)
     * - 'wallet:sign' → No direct replacement (handled by demo mode)
     * - 'wallet:action:request' → No direct replacement (handled by demo mode)
     * - 'FlowChange' → Replace with 'wallet:action:close-modal' when flow goes to 'idle'
     *
     * REPLACEMENT MAPPING:
     * ===================
     * FlowChange('stake') → 'wallet:action:open-staking-modal'
     * FlowChange('buy') → 'wallet:action:open-buy-demo-nim-modal'
     * FlowChange('swap') → 'wallet:action:open-swap-modal'
     * FlowChange('idle') → 'wallet:action:close-modal'
     *
     * TESTING CHECKLIST:
     * ==================
     * □ New actions trigger correct modal states
     * □ Modal closing resets to idle state
     * □ Demo mode activation works correctly
     * □ State synchronization between iframe and parent
     * □ No console errors with new actions only
     *
     * REMOVAL PROCESS:
     * ================
     * 1. Remove old action types from allowedMessageTypes
     * 2. Remove old action handling from switch statement in usePlaygroundIframe
     * 3. Remove any old action utility functions
     * 4. Update documentation and examples
     * 5. Test thoroughly in all playground scenarios
     */

    // Validate message type (whitelist approach)
    const allowedMessageTypes = [
      // Core system messages
      'playground:ready',

      // Current/legacy wallet actions (will be phased out)
      'wallet:connect',
      'wallet:transaction',
      'wallet:sign',
      'wallet:action:request',
      'FlowChange',

      // Future wallet actions (new standardized approach)
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
