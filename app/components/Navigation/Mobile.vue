<script setup lang="ts">
import { DrawerContent, DrawerOverlay, DrawerPortal, DrawerRoot, DrawerTrigger } from 'vaul-vue'

const { data: navigation } = await useNavigation()
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
          <PrismicLink v-if="navigation?.getStartedLinks.at(0)?.href" :field="navigation.getStartedLinks.at(0)!.href" nq-pill-secondary>
            {{ navigation.getStartedLinks[0]?.label }}
          </PrismicLink>
          <PrismicLink v-if="navigation?.getStartedLinks.at(1)?.href" :field="navigation.getStartedLinks.at(1)!.href" nq-arrow nq-pill-blue>
            {{ navigation.getStartedLinks[1]?.label }}
          </PrismicLink>
        </div>
        <!-- class="nq-scrollbar-hide" -->
        <div of-x-hidden of-y-auto>
          <div class="my-16">
            <PrismicLink v-if="navigation?.getStartedLinks.at(2)?.href" :field="navigation.getStartedLinks.at(2)!.href">
              <p text="f-sm neutral-700" font-bold nq-arrow>
                {{ navigation.getStartedLinks[2]?.label }}
              </p>
              <p text-14 f-mt-xs>
                {{ navigation.getStartedLinks[2]?.description }}
              </p>
            </PrismicLink>
          </div>

          <AccordionRoot
            class="mt-16 opacity-60"
            type="single"
            :collapsible="true"
          >
            <template v-for="({ links, label }) in navigation!.blocks" :key="label">
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
                  <PrismicLink v-for="({ label: linkLabel, href }, j) in links" :key="j" :field="href" flex="~ items-center gap-16" font-semibold px-16 pb-10 pt-14 rounded-4 bg-white w-full whitespace-nowrap>
                    {{ linkLabel }}
                  </PrismicLink>
                </AccordionContent>
              </AccordionItem>
            </template>
          </AccordionRoot>

          <hr mb-32 bg-neutral-300 h-1 w-full>

          <SocialMediaLogosList text-18 :items="[SocialMedia.x, SocialMedia.telegram, SocialMedia.reddit, SocialMedia.github, SocialMedia.youtube, SocialMedia.discord, SocialMedia.nimiqForum, SocialMedia.facebook, SocialMedia.instagram]" />

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
            {{ navigation!.copyrightNotice }}
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
