<script setup lang="ts">
import type { NavigationDocumentData } from '~~/prismicio-types'
import { SocialMedia } from '~/stores/global-content'

const props = defineProps<{ navigation: NavigationDocumentData, isTriggerColorInverted: boolean }>()

const menuVisible = ref(false)
const currentYear = new Date().getFullYear()
const copyrightYear = process.env.COPYRIGHT_YEAR
  ? Math.max(Number.parseInt(process.env.COPYRIGHT_YEAR), currentYear)
  : currentYear

const linkGroups = [
  {
    name: props.navigation.getStartedGroupName,
    links: props.navigation.getStartedAdditionalFooterLinks,
  },
  {
    name: props.navigation.newToCryptoTitle,
    links: props.navigation.newToCryptoLinks,
  },
  {
    name: props.navigation.appsGroupName,
    links: props.navigation.appsLinks,
  },
  {
    name: props.navigation.techGroupName,
    links: props.navigation.techLinks,
  },
  {
    name: props.navigation.projectGroupName,
    links: props.navigation.projectLinks,
  },
  {
    name: props.navigation.communityGroupName,
    links: props.navigation.communityLinks,
  },

]
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
          :class="{ 'text-white': isTriggerColorInverted }"
        />
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent
          class="mr-12 max-w-390 w-[calc(100vw-32px)] flex flex-col rounded-6 bg-white p-24 shadow outline-none"
          :side-offset="12"
        >
          <DropdownMenuItem class="flex gap-20">
            <PrismicLink v-if="navigation.getStartedLinks.at(0)?.href" :field="navigation.getStartedLinks.at(0)!.href" nq-pill-secondary>
              {{ navigation.getStartedLinks[0]?.label }}
            </PrismicLink>
            <PrismicLink v-if="navigation.getStartedLinks.at(1)?.href" :field="navigation.getStartedLinks.at(1)!.href" nq-arrow nq-pill-blue>
              {{ navigation.getStartedLinks[2]?.label }}
            </PrismicLink>
          </DropdownMenuItem>
          <DropdownMenuItem class="my-32">
            <PrismicLink v-if="navigation.getStartedLinks.at(2)?.href" :field="navigation.getStartedLinks.at(2)!.href" nq-arrow nq-pill-tertiary>
              {{ navigation.getStartedLinks[2]?.description }}
            </PrismicLink>
          </DropdownMenuItem>

          <DropdownMenuSub>
            <AccordionRoot
              class="opacity-60"
              type="single"
              :collapsible="true"
            >
              <template
                v-for="({ links, name }) in linkGroups"
                :key="name"
              >
                <DropdownMenuSeparator v-if="links.length" h-1 bg-neutral-300 />

                <AccordionItem
                  v-if="links.length"
                  overflow-hidden py-8
                  :value="name!"
                >
                  <AccordionHeader>
                    <AccordionTrigger h-45 flex flex-1 cursor-default items-center gap-x-8 bg-white px-5 leading-none outline-none>
                      <span text-12 uppercase>{{ name }}</span>
                      <div
                        class="i-nimiq:chevron-down text-10 text-neutral transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                      />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent class="content overflow-hidden">
                    <PrismicLink v-for="{ label, href }, index in links" :key="`${name}-link-${index}`" :field="href" w-full flex items-center gap-16 whitespace-nowrap rounded-4 bg-white px-16 pb-10 pt-14 font-semibold nq-arrow>
                      {{ label }}
                    </PrismicLink>
                  </AccordionContent>
                </AccordionItem>
              </template>
            </AccordionRoot>
          </DropdownMenuSub>

          <DropdownMenuSeparator mb-32 h-1 bg-neutral-300 />

          <SocialMediaLogosList :items="[SocialMedia.x, SocialMedia.telegram, SocialMedia.reddit, SocialMedia.github, SocialMedia.youtube, SocialMedia.discord, SocialMedia.nimiqForum, SocialMedia.facebook, SocialMedia.instagram]" />

          <!-- Legal pages -->
          <ul
            v-if="navigation.legalPages.length > 0"
            aria-label="Links to our legal pages"
            role="list"
            class="legal-pages"
          >
            <li v-for="(legalPage, index) in navigation.legalPages" :key="`footer-legal-page-link-${index}`">
              <prismic-link :field="legalPage.href">
                {{ legalPage.label }}
              </prismic-link>
            </li>
          </ul>

          <!-- Copyright notice -->
          <p mt-16 font-normal opacity-30>
            © Nimiq Foundation 2017-{{ copyrightYear }}
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

.legal-pages {
  @apply flex gap-16 mt-32 flex-wrap;

  li + li {
    @apply relative pl-20;

    &:before {
      @apply empty-content inline-block absolute left-0 top-1/2 -translate-y-1/2 transform rounded w-4 h-4 bg-blue-dark/40;
    }
  }

  a {
    @apply font-semibold transition-opacity opacity-60 hover:opacity-90 focus:opacity-90;
  }
}
</style>
