export const useLiveviewTx = defineStore('liveview-tx', () => {
  const canSendTx = ref(false)

  const getNonce = () => Math.round(Math.random() * (2 ** 32 - 1))
  const nonce = ref<number>(getNonce())
  const { matchedTxs, blockNumber } = storeToRefs(useLiveviewBlocks())

  const { status, refresh: sendTxApi, error, clear } = useFetch('/api/albatross/liveview/send-dummy-tx', {
    method: 'POST',
    body: { nonce, validityStartHeight: blockNumber },
    timeout: 5_000,
    immediate: false,
    watch: false,
    onRequest() {
      if (!canSendTx.value)
        throw new Error('Cannot send transaction, you need to change `canSendTx` to `true`')
    },
  })

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const MIN_ANIMATION_TIME = 400
  const animationActive = ref(false)
  const MAX_WAIT_TIME = 6_000

  async function sendTx() {
    if (status.value !== 'idle' || animationActive.value)
      return
    animationActive.value = true
    const start = Date.now()

    const hasBeenMatched = new Promise<boolean>((resolve) => {
      const unwatch = watch(matchedTxs, () => {
        if (matchedTxs.value.includes(nonce.value)) {
          unwatch()
          resolve(true)
        }
      })
    })

    const timeout = new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(false), MAX_WAIT_TIME)
    })

    await sendTxApi()
    await sleep(Math.max(0, MIN_ANIMATION_TIME - (Date.now() - start)))
    const matched = await Promise.race([hasBeenMatched, timeout])

    if (!matched) {
      console.warn('Transaction matching timed out after', MAX_WAIT_TIME, 'ms')
    }

    nonce.value = getNonce()
    clear()
    animationActive.value = false
  }

  return {
    canSendTx,
    sendTx,
    error,
    status,
    nonce,
    animationActive,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLiveviewTx, import.meta.hot))
}
