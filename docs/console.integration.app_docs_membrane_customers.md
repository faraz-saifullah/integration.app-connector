---
url: "https://console.integration.app/docs/membrane/customers"
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

# Customers

Before integrations can run, you need to connect your customers' accounts in external apps and deploy integration logic to them.

Customers represent people or groups of people who use your application.

Integration Engine adds customers automatically as soon as a new Customer Id is seen in an
[Access Token](https://console.integration.app/docs/getting-started/authentication) used to access its API.

See [Customers](https://console.integration.app/docs/membrane/customers/customers) for more details.

Each customer can have multiple connections to external applications.

## Connections

Connections provide access to your customers' accounts in external applications. Integration Engine stores and refreshes the customer's credentials in a Connection object.

To create a connection from inside your app, see [Connection UI](https://console.integration.app/docs/integration-ui/connection).

For more information on connections, see [Connections](https://console.integration.app/docs/membrane/apps/connections).

## Instances

Before using integrations (running actions or flows, configuring field mappings, etc), you need to deploy their instances to a given connection.

During the deployment, integration engine performs necessary steps to make the integrations work in the context of the connection:

- Subscribes to webhooks.
- Saves initial states of elements.
- Fetches connection-specific field schemas.
- ...

## Ad-hoc Customer-level Integrations

Customer-level integrations are unique to a single customer.

In most cases you will build customer-level integrations as [Flows](https://console.integration.app/docs/membrane/interfaces/flows).

To build a customer-level flow:

- Go to the [Customers](https://console.integration.app/w/0/deployments/customers) page
- Select the customer you need (you can create one if it doesn't exist yet).
- Go to the "Flows" page inside the customer's page.
- Create and configure a new flow.

Instead of creating a fully custom flow from scratch, you can build a Universal
or App-level integration and then customize it for a specific customer.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Connections](https://console.integration.app/docs/membrane/customers#connections)
- [Instances](https://console.integration.app/docs/membrane/customers#instances)
- [Ad-hoc Customer-level Integrations](https://console.integration.app/docs/membrane/customers#ad-hoc-customer-level-integrations)

Docs · Integration Console