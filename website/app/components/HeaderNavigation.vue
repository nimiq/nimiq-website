<script setup lang="ts">
import { NavigationMenu } from 'radix-vue/namespaced'
import type { NavigationDocumentData } from '~~/prismicio-types'
import { SocialMedia } from '~/stores/global-content'

// @unocss-include

const props = defineProps<{ navigation: NavigationDocumentData, isTriggerColorInverted: boolean }>()

const currentTrigger = ref('')
const selectedApp = ref(0)

const { socialMedias } = storeToRefs(useGlobalContent())

const internalProjectLinks = computed(() => props.navigation.projectLinks.length
  ? props.navigation.projectLinks.filter(link => link.href.link_type === 'Document')
  : [])
const externalProjectLinks = computed(() => props.navigation.projectLinks.length
  ? props.navigation.projectLinks.filter(link => link.href.link_type === 'Web')
  : [])
</script>

<template>
  <NavigationMenu.Root v-model="currentTrigger" relative items-center justify-end>
    <NavigationMenu.List flex="~ items-center gap-x-32 justify-between" :class="isTriggerColorInverted ? 'text-white' : 'text-neutral'">
      <!-- Apps -->
      <NavigationMenu.Item v-if="navigation.appsGroupName && navigation.appsLinks.length">
        <NavigationMenu.Trigger bg-transparent font-bold opacity-50 transition-opacity hover:opacity-80 class="data-[state='open']:opacity-80">
          {{ navigation.appsGroupName }}
        </NavigationMenu.Trigger>
        <NavigationMenu.Content class="navigation-menu" absolute left-0 top-0 min-w-max>
          <div>
            <div flex gap-20 px-20 py-32>
              <ul :aria-label="`${navigation.appsGroupName} links`" role="link" w-max flex flex-col>
                <li
                  v-for="({ label, href, logo }, index) in navigation.appsLinks"
                  :key="label!"
                  w-full
                  @focus="selectedApp = index" @mouseover="selectedApp = index"
                >
                  <NavigationMenu.Link as-child>
                    <ArrowLink
                      :href="href" :label="label"
                      class="w-full flex items-center gap-16 whitespace-nowrap rounded-4 bg-white px-16 pb-10 pt-14 font-semibold opacity-50 transition-colors transition-opacity hocus:bg-neutral/5 hocus:opacity-80"
                    >
                      <prismic-image :field="logo" h-24 transition-opacity :class="index === selectedApp ? 'opacity-100' : 'opacity-20'" />
                    </ArrowLink>
                  </NavigationMenu.Link>
                </li>
              </ul>

              <prismic-image v-if="navigation.appsLinks[selectedApp]?.visual" :field="navigation.appsLinks[selectedApp]!.visual" class="relative h-full w-[300px] rounded-4 object-contain object-left-top shadow" />
            </div>
            <!-- Footer -->
            <div v-if="navigation.howToTitle && navigation.howToLinks.length" bg-neutral-200 px-40 py-32>
              <p v-if="navigation.howToTitle" whitespace-nowrap text-12 font-bold lh-none uppercase opacity-50>
                {{ navigation.howToTitle }}
              </p>

              <ul role="list" :aria-label="`${navigation.howToTitle} links`" mt-18 flex flex-wrap gap-x-32>
                <li v-for="(link, index) in navigation.howToLinks" :key="`how-to-link-${index}`">
                  <NavigationMenu.Link as-child>
                    <ArrowLink
                      v-if="link.label && link.href"
                      :href="link.href"
                      :label="link.label"
                      has-arrow
                      class="w-full font-semibold opacity-50 transition-opacity hocus:opacity-80"
                    />
                  </NavigationMenu.Link>
                </li>
              </ul>
            </div>
          </div>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <!-- Tech -->
      <NavigationMenu.Item v-if="navigation.techGroupName && navigation.techLinks.length">
        <NavigationMenu.Trigger bg-transparent font-bold opacity-50 transition-opacity hover:opacity-80 class="data-[state='open']:opacity-80">
          {{ navigation.techGroupName }}
        </NavigationMenu.Trigger>
        <NavigationMenu.Content class="navigation-menu" absolute left-0 top-0 min-w-max>
          <div>
            <ul :aria-label="`${navigation.techGroupName} links`" role="link" border-space-20 grid grid-cols-2 gap-x-8 border-b-1 p-24>
              <li
                v-for="({ label, href }) in navigation.techLinks"
                :key="label!"
                w-full
              >
                <NavigationMenu.Link as-child>
                  <ArrowLink
                    :href="href" :label="label"
                    class="w-full flex items-center whitespace-nowrap rounded-4 bg-white px-16 pb-10 pt-14 font-semibold opacity-50 transition-colors transition-opacity hocus:bg-neutral/5 hocus:opacity-80"
                  />
                </NavigationMenu.Link>
              </li>
            </ul>
            <!-- Footer -->
            <div flex="~ items-center justify-between gap-x-20" px-32 py-20>
              <PrismicLink v-if="socialMedias.github" :field="socialMedias.github.link" flex="~ items-center gap-12" un-text="15 neutral-800" pr-4 nq-arrow after:ml--4>
                <div :class="socialMedias.github.icon" text-20 />
                {{ navigation.githubLinkLabel }}
              </PrismicLink>
              <div ml-auto w-1 self-stretch bg-neutral-600 />
              <SocialMediaLogosList flex-nowrap :items="[SocialMedia.reddit, SocialMedia.discord, SocialMedia.telegram]" />
            </div>
          </div>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <!-- Community -->
      <NavigationMenu.Item v-if="navigation.communityGroupName && navigation.communityLinks.length">
        <NavigationMenu.Trigger bg-transparent font-bold opacity-50 transition-opacity hover:opacity-80 class="data-[state='open']:opacity-80">
          {{ navigation.communityGroupName }}
        </NavigationMenu.Trigger>
        <NavigationMenu.Content class="navigation-menu" absolute left-0 top-0 min-w-max>
          <div grid grid-cols-1 max-w-6xl p-16>
            <ul :aria-label="`${navigation.communityGroupName} links`" role="link" border-space-20 flex flex-col border-b-1 pb-32>
              <li
                v-for="({ label, href }) in navigation.communityLinks"
                :key="label!"
                w-full
              >
                <NavigationMenu.Link as-child>
                  <ArrowLink
                    :href="href" :label="label"
                    class="w-full flex items-center whitespace-nowrap rounded-4 bg-white px-16 pb-10 pt-14 font-semibold opacity-50 transition-colors transition-opacity hocus:bg-neutral/5 hocus:opacity-80"
                  />
                </NavigationMenu.Link>
              </li>
            </ul>
            <!-- Footer -->
            <SocialMediaLogosList mt-16 :items="[SocialMedia.x, SocialMedia.reddit, SocialMedia.facebook, SocialMedia.youtube, SocialMedia.instagram, SocialMedia.discord, SocialMedia.telegram, SocialMedia.nimiqForum, SocialMedia.github]" />
          </div>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <!-- Project -->
      <NavigationMenu.Item v-if="navigation.projectGroupName && internalProjectLinks.length">
        <NavigationMenu.Trigger bg-transparent font-bold opacity-50 transition-opacity hover:opacity-80 class="data-[state='open']:opacity-80">
          {{ navigation.projectGroupName }}
        </NavigationMenu.Trigger>
        <NavigationMenu.Content class="navigation-menu" absolute left-0 top-0 min-w-max>
          <ul :aria-label="`${navigation.projectGroupName} internal links`" role="link" border-space-20 flex flex-col border-b-1 p-24>
            <li
              v-for="({ label, href }) in internalProjectLinks"
              :key="label!"
              w-full
            >
              <NavigationMenu.Link as-child>
                <ArrowLink
                  :href="href" :label="label"
                  class="w-full flex items-center whitespace-nowrap rounded-4 bg-white px-16 pb-10 pt-14 font-semibold opacity-50 transition-colors transition-opacity hocus:bg-neutral/5 hocus:opacity-80"
                />
              </NavigationMenu.Link>
            </li>
          </ul>
          <!-- Footer -->
          <ul
            v-if="externalProjectLinks.length"
            :aria-label="`${navigation.projectGroupName} internal links`" role="link"
            flex flex-col
          >
            <li
              v-for="({ label, href }) in externalProjectLinks"
              :key="label!"
              w-full
            >
              <NavigationMenu.Link as-child>
                <ArrowLink
                  :href="href" :label="label"
                  class="w-full flex items-center whitespace-nowrap rounded-4 bg-white px-16 pb-10 pt-14 font-semibold opacity-50 transition-colors transition-opacity hocus:bg-neutral/5 hocus:opacity-80"
                />
              </NavigationMenu.Link>
            </li>
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <!-- Extra links -->
      <ArrowLink
        v-for="({ label, href }) in navigation.extraHeaderLinks"
        :key="label!"
        :href="href" :label="label"
        class="w-full flex items-center gap-16 whitespace-nowrap rounded-4 bg-white px-16 pb-10 pt-14 font-semibold lh-[1] opacity-50 transition-colors transition-opacity hocus:bg-neutral/5 hocus:opacity-80"
      />

      <!-- Get started -->
      <NavigationMenu.Item v-if="navigation.getStartedGroupName && navigation.getStartedLinks.length">
        <NavigationMenu.Trigger
          px-16 py-4 text-16 font-semibold transition-colors
          :class="isTriggerColorInverted
            ? 'data-[state=\'open\']:bg-white/20 bg-white/10 nq-pill focus:bg-white/20'
            : 'data-[state=\'open\']:bg-gradient-blue-darkened nq-pill-blue focus:bg-gradient-blue-darkened'
          "
        >
          {{ navigation.getStartedGroupName }}
        </NavigationMenu.Trigger>
        <NavigationMenu.Content class="navigation-menu" absolute left-0 top-0 min-w-max>
          <ul :aria-label="`${navigation.getStartedGroupName} links`" role="link" grid grid-cols-3 p-16>
            <li
              v-for="({ label, href, description }) in navigation.getStartedLinks"
              :key="label!"
              max-w-240 w-full
            >
              <NavigationMenu.Link as-child>
                <ArrowLink
                  :href="href" :label="label"
                  class="w-full flex flex-col-reverse rounded-4 bg-white p-24 font-semibold opacity-60 transition-colors transition-opacity hocus:bg-neutral/5 hocus:opacity-100"
                >
                  <div mt-16 text-14 font-normal opacity-70 transition-opacity>
                    {{ description }}
                  </div>
                </ArrowLink>
              </NavigationMenu.Link>
            </li>
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Indicator class="indicator" top-full z-100 h-16 flex items-end justify-center overflow-hidden>
        <!-- <div border-space i-nimiq:tooltip-triangle text-white shadow /> -->
      </NavigationMenu.Indicator>
    </NavigationMenu.List>

    <div absolute right-0 top-full w-screen perspective-2000 flex="~ justify-end">
      <NavigationMenu.Viewport
        class="viewport"
        relative mt-20 origin-top-center overflow-hidden rounded-6 bg-neutral-0 shadow duration-300
      />
    </div>
  </NavigationMenu.Root>
</template>

<style>
header nav {
  [i-nimiq\:chevron-down] {
    --uno: text-9 transition-transform duration-250;
  }

  :is([data-state='open']) [i-nimiq\:chevron-down] {
    transform: rotate(180deg);
  }

  .navigation-menu {
    &:is([data-motion='from-start']) {
      animation: enterFromLeft 250ms var(--nq-ease, ease);
    }

    &:is([data-motion='from-end']) {
      animation: enterFromRight 250ms var(--nq-ease, ease);
    }

    &:is([data-motion='to-start']) {
      animation: exitToLeft 250ms var(--nq-ease, ease);
    }

    &:is([data-motion='to-end']) {
      animation: exitToRight 250ms var(--nq-ease, ease);
    }
  }

  .indicator {
    transition: all 250ms var(--nq-ease, ease);

    &:is([data-state='hidden']) {
      opacity: 0;
      animation: fadeOut 200ms var(--nq-ease, ease);
    }

    &:is([data-state='visible']) {
      animation: fadeIn 200ms var(--nq-ease, ease);
    }
  }

  .viewport {
    transition:
      height 300ms var(--nq-ease, ease),
      width 300ms var(--nq-ease, ease);
    height: var(--radix-navigation-menu-viewport-height);
    width: 100%;

    @screen sm {
      width: var(--radix-navigation-menu-viewport-width);
    }

    &:is([data-state='open']) {
      animation: scaleIn 200ms var(--nq-ease, ease);
    }

    &:is([data-state='close']) {
      animation: scaleOut 200ms var(--nq-ease, ease);
    }
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

@keyframes exitToRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(200px);
  }
}

@keyframes exitToLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(-200px);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }

  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
}

@keyframes scaleOut {
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }

  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
