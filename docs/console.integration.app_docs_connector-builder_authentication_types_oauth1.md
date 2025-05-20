---
url: "https://console.integration.app/docs/connector-builder/authentication/types/oauth1"
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

# OAuth1 Authentication

OAuth1 is an older authorization protocol that requires signature-based request authentication. It is rarely used in modern APIs, but some legacy systems still require it.

## Overview

OAuth1 authentication provides a secure way for applications to access user data without exposing user credentials. It uses a complex signature-based mechanism to secure each request.

## Configuration

In your spec.yml:

```yaml
auth:
  type: oauth1

  # Reference to method implementations
  getOAuthConfig:
    implementationType: mapping
  makeApiClient:
    implementationType: mapping
  test:
    implementationType: javascript
```

## OAuth1 Config

The OAuth1 configuration is defined in a mapping file:

```yaml
# File: auth/get-oauth-config.map.yml
consumerKey:
  $var: connectorParameters.consumerKey
consumerSecret:
  $var: connectorParameters.consumerSecret
requestTokenUri: https://api.example.com/oauth/request_token
authorizeUri: https://api.example.com/oauth/authorize
tokenUri: https://api.example.com/oauth/access_token
extra:
  custom_param: value
```

### Config Parameters

|     |     |
| --- | --- |
| `consumerKey` | The OAuth1 consumer key (from connector parameters) |
| `consumerSecret` | The OAuth1 consumer secret |
| `requestTokenUri` | The endpoint for obtaining a request token |
| `authorizeUri` | The endpoint where users are redirected to authenticate |
| `tokenUri` | The endpoint for exchanging the request token for an access token |
| `extra` | Additional parameters to add to the authorize request |

## OAuth1 Flow

The OAuth1 flow in Integration.app follows these steps:

1. User initiates authentication
2. Integration.app requests a temporary token using the consumer key/secret
3. User is redirected to the service's authorization page with this token
4. User authenticates and grants permissions
5. Service redirects back to Integration.app with a verification code
6. Integration.app exchanges this code for access tokens
7. The tokens are stored as connection credentials
8. Integration.app uses these tokens to make signed API requests

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Overview](https://console.integration.app/docs/connector-builder/authentication/types/oauth1#overview)
- [Configuration](https://console.integration.app/docs/connector-builder/authentication/types/oauth1#configuration)
- [OAuth1 Config](https://console.integration.app/docs/connector-builder/authentication/types/oauth1#oauth1-config)
  - [Config Parameters](https://console.integration.app/docs/connector-builder/authentication/types/oauth1#config-parameters)
- [OAuth1 Flow](https://console.integration.app/docs/connector-builder/authentication/types/oauth1#oauth1-flow)

Docs · Integration Console