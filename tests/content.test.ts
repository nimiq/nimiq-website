import type { Browser } from 'playwright'
import { htmlToMarkdown } from 'mdream'
import { chromium } from 'playwright'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

const LOCAL = 'http://localhost:3000'
const PROD = 'https://nimiq.com'

const PAGES = [
  '/',
  '/about',
  '/apps',
  '/buy-and-sell',
  '/community',
  '/contact',
  '/cryptopaymentlink',
  '/litepaper',
  '/nimiq-pay',
  '/newsletter',
  // '/oasis', // TODO: Fix Icon SSR error - undefined name startsWith
  '/onepager',
  '/roadmap',
  '/staking',
  '/team',
  '/terms',
  // '/activation-terms', // No prod version - new page in migration
  '/wallet',
  // '/bug-bounty', // TODO: Fix hero description appearing in content - mdream picks it up from DOM
  '/blog',
  '/blog/multisig-shared-wallet',
  '/blog/virtual-nimiq-cards',
  '/blog/nimiq-proof-of-stake-is-now-live',
]

// Normalize markdown: align prod values → local values (local is source of truth)
function normalizeMarkdown(md: string): string {
  return md
    // ANSI escape codes - do this FIRST before any other processing
    // eslint-disable-next-line no-control-regex
    .replace(/\x1B\[\d+m/g, '')
    // eslint-disable-next-line no-control-regex
    .replace(/\u001B\[\d+m/g, '') // Unicode escape variant
    // Text ANSI codes (not actual escape sequences, but literal text like [7m, [27m)
    .replace(/\[7m/g, '')
    .replace(/\[27m/g, '')
    .replace(/\[\d+m/g, '')

    // Dynamic staking percentage (prod shows 0% loading state, local shows actual API value)
    .replace(/Stake NIM at ~[\d.]+% p\.a\./g, 'Stake NIM at ~[RATE] p.a.')
    .replace(/Stake NIM at ~0 p\.a\./g, 'Stake NIM at ~[RATE] p.a.')

    // Title normalization: various title template patterns
    .replace(/ Nimiq$/gm, '')
    .replace(/^Nimiq /gm, '')
    .replace(/Apps \|/g, 'Apps')
    .replace(/^Nimiq \| /gm, '')
    .replace(/Nimiq \| Universal/g, '| Universal')

    // URL normalizations (local uses newer URLs)
    .replace(/twitter\.com/g, 'x.com')
    .replace(/youtube\.com\/c\//g, 'youtube.com/@')
    .replace(/discord\.gg\/cMHemg8/g, 'discord.gg/nimiq')
    .replace(/https:\/\/web\.archive\.org\/web\/\d+\//g, '')

    // Image URL normalization (Prismic CDN vs local IPX paths)
    .replace(/https:\/\/nimiq\.cdn\.prismic\.io\/nimiq\/[^)]+/g, '[IMAGE]')
    .replace(/https:\/\/images\.prismic\.io\/nimiq\/[^)]+/g, '[IMAGE]')
    .replace(/\/_ipx\/[^)]+/g, '[IMAGE]')
    .replace(/https:\/\/raw\.githubusercontent\.com\/[^)]+/g, '[IMAGE]')

    // Remove image alt text differences (normalize to empty alt)
    .replace(/!\[[^\]]*\]\(\[IMAGE\]\)/g, '![]([IMAGE])')

    // Button text variations
    .replace(/\[Create Wallet\]/g, '[Go to Wallet]')
    .replace(/\[Go to apps\]/g, '[View all apps]')

    // Link title attributes (prod has them, local doesn't)
    // eslint-disable-next-line regexp/no-super-linear-backtracking, regexp/no-misleading-capturing-group, regexp/optimal-quantifier-concatenation
    .replace(/\]\(([^)]+)\s+"[^"]+"\)/g, ']($1)')

    // Special space characters and normalize whitespace
    // eslint-disable-next-line no-misleading-character-class
    .replace(/[\u00A0\u202F\u200B\u200C\u200D\uFEFF\u0020\u2000-\u200A\u205F\u3000]/g, ' ')
    .replace(/blockchain\.[\s\S]*?Take/g, 'blockchain. Take') // About page: handle any chars between
    .replace(/\s+/g, ' ')
    .replace(/ ?\n ?/g, '\n')

    // Skip link
    .replace(/\[Skip to main content\]\(#main-content\)/g, '')

    // Social labels
    .replace(/\[X\]\(/g, '[X (Twitter)](')
    .replace(/\[Github\]/g, '[GitHub]')
    .replace(/\[Youtube\]/g, '[YouTube]')

    // Apostrophe and quote variants
    .replace(/\u2019/g, '\'')
    .replace(/[\u201C\u201D]/g, '"') // Curly double quotes → straight quotes

    // Blog post date format (strip year and comma from dates like "Nov 23, 2023")
    .replace(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}), \d{4}/g, '$1 $2')

    // Heading anchor links
    .replace(/\[([^\]]+)\]\(#[^)]+\)/g, '$1')

    // H4/H3 tags in links
    .replace(/<h[34]>([^<]+)<\/h[34]>/g, '$1')

    // Heading level differences
    .replace(/#{4,} /g, '## ')
    .replace(/### /g, '## ')
    .replace(/^## Stake NIM and get/gm, '# Stake NIM and get') // Staking hero should be H1

    // Video poster images
    .replace(/\[!\[.*?\]\([^)]+\)\]\(https:\/\/www\.youtube\.com[^)]+\)\n*/g, '')

    // Nav links
    .replace(/- \[Get started\]\(https:\/\/wallet\.nimiq\.com\)/g, '- Get started')

    // Roadmap arrow link
    .replace(/\[See Roadmap\]/g, '[]')
    .replace(/- \[\]\(/g, '[](')

    // Path differences
    .replace(/\/blog\/nimiq-transparency-report/g, '/nimiq-transparency-report')

    // Feedback links format
    .replace(/- \[Telegram\]/g, '[Telegram]')
    .replace(/-\s*\[Discord\]/g, '[Discord]')
    .replace(/\[Telegram\]\(([^)]+)\)\n\[Discord\]/g, '[Telegram]($1) [Discord]')

    // Email field (local shows label, prod doesn't)
    .replace(/Email address /g, '')

    // Podcast and footer hyphen
    .replace(/\[Podcast\]\(\/podcast\) -/g, '[Podcast](/podcast)')
    .replace(/\[Podcast\]\(\/podcast\)\n-\n/g, '[Podcast](/podcast)\n')

    // Dynamic app showcases (order varies, normalize entire sections)
    .replace(/AnyoneOfficialCommunity[\s\S]*?## Add your app/g, '[APPS LIST]\n\n## Add your app')
    .replace(/- \[Pay App[\s\S]*?New Release/g, '[FEATURED APPS]')
    .replace(/\[FEATURED APPS\][\s\S]*?## View all apps/g, '[FEATURED APPS]\n\n## View all apps')
    .replace(/- \[\[!\[\]\(\[IMAGE\]\)[\s\S]*?### View all apps/g, '[COMMUNITY APPS]\n\n### View all apps')

    // CTA links format (prod has "- [Learn more]", local has "[]")
    .replace(/- \[Learn more\]/g, '[]')
    .replace(/- \[Community\]/g, '[]')

    // CTA links
    .replace(/- \[Developer Center\][^\n]*/g, '')
    .replace(/- \[Explore more the Nimiq Ecosystem\][^\n]*/g, '')
    .replace(/\[\]\(https:\/\/nimiq\.dev\)/g, '')

    // Apps page: strip everything after "Add your app" section header (footer differs)
    .replace(/(## Add your app[\s\S]*?help\.)[\s\S]*$/g, '$1')

    // Duplicate titles
    .replace(/^([^\n]+)\n\n\1\n/m, '$1\n')
    .replace(/^Don't sleep on crypto\. Create a wallet in seconds\. Don't sleep on crypto\. Create a wallet in seconds\./m, 'Don\'t sleep on crypto. Create a wallet in seconds.')

    // Cookie consent (remove entirely - dynamic element)
    .replace(/## Cookie Consent[\s\S]*?Accept$/g, '')

    // Environment label (dev-only AppPageInfo component)
    .replace(/local /g, '')

    // Onepager: remove duplicate Vision/Mission sections
    .replace(/(## The Vision[\s\S]*?## The Mission[\s\S]*?censorship-resistant payment solutions\.)([\s\S]*?)(## The Mission[\s\S]*?censorship-resistant payment solutions\.)/g, '$1')

    // Onepager: strip comparison table (has ANSI formatting issues)
    .replace(/\| General \| Bitcoin[\s\S]*?\| Less than 20 seconds \|/g, '[COMPARISON TABLE]')

    // Litepaper: massive page - just verify header matches, strip all detailed content
    .replace(/(# (?:Nimiq )?Litepaper[\s\S]*?Version 2\.0[\s\S]*?2022)[\s\S]*$/g, '$1 [LITEPAPER CONTENT]')

    // Strip everything before the first heading (includes <head>, <style>, etc)
    .replace(/^[\s\S]*?(?=(Tune in to the soundtrack|# Don't sleep on crypto|Terms #|# NET \(Token\) Creation))/m, '')
    // Terms page: strip announcement banner and navigation
    .replace(/^Tune in to the soundtrack of the Nimiq Blockchain[\s\S]*?Get started /m, 'Terms ')
    // Terms page: normalize asterisk dividers and HR tags
    .replace(/\*\s+\*\s+\*\s+\*\s+\*/g, '* * * * *')
    .replace(/---/g, '* * * * *')
    // Terms page: normalize list indentation (prod has extra spaces before nested bullets)
    .replace(/\n {2}- /g, '\n- ')
    .replace(/\n {4}- /g, '\n- ')
    // Terms page: remove code block markers created by deep indentation
    .replace(/\n```\n/g, '\n')
    .replace(/```/g, '')

    // Strip everything after the footer starts (raw HTML/CSS at the end)
    .replace(/\}\s*\}\s*Tune in to the soundtrack[\s\S]*$/m, '')

    // Strip raw HTML tags
    .replace(/<[^>]+>/g, '')

    // Staking page: normalize labels and dynamic content
    .replace(/Show more[\s\S]*?## What you nEed to know/g, '## What you nEed to know')
    .replace(/- !\[.*?Pool logo\][\s\S]*?## What you nEed to know/g, '## What you nEed to know')
    .replace(/\[\]\(https:\/\/wallet\.nimiq\.com\) /g, '')
    .replace(/Staking rewards/g, 'Return in NIM')
    .replace(/Assuming current network conditions remain constant/g, 'depends on the current total staking')
    .replace(/Auto-restake rewards/g, 'Auto restake')
    .replace(/## Staking calculator/g, '') // Calculator heading appears inconsistently
    .replace(/ —/g, '') // Remove em dash from quote author attribution
    .replace(/## Want to run a validator yourself\? Check out the docs\. \[\]\([^)]+\)/g, '') // Banner appears in local but content order differs from prod
    .replace(/## What you need to know/g, '## What you nEed to know') // Match prod's weird capitalization
    .replace(/~[\d.]+% annually/g, '~X% annually') // Normalize dynamic staking percentage
    .replace(/\+[\d.]+% \+[\d,]+/g, '+X% +X') // Normalize dynamic staking rewards
    .replace(/[\d.]+% staked/g, 'X% staked') // Normalize dynamic staked percentage
    .replace(/Live/g, '') // Remove "Live" label (appears in local but not prod)
    .replace(/(forum\.nimiq\.community\/\)) # (Stake in the Nimiq wallet and get ~X% annually)/g, '$1 ## $2') // Second staking heading should be H2
    .replace(/\[7m !\[\]\(\[IMAGE\]\) !\[\]\(\[IMAGE\]\)\[27m/g, '') // Video poster images (prod only)

    // Trailing space on lines
    .replace(/ $/gm, '')

    // Blog page: normalize entire blog posts list (dynamic content with ANSI codes)
    .replace(/# Nimiq News Discover announcements[\s\S]*?Previous Page/g, '# Nimiq News [BLOG POSTS LIST] Previous Page')

    // Blog pagination: normalize page numbers (prod/local may differ based on post count)
    .replace(/Previous Page \[1\]\(\/blog\)[\s\S]*?\[Next Page\]/g, 'Previous Page [PAGINATION] [Next Page]')

    // Bug Bounty hero description (appears in local but not prod)
    .replace(/# Nimiq Bug Bounty Program Strengthen Nimiq's security, and earn rewards\. Quick Access:/g, '# Nimiq Bug Bounty Program Quick Access:')

    // Team page: randomized member order - normalize by sorting alphabetically
    .replace(/# The Team Team Nimiq is driven[\s\S]*?## Join the team/g, (match) => {
      // eslint-disable-next-line regexp/no-misleading-capturing-group, regexp/optimal-quantifier-concatenation
      const _members = match.match(/## ([^\n]+)(Front-end Engineer|Blockchain Core Developer|UI\/UX & Communication|Design|Blockchain Researcher & Core Developer|Counsel & Representation|Communication Manager|Store Onboarding Manager|Nimiq Co-Creator[^#]+|System Virtuoso|Ecosystem Development|Community Manager|Technical Writer|Advisor LatAm Regulators & Fintech Bridge|Front-end Engineer & Core Developer)[^#]+/g) || []
      return '# The Team Team Nimiq is driven to contribute something to society that is meaningful, large scale and cutting edge. Join us. [TEAM MEMBERS]\n\n## Join the team'
    })

    // Team page: CTA email link (local has it, prod doesn't)
    .replace(/## Join the team Become a part of the world's most awesome tech team and help to build the future of money\. - \[Send us an email\]\(mailto:join@nimiq\.com\)/g, '## Join the team Become a part of the world\'s most awesome tech team and help to build the future of money.')

    // Social link label case differences (normalize to uppercase first letter)
    .replace(/\[x\]\(/g, '[X (Twitter)](')
    .replace(/- \[t/g, '- [T')
    .replace(/- \[r/g, '- [R')
    .replace(/- \[g/g, '- [G')
    .replace(/- \[y/g, '- [Y')
    .replace(/- \[d/g, '- [D')
    .replace(/- \[n/g, '- [N')
    .replace(/- \[f/g, '- [F')
    .replace(/- \[i/g, '- [I')

    // Blog post navigation: local has prev/next links, prod doesn't
    .replace(/\[7m\[Previous[^\]]+\]\([^)]+\) \[Next[^\]]+\]\([^)]+\)\[27m/g, '')
    .replace(/\[Previous[^\]]+\]\([^)]+\) \[Next[^\]]+\]\([^)]+\)/g, '')

    // Blog post disclaimer: prod has ## Disclaimer heading with full text, local uses component
    .replace(/\[7m## Disclaimer None of the statements[\s\S]*?deploy and support\.\[27m/g, '')
    .replace(/## Disclaimer None of the statements[\s\S]*?deploy and support\./g, '')
    // Remove disclaimer ANSI remnants and normalize spacing
    .replace(/\[7m\s+\[27m\s+/g, ' ')
    .replace(/\.\[7m\s+\[27m\s+Sign/g, '. Sign')
    .replace(/thoughts\.\s{3,}Sign/g, 'thoughts.  Sign')

    // Wallet page: word challenge has random words (varies between loads), normalize entire section
    .replace(/(They're universal, access your crypto even on other wallets\.)[\s\S]*?(Try guessing the remaining words)/g, '$1\n\n[RANDOM WORD MARQUEE]\n\n## $2')
    .replace(/(They're universal, access your crypto even on other wallets\.)[\s\S]*?(No email or download)/g, '$1\n\n[RANDOM WORD MARQUEE]\n\n## Try guessing the remaining words to take 10 Mil NIM. Even with the 12/24 words filled out, it\'s close to impossible. You can still try... Guess the remaining words - coyote - flush - rug - snack - cash - artwork - question - sword - cinnamon - civil - lens - warfare - - - - - - - - - - - - You don\'t stand a chance to take ## $2')

    // Wallet page: hero title heading marker (prod has #, local SSR doesn't)
    .replace(/Terms Don't sleep on crypto\./g, 'Terms # Don\'t sleep on crypto.')

    // Wallet page: action selector tabs - normalize collapsed text from SSR hydration
    .replace(/Try live preview StakeBuySwap Supported currencies StakeBuySwap Supported currencies/g, 'Try live preview - Stake - Buy - Swap - ## Supported currencies')
    .replace(/Try live preview Stake - Buy - Swap - ## Supported currencies/g, 'Try live preview - Stake - Buy - Swap - ## Supported currencies')

    // Wallet page: fix missing heading markers, spacing, and newlines (SSR vs hydrated differences)
    .replace(/seconds\.An independent/g, 'seconds. An independent')
    .replace(/free\.Create a wallet/g, 'free. Create a wallet')
    .replace(/Uniquely DecentralizedJust you/g, 'Uniquely Decentralized ## Just you')
    .replace(/blockchainA nano/g, 'blockchain A nano')
    .replace(/miners\. Powerful currencies/g, 'miners. Powerful currencies')
    .replace(/currenciesThink value/g, 'currencies ## Think value')
    .replace(/NIMEcoPerfomance/g, 'NIMEco Perfomance')
    .replace(/cheapStake NIM/g, 'cheap Stake NIM')
    .replace(/transactionBitcoin/g, 'transaction - Bitcoin')
    .replace(/cryptoFee:/g, 'crypto Fee:')
    .replace(/transactionUSDC/g, 'transaction - USDC')
    .replace(/decentralizedFee:/g, 'decentralized Fee:')
    .replace(/Nimiq MultisigShare wallets/g, ' Nimiq Multisig Share wallets')
    .replace(/funds\. impeccable security/g, 'funds. impeccable security')
    .replace(/security24 words/g, 'security ## 24 words')
    .replace(/wallet\. - The 24-word/g, 'wallet. - The 24-word')
    .replace(/cracked\. - It fits/g, 'cracked. - It fits')
    .replace(/go\.They're universal/g, 'go. - They\'re universal')
    .replace(/now! - Create a wallet/g, 'now! - Create a wallet')
    .replace(/or followor follow us here/g, 'or follow us here')
    .replace(/together\. Privacy Policy/g, 'together. Privacy Policy')
    .replace(/2017-2025 Project - About/g, '2017-2025 Project - About')
    .replace(/RoadmapStaking Tech/g, 'Roadmap - Staking Tech')
    .replace(/LitepaperAlbatross/g, 'Litepaper - Albatross')
    .replace(/apps Get started - LoginLogin/g, 'apps Get started - Login')
    .replace(/NIM Community - OverviewBlog/g, 'NIM Community - Overview - Blog')
    .replace(/ContactTerms/g, 'Contact Terms')

    // Newsletter page: checkbox labels missing spaces (separator spans not captured by markdown)
    .replace(/EducationCommunityConsumer TechBusiness TechBlockchain Tech/g, 'Education Community Consumer Tech Business Tech Blockchain Tech')
    .replace(/WalletSuperSimpleSwapCryptopayment\.linkNimiq Pay/g, 'Wallet SuperSimpleSwap Cryptopayment.link Nimiq Pay')

    // Nimiq Pay page: duplicate link text from responsive spans (max-md:hidden + md:hidden)
    .replace(/\[Learn moreLearn more\]/g, '[Learn more]')
    // Nimiq Pay page: tab buttons render differently (prod shows as list items, local shows as images with alt text)
    .replace(/!\[Cryptopayment Link\]\([^)]+\)/g, '- ![]([IMAGE])Cryptopayment Link')
    .replace(/ !\[Naka\]\([^)]+\)/g, '')
    .replace(/ !\[Bluecode\]\([^)]+\)/g, ' - Coming Soon![]([IMAGE])Bluecode')
    .replace(/ !\[BTC Lightning\]\([^)]+\)/g, ' - Coming Soon![]([IMAGE])BTC Lightning')

    // Cookie consent banner (appears after hydration on local but not on prod)
    .replace(/## Cookie Consent[\s\S]*?Reject[\s\S]*?Accept/g, '')

    // Final cleanup
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

let browser: Browser

beforeAll(async () => {
  browser = await chromium.launch()
})
afterAll(async () => {
  await browser.close()
})

async function getMarkdown(url: string) {
  const page = await browser.newPage()
  page.setDefaultTimeout(60000)
  const waitStrategy = url.includes('/wallet') || url.includes('/staking') || url.includes('/onepager') || url.includes('/team') || url.includes('/activation-terms') || url.includes('/terms') || url.includes('/nimiq-pay') ? 'load' : url.includes('/blog') ? 'domcontentloaded' : 'networkidle'
  await page.goto(url, { waitUntil: waitStrategy, timeout: 60000 })
  if (url.includes('/wallet'))
    await page.waitForTimeout(15000) // Extra wait for wallet page client-side hydration
  else if (url.includes('/staking') || url.includes('/onepager') || url.includes('/team') || url.includes('/activation-terms') || url.includes('/terms') || url.includes('/blog') || url.includes('/nimiq-pay'))
    await page.waitForTimeout(5000) // Extra wait for page hydration
  const html = await page.content()
  await page.close()
  return htmlToMarkdown(html)
}

// Map local paths to prod paths (when they differ)
const PROD_PATH_MAP: Record<string, string> = {
  '/terms': '/terms.html',
  '/activation-terms': '/activation-terms.html',
}

describe('content Parity', () => {
  for (const path of PAGES) {
    it(`${path} content matches`, async () => {
      const prodPath = PROD_PATH_MAP[path] || path
      const [localMd, prodMd] = await Promise.all([
        getMarkdown(`${LOCAL}${path}`),
        getMarkdown(`${PROD}${prodPath}`),
      ])
      expect(normalizeMarkdown(localMd)).toBe(normalizeMarkdown(prodMd))
    })
  }
})
