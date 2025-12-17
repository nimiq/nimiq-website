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
  <NavigationMenuRoot v-if="site?.navigation" class="header-nav" relative :delay-duration="35">
    <NavigationMenuList flex="~ items-center">
      <!-- Apps Dropdown -->
      <NavigationMenuItem v-if="appsGroup">
        <NavigationMenuTrigger class="trigger">
          {{ appsGroup.label }}
          <Icon name="nimiq:chevron-down" text-8 />
        </NavigationMenuTrigger>
        <NavigationMenuContent
          w-max left-0 top-0 absolute motion-from-end:animate-enter-from-right
          motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right
          motion-to-start:animate-exit-to-left
        >
          <div>
            <div flex="~ gap-20" px-20 py-32>
              <ul :aria-label="`${appsGroup.label} links`" role="link" w-max flex="~ col">
                <li
                  v-for="(item, index) in appsGroup.links" :key="item.text" group class="link-item"
                  @focus="selectedApp = index" @mouseover="() => { if (selectedApp !== index) selectedApp = index }"
                >
                  <NavigationMenuLink as-child>
                    <NuxtLink :to="item.href" flex="~ gap-12 items-center">
                      <NuxtImg v-if="item.logo" :src="item.logo" :alt="item.text" h-22 max-w-21 op="20 group-hocus:100" transition-opacity />
                      <span>{{ item.text }}</span>
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>
              </ul>

              <Transition
                mode="out-in" enter-active-class="transition-opacity duration-200"
                enter-from-class="op-0" enter-to-class="op-100"
                leave-active-class="transition-opacity duration-100" leave-from-class="op-100"
                leave-to-class="op-0"
              >
                <NuxtImg
                  v-if="appsGroup.links[debouncedSelectedApp]?.image" :key="debouncedSelectedApp"
                  :src="appsGroup.links[debouncedSelectedApp]!.image" :alt="appsGroup.links[debouncedSelectedApp]!.text"
                  rounded-4 h-full w-300 shadow relative object-contain object-left-top loading="lazy"
                />
              </Transition>
            </div>

            <div v-if="appsGroup.howTo?.title && appsGroup.howTo?.links?.length" px-40 py-32 bg-darkblue bg-op-6>
              <p text-12 lh-none font-bold op-60 whitespace-nowrap uppercase>
                {{ appsGroup.howTo.title }}
              </p>
              <ul role="list" :aria-label="`${appsGroup.howTo.title} links`" mt-18 flex flex-wrap gap-x-32>
                <li v-for="(link, index) in appsGroup.howTo.links" :key="`how-to-link-${index}`">
                  <NavigationMenuLink as-child>
                    <NuxtLink :to="link.href" un-text="neutral-700 hocus:neutral-800" transition-colors nq-arrow>
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
          <Icon name="nimiq:chevron-down" text-8 />
        </NavigationMenuTrigger>
        <NavigationMenuContent
          min-w-max left-0 top-0 absolute motion-from-end:animate-enter-from-right
          motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right
          motion-to-start:animate-exit-to-left
        >
          <div>
            <ul :aria-label="`${techGroup.label} links`" role="link" grid="~ cols-2 gap-x-8" p-24>
              <li v-for="(item, index) in techGroup.links" :key="`tech-item-${index}`" flex w-full class="link-item">
                <NavigationMenuLink as-child>
                  <NuxtLink :to="item.href" font-semibold px-16 py-10 rounded-4 flex-1 cursor-pointer whitespace-nowrap transition-colors bg="hocus:darkblue/6" un-text="darkblue/60 hocus:darkblue">
                    {{ item.text }}
                  </NuxtLink>
                </NavigationMenuLink>
              </li>
            </ul>
            <hr bg-darkblue op-10 h-1 w-full>
            <div flex="~ items-center justify-between gap-x-20" px-32 py-20>
              <NuxtLink
                v-if="github" :to="github.link" flex="~ items-center gap-12"
                un-text="15 neutral-800" pr-4 flex-1 nq-arrow after:ml--4 border="r-1.5 solid darkblue/10"
              >
                <Icon :name="github.icon" text-20 op-70 />
                GitHub
              </NuxtLink>
              <UiSocialMediaLogosList :items="techSocials" text-18 op-80 class="flex-nowrap" />
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Community Dropdown -->
      <NavigationMenuItem v-if="communityGroup">
        <NavigationMenuTrigger class="trigger">
          {{ communityGroup.label }}
          <Icon name="nimiq:chevron-down" text-8 />
        </NavigationMenuTrigger>
        <NavigationMenuContent
          min-w-max left-0 top-0 absolute motion-from-end:animate-enter-from-right
          motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right
          motion-to-start:animate-exit-to-left
        >
          <div p-16 grid grid-cols-1 max-w-6xl>
            <ul :aria-label="`${communityGroup.label} links`" role="link" flex="~ col" pb-24>
              <li v-for="(item, index) in communityGroup.links" :key="`community-item-${index}`" flex w-full class="link-item">
                <NavigationMenuLink as-child>
                  <NuxtLink :to="item.href" font-semibold px-16 py-10 rounded-4 flex-1 cursor-pointer whitespace-nowrap transition-colors bg="hocus:darkblue/6" un-text="darkblue/60 hocus:darkblue">
                    {{ item.text }}
                  </NuxtLink>
                </NavigationMenuLink>
              </li>
            </ul>
            <hr bg-darkblue op-10 h-1 w-full>
            <UiSocialMediaLogosList :items="allSocials" text-18 mt-16 op-80 />
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Project Dropdown -->
      <NavigationMenuItem v-if="projectGroup">
        <NavigationMenuTrigger class="trigger">
          {{ projectGroup.label }}
          <Icon name="nimiq:chevron-down" text-8 />
        </NavigationMenuTrigger>
        <NavigationMenuContent
          min-w-240 left-0 top-0 absolute motion-from-end:animate-enter-from-right
          motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right
          motion-to-start:animate-exit-to-left
        >
          <div p-16 grid grid-cols-1>
            <ul :aria-label="`${projectGroup.label} links`" role="link" flex="~ col">
              <li v-for="(item, index) in projectGroup.links" :key="`project-item-${index}`" flex w-full class="link-item">
                <NavigationMenuLink as-child>
                  <NuxtLink :to="item.href" font-semibold px-16 py-10 rounded-4 flex-1 cursor-pointer whitespace-nowrap transition-colors bg="hocus:darkblue/6" un-text="darkblue/60 hocus:darkblue">
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
          <NuxtLink to="https://wallet.nimiq.com" ml-16 nq-pill-lg :class="isHome ? 'home nq-pill-secondary' : 'nq-pill-blue'">
            Get started
          </NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuIndicator
        flex="~ items-end justify-center" transition-transform top-full z-100 of-hidden
        drop-shadow reka-hidden:op-0 reka-hidden:animate-fade-out reka-not-hidden:animate-fade-in
      />

      <ClientOnly>
        <NavigationMenuIndicator
          animate="reka-not-hidden:fade-in reka-hidden:fade-out"
          transition="all transform ease duration-200" w="$reka-navigation-menu-indicator-size"
          flex="~ items-end justify-center" translate-x="$reka-navigation-menu-indicator-position" duration-200 top-full
          absolute z-100 z-12 of-hidden reka-hidden:op-0
        >
          <Icon name="nimiq:tooltip-triangle" text-neutral-200 h-12 w-24 translate-y-1 relative />
        </NavigationMenuIndicator>
      </ClientOnly>
    </NavigationMenuList>

    <ClientOnly>
      <div flex="~ justify-center" min-w-full perspective-2000 right-0 top-full absolute z-10>
        <NavigationMenuViewport
          transition="[width,height]" h="$reka-navigation-menu-viewport-height"
          animate="scale-in reka-closed:scale-out" min-w="$reka-navigation-menu-viewport-width" mt-12 rounded-12 bg-white
          shadow origin-top-center duration-200 relative z-1 of-hidden animate-scale-in
          outline="1.5 ~ neutral-200"
        />
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
    --uno: 'bg-transparent px-16 py-4 font-bold text-neutral-800 transition-colors hocus:text-neutral-900 reka-open:op-80 flex items-center gap-x-8';

    :deep(svg) {
      --uno: 'transition-transform duration-200 op-70';
    }

    &[data-state='open'] :deep(svg) {
      --uno: 'rotate-180';
    }
  }

  li.link-item {
    a {
      --uno: 'flex-1 cursor-pointer whitespace-nowrap font-semibold rounded-4 transition-colors px-16 py-10 hocus:bg-darkblue/6 text-darkblue/60 hocus:text-darkblue';
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
