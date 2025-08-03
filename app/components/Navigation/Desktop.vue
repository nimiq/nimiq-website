<script setup lang="ts">
const { data: socialMedias } = await useSocialMedias()
const { data: navigation } = await useNavigation()
const internalProjectLinks = computed(() => {
  return navigation.value!.projectLinks.filter(link => link.href.link_type === 'Document')
})

const selectedApp = ref(0)

// if we are in / then is home
const route = useRoute()
const isHome = route.fullPath === '/'
</script>

<template>
  <NavigationMenuRoot v-if="navigation" class="header-nav" relative>
    <NavigationMenuList flex="~ items-center">
      <NavigationMenuItem>
        <NavigationMenuTrigger class="trigger">
          Apps
          <div i-nimiq:chevron-down />
        </NavigationMenuTrigger>
        <NavigationMenuContent
          w-max left-0 top-0 absolute motion-from-end:animate-enter-from-right motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right motion-to-start:animate-exit-to-left
        >
          <div>
            <div flex="~ gap-20" px-20 py-32>
              <ul :aria-label="`${navigation.appsGroupName} links`" role="link" w-max flex="~ col">
                <li v-for="({ label, href, logo }, index) in navigation.appsLinks" :key="label!" group class="link-item" @focus="selectedApp = index" @mouseover="selectedApp = index">
                  <NavigationMenuLink as-child>
                    <PrismicLink :field="href" flex="~ gap-12 items-center">
                      <PrismicImage :field="logo" h-22 max-w-21 op="20 group-hocus:100" transition-opacity />
                      <span>
                        {{ label }}
                      </span>
                    </PrismicLink>
                  </NavigationMenuLink>
                </li>
              </ul>

              <transition mode="out-in" enter-active-class="transition-[opacity,filter] duration-400" enter-from-class="op-0 blur-2" enter-to-class="op-100 blur-0" leave-active-class="transition-[opacity,filter] duration-150 blur-0" leave-from-class="op-100" leave-to-class="op-0 blur-2">
                <PrismicImage v-if="navigation.appsLinks[selectedApp]?.visual" :key="selectedApp" :field="navigation.appsLinks[selectedApp]!.visual" rounded-4 h-full w-300 shadow relative object-contain object-left-top />
              </transition>
            </div>
            <div v-if="navigation.howToTitle && navigation.howToLinks.length > 0" px-40 py-32 bg-darkblue bg-op-6>
              <p text-12 font-bold lh-none op-60 whitespace-nowrap uppercase>
                {{ navigation.howToTitle }}
              </p>

              <ul role="list" :aria-label="`${navigation.howToTitle} links`" mt-18 flex flex-wrap gap-x-32>
                <li v-for="(link, index) in navigation.howToLinks" :key="`how-to-link-${index}`">
                  <NavigationMenuLink as-child>
                    <PrismicLink :field="link" un-text="neutral-700 hocus:neutral-800" transition-colors nq-arrow />
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem v-if="navigation.techItems.length > 0">
        <NavigationMenuTrigger class="trigger">
          {{ navigation.techGroupName }}
          <div i-nimiq:chevron-down />
        </NavigationMenuTrigger>
        <NavigationMenuContent min-w-max left-0 top-0 absolute motion-from-end:animate-enter-from-right motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right motion-to-start:animate-exit-to-left>
          <div>
            <ul :aria-label="`${navigation.techGroupName} links`" role="link" grid="~ cols-2 gap-x-8" p-24>
              <li v-for="(item, index) in navigation.techItems" :key="`tech-item-${index}`" flex w-full class="link-item">
                <NavigationMenuLink as-child>
                  <PrismicLink :field="item" />
                </NavigationMenuLink>
              </li>
            </ul>
            <hr bg-darkblue op-10 h-1 w-full>
            <div flex="~ items-center justify-between gap-x-20" px-32 py-20>
              <PrismicLink v-if="socialMedias!.github" :field="socialMedias!.github.link" flex="~ items-center gap-12" un-text="15 neutral-800" pr-4 flex-1 nq-arrow after:ml--4 border="r-1.5 solid darkblue/10">
                <div :class="socialMedias!.github.icon" text-20 op-70 />
                {{ navigation.githubLinkLabel }}
              </PrismicLink>
              <SocialMediaLogosList :items="[SocialMedia.reddit, SocialMedia.discord, SocialMedia.telegram]" text-18 op-80 flex-nowrap />
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem v-if="navigation.communityGroupName && navigation.communityItems.length > 0">
        <NavigationMenuTrigger class="trigger">
          {{ navigation.communityGroupName }}
          <div i-nimiq:chevron-down />
        </NavigationMenuTrigger>
        <NavigationMenuContent min-w-max left-0 top-0 absolute motion-from-end:animate-enter-from-right motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right motion-to-start:animate-exit-to-left>
          <div p-16 grid grid-cols-1 max-w-6xl>
            <ul :aria-label="`${navigation.communityGroupName} links`" role="link" flex="~ col" pb-24>
              <li v-for="(item, index) in navigation.communityItems" :key="`community-item-${index}`" flex w-full class="link-item">
                <NavigationMenuLink as-child>
                  <PrismicLink :field="item" />
                </NavigationMenuLink>
              </li>
            </ul>
            <hr bg-darkblue op-10 h-1 w-full>
            <SocialMediaLogosList :items="[SocialMedia.x, SocialMedia.reddit, SocialMedia.facebook, SocialMedia.youtube, SocialMedia.instagram, SocialMedia.discord, SocialMedia.telegram, SocialMedia.nimiqForum, SocialMedia.github]" text-18 mt-16 op-80 />
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem v-if="navigation.projectGroupName && internalProjectLinks.length > 0">
        <NavigationMenuTrigger class="trigger">
          {{ navigation.projectGroupName }}
          <div i-nimiq:chevron-down />
        </NavigationMenuTrigger>

        <NavigationMenuContent min-w-240 top-0 absolute motion-from-end:animate-enter-from-right motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right motion-to-start:animate-exit-to-left>
          <div p-16 grid grid-cols-1>
            <ul :aria-label="`${navigation.projectGroupName} links`" role="link" flex="~ col">
              <li v-for="(item, index) in navigation.projectItems" :key="`project-item-${index}`" flex w-full class="link-item">
                <NavigationMenuLink as-child>
                  <PrismicLink :field="item" />
                </NavigationMenuLink>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem v-if="navigation.getStartedGroupName && navigation.getStartedLinks.length > 0">
        <NavigationMenuTrigger ml-16 nq-pill-lg :class="isHome ? ' home nq-pill-secondary' : 'nq-pill-blue'">
          {{ navigation.getStartedGroupName }}
        </NavigationMenuTrigger>
        <NavigationMenuContent min-w-max left-0 top-0 absolute motion-from-end:animate-enter-from-right motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right motion-to-start:animate-exit-to-left>
          <ul :aria-label="`${navigation.getStartedGroupName} links`" role="link" p-16 flex divide="x-1 solid darkblue/10 hover:transparent">
            <li
              v-for="({ label, href, description }) in navigation.getStartedLinks" :key="label!" flex max-w-240 w-full transition-border
            >
              <NavigationMenuLink as-child>
                <PrismicLink :field="href" flex="~ col gap-12" bg="hocus:darkblue/6" un-text="darkblue/90 hocus:darkblue" p-24 rounded-4 w-full transition-colors>
                  <p font-semibold lh-none>
                    {{ label }}
                  </p>
                  <p text-14>
                    {{ description }}
                  </p>
                </PrismicLink>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuIndicator flex="~ items-end justify-center" transition-transform top-full z-100 of-hidden drop-shadow data-hidden:op-0 data-hidden:animate-fade-out data-visible:animate-fade-in />

      <NavigationMenuIndicator animate="data-visible:fade-in data-hidden:fade-out" transition="all transform ease duration-200" w="$reka-navigation-menu-indicator-size" flex="~ items-end justify-center" translate-x="$reka-navigation-menu-indicator-position" duration-200 top-full absolute z-100 z-12 of-hidden data-hidden:op-0>
        <div h-12 w-24 relative i-nimiq:tooltip-triangle />
      </NavigationMenuIndicator>
    </NavigationMenuList>

    <div flex="~ justify-center" min-w-full perspective-2000 right-0 top-full absolute z-10>
      <NavigationMenuViewport
        transition="[width,height]" h="$reka-navigation-menu-viewport-height" animate="scale-in data-closed:scale-out" min-w="$reka-navigation-menu-viewport-width" mt-12 rounded-12 bg-white shadow origin-top-center duration-300 relative z-1 of-hidden animate-scale-in outline="1.5 offset--1.5 ~ neutral-200"
      />
    </div>
  </NavigationMenuRoot>
</template>

<style>
.header-nav {
  > div {
    --uno: 'z-1';
  }
  .trigger {
    --uno: 'bg-transparent px-16 py-4 font-bold text-neutral-800 hocus:text-neutral-900 data-open:op-80 flex items-center gap-x-8';

    [i-nimiq\:chevron-down] {
      --uno: 'scale-50 transition-transform duration-300 op-70';
    }

    &[data-state='open'] {
      [i-nimiq\:chevron-down] {
        --uno: 'rotate-180';
      }
    }
  }

  li.link-item {
    a {
      --uno: 'flex-1 cursor-pointer whitespace-nowrap  font-semibold rounded-4 transition-colors px-16 py-10 hocus:bg-darkblue/6 text-darkblue/60 hocus:text-darkblue';
    }
  }

  .get-started-btn.home {
    header[data-scrolled] & {
      --uno: 'bg-none bg-white/10 transition-colors hocus:bg-white/15';
    }
  }
}

header[data-scrolled] {
  [i-nimiq\:tooltip-triangle] {
    --uno: 'text-neutral-200';
  }
}

header:not([data-scrolled]) {
  [i-nimiq\:tooltip-triangle] {
    --uno: 'text-white';
  }
}
</style>
