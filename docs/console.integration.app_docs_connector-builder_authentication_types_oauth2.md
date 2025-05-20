---
url: "https://console.integration.app/docs/connector-builder/authentication/types/oauth2"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/connector-builder/authentication)
  - Methods
  - Types
    - [Client Credentials](https://console.integration.app/docs/connector-builder/authentication/types/client-credentials)
    - [Integration App Token](https://console.integration.app/docs/connector-builder/authentication/types/integration-app-token)
    - [Oauth1](https://console.integration.app/docs/connector-builder/authentication/types/oauth1)
    - [Oauth2](https://console.integration.app/docs/connector-builder/authentication/types/oauth2)
    - [Auth Proxy](https://console.integration.app/docs/connector-builder/authentication/types/proxy)
- [API Specification](https://console.integration.app/docs/connector-builder/api)
- [Events](https://console.integration.app/docs/connector-builder/events)
- [Data Collections](https://console.integration.app/docs/connector-builder/data)
- [Operations](https://console.integration.app/docs/connector-builder/operations)
- [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks)
- [Methods](https://console.integration.app/docs/connector-builder/methods)

# OAuth2 Authentication

OAuth2 is a standard protocol for authorization that allows users to grant third-party applications access to their resources without sharing credentials.

## Overview

OAuth2 is ideal for:

- APIs that support the OAuth2 standard
- User-specific authentication where you need access to user data
- Services where you want to avoid storing user credentials

## Configuration

In your spec.yml:

```yaml
auth:
  type: oauth2

  # Method implementations
  getOAuthConfig:
    implementationType: mapping
  makeApiClient:
    implementationType: mapping
  test:
    implementationType: javascript

  # Optional method implementations
  getTokenData:
    implementationType: javascript
  getCredentialsFromTokenResponse:
    implementationType: javascript
  refreshCredentials:
    implementationType: javascript
```

## OAuth2 Config

The OAuth2 configuration is defined in a mapping file:

```yaml
# File: auth/get-oauth-config.map.yml
clientId:
  $var: connectorParameters.clientId
clientSecret:
  $var: connectorParameters.clientSecret
authorizeUri: https://auth.example.com/oauth2/authorize
tokenUri: https://auth.example.com/oauth2/token
scopes:
  - read
  - write
clientAuthLocation: body  # or 'headers'
noRefreshToken: false
skipPkce: false
extra:
  prompt: consent
  access_type: offline
```

### Config Parameters

|     |     |
| --- | --- |
| `clientId` | The OAuth2 client ID (usually from connector parameters) |
| `clientSecret` | The OAuth2 client secret |
| `authorizeUri` | The endpoint where users are redirected to authenticate |
| `tokenUri` | The endpoint where access tokens are obtained |
| `scopes` | List of OAuth scopes to request |
| `clientAuthLocation` | Where to send client credentials ( `headers`, `body`, or both if not specified) |
| `noRefreshToken` | Set to `true` if the API doesn't support refresh tokens |
| `skipPkce` | Set to `true` if the API doesn't support PKCE |
| `extra` | Additional parameters to add to the authorize URI |

## OAuth2 Flow Implementation

### Standard OAuth2 Flow

The standard OAuth2 flow works like this:

1. User initiates authentication
2. Integration.app redirects user to the `authorizeUri` with appropriate parameters
3. User authenticates with the service and grants permissions
4. Service redirects back to Integration.app with an authorization code
5. Integration.app exchanges the code for access and refresh tokens
6. The tokens are stored as connection credentials
7. Integration.app uses the access token for API requests

### Custom Token Request

If you need to customize the token exchange process, you can implement a custom `getTokenData` method:

```javascript
// File: auth/get-token-data.js
exports.getTokenData = async function({
  connectorParameters,
  connectionParameters,
  codeVerifier,
  queryParameters,
  redirectUri
}) {
  // Custom implementation of token retrieval
  const response = await fetch(connectorParameters.tokenUri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: queryParameters.code,
      redirect_uri: redirectUri,
      client_id: connectorParameters.clientId,
      client_secret: connectorParameters.clientSecret,
      code_verifier: codeVerifier
      // Add any custom parameters here
    })
  });

  return await response.json();
};
```

### Custom Credentials Extraction

If you need to modify the tokens or make additional API calls after the token exchange, implement the `getCredentialsFromTokenResponse` method:

```javascript
// File: auth/get-credentials-from-token-response.js
exports.getCredentialsFromTokenResponse = async function({
  connectorParameters,
  connectionParameters,
  queryParameters,
  tokenResponse
}) {
  // You can transform the token response or make additional API calls

  // For example, get user information
  const userInfoResponse = await fetch('https://api.example.com/userinfo', {
    headers: {
      'Authorization': `Bearer ${tokenResponse.access_token}`
    }
  });

  const userInfo = await userInfoResponse.json();

  // Return combined credentials
  return {
    // Include fields from token response if needed
    access_token: tokenResponse.access_token,
    refresh_token: tokenResponse.refresh_token,
    // Add custom fields
    userId: userInfo.id,
    userName: userInfo.name
  };
};
```

### Custom Token Refresh

See [Refresh Credentials](https://console.integration.app/docs/connector-builder/authentication/methods/refresh-credentials) for more details.

If the API uses a non-standard token refresh mechanism, implement the `refreshCredentials` method:

```javascript
// File: auth/refresh-credentials.js
exports.refreshCredentials = async function({
  connectorParameters,
  connectionParameters,
  credentials
}) {
  // Custom implementation for refreshing tokens
  const response = await fetch(connectorParameters.tokenUri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: credentials.refresh_token,
      client_id: connectorParameters.clientId,
      client_secret: connectorParameters.clientSecret
      // Add any custom parameters here
    })
  });

  const refreshResponse = await response.json();

  // Return the new credentials (they will be merged with existing credentials)
  return {
    access_token: refreshResponse.access_token,
    // Include refresh_token if it was returned
    refresh_token: refreshResponse.refresh_token || credentials.refresh_token,
    // Update expiration if available
    expires_at: refreshResponse.expires_in
      ? Date.now() + (refreshResponse.expires_in * 1000)
      : undefined
  };
};
```

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Overview](https://console.integration.app/docs/connector-builder/authentication/types/oauth2#overview)
- [Configuration](https://console.integration.app/docs/connector-builder/authentication/types/oauth2#configuration)
- [OAuth2 Config](https://console.integration.app/docs/connector-builder/authentication/types/oauth2#oauth2-config)
  - [Config Parameters](https://console.integration.app/docs/connector-builder/authentication/types/oauth2#config-parameters)
- [OAuth2 Flow Implementation](https://console.integration.app/docs/connector-builder/authentication/types/oauth2#oauth2-flow-implementation)
  - [Standard OAuth2 Flow](https://console.integration.app/docs/connector-builder/authentication/types/oauth2#standard-oauth2-flow)
  - [Custom Token Request](https://console.integration.app/docs/connector-builder/authentication/types/oauth2#custom-token-request)
  - [Custom Credentials Extraction](https://console.integration.app/docs/connector-builder/authentication/types/oauth2#custom-credentials-extraction)
  - [Custom Token Refresh](https://console.integration.app/docs/connector-builder/authentication/types/oauth2#custom-token-refresh)

Docs · Integration Console