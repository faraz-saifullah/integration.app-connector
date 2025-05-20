---
url: "https://console.integration.app/docs/membrane/customers/data-source-instances"
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

# Data Source Instances

To interact with a Data Source, you need to get a Data Source Instance for a
specific [Connection](https://console.integration.app/docs/membrane/apps/connections).

You can get an instance by Data Source Identifier (key or id) and Connection Identifier (integration key or connection id):

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
const dataSourceInstance = await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataSource('{DATA_SOURCE_KEY}')
  .get({ autoCreate: true })
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fdata-source-instances) to run this example

Data Source Instance has the following properties:

|     |     |
| --- | --- |
| `id` | Unique identifier of the instance. |
| `path` | Path to the Data Collection the data source is pointing to. |
| `defaultPath` | Path to the Data Collection the data source is pointing to by default. |
| `udm` | a Universal Data Model records in this data source will be transformed to / from. |
| `pullUpdatesIntervalSeconds` | how often will be data source pulled for new events. |
| `fullSyncIntervalSeconds` | how often will the data source be fully synced (to get events that require a full sync). |
| `subscriptions` | information about active subscriptions to Data Source Events (see below for details). |
| `isCustomized` | whether this data source was customized by your customer (path was changed, etc.) |

## Advanced Options

Data Sources can be configured with the following advanced options:

- Pull Updates Interval - number of seconds between each pull for updates such as new events (except events that require Full Sync). Setting it lower will increase the number of API requests and may result in hitting rate limits.
- Full Sync Interval - number of seconds between full syncs of the data source. Full Sync is a very heavy operation since it pull ALL the data from the data source. It generates events for subscriptions that require Full Sync.

## API

Here is how to interact with data in external applications using [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources).

### Create

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataSource('{DATA_SOURCE_KEY}')
  .create()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fdata-source-instances) to run this example

### Get

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
const dataSourceInstance = await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataSource('{DATA_SOURCE_KEY}')
  .get({ autoCreate: true })
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fdata-source-instances) to run this example

### Update

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataSource('{DATA_SOURCE_KEY}')
  .patch('{INPUT}')
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fdata-source-instances) to run this example

### Setup or Refresh

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataSource('{DATA_SOURCE_KEY}')
  .setup()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fdata-source-instances) to run this example

### Reset

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataSource('{DATA_SOURCE_KEY}')
  .reset()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fdata-source-instances) to run this example

### Archive

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataSource('{DATA_SOURCE_KEY}')
  .archive()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fdata-source-instances) to run this example

## Navigating Data Source Instances

Data Sources point to [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections) in external apps.
They let you store and customize data collection and their parameters per customer.

This page describes how to navigate data sources and configure them for your customers.

Customer Data Sources![Customer Data Sources](https://console.integration.app/images/docs/customer-data-source.png)

### List Data Collections

To get the list of available data collections in a given connector:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .integration('{INTEGRATION_KEY}')
  .getDataCollections()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fdata-source-instances) to run this example

The response will contain a `locations` property with a list of nested directories and collections.
If there are too many to return at once, the response will also contain `cursor` property.
You have to pass it back to get the next page of results.

To list locations inside a specific directory, pass its `path` to the `getLocations` method.

### Point Data Source to a Collection

When Data Source is created, it will point to a default collection (if one exists in the external app). You can change it by updating the `collectionKey` property of the Data Source:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
const dataSourceInstance = await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataSource('{DATA_SOURCE_KEY}')
  .patch({
    collectionKey: '{COLLECTION_KEY}',
    collectionParameters: '{COLLECTION_PARAMETERS}',
  })
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fdata-source-instances) to run this example

You can only update the `collectionKey` to point to a Collection. After you updated `collectionKey`, accessing data source's `collection` use the new path.

### Data Collection Parameters

Some collections have parameters. For example, a collection "Tasks by Project" may have `projectId` parameter.

If collection has parameters, it will have `parametersSchema` property.
It is a [Data Schema](https://console.integration.app/docs/membrane/references/data-schemas) for its parameters.

To apply parameters to a data collection, add them as query string to the `path` property of the Data Source Instance, like this:

```markup
{
  "path": "/data/tasks?projectId=123"
}
```

## Working with Data

You can read and write data records using a Data Collection identified by the `collectionKey` property of the Data Source Instance.

## Multiple Data Source Instances per Connection

By default, each pair of Connection and Data Source will have only one Data Source instance.
If you change it (for example, set a `collectionKey`), it will apply to every place you use a given Data Source with a given connection.

In some cases you may want to create multiple Data Source Instances for the same Connection and Data Source -
for example, if you have multiple locations you want to import the

This can be archived by providing `instanceKey` when accessing a Data Source. Each `instanceKey` will create a new Data Source Instance.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataSource('{DATA_SOURCE_KEY}', { instanceKey: '{INSTANCE_KEY}' })
  .get({ autoCreate: true })
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Fcustomers%2Fdata-source-instances) to run this example

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Advanced Options](https://console.integration.app/docs/membrane/customers/data-source-instances#advanced-options)
- [API](https://console.integration.app/docs/membrane/customers/data-source-instances#api)
  - [Create](https://console.integration.app/docs/membrane/customers/data-source-instances#create)
  - [Get](https://console.integration.app/docs/membrane/customers/data-source-instances#get)
  - [Update](https://console.integration.app/docs/membrane/customers/data-source-instances#update)
  - [Setup or Refresh](https://console.integration.app/docs/membrane/customers/data-source-instances#setup-or-refresh)
  - [Reset](https://console.integration.app/docs/membrane/customers/data-source-instances#reset)
  - [Archive](https://console.integration.app/docs/membrane/customers/data-source-instances#archive)
- [Navigating Data Source Instances](https://console.integration.app/docs/membrane/customers/data-source-instances#navigating-data-source-instances)
  - [List Data Collections](https://console.integration.app/docs/membrane/customers/data-source-instances#list-data-collections)
  - [Point Data Source to a Collection](https://console.integration.app/docs/membrane/customers/data-source-instances#point-data-source-to-a-collection)
  - [Data Collection Parameters](https://console.integration.app/docs/membrane/customers/data-source-instances#data-collection-parameters)
- [Working with Data](https://console.integration.app/docs/membrane/customers/data-source-instances#working-with-data)
- [Multiple Data Source Instances per Connection](https://console.integration.app/docs/membrane/customers/data-source-instances#multiple-data-source-instances-per-connection)

Docs · Integration Console