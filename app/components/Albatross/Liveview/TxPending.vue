<script setup lang="ts">
import { useLiveviewTx } from '~/stores/albatross/liveview/dummy-tx'

const { status, error, animationActive, nonce } = storeToRefs(useLiveviewTx())
</script>

<template>
  <transition
    enter-from-class="op-0 translate-y-12" mode="out-in" enter-active-class="transition-opacity translate-y-0 duration-400 ease-in"
    leave-active-class="transition" leave-to-class="op-0 translate-y-12" leave-from-class="op-100 translate-y-0"
  >
    <div v-if="status === 'error'" flex="~ items-center justify-center col shrink-0" relative w-72>
      <i i-nimiq:cross text="12 red" />
      <span text="11 center red" mt-12 font-semibold transition-opacity duration-400 ease-in>
        Error sending transaction. {{ error?.statusMessage || '' }}
      </span>
    </div>
    <div v-else-if="animationActive || status === 'pending' && nonce" flex="~ items-center justify-center col shrink-0" relative w-72>
      <div grid="~ *:row-span-full *:col-span-full *:self-center *:justify-self-center">
        <i i-nimiq:spinner text="20 blue" />
        <AlbatrossLiveviewTransactionDot :nonce />
      </div>
      <span text="13/17 center neutral-800" mt-12 font-semibold transition-opacity duration-400 ease-in>
        Transaction<br>pending
      </span>
    </div>
  </transition>
</template>
