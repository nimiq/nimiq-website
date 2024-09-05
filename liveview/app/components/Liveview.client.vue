<script setup lang="ts">
const { blockNumber } = storeToRefs(useBlocks())
const { status: statsStatus } = storeToRefs(useStats())

const getNonce = () => Math.round(Math.random() * (2 ** 32 - 1))
const nonce = ref<number>(getNonce())
const { matchedTxs } = storeToRefs(useBlocks())

const { status: statusSendTx, refresh: sendTxApi, error, clear } = await useFetch('/api/send-tx', { method: 'POST', body: { nonce, validityStartHeight: blockNumber }, timeout: 5_000, immediate: false, watch: false })

const pillClass = computed(() => getPillColor({ nonce: nonce.value }))

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const MIN_ANIMATION_TIME = 400
const animationActive = ref(false)
const MAX_WAIT_TIME = 6_000

async function sendTx() {
  if (statusSendTx.value !== 'idle' || animationActive.value)
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
</script>

<template>
  <Blockchain>
    <template #pending-tx>
      <!-- :class="{ 'has-tx': latestTx, 'tx-sent': txSent, 'tx-failed': txFailed }"> -->
      <!-- transform: translateY(2.5rem);
        transition: transform 0.4s var(--nimiq-ease) 0.1s; -->
      <transition
        enter-from-class="op-0 translate-y-12" mode="out-in" enter-active-class="transition-opacity translate-y-0 duration-400 ease-in"
        leave-active-class="transition" leave-to-class="op-0 translate-y-12" leave-from-class="op-100 translate-y-0"
      >
        <div v-if="statusSendTx === 'error'" flex="~ items-center justify-center col shrink-0" relative w-72>
          <i i-nimiq:cross text="12 red" />
          <span text="11 center red" mt-12 font-semibold transition-opacity duration-400 ease-in>
            Error sending transaction. {{ error?.statusMessage || '' }}
          </span>
        </div>
        <div v-else-if="animationActive || statusSendTx === 'pending' && nonce" flex="~ items-center justify-center col shrink-0" relative w-72>
          <div grid="~ *:row-span-full *:col-span-full *:self-center *:justify-self-center">
            <i i-nimiq:spinner text="20 blue" />
            <TransactionDot :nonce />
          </div>
          <span text="13/17 center neutral-800" mt-12 font-semibold transition-opacity duration-400 ease-in>
            Transaction<br>pending
          </span>
        </div>
      </transition>
    </template>
  </Blockchain>
  <div v-if="statsStatus === 'OPEN'" flex="~ items-center justify-center gap-x-80 gap-y-32 col md:row" ring="1.5 solid neutral-500" mx="32 md:auto" my-64 max-w-712 rounded-8 px-32 py-20 font-semibold>
    <Stats flex-1 />
    <button :disabled="animationActive || statusSendTx !== 'idle'" select-none :class="pillClass" @click="sendTx">
      Send Test Transaction
    </button>
  </div>
</template>
