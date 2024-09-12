<script lang="ts" setup>
import type { NavigationDocumentData } from '~~/prismicio-types'
import { SocialMedia } from '~/stores/global-content'

// @unocss-include

const props = defineProps<{ navigation: NavigationDocumentData }>()

const linkGroups = computed(() => [
  {
    name: props.navigation.projectGroupName,
    links: [...props.navigation.projectLinks, ...props.navigation.projectAdditionalFooterLinks],
  },
  {
    name: props.navigation.techGroupName,
    links: [...props.navigation.techLinks, ...props.navigation.techAdditionalFooterLinks],
  },
  {
    name: props.navigation.appsGroupName,
    links: [...props.navigation.appsLinks, ...props.navigation.appsAdditionalFooterLinks],
  },
  {
    name: props.navigation.getStartedGroupName,
    links: [...props.navigation.getStartedLinks, ...props.navigation.getStartedAdditionalFooterLinks],
  },
  {
    name: props.navigation.communityGroupName,
    links: [...props.navigation.communityLinks, ...props.navigation.communityAdditionalFooterLinks],
  },
  {
    name: props.navigation.andMoreGroupName,
    links: props.navigation.andMoreLinks.length ? props.navigation.andMoreLinks : [],
  },
])

const currentYear = new Date().getFullYear()
const copyrightYear = process.env.COPYRIGHT_YEAR
  ? Math.max(Number.parseInt(process.env.COPYRIGHT_YEAR), currentYear)
  : currentYear
</script>

<template>
  <div class="mx-auto max-w-1440 flex flex-col justify-between gap-x-56 px-32 pb-80 pt-200 text-14 md:flex-row md:px-64">
    <div class="order-2 flex flex-col justify-between md:order-0 lg:max-w-400 md:max-w-1/2">
      <div class="flex flex-col">
        <div class="flex flex-col gap-y-16">
          <p v-if="navigation.newsletterCta">
            {{ navigation.newsletterCta }}
          </p>
          <NewsletterSubscriptionForm :placeholder="navigation.newsletterPlaceholder" />
          <p v-if="navigation.socialMediaCta" mt-16>
            {{ navigation.socialMediaCta }}
          </p>
          <SocialMediaLogosList class="[&_div]:text-20 [&_a]:text-neutral-600" :items="[SocialMedia.x, SocialMedia.telegram, SocialMedia.reddit, SocialMedia.github, SocialMedia.youtube, SocialMedia.discord, SocialMedia.nimiqForum, SocialMedia.facebook, SocialMedia.instagram]" />
        </div>
      </div>
      <div>
        <div i-nimiq:logos-nimiq-horizontal-mono class="mb-12 h-25 w-100 text-neutral-700" />
        <p v-if="navigation.nimiqShortDescription" opacity-50>
          {{ navigation.nimiqShortDescription }}
        </p>
        <ul aria-label="Links to our legal pages" role="list" class="legal-pages mt-32">
          <li>
            <a
              href="https://www.iubenda.com/privacy-policy/78537710"
              class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://www.iubenda.com/privacy-policy/78537710/cookie-policy"
              class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed"
              title="Cookie Policy"
            >
              Cookie Policy
            </a>
          </li>
        </ul>

        <div mt-24 opacity-30>
          © Nimiq Foundation 2017-{{ copyrightYear }}
        </div>
      </div>
    </div>
    <div v-if="linkGroups" class="grid grid-rows-[repeat(3,_min_content)] grid-cols-2 grow gap-y-40 overflow-hidden font-600 lg:grid-cols-3 md:max-w-555">
      <div v-for="(linkGroup, index) in linkGroups" :key="`footer-nav-link-group-${index}`" border-b-1 border-neutral-400 pb-40 md:px-12 lg:pb-48>
        <p mb-32 mt-0 w-full text-12 opacity-75 nq-label>
          {{ linkGroup.name }}
        </p>
        <ul :aria-label="`${linkGroup.name} links`" role="list">
          <li v-for="({ href, label }) in linkGroup.links" :key="`project-link-${href}`" mb-12>
            <PrismicLink :field="href" class="font-semibold opacity-60 transition-opacity hocus:opacity-90">
              {{ label }}
            </PrismicLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid div {
  position: relative;
}

.legal-pages {
  @apply flex gap-16;

  li + li {
    @apply relative pl-20;

    &:before {
      @apply inline-block absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full w-4 h-4 bg-neutral/40 content-empty;
    }
  }

  a {
    @apply font-semibold transition-opacity opacity-60 hover:opacity-90 focus:opacity-90;
  }
}

@media (min-width: 0px) {
  .grid div:nth-child(2n + 1)::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100vw;
    height: 1px;
    background: white;
    opacity: 0.1;
  }
}
@media (min-width: 768px) {
  .grid div:nth-child(2n + 1):not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100vw;
    height: 1px;
    background: white;
    opacity: 0.1;
  }
}
@media (min-width: 1024px) {
  .grid div:nth-child(6n + 1):not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100vw;
    height: 1px;
    background: white;
    opacity: 0.1;
  }
}
</style>
