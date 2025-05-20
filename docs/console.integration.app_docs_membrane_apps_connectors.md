---
url: "https://console.integration.app/docs/membrane/apps/connectors"
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

# Connectors

Universal Connectors let you interact with any external app in a consistent way.

Universal Connectors![Universal Connectors](https://console.integration.app/images/docs/connectors.png)

Specifically, connectors let you do the following in API-agnostic way:

- Authenticate on behalf of the external app's customer: get credentials and refresh them.
- Make API requests with credentials applied.
- Explore and run [API operations](https://console.integration.app/docs/membrane/interfaces/api-operations).
- Work with [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections) to read and write data and metadata.
- Subscribe to external events.
- Work with [Universal Data Models](https://console.integration.app/docs/membrane/references/udm) across multiple apps.

## Configuring Connectors

To start using a connector, you need to attach it to one of the [Apps](https://console.integration.app/docs/membrane/apps) in your workspace and provide parameters (if required).

Not all connectors have a configuration, but the ones that have typically have a configuration guide that explains how to set them up:

Connector Configuration![Connector Configuration](https://console.integration.app/images/docs/connector-configuration.png)

You can also refer to the application's integration guide to learn how to do things like getting a development account used for configuring a connector.

## Using Connectors

You do not use connectors directly. Instead, you use them through [Interfaces](https://console.integration.app/docs/membrane/interfaces).

They provide various levels of abstraction, for example:

- [API Proxy](https://console.integration.app/docs/membrane/interfaces/api-proxy) lets you make raw API requests through connectors with authentication applied automatically.
- [Api Operations](https://console.integration.app/docs/membrane/interfaces/api-operations) let you explore and run API operations.
- [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections) let you work with data and metadata.
- [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings) can be pre-configured by Universal Data Models provided by the connector.
- [Flows](https://console.integration.app/docs/membrane/interfaces/flows) let you react to external events and build complex multi-step integration logic.
- ... most of the building blocks use connectors in one way or another to interact with external apps.

## Public Connectors

We maintain a library of public connectors for popular apps and keep growing it every day. Public connectors are attached to apps automatically when you add them to your workspace.

## Custom Connectors

You can customize public connectors or create new ones from scratch using Connector Builder.

Read more about this here: [Connector Builder](https://console.integration.app/docs/connector-builder).

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Configuring Connectors](https://console.integration.app/docs/membrane/apps/connectors#configuring-connectors)
- [Using Connectors](https://console.integration.app/docs/membrane/apps/connectors#using-connectors)
- [Public Connectors](https://console.integration.app/docs/membrane/apps/connectors#public-connectors)
- [Custom Connectors](https://console.integration.app/docs/membrane/apps/connectors#custom-connectors)

Docs · Integration Console