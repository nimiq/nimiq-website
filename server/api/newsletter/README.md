# Newsletter Integration

This folder contains the API endpoint and utilities to subscribe users to a Zoho Campaigns list.

## OAuth with Zoho

There are two distinct flows and two helper functions. Use each in the right phase:

- Initial setup (one‑time): `getZohoTokens()` exchanges an OAuth authorization `code` for an `access_token` and a `refresh_token`. You run this once to obtain the long‑lived `refresh_token` and then store it in `.env`.
- Runtime (per request): `getZohoAccessToken()` uses the stored `refresh_token` to obtain a short‑lived `access_token` used in API calls to Zoho.

### 1) Initial setup (one‑time)

1. Create an app in the Zoho API Console: https://accounts.zoho.com/developerconsole
2. Choose Self Client and copy `Client ID` and `Client Secret`.
3. Decide and note the OAuth `scope` required by your API calls (e.g., Campaigns scopes). Keep it consistent.
4. Generate an authorization `code` in the console.
5. Add these to your `.env` under `zoho` config (client ID/secret, scope, request URL, and the code).
6. Run `getZohoTokens()` once (e.g., by temporarily invoking it from a local route or script). It will print a JSON object containing `refresh_token` to the server logs.
7. Copy the `refresh_token` to `.env` and remove the temporary invocation of `getZohoTokens()`.

Important: Do not call `getZohoTokens()` in the live subscribe endpoint. It is only for the initial exchange.

### 2) Create your Campaigns list

Create the mailing list in Zoho Campaigns and copy its `listkey`. Store it in `.env`.

### 3) Custom fields

Create any custom fields you want to capture (e.g., `Topics`, `Products`, `Consent`) following Zoho’s docs: https://help.zoho.com/portal/en/kb/campaigns/user-guide/settings/customization/articles/about-custom-fields

Update the enums in `server/utils/newsletter.ts` so `NewsletterTopics` and `NewsletterProducts` exactly match the custom field values used in Zoho and the frontend.

## Making requests to Zoho (runtime)

The subscribe endpoint uses `getZohoAccessToken()` to fetch an `access_token` from your stored `refresh_token`, then calls Zoho’s list subscribe API.

- Authorization header: `Authorization: Zoho-oauthtoken <access_token>`
- Endpoint example: `https://campaigns.zoho.<domain>/api/v1.1/json/listsubscribe`
- Required params typically include `listkey`, `resfmt`, `source`, and `contactinfo`.

Ensure your OAuth scope includes the permissions needed by the endpoint you call, and that your custom field names match what you send (`Topics`, `Products`, `Consent`).
