---
url: "https://console.integration.app/docs/membrane/interfaces/external-events"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

# External Events

Subscribing to events lets your application react to things that happen in external applications.

To learn how to work with events that happen in **your application** \- see [Internal Events](https://console.integration.app/docs/membrane/interfaces/internal-events).

Similarly to other integration elements, you can manage external events on three levels:

**Universal Events** let you define events you want to work in a similar way across multiple external applications.
Implementation could vary from application to application, but your application will receive these events in a consistent way and in a consistent format.

**Integration-level Events** let you define events that are specific to a particular external application.

**Customer Event Instances** produce events for a specific [Customer](https://console.integration.app/docs/membrane/customers/customers) and [Connection](https://console.integration.app/docs/membrane/apps/connections). They can be customized on per-customer level.

You can manage events on the [External Events](https://console.integration.app/w/0/integrations/events) page.

## Event Types

There are a few types of external events you can subscribe to:

### Data Events

Data Events let you react to changes in a given [Data Collection](https://console.integration.app/docs/membrane/interfaces/data-collections).

There are three types of data events: `data-record-created`, `data-record-updated`, and `data-record-deleted`.

Data events have the following payload structure:

```yaml
type: <created|updated|deleted>
record:
    id: <string>
    name: <string>
    fields:
        field1: <value>
        ...
```

All data events are guaranteed to provide the type and record id, but the rest of the payload depends on the external API.
To be sure you receive all the fields for the modified record, you should retrieve the record from the external application using the provided id.

### Connector Events

Each connector can provide its own unique set of events. They usually, but not always, match webhooks supported by the external application.

### Custom Webhook

You can define fully custom webhooks with your own logic for subscribing, unsubscribing, and handling the webhooks. You can use this if connector does not provide the events you need.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Event Types](https://console.integration.app/docs/membrane/interfaces/external-events#event-types)
  - [Data Events](https://console.integration.app/docs/membrane/interfaces/external-events#data-events)
  - [Connector Events](https://console.integration.app/docs/membrane/interfaces/external-events#connector-events)
  - [Custom Webhook](https://console.integration.app/docs/membrane/interfaces/external-events#custom-webhook)

Docs · Integration Console