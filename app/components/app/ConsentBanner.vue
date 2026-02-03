<script setup lang="ts">
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogPortal, AlertDialogRoot, AlertDialogTitle } from 'reka-ui'

const CONSENT_VERSION = '1.0'
const { consent, acceptConsent, rejectConsent } = useMatomo()
const open = computed(() => {
  const version = consent.value?.version
  return !version || version !== CONSENT_VERSION
})
</script>

<template>
  <AlertDialogRoot :open="open" :modal="false">
    <AlertDialogPortal>
      <AlertDialogContent
        class="nq-prose-compact outline outline-1.5 outline-neutral/10 mx-auto rounded-2 bg-neutral-0 max-w-none transition-all duration-300 ease-out inset-x-3 bottom-3 fixed z-101 p-6 md:p-8 flex flex-col" shadow style="box-shadow:
        0 4px 6px 0 color-mix(in srgb, var(--color-neutral-DEFAULT) 6%, transparent),
        0 -4px 6px 0 color-mix(in srgb, var(--color-neutral-DEFAULT) 6%, transparent),
        0 -8px 12px 0 color-mix(in srgb, var(--color-neutral-DEFAULT) 4%, transparent),
        0 8px 12px 0 color-mix(in srgb, var(--color-neutral-DEFAULT) 4%, transparent);" @open-auto-focus.prevent
      >
        <AlertDialogTitle class="text-lg md:text-xl text-neutral-900 leading-tight font-semibold my-0 ml-0">
          Cookie Consent
        </AlertDialogTitle>

        <AlertDialogDescription class="text-xs md:text-sm text-neutral-700 leading-relaxed mx-0 mt-2 md:mt-3">
          We use cookies and similar technologies to enhance your experience. By continuing to browse,
          you agree to our use of cookies for analytics and tracking.
          <NuxtLink class="nq-arrow" to="/privacy-policy" external target="_blank">
            Learn more
          </NuxtLink>
        </AlertDialogDescription>
        <div class="flex gap-4 mx-0 w-max -translate-x-[13px] mt-3 md:mt-4">
          <AlertDialogCancel class="opacity-85 cursor-pointer transition-colors nq-pill-tertiary" hover:bg-neutral-300 focus:bg-neutral-300 @click="rejectConsent">
            <Icon class="mr-2 opacity-80 scale-60" name="nimiq:cross" />
            Reject
          </AlertDialogCancel>

          <AlertDialogAction class="cursor-pointer nq-pill-blue" @click="acceptConsent">
            <Icon class="mr-2 opacity-80 scale-90" name="nimiq:check" />
            Accept
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>
