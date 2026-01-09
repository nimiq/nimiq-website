<script setup lang="ts">
import type { WalletPlaygroundMessage } from '~/composables/usePlaygroundIframe'
import { usePlaygroundIframe } from '~/composables/usePlaygroundIframe'

const {
  playgroundUrl: propPlaygroundUrl = 'https://wallet.nimiq.com',
  allowedOrigins = [],
  height = '600px',
  width = '100%',
  sandbox = 'allow-scripts allow-same-origin',
} = defineProps<{ playgroundUrl?: string, allowedOrigins?: string[], height?: string, width?: string, sandbox?: string }>()

const emit = defineEmits<{ message: [message: WalletPlaygroundMessage], ready: [], error: [error: Error] }>()

const { playgroundState, setIframeRef, handlePlaygroundMessage, allowedMessageTypes, setPlaygroundUrl, ActionToMessageType, activateDemoMode, connectWallet } = usePlaygroundIframe()

const iframeRef = ref<HTMLIFrameElement>()

const validatedPlaygroundUrl = computed(() => {
  try {
    const url = new URL(playgroundState.value.playgroundUrl)
    if (url.protocol !== 'https:')
      throw new Error(`PlaygroundIframe: Only HTTPS URLs are allowed: ${url.href}`)
    return playgroundState.value.playgroundUrl
  }
  catch {
    console.error('PlaygroundIframe: Invalid URL provided')
    return ''
  }
})

function isOriginAllowed(origin: string): boolean {
  if (allowedOrigins.length === 0) {
    try {
      const iframeUrl = new URL(playgroundState.value.playgroundUrl)
      return origin === iframeUrl.origin
    }
    catch {
      return false
    }
  }
  return allowedOrigins.includes(origin)
}

function sendMessage(message: WalletPlaygroundMessage) {
  if (!iframeRef.value?.contentWindow) {
    console.warn('PlaygroundIframe: No iframe contentWindow available')
    return
  }
  try {
    const targetOrigin = new URL(playgroundState.value.playgroundUrl).origin
    iframeRef.value.contentWindow.postMessage(message, targetOrigin)
  }
  catch (error) {
    console.error('PlaygroundIframe: Failed to send message:', error)
    emit('error', new Error(`Failed to send message: ${error}`))
  }
}

function handleMessage(event: MessageEvent) {
  if (!isOriginAllowed(event.origin)) {
    console.warn('Received message from unauthorized origin:', event.origin)
    return
  }
  try {
    const message = event.data as WalletPlaygroundMessage
    if (!message || typeof message !== 'object' || typeof message.type !== 'string') {
      console.warn('PlaygroundIframe: Invalid message structure received')
      return
    }
    if (!allowedMessageTypes.includes(message.type)) {
      console.warn('PlaygroundIframe: Unknown/unauthorized message type:', message.type)
      return
    }
    if (message.type === 'demo:ready') {
      activateDemoMode()
      if (message.data?.address)
        connectWallet(message.data.address)
      emit('ready')
    }
    handlePlaygroundMessage(message.type)
    emit('message', message)
  }
  catch (error) {
    console.error('PlaygroundIframe: Failed to process message:', error)
    emit('error', new Error(`Failed to process message: ${error}`))
  }
}

function handleIframeLoad() {
  sendMessage({ type: 'demo:ready', data: { action: playgroundState.value.selectedAction, isDemoMode: playgroundState.value.isDemoMode } })
}

function handleIframeError() {
  console.error('PlaygroundIframe: Iframe failed to load')
  emit('error', new Error('Failed to load iframe'))
}

watch(() => propPlaygroundUrl, newUrl => setPlaygroundUrl(newUrl), { immediate: true })

watch(() => playgroundState.value.selectedAction, (newAction) => {
  sendMessage({ type: ActionToMessageType[newAction], data: { action: newAction, isDemoMode: playgroundState.value.isDemoMode } })
})

useEventListener(window, 'message', handleMessage)

onMounted(() => setIframeRef({ sendMessage }))

defineExpose({ sendMessage })
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
