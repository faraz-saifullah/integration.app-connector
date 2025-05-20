---
url: "https://console.integration.app/docs/membrane/customers/external-event-subscriptions"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
- [Customers](https://console.integration.app/docs/membrane/customers)
  - [Customers](https://console.integration.app/docs/membrane/customers/customers)
  - [Action Instances](https://console.integration.app/docs/membrane/customers/action-instances)
  - [Flow Instances](https://console.integration.app/docs/membrane/customers/flow-instances)
  - [Data Source Instances](https://console.integration.app/docs/membrane/customers/data-source-instances)
  - [Field Mapping Instances](https://console.integration.app/docs/membrane/customers/field-mapping-instances)
  - [Data Link Table Instances](https://console.integration.app/docs/membrane/customers/data-link-table-instances)
  - [App Event Subscriptions](https://console.integration.app/docs/membrane/customers/app-event-subscriptions)
  - [External Event Subscriptions](https://console.integration.app/docs/membrane/customers/external-event-subscriptions)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

## External Event Subscriptions

When one of the [Building Blocks](https://console.integration.app/docs/membrane/interfaces) is subscribed to an external event, we create an External Event Subscription.

Subscription is automatically subscribed when it's needed and unsubscribed when it's no longer needed.

You can find the list of subscriptions and information about each of them here: [External Event Subscriptions](https://console.integration.app/w/0/deployments/external-event-subscriptions)

Intergration engine automatically de-duplicates subscriptions.
If multiple elements need the same subscription, we create only one subscription and share it between them.
For example, if multiple flows are subscribed to updates of data records in the same collection, only one subscription will be created.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [External Event Subscriptions](https://console.integration.app/docs/membrane/customers/external-event-subscriptions#external-event-subscriptions)

Docs · Integration Console