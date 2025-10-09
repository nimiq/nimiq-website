<script setup lang="ts">
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
        outline="~ 1.5 neutral/10"
        class="nq-prose-compact"
        mx-auto rounded-8 bg-neutral-0 max-w-none shadow transition-all duration-300 ease-out @open-auto-focus.prevent inset-x-12 bottom-12 fixed z-101 f-p-lg flex="~ col" style="box-shadow:
        0 4px 6px 0 color-mix(in srgb, var(--colors-neutral-DEFAULT) 6%, transparent),
        0 -4px 6px 0 color-mix(in srgb, var(--colors-neutral-DEFAULT) 6%, transparent),
        0 -8px 12px 0 color-mix(in srgb, var(--colors-neutral-DEFAULT) 4%, transparent),
        0 8px 12px 0 color-mix(in srgb, var(--colors-neutral-DEFAULT) 4%, transparent);"
      >
        <AlertDialogTitle text="f-xl neutral-900" leading-tight font-semibold my-0 ml-0>
          Cookie Consent
        </AlertDialogTitle>

        <AlertDialogDescription text="f-sm neutral-700" leading-relaxed mx-0 f-mt-xs>
          We use cookies and similar technologies to enhance your experience. By continuing to browse,
          you agree to our use of cookies for analytics and tracking.
          <NuxtLink to="/privacy-policy" target="_blank" nq-arrow>
            Learn more
          </NuxtLink>
        </AlertDialogDescription>
        <div flex="~ gap-16" mx-0 w-max translate-x--13 f-mt-sm>
          <AlertDialogCancel
            op-85 cursor-pointer transition-colors nq-pill-tertiary hocus:bg-neutral-300
            @click="rejectConsent"
          >
            <div mr-8 op-80 scale-60 i-nimiq:cross />
            Reject
          </AlertDialogCancel>

          <AlertDialogAction cursor-pointer nq-pill-blue @click="acceptConsent">
            <div mr-8 op-80 scale-90 i-nimiq:check />
            Accept
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>
