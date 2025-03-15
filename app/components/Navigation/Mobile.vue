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
        class="i-nimiq:hamburger-menu scale-x--100"
        :class="{ 'text-white': false }"
      />
    </DrawerTrigger>

    <DrawerPortal>
      <DrawerOverlay class="fixed inset-0 bg-neutral/40" />
      <DrawerContent
        class="fixed bottom-0 left-0 right-0 z-100 mt-24 h-full max-h-90dvh flex flex-col rounded-t-10 bg-white p-24"
      >
        <div class="mx-auto mb-32 h-4 w-80 flex-shrink-0 rounded-full bg-gray-300" />
        <div class="mb-16 flex gap-20">
          <PrismicLink v-if="navigation?.getStartedLinks.at(0)?.href" internal-component="a" :field="navigation.getStartedLinks.at(0)!.href" nq-pill-secondary>
            {{ navigation.getStartedLinks[0]?.label }}
          </PrismicLink>
          <PrismicLink v-if="navigation?.getStartedLinks.at(1)?.href" internal-component="a" :field="navigation.getStartedLinks.at(1)!.href" nq-arrow nq-pill-blue>
            {{ navigation.getStartedLinks[1]?.label }}
          </PrismicLink>
        </div>
        <!-- class="nq-scrollbar-hide" -->
        <div of-x-hidden of-y-auto>
          <div class="my-16">
            <PrismicLink v-if="navigation?.getStartedLinks.at(2)?.href" internal-component="a" :field="navigation.getStartedLinks.at(2)!.href">
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
              <DropdownMenuSeparator v-if="links.length" h-1 bg-neutral-300 />

              <AccordionItem v-if="links.length" of-hidden py-8 :value="label as string">
                <AccordionHeader>
                  <AccordionTrigger h-45 flex flex-1 cursor-default items-center gap-x-8 bg-white px-5 leading-none outline-none>
                    <span text-12 uppercase>{{ label }}</span>
                    <div
                      class="i-nimiq:chevron-down text-10 text-neutral transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                    />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent class="content" of-hidden>
                  <PrismicLink v-for="({ label: linkLabel, href }, j) in links" :key="j" internal-component="a" :field="href" w-full flex="~ items-center gap-16" whitespace-nowrap rounded-4 bg-white px-16 pb-10 pt-14 font-semibold>
                    {{ linkLabel }}
                  </PrismicLink>
                </AccordionContent>
              </AccordionItem>
            </template>
          </AccordionRoot>

          <hr mb-32 h-1 w-full bg-neutral-300>

          <SocialMediaLogosList text-18 :items="[SocialMedia.x, SocialMedia.telegram, SocialMedia.reddit, SocialMedia.github, SocialMedia.youtube, SocialMedia.discord, SocialMedia.nimiqForum, SocialMedia.facebook, SocialMedia.instagram]" />

          <div text="neutral-800 hocus:neutral-900" transition-colors f-mt-md flex="~ gap-16 items-center">
            <NuxtLink to="/privacy-policy" class="font-semibold op-60 hocus:op-90">
              Privacy Policy
            </NuxtLink>
            <div aria-hidden size-4 rounded-full bg-current op-40 />
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
