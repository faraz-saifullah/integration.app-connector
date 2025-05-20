---
url: "https://console.integration.app/docs/connector-builder/authentication/types/proxy"
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

# Auth Proxy

Auth Proxy lets you use OAuth credentials provided by Membrane without registering your own OAuth app.

You typically don't need to use this authentication type yourself, but you may find it in pre-built connectors.

When using Auth Proxy, you will not have access to the connection credentials.

In your spec.yml:

```yaml
auth:
  type: proxy

  # Key identifying the auth proxy provided by Membrane
  proxyKey: another-connector-key
```

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

Docs · Integration Console