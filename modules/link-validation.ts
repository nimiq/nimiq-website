/* eslint-disable no-console */

import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import process from 'node:process'
import { defineNuxtModule } from '@nuxt/kit'

const LINK_WHITELIST = [
  // Official Nimiq
  /^https?:\/\/([^.]+\.)?nimiq\.(com|network|org|dev|watch)/,
  /^https?:\/\/(www\.)?nimiq-testnet\.com/,
  /^https?:\/\/(www\.)?nimiq\.github\.io/,
  /^https?:\/\/nim\.sh/,
  /^https?:\/\/nim\.drawpad\.org/,
  /^https?:\/\/nim\.link/,
  /^https?:\/\/cms\.nim\.team/,
  /^https?:\/\/nimstats\.com/,
  /^https?:\/\/nimiq-migration-monitor\.netlify\.app/,
  /^https?:\/\/images\.prismic\.io\/nimiq/,
  /^https?:\/\/(www\.)?cplink\.com/,
  /^https?:\/\/(www\.)?cp\.link/,
  /^https?:\/\/(www\.)?cryptopayment\.link/,
  /^https?:\/\/(www\.)?cryptocity\.network/,

  // Social Media & Community
  /^https:\/\/twitter\.com\/nimiq$/,
  /^https:\/\/x\.com\/nimiq$/,
  /^http:\/\/x\.com\/nimiq$/,
  /^https:\/\/x\.com\/Nimiq$/,
  /^http:\/\/x\.com\/Nimiq$/,
  /^https:\/\/www\.facebook\.com\/nimiq$/,
  /^https:\/\/www\.instagram\.com\/wearenimiq$/,
  /^https:\/\/www\.instagram\.com\/lecoproject$/,
  /^https:\/\/www\.reddit\.com\/r\/Nimiq$/,
  /^https:\/\/www\.youtube\.com\/c\/nimiq$/,
  /^https:\/\/discord\.gg\/cMHemg8$/,
  /^https:\/\/discord\.gg\/nimiq$/,
  /^http:\/\/discord\.gg\/nimiq$/,
  /^https:\/\/discord\.gg\/Nimiq$/,
  /^https:\/\/discordapp\.com\/invite\/cMHemg8$/,
  /^https:\/\/t\.me\/Nimiq$/,
  /^http:\/\/t\.me\/Nimiq$/,
  /^https:\/\/t\.me\/nimiq$/,
  /^http:\/\/t\.me\/nimiq$/,
  /^https:\/\/t\.me\/joinchat\/AAAAAEJW-ozFwo7Er9jpHw$/,
  /^https:\/\/t\.me\/Nimcubator$/,
  /^https:\/\/t\.me\/NimiqTipBot$/,
  /^https:\/\/t\.me\/NimiqTip_bot$/,
  /^https:\/\/t\.me\/NimiqMiners$/,
  /^https:\/\/t\.me\/Kucoin_Exchange$/,
  /^https:\/\/t\.me\/stabilediese$/,
  /^https:\/\/www\.youtube\.com\/watch\?v=bspRbC4K84o$/,
  /^https:\/\/www\.youtube\.com\/watch\?v=Ye9bbDa9o8w$/,
  /^https:\/\/www\.youtube\.com\/shorts\/-ogl5pAwW_U$/,
  /^https:\/\/www\.youtube\.com\/channel\/UCJ1qu3KXwfmkGwBkU8F1jQg$/,
  /^https:\/\/youtu\.be\/QWbRZVcIrnk$/,
  /^https:\/\/youtu\.be\/JhkVjRxfj7A$/,
  /^https:\/\/youtu\.be\/A5zV5YmorH0$/,
  /^https:\/\/youtu\.be\/AEYrQxGILYo\?list=TLPQMDEwNDIwMjA39zgXdzF0BA$/,
  /^https:\/\/youtu\.be\/i0GVdberKZM$/,
  /^https:\/\/youtu\.be\/dA40oyDVtqs$/,
  /^https:\/\/www\.youtube\.com\/watch\?v=dA40oyDVtqs$/,
  /^https:\/\/youtu\.be\/OmjdtqpWuwY$/,
  /^https:\/\/youtu\.be\/RBQ_6OqVO68$/,
  /^https:\/\/youtu\.be\/tfae8ld1ILc$/,
  /^https:\/\/youtu\.be\/Yd02UOmKWhU$/,
  /^https:\/\/youtu\.be\/ROtyliYTobE$/,
  /^https:\/\/youtu\.be\/IJDGE8Mg-uw$/,
  /^https:\/\/www\.youtube\.com\/watch\?v=ME5osB8sX_s$/,
  /^https:\/\/www\.youtube\.com\/watch\?v=9TsZ_xjExXs$/,
  /^https:\/\/www\.youtube\.com\/watch\?v=klN-ToclwW4$/,
  /^https:\/\/www\.youtube\.com\/watch\?v=yURX6FMky-A$/,
  /^https:\/\/www\.youtube\.com\/watch\?v=ZIW46wXbPSw$/,
  /^https:\/\/www\.youtube\.com\/watch\?v=i0GVdberKZM$/,
  /^https:\/\/www\.youtube\.com\/watch\?v=3RhVpyHZBiQ$/,
  /^https:\/\/www\.youtube\.com\/watch\?v=ROtyliYTobE$/,
  /^https:\/\/www\.youtube\.com\/watch\?v=j50u5jtEjFM$/,
  /^https:\/\/www\.youtube\.com\/watch\?v=kH5bNvN753M&amp;feature=youtu\.be$/,
  /^https:\/\/youtube\.com\/shorts\/3OQAe2elrks\?feature=share$/,
  /^https:\/\/twitter\.com\/Max_Nimiq$/,
  /^https:\/\/twitter\.com\/nimiqnetwork$/,
  /^https:\/\/twitter\.com\/MatthiasHauff\/status\/1108748966655680518$/,
  /^https:\/\/twitter\.com\/nimiq\/status\/1194441520897757184$/,
  /^https:\/\/twitter\.com\/terorie_dev\/status\/1201354792527896576$/,
  /^https:\/\/twitter\.com\/nimiq\/status\/1200533569048850435$/,
  /^https:\/\/twitter\.com\/nimiq\/status\/1195070449706766342$/,
  /^https:\/\/twitter\.com\/nimiq\/status\/1527004101992755202$/,
  /^https:\/\/twitter\.com\/nimiq\/status\/1237477129362853900$/,
  /^https:\/\/twitter\.com\/nimiq\/status\/1271109189268639749$/,
  /^https:\/\/twitter\.com\/nimiq\/status\/1443243432865058817$/,
  /^https:\/\/twitter\.com\/nimiq\/status\/1640803931424018452$/,
  /^https:\/\/twitter\.com\/nimiq\/status\/1638246500311486464$/,
  /^https:\/\/x\.com\/nimiq\/status\/1793642221704724940$/,
  /^https:\/\/x\.com\/nimiq\/status\/1783338363660951860$/,
  /^https:\/\/x\.com\/i\/spaces\/1vOxwrmqYMoJB$/,
  /^https:\/\/x\.com\/i\/spaces\/1YqGovYkQaMKv\.$/,
  /^https:\/\/twitter\.com\/i\/spaces\/1MnGnMperDOKO$/,
  /^https:\/\/twitter\.com\/NimiqMemes$/,
  /^https:\/\/twitter\.com\/nimiq\/status\/1236335060246290432\/photo\/1$/,
  /^https:\/\/t\.me\/nimiqtip_bot$/,
  /^https:\/\/twitter\.com\/nimiq\/status\/1291040529501880321$/,
  /^https:\/\/discord\.gg\/pvdg5AZWk7$/,
  /^https:\/\/discord\.gg\/BCxjthcXtX$/,
  /^https:\/\/discord\.gg\/J753fQUnpZ$/,
  /^https:\/\/discord\.gg\/XB9SGtEuur$/,

  // LinkedIn
  /^https:\/\/www\.linkedin\.com\/in\/adriangarcia81$/,
  /^https:\/\/www\.linkedin\.com\/in\/elionchin$/,
  /^https:\/\/www\.linkedin\.com\/in\/desouzamartin$/,
  /^https:\/\/www\.linkedin\.com\/in\/math%C3%A9o-r-b301a996$/,
  /^https:\/\/www\.linkedin\.com\/in\/maxvburger\/$/,
  /^https:\/\/www\.linkedin\.com\/in\/maxvburger$/,
  /^https:\/\/www\.linkedin\.com\/in\/paberr$/,
  /^https:\/\/www\.linkedin\.com\/in\/s%C3%B6ren-schwert-484b6b100$/,
  /^https:\/\/www\.linkedin\.com\/in\/stefan-koolen$/,

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
  /^https:\/\/www\.supersimpleswap\.com\/$/,
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
  /^https:\/\/medium\.com\/nimiq-network\/public-bug-bounty-program-now-live-1eb09eee47ea$/,
  /^https:\/\/medium\.com\/nimiq-network\/nimiq-a-peer-to-peer-payment-protocol-native-to-the-web-ffd324bb084$/,
  /^https:\/\/medium\.com\/nimiq-network\/introducing-the-browser-based-blockchain-63d408add368$/,
  /^https:\/\/medium\.com\/nimiq-network\/nimiq-network-token-sale-terms-9af2e7fd6228$/,
  /^https:\/\/medium\.com\/nimiq-network\/token-sale-finalized-closing-analysis-ee5b92d0cd9c$/,
  /^https:\/\/medium\.com\/nimiq-network\/luna-has-landed-1da78170a88f$/,
  /^https:\/\/medium\.com\/nimiq-network\/nimiq-identicons-8789b68e1668$/,
  /^https:\/\/medium\.com\/nimiq-network\/attention-net-holders-a735d67d0e8a$/,
  /^https:\/\/medium\.com\/nimiq-network\/first-week-of-the-nimiq-blockchain-f34f9d3a6b32$/,
  /^https:\/\/medium\.com\/nimiq-network\/nimiq-update-965e7148c3e1$/,
  /^https:\/\/medium\.com\/nimiq-network\/nimiq-past-present-future-9eca2496ff76$/,
  /^https:\/\/medium\.com\/nimiq-network\/nimiq-swag-shop-b33eabb2e3ec$/,
  /^https:\/\/medium\.com\/nimiq-network\/transparency-report-74d4d89933fe$/,
  /^https:\/\/medium\.com\/nimiq-network\/nimiq-community-meetup-c8128400c582$/,
  /^https:\/\/medium\.com\/nimiq-network\/community-project-funding-9a0ebdbeb819$/,
  /^https:\/\/medium\.com\/nimiq-network\/nimiq-totalcrypto-io-cdfef4e22804$/,
  /^https:\/\/medium\.com\/nimiq-network\/and-then-there-was-only-nim-962f43a53aad$/,
  /^https:\/\/medium\.com\/nimiq-network\/nimiq-makes-fiat-currencies-blockchain-compatible-7503096a6252$/,
  /^https:\/\/medium\.com\/nimiq-network\/research-collaboration-albatross-63599386a7c9$/,
  /^https:\/\/medium\.com\/nimiq-network\/trust-wallet-collaboration-b6b90c0bb1d5$/,
  /^https:\/\/medium\.com\/nimiq-network\/nimiq-acquires-stake-in-weg-bank-ag-f2637b7b2e7a$/,
  /^https:\/\/medium\.com\/nimiq-network\/the-biggest-release-since-mainnet-launch-f8096e33dab9$/,
  /^https:\/\/medium\.com\/nimiq-network\/new-ui-ux-ea5283dd2e0d$/,
  /^https:\/\/medium\.com\/nimiq-network\/nimiq-is-speaking-in-vienna-d6d0faf3457d$/,
  /^https:\/\/medium\.com\/nimiq-network\/agoratrade-nimiq-96de83a737c2$/,
  /^https:\/\/medium\.com\/nimiq-network\/community-project-funding-6a1f9ec3a16c$/,
  /^https:\/\/medium\.com\/bitcraft\/hd-wallets-explained-from-high-level-to-nuts-and-bolts-9a41545f5b0$/,
  /^https:\/\/medium\.com\/@VitalikButerin\/quadratic-arithmetic-programs-from-zero-to-hero-f6d558cea649$/,
  /^https:\/\/medium\.com\/@VitalikButerin\/exploring-elliptic-curve-pairings-c73c1864e627$/,
  /^https:\/\/medium\.com\/@VitalikButerin\/zk-snarks-under-the-hood-b33151a013f6$/,
  /^https:\/\/medium\.com\/u\/d3191ca07046\?source=post_page-----b6b90c0bb1d5----------------------$/,
  /^https:\/\/medium\.com\/u\/57600910a883\?source=post_page-----b6b90c0bb1d5----------------------$/,
  /^https:\/\/medium\.com\/nimiq\/nimiq-a-peer-to-peer-payment-protocol-native-to-the-web-ffd324bb084$/,

  // Additional URLs
  /^https:\/\/wallet\.nimiq-testnet\.com\/$/,
  /^https:\/\/supersimpleswap\.com\/$/,
  /^http:\/\/supersimpleswap\.com\/$/,
  /^https:\/\/referrals\.supersimpleswap\.com\/$/,
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

  // GitHub URLs
  /^https:\/\/github\.com\/nimiq$/,
  /^https:\/\/github\.com\/nimiq\/wallet$/,
  /^https:\/\/github\.com\/nimiq\/keyguard$/,
  /^https:\/\/github\.com\/nimiq\/core-rs-albatross\/$/,
  /^https:\/\/github\.com\/nimiq\/core-rs-albatross$/,
  /^https:\/\/github\.com\/nimiq\/ledger-app-nimiq$/,
  /^https:\/\/github\.com\/nimiq\/hub$/,
  /^https:\/\/github\.com\/nimiq\/core-rs-albatross\/blob\/albatross\/README\.md#testnet$/,
  /^https:\/\/github\.com\/nimiq\/core-rs-albatross\/issues$/,
  /^https:\/\/github\.com\/nimiq\/core-rs-albatross\?tab=readme-ov-file#testnet$/,
  /^https:\/\/github\.com\/satoshilabs\/slips\/blob\/master\/slip-0010\.md$/,
  /^https:\/\/github\.com\/consensys\/handel$/,
  /^https:\/\/github\.com\/ethereum\/wiki\/wiki\/Patricia-Tree$/,
  /^https:\/\/github\.com\/nimiq\/community\/blob\/master\/seeds\.txt$/,
  /^https:\/\/github\.com\/nimiq\/core-rs$/,
  /^https:\/\/github\.com\/nimiq-network\/core-js$/,
  /^https:\/\/github\.com\/nimiq-network\/core$/,
  /^https:\/\/github\.com\/viquezclaudio$/,
  /^https:\/\/github\.com\/danimoh$/,
  /^https:\/\/github\.com\/jsdanielh$/,
  /^https:\/\/github\.com\/test$/,
  /^https:\/\/github\.com\/onmax$/,
  /^https:\/\/github\.com\/styppo$/,
  /^https:\/\/github\.com\/nibhar$/,
  /^https:\/\/github\.com\/sisou$/,
  /^https:\/\/github\.com\/Eligioo$/,
  /^https:\/\/github\.com\/Eligioo\/twinibot-telegram$/,
  /^https:\/\/github\.com\/jgraef\/nimiq-api-python$/,
  /^https:\/\/github\.com\/hector-nimiq\/nimeth-atomicswap$/,
  /^https:\/\/github\.com\/nimiq\/community\/blob\/master\/Nimiq%202-0%20Supply%20Curves%20v1-0\.xlsx\?raw=true$/,
  /^https:\/\/github\.com\/nimiq\/community\/blob\/master\/Nimiq%202-0%20Supply%20Curves%20v1-0\.ods\?raw=true$/,
  /^https:\/\/github\.com\/nimiq\/community\/blob\/master\/Nimiq%202-0%20Supply%20Curve%20Final\.xlsx\?raw=true$/,
  /^https:\/\/github\.com\/nimiq\/ceremony-attestations$/,
  /^https:\/\/github\.com\/nimiq\/ceremony-attestations\/commit\/b03357ac78cc6fa9db9bcd9be99798c2da0f786a$/,
  /^https:\/\/github\.com\/nimiq\/prestaking-giveaway-script$/,
  /^https:\/\/github\.com\/nimiq\/prestaking-giveaway-script\/blob\/master\/prestakers-round1\.csv$/,
  /^https:\/\/github\.com\/nimiq\/ledger-api$/,
  /^https:\/\/github\.com\/nimiq\/core-js\/releases\/tag\/v1\.6\.4$/,
  /^https:\/\/github\.com\/nimiq\/core-rs-albatross\/releases\/tag\/v1\.0\.0-rc\.5$/,
  /^https:\/\/github\.com\/nimiq\/core-rs-albatross\/releases\/tag\/v1\.0\.0-rc\.0$/,
  /^https:\/\/github\.com\/nimiq\/core-rs-albatross\/blob\/albatross\/lib\/src\/config\/config_file\/client\.example\.toml#L35C1-L51C2$/,
  /^https:\/\/github\.com\/nimiq\/core-rs-albatross\/blob\/albatross\/lib\/src\/config\/config_file\/client\.example\.toml#L121$/,
  /^https:\/\/github\.com\/nimiq\/core-rs-albatross\/blob\/albatross\/docs\/becoming_validator\.md$/,
  /^https:\/\/github\.com\/nimiq\/fastspot-api$/,
  /^https:\/\/github\.com\/nimiq\/nano-sync$/,
  /^https:\/\/github\.com\/nimiq\/albatross-simulator$/,
  /^https:\/\/github\.com\/sisou\/nimiqgiftcards\.com$/,
  /^https:\/\/github\.com\/terorie$/,
  /^https:\/\/github\.com\/terorie\/$/,
  /^https:\/\/github\.com\/lucaslg26$/,
  /^https:\/\/github\.com\/Albermonte\/NIM-Pools-Hub-Miner$/,
  /^https:\/\/github\.com\/Eligioo\/nimiq-rust-rpc-client$/,
  /^https:\/\/github\.com\/ethereum\/wiki\/wiki\/Proof-of-Stake-FAQ$/,
  /^https:\/\/github\.com\/matter-labs\/awesome-zero-knowledge-proofs$/,
  /^https:\/\/github\.com\/onmax\/nimiq-awesome$/,
  /^https:\/\/github\.com\/nimiq\/wallet\/blob\/6a23f3defaeb69f76f65c8f9e56bc08995790801\/src\/ethers\.ts#L544$/,
  /^https:\/\/github\.com\/nimiq\/wallet\/blob\/usdc\/src\/ethers\.ts#L327$/,
  /^https:\/\/github\.com\/nimiq\/keyguard\/blob\/0012747244437ca27f96a4a682f4b47993eeceba\/src\/request\/sign-polygon-transaction\/SignPolygonTransaction\.js#L165$/,
  /^https:\/\/github\.com\/nimiq\/keyguard\/blob\/0012747244437ca27f96a4a682f4b47993eeceba\/src\/request\/sign-polygon-transaction\/SignPolygonTransaction\.js#L212$/,
  /^https:\/\/github\.com\/nimiq\/wallet\/blob\/master\/src\/ethers\.ts#L718$/,
  /^https:\/\/github\.com\/vernnobile\/MuliFont$/,
  /^https:\/\/github\.com\/catarse\/catarse$/,
  /^https:\/\/github\.com\/valentinvieriu\/nimiq-vanity-wallet$/,

  // Community & Projects
  /^https?:\/\/(www\.)naka\.com/,
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
  /^https?:\/\/(www\.)?bluecode\.com\/en$/,
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
    // Only run in production builds
    if (nuxt.options.dev)
      return

    nuxt.hook('nitro:build:public-assets', () => {
      const whitelist = LINK_WHITELIST
      const outputDir = resolve(nuxt.options.nitro.output?.dir || '.output', 'public')
      const errors: string[] = []
      const regexUsage = new Map<number, { pattern: RegExp, used: boolean, matchCount: number }>()

      // Initialize regex usage tracking
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
        totalRegexPatterns: whitelist.length,
        usedRegexPatterns: 0,
        unusedRegexPatterns: 0,
      }

      findHtmlFiles(outputDir).forEach((file) => {
        extractLinks(readFileSync(file, 'utf-8'), file).forEach((link) => {
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
            console.warn(`⚠️  HTTP URL detected: ${link.url} in ${link.file}:${link.line}`)
          }

          const matchResult = isValidLinkWithTracking(link.url, whitelist, regexUsage)
          if (matchResult.isValid) {
            stats.validExternalLinks++
          }
          else {
            stats.invalidExternalLinks++
            errors.push(`❌ Invalid external link: ${link.url}
   📍 Found in: ${link.file}:${link.line}
   🔧 Add pattern to LINK_WHITELIST in modules/link-validation.ts`)
          }
        })
      })

      // Calculate regex usage statistics
      stats.usedRegexPatterns = Array.from(regexUsage.values()).filter(r => r.used).length
      stats.unusedRegexPatterns = stats.totalRegexPatterns - stats.usedRegexPatterns

      console.error('\n📊 Link Validation Statistics:')
      console.table({
        'Total links found': stats.totalLinks,
        'Internal links': stats.internalLinks,
        'External links': stats.externalLinks,
        'HTTP-only links': stats.httpOnlyLinks,
        'Valid external links': stats.validExternalLinks,
        'Invalid external links': stats.invalidExternalLinks,
        'Total regex patterns': stats.totalRegexPatterns,
        'Used regex patterns': stats.usedRegexPatterns,
        'Unused regex patterns': stats.unusedRegexPatterns,
      })

      // Report unused regex patterns
      const unusedPatterns = Array.from(regexUsage.entries())
        .filter(([_, data]) => !data.used)
        .map(([index, data]) => ({ index, pattern: data.pattern.source }))

      if (unusedPatterns.length > 0) {
        console.warn(`\n⚠️  Found ${unusedPatterns.length} unused regex pattern(s):`)
        unusedPatterns.forEach(({ index, pattern }) => {
          console.warn(`   ${index + 1}. /${pattern}/`)
        })
        console.warn('   💡 Consider removing unused patterns to keep the whitelist clean')
      }
      else {
        console.error('✅ All regex patterns are being used!')
      }

      if (errors.length > 0) {
        console.error(`\n🚫 Found ${errors.length} invalid external link(s):`)
        errors.forEach((error, index) => {
          console.error(`\n${index + 1}. ${error}`)
        })
        process.exit(1)
      }
      else {
        console.error('✅ All external links passed validation!')
      }
    })
  },
})

function findHtmlFiles(dir: string): string[] {
  if (!existsSync(dir))
    return []
  const files: string[] = []

  function scan(currentDir: string) {
    readdirSync(currentDir, { withFileTypes: true }).forEach((entry) => {
      const fullPath = resolve(currentDir, entry.name)
      entry.isDirectory() ? scan(fullPath) : entry.name.endsWith('.html') && files.push(fullPath)
    })
  }

  scan(dir)
  return files
}

function extractLinks(content: string, filePath: string) {
  return content.split('\n').flatMap((line, index) => {
    const matches = line.match(/<a[^>]+href=["']([^"']+)["'][^>]*>/gi) || []
    return matches.map((match) => {
      const href = match.match(/href=["']([^"']+)["']/)?.[1]
      return href ? { url: href, line: index + 1, file: filePath } : null
    }).filter(Boolean)
  })
}

function isValidLinkWithTracking(
  url: string,
  whitelist: RegExp[],
  regexUsage: Map<number, { pattern: RegExp, used: boolean, matchCount: number }>,
): { isValid: boolean, matchedPatternIndex?: number } {
  if (url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:'))
    return { isValid: true }
  if (!url.startsWith('http'))
    return { isValid: true } // Internal links

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
