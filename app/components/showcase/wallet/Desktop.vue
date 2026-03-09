<script setup lang="ts">
import type { WalletPlaygroundMessage } from '~/composables/usePlaygroundIframe'

defineProps<{ playgroundUrl?: string }>()

function handlePlaygroundError(error: Error) {
  console.error('Playground iframe error:', error)
}

function handlePlaygroundMessage(_message: WalletPlaygroundMessage) {}
</script>

<template>
  <div class="relative max-md:hidden">
    <div class="mx-auto size-full" stack>
      <!-- Ribbon fold -->
      <div
        aria-hidden
        class="!self-start !justify-self-end -mr-[18px] mt-[48px] w-[44px] origin-bottom-right -rotate-45 z-1 border-[22px] border-x-transparent border-t-0 border-[#EC991C]"
      />

      <ShowcaseWalletBackground />

      <div class="pt-[48px] px-[10px] pb-[10px] size-full z-1">
        <div class="rounded-[4px] size-full">
          <ShowcaseWalletPlaygroundIframe
            :playground-url="playgroundUrl"
            height="600px"
            @message="handlePlaygroundMessage"
            @error="handlePlaygroundError"
          />
        </div>
      </div>

      <!-- Ribbon -->
      <div class="!self-start !justify-self-end -mr-[18px] mt-[11px] w-max relative z-10">
        <LazyUiFloatingStars class="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 z-1" />
        <div class="bg-[#E9B213] text-lg text-white font-semibold ml-auto px-[20px] py-[16px] w-max relative z-2" style="border-radius: 6px 6px 0 6px">
          Try live preview
        </div>
      </div>

      <ShowcaseWalletActionSelector class="translate-y-[calc(50%-10px)] self-end" />
    </div>

    <ShowcaseWalletCurrencies class="f-mt-lg" />
  </div>
</template>
