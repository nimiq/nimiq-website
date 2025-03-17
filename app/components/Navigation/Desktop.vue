<script setup lang="ts">
const { data: socialMedias } = await useSocialMedias()
const { data: navigation } = await useNavigation()
const internalProjectLinks = computed(() => {
  return navigation.value!.projectLinks.filter(link => link.href.link_type === 'Document')
})

const selectedApp = ref(0)
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
          absolute left-0 top-0 w-max motion-from-end:animate-enter-from-right motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right motion-to-start:animate-exit-to-left
        >
          <div>
            <div flex="~ gap-20" px-20 py-32>
              <ul :aria-label="`${navigation.appsGroupName} links`" role="link" w-max flex="~ col">
                <li v-for="({ label, href, logo }, index) in navigation.appsLinks" :key="label!" group class="link-item" @focus="selectedApp = index" @mouseover="selectedApp = index">
                  <NavigationMenuLink as-child>
                    <PrismicLink internal-component="a" :field="href" flex="~ gap-12 items-center">
                      <NuxtImg :src="$prismic.asImageSrc(logo)!" h-22 max-w-21 op="20 group-hocus:100" transition-opacity />
                      <span>
                        {{ label }}
                      </span>
                    </PrismicLink>
                  </NavigationMenuLink>
                </li>
              </ul>

              <transition mode="out-in" enter-active-class="transition-[opacity,filter] duration-400" enter-from-class="op-0 blur-2" enter-to-class="op-100 blur-0" leave-active-class="transition-[opacity,filter] duration-150 blur-0" leave-from-class="op-100" leave-to-class="op-0 blur-2">
                <PrismicImage v-if="navigation.appsLinks[selectedApp]?.visual" :key="selectedApp" :field="navigation.appsLinks[selectedApp]!.visual" relative h-full w-300 rounded-4 object-contain object-left-top shadow />
              </transition>
            </div>
            <div v-if="navigation.howToTitle && navigation.howToLinks.length > 0" bg-darkblue bg-op-6 px-40 py-32>
              <p whitespace-nowrap text-12 font-bold lh-none uppercase op-60>
                {{ navigation.howToTitle }}
              </p>

              <ul role="list" :aria-label="`${navigation.howToTitle} links`" mt-18 flex flex-wrap gap-x-32>
                <li v-for="({ href, label }, index) in navigation.howToLinks" :key="`how-to-link-${index}`">
                  <NavigationMenuLink as-child>
                    <PrismicLink internal-component="a" :field="href" un-text="neutral-700 hocus:neutral-800" transition-colors nq-arrow>
                      {{ label }}
                    </PrismicLink>
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem v-if="navigation.techLinks.length > 0">
        <NavigationMenuTrigger class="trigger">
          {{ navigation.techGroupName }}
          <div i-nimiq:chevron-down />
        </NavigationMenuTrigger>
        <NavigationMenuContent absolute left-0 top-0 min-w-max motion-from-end:animate-enter-from-right motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right motion-to-start:animate-exit-to-left>
          <div>
            <ul :aria-label="`${navigation.techGroupName} links`" role="link" grid="~ cols-2 gap-x-8" p-24>
              <li v-for="({ label, href }) in navigation.techLinks" :key="label!" w-full flex class="link-item">
                <NavigationMenuLink as-child>
                  <PrismicLink internal-component="a" :field="href">
                    {{ label }}
                  </PrismicLink>
                </NavigationMenuLink>
              </li>
            </ul>
            <hr h-1 w-full bg-darkblue op-10>
            <div flex="~ items-center justify-between gap-x-20" px-32 py-20>
              <PrismicLink v-if="socialMedias!.github" internal-component="a" :field="socialMedias!.github.link" flex="~ items-center gap-12" un-text="15 neutral-800" flex-1 pr-4 nq-arrow after:ml--4 border="r-1.5 solid darkblue/10">
                <div :class="socialMedias!.github.icon" text-20 op-70 />
                {{ navigation.githubLinkLabel }}
              </PrismicLink>
              <SocialMediaLogosList :items="[SocialMedia.reddit, SocialMedia.discord, SocialMedia.telegram]" flex-nowrap text-18 op-80 />
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem v-if="navigation.communityGroupName && navigation.communityLinks.length > 0">
        <NavigationMenuTrigger class="trigger">
          {{ navigation.communityGroupName }}
          <div i-nimiq:chevron-down />
        </NavigationMenuTrigger>
        <NavigationMenuContent absolute left-0 top-0 min-w-max motion-from-end:animate-enter-from-right motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right motion-to-start:animate-exit-to-left>
          <div grid grid-cols-1 max-w-6xl p-16>
            <ul :aria-label="`${navigation.communityGroupName} links`" role="link" flex="~ col" pb-24>
              <li v-for="({ label, href }) in navigation.communityLinks" :key="label!" w-full flex class="link-item">
                <NavigationMenuLink as-child>
                  <PrismicLink internal-component="a" :field="href">
                    {{ label }}
                  </PrismicLink>
                </NavigationMenuLink>
              </li>
            </ul>
            <hr h-1 w-full bg-darkblue op-10>
            <SocialMediaLogosList :items="[SocialMedia.x, SocialMedia.reddit, SocialMedia.facebook, SocialMedia.youtube, SocialMedia.instagram, SocialMedia.discord, SocialMedia.telegram, SocialMedia.nimiqForum, SocialMedia.github]" mt-16 text-18 op-80 />
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem v-if="navigation.projectGroupName && internalProjectLinks.length > 0">
        <NavigationMenuTrigger class="trigger">
          {{ navigation.projectGroupName }}
          <div i-nimiq:chevron-down />
        </NavigationMenuTrigger>

        <NavigationMenuContent absolute top-0 min-w-180 motion-from-end:animate-enter-from-right motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right motion-to-start:animate-exit-to-left>
          <div grid grid-cols-1 p-16>
            <ul :aria-label="`${navigation.projectGroupName} links`" role="link" flex="~ col">
              <li v-for="({ label, href }) in navigation.projectLinks" :key="label!" w-full flex class="link-item">
                <NavigationMenuLink as-child>
                  <PrismicLink internal-component="a" :field="href">
                    {{ label }}
                  </PrismicLink>
                </NavigationMenuLink>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem v-if="navigation.getStartedGroupName && navigation.getStartedLinks.length > 0">
        <NavigationMenuTrigger class="get-started-btn" ml-16 nq-pill-lg nq-pill-secondary>
          {{ navigation.getStartedGroupName }}
        </NavigationMenuTrigger>
        <NavigationMenuContent absolute left-0 top-0 min-w-max motion-from-end:animate-enter-from-right motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right motion-to-start:animate-exit-to-left>
          <ul :aria-label="`${navigation.getStartedGroupName} links`" role="link" flex p-16 divide="x-1 solid darkblue/10 hover:transparent">
            <li
              v-for="({ label, href, description }) in navigation.getStartedLinks" :key="label!" max-w-240 w-full flex transition-border
            >
              <NavigationMenuLink as-child>
                <PrismicLink internal-component="a" :field="href" flex="~ col gap-12" bg="hocus:darkblue/6" un-text="darkblue/90 hocus:darkblue" w-full rounded-4 p-24 transition-colors>
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
      <NavigationMenuIndicator flex="~ items-end justify-center" top-full z-100 mt-5 h-16 of-hidden drop-shadow transition-transform data-hidden:animate-fade-out data-visible:animate-fade-in data-hidden:op-0>
        <div i-nimiq:tooltip-triangle text-white />
      </NavigationMenuIndicator>
    </NavigationMenuList>

    <div flex="~ justify-center" absolute right-0 top-full z-10 min-w-full perspective-2000>
      <NavigationMenuViewport
        transition="[width,height]" h="$reka-navigation-menu-viewport-height" animate="scale-in data-closed:scale-out" min-w="$reka-navigation-menu-viewport-width" relative z-1 mt-20 origin-top-center animate-scale-in of-hidden rounded-12 bg-white shadow duration-300
      />
    </div>
  </NavigationMenuRoot>
</template>

<style>
nav.header-nav {
  > div {
    --uno: 'z-1';
  }
  .trigger {
    --uno: 'bg-transparent px-16 py-4 font-bold text-neutral-800 hocus:text-neutral-900 data-open:op-80 flex items-center gap-x-8';

    [i-nimiq\:chevron-down] {
      --uno: 'text-12 transition-transform duration-300';
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

  .get-started-btn {
    header[data-scrolled] & {
      --uno: 'bg-none bg-white/10 transition-colors hocus:bg-white/15';
    }
  }
}
</style>
