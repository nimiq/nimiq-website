<script setup lang="ts">
import { SocialMedia } from '~/stores/global-content'

const menuVisible = ref(false)

const { navigationBlocks, navigation } = storeToRefs(useGlobalContent())
const { copyrightNotice } = useGlobalContent()
</script>

<template>
  <div>
    <DropdownMenuRoot v-model:open="menuVisible">
      <DropdownMenuTrigger
        bg-transparent
        aria-label="Links menu"
      >
        <div
          cursor-pointer opacity-50 hocus:opacity-60
          class="i-nimiq:hamburger-menu scale-x--100"
          :class="{ 'text-white': false }"
        />
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent
          class="mr-12 max-w-390 w-[calc(100vw-32px)] flex flex-col rounded-6 bg-white p-24 shadow outline-none"
          :side-offset="12"
        >
          <DropdownMenuItem class="flex gap-20">
            <PrismicLink v-if="navigation?.getStartedLinks.at(0)?.href" internal-component="a" :field="navigation.getStartedLinks.at(0)!.href" nq-pill-secondary>
              {{ navigation.getStartedLinks[0]?.label }}
            </PrismicLink>
            <PrismicLink v-if="navigation?.getStartedLinks.at(1)?.href" internal-component="a" :field="navigation.getStartedLinks.at(1)!.href" nq-arrow nq-pill-blue>
              {{ navigation.getStartedLinks[1]?.label }}
            </PrismicLink>
          </DropdownMenuItem>
          <DropdownMenuItem class="my-32">
            <PrismicLink v-if="navigation?.getStartedLinks.at(2)?.href" internal-component="a" :field="navigation.getStartedLinks.at(2)!.href">
              <p text="sm neutral-700" font-bold nq-arrow>
                {{ navigation.getStartedLinks[2]?.label }}
              </p>
              <p text-14 nq-mt-16>
                {{ navigation.getStartedLinks[2]?.description }}
              </p>
            </PrismicLink>
          </DropdownMenuItem>

          <DropdownMenuSub>
            <AccordionRoot
              class="opacity-60"
              type="single"
              :collapsible="true"
            >
              <template v-for="({ links, label }) in navigationBlocks" :key="label">
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
          </DropdownMenuSub>

          <DropdownMenuSeparator mb-32 h-1 bg-neutral-300 />

          <SocialMediaLogosList text-18 :items="[SocialMedia.x, SocialMedia.telegram, SocialMedia.reddit, SocialMedia.github, SocialMedia.youtube, SocialMedia.discord, SocialMedia.nimiqForum, SocialMedia.facebook, SocialMedia.instagram]" />

          <div text="neutral-800 hocus:neutral-900" transition-colors nq-mt-32 flex="~ gap-16 items-center">
            <NuxtLink to="/privacy-policy" class="font-semibold op-60 hocus:op-90">
              Privacy Policy
            </NuxtLink>
            <div aria-hidden size-4 rounded-full bg-current op-40 />
            <NuxtLink to="/cookie-policy" class="font-semibold op-60 hocus:op-90">
              Cookie Policy
            </NuxtLink>
          </div>

          <p text-neutral-600 nq-mt-32>
            {{ copyrightNotice }}
          </p>

          <DropdownMenuArrow class="mr-4 fill-white" />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  </div>
</template>

<style scoped>
[data-radix-popper-content-wrapper] {
  z-index: 20 !important;
}

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
    height: 'var(--radix-accordion-content-height)';
  }
}

@keyframes slideUp {
  from {
    height: 'var(--radix-accordion-content-height)';
  }
  to {
    height: 0;
  }
}
</style>
