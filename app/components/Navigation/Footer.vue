<script lang="ts" setup>
import { SocialMedia } from '~/stores/global-content'

const { bgColor } = defineProps<{ bgColor: 'white' | 'grey' | 'darkblue' }>()
const { navigationBlocks, navigation, copyrightNotice } = storeToRefs(useGlobalContent())

const colors = getColorClass(() => bgColor)
</script>

<template>
  <footer :class="colors" data-section z-10 f-p-2xl>
    <div grid="~ gap-40 md:gap-48 items-start xl:gap-104">
      <div flex="~ col" text-sm area-contact>
        <p v-if="navigation?.newsletterCta">
          {{ navigation.newsletterCta }}
        </p>
        <NewsletterEmailInput f-m-xs :placeholder="navigation?.newsletterPlaceholder" />
        <p v-if="navigation?.socialMediaCta" f-m-xs>
          {{ navigation.socialMediaCta }}
        </p>
        <SocialMediaLogosList mx--8 text-xl op-60 :items="[SocialMedia.x, SocialMedia.telegram, SocialMedia.reddit, SocialMedia.github, SocialMedia.youtube, SocialMedia.discord, SocialMedia.nimiqForum, SocialMedia.facebook, SocialMedia.instagram]" />
      </div>

      <div text="sm neutral-700" self-end area-meta>
        <NuxtLink to="/" group w-max flex>
          <div text="20 md:22" i-nimiq:logos-nimiq-horizontal-mono op-80 group-hocus:i-nimiq:logos-nimiq-horizontal />
        </NuxtLink>
        <p v-if="navigation?.nimiqShortDescription" f-m-xs>
          {{ navigation.nimiqShortDescription }}
        </p>
        <div text="neutral-800 hocus:neutral-900" transition-colors f-m-md flex="~ gap-16 items-center wrap">
          <NuxtLink to="/privacy-policy" font-semibold un-text="neutral-800 hocus:neutral-900" transition-colors>
            Privacy Policy
          </NuxtLink>
          <div aria-hidden size-4 rounded-full bg-current op-40 />
          <NuxtLink to="/cookie-policy" font-semibold un-text="neutral-800 hocus:neutral-900" transition-colors>
            Cookie Policy
          </NuxtLink>
        </div>

        <p text-neutral-600 f-m-md>
          {{ copyrightNotice }}
        </p>
      </div>

      <div v-for="({ areaName, label, links }) in navigationBlocks" :key="areaName" :style="`grid-area ${areaName}`">
        <p w-full text="xs neutral-700/80" nq-label>
          {{ label }}
        </p>
        <ul f-m-md :aria-label="`${label} links`" role="list">
          <li v-for="({ href, label: linkLabel }, j) in links" :key="j" f-m-xs>
            <PrismicLink internal-component="a" :field="href" font-semibold un-text="sm neutral-800 hocus:neutral-900" transition-colors>
              {{ linkLabel }}
            </PrismicLink>
          </li>
        </ul>
      </div>

      <hr sr-only relative h-1 w-full bg-neutral-400 area-hr-1>
      <hr sr-only relative h-1 w-full bg-neutral-400 area-hr-2 lg:hidden>
      <hr sr-only relative h-1 w-full bg-neutral-400 area-hr-3 md:hidden>
    </div>
  </footer>
</template>

<style scoped>
footer > div {
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'project tech'
    'hr-1 hr-1'
    'apps get-started'
    'hr-2 hr-2'
    'community and-more'
    'hr-3 hr-3'
    'contact contact'
    'meta meta';

  @screen md {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'contact project tech'
      'contact hr-1 hr-1'
      'contact apps get-started'
      'contact hr-2 hr-2'
      'meta community and-more';
  }

  @screen lg {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-template-areas:
      'contact project tech apps'
      'contact hr-1 hr-1 hr-1'
      'meta get-started community and-more';
  }
}
</style>
