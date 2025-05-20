---
url: "https://console.integration.app/docs/integration-ui/connection/connection-ui-without-sdk"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Integrations Catalog](https://console.integration.app/docs/integration-ui/integration-list)
- [Connection UI](https://console.integration.app/docs/integration-ui/connection)
  - [Custom Connection UI](https://console.integration.app/docs/integration-ui/connection/custom)
  - [Connection UI Without the Front-End SDK](https://console.integration.app/docs/integration-ui/connection/connection-ui-without-sdk)
- [Integration](https://console.integration.app/docs/integration-ui/integration)
- [Flows](https://console.integration.app/docs/integration-ui/flows)
- [Data Sources](https://console.integration.app/docs/integration-ui/data-sources)
- [Field Mappings](https://console.integration.app/docs/integration-ui/field-mappings)

# Creating a Connection Without the Front-End SDK

This guide explains how to create an integration connection in Integration.App **without** using the front-end SDK. This is useful for backend-to-backend integrations, custom UIs, or automation scripts.
For the recommended process of creating a connection, check [Connection UI](https://console.integration.app/docs/integration-ui/connection)

## Overview

The connection process is initiated by making a request to the `/connection-popup` endpoint of the API.
This endpoint handles all authentication flows (OAuth2, OAuth1, client credentials, proxy) and manages the connection lifecycle.
After the connection process is completed (successfully or not), the user will be redirected to the `redirectUri` you specify in the parameters.

Opening the `/connection-popup` endpoint should happen in your user's browser since many authentication flows require user interaction.

**High-level flow:**

1. Your backend (or custom UI) redirects the user to `/connection-popup` with the required parameters.
2. The user is redirected (if needed) to the OAuth provider for authentication.
3. After authentication, Integration.App redirects the user (or the flow) to your specified `redirectUri` with the result.
4. Your backend receives the result and can proceed accordingly.

* * *

## Constructing the Request

### Endpoint

```http
POST /connection-popup

```

### Parameters

You can send parameters either as query parameters or in a JSON-stringified `payload` parameter in the body of a POST request (recommended).

- `integrationId` or `integrationKey`: The integration to connect.
- `connectionParameters`: Object with connection-specific parameters (may be empty for some integrations). If passed through query, this value should be JSON-stringified.
- `connectionId`: If updating an existing connection.
- `name`: Name for the connection.
- `authOptionKey`: For integrations with multiple auth options.
- `allowMultipleConnections`: if not set to `true`, only one connection per integration and customer is allowed. New connections will replace existing ones.
- `customState`: Custom string to persist through the flow.
- `redirectUri`: **URL to which the result will be sent (your backend endpoint).**

### Example Request

This is an example HTML form that submits a correctly formatted connection request.

```html
<form method="POST" action="https://your-api.integration.app/connection-popup" enctype="application/x-www-form-urlencoded">
  <input type="hidden" name="payload" value='{"integrationId":"your-integration-id","connectionParameters":{"apiKey":"user-api-key"},"redirectUri":"https://your-backend.com/integration/callback"}' />
  <button type="submit">Connect</button>
</form>
```

### Parameters Schema

To understand which parameters are required to create a connection, see the [Custom Connection UI](https://console.integration.app/docs/integration-ui/connection/custom).

## Connection Flow

- If the integration uses OAuth, the user will be redirected to the provider for authentication.
- After authentication, Membrane will redirect the user to the `redirectUri` you provided.
- If the integration uses client credentials or similar, the connection may be created immediately and the result sent to your `redirectUri`.

## Handling the Callback

Your backend should expose an endpoint matching the `redirectUri` you provided. Integration.App will redirect to this URL with the following query parameters:

### On Success

- `connectionId`: The ID of the newly created or updated connection.

**Example:**

```
GET https://your-backend.com/integration/callback?connectionId=abc123

```

### On Error

- `error`: Error message.
- `errorData`: JSON-encoded error details.

**Example:**

```
GET https://your-backend.com/integration/callback?error=OAuth+failed&errorData=%7B...%7D

```

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Overview](https://console.integration.app/docs/integration-ui/connection/connection-ui-without-sdk#overview)
- [Constructing the Request](https://console.integration.app/docs/integration-ui/connection/connection-ui-without-sdk#constructing-the-request)
  - [Endpoint](https://console.integration.app/docs/integration-ui/connection/connection-ui-without-sdk#endpoint)
  - [Parameters](https://console.integration.app/docs/integration-ui/connection/connection-ui-without-sdk#parameters)
  - [Example Request](https://console.integration.app/docs/integration-ui/connection/connection-ui-without-sdk#example-request)
  - [Parameters Schema](https://console.integration.app/docs/integration-ui/connection/connection-ui-without-sdk#parameters-schema)
- [Connection Flow](https://console.integration.app/docs/integration-ui/connection/connection-ui-without-sdk#connection-flow)
- [Handling the Callback](https://console.integration.app/docs/integration-ui/connection/connection-ui-without-sdk#handling-the-callback)
  - [On Success](https://console.integration.app/docs/integration-ui/connection/connection-ui-without-sdk#on-success)
  - [On Error](https://console.integration.app/docs/integration-ui/connection/connection-ui-without-sdk#on-error)

Docs · Integration Console