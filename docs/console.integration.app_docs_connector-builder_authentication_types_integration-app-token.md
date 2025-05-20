---
url: "https://console.integration.app/docs/connector-builder/authentication/types/integration-app-token"
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

# Integration App Token Authentication

Integration App Token authentication uses integration.app's built-in token system for authentication.
This is typically used for internal connectors or services that are aware of Integration App.

Integration App Token authentication is useful for:

- Services that are specifically designed to work with integration.app
- Testing and development scenarios

## Configuration

In your spec.yml:

```yaml
auth:
  type: integration-app-token
```

With this authentication method, integration.app will add `X-Integration-App-Token` header to all requests to your API. It will contain a [JSON Web Token](https://jwt.io/)
signed by the Workspace Secret. The token will contain the following claims:

- `iss` \- Issuer, will be the key of the workspace integration runs in.
- `sub` \- Subject, will be the ID of the user who owns the integration being run.
- `fields` \- Fields of the user who owns the integration being run.

You can decode and verify the token to authenticate the request.

Here's an example of how to verify the token:

```typescript
import jwt from 'jsonwebtoken'

const token = headers['x-integration-app-token']
const workspaceSecret = process.env.WORKSPACE_SECRET

// Verify token
const decoded = jwt.verify(token, workspaceSecret)
// decoded will contain: { iss, sub, fields }
```

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Configuration](https://console.integration.app/docs/connector-builder/authentication/types/integration-app-token#configuration)

Docs · Integration Console