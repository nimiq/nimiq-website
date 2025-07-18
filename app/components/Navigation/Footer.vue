<script lang="ts" setup>
const { bgColor } = defineProps<{ bgColor: 'white' | 'grey' | 'darkblue' }>()
const { data: navigation } = await useNavigation()

const bgClass = getColorClass(bgColor)
</script>

<template>
  <footer :class="bgClass" data-section z-10 f-pt-2xl>
    <div grid="~ gap-40 md:gap-48 items-start xl:gap-104">
      <div flex="~ col" f-text-sm area-contact>
        <p v-if="navigation?.newsletterCta">
          {{ navigation.newsletterCta }}
        </p>
        <NewsletterEmailInput f-mt-xs :placeholder="navigation?.newsletterPlaceholder" />
        <p v-if="navigation?.socialMediaCta" f-mt-xs>
          {{ navigation.socialMediaCta }}
        </p>
        <SocialMediaLogosList mx--8 op-60 f-text-xl :items="[SocialMedia.x, SocialMedia.telegram, SocialMedia.reddit, SocialMedia.github, SocialMedia.youtube, SocialMedia.discord, SocialMedia.nimiqForum, SocialMedia.facebook, SocialMedia.instagram]" />
      </div>

      <div text="f-sm neutral-700" self-end area-meta>
        <NuxtLink to="/" group flex w-max aria-label="Go to Homepage">
          <div h-20="!" w-84="!" op-80 i-nimiq:logos-nimiq-horizontal-mono group-hocus:i-nimiq:logos-nimiq-horizontal />
        </NuxtLink>
        <p v-if="navigation?.nimiqShortDescription" f-mt-xs>
          {{ navigation.nimiqShortDescription }}
        </p>
        <div text="neutral-800 hocus:neutral-900" transition-colors f-mt-xs flex="~ gap-16 items-center wrap">
          <NuxtLink to="/privacy-policy" font-semibold un-text="neutral-800 hocus:neutral-900" transition-colors>
            Privacy Policy
          </NuxtLink>
          <div aria-hidden rounded-full bg-current op-40 size-4 />
          <NuxtLink to="/cookie-policy" font-semibold un-text="neutral-800 hocus:neutral-900" transition-colors>
            Cookie Policy
          </NuxtLink>
        </div>

        <p text-neutral-600 f-mt-md>
          {{ navigation!.copyrightNotice }}
        </p>
      </div>

      <div v-for="({ areaName, label, links }) in navigation!.blocks" :key="areaName" :style="`grid-area ${areaName}`">
        <p text="f-xs neutral-700/80" w-full nq-label>
          {{ label }}
        </p>
        <ul f-mt-md :aria-label="`${label} links`" role="list">
          <li v-for="({ href, label: linkLabel }, j) in links" :key="j" f-mt-xs>
            <PrismicLink internal-component="a" :field="href" font-semibold un-text="f-sm neutral-800 hocus:neutral-900" transition-colors>
              {{ linkLabel }}
            </PrismicLink>
          </li>
        </ul>
      </div>

      <hr bg-neutral-400 h-1 w-full relative sr-only area-hr-1>
      <hr bg-neutral-400 h-1 w-full relative sr-only area-hr-2 lg:hidden>
      <hr bg-neutral-400 h-1 w-full relative sr-only area-hr-3 md:hidden>
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

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'contact project tech'
      'contact hr-1 hr-1'
      'contact apps get-started'
      'contact hr-2 hr-2'
      'meta community and-more';
  }

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-template-areas:
      'contact project tech apps'
      'contact hr-1 hr-1 hr-1'
      'meta get-started community and-more';
  }
}
</style>
