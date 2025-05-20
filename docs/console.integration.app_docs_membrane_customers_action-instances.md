---
url: "https://console.integration.app/docs/membrane/customers/action-instances"
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

# Action Instances

Before you can configure or run action for a specific user and connection, an Action Instance needs to be created.
In many cases it is created automatically when you first try to access the action for a given connection.

## Run

To run an action, do the following:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .action('{ACTION_KEY}')
  .run('{INPUT}')
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Faction-instances) to run this example

This request will return result of the action that matches its `outputSchema`.

## Get

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .action('{ACTION_KEY}')
  .get()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Faction-instances) to run this example

## List

To list all the actions for the current customer, do the following:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .actions.list()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Faction-instances) to run this example

## Update

To update a customer action, do the following:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .action('{ACTION_KEY}')
  .patch('{INPUT}')
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Faction-instances) to run this example

Whenever you call this method, the action will be marked as customized ( `isCustomized` set to true). To reset it back to default, use the `reset` method below.

## Set up / Refresh

Setting up a customer action will re-fetch all the dependencies (data sources, schemas, etc.) and recalculate dynamic fields.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .action('{ACTION_KEY}')
  .setup()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Faction-instances) to run this example

## Reset

Resetting a customer action brings it to a default state, erasing all the customer-level configuration.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .action('{ACTION_KEY}')
  .reset()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Faction-instances) to run this example

## Delete

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .action('{ACTION_KEY}')
  .archive()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Faction-instances) to run this example

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Run](https://console.integration.app/docs/membrane/customers/action-instances#run)
- [Get](https://console.integration.app/docs/membrane/customers/action-instances#get)
- [List](https://console.integration.app/docs/membrane/customers/action-instances#list)
- [Update](https://console.integration.app/docs/membrane/customers/action-instances#update)
- [Set up / Refresh](https://console.integration.app/docs/membrane/customers/action-instances#set-up--refresh)
- [Reset](https://console.integration.app/docs/membrane/customers/action-instances#reset)
- [Delete](https://console.integration.app/docs/membrane/customers/action-instances#delete)

Docs · Integration Console