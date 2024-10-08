# Newsletter Documentation

## OAuth with Zoho

### Overview

To integrate Zoho into your application, you'll use Zoho's OAuth 2.0 system to obtain access and update tokens. These tokens provide secure access to the Zoho APIs.

### Update Token

1. Zoho API Console: Start by building your application in the [Zoho API Console] (https://accounts.zoho.com/developerconsole).
2. Generate the tokens to generate the Refresh Token:
   2.1. Select Self Client and copy the Client ID and Client Secret. Save all these strings in the .env file.
   2.2. Make sure you also store the `scope` field in the .env so that it is the same for multiple requests.
   2.3. Generate a `code`.
   2.4. Run the function `getZohoTokens` in this repo. You can call this function from the `subscribe.post.ts` using a dummy request.
3. You will have the refresh token in the console. Save it in the .env

### Create your campaign list

This is where all your emails will be collected. Generate it and get the list key.

### Custom Fields

Follow the instructions from [Zoho] (https://help.zoho.com/portal/en/kb/campaigns/user-guide/settings/customization/articles/about-custom-fields) to create custom fields.

Once you have done this, make sure you update the NewsletterTopics and NewsletterProducts enums accordingly. These fields will also be used in the form, so make sure you change them too.

## Make a request to Zoho

Once you have completed all the previous tasks, you can use `getZohoAccessToken` to generate `access_tokens` which will be added to your request header as `const headers = { Authorisation: 'Zoho-oauthtoken ${access_token}' }`.

Make sure that the endpoint you are using is compatible with the scope used when generating the refresh token.
