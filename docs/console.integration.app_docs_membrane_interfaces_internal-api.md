---
url: "https://console.integration.app/docs/membrane/interfaces/internal-api"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
  - [Scenarios](https://console.integration.app/docs/membrane/interfaces/scenarios)
  - [Actions](https://console.integration.app/docs/membrane/interfaces/actions)
  - [Flows](https://console.integration.app/docs/membrane/interfaces/flows)
  - [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources)
  - [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings)
  - [Data Links](https://console.integration.app/docs/membrane/interfaces/data-links)
  - [Connecting Your App API](https://console.integration.app/docs/membrane/interfaces/internal-api)
  - [Internal Events](https://console.integration.app/docs/membrane/interfaces/internal-events)
  - [Internal Data Schemas](https://console.integration.app/docs/membrane/interfaces/internal-data-schemas)
  - [Api Operations](https://console.integration.app/docs/membrane/interfaces/api-operations)
  - [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections)
  - [API Proxy](https://console.integration.app/docs/membrane/interfaces/api-proxy)
  - [Files](https://console.integration.app/docs/membrane/interfaces/files)
  - [Running Custom Code](https://console.integration.app/docs/membrane/interfaces/custom-code)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

# Connecting Your App API

When integration.app makes requests to your API, it will use configuration from the [Your App / API](https://console.integration.app/w/0/auth-api).

## Authentication and API Client

You can configure how integration.app will authenticate with your API by choosing an authentication method and providing the necessary configuration.

This configuration follows the same structure as [Authentication](https://console.integration.app/docs/connector-builder/authentication) in connectors.

## Credentials

Since there is no explicit process of creating a connectin between Membrane and your API, you need to provide initial credentials yourself.

### Credentials Schema

Credentials Schema is a JSON Schema that describes the structure of credentials you need to authenticate requests to your API.

### Initializing Credentials

There are a few ways of initializing the user's credentials.

Providing credentials when initializing Integration.app Javascript SDK:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
import { IntegrationAppClient } from '@integration-app/sdk'

const integrationApp = new IntegrationAppClient({
  token: '{TOKEN}',
  credentials: {
    apiKey: '{USER_API_KEY}',
  }
})
```

Alternatively, you can provide fetchCredentials method that returns credentials asynchronously:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
import { IntegrationAppClient } from '@integration-app/sdk'

const integrationApp = new IntegrationAppClient({
  token: '{TOKEN}',
  fetchCredentials: () => fetch('/user-credentials').then(res => res.json())
})
```

Whenever you provide credentials or fetchCredentials, the SDK will associate them with the current user and use to authenticate requests going forward.

You can also update credentials for the current user at any time via SDK or API:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp.self.patch({ credentials: newCredentials })
```

### Refreshing Credentials

If you use OAuth2 authentication type, integration.app will automatically refresh credentials when HTTP 401 response code is received.

It will follow the standard OAuth2 token refresh flow: [Refreshing Access Token](https://www.oauth.com/oauth2-servers/access-tokens/refreshing-access-tokens/).

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Authentication and API Client](https://console.integration.app/docs/membrane/interfaces/internal-api#authentication-and-api-client)
- [Credentials](https://console.integration.app/docs/membrane/interfaces/internal-api#credentials)
  - [Credentials Schema](https://console.integration.app/docs/membrane/interfaces/internal-api#credentials-schema)
  - [Initializing Credentials](https://console.integration.app/docs/membrane/interfaces/internal-api#initializing-credentials)
  - [Refreshing Credentials](https://console.integration.app/docs/membrane/interfaces/internal-api#refreshing-credentials)

Docs · Integration Console