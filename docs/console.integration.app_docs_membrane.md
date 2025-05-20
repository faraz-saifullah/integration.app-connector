---
url: "https://console.integration.app/docs/membrane"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

# Membrane

Membrane is a universal integration layer for your product.

It lets you build and manage a single bi-directional interface for interacting with external APIs in a consistent way. It handles:

- Managing authentication with external APIs on behalf of your customers.
- Mapping requests from your product to external APIs and their responses.
- Collecting and normalizing events in external services using a variety of mechanisms (wehbooks, polling, etc).
- Orchestrating data flows between your product and external services.
- Managing and applying end-customer configurations.
- Normalizing and handling errors.
- Logging and monitoring everything that happens between your product and external services.

It is implemented as an API-first service that runs in the cloud or hosted on your own infrastructure.

## External Apps

You can connect to any external app that has an API.

For the most popular app, we provide pre-built connectors you can use out of the box.
If you need to connect to an app we don't have a connector for yet or modify one of the pre-built connectors,
you can use [Connector Builder](https://console.integration.app/docs/connector-builder).

Read about connecting external apps here: [External Apps](https://console.integration.app/docs/membrane/apps).

## Interfaces

Interfaces are integration primitives that let your product code interact with external apps in a consistent way,
abstracting away all the differences between APIs and customer setups.

This lets you build you integration logic and UI once and make it work with any number of external apps.

Each interface provides a single consistent API or UI for your app on one side and any number of API-specific and customer-specific implementations on another side.
The app-specific and customer-specific implementations are auto-generated when possible and you have full ability to edit them via API or Console.

For example, if you want to create a task in any external apps and let each of your cusomers where to create tasks and how to populate the task's fields, you would:

- Create a universal [Flow](https://console.integration.app/docs/membrane/interfaces/flows) that describes the general logic such as "accept these inputs and create a record in an external app".
- Generate any number of application-level flows and customize them if needed.
- Enable the flows for any number of [customers](https://console.integration.app/docs/membrane/customers) and use customer-level [Building Blocks](https://console.integration.app/docs/membrane/interfaces) such as [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources) or [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings) to customize how the integration works for each of them.

### Integration Logic

#### [Scenarios](https://console.integration.app/docs/membrane/interfaces/scenarios)

Organize integration elements into end-to-end scenarios.

#### [Flows](https://console.integration.app/docs/membrane/interfaces/flows)

Building multi-step integration logic.

#### [Actions](https://console.integration.app/docs/membrane/interfaces/actions)

Executing individual actions in external applications.

### Configuration and State Management

#### [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources)

Configuring access to data in external apps.

#### [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings)

Mapping fields between your app and external apps.

#### [Data Links](https://console.integration.app/docs/membrane/interfaces/data-links)

Managing relations between data records in your app and external apps.

### Internal Interfaces

#### [Internal Events](https://console.integration.app/docs/membrane/interfaces/internal-events)

Reacting to events in your app.

#### [Internal Data Schemas](https://console.integration.app/docs/membrane/interfaces/internal-data-schemas)

Reusing data schemas between integration elements.

### Application-specific Resources

#### [API Proxy](https://console.integration.app/docs/membrane/interfaces/api-proxy)

Make raw requests to the underlying application API.

#### [Api Operations](https://console.integration.app/docs/membrane/interfaces/api-operations)

Working with operations for any API in a consistent way.

#### [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections)

Working with data in external apps.

### Utilities

#### [Files](https://console.integration.app/docs/membrane/interfaces/files)

Working with binary data passed through integrations.

## Monitoring and Troubleshooting

Integrations are fragile. Our suite of monitoring and troubleshooting tools helps you understand what is happening (or not happening) and why.
It keeps you proactively informed about issues and lets you investigate and fix problems when they do happen.

Read more: [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring).

## References

- [API Reference](https://api-reference.integration.app/)
- [Data Schemas](https://console.integration.app/docs/membrane/references/data-schemas) \- an extension of JSONSchema we use to define data structures throughout the system.
- [Formulas](https://console.integration.app/docs/membrane/references/formulas) used to transform data inside integrations.
- [Limits](https://console.integration.app/docs/membrane/references/limits) applied in the cloud version (can be overridden in the self-hosted version).

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [External Apps](https://console.integration.app/docs/membrane#external-apps)
- [Interfaces](https://console.integration.app/docs/membrane#interfaces)
- [Monitoring and Troubleshooting](https://console.integration.app/docs/membrane#monitoring-and-troubleshooting)
- [References](https://console.integration.app/docs/membrane#references)

Docs · Integration Console