---
title: New Wallet Update
description: Refreshed account-creation and purchase of NIM using credit cards!
slug: new-wallet-update
publishedAt: "2021-02-10"
updatedAt: 2023-12-07T16:41:37+0000
authors:
  - SÖREN SCHWERT
image: /images/blog/new-wallet-update/06ad4392-6467-42b6-a901-8d65646f176c_blog_new-wallet-update_1.png
---

We have updated our account-creation process in the Nimiq Keyguard. It now features a beautiful animation while you enter and confirm your password, and requires that users download the Login File for their newly created account. iOS and Safari users also receive some love!

## The need for a backup

Since launching the Nimiq Wallet we have learned from new users on Twitter and Telegram that they set up a new account, had NIM transferred into it, and then lost access to the account because they had no backup. Sometimes the browser just “forgets” about the account, sometimes people use an incognito tab and close it, sometimes their computer crashes and all is gone.

![](/assets/images/prismic/b3e8b749-07ef-4eef-b782-84d97ed8d813_blog_new-wallet-update_2.png)

We have had a big orange warning in the wallet, visible directly when users return from the Keyguard, plus a welcome message that concludes in a prompt to download the Login File. However, this method fails to account for accounts created in another flow, like when redeeming a cashlink for the first time. If the user does not visit the wallet after redeeming their first cashlink, there is a risk of loosing access to the wallet.

![](/assets/images/prismic/29b101a2-f384-480b-bf29-bb3c15d5f2a4_blog_new-wallet-update_3.gif)

We initially designed the account-creation process with the purpose of being the quickest, simplest, and easiest signup to crypto possible. And we still think our Login Files are a great improvement over writing down the full 24 recovery words (recovery words are still very important - and users still get prompted to export them from the wallet).

We have now made downloading the Login File a requirement, to make sure all new users have a backup of their account in a persistent location.

## Buy NIM & BTC with Credit Card

![](/assets/images/prismic/624fcced-0c43-4344-8d9e-dca57ca24c78_blog_new-wallet-update_4.png)

We are happy to announce our in-wallet integration with Moonpay and their global crypto-payments infrastructure. Click on the “Buy/Sell” button in the left sidebar of your Wallet and select “To Moonpay”. The Moonpay interface will be loaded right inside your Wallet and the NIM and BTC you buy will be directly deposited into your respective Wallet address. Please note that Moonpay requires creating an account with them and requires KYC for purchases above a certain limit per month.

## Improvements for iOS & Safari

iOS & Safari users surely noticed how their BTC account was not automatically enabled after creating a new account, requiring an extra, sometimes long-loading BTC-activation process. Also, their account name was not properly displayed in the wallet, instead showing a number in its place.

We found and squashed both of these issues, for a better experience on iDevices and Macs.

## Translations

Our translators have been busy! As such this update includes lots of new Chinese translations, along with improvements in other languages as well.

## Bug fixes & performance

![](/assets/images/prismic/ae4c501f-ea62-4f10-93b6-cece2de694d5_blog_new-wallet-update_5.png)

We fixed an edge-case that should prevent some Swaps from failing, removed unused code from our bundles, and improved some visuals and UI glitches.

## How to update

The update for the Keyguard is automatic. The next time you create an account, you will be greeted by the new account-creation experience.

![](/assets/images/prismic/ac871740-94d1-4eda-b1bb-bb7c0cc93edb_blog_new-wallet-update_6.png)

For the updates in the Wallet (like the iOS BTC activation and Moonpay), you will see a green dot next to the “Settings” menu item after a few seconds the next time you open the Wallet. Follow it to the settings and click “Update now” to get the new and shiny stuff. [✨](https://emojipedia.org/sparkles/#:~:text=Emoji%20Meaning,beauty%2C%20gratitude%2C%20and%20excitement.)

Happy Nimiqing!
