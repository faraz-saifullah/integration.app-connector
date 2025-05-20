---
url: "https://console.integration.app/docs/connector-builder/authentication/methods/refresh-credentials"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/connector-builder/authentication)
  - Methods
    - [Get Credentials From Connection Parameters](https://console.integration.app/docs/connector-builder/authentication/methods/get-credentials-from-connection-parameters)
    - [Make Api Client](https://console.integration.app/docs/connector-builder/authentication/methods/make-api-client)
    - [Refresh Credentials](https://console.integration.app/docs/connector-builder/authentication/methods/refresh-credentials)
    - [Test](https://console.integration.app/docs/connector-builder/authentication/methods/test)
  - Types
- [API Specification](https://console.integration.app/docs/connector-builder/api)
- [Events](https://console.integration.app/docs/connector-builder/events)
- [Data Collections](https://console.integration.app/docs/connector-builder/data)
- [Operations](https://console.integration.app/docs/connector-builder/operations)
- [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks)
- [Methods](https://console.integration.app/docs/connector-builder/methods)

# Refresh Credentials

The `refreshCredentials` method defines how to refresh expired or invalid authentication credentials without requiring user intervention.

Authentication methods that require refresh by default (like OAuth2) will have standard implementations of credentials refresh.

You can use this method to override the standard implementation or add refresh logic to other auth types.

## Implementation

You can implement this method using JavaScript:

```javascript
// File: auth/refresh-credentials.js
import axios from 'axios'

export default async function refreshToken({
  credentials,
  connectorParameters,
}) {
  const response = await axios.post(
    `https://api.example.com/v1/generate-token`,
    {},
    {
      auth: {
        username: connectorParameters.clientId,
        password: connectorParameters.clientSecret,
      },
    },
  )

  const accessToken = response.data?.access_token

  if (!accessToken) {
    throw new Error('Failed to get access token')
  }

  return { accessToken }
}
```

In your spec.yml:

```yaml
auth:
  # ...other auth settings
  refreshCredentials:
    implementationType: javascript
```

## Input Parameters

|     |     |
| --- | --- |
| `connectorParameters` | Parameters configured for the connector in your workspace. Includes client IDs, secrets, and other connector-specific configuration. |
| `connectionParameters` | Input provided by the user in the connection UI when they set up the connection. |
| `credentials` | Current credentials of the connection that need to be refreshed. |

## Return Value

The method should return an object with the new credentials.

These will be merged with the existing credentials. For example, if you only return `{ access_token: "new_token" }`, only the access token will be updated, and other credential fields will remain unchanged.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Implementation](https://console.integration.app/docs/connector-builder/authentication/methods/refresh-credentials#implementation)
- [Input Parameters](https://console.integration.app/docs/connector-builder/authentication/methods/refresh-credentials#input-parameters)
- [Return Value](https://console.integration.app/docs/connector-builder/authentication/methods/refresh-credentials#return-value)

Docs · Integration Console