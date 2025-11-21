/* eslint-disable no-console */

import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import process from 'node:process'
import { defineNuxtModule } from '@nuxt/kit'
import { consola } from 'consola'
import environment from '../lib/env'

// Auto-ignore common false positives to reduce noise
const IGNORED_URL_PATTERNS = [
  'w3.org', // SVG namespace declarations
  'localhost',
]

const LINK_WHITELIST = [
  // Official Nimiq
  /^https?:\/\/([^.]+\.)?nimiq\.(com|network|org|dev|watch)/,
  /^https?:\/\/(www\.)?nimiq-testnet\.com/,
  /^https?:\/\/(www\.)?nimiq\.github\.io/,
  /^https?:\/\/nim\.sh/,
  /^https?:\/\/nim\.drawpad\.org/,
  /^https?:\/\/nim\.link/,
  /^https?:\/\/cms\.nim\.team/,
  /^https?:\/\/nimiq-migration-monitor\.netlify\.app/,
  /^https?:\/\/images\.prismic\.io\/nimiq/,
  /^https?:\/\/(www\.)?cplink\.com/,
  /^https?:\/\/(www\.)?cp\.link/,
  /^https?:\/\/(www\.)?cryptopayment\.link/,
  /^https?:\/\/(www\.)?cryptocity\.network/,

  // Social Media & Community
  /^https?:\/\/(twitter|x)\.com\/nimiq$/i,
  /^https:\/\/www\.facebook\.com\/nimiq$/,
  /^https:\/\/www\.instagram\.com\/wearenimiq$/,
  /^https:\/\/www\.instagram\.com\/lecoproject$/,
  /^https:\/\/www\.reddit\.com\/r\/Nimiq(\/.*|\?.*)?$/,
  /^https:\/\/www\.youtube\.com\/c\/nimiq$/,
  /^https?:\/\/(discord\.gg\/(cMHemg8|nimiq|pvdg5AZWk7|BCxjthcXtX|J753fQUnpZ|XB9SGtEuur)|discord(app)?\.com\/invite\/(cMHemg8|Nimiq))$/i,
  // Telegram
  /^https?:\/\/t\.me\/(nimiq|joinchat\/AAAAAEJW-ozFwo7Er9jpHw|Nimcubator|NimiqTipBot|NimiqTip_bot|NimiqMiners|Kucoin_Exchange|stabilediese)$/i,
  // YouTube
  /^https:\/\/(www\.)?youtube\.com\/(c\/nimiq|channel\/UCJ1qu3KXwfmkGwBkU8F1jQg)$/,
  /^https:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)(bspRbC4K84o|Ye9bbDa9o8w|QWbRZVcIrnk|JhkVjRxfj7A|A5zV5YmorH0|AEYrQxGILYo|i0GVdberKZM|dA40oyDVtqs|OmjdtqpWuwY|RBQ_6OqVO68|tfae8ld1ILc|Yd02UOmKWhU|ROtyliYTobE|IJDGE8Mg-uw|ME5osB8sX_s|9TsZ_xjExXs|klN-ToclwW4|yURX6FMky-A|ZIW46wXbPSw|3RhVpyHZBiQ|j50u5jtEjFM|kH5bNvN753M|uDka0kokfe0)(\?.*|&amp;.*)?$/,
  /^https:\/\/(www\.)?youtube\.com\/shorts\/(-ogl5pAwW_U|3OQAe2elrks)(\?.*)?$/,
  // Twitter
  /^https:\/\/twitter\.com\/(Max_Nimiq|NimiqMemes|nimiqnetwork)$/,
  /^https?:\/\/(twitter|x)\.com\/nimiq\/status\/(1194441520897757184|1200533569048850435|1195070449706766342|1527004101992755202|1237477129362853900|1271109189268639749|1443243432865058817|1640803931424018452|1638246500311486464|1793642221704724940|1783338363660951860|1236335060246290432|1291040529501880321)(\/photo\/\d+)?$/i,
  /^https:\/\/twitter\.com\/(terorie_dev|MatthiasHauff)\/status\/\d+$/,
  /^https:\/\/(x|twitter)\.com\/i\/spaces\/(1vOxwrmqYMoJB|1YqGovYkQaMKv\.|1MnGnMperDOKO)$/,
  // Dynamic link from JS
  /^https:\/\/twitter\.com\/\$\{\w\}$/,

  // LinkedIn
  /^https:\/\/www\.linkedin\.com\/in\/(adriangarcia81|elionchin|desouzamartin|math%C3%A9o-r-b301a996|maxvburger\/?|paberr|s%C3%B6ren-schwert-484b6b100|stefan-koolen)$/,

  // URL used in JS
  /^https:\/\/www\.linkedin\.com\/in\/\$\{\w\}$/,

  // App Stores
  /^https:\/\/apps\.apple\.com\/app\/id6471844738$/,

  /^https?:\/\/nimiq-slackin\.herokuapp\.com/,

  // Exchanges & Trading
  /^https:\/\/changelly\.com\/$/,
  /^https:\/\/hitbtc\.com\/$/,
  /^https:\/\/gate\.io\/$/,
  /^https:\/\/simpleswap\.io\/$/,
  /^https:\/\/changehero\.io\/$/,
  /^https:\/\/stealthex\.io\/$/,
  /^https:\/\/swapspace\.co\/$/,
  /^https:\/\/swapzone\.io\/$/,
  /^https:\/\/coinswitch\.co\/$/,
  /^https:\/\/kriptomat\.io\/$/,
  /^https:\/\/ascendex\.com\/en$/,
  /^https:\/\/fastspot\.io\/$/,
  /^https?:\/\/(www\.|app\.|referrals\.)?supersimpleswap\.com\/?$/,
  /^https:\/\/www\.kucoin\.com\/trade$/,
  /^https:\/\/www\.coinex\.com\/en$/,
  /^https:\/\/coinpay\.cr\/$/,
  /^https:\/\/www\.mexc\.com\/$/,
  /^https:\/\/www\.coinspot\.com\.au\/$/,
  /^https:\/\/www\.cryptocompare\.com\/$/,
  /^https?:\/\/galxe\.com\/nimiq$/,

  // Research & Academic
  /^https:\/\/crypto\.stanford\.edu\/c2rg$/,

  // Medium Articles
  /^https:\/\/medium\.com\/nimiq\/[\w-]+$/,
  /^https:\/\/medium\.com\/nimiq-network\/[\w-]+$/,
  /^https:\/\/medium\.com\/bitcraft\/hd-wallets-explained-from-high-level-to-nuts-and-bolts-9a41545f5b0$/,
  /^https:\/\/medium\.com\/@VitalikButerin\/quadratic-arithmetic-programs-from-zero-to-hero-f6d558cea649$/,
  /^https:\/\/medium\.com\/@VitalikButerin\/exploring-elliptic-curve-pairings-c73c1864e627$/,
  /^https:\/\/medium\.com\/@VitalikButerin\/zk-snarks-under-the-hood-b33151a013f6$/,
  /^https:\/\/medium\.com\/u\/d3191ca07046\?source=post_page-----b6b90c0bb1d5----------------------$/,
  /^https:\/\/medium\.com\/u\/57600910a883\?source=post_page-----b6b90c0bb1d5----------------------$/,

  // Additional URLs
  /^https:\/\/wallet\.nimiq-testnet\.com\/$/,
  /^https:\/\/getsome\.nimiq-testnet\.com\/$/,
  /^https:\/\/wallet\.v2\.nimiq-testnet\.com$/,
  /^http:\/\/wallet\.pos\.nimiq-testnet\.com\/$/,
  /^https:\/\/telegra\.ph\/How-to-run-the-Nimiq-Rust-node-on-Android-12-03$/,
  /^https:\/\/pixel\.auction\/$/,
  /^https:\/\/en\.wikipedia\.org\/wiki\/Request_for_Comments$/,
  /^https:\/\/en\.wikipedia\.org\/wiki\/Traversal_Using_Relays_around_NAT$/,
  /^https:\/\/en\.bitcoin\.it\/wiki\/Controlled_supply$/,
  /^https:\/\/wikipedia\.org\/wiki\/CAP_theorem$/,
  /^https:\/\/www\.binance\.com\/en\/support\/articles\/115002604631$/,
  /^https:\/\/www\.gate\.io\/article\/36693$/,
  /^https:\/\/www\.gate\.io\/de\/trade\/NIM_USDT$/,
  /^https:\/\/www\.gate\.io\/blog_detail\/856\/gate\.io-becomes-the-second-largest-crypto-exchange-by-trading-volume$/,
  /^https:\/\/www\.kucoin\.com\/$/,
  /^https:\/\/www\.coinify\.com\/trade$/,
  /^https:\/\/ascendex\.com\/en\/support\/articles\/98790$/,
  /^https:\/\/stealthex\.io\/coin\/nimiq\/$/,
  /^https:\/\/www\.coingecko\.com\/en\/exchanges$/,
  /^http:\/\/kindhumans\.com\/$/,
  /^https:\/\/www\.kindhumans\.com\/$/,
  /^https:\/\/kindhumans\.com\/shop\/$/,
  /^https:\/\/kindhumans\.com\/about\/$/,
  /^https:\/\/kindhumans\.com\/join\/$/,
  /^https:\/\/lnt\.org\/$/,
  /^https:\/\/trustwallet\.com\/$/,
  /^https:\/\/hackerone\.com\/nimiq$/,
  /^https:\/\/protocol\.ai\/$/,
  /^http:\/\/fastspot\.io\/$/,
  /^http:\/\/nimpress\.news\/$/,
  /^http:\/\/Cryptopayment\.link$/,
  /^https:\/\/www\.blockchance\.eu\/$/,
  /^http:\/\/nimiqgiftcards\.com\/$/,
  /^https:\/\/giftcards\.bidali\.com\/$/,
  /^https:\/\/nimiqgiftcards\.com\/$/,
  /^https:\/\/agora\.trade\/$/,
  /^https:\/\/www\.salamantex\.com\/en\/solutions\/point-of-sale\/merchant-map$/,
  /^https:\/\/www\.ebaclearing\.eu\/services\/instant-payments\/participants\/$/,
  /^https:\/\/www\.kryptohotel\.at\/$/,
  /^https:\/\/g\.page\/42morethanacafe\?share$/,
  /^https:\/\/g\.page\/apotheke-u1$/,
  /^https:\/\/www\.ingenico\.us\/smart-terminals$/,
  /^https:\/\/zopilote-surfcamp\.com\/en\/home\/$/,
  /^https:\/\/docs\.google\.com\/forms\/d\/e\/1FAIpQLSfRuko1lfjMNYueI7J1YF4G0Wwyp3EuJggeEjEKqHEzGbRG0w\/viewform\?usp=sf_link$/,
  /^https:\/\/pastebin\.com\/raw\/1eDwDF45$/,
  /^https:\/\/play\.google\.com\/store\/apps\/details\?id=com\.albermonte\.nimpoolshub$/,
  /^https:\/\/play\.google\.com\/store\/apps\/details\?id=com\.nimiqsunsetcyberspace$/,
  /^https:\/\/pixels\.nimpowered\.com$/,
  /^https:\/\/nimiq-game-store\.paulgertz\.com$/,
  /^https:\/\/nimiq-game-store\.paulgertz\.com\/$/,
  /^https:\/\/nimtris\.zeromox\.com\/$/,
  /^https:\/\/world\.nimpowered\.com$/,
  /^https:\/\/naka\.com\/$/,
  /^https:\/\/lightning\.network\/$/,
  /^https:\/\/eprint\.iacr\.org\/2016\/889\.pdf$/,
  /^https:\/\/lightning\.network\/lightning-network-paper\.pdf$/,
  /^https:\/\/eprint\.iacr\.org\/2016\/555\.pdf$/,
  /^https:\/\/eprint\.iacr\.org\/2020\/1261\.pdf$/,
  /^http:\/\/data\.consilium\.europa\.eu\/doc\/document\/ST-5419-2016-INIT\/en\/pdf$/,
  /^https:\/\/www\.welivesecurity\.com\/2019\/02\/08\/first-clipper-malware-google-play\/$/,
  /^https:\/\/bitcoinist\.com\/google-play-store-metamask-malware\/$/,
  /^https:\/\/www\.newsbtc\.com\/2018\/11\/05\/ethereum-wallet-metamask-achieves-milestone-of-1-3-million-users-wild-success\/$/,
  /^https:\/\/www\.bleepingcomputer\.com\/news\/security\/clipboard-hijacker-malware-monitors-23-million-bitcoin-addresses\/$/,
  /^https:\/\/www\.google\.co\.uk\/amp\/s\/cointelegraph\.com\/news\/self-proclaimed-binance-hacker-warns-new-wave-of-data-leaks-is-coming\/amp$/,
  /^https:\/\/www\.morganstanley\.com\/ideas\/freelance-economy$/,
  /^https:\/\/www2\.staffingindustry\.com\/row\/About\/Media-Center\/Press-Releases\/Global-Gig-Economy-Reaches-USD-4\.5-Trillion$/,
  /^https:\/\/www\.smallbizgenius\.net\/by-the-numbers\/entrepreneur-statistics\/$/,
  /^https:\/\/www\.ofx\.com\/en-au\/faqs\/how-much-does-it-cost-to-send-money-internationally\/$/,
  /^https:\/\/www\.paypal\.com\/uk\/webapps\/mpp\/email-invoice$/,
  /^https:\/\/news\.8btc\.com\/the-history-of-bitcoin-pizza-day-and-its-importance-for-the-industry$/,
  /^https?:\/\/(www\.)?bitcoin\.org/,
  /^https?:\/\/(www\.)?coincenter\.org/,
  /^https?:\/\/(www\.)?electriccoin\.co/,
  /^https?:\/\/(www\.)?z\.cash/,

  /^https?:\/\/(www\.)?zkp\.science/,
  /^https?:\/\/(www\.)?nipopows\.com/,
  /^https?:\/\/(www\.)?libp2p\.io/,
  /^https?:\/\/(www\.)?tendermint\.com/,
  /^https?:\/\/(www\.)?metrics\.nimiq\.cafe/,
  /^https?:\/\/(www\.)?imperial\.ac\.uk\/cryptocurrency\/people\/$/,
  /^https?:\/\/(www\.)?password-hashing\.net\/submissions\/specs\/Argon-v3\.pdf$/,
  /^http:\/\/cryptonite\.info\/wiki\/index\.php\?title=Main_Page$/,

  // Development & Tools
  /^https?:\/\/(www\.)?npmjs\.com/,
  /^https?:\/\/(www\.)?developer\.mozilla\.org/,
  /^https?:\/\/(www\.)?(fonts\.)?(googleapis|gstatic|google)\.com/,
  /^https?:\/\/(www\.)?chromium\.org/,
  /^https?:\/\/(www\.)?letsencrypt\.org/,
  /^https:\/\/developers\.google\.com/,

  // GitHub
  /^https:\/\/github\.com\/(nimiq|nimiq-network)(\/.*)?$/,
  /^https:\/\/github\.com\/satoshilabs\/slips\/blob\/master\/slip-0010\.md$/,
  /^https:\/\/github\.com\/consensys\/handel$/,
  /^https:\/\/github\.com\/ethereum\/wiki\/wiki\/Patricia-Tree$/,
  /^https:\/\/github\.com\/(viquezclaudio|danimoh|jsdanielh|test|onmax|styppo|nibhar|sisou|Eligioo|terorie|lucaslg26|Albermonte)(\/.*)?$/,
  /^https:\/\/github\.com\/jgraef\/nimiq-api-python$/,
  /^https:\/\/github\.com\/hector-nimiq\/nimeth-atomicswap$/,
  /^https:\/\/github\.com\/ethereum\/wiki\/wiki\/Proof-of-Stake-FAQ$/,
  /^https:\/\/github\.com\/matter-labs\/awesome-zero-knowledge-proofs$/,
  /^https:\/\/github\.com\/vernnobile\/MuliFont$/,
  /^https:\/\/github\.com\/catarse\/catarse$/,
  /^https:\/\/github\.com\/valentinvieriu\/nimiq-vanity-wallet$/,
  /^https:\/\/github\.com\/hrxi$/,
  // Dynamic link from JS
  /^https:\/\/github\.com\/\$\{\w\}$/,

  // Community & Projects
  /^https?:\/\/nimstats\.com/,
  /^https?:\/\/(www\.)?naka\.com/,
  /^https?:\/\/(www\.)nimiqhub\.com/,
  /^https?:\/\/(www\.)jvm\.com/,
  /^https?:\/\/(www\.)hackerone\.com/,
  /^https?:\/\/(www\.)ledgerwallet\.com/,
  /^https?:\/\/(www\.)nationalforests\.org/,
  /^https?:\/\/(www\.)501cthree\.org/,
  /^https:\/\/trinkler\.software\/$/,
  /^https:\/\/shortnim\.vercel\.app\/$/,
  /^https:\/\/hub\.shortnim\.me\/$/,
  /^https:\/\/cashlinks\.shortnim\.me\/$/,

  // Infrastructure & Services
  /^https?:\/\/(www\.)?fastspot\.freshdesk\.com\/support\/tickets\/new$/,
  /^https?:\/\/(www\.)?securityheaders\.com\/\?q=https%3A%2F%2Fkeyguard\.nimiq\.com$/,

  // API Endpoints & Data Services
  /^https:\/\/raw\.githubusercontent\.com\/onmax\/nimiq-awesome\/main\/src\/data\/dist\/nimiq-apps\.json$/,
  /^https:\/\/data-api\.cryptocompare\.com\/index\/cc$/,
  /^https:\/\/api\.coingecko\.com\/api\/v3$/,
  /^https:\/\/firestore\.googleapis\.com\/v1\/projects\/checkout-service\/databases\/\(default\)\/documents\/exchangerates\/rates$/,
  /^https:\/\/usd-crc-historic-rate\.deno\.dev\/api\/rates\/\$\{[^}]+\}\/\$\{[^}]+\}$/,
  /^https:\/\/min-api\.cryptocompare\.com\/data\/v2\/histohour$/,
  /^https:\/\/geoip\.nimiq-network\.com:8443\/v1\/locate$/,
  /^https:\/\/validators-api-mainnet\.pages\.dev.*$/,
  /^https:\/\/min-api\.cryptocompare\.com\/data$/,
  /^https:\/\/stats\.nimiq-network\.com$/,

  // Forms & External Services
  /^https:\/\/notionforms\.io\/forms\/nim-prospect-contact-form$/,

  // Prismic & CMS
  /^https:\/\/prismic\.dev\/msg\/client\/v\$\{[^}]+\}\/[^/]+$/,
  /^https:\/\/\$\{[^}]+\}\.cdn\.prismic\.io\/api\/v2$/,
  /^https:\/\/static\.cdn\.prismic\.io\/prismic\.min\.js\?repo=\$\{[^}]+\}&new=true$/,
  /^https:\/\/github\.com\/prismicio\/slice-machine\/issues\/new\/choose$/,

  // Analytics
  /^https:\/\/www\.googletagmanager\.com\/gtm\.js$/,
  /^https:\/\/cdn\.matomo\.cloud\/\$\{[^}]+\}\/$/,

  // In JS files
  /^https:\/\/vuejs\.org\/error-reference\/#runtime-\$\{[^}]+\}$/,

  // Content & Documentation
  /^https?:\/\/(www\.)?wordpress\.org/,
  /^https?:\/\/docs\.nimiqoasis\.com/,
  /^https?:\/\/docs\.fastspot\.io/,
  /^https?:\/\/docs\.uniswap\.org\/contracts\/v3\/reference\/periphery\/lens\/Quoter$/,
  /^https?:\/\/docs\.google\.com\/document\/d\/1u97rhamSJTCOba1OFSmCV0OHy5CVA1dIpKIJkoxGXM0$/,
  /^https?:\/\/(www\.)?notion\.so\/The-easiest-way-to-get-into-crypto-938132d0725c42faa50da78f6c008ca9$/,
  /^https?:\/\/towardsdatascience\.com\/visualize-programming-language-popularity-using-tiobeindexpy-f82c5a96400d$/,
  /^https?:\/\/(www\.)?emojipedia\.org\/sparkles\/#:~:text=Emoji%20Meaning,beauty%2C%20gratitude%2C%20and%20excitement\.$/,
  /^https?:\/\/blog\.kucoin\.com\/nimiq-nim-token-listing-information-research-project-updates-kucoin$/,
  /^https?:\/\/blog\.goodaudience\.com\/understanding-zero-knowledge-proofs-through-simple-examples-df673f796d99$/,
  /^https?:\/\/blog\.chainalysis\.com\/reports\/2022-global-crypto-adoption-index\/$/,

  // Financial Services
  /^https?:\/\/(www\.)?weg-bank\.de/,
  /^https?:\/\/(www\.)?tokenpay\.com/,
  /^https?:\/\/(www\.)?salamantex\.com\/en\/newsroom\/208-concardis-and-salamantex-enable-payment-with-cryptocurrencies-at-the-pos-throughout-austria$/,
  /^https?:\/\/(www\.)?bidali\.com/,
  /^https?:\/\/(www\.)?bluecode\.com/,
  /^https?:\/\/(www\.)?polygon\.technology/,
  /^https?:\/\/(www\.)?evolution-host\.com/,
  /^https?:\/\/(www\.)?go\.online-ident\.ch\/privacy\/en$/,
  /^https?:\/\/(www\.)?nimiq\.noviopay\.com/,
  /^https?:\/\/(www\.)?nimiq\.mopsus\.com\/supply$/,

  // Media & Press
  /^https?:\/\/(www\.)?statista\.com\/statistics\/647374\/worldwide-blockchain-wallet-users\/$/,
  /^https?:\/\/(www\.)?investopedia\.com\/terms\/a\/atomic-swaps\.asp$/,
  /^https?:\/\/(www\.)?theta\.tv\/hektorpalme0815$/,
  /^https?:\/\/(www\.)?web3summit\.com/,
  /^https?:\/\/events\.ccc\.de\/camp\/2019\/$/,
  /^https?:\/\/(www\.)?bdlt\.school/,
  /^https?:\/\/(www\.)?vote\.smitop\.com/,
  /^https?:\/\/(www\.)?blockchance\.eu\/speaker-blog-max-burger\/$/,
  /^https?:\/\/(www\.)?nicoyawaterkeeper\.org/,
  /^https?:\/\/(www\.)?katallassos\.com/,
  /^https?:\/\/(www\.)?breakthroughonline\.org\.au\/papers$/,
  /^https?:\/\/science\.sciencemag\.org\/cgi\/doi\/10\.1126\/science\.aax0848$/,
  /^https?:\/\/(www\.)?teamtrees\.org/,
  /^https?:\/\/(www\.)?cryptovoucher\.io/,

  // Charity & Social
  /^https?:\/\/(www\.)?charitywater\.org\/bitcoin$/,
  /^http:\/\/www\.nimnow\.com\/$/,
  /^http:\/\/catarse\.me\/$/,
  /^https?:\/\/(www\.)?europeanpaymentscouncil\.eu\/sites\/default\/files\/participants_export\/sepa_instant_credit_transfer\/sepa_instant_credit_transfer\.pdf\?v=1552295452$/,
  /^https?:\/\/(www\.)?litecoin-foundation\.org/,

  // IPFS & Decentralized
  /^https?:\/\/(www\.)?ipfs\.io/,
  /^https?:\/\/(www\.)?ipfs\.nimiq\.io/,
  /^https?:\/\/bafybeid.*\.ipfs\.dweb\.link/,

  // Other

  /^https?:\/\/(www\.)?unstoppabledomains\.com\/blog\/blog-introducing-the-wallet-alliance$/,
  /^http:\/\/unstoppableweb\.co\/3l1Ldpf$/,

  /^https?:\/\/twitter\.com\/Ledger\/status\/1006174507751694337$/,
  /^https:\/\/apps\.apple\.com\/us\/app\/nimiq-pay\/id6471844738$/,
  /^https:\/\/play\.google\.com\/store\/apps\/details\?id=com\.nimiq\.pay$/,
  /^https:\/\/play\.google\.com\/store\/apps\/details\?id=com\.wallet\.crypto\.trustapp$/,
  /^https:\/\/itunes\.apple\.com\/us\/app\/trust-crypto-wallet\/id1288339409\?mt=8$/,

  /^https:\/\/arxiv\.org\/abs\/1903\.01589$/,
  /^https:\/\/eprint\.iacr\.org\/2017\/963$/,
  /^https:\/\/crypto\.stanford\.edu\/~buenz\/papers\/zether\.pdf$/,
  /^https:\/\/ed25519\.cr\.yp\.to\/$/,
  /^https:\/\/codaprotocol\.com\/$/,

  /^http:\/\/www\.lmdb\.tech\/doc\/$/,
  /^https:\/\/en\.bitcoinwiki\.org\/wiki\/Simplified_Payment_Verification$/,
  /^https:\/\/en\.bitcoin\.it\/wiki\/Atomic_swap$/,
  /^https:\/\/en\.bitcoin\.it\/wiki\/Lightning_Network$/,
  /^https:\/\/en\.bitcoin\.it\/wiki\/Hash_Time_Locked_Contracts$/,
  /^https:\/\/en\.wikipedia\.org\/wiki\/Identicon$/,
  /^https:\/\/en\.wikipedia\.org\/wiki\/Fiat_money$/,

  /^https:\/\/opengsn\.org\/$/,

  /^https:\/\/trustwallet\.com\/nimiq-wallet$/,
  /^https:\/\/www\.ten31\.com\/$/,
  /^https:\/\/ten31\.com\/$/,

  /^https:\/\/hackernoon\.com\/atomic-swaps-simply-explained-how-to-swap-cryptocurrencies-without-a-middleman-6cd29680c32e$/,
  /^https:\/\/serotonin\.co\/$/,
  /^https:\/\/cryptoadoption\.io\/$/,
  /^https:\/\/cryptoadoption\.io\/doku\.php$/,
  /^https:\/\/totalcrypto\.io\/$/,

  // Other Services
  /^https:\/\/polygonscan\.com\/address\/0x98e69a6927747339d5e543586fc0262112ebe4bd#code$/,

  /^https:\/\/hummingbot\.io\/en\/academy\/quickstart\/$/,
  /^https:\/\/dist\.hummingbot\.io\/hummingbot_v0\.46\.0_setup\.exe$/,
  /^https:\/\/dist\.hummingbot\.io\/hummingbot_v0\.46\.0\.dmg$/,
  /^https:\/\/hummingbot\.io\/en\/academy\/quickstart\/4-create-bot\/$/,
  /^https:\/\/hummingbot\.io\/en\/academy\/quickstart\/5-earn-rewards\/$/,
  /^https:\/\/albacore\.mopsus\.com\/calculator$/,

  /^https?:\/\/(www\.)?nimtris\.com/,
  /^https?:\/\/robohash\.org/,

  // Academic Institutions
  /^https?:\/\/tuwien\.ac\.at/,
  /^https?:\/\/princeton\.edu/,
  /^https?:\/\/(www\.)?sba-research\.org/,

  // Government & Regulatory
  /^https?:\/\/(www\.)?blockchain4europe\.eu/,
  /^https?:\/\/eur-lex\.europa\.eu/,
  /^https?:\/\/ec\.europa\.eu/,
  /^https?:\/\/sanctionssearch\.ofac\.treas\.gov/,
]

export default defineNuxtModule({
  meta: {
    name: 'link-validation',
  },
  setup(_options, nuxt) {
    if (nuxt.options.dev || environment.showDrafts)
      return

    nuxt.hook('nitro:build:public-assets', () => {
      const whitelist = LINK_WHITELIST
      const outputDir = resolve(nuxt.options.nitro.output?.dir || '.output', 'public')
      const errors: string[] = []
      const regexUsage = new Map<number, { pattern: RegExp, used: boolean, matchCount: number }>()

      whitelist.forEach((pattern, index) => {
        regexUsage.set(index, { pattern, used: false, matchCount: 0 })
      })

      const stats = {
        totalLinks: 0,
        internalLinks: 0,
        externalLinks: 0,
        httpOnlyLinks: 0,
        validExternalLinks: 0,
        invalidExternalLinks: 0,
        filteredLinks: 0,
        totalRegexPatterns: whitelist.length,
        usedRegexPatterns: 0,
        unusedRegexPatterns: 0,
        htmlFilesProcessed: 0,
        jsFilesProcessed: 0,
      }

      const httpUrlsByPage = new Map<string, string[]>()

      const allFiles = findSupportedFiles(outputDir)
      const fileStats = processAllFiles(allFiles, stats, whitelist, regexUsage, errors, httpUrlsByPage)
      Object.assign(stats, fileStats)
      stats.usedRegexPatterns = Array.from(regexUsage.values()).filter(r => r.used).length
      stats.unusedRegexPatterns = stats.totalRegexPatterns - stats.usedRegexPatterns

      consola.info('\n📊 Link Validation Statistics:')
      console.table({
        '📄 Files processed': `${stats.htmlFilesProcessed + stats.jsFilesProcessed} (${stats.htmlFilesProcessed} HTML, ${stats.jsFilesProcessed} JS)`,
        '🔗 Total links': stats.totalLinks,
        '🏠 Internal links': stats.internalLinks,
        '🌐 External links': stats.externalLinks,
        '✅ Valid external': stats.validExternalLinks,
        '🚫 Filtered (ignored)': stats.filteredLinks,
        '⚠️  HTTP-only links': stats.httpOnlyLinks,
        '❌ Invalid external': stats.invalidExternalLinks,
      })

      // Separate section to avoid cluttering main stats
      consola.info('\n🔧 Regex Pattern Usage:')
      console.table({
        '📝 Total patterns': stats.totalRegexPatterns,
        '✅ Used patterns': stats.usedRegexPatterns,
        '⚠️  Unused patterns': stats.unusedRegexPatterns,
      })

      const unusedPatterns = Array.from(regexUsage.entries())
        .filter(([_, data]) => !data.used)
        .map(([index, data]) => ({ index, pattern: data.pattern.source }))

      if (unusedPatterns.length > 0) {
        consola.warn(`\n⚠️  Found ${unusedPatterns.length} unused regex pattern(s):`)
        unusedPatterns.forEach(({ index, pattern }) => {
          consola.warn(`   ${index + 1}. /${pattern}/`)
        })
        consola.warn('   💡 Consider removing unused patterns to keep the whitelist clean')
      }
      else {
        consola.success('✅ All regex patterns are being used!')
      }

      // Group by page to make fixing easier
      if (httpUrlsByPage.size > 0) {
        consola.warn(`\n⚠️  ${stats.httpOnlyLinks} HTTP URL${stats.httpOnlyLinks === 1 ? '' : 's'} found ⚠️`)

        const sortedPages = Array.from(httpUrlsByPage.entries()).sort(([a], [b]) => a.localeCompare(b))
        const maxPagesToShow = 20
        const totalPages = sortedPages.length

        if (totalPages > maxPagesToShow) {
          consola.warn(`Showing first ${maxPagesToShow} of ${totalPages} pages with HTTP URLs...`)
        }

        sortedPages.slice(0, maxPagesToShow).forEach(([pagePath, urls]) => {
          const uniqueUrls = [...new Set(urls)].sort()
          consola.warn(`\n📄 ${pagePath}:`)
          uniqueUrls.forEach((url) => {
            consola.warn(`  • ${url}`)
          })
        })

        if (totalPages > maxPagesToShow) {
          consola.warn(`\n... and ${totalPages - maxPagesToShow} more pages`)
          consola.warn('💡 Consider updating these URLs to use HTTPS for better security')
        }
      }

      if (errors.length > 0) {
        consola.error(`\n🚫 Found ${errors.length} invalid external link(s):`)
        errors.forEach((error, index) => {
          consola.error(`\n${index + 1}. ${error}`)
        })
        process.exit(1)
      }
      else {
        consola.success('✅ All external links passed validation!')
      }
    })
  },
})

const LINK_EXTRACTION_PATTERNS = new Map([
  ['.html', [
    /<a[^>]+href=["']([^"']+)["'][^>]*>/gi,
  ]],
  ['.js', [
    /"(https?:\/\/[^"]+)"/g,
    /'(https?:\/\/[^']+)'/g,
    /`(https?:\/\/[^`]+)`/g,
  ]],
])

function findSupportedFiles(dir: string): Array<{ path: string, extension: string }> {
  if (!existsSync(dir))
    return []

  const files: Array<{ path: string, extension: string }> = []
  const supportedExtensions = Array.from(LINK_EXTRACTION_PATTERNS.keys())

  function scan(currentDir: string) {
    readdirSync(currentDir, { withFileTypes: true }).forEach((entry) => {
      const fullPath = resolve(currentDir, entry.name)
      if (entry.isDirectory()) {
        scan(fullPath)
      }
      else {
        const extension = supportedExtensions.find(ext => entry.name.endsWith(ext))
        if (extension) {
          files.push({ path: fullPath, extension })
        }
      }
    })
  }

  scan(dir)
  return files
}

function extractLinksFromFile(content: string, filePath: string, extension: string) {
  const patterns = LINK_EXTRACTION_PATTERNS.get(extension)
  if (!patterns) {
    return []
  }

  return content.split('\n').flatMap((line, index) => {
    const matches: string[] = []
    patterns.forEach((pattern) => {
      if (extension === '.html') {
        const htmlMatches = line.match(pattern) || []
        htmlMatches.forEach((match) => {
          const href = match.match(/href=["']([^"']+)["']/)?.[1]
          if (href) {
            matches.push(href)
          }
        })
      }
      else {
        let match = pattern.exec(line)
        while (match !== null) {
          if (match[1]) {
            matches.push(match[1])
          }
          match = pattern.exec(line)
        }
      }
    })

    return matches.map(url => ({ url, line: index + 1, file: filePath }))
  })
}

function processAllFiles(
  files: Array<{ path: string, extension: string }>,
  stats: any,
  whitelist: RegExp[],
  regexUsage: Map<number, { pattern: RegExp, used: boolean, matchCount: number }>,
  errors: string[],
  httpUrlsByPage: Map<string, string[]>,
) {
  const fileStats = {
    htmlFilesProcessed: 0,
    jsFilesProcessed: 0,
  }

  files.forEach(({ path: file, extension }) => {
    if (extension === '.html') {
      fileStats.htmlFilesProcessed++
    }
    else if (extension === '.js') {
      fileStats.jsFilesProcessed++
    }
    const links = extractLinksFromFile(readFileSync(file, 'utf-8'), file, extension)
    links.forEach((link) => {
      if (!link)
        return

      stats.totalLinks++

      if (link.url.startsWith('#') || link.url.startsWith('mailto:') || link.url.startsWith('tel:'))
        return

      if (!link.url.startsWith('http')) {
        stats.internalLinks++
        return
      }

      stats.externalLinks++

      if (link.url.startsWith('http://')) {
        stats.httpOnlyLinks++

        // Group URLs by page for easier fixing
        const pagePath = getPagePathFromFile(link.file)
        if (!httpUrlsByPage.has(pagePath)) {
          httpUrlsByPage.set(pagePath, [])
        }
        httpUrlsByPage.get(pagePath)!.push(link.url)
      }

      const matchResult = isValidLinkWithTracking(link.url, whitelist, regexUsage)
      if (matchResult.isValid) {
        stats.validExternalLinks++
        if (matchResult.filtered) {
          stats.filteredLinks++
        }
      }
      else {
        stats.invalidExternalLinks++
        errors.push(`❌ Invalid external link: ${link.url}
   📍 Found in: ${link.file}:${link.line}
   🔧 Add pattern to LINK_WHITELIST in modules/link-validation.ts`)
      }
    })
  })

  return fileStats
}

function isValidLinkWithTracking(
  url: string,
  whitelist: RegExp[],
  regexUsage: Map<number, { pattern: RegExp, used: boolean, matchCount: number }>,
): { isValid: boolean, matchedPatternIndex?: number, filtered?: boolean } {
  if (url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:'))
    return { isValid: true }
  if (!url.startsWith('http'))
    return { isValid: true } // Internal links

  // Skip common false positives
  if (IGNORED_URL_PATTERNS.some(pattern => url.includes(pattern))) {
    return { isValid: true, filtered: true }
  }

  try {
    // Check if URL matches any pattern in the whitelist
    for (let i = 0; i < whitelist.length; i++) {
      const pattern = whitelist[i]
      if (pattern && pattern.test(url)) {
        const usage = regexUsage.get(i)!
        usage.used = true
        usage.matchCount++
        return { isValid: true, matchedPatternIndex: i }
      }
    }
  }
  catch {
    // Invalid URL
  }

  return { isValid: false }
}

function getPagePathFromFile(filePath: string): string {
  // Convert file paths to readable page names for grouping
  const publicIndex = filePath.lastIndexOf('/public/')
  if (publicIndex === -1)
    return filePath

  const relativePath = filePath.substring(publicIndex + 8) // Remove '/public/'

  // Clean up HTML paths for readability
  if (relativePath.endsWith('/index.html')) {
    return relativePath.replace('/index.html', '') || 'home'
  }

  // Keep JS files as-is for debugging
  if (relativePath.startsWith('_nuxt/')) {
    return relativePath
  }

  return relativePath || 'home'
}
