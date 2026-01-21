<script lang="ts" setup>
defineProps<{ bgColor: string }>()
const site = await useSite()
const copyrightNotice = site.footer.copyright ?? ''
</script>

<template>
  <footer v-if="site" class="z-10 f-pt-2xl" dark data-section :class="bgColor">
    <div class="grid grid-gap-40 grid-md:gap-48 grid-items-start grid-xl:gap-104">
      <div class="flex flex-col f-text-sm" area-contact>
        <p>{{ site.footer.newsletterCta }}</p>
        <UiNewsletterEmailInput class="f-mt-xs" :placeholder="site.footer.newsletterPlaceholder" />
        <p class="f-mt-xs">
          {{ site.footer.socialMediaCta }}
        </p>
        <UiSocialMediaLogosList class="mx--8 op-60 f-text-xl" :items="site.socials" />
      </div>

      <div class="text-f-sm text-neutral-700 self-end" area-meta>
        <NuxtLink class="group flex w-max" to="/" aria-label="Go to Homepage">
          <Icon class="op-80 h-20! w-84! group-hocus:hidden" name="nimiq:logos-nimiq-horizontal-mono" />
          <Icon class="hidden h-20! w-84! group-hocus:block" name="nimiq:logos-nimiq-horizontal" />
        </NuxtLink>
        <p class="f-mt-xs">
          {{ site.footer.description }}
        </p>
        <div class="text-neutral-800 text-hocus:neutral-900 transition-colors f-mt-xs flex flex-gap-16 flex-items-center flex-wrap">
          <NuxtLink class="font-semibold transition-colors" to="/privacy-policy" un-text="neutral-800 hocus:neutral-900">
            Privacy Policy
          </NuxtLink>
          <div class="rounded-full bg-current op-40 size-4" aria-hidden />
          <NuxtLink class="font-semibold transition-colors" to="/cookie-policy" un-text="neutral-800 hocus:neutral-900">
            Cookie Policy
          </NuxtLink>
        </div>
        <p class="text-neutral-600 f-mt-md">
          {{ copyrightNotice }}
        </p>
      </div>

      <div v-for="(group, i) in site.navigation" :key="i" :style="`grid-area: ${['project', 'tech', 'apps', 'get-started', 'community', 'and-more'][i]}`">
        <p class="text-f-xs text-neutral-700/80 w-full nq-label">
          {{ group.label }}
        </p>
        <ul class="f-mt-md" :aria-label="`${group.label} links`" role="list">
          <li v-for="(link, j) in group.links" :key="j" class="f-mt-xs">
            <NuxtLink class="font-semibold transition-colors" :to="link.href" un-text="f-sm neutral-800 hocus:neutral-900">
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <hr class="bg-neutral-400 h-1 w-full relative sr-only" area-hr-1>
      <hr class="bg-neutral-400 h-1 w-full relative sr-only lg:hidden" area-hr-2>
      <hr class="bg-neutral-400 h-1 w-full relative sr-only md:hidden" area-hr-3>
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
