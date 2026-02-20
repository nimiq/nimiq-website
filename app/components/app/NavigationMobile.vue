<script setup lang="ts">
import { DrawerContent, DrawerOverlay, DrawerPortal, DrawerRoot, DrawerTrigger } from 'vaul-vue'

defineProps<{ darkHeader?: boolean }>()

const site = await useSite()
const copyrightNotice = site.footer.copyright ?? ''
</script>

<template>
  <DrawerRoot should-scale-background>
    <DrawerTrigger class="bg-transparent" aria-label="Links menu">
      <Icon class="scale-x--100 hocus:opacity-60" :class="darkHeader ? 'opacity-80 text-white' : 'opacity-50'" name="nimiq:hamburger-menu" />
    </DrawerTrigger>

    <DrawerPortal>
      <DrawerOverlay class="bg-neutral/40 inset-0 fixed z-[120]" />
      <DrawerContent class="flex flex-col p-6 rounded-t-2.5 bg-white top-40 bottom-0 left-0 right-0 fixed z-[130]">
        <div class="bg-gray-300 mx-auto mb-8 rounded-full shrink-0 h-1 w-20" />
        <div class="mb-4 flex gap-5">
          <NuxtLink class="nq-pill-secondary" to="https://wallet.nimiq.com">
            Nimiq Wallet
          </NuxtLink>
          <NuxtLink class="nq-arrow nq-pill-blue" to="/nimiq-pay">
            Nimiq Pay
          </NuxtLink>
        </div>
        <div class="overflow-x-hidden overflow-y-auto">
          <AccordionRoot class="mt-4 opacity-60" type="single" :collapsible="true">
            <template v-for="({ links, label }) in site?.navigation" :key="label">
              <DropdownMenuSeparator v-if="links.length" class="bg-neutral-300 h-px" />

              <AccordionItem v-if="links.length" class="py-2 overflow-hidden" :value="label as string">
                <AccordionHeader>
                  <AccordionTrigger class="flex flex-1 items-center gap-x-2 leading-none px-[5px] outline-none bg-white h-[45px] cursor-default">
                    <span class="text-12 uppercase">{{ label }}</span>
                    <Icon class="text-10 text-neutral transition-transform duration-300 reka-open:rotate-180" name="nimiq:chevron-down" />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent class="overflow-hidden reka-closed:animate-slide-up reka-open:animate-slide-down">
                  <NuxtLink v-for="({ text, href }, j) in links" :key="j" class="flex items-center gap-4 font-semibold px-4 pb-2.5 pt-3.5 rounded-1 bg-white w-full whitespace-nowrap" :to="href">
                    {{ text }}
                  </NuxtLink>
                </AccordionContent>
              </AccordionItem>
            </template>
          </AccordionRoot>

          <hr class="mb-8 bg-neutral-300 h-px w-full">

          <UiSocialMediaLogosList v-if="site?.socials" class="text-18" :items="site.socials" />

          <div class="text-neutral-800 hover:text-neutral-900 focus:text-neutral-900 transition-colors mt-4 md:mt-6 flex gap-4 items-center">
            <NuxtLink class="font-semibold opacity-60 hover:opacity-90 focus:opacity-90" to="/privacy-policy" external>
              Privacy Policy
            </NuxtLink>
            <div class="rounded-full bg-current opacity-40 size-1" aria-hidden />
            <NuxtLink class="font-semibold opacity-60 hover:opacity-90 focus:opacity-90" to="/cookie-policy" external>
              Cookie Policy
            </NuxtLink>
          </div>

          <p class="text-neutral-600 mt-4 md:mt-6">
            {{ copyrightNotice }}
          </p>
        </div>
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>
