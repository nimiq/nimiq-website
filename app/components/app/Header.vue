<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { Motion } from 'motion-v'
import { DrawerContent, DrawerOverlay, DrawerPortal, DrawerRoot, DrawerTrigger } from 'vaul-vue'

defineProps<{ darkHeader?: boolean }>()

const { data: site } = await useAsyncData('site', () => queryCollection('site').first())
const announcement = computed(() => {
  const a = site.value?.announcement
  if (!a)
    return null
  const now = new Date()
  if (new Date(a.since) > now || new Date(a.until) < now)
    return null
  return a
})

const { y } = useScroll(window)

const scrolled = computed(() => y.value > 0)
const direction = ref<'top' | 'bottom'>()
watch(y, (newY, oldY) => {
  if (Math.abs(newY - oldY) < 10)
    return
  direction.value = newY < oldY ? 'top' : 'bottom'
})

// Animation targets for motion-v
const animateProps = computed(() => ({
  opacity: scrolled.value && direction.value === 'bottom' ? 0 : 1,
  backgroundColor: scrolled.value && direction.value === 'top' ? 'white' : 'transparent',
  boxShadow: scrolled.value && direction.value === 'top' ? '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' : '0 0 0 0 transparent',
}))

// Additional styles that need conditional application
const conditionalClasses = computed(() => ({
  'pointer-events-none': scrolled.value && direction.value === 'bottom',
}))

// Transition configuration for motion-v - optimized for performance
const transitionProps = computed(() => ({
  default: { type: 'tween', ease: 'easeInOut' } as const,
  opacity: {
    duration: 0.2,
    ease: 'easeInOut' as const,
  },
  backgroundColor: {
    duration: 0.2,
    ease: 'easeInOut' as const,
    delay: direction.value === 'bottom' ? 0.05 : 0,
  },
  boxShadow: {
    duration: 0.1,
    ease: 'easeOut' as const,
    delay: y.value === 0 && direction.value === 'top' ? 0.2 : 0,
  },
}))

// Desktop navigation
const route = useRoute()
const isHome = route.fullPath === '/'

// Mobile navigation
const copyrightNotice = computed(() => site.value?.footer.copyright ?? '')
</script>

<template>
  <Motion
    as="header"
    flex="~ items-center justify-between gap-x-20" mx-16 mb-32 mt-16 p-16 rounded-8 inset-x-16 top-16 fixed sticky z-100
    :class="{
      dark: !scrolled && darkHeader,
      ...conditionalClasses,
    }"
    :animate="animateProps"
    :transition="transitionProps"
    :data-scrolled="scrolled ? 'true' : 'false'"
  >
    <NuxtLink to="/" aria-label="Nimiq homepage">
      <div class="dark:i-nimiq:logos-nimiq-white-horizontal" text-24 i-nimiq:logos-nimiq-horizontal />
    </NuxtLink>
    <NuxtLink v-if="announcement" :to="announcement.href" bg="neutral/15 hocus:neutral/20" :class="{ 'children:delay-200': direction === 'bottom' }" external text-neutral mr-auto gap-x-9 truncate nq-pill children:transition-colors>
      <div shrink-0 i-nimiq:flame />
      <span text-neutral truncate>{{ announcement.text }}</span>
    </NuxtLink>

    <!-- Mobile Navigation (inlined) -->
    <DrawerRoot class="lg:hidden" should-scale-background>
      <DrawerTrigger bg-transparent aria-label="Links menu">
        <div opacity-50 hocus:opacity-60 class="scale-x--100 i-nimiq:hamburger-menu" :class="{ 'text-white': false }" />
      </DrawerTrigger>

      <DrawerPortal>
        <DrawerOverlay class="bg-neutral/40 inset-0 fixed" />
        <DrawerContent class="mt-24 p-24 rounded-t-10 bg-white flex flex-col h-full max-h-90dvh bottom-0 left-0 right-0 fixed z-100">
          <div class="mx-auto mb-32 rounded-full bg-gray-300 flex-shrink-0 h-4 w-80" />
          <div class="mb-16 flex gap-20">
            <NuxtLink to="https://wallet.nimiq.com" nq-pill-secondary>
              Nimiq Wallet
            </NuxtLink>
            <NuxtLink to="/nimiq-pay" nq-arrow nq-pill-blue>
              Nimiq Pay
            </NuxtLink>
          </div>
          <div of-x-hidden of-y-auto>
            <AccordionRoot class="mt-16 opacity-60" type="single" :collapsible="true">
              <template v-for="({ links, label }) in site?.navigation" :key="label">
                <DropdownMenuSeparator v-if="links.length" bg-neutral-300 h-1 />

                <AccordionItem v-if="links.length" py-8 of-hidden :value="label as string">
                  <AccordionHeader>
                    <AccordionTrigger outline-none leading-none px-5 bg-white flex flex-1 gap-x-8 h-45 cursor-default items-center>
                      <span text-12 uppercase>{{ label }}</span>
                      <div class="text-10 text-neutral transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] i-nimiq:chevron-down group-data-[state=open]:rotate-180" />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent class="mobile-content" of-hidden>
                    <NuxtLink v-for="({ text, href }, j) in links" :key="j" :to="href" flex="~ items-center gap-16" font-semibold px-16 pb-10 pt-14 rounded-4 bg-white w-full whitespace-nowrap>
                      {{ text }}
                    </NuxtLink>
                  </AccordionContent>
                </AccordionItem>
              </template>
            </AccordionRoot>

            <hr mb-32 bg-neutral-300 h-1 w-full>

            <UiSocialMediaLogosList v-if="site?.socials" text-18 :items="site.socials" />

            <div text="neutral-800 hocus:neutral-900" transition-colors f-mt-md flex="~ gap-16 items-center">
              <NuxtLink to="/privacy-policy" class="font-semibold op-60 hocus:op-90">
                Privacy Policy
              </NuxtLink>
              <div aria-hidden rounded-full bg-current op-40 size-4 />
              <NuxtLink to="/cookie-policy" class="font-semibold op-60 hocus:op-90">
                Cookie Policy
              </NuxtLink>
            </div>

            <p text-neutral-600 f-mt-md>
              {{ copyrightNotice }}
            </p>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </DrawerRoot>

    <!-- Desktop Navigation (inlined, lazy-loaded) -->
    <ClientOnly>
      <NavigationMenuRoot v-if="site?.navigation" class="header-nav hidden lg:flex" relative :delay-duration="35">
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
              <ul :aria-label="`${group.label} links`" p-24 flex="~ col">
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

          <NavigationMenuIndicator
            animate="data-visible:fade-in data-hidden:fade-out"
            transition="all transform ease duration-200" w="$reka-navigation-menu-indicator-size"
            flex="~ items-end justify-center" translate-x="$reka-navigation-menu-indicator-position" duration-200 top-full
            absolute z-100 z-12 of-hidden data-hidden:op-0
          >
            <div text-neutral-200 h-12 w-24 translate-y-1 relative i-nimiq:tooltip-triangle />
          </NavigationMenuIndicator>
        </NavigationMenuList>

        <div flex="~ justify-center" min-w-full perspective-2000 right-0 top-full absolute z-10>
          <NavigationMenuViewport
            transition="[width,height]" h="$reka-navigation-menu-viewport-height"
            animate="scale-in data-closed:scale-out" min-w="$reka-navigation-menu-viewport-width" mt-12 rounded-12 bg-white
            shadow origin-top-center duration-200 relative z-1 of-hidden animate-scale-in
            outline="1.5 ~ neutral-200"
          />
        </div>
      </NavigationMenuRoot>
    </ClientOnly>
  </Motion>
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

<style scoped>
/* Mobile navigation styles */
.mobile-content {
  &:is([data-state='open']) {
    animation: slideDown 300ms var(--nq-ease, ease);
  }

  &:is([data-state='closed']) {
    animation: slideUp 300ms var(--nq-ease, ease);
  }
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: 'var(--reka-accordion-content-height)';
  }
}

@keyframes slideUp {
  from {
    height: 'var(--reka-accordion-content-height)';
  }
  to {
    height: 0;
  }
}
</style>
