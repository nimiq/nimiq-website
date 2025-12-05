<script setup lang="ts">
import { DrawerContent, DrawerOverlay, DrawerPortal, DrawerRoot, DrawerTrigger } from 'vaul-vue'

const { data: site } = await useAsyncData('site', () => queryCollection('site').first())
const copyrightNotice = computed(() => site.value?.footer.copyright ?? '')
</script>

<template>
  <DrawerRoot should-scale-background>
    <DrawerTrigger
      bg-transparent
      aria-label="Links menu"
    >
      <div
        opacity-50 hocus:opacity-60
        class="scale-x--100 i-nimiq:hamburger-menu"
        :class="{ 'text-white': false }"
      />
    </DrawerTrigger>

    <DrawerPortal>
      <DrawerOverlay class="bg-neutral/40 inset-0 fixed" />
      <DrawerContent
        class="mt-24 p-24 rounded-t-10 bg-white flex flex-col h-full max-h-90dvh bottom-0 left-0 right-0 fixed z-100"
      >
        <div class="mx-auto mb-32 rounded-full bg-gray-300 flex-shrink-0 h-4 w-80" />
        <div class="mb-16 flex gap-20">
          <NuxtLink to="https://wallet.nimiq.com" nq-pill-secondary>
            Nimiq Wallet
          </NuxtLink>
          <NuxtLink to="/nimiq-pay" nq-arrow nq-pill-blue>
            Nimiq Pay
          </NuxtLink>
        </div>
        <div of-x-hidden of-y-auto>
          <AccordionRoot
            class="mt-16 opacity-60"
            type="single"
            :collapsible="true"
          >
            <template v-for="({ links, label }) in site?.navigation" :key="label">
              <DropdownMenuSeparator v-if="links.length" bg-neutral-300 h-1 />

              <AccordionItem v-if="links.length" py-8 of-hidden :value="label as string">
                <AccordionHeader>
                  <AccordionTrigger outline-none leading-none px-5 bg-white flex flex-1 gap-x-8 h-45 cursor-default items-center>
                    <span text-12 uppercase>{{ label }}</span>
                    <div
                      class="text-10 text-neutral transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] i-nimiq:chevron-down group-data-[state=open]:rotate-180"
                    />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent class="content" of-hidden>
                  <NuxtLink v-for="({ text, href }, j) in links" :key="j" :to="href" flex="~ items-center gap-16" font-semibold px-16 pb-10 pt-14 rounded-4 bg-white w-full whitespace-nowrap>
                    {{ text }}
                  </NuxtLink>
                </AccordionContent>
              </AccordionItem>
            </template>
          </AccordionRoot>

          <hr mb-32 bg-neutral-300 h-1 w-full>

          <UiSocialMediaLogosList v-if="site?.socials" text-18 :items="site.socials" />

          <div text="neutral-800 hocus:neutral-900" transition-colors f-mt-md flex="~ gap-16 items-center">
            <NuxtLink to="/privacy-policy" class="font-semibold op-60 hocus:op-90">
              Privacy Policy
            </NuxtLink>
            <div aria-hidden rounded-full bg-current op-40 size-4 />
            <NuxtLink to="/cookie-policy" class="font-semibold op-60 hocus:op-90">
              Cookie Policy
            </NuxtLink>
          </div>

          <p text-neutral-600 f-mt-md>
            {{ copyrightNotice }}
          </p>
        </div>
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>

<style scoped>
.content {
  &:is([data-state='open']) {
    animation: slideDown 300ms var(--nq-ease, ease);
  }

  &:is([data-state='closed']) {
    animation: slideUp 300ms var(--nq-ease, ease);
  }
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: 'var(--reka-accordion-content-height)';
  }
}

@keyframes slideUp {
  from {
    height: 'var(--reka-accordion-content-height)';
  }
  to {
    height: 0;
  }
}
</style>
