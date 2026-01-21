<script setup lang="ts">
import { refDebounced } from '@vueuse/core'

const site = await useSite()

// if we are in / then is home
const route = useRoute()
const isHome = route.fullPath === '/'

// Get specific navigation groups
const appsGroup = site.navigation?.find(g => g.label === 'Apps')
const techGroup = site.navigation?.find(g => g.label === 'Tech')
const communityGroup = site.navigation?.find(g => g.label === 'Community')
const projectGroup = site.navigation?.find(g => g.label === 'Project')

// Social media items for specific sections
const techSocials = site.socials?.filter(s => ['reddit', 'discord', 'telegram'].includes(s.id)) ?? []
const allSocials = site.socials ?? []
const github = site.socials?.find(s => s.id === 'github')

// Apps hover state for image preview
const selectedApp = ref(0)
const debouncedSelectedApp = refDebounced(selectedApp, 50)

// Preload first navigation image for faster initial hover
const firstAppImage = computed(() => appsGroup.value?.links?.[0]?.image)
watchEffect(() => {
  if (import.meta.client && firstAppImage.value) {
    const img = new Image()
    img.src = firstAppImage.value
  }
})
</script>

<template>
  <NavigationMenuRoot v-if="site?.navigation" class="header-nav relative" :delay-duration="35">
    <NavigationMenuList class="flex flex-items-center">
      <!-- Apps Dropdown -->
      <NavigationMenuItem v-if="appsGroup">
        <NavigationMenuTrigger class="trigger">
          {{ appsGroup.label }}
          <Icon class="text-8" name="nimiq:chevron-down" />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="w-max left-0 top-0 absolute" motion-from-end:animate-enter-from-right motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right motion-to-start:animate-exit-to-left>
          <div>
            <div class="flex gap-5 px-5 py-8">
              <ul class="w-max flex flex-col" :aria-label="`${appsGroup.label} links`" role="link">
                <li v-for="(item, index) in appsGroup.links" :key="item.text" class="link-item group" @focus="selectedApp = index" @mouseover="() => { if (selectedApp !== index) selectedApp = index }">
                  <NavigationMenuLink as-child>
                    <NuxtLink class="flex gap-3 flex-items-center" :to="item.href">
                      <NuxtImg v-if="item.logo" class="h-[22px] max-w-[21px] op-20 op-group-hocus:100 transition-opacity" :src="item.logo" :alt="item.text" />
                      <span>{{ item.text }}</span>
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>
              </ul>

              <Transition mode="out-in" enter-active-class="transition-opacity duration-200" enter-from-class="op-0" enter-to-class="op-100" leave-active-class="transition-opacity duration-100" leave-from-class="op-100" leave-to-class="op-0">
                <NuxtImg v-if="appsGroup.links[debouncedSelectedApp]?.image" :key="debouncedSelectedApp" class="rounded-1 h-full w-[300px] relative object-contain object-left-top" :src="appsGroup.links[debouncedSelectedApp]!.image" :alt="appsGroup.links[debouncedSelectedApp]!.text" shadow loading="lazy" />
              </Transition>
            </div>

            <div v-if="appsGroup.howTo?.title && appsGroup.howTo?.links?.length" class="px-10 py-8 bg-darkblue bg-op-6">
              <p class="text-12 lh-none font-bold op-60 whitespace-nowrap uppercase">
                {{ appsGroup.howTo.title }}
              </p>
              <ul class="mt-[18px] flex flex-wrap gap-x-8" role="list" :aria-label="`${appsGroup.howTo.title} links`">
                <li v-for="(link, index) in appsGroup.howTo.links" :key="`how-to-link-${index}`">
                  <NavigationMenuLink as-child>
                    <NuxtLink class="transition-colors nq-arrow" :to="link.href" un-text="neutral-700 hocus:neutral-800">
                      {{ link.text }}
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Technology Dropdown -->
      <NavigationMenuItem v-if="techGroup">
        <NavigationMenuTrigger class="trigger">
          {{ techGroup.label }}
          <Icon class="text-8" name="nimiq:chevron-down" />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="min-w-max left-0 top-0 absolute" motion-from-end:animate-enter-from-right motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right motion-to-start:animate-exit-to-left>
          <div>
            <ul class="grid grid-cols-2 gap-x-2 p-6" :aria-label="`${techGroup.label} links`" role="link">
              <li v-for="(item, index) in techGroup.links" :key="`tech-item-${index}`" class="link-item flex w-full">
                <NavigationMenuLink as-child>
                  <NuxtLink class="font-semibold px-4 py-2.5 rounded-1 flex-1 cursor-pointer whitespace-nowrap transition-colors bg-hocus:darkblue/6" :to="item.href" un-text="darkblue/60 hocus:darkblue">
                    {{ item.text }}
                  </NuxtLink>
                </NavigationMenuLink>
              </li>
            </ul>
            <hr class="bg-darkblue op-10 h-px w-full">
            <div class="flex flex-items-center flex-justify-between gap-x-5 px-8 py-5">
              <NuxtLink v-if="github" class="flex flex-items-center gap-3 pr-1 flex-1 nq-arrow after:-ml-1 border-r-1.5 border-solid border-darkblue/10" :to="github.link" un-text="15 neutral-800">
                <Icon class="text-20 op-70" :name="github.icon" />
                GitHub
              </NuxtLink>
              <UiSocialMediaLogosList class="flex-nowrap text-18 op-80" :items="techSocials" />
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Community Dropdown -->
      <NavigationMenuItem v-if="communityGroup">
        <NavigationMenuTrigger class="trigger">
          {{ communityGroup.label }}
          <Icon class="text-8" name="nimiq:chevron-down" />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="min-w-max left-0 top-0 absolute" motion-from-end:animate-enter-from-right motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right motion-to-start:animate-exit-to-left>
          <div class="p-4 grid max-w-6xl" grid-cols-1>
            <ul class="flex flex-col pb-6" :aria-label="`${communityGroup.label} links`" role="link">
              <li v-for="(item, index) in communityGroup.links" :key="`community-item-${index}`" class="link-item flex w-full">
                <NavigationMenuLink as-child>
                  <NuxtLink class="font-semibold px-4 py-2.5 rounded-1 flex-1 cursor-pointer whitespace-nowrap transition-colors bg-hocus:darkblue/6" :to="item.href" un-text="darkblue/60 hocus:darkblue">
                    {{ item.text }}
                  </NuxtLink>
                </NavigationMenuLink>
              </li>
            </ul>
            <hr class="bg-darkblue op-10 h-px w-full">
            <UiSocialMediaLogosList class="text-18 mt-4 op-80" :items="allSocials" />
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Project Dropdown -->
      <NavigationMenuItem v-if="projectGroup">
        <NavigationMenuTrigger class="trigger">
          {{ projectGroup.label }}
          <Icon class="text-8" name="nimiq:chevron-down" />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="min-w-60 left-0 top-0 absolute" motion-from-end:animate-enter-from-right motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right motion-to-start:animate-exit-to-left>
          <div class="p-4 grid" grid-cols-1>
            <ul class="flex flex-col" :aria-label="`${projectGroup.label} links`" role="link">
              <li v-for="(item, index) in projectGroup.links" :key="`project-item-${index}`" class="link-item flex w-full">
                <NavigationMenuLink as-child>
                  <NuxtLink class="font-semibold px-4 py-2.5 rounded-1 flex-1 cursor-pointer whitespace-nowrap transition-colors bg-hocus:darkblue/6" :to="item.href" un-text="darkblue/60 hocus:darkblue">
                    {{ item.text }}
                  </NuxtLink>
                </NavigationMenuLink>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Get Started CTA -->
      <NavigationMenuItem>
        <NavigationMenuLink as-child>
          <NuxtLink class="ml-4 nq-pill-lg" to="https://wallet.nimiq.com" :class="isHome ? 'home nq-pill-secondary' : 'nq-pill-blue'">
            Get started
          </NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuIndicator class="flex flex-items-end flex-justify-center transition-transform top-full z-100 of-hidden reka-hidden:op-0 reka-hidden:animate-fade-out reka-not-hidden:animate-fade-in" drop-shadow />

      <ClientOnly>
        <NavigationMenuIndicator class="animate-reka-not-hidden:fade-in animate-reka-hidden:fade-out transition-all transition-transform transition-ease transition-duration-200 w-$reka-navigation-menu-indicator-size flex flex-items-end flex-justify-center translate-x-$reka-navigation-menu-indicator-position duration-200 top-full absolute z-100 z-12 of-hidden reka-hidden:op-0">
          <Icon class="text-neutral-200 h-3 w-6 translate-y-px relative" name="nimiq:tooltip-triangle" />
        </NavigationMenuIndicator>
      </ClientOnly>
    </NavigationMenuList>

    <ClientOnly>
      <div class="flex flex-justify-center min-w-full right-0 top-full absolute z-10" perspective-2000>
        <NavigationMenuViewport class="transition-[width,height] h-$reka-navigation-menu-viewport-height animate-scale-in animate-reka-closed:scale-out min-w-$reka-navigation-menu-viewport-width mt-3 rounded-3 bg-white origin-top-center duration-200 relative z-1 of-hidden animate-scale-in outline-1.5 outline outline-neutral-200" shadow />
      </div>
    </ClientOnly>
  </NavigationMenuRoot>
</template>

<style>
.header-nav {
  > div {
    --uno: 'z-1';
  }

  /* Fallback dimensions before Reka JS calculates actual values */
  --reka-navigation-menu-viewport-width: 400px;
  --reka-navigation-menu-viewport-height: 300px;
  --reka-navigation-menu-indicator-size: 80px;
  --reka-navigation-menu-indicator-position: 0px;

  .trigger {
    --uno: 'bg-transparent px-4 py-1 font-bold text-neutral-800 transition-colors hocus:text-neutral-900 reka-open:op-80 flex items-center gap-x-2';

    :deep(svg) {
      --uno: 'transition-transform duration-200 op-70';
    }

    &[data-state='open'] :deep(svg) {
      --uno: 'rotate-180';
    }
  }

  li.link-item {
    a {
      --uno: 'flex-1 cursor-pointer whitespace-nowrap font-semibold rounded-1 transition-colors px-4 py-2.5 hocus:bg-darkblue/6 text-darkblue/60 hocus:text-darkblue';
    }
  }

  .home {
    header[data-scrolled='true'] & {
      --uno: 'bg-none bg-white/10 transition-colors hocus:bg-white/15';
    }
  }
}

header[data-scrolled='false'][dark] {
  .trigger:where([data-state='open'], :hover, :focus-visible) {
    --uno: 'text-white/95';
  }
}
</style>
