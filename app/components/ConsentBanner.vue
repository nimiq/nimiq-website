<script setup lang="ts">
const CONSENT_VERSION = '1.0'
const { consent, acceptConsent, rejectConsent } = useMatomo()
const open = computed(() => !consent.value || consent.value.version !== CONSENT_VERSION)
</script>

<template>
  <AlertDialogRoot v-model:open="open">
    <AlertDialogPortal>
      <AlertDialogContent fixed inset-x-0 bottom-0 z-101 f-p-lg shadow outline="~ 1.5 neutral/10" bg-neutral-0
        duration-300 ease-out transition-all max-w-none rounded-t-8 class="nq-prose-compact" mx-auto flex="~ col" style="box-shadow:
        0 -4px 6px 0 color-mix(in srgb, var(--colors-neutral-DEFAULT) 6%, transparent),
        0 -8px 12px 0 color-mix(in srgb, var(--colors-neutral-DEFAULT) 4%, transparent);">
        <AlertDialogTitle my-0 text="f-xl neutral-900" font-semibold leading-tight>
          Cookie Consent
        </AlertDialogTitle>

        <AlertDialogDescription mx-0 text="f-sm neutral-700" leading-relaxed f-mt-xs>
          We use cookies and similar technologies to enhance your experience. By continuing to browse,
          you agree to our use of cookies for analytics and tracking.
          <NuxtLink to="/privacy-policy" target="_blank" nq-arrow>
            Learn more
          </NuxtLink>
        </AlertDialogDescription>
        <div flex="~ gap-16" f-mt-sm mx-0 w-max translate-x--13>
          <AlertDialogCancel nq-pill-tertiary hocus:bg-neutral-300 transition-colors cursor-pointer op-85
            @click="rejectConsent">
            <div i-nimiq:cross scale-60 mr-8 op-80 />
            Reject
          </AlertDialogCancel>

          <AlertDialogAction nq-pill-blue cursor-pointer @click="acceptConsent">
            <div i-nimiq:check scale-90 mr-8 op-80 />
            Accept
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>
