---
url: "https://console.integration.app/docs/membrane/customers/field-mapping-instances"
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

# Field Mapping Instances

To use a Field Mapping, you need to create a Field Mapping Instance for a specific [Connection](https://console.integration.app/docs/membrane/apps/connections).

Mapping Value is represented by two properties of the Field Mapping Instance:

- `importValue` \- mapping from external app schema to your app schema
- `exportValue` \- mapping from your app schema to external app schema

These are calculated values based on `defaultImportValue`/ `defaultExportValue` that come from Field Mapping
and `config.importValue` / `config.exportValue` that come from your user.

You can update the `config` part using the `patch` method:

## UI

The simplest way to configure a Field Mapping is to use configuration UI:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .fieldMapping('{FIELD_MAPPING_KEY}')
  .openConfiguration()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Ffield-mapping-instances) to run this example

See more: [Field Mapping UI](https://console.integration.app/docs/integration-ui/field-mappings)

## API

Here is how to use Field Mapping Instances via API or SDK.

### Create

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .fieldMapping('{FIELD_MAPPING_KEY}')
  .create()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Ffield-mapping-instances) to run this example

### Get

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .fieldMapping('{FIELD_MAPPINGS_KEY}')
  .get()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Ffield-mapping-instances) to run this example

### Update

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .fieldMapping('{FIELD_MAPPING_KEY}')
  .patch('{INPUT}')
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Ffield-mapping-instances) to run this example

### Set up / Refresh

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .fieldMapping('{FIELD_MAPPING_KEY}')
  .setup()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Ffield-mapping-instances) to run this example

### Reset

This method resets field mapping instance to its default state, erasing all the customer configuration.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .fieldMapping('{FIELD_MAPPING_KEY}')
  .reset()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Ffield-mapping-instances) to run this example

### Archive

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .fieldMapping('{FIELD_MAPPING_KEY}')
  .archive()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Ffield-mapping-instances) to run this example

## Multiple Field Mapping Instances per Connection

By default, every pair of Field Mapping and Connection will use the same Field Mapping Instance, which means that mapping values will be shared between them.

If you want to use multiple different mapping values for the same pair of Field Mapping + Connection, you should use `instanceKey`.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .fieldMapping('{FIELD_MAPPINGS_KEY}', { instanceKey: '{INSTANCE_KEY}' })
  .get({ autoCreate: true })
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Ffield-mapping-instances) to run this example

When you apply `instanceKey` to a Field Mapping Instance, it will be automatically applied to the elements Field Mapping works with: Data Source, App Data Collection, etc.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [UI](https://console.integration.app/docs/membrane/customers/field-mapping-instances#ui)
- [API](https://console.integration.app/docs/membrane/customers/field-mapping-instances#api)
  - [Create](https://console.integration.app/docs/membrane/customers/field-mapping-instances#create)
  - [Get](https://console.integration.app/docs/membrane/customers/field-mapping-instances#get)
  - [Update](https://console.integration.app/docs/membrane/customers/field-mapping-instances#update)
  - [Set up / Refresh](https://console.integration.app/docs/membrane/customers/field-mapping-instances#set-up--refresh)
  - [Reset](https://console.integration.app/docs/membrane/customers/field-mapping-instances#reset)
  - [Archive](https://console.integration.app/docs/membrane/customers/field-mapping-instances#archive)
- [Multiple Field Mapping Instances per Connection](https://console.integration.app/docs/membrane/customers/field-mapping-instances#multiple-field-mapping-instances-per-connection)

Docs · Integration Console