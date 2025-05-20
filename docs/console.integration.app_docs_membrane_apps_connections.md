---
url: "https://console.integration.app/docs/membrane/apps/connections"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
  - [Connectors](https://console.integration.app/docs/membrane/apps/connectors)
  - [Connections](https://console.integration.app/docs/membrane/apps/connections)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

# Connections

Connections represent credentials and configuration used to access integrations on behalf of your customers.

They have the following properties:

|     |     |
| --- | --- |
| `id` | Unique identifier of the connection. |
| `name` | Name of this connection. It can be set by you when creating the connection or assigned automatically.. |
| `integrationId` | Identifier of the integration connection is created for. |
| `authOptionKey` | If integration offers multiple authentication options, this property will contain the key of the selected option. |
| `parameters` (secret) | Connection parameters provided by the customer when creating the connection. |
| `credentials` (secret) | Credentials required to access the external API. |
| `connectorParametres` (secret) | Connector parameters provided by the integration at the time of connection creation. |
| `disconnected` | Set to true if connection was disconnected (cannot be used to make API requests). |
| `error` | Contains error details if connection is disconnected. |

## Creating Connections

We recommend using [Connection UI](https://console.integration.app/docs/integration-ui/connection) implemented with our drop-in components or Javascript SDK.
Use the flow below only when you know what you are doing.

To create a new connection or refresh credentials for an existing connection, follow the steps described below.
They work in the same way for every connector regardless of the app that is being connected.

### Connector Auth Spec

You can get information about how authentication works in a given connector from its specification. Look for the following fields:

- `auth.type` \- type of authentication supported by the connector. Possible values are:

  - `client-credentials` \- Authentication based on credentials user enters in the UI.
  - `oauth1` \- OAuth1 authentication
  - `oauth2` \- OAuth2 authentication
- `ui` \- information about what to display user in the UI when authenticating.

### Authentication Flow

To authenticate a user you need to do the following:

1. Collect connection parameters from the user. They need to match `ui.schema`.
2. Redirect user to `https://api.integration.app/connection-popup` URL with the parameters described below. If `auth.type` is `client-credentials`, you can open this URL in a hidden iframe. If not - you need to open it in a new window visible to the user.

Add the following query parameters to the URL:

- token - your customer's [Access Token](https://console.integration.app/docs/membrane/customers/customers)
- requestId - a unique id of this authentication request. It will be used in the callback to separate callbacks from different requests. Note: providing this parameter will result in window being closed after connection is created. If you want it to behave differently (for example, redirect to another URL), you cannot use this parameter.
- integrationKey - key of the integration you want to authenticate against.
- connectionId (optional) - id of the connectio you want to refresh credentials for (if you want to do it for a specific connection)
- connectionParameters (optional) - parameters provided by user in the connection UI, JSON-encoded.

### Custom Callback URL

In some cases you need to use a custom Callback URL instead of standard `https://api.integration.app/oauth-callback`. These situations include:

- When you need to approve your app and callback URL needs to be on your domain (for example, Google requires that).
- You want to create a custom installation logic for some application stores (for example, [Pipedrive app installation flow](https://pipedrive.readme.io/docs/app-installation-flows)).
- When you want to do any other custom handling of oAuth callback.

You can set custom callback URI in the integration settings. It will be used for all connections created for this integration.

Custom OAuth Callback URI![Custom OAuth Callback URI](https://console.integration.app/images/docs/integration-oauth-callback-uri.png)

After handling the callback URI, you need to redirect user to `https://api.integration.app/oauth-callback` URL with the same query parameters you received in the callback URI.

For example, if you use callback url `https://myapp.com/oauth-callback` and a third-party application sends user to the following URL:

`https://myapp.com/oauth-callback?code=abcd&state=1234`

when you are done with the user, you need to redirect them to:

`https://api.integration.app/oauth-callback?code=abcd&state=1234`

### Custom State

For OAuth2 connections, you can add a custom component to the `state` parameter used in the callback URI. This can be useful if you want to pass some information through the authentication process.

To do this, simply add `customState` query parameter when opening the `https://api.integration.app/connection-popup` URL like this:

```
https://api.integration.app/connection-popup?customState=MY_CUSTOM_STATE

```

When the user is redirected to the callback URI, the `state` parameter will contain the value of `customState` parameter after `:` symbol like this:

```
https://myapp.com/oauth-callback?code=abcd&state=1234:MY_CUSTOM_STATE

```

### Auth from outside of integration.app

When connection is initiated outside of integration.app (for example, from an app store of a third-party application),
you need to add the following additional query parameters when redirecting user to integration.app:

- `token` is [Integration.app Token](https://console.integration.app/docs/getting-started/authentication) you normally use to access our API or SDK.
- `integration` is id or key of the integration you want to authenticate against (i.e. `hubspot` or `salesforce`).
- `redirectUri` is the URL you want to redirect user to after connection is created. This could be a page in your app you want the user to end up on.

For example, if you use callback url `https://myapp.com/oauth-callback` and a third-party application sends user to the following URL:

`https://myapp.com/oauth-callback?code=abcd`

when you are done with the user, you need to redirect them to:

`https://api.integration.app/oauth-callback?integration=pipedrive&code=abcd&token=AUTH_TOKEN&redirectUri=https://myapp.com/configure-integration`

After user's connection is successfully created by integration.app, the user will be redirected to `https://myapp.com/configure-integration` URL.
If redirectUri is not provided - integration.app will simply close the window after connection is successfully created.

If connection creation fails, user will be redirected to your redirectUri with `error` parameter like this:

`https://myapp.com/configure-integration?error=ERROR_MESSAGE`

## Secrets

`credentials`, `parameters`, and `connectorParameters` are encrypted at rest and are not returned with the connection object by default.

To get these values, you should add `includeSecrets=true` to the query parameters of your request to get a single connection.
This request must be made using workspace admin [access token](https://console.integration.app/docs/getting-started/authentication).

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Creating Connections](https://console.integration.app/docs/membrane/apps/connections#creating-connections)
  - [Connector Auth Spec](https://console.integration.app/docs/membrane/apps/connections#connector-auth-spec)
  - [Authentication Flow](https://console.integration.app/docs/membrane/apps/connections#authentication-flow)
  - [Custom Callback URL](https://console.integration.app/docs/membrane/apps/connections#custom-callback-url)
  - [Custom State](https://console.integration.app/docs/membrane/apps/connections#custom-state)
  - [Auth from outside of integration.app](https://console.integration.app/docs/membrane/apps/connections#auth-from-outside-of-integrationapp)
- [Secrets](https://console.integration.app/docs/membrane/apps/connections#secrets)

Docs · Integration Console