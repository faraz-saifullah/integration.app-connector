---
url: "https://console.integration.app/docs/getting-started/authentication"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/getting-started/authentication)
- [Front End](https://console.integration.app/docs/getting-started/front-end)
- [Backend](https://console.integration.app/docs/getting-started/backend)
- [Self-hosting](https://console.integration.app/docs/getting-started/self-hosting)

# Authentication

To access integration engine through the Rest API or Front-end SDK, you need an access token that incapsulates information about:

- Workspace you want to interact with.
- Permissions you want to have.
- Your customer that is using the integration.

Here is how to get the token.

## Access Token

Never generate authentication token on your front-end.
It contains Workspace Secret that should never be exposed to your users.
Only generate it on the backend.

To authenticate, create a JSON Web Token with your user's data:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
import jwt from 'jsonwebtoken'
// Your workspace key and secret.
// You can find them on the Settings page.
const WORKSPACE_KEY = '<WORKSPACE_KEY>'
const WORKSPACE_SECRET = '<WORKSPACE_SECRET>'

const tokenData = {
  // Identifier of your customer (user, team, or organization).
  id: '{CUSTOMER_ID}',
  // Human-readable customer name.
  name: '{CUSTOMER_NAME}',
  // (optional) Any user fields you want to attach to your customer.
  fields: {
    userField: '<user field value>'
  }
}

const options = {
  issuer: WORKSPACE_KEY,
  // To prevent token from being used for too long
  expiresIn: 7200,
  // HS256 signing algorithm is used by default,
  // but we recommend to go with more secure option like HS512.
  algorithm: 'HS512'
}

const token = jwt.sign(tokenData, WORKSPACE_SECRET, options)
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fgetting-started%2Fauthentication) to run this example

Default algorithm for signing tokens is HS256, but we recommend to go with more secure option like ES256 or RS256.
We support all the algorithms supported by [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#algorithms-supported) library.

You can find your Workspace Key and Secret on the [Settings](https://console.integration.app/w/0/settings) page.

Then use this token to initialize [Javascript SDK](https://console.integration.app/docs/getting-started/front-end/javascript) or in the REST API requests.

Authentication token contains information integration.app needs to know about your user:

- `id` \- user ID, unique within the workspace.
- `name` \- username to identify them user in the integration.app UI.
- `fields` \- any additional information you want to store about the user. For example:

  - API key for integration.app to call your API on behalf of this user.
  - User preferences for integrations.

The token is signed by the Secret Key you can find in your [Workspace Settings](https://console.integration.app/w/0/settings).

Alternatively, you can use public/private key pair to sign the token. To do that, you need to pass the private key to the `sign` method instead of the secret
and provide the public key in the [Workspace Settings](https://console.integration.app/w/0/settings). This is more secure option, and we recommend to use it.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
import jwt from 'jsonwebtoken'

// Your workspace key and secret.
// You can find them on the Settings page.
const WORKSPACE_KEY = '<WORKSPACE_KEY>'

// Do not expose your private key to anyone. You should only use it to sign tokens.
const PRIVATE_KEY = `<YOUR PRIVATE KEY>`

const tokenData = {
  // Identifier of user or organization.
  id: '{USER_ID}',
  // Human-readable name (it will simplify troubleshooting)
  name: '{USER_NAME}',
  // (optional) Any user fields you want to attach to your user.
  fields: {
    userField: '<user field value>'
  }
}

const options = {
  issuer: WORKSPACE_KEY,
  // To prevent token from being used for too long
  expiresIn: 7200,

  algorithm: 'ES256' // or any other asymmetric algorithm you prefer (RS*, ES*, PS*)
}

const token = jwt.sign(tokenData, PRIVATE_KEY, options)
```

If you want to set up integrations not for a single user, but for a larger entity like organization,
you should use the organization ID instead of an individual user ID.

To check that you generated the token correctly, paste it here:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
import { IntegrationAppClient } from '@integration-app/sdk'

const integrationApp = new IntegrationAppClient({
  token: '{TOKEN}',
})

const self = await integrationApp.self.get()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fgetting-started%2Fauthentication) to run this example

You can also use the JWT token explorer at [jwt.io](https://jwt.io/).

## Admin Token

When you want to make admin-level actions like editing users, you need to generate an Admin Token. It is generated in exactly the same way, except:

- You MUST add `isAdmin` claim to it with any non-empty value.
- You SHOULD NOT add `id` claim to it - admin token should not be attached to any user.

Here is an example of generating an admin token:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
import jwt from 'jsonwebtoken'
// Your workspace key and secret.
// You can find them on the Settings page.
const WORKSPACE_KEY = '<WORKSPACE_KEY>'
const WORKSPACE_SECRET = '<WORKSPACE_SECRET>'

const tokenData = {
  isAdmin: true
}

const options = {
  issuer: WORKSPACE_KEY,
  // To prevent token from being used for too long
  expiresIn: 7200,
  // HS256 signing algorithm is used by default,
  // but we recommend to go with more secure option like HS512.
  algorithm: 'HS512'
}

const token = jwt.sign(tokenData, WORKSPACE_SECRET, options)
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fgetting-started%2Fauthentication) to run this example

## Read More

#### [Customers](https://console.integration.app/docs/membrane/customers/customers)

People or groups using integrations in your app.

#### [Javascript SDK](https://console.integration.app/docs/getting-started/front-end/javascript)

Use integration.app in your app's front-end.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Access Token](https://console.integration.app/docs/getting-started/authentication#access-token)
- [Admin Token](https://console.integration.app/docs/getting-started/authentication#admin-token)
- [Read More](https://console.integration.app/docs/getting-started/authentication#read-more)

Docs · Integration Console