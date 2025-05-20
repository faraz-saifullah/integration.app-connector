---
url: "https://console.integration.app/docs/connector-builder/events/global-webhook"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/connector-builder/authentication)
- [API Specification](https://console.integration.app/docs/connector-builder/api)
- [Events](https://console.integration.app/docs/connector-builder/events)
  - [Global Webhook](https://console.integration.app/docs/connector-builder/events/global-webhook)
  - [Webhook](https://console.integration.app/docs/connector-builder/events/webhook)
- [Data Collections](https://console.integration.app/docs/connector-builder/data)
- [Operations](https://console.integration.app/docs/connector-builder/operations)
- [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks)
- [Methods](https://console.integration.app/docs/connector-builder/methods)

# Global Webhook Events

This event type uses [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks) to get events.

Since global webhooks are configured on the global level, they are not associated with a specific connection.

Implementation of this event type routes global webhook events to the correct connection and subscription.

## Methods

The following functions can be implemented for the global webhook events:

### Get Event Selector

- Method key: `getEventSelector`
- Supported implementation types: `javascript`, `mapping`.

This method returns data that will be used to route the event to the correct connection.

Arguments:

- `parameters` \- object, parameters (matching `parametersSchema`) of this particular event.

Result:

- `globalWebhookKey` \- key of the global webhook defined in the connector (see [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks))
- `globalWebhookEventSelector` \- string that is used to route the event to the correct subscription. This string typically needs to be generated dynamically based on the event parameters and information we can get from the current connection (using apiClient or credentials).

When a [Global Webhook](https://console.integration.app/docs/connector-builder/global-webhooks) handles payload and returns events,
it will be routed to a given event subscription if:

- `globalWebhookKey` returned from this method matches the key of the global webhook
- `globalWebhookEventSelector` returned from this method matches the event selector associated to event returned by the `handle` method of the global webhook.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Methods](https://console.integration.app/docs/connector-builder/events/global-webhook#methods)
  - [Get Event Selector](https://console.integration.app/docs/connector-builder/events/global-webhook#get-event-selector)

Docs · Integration Console