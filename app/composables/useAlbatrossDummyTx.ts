const getNonce = () => Math.round(Math.random() * (2 ** 32 - 1))

export function useAlbatrossDummyTx() {
  const canSendTx = useState('albatross-can-send-tx', () => false)
  const nonce = useState('albatross-nonce', getNonce)
  const animationActive = useState('albatross-animation-active', () => false)

  const { matchedTxs, blockNumber } = useAlbatrossBlocks()

  const url = `${useRuntimeConfig().public.apiDomain}/api/albatross/liveview/send-dummy-tx`
  const { status, refresh: sendTxApi, error, clear } = useFetch(url, {
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

    if (!matched)
      console.warn('Transaction matching timed out after', MAX_WAIT_TIME, 'ms')

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
}
