<script setup lang="ts">
import { DrawerContent, DrawerOverlay, DrawerPortal, DrawerRoot, DrawerTrigger } from 'vaul-vue'

const site = await useSite()
const copyrightNotice = site.footer.copyright ?? ''
</script>

<template>
  <DrawerRoot should-scale-background>
    <DrawerTrigger bg-transparent aria-label="Links menu">
      <Icon name="nimiq:hamburger-menu" class="opacity-50 scale-x--100 hocus:opacity-60" />
    </DrawerTrigger>

    <DrawerPortal>
      <DrawerOverlay bg="neutral/40" inset-0 fixed />
      <DrawerContent flex="~ col" mt-24 p-24 rounded-t-10 bg-white h-full max-h-90dvh bottom-0 left-0 right-0 fixed z-100>
        <div bg-gray-300 mx-auto mb-32 rounded-full shrink-0 h-4 w-80 />
        <div mb-16 flex="~ gap-20">
          <NuxtLink to="https://wallet.nimiq.com" nq-pill-secondary>
            Nimiq Wallet
          </NuxtLink>
          <NuxtLink to="/nimiq-pay" nq-arrow nq-pill-blue>
            Nimiq Pay
          </NuxtLink>
        </div>
        <div of-x-hidden of-y-auto>
          <AccordionRoot mt-16 op-60 type="single" :collapsible="true">
            <template v-for="({ links, label }) in site?.navigation" :key="label">
              <DropdownMenuSeparator v-if="links.length" bg-neutral-300 h-1 />

              <AccordionItem v-if="links.length" py-8 of-hidden :value="label as string">
                <AccordionHeader>
                  <AccordionTrigger flex="~ 1 items-center gap-x-8" leading-none px-5 outline-none bg-white h-45 cursor-default>
                    <span text-12 uppercase>{{ label }}</span>
                    <Icon name="nimiq:chevron-down" text="10 neutral" transition-transform duration-300 reka-open:rotate-180 />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent of-hidden reka-closed:animate-slide-up reka-open:animate-slide-down>
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
            <NuxtLink to="/privacy-policy" external font-semibold op="60 hocus:90">
              Privacy Policy
            </NuxtLink>
            <div aria-hidden rounded-full bg-current op-40 size-4 />
            <NuxtLink to="/cookie-policy" external font-semibold op="60 hocus:90">
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
