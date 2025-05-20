---
url: "https://console.integration.app/docs/connector-builder/global-webhooks"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/connector-builder/authentication)
- [API Specification](https://console.integration.app/docs/connector-builder/api)
- [Events](https://console.integration.app/docs/connector-builder/events)
- [Data Collections](https://console.integration.app/docs/connector-builder/data)
- [Operations](https://console.integration.app/docs/connector-builder/operations)
- [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks)
- [Methods](https://console.integration.app/docs/connector-builder/methods)

# Global Webhooks

Some external apps require webhooks to be configured on the global level rather than per-connection.

Global Webhooks are a way to handle this.

Each global webhook has a key and provides a function to handle data sent to the webhook.

## Configuration

When a connector added to a workspace, integration.app generates a global webhook URL unique to the connector and workspace.

Developer needs to take this URL and provide it to the external app as a webhook (usually as a part of oAuth application configuration).
You should provide detals on how to do it in the connector documentation.

## Implementation

### Handle

The handle function is called when data is sent to the webhook.

Arguments:

- `query` \- object, webhook request query received from External App
- `data` \- object, webhook request body received from External App (parsed based on Content-Type)
- `headers` \- object, webhook request headers received from External App
- `parameters` \- connector parameters configured on the integration webhook belongs to
- `rawBody` \- string, raw unparsed body of the webhook request (useful for signature verification or when you need access to the original request body)

Result:

- `events` \- list of the events. Each event has the following properties:

  - `selector` (string) - selector to find matching external event subscriptions (see [Events](https://console.integration.app/docs/connector-builder/events))
  - `payload` \- arbitrary event payload that will be passed to matched subscriptions.
- `response` \- object, optional http response with properties:

  - `headers` \- object
  - `status` \- number
  - `data` \- http body (based on `Content-Type`)

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Configuration](https://console.integration.app/docs/connector-builder/global-webhooks#configuration)
- [Implementation](https://console.integration.app/docs/connector-builder/global-webhooks#implementation)
  - [Handle](https://console.integration.app/docs/connector-builder/global-webhooks#handle)

Docs · Integration Console