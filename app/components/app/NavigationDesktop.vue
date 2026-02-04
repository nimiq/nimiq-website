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
const getStartedGroup = site.navigation?.find(g => g.label === 'Get started')

// Social media items for specific sections
const techSocials = site.socials?.filter(s => ['reddit', 'discord', 'telegram'].includes(s.id)) ?? []
const allSocials = site.socials ?? []
const github = site.socials?.find(s => s.id === 'github')

// Apps hover state for image preview
const selectedApp = ref(0)
const debouncedSelectedApp = refDebounced(selectedApp, 50)

// Preload first navigation image for faster initial hover
const firstAppImage = computed(() => appsGroup?.links?.[0]?.image)
watchEffect(() => {
  if (import.meta.client && firstAppImage.value) {
    const img = new Image()
    img.src = firstAppImage.value
  }
})
</script>

<template>
  <NavigationMenuRoot v-if="site?.navigation" class="header-nav relative" :delay-duration="35">
    <NavigationMenuList class="flex items-center">
      <!-- Apps Dropdown -->
      <NavigationMenuItem v-if="appsGroup" value="apps">
        <NavigationMenuTrigger class="trigger">
          {{ appsGroup.label }}
          <Icon class="scale-50" name="nimiq:chevron-down" />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="nav-content w-max left-0 top-0 absolute">
          <div>
            <div class="flex gap-5 px-5 py-8">
              <ul class="w-max flex flex-col" :aria-label="`${appsGroup.label} links`" role="link">
                <li v-for="(item, index) in appsGroup.links" :key="item.text" class="link-item group" :class="{ 'is-selected': selectedApp === index }" @focus="selectedApp = index" @mouseover="() => { if (selectedApp !== index) selectedApp = index }">
                  <NavigationMenuLink as-child>
                    <NuxtLink class="flex gap-3 items-center" :to="item.href">
                      <NuxtImg v-if="item.logo" class="size-5 opacity-20 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" :class="{ '!opacity-100': selectedApp === index }" :src="item.logo" :alt="item.text" />
                      <span>{{ item.text }}</span>
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>
              </ul>

              <Transition mode="out-in" enter-active-class="transition-opacity duration-300 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-opacity duration-150 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <NuxtImg v-if="appsGroup.links[debouncedSelectedApp]?.image" :key="debouncedSelectedApp" class="rounded h-full w-[280px] relative object-contain object-left-top shadow" :src="appsGroup.links[debouncedSelectedApp]!.image" :alt="appsGroup.links[debouncedSelectedApp]!.text" />
              </Transition>
            </div>

            <div v-if="appsGroup.howTo?.title && appsGroup.howTo?.links?.length" class="px-6 py-5 bg-neutral-100">
              <p class="text-xs leading-none font-bold opacity-60 whitespace-nowrap uppercase">
                {{ appsGroup.howTo.title }}
              </p>
              <ul class="mt-3 flex flex-wrap gap-x-6" role="list" :aria-label="`${appsGroup.howTo.title} links`">
                <li v-for="(link, index) in appsGroup.howTo.links" :key="`how-to-link-${index}`">
                  <NavigationMenuLink as-child>
                    <NuxtLink class="transition-colors text-neutral-700 hover:text-neutral-900 nq-arrow text-sm" :to="link.href">
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
      <NavigationMenuItem v-if="techGroup" value="tech">
        <NavigationMenuTrigger class="trigger">
          {{ techGroup.label }}
          <Icon class="scale-50" name="nimiq:chevron-down" />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="nav-content min-w-max left-0 top-0 absolute">
          <div>
            <ul class="grid grid-cols-2 gap-x-2 p-6" :aria-label="`${techGroup.label} links`" role="link">
              <li v-for="(item, index) in techGroup.links" :key="`tech-item-${index}`" class="link-item flex w-full">
                <NavigationMenuLink as-child>
                  <NuxtLink class="font-semibold px-4 py-2.5 rounded-1 flex-1 cursor-pointer whitespace-nowrap transition-colors hover:bg-darkblue/6 focus:bg-darkblue/6 text-darkblue/60 hover:text-darkblue focus:text-darkblue" :to="item.href">
                    {{ item.text }}
                  </NuxtLink>
                </NavigationMenuLink>
              </li>
            </ul>
            <hr class="bg-darkblue opacity-10 h-px w-full">
            <div class="flex items-center justify-between gap-x-5 px-8 py-5">
              <NuxtLink v-if="github" class="flex items-center gap-3 pr-1 flex-1 nq-arrow after:-ml-1 border-r-1.5 border-solid border-darkblue/10 text-[15px] text-neutral-800" :to="github.link">
                <Icon class="text-20 opacity-70" :name="github.icon" />
                GitHub
              </NuxtLink>
              <UiSocialMediaLogosList class="flex-nowrap text-18 opacity-80" :items="techSocials" />
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Community Dropdown -->
      <NavigationMenuItem v-if="communityGroup" value="community">
        <NavigationMenuTrigger class="trigger">
          {{ communityGroup.label }}
          <Icon class="scale-50" name="nimiq:chevron-down" />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="nav-content min-w-max left-0 top-0 absolute">
          <div class="p-4 grid max-w-6xl" grid-cols-1>
            <ul class="flex flex-col pb-6" :aria-label="`${communityGroup.label} links`" role="link">
              <li v-for="(item, index) in communityGroup.links" :key="`community-item-${index}`" class="link-item flex w-full">
                <NavigationMenuLink as-child>
                  <NuxtLink class="font-semibold px-4 py-2.5 rounded-1 flex-1 cursor-pointer whitespace-nowrap transition-colors hover:bg-darkblue/6 focus:bg-darkblue/6 text-darkblue/60 hover:text-darkblue focus:text-darkblue" :to="item.href">
                    {{ item.text }}
                  </NuxtLink>
                </NavigationMenuLink>
              </li>
            </ul>
            <hr class="bg-darkblue opacity-10 h-px w-full">
            <UiSocialMediaLogosList class="text-18 mt-4 opacity-80" :items="allSocials" />
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Project Dropdown -->
      <NavigationMenuItem v-if="projectGroup" value="project">
        <NavigationMenuTrigger class="trigger">
          {{ projectGroup.label }}
          <Icon class="scale-50" name="nimiq:chevron-down" />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="nav-content min-w-60 left-0 top-0 absolute">
          <div class="p-4 grid" grid-cols-1>
            <ul class="flex flex-col" :aria-label="`${projectGroup.label} links`" role="link">
              <li v-for="(item, index) in projectGroup.links" :key="`project-item-${index}`" class="link-item flex w-full">
                <NavigationMenuLink as-child>
                  <NuxtLink class="font-semibold px-4 py-2.5 rounded-1 flex-1 cursor-pointer whitespace-nowrap transition-colors hover:bg-darkblue/6 focus:bg-darkblue/6 text-darkblue/60 hover:text-darkblue focus:text-darkblue" :to="item.href">
                    {{ item.text }}
                  </NuxtLink>
                </NavigationMenuLink>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Get Started CTA -->
      <NavigationMenuItem v-if="getStartedGroup" value="getstarted">
        <NavigationMenuTrigger class="ml-4 nq-pill-lg" :class="isHome ? 'home nq-pill-secondary' : 'nq-pill-blue'">
          {{ getStartedGroup.label }}
        </NavigationMenuTrigger>
        <NavigationMenuContent class="nav-content min-w-max left-0 top-0 absolute">
          <ul class="p-4 flex divide-x divide-darkblue/10" :aria-label="`${getStartedGroup.label} links`" role="list">
            <li v-for="(item, index) in getStartedGroup.links" :key="`getstarted-item-${index}`" class="flex max-w-[240px] w-full">
              <NavigationMenuLink as-child>
                <NuxtLink class="flex flex-col gap-3 p-6 rounded-1 w-full transition-colors hover:bg-darkblue/6 focus:bg-darkblue/6 text-darkblue/90 hover:text-darkblue focus:text-darkblue" :to="item.href">
                  <p class="font-semibold leading-none">
                    {{ item.text }}
                  </p>
                  <p v-if="(item as any).description" class="text-sm">
                    {{ (item as any).description }}
                  </p>
                </NuxtLink>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <ClientOnly>
        <NavigationMenuIndicator class="flex items-end justify-center w-[var(--reka-navigation-menu-indicator-size)] translate-x-[var(--reka-navigation-menu-indicator-position)] transition-all duration-200 top-full absolute z-50 overflow-hidden data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100">
          <Icon class="text-neutral-200 h-3 w-6 translate-y-px relative drop-shadow" name="nimiq:tooltip-triangle" />
        </NavigationMenuIndicator>
      </ClientOnly>
    </NavigationMenuList>

    <ClientOnly>
      <div class="viewport-container absolute left-0 top-full w-full z-10" style="perspective: 2000px">
        <NavigationMenuViewport class="viewport-panel transition-all h-[var(--reka-navigation-menu-viewport-height)] w-[var(--reka-navigation-menu-viewport-width)] mt-3 rounded-xl bg-white origin-top duration-300 ease-[cubic-bezier(0.25,0,0,1)] absolute overflow-hidden shadow-xl outline outline-1 outline-neutral-200" style="left: var(--reka-navigation-menu-viewport-left, 0)" />
      </div>
    </ClientOnly>
  </NavigationMenuRoot>
</template>

<style>
.header-nav {
  > div {
    z-index: 1;
  }

  /* Fallback dimensions before Reka JS calculates actual values */
  --reka-navigation-menu-viewport-width: 400px;
  --reka-navigation-menu-viewport-height: 300px;
  --reka-navigation-menu-indicator-size: 80px;
  --reka-navigation-menu-indicator-position: 0px;
  --reka-navigation-menu-viewport-left: 0px;

  /* Viewport - hidden by default, shown when has open state */
  .viewport-panel:not([data-state='open']) {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }

  /* Viewport animation - scale in/out from top */
  .viewport-panel[data-state='open'] {
    animation: scaleIn 200ms ease;
  }

  .viewport-panel[data-state='closed'] {
    animation: scaleOut 200ms ease forwards;
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: rotateX(-10deg) scale(0.9);
    }
    to {
      opacity: 1;
      transform: rotateX(0deg) scale(1);
    }
  }

  @keyframes scaleOut {
    from {
      opacity: 1;
      visibility: visible;
      transform: rotateX(0deg) scale(1);
    }
    to {
      opacity: 0;
      visibility: hidden;
      transform: rotateX(-10deg) scale(0.95);
    }
  }

  /* Content base - all content starts hidden */
  .nav-content {
    opacity: 0;
    pointer-events: none;
  }

  /* Open content is visible */
  .nav-content[data-state='open'] {
    opacity: 1;
    pointer-events: auto;
    z-index: 2;
  }

  /* Exiting content animates out behind entering content */
  .nav-content[data-motion='to-start'],
  .nav-content[data-motion='to-end'] {
    z-index: 1;
  }

  /* Content animations - motion variants for switching */
  .nav-content[data-motion='from-start'] {
    animation: enterFromLeft 250ms ease forwards;
  }

  .nav-content[data-motion='from-end'] {
    animation: enterFromRight 250ms ease forwards;
  }

  .nav-content[data-motion='to-start'] {
    animation: exitToLeft 250ms ease forwards;
  }

  .nav-content[data-motion='to-end'] {
    animation: exitToRight 250ms ease forwards;
  }

  @keyframes enterFromLeft {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes enterFromRight {
    from {
      opacity: 0;
      transform: translateX(200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes exitToLeft {
    from {
      opacity: 1;
      transform: translateX(0);
      visibility: visible;
    }
    to {
      opacity: 0;
      transform: translateX(-200px);
      visibility: hidden;
    }
  }

  @keyframes exitToRight {
    from {
      opacity: 1;
      transform: translateX(0);
      visibility: visible;
    }
    to {
      opacity: 0;
      transform: translateX(200px);
      visibility: hidden;
    }
  }

  .trigger {
    background: transparent;
    padding: 4px 16px;
    font-weight: bold;
    color: var(--color-neutral-800);
    transition: color 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover,
    &:focus-visible {
      color: var(--color-neutral-900);
    }

    &[data-state='open'] {
      opacity: 0.8;
    }

    :deep(svg) {
      transition: transform 0.2s;
      opacity: 0.7;
    }

    &[data-state='open'] :deep(svg) {
      transform: rotate(180deg);
    }
  }

  li.link-item {
    a {
      flex: 1;
      cursor: pointer;
      white-space: nowrap;
      font-weight: 600;
      border-radius: 4px;
      transition:
        background-color 0.2s,
        color 0.2s;
      padding: 10px 16px;
      color: rgba(31, 35, 72, 0.6);

      &:hover,
      &:focus-visible {
        background-color: rgba(31, 35, 72, 0.06);
        color: rgb(31, 35, 72);
      }
    }
  }

  .home {
    header[data-scrolled='false'][dark] & {
      background: none;
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
      transition: background-color 0.2s;

      &:hover,
      &:focus-visible {
        background-color: rgba(255, 255, 255, 0.15);
      }
    }
  }
}

header[data-scrolled='false'][dark] {
  .trigger {
    color: rgba(255, 255, 255, 0.8);
  }

  .trigger:where([data-state='open'], :hover, :focus-visible) {
    color: rgba(255, 255, 255, 0.95);
  }
}
</style>
