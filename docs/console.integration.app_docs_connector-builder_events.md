---
url: "https://console.integration.app/docs/connector-builder/events"
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

# Events

Events let you get notified about things that happen in the external application.

Each event has:

- Name
- Parameters (optional)
- Payload schema

Events are located in the `events` folder of the connector. Each event has its own folder named `events/<event-key>` (for example, `events/user-created`).

## Event Specification

Event specificatio is located in the `spec.yml` file in the event folder. It has the following format:

```yaml
name: Task Created
implementationType: webhook
parametersSchema:
  type: object
  properties:
    projectId:
      type: string
      description: ID of the project to monitor for new tasks
  required:
    - projectId
schema:
  type: object
  properties:
    id:
      type: string
    title:
      type: string
    description:
      type: string
    status:
      type: string
methods:
  subscribe:
    implementationType: javascript
  unsubscribe:
    implementationType: javascript
```

Let's break it down:

| Property | Description |
| --- | --- |
| `name` | Human-readable name of the event that will be shown in the UI |
| `implementationType` | Type of event implementation. Can be `webhook` or `global-webhook` |
| `parametersSchema` | JSON Schema describing parameters that need to be provided when subscribing to the event. In the example above, we require a `projectId` to know which project to monitor |
| `schema` | JSON Schema describing the event payload structure that will be received when the event occurs |
| `methods` | Object describing implementation methods for the event. The list of methods depends on the `type` of the event. |

## Implementation Types

### Webhook

This event implementation type uses webhook subscriptions to get events.

When event subscription is crated, it registers a webhook and handles incoming payloads. When event subscription is deleted, it unsubscribes from the webhook.

It optionally supports refresh mechanism to keep the subscription active if the external app requires it.

Full article: [Webhook](https://console.integration.app/docs/connector-builder/events/webhook)

### Global Webhook

This event implementation type uses [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks) to get events.

Full article: [Global Webhook](https://console.integration.app/docs/connector-builder/events/global-webhook)

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Event Specification](https://console.integration.app/docs/connector-builder/events#event-specification)
- [Implementation Types](https://console.integration.app/docs/connector-builder/events#implementation-types)
  - [Webhook](https://console.integration.app/docs/connector-builder/events#webhook)
  - [Global Webhook](https://console.integration.app/docs/connector-builder/events#global-webhook)

Docs · Integration Console