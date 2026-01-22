---
title: Liquidity mining on Nimiq with Hummingbot
description: Nimiq is collaborating with Hummingbot to allow Nimiq supporters to earn rewards by adding liquidity to the Nimiq Ecosystem in a process called Liquidity Mining. Read more to participate.
slug: liquidity-mining-on-nimiq-with-hummingbot
publishedAt: "2022-02-24"
updatedAt: 2023-12-07T16:42:45+0000
authors:
  - TEAM NIMIQ
image: /images/blog/liquidity-mining-on-nimiq-with-hummingbot/fded75f1-a69c-481a-81ce-8772890dca73_blog_liquidity-mining-on-nimiq-with-hummingbot_1.png
---

Providing an easy way for newcomers to get into Nimiq is vital for the overall health of the Ecosystem. [SuperSimpleSwap](https://supersimpleswap.com/) is a great way for users in the European Union to get NIM at a steady market price. For crypto users outside of the EU, exchanges like KuCoin remain the best option. Without good liquidity in an exchange, it would become difficult to buy NIM while maintaining the expected market price. That is why having good liquidity becomes important.

Nimiq is collaborating with Hummingbot to allow Nimiq supporters to earn rewards by adding liquidity to the Nimiq Ecosystem in a process called Liquidity Mining. Do you want to participate? We have created a step-by-step guide based on [Hummingbot's quickstart guide](https://hummingbot.io/en/academy/quickstart/) to get you started. Please note that liquidity mining is a process that requires trading and technical knowledge.

## Get started with Liquidity Mining

Watch [this YouTube video](https://www.youtube.com/watch?v=ME5osB8sX_s) to get started, or read [the Hummingbot guide](https://hummingbot.io/en/academy/quickstart/).

**Prerequisites:**

- Kucoin Account (including NIM or USDT on trading account)
- Linux/Mac/Windows PC

**Step-by-step guide**

1. Create API keys

1.1 Go to the API management section of the Kucoin website:

![](/assets/images/prismic/6c3f4dbd-b26e-4886-9523-94b1000c83c9_blog_liquidity-mining-on-nimiq-with-hummingbot_2.png)

1.2 Find the Create API command to create two API keys.

1.3 The first API key should have Enable Reading checked in setup. This will be used to create the snapshots that hummingbot miner will read to calculate rewards. In the next section, you will add this key to the Hummingbot Miner app, which allows it to verify your bot’s activity and allocate your rewards. (Read-only key: used by Hummingbot Miner to track and verify your order data in order to allocate rewards to you. Additional verification steps may be needed, including two-factor authentication (2FA) or verification by SMS/email.)

1.4 In KuCoin, you can create a read-only API by only checking the General option and leaving Trade unchecked:

![](/assets/images/prismic/b50062ec-83dc-40f5-954d-ab4ae4c1705e_blog_liquidity-mining-on-nimiq-with-hummingbot_3.png)

1.5 The second key should be trade enabled. Later, you will use this API key with the Hummingbot client to allow it to place and fill orders on a connected exchange. (Trade key: used by the Hummingbot software to run an automated bot that automatically creates and cancels orders)

1.6 For each API key, make sure to save the API key, secret key, and passphrase (if required), since the exchange only shows them to you upon creation. You will need the public and secret keys for both APIs in the following steps!

Afterwards, you should have two keys, a read-only key and a trade-enabled key:

![](/assets/images/prismic/7600a056-4f7c-41a2-a77e-ac7a1aa36937_blog_liquidity-mining-on-nimiq-with-hummingbot_4.png)

2. Configure Hummingbot Miner

2.1 Navigate to Hummingbot Miner, and click on Log in

2.2 Select Sign up

2.3 Enter your email address, read and agree to the Terms of Service, then click on Create account

2.4 Check your email to confirm your account

2.5 On the Hummingbot Miner email, click on Log in to Hummingbot Miner. You should now be logged into Hummingbot Miner with your new account.

2.6 Go to the Settings page, and add the read-only API to your account.

2.7 Add the read-only API key, Secret key, and Passphrase generated in step one:

![](/assets/images/prismic/e92ce225-9894-4521-8b6e-e88520d52400_blog_liquidity-mining-on-nimiq-with-hummingbot_5.png)

Please do not attempt to use the same API key on more than one Hummingbot miner account. Doing so will be seen as an attempt to cheat the system, since this could potentially cause users to be rewarded multiple times for the same orders, and will result in blacklisting.

3. Install Hummingbot

- How-to video to [install Hummingbot on Windows](https://www.youtube.com/watch?v=9TsZ_xjExXs).

[Windows Installer](https://dist.hummingbot.io/hummingbot_v0.46.0_setup.exe)

- How-to video to [install Hummingbot on Mac](https://www.youtube.com/watch?v=klN-ToclwW4).

[Mac Installer](https://dist.hummingbot.io/hummingbot_v0.46.0.dmg)

- How-to install Hummingbot on Linux/Docker

Open a Terminal/Bash window and run the following commands. These commands download and run the Docker installation scripts:

wget https://raw.githubusercontent.com/CoinAlpha/hummingbot/development/installation/docker-commands/create.sh

wget https://raw.githubusercontent.com/CoinAlpha/hummingbot/development/installation/docker-commands/start.sh

wget https://raw.githubusercontent.com/CoinAlpha/hummingbot/development/installation/docker-commands/update.sh

chmod a+x \*.sh

./create.sh

We recommend that serious users install the Docker version of Hummingbot, which is optimized for running multiple bot instances simultaneously.

4. Create bot

Find out how to create a bot [here](https://hummingbot.io/en/academy/quickstart/4-create-bot/)!

5. Earn rewards

Find out how to track orders your bot has placed, see rewards you have earned for liquidity mining, and [monitor your payouts here](https://hummingbot.io/en/academy/quickstart/5-earn-rewards/)!

You can also find a comprehensive video tutorial made specifically for Nimiq Community here:

![](/assets/images/prismic/6b7089a1-8e11-43bf-9179-8e6085fb6d34_blog_liquidity-mining-on-nimiq-with-hummingbot_6.jpg)

This should get you started with Nimiq and Hummingbot. Keep in mind that Liquidity mining is meant for experienced users so be careful and read carefully all the steps. If you have questions you can you the Nimiq Miners [Telegram](https://t.me/NimiqMiners) and [Discord](https://discord.gg/BCxjthcXtX) Groups.

**Disclaimer**: Neither this nor any other documentation regarding Hummingbot constitutes financial advice. Nimiq and Hummingbot do not guarantee rewards, but provide the general public access to the same market making and liquidity mining roles previously reserved for large hedge funds.

Pura vida and happy liquidity mining!

**Team Nimiq**
