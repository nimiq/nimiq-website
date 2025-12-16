<script setup lang="ts">
interface WalletPage {
  'meta'?: { title?: string, description?: string }
  'hero'?: { headline: string, subline: string, link: string }
  'walletPlayground'?: { playgroundUrl: string }
  'consensus'?: { label: string, headline: string, subline: string, thisIsYou: string, connect: string, connecting: string }
  'simpleHeadline'?: { headline: string, subline?: string, label?: string }
  'currencyComparison'?: { currencies: any[], feeLabel: string, timeLabel: string }
  '24WordsBetterThanHeadline'?: { headline: string, subline?: string, label?: string }
  'grid'?: { items: any[] }
  'walletChallenge'?: { headline: string, subheadline: string, guessTheRemainingWordsLabel: string, youDoNotStandAChanceToTake: string, rewardamount: string }
  'noEmailOrDownloadHeadline'?: { headline: string, links?: string[] }
}

const { data: page } = await useAsyncData('wallet', () => queryCollection('wallet').first() as Promise<WalletPage | null>)
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = page.value.meta?.title || 'Nimiq Wallet'
const description = page.value.meta?.description || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/wallet' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/wallet' }] })
</script>

<template>
  <NuxtLayout dark-header>
    <main v-if="page">
      <section v-if="page.hero" dark text-neutral mx-0 py-0 bg-darkblue scheme-dark relative of-hidden children:max-w-none max-md:min-h-auto pt="148 md:153 lg:160" min-h="auto md:100vh">
        <HeroWallet :headline="page.hero.headline" :subline="page.hero.subline" :link="page.hero.link" />
      </section>

      <section v-if="page.walletPlayground" dark nq-section-gap bg-darkblue scheme-dark relative>
        <ShowcaseWallet :playground-url="page.walletPlayground.playgroundUrl" />
      </section>

      <section v-if="page.consensus" dark nq-section-gap px-0 pb-0 bg-darkerblue scheme-dark relative>
        <ShowcaseConsensus :label="page.consensus.label" :headline="page.consensus.headline" :subline="page.consensus.subline" :this-is-you="page.consensus.thisIsYou" :connect="page.consensus.connect" :connecting="page.consensus.connecting" />
      </section>

      <section v-if="page.simpleHeadline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.simpleHeadline.headline" :subline="page.simpleHeadline.subline" :label="page.simpleHeadline.label" />
      </section>

      <section v-if="page.currencyComparison" nq-section-gap bg-neutral-0>
        <ShowcaseCurrency :currencies="page.currencyComparison.currencies" :fee-label="page.currencyComparison.feeLabel" :time-label="page.currencyComparison.timeLabel" />
      </section>

      <section v-if="page['24WordsBetterThanHeadline']" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page['24WordsBetterThanHeadline'].headline" :subline="page['24WordsBetterThanHeadline'].subline" :label="page['24WordsBetterThanHeadline'].label" />
      </section>

      <section v-if="page.grid?.items" nq-section-gap bg-neutral-0>
        <GridSection :items="page.grid.items.map((i: any) => ({ headline: i.content, icon: i.icon }))" />
      </section>

      <section v-if="page.walletChallenge" dark nq-section-gap bg-darkblue scheme-dark relative>
        <ShowcaseWalletWords :headline="page.walletChallenge.headline" :subheadline="page.walletChallenge.subheadline" :guess-the-remaining-words-label="page.walletChallenge.guessTheRemainingWordsLabel" :you-do-not-stand-a-chance-to-take="page.walletChallenge.youDoNotStandAChanceToTake" :rewardamount="page.walletChallenge.rewardamount" />
      </section>

      <section v-if="page.noEmailOrDownloadHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.noEmailOrDownloadHeadline.headline" :links="page.noEmailOrDownloadHeadline.links" />
      </section>
    </main>
  </NuxtLayout>
</template>
