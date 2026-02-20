<script lang="ts" setup>
const { bgColor = 'grey' } = defineProps<{ bgColor?: keyof typeof bgClasses }>()
const bgClasses = { grey: 'bg-neutral-100', white: 'bg-neutral-0', darkblue: 'bg-darkerblue' }
const site = await useSite()
const copyrightNotice = site.footer.copyright ?? ''
</script>

<template>
  <footer v-if="site" class="z-10" dark data-section :class="bgClasses[bgColor]">
    <div class="grid gap-40 md:gap-48 grid-items-start xl:gap-[104px] items-start">
      <div class="flex flex-col text-f-sm leading-[1.5]" area-contact>
        <p>{{ site.footer.newsletterCta }}</p>
        <UiNewsletterEmailInput class="f-mt-xs" :placeholder="site.footer.newsletterPlaceholder" />
        <p class="f-mt-xs">
          {{ site.footer.socialMediaCta }}
        </p>
        <UiSocialMediaLogosList class="flex-nowrap opacity-60 text-f-xl" :items="site.socials" />
      </div>

      <div class="text-f-sm leading-[1.5] text-neutral-700 self-end" area-meta>
        <NuxtLink class="group flex w-max" to="/" aria-label="Go to Homepage">
          <Icon class="opacity-80 h-5! w-[84px]! group-hover:hidden group-focus:hidden" name="nimiq:logos-nimiq-horizontal-mono" />
          <Icon class="hidden h-5! w-[84px]! group-hover:block group-focus:block" name="nimiq:logos-nimiq-horizontal" />
        </NuxtLink>
        <p class="f-mt-xs">
          {{ site.footer.description }}
        </p>
        <div class="text-neutral-800 hover:text-neutral-900 focus:text-neutral-900 transition-colors mt-0 flex gap-4 items-center flex-wrap">
          <NuxtLink class="font-semibold transition-colors text-neutral-800 hover:text-neutral-900 focus:text-neutral-900" to="/privacy-policy">
            Privacy Policy
          </NuxtLink>
          <div class="rounded-full bg-current opacity-40 size-1" aria-hidden />
          <NuxtLink class="font-semibold transition-colors text-neutral-800 hover:text-neutral-900 focus:text-neutral-900" to="/cookie-policy">
            Cookie Policy
          </NuxtLink>
        </div>
        <p class="text-neutral-600 f-mt-md">
          {{ copyrightNotice }}
        </p>
      </div>

      <div v-for="(group, i) in site.navigation" :key="i" :style="`grid-area: ${['project', 'tech', 'apps', 'get-started', 'community', 'and-more'][i]}`">
        <p class="text-[13.2px] leading-[13.2px] text-neutral-700/80 w-full nq-label">
          {{ group.label }}
        </p>
        <ul class="mt-4 md:mt-6" :aria-label="`${group.label} links`" role="list">
          <li v-for="(link, j) in group.links" :key="j" class="mt-2 md:mt-3">
            <NuxtLink class="font-semibold transition-colors text-f-sm text-neutral-800 hover:text-neutral-900 focus:text-neutral-900" :to="link.href">
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <hr class="bg-neutral-400 h-px w-full sr-only" area-hr-1>
      <hr class="bg-neutral-400 h-px w-full sr-only lg:hidden" area-hr-2>
      <hr class="bg-neutral-400 h-px w-full sr-only md:hidden" area-hr-3>
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

[area-contact] {
  grid-area: contact;
}
[area-meta] {
  grid-area: meta;
}
[area-hr-1] {
  grid-area: hr-1;
}
[area-hr-2] {
  grid-area: hr-2;
}
[area-hr-3] {
  grid-area: hr-3;
}

@media (min-width: 1024px) {
  [area-hr-2],
  [area-hr-3] {
    display: none;
  }
}
</style>
