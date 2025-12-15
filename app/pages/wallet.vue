<script setup lang="ts">
interface WalletPage {
  'meta'?: { title?: string, description?: string }
  'hero'?: { headline: string, subline: string, link: string }
  'wallet_playground'?: { playgroundUrl: string }
  'consensus'?: { label: string, headline: string, subline: string, thisIsYou: string, connect: string, connecting: string }
  'simple_headline'?: { headline: string, subline?: string, label?: string }
  'currency_comparison'?: { currencies: any[], feeLabel: string, timeLabel: string }
  '24_words_better_than_headline'?: { headline: string, subline?: string, label?: string }
  'grid'?: { items: any[] }
  'wallet_challenge'?: { headline: string, subheadline: string, guessTheRemainingWordsLabel: string, youDoNotStandAChanceToTake: string, rewardamount: string }
  'no_email_or_download_headline'?: { headline: string, links?: string[] }
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

      <section v-if="page.wallet_playground" dark nq-section-gap bg-darkblue scheme-dark relative>
        <ShowcaseWallet :playground-url="page.wallet_playground.playgroundUrl" />
      </section>

      <section v-if="page.consensus" dark nq-section-gap px-0 pb-0 bg-darkerblue scheme-dark relative>
        <ShowcaseConsensus :label="page.consensus.label" :headline="page.consensus.headline" :subline="page.consensus.subline" :this-is-you="page.consensus.thisIsYou" :connect="page.consensus.connect" :connecting="page.consensus.connecting" />
      </section>

      <section v-if="page.simple_headline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.simple_headline.headline" :subline="page.simple_headline.subline" :label="page.simple_headline.label" />
      </section>

      <section v-if="page.currency_comparison" nq-section-gap bg-neutral-0>
        <ShowcaseCurrency :currencies="page.currency_comparison.currencies" :fee-label="page.currency_comparison.feeLabel" :time-label="page.currency_comparison.timeLabel" />
      </section>

      <section v-if="page['24_words_better_than_headline']" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page['24_words_better_than_headline'].headline" :subline="page['24_words_better_than_headline'].subline" :label="page['24_words_better_than_headline'].label" />
      </section>

      <section v-if="page.grid?.items" nq-section-gap bg-neutral-0>
        <GridSection :items="page.grid.items.map((i: any) => ({ headline: i.content, icon: i.icon }))" />
      </section>

      <section v-if="page.wallet_challenge" dark nq-section-gap bg-darkblue scheme-dark relative>
        <ShowcaseWalletWords :headline="page.wallet_challenge.headline" :subheadline="page.wallet_challenge.subheadline" :guess-the-remaining-words-label="page.wallet_challenge.guessTheRemainingWordsLabel" :you-do-not-stand-a-chance-to-take="page.wallet_challenge.youDoNotStandAChanceToTake" :rewardamount="page.wallet_challenge.rewardamount" />
      </section>

      <section v-if="page.no_email_or_download_headline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.no_email_or_download_headline.headline" :links="page.no_email_or_download_headline.links" />
      </section>
    </main>
  </NuxtLayout>
</template>
