<script lang="ts" setup>
defineProps<{ bgColor: string }>()
const site = await useSite()
const copyrightNotice = site.footer.copyright ?? ''
</script>

<template>
  <footer v-if="site" dark data-section :class="bgColor" z-10 f-pt-2xl>
    <div grid="~ gap-40 md:gap-48 items-start xl:gap-104">
      <div flex="~ col" f-text-sm area-contact>
        <p>{{ site.footer.newsletterCta }}</p>
        <UiNewsletterEmailInput f-mt-xs :placeholder="site.footer.newsletterPlaceholder" />
        <p f-mt-xs>
          {{ site.footer.socialMediaCta }}
        </p>
        <UiSocialMediaLogosList mx--8 op-60 f-text-xl :items="site.socials" />
      </div>

      <div text="f-sm neutral-700" self-end area-meta>
        <NuxtLink to="/" group flex w-max aria-label="Go to Homepage">
          <Icon name="nimiq:logos-nimiq-horizontal-mono" class="op-80 h-20! w-84! group-hocus:hidden" />
          <Icon name="nimiq:logos-nimiq-horizontal" class="hidden h-20! w-84! group-hocus:block" />
        </NuxtLink>
        <p f-mt-xs>
          {{ site.footer.description }}
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
          {{ copyrightNotice }}
        </p>
      </div>

      <div v-for="(group, i) in site.navigation" :key="i" :style="`grid-area: ${['project', 'tech', 'apps', 'get-started', 'community', 'and-more'][i]}`">
        <p text="f-xs neutral-700/80" w-full nq-label>
          {{ group.label }}
        </p>
        <ul f-mt-md :aria-label="`${group.label} links`" role="list">
          <li v-for="(link, j) in group.links" :key="j" f-mt-xs>
            <NuxtLink :to="link.href" font-semibold un-text="f-sm neutral-800 hocus:neutral-900" transition-colors>
              {{ link.text }}
            </NuxtLink>
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
