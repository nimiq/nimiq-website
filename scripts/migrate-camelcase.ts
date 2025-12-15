import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import process from 'node:process'

// Key mappings: snake_case → camelCase
const keyMappings: Record<string, string> = {
  // Standard conversions
  'buy_and_sell_banner': 'buyAndSellBanner',
  'grid_2': 'grid2',
  'pill_link': 'pillLink',
  'pill_link_2': 'pillLink2',
  'simple_headline': 'simpleHeadline',
  'tilted_media': 'tiltedMedia',
  'large_grid': 'largeGrid',
  'text_cards': 'textCards',
  'text_carousel': 'textCarousel',
  'text_carousel_2': 'textCarousel2',
  'hero_stats': 'heroStats',
  'hero_2': 'hero2',
  'staking_calculator': 'stakingCalculator',
  'staking_distribution': 'stakingDistribution',
  'staking_faq': 'stakingFaq',
  'staking_headline': 'stakingHeadline',
  'stepped_slides': 'steppedSlides',
  'wallet_challenge': 'walletChallenge',
  'wallet_playground': 'walletPlayground',
  'albatross_details': 'albatrossDetails',
  'currency_comparison': 'currencyComparison',
  'social_media': 'socialMedia',
  'app_gallery': 'appGallery',
  'blog_grid': 'blogGrid',
  'new_york': 'newYork',
  'token_distribution': 'tokenDistribution',
  'wallet_hover': 'walletHover',
  'newsletter_form': 'newsletterForm',

  // Truncated headline keys → proper camelCase
  'an_instant_zero_fee__headline': 'anInstantZeroFeeHeadline',
  'nimiq_s_mission_headline': 'nimiqsMissionHeadline',
  'meet_the_people_behi_headline': 'meetThePeopleBehindHeadline',
  'what_is_the_nimiq_pa_headline': 'whatIsTheNimiqPayHeadline',
  'one_app_to_pool_them_headline': 'oneAppToPoolThemHeadline',
  'discover_a_whole_eco_headline': 'discoverAWholeEcosystemHeadline',
  'what_is_cryptopaymen_headline': 'whatIsCryptopaymentlinkHeadline',
  'active_and_decentral_headline': 'activeAndDecentralizedHeadline',
  'so_easy_everyone_can_headline': 'soEasyEveryoneCanHeadline',
  'let_others_do_the_wo_headline': 'letOthersDoTheWorkHeadline',
  'stake_in_the_nimiq_w_headline': 'stakeInTheNimiqWalletHeadline',
  'no_download_no_perso_headline': 'noDownloadNoPersonalHeadline',
  'one_of_the_smallest__headline': 'oneOfTheSmallestHeadline',
  'no_email_or_download_headline': 'noEmailOrDownloadHeadline',
  'oasis_is_an_open_tec_headline': 'oasisIsAnOpenTechHeadline',
  'collaborate_with_nim_headline': 'collaborateWithNimiqHeadline',
  'how_does_it_work_headline': 'howDoesItWorkHeadline',
  'no_nimiq_account_yet_headline': 'noNimiqAccountYetHeadline',
  '24_words_better_than_headline': 'twentyFourWordsHeadline',
  'feedback_headline': 'feedbackHeadline',
  'get_in_touch_headline': 'getInTouchHeadline',
  'nimiq_community_apps_headline': 'nimiqCommunityAppsHeadline',
  'roadmap_headline': 'roadmapHeadline',
  'buy_nim_in_the_walle_headline': 'buyNimInTheWalletHeadline',
  'super_simple_super_s_headline': 'superSimpleSuperSecureHeadline',
  'implement_supersimpl_headline': 'implementSupersimpleswapHeadline',
  'events_meetups_headline': 'eventsMeetupsHeadline',
}

async function migrateFile(filepath: string) {
  let content = await readFile(filepath, 'utf-8')
  let modified = false

  for (const [oldKey, newKey] of Object.entries(keyMappings)) {
    // Replace in frontmatter (top-level keys)
    const frontmatterRegex = new RegExp(`^${oldKey}:`, 'gm')
    if (frontmatterRegex.test(content)) {
      content = content.replace(frontmatterRegex, `${newKey}:`)
      modified = true
    }

    // Replace in MDC component references
    const mdcRegex = new RegExp(`\\{:${oldKey}\\}`, 'g')
    if (mdcRegex.test(content)) {
      content = content.replace(mdcRegex, `{:${newKey}}`)
      modified = true
    }
  }

  if (modified) {
    await writeFile(filepath, content, 'utf-8')
    console.log(`✓ ${filepath}`)
    return true
  }
  return false
}

async function main() {
  const contentDir = join(process.cwd(), 'content')

  // Process root .md files
  const rootFiles = await readdir(contentDir)
  const mdFiles = rootFiles.filter(f => f.endsWith('.md'))

  let count = 0
  for (const file of mdFiles) {
    if (await migrateFile(join(contentDir, file)))
      count++
  }

  console.log(`\nMigrated ${count} files to camelCase`)
}

main()
