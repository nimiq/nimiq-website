<script setup lang="ts">
const { data: site } = await useAsyncData('site', () => queryCollection('site').first())

const route = useRoute()
const isHome = route.fullPath === '/'
</script>

<template>
  <NavigationMenuRoot v-if="site?.navigation" class="header-nav" relative :delay-duration="35">
    <NavigationMenuList flex="~ items-center">
      <NavigationMenuItem v-for="(group, i) in site.navigation" :key="i">
        <NavigationMenuTrigger class="trigger">
          {{ group.label }}
          <div i-nimiq:chevron-down />
        </NavigationMenuTrigger>
        <NavigationMenuContent
          min-w-max left-0 top-0 absolute motion-from-end:animate-enter-from-right
          motion-from-start:animate-enter-from-left motion-to-end:animate-exit-to-right
          motion-to-start:animate-exit-to-left
        >
          <ul :aria-label="`${group.label} links`" role="link" p-24 flex="~ col">
            <li v-for="(item, j) in group.links" :key="j" class="link-item">
              <NavigationMenuLink as-child>
                <NuxtLink :to="item.href">
                  {{ item.text }}
                </NuxtLink>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Get Started CTA -->
      <NavigationMenuItem>
        <NavigationMenuLink as-child>
          <NuxtLink to="https://wallet.nimiq.com" ml-16 nq-pill-lg :class="isHome ? 'nq-pill-secondary' : 'nq-pill-blue'">
            Get Started
          </NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuIndicator
        flex="~ items-end justify-center" transition-transform top-full z-100 of-hidden
        drop-shadow data-hidden:op-0 data-hidden:animate-fade-out data-visible:animate-fade-in
      />

      <ClientOnly>
        <NavigationMenuIndicator
          animate="data-visible:fade-in data-hidden:fade-out"
          transition="all transform ease duration-200" w="$reka-navigation-menu-indicator-size"
          flex="~ items-end justify-center" translate-x="$reka-navigation-menu-indicator-position" duration-200 top-full
          absolute z-100 z-12 of-hidden data-hidden:op-0
        >
          <div text-neutral-200 h-12 w-24 translate-y-1 relative i-nimiq:tooltip-triangle />
        </NavigationMenuIndicator>
      </ClientOnly>
    </NavigationMenuList>

    <ClientOnly>
      <div flex="~ justify-center" min-w-full perspective-2000 right-0 top-full absolute z-10>
        <NavigationMenuViewport
          transition="[width,height]" h="$reka-navigation-menu-viewport-height"
          animate="scale-in data-closed:scale-out" min-w="$reka-navigation-menu-viewport-width" mt-12 rounded-12 bg-white
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

  --reka-navigation-menu-viewport-width: 400px;
  --reka-navigation-menu-viewport-height: 300px;
  --reka-navigation-menu-indicator-size: 80px;
  --reka-navigation-menu-indicator-position: 0px;

  .trigger {
    --uno: 'bg-transparent px-16 py-4 font-bold text-neutral-800 transition-colors hocus:text-neutral-900 data-open:op-80 flex items-center gap-x-8';
    [i-nimiq\:chevron-down] {
      --uno: 'scale-50 transition-transform duration-200 op-70';
    }
    &[data-state='open'] {
      [i-nimiq\:chevron-down] {
        --uno: 'rotate-180';
      }
    }
  }

  li.link-item {
    a {
      --uno: 'flex-1 cursor-pointer whitespace-nowrap font-semibold rounded-4 transition-colors px-16 py-10 hocus:bg-darkblue/6 text-darkblue/60 hocus:text-darkblue';
    }
  }
}

header[data-scrolled='false'].dark {
  .trigger:where([data-state='open'], :hover, :focus-visible) {
    --uno: 'text-white/95';
  }
}
</style>
