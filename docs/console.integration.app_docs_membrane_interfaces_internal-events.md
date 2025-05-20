---
url: "https://console.integration.app/docs/membrane/interfaces/internal-events"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
  - [Scenarios](https://console.integration.app/docs/membrane/interfaces/scenarios)
  - [Actions](https://console.integration.app/docs/membrane/interfaces/actions)
  - [Flows](https://console.integration.app/docs/membrane/interfaces/flows)
  - [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources)
  - [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings)
  - [Data Links](https://console.integration.app/docs/membrane/interfaces/data-links)
  - [Connecting Your App API](https://console.integration.app/docs/membrane/interfaces/internal-api)
  - [Internal Events](https://console.integration.app/docs/membrane/interfaces/internal-events)
  - [Internal Data Schemas](https://console.integration.app/docs/membrane/interfaces/internal-data-schemas)
  - [Api Operations](https://console.integration.app/docs/membrane/interfaces/api-operations)
  - [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections)
  - [API Proxy](https://console.integration.app/docs/membrane/interfaces/api-proxy)
  - [Files](https://console.integration.app/docs/membrane/interfaces/files)
  - [Running Custom Code](https://console.integration.app/docs/membrane/interfaces/custom-code)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

# App Events

App Events let integration.app know when something happens in your app. They can be used to trigger Flows using [App Event Trigger](https://console.integration.app/docs/membrane/interfaces/flows/nodes/app-event-trigger).

## App Event Types

To use App Events, you need to define one or more App Event Types. You can do it on the [App Event Types](https://console.integration.app/w/0/event-types) page.

Each App Event Type has:

- Schema - a [Data Schemas](https://console.integration.app/docs/membrane/references/data-schemas) describing the event's contents.
- Example - an example of the event's contents matching the Schema. You can use Example to generate schema.

## Global Webhook

Use Global Webhook to send app events to integration.app in a centralized (not per-user) way.
Simply make an HTTP request of any type to the webhook URI and the event will be captured and processed.

## Per-customer Subscriptions

If instead of a Global Webhook, you want to use per-user webhooks or if you already have API that allows per-user event subscriptions,
you can configure subscriptions for your App Event.

To do this, configure the Subscription Request:

Internal Event Subscription![Internal Event Subscription](https://console.integration.app/images/docs/app-event-type-subscription.png)

You can use [Customer Fields](https://console.integration.app/docs/membrane/customers/customers) and `webhookUri` variables to configure the request.

The request will be called the first time this App Event Type is used for a given User.
You can find the subscription request and response, as well as other information about subscriptions on the [Subscriptions](https://console.integration.app/w/0/deployments/app-event-subscriptions)

## Batch Events

If body of the request your app sends to membrane is an array, it will be treated as multiple events.

If global webhook is used, each event can have different customer id and it will be processed as events for different customers.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [App Event Types](https://console.integration.app/docs/membrane/interfaces/internal-events#app-event-types)
- [Global Webhook](https://console.integration.app/docs/membrane/interfaces/internal-events#global-webhook)
- [Per-customer Subscriptions](https://console.integration.app/docs/membrane/interfaces/internal-events#per-customer-subscriptions)
- [Batch Events](https://console.integration.app/docs/membrane/interfaces/internal-events#batch-events)

Docs · Integration Console