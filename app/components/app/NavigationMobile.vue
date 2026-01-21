<script setup lang="ts">
import { DrawerContent, DrawerOverlay, DrawerPortal, DrawerRoot, DrawerTrigger } from 'vaul-vue'

const site = await useSite()
const copyrightNotice = site.footer.copyright ?? ''
</script>

<template>
  <DrawerRoot should-scale-background>
    <DrawerTrigger class="bg-transparent" aria-label="Links menu">
      <Icon class="opacity-50 scale-x--100 hocus:opacity-60" name="nimiq:hamburger-menu" />
    </DrawerTrigger>

    <DrawerPortal>
      <DrawerOverlay class="bg-neutral/40 inset-0 fixed" />
      <DrawerContent class="flex flex-col mt-24 p-24 rounded-t-10 bg-white h-full max-h-90dvh bottom-0 left-0 right-0 fixed z-100">
        <div class="bg-gray-300 mx-auto mb-32 rounded-full shrink-0 h-4 w-80" />
        <div class="mb-16 flex flex-gap-20">
          <NuxtLink class="nq-pill-secondary" to="https://wallet.nimiq.com">
            Nimiq Wallet
          </NuxtLink>
          <NuxtLink class="nq-arrow nq-pill-blue" to="/nimiq-pay">
            Nimiq Pay
          </NuxtLink>
        </div>
        <div class="of-x-hidden of-y-auto">
          <AccordionRoot class="mt-16 op-60" type="single" :collapsible="true">
            <template v-for="({ links, label }) in site?.navigation" :key="label">
              <DropdownMenuSeparator v-if="links.length" class="bg-neutral-300 h-1" />

              <AccordionItem v-if="links.length" class="py-8 of-hidden" :value="label as string">
                <AccordionHeader>
                  <AccordionTrigger class="flex flex-1 flex-items-center flex-gap-x-8 leading-none px-5 outline-none bg-white h-45 cursor-default">
                    <span class="text-12 uppercase">{{ label }}</span>
                    <Icon class="text-10 text-neutral transition-transform duration-300 reka-open:rotate-180" name="nimiq:chevron-down" />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent class="of-hidden reka-closed:animate-slide-up reka-open:animate-slide-down">
                  <NuxtLink v-for="({ text, href }, j) in links" :key="j" class="flex flex-items-center flex-gap-16 font-semibold px-16 pb-10 pt-14 rounded-4 bg-white w-full whitespace-nowrap" :to="href">
                    {{ text }}
                  </NuxtLink>
                </AccordionContent>
              </AccordionItem>
            </template>
          </AccordionRoot>

          <hr class="mb-32 bg-neutral-300 h-1 w-full">

          <UiSocialMediaLogosList v-if="site?.socials" class="text-18" :items="site.socials" />

          <div class="text-neutral-800 text-hocus:neutral-900 transition-colors f-mt-md flex flex-gap-16 flex-items-center">
            <NuxtLink class="font-semibold op-60 op-hocus:90" to="/privacy-policy" external>
              Privacy Policy
            </NuxtLink>
            <div class="rounded-full bg-current op-40 size-4" aria-hidden />
            <NuxtLink class="font-semibold op-60 op-hocus:90" to="/cookie-policy" external>
              Cookie Policy
            </NuxtLink>
          </div>

          <p class="text-neutral-600 f-mt-md">
            {{ copyrightNotice }}
          </p>
        </div>
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>
