---
url: "https://console.integration.app/docs/integration-ui/data-sources/custom"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Integrations Catalog](https://console.integration.app/docs/integration-ui/integration-list)
- [Connection UI](https://console.integration.app/docs/integration-ui/connection)
- [Integration](https://console.integration.app/docs/integration-ui/integration)
- [Flows](https://console.integration.app/docs/integration-ui/flows)
- [Data Sources](https://console.integration.app/docs/integration-ui/data-sources)
  - [Custom Data Source UI](https://console.integration.app/docs/integration-ui/data-sources/custom)
- [Field Mappings](https://console.integration.app/docs/integration-ui/field-mappings)

# Data Source UI

When a [Data Source](https://console.integration.app/docs/membrane/interfaces/data-sources)
has multiple possible data locations, you may want to give your customers the ability to choose between them.

## Getting a Data Source

First, access a customer data source for the [Connection](https://console.integration.app/docs/membrane/apps/connections) and [Data Source](https://console.integration.app/docs/membrane/interfaces/data-sources) you want to work with:

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

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fdata-sources%2Fcustom) to run this example

## Get information about the current Collection

To get name and other information about the currently selected Data Collection, use this code:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataCollection('{DATA_COLLECTION_KEY}')
  .get()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fdata-sources%2Fcustom) to run this example

If there is no collection selected by default - `null` will be returned as the result.

When collection is selected you can display the name of the collection to the customer.
In some collections (say, `Sheets` in Google Sheets or `Contacts in List` in Hubspot) you will see `parametersSchema` present in the collection object - display the form that will allow Customer to set them (Some of them may be required, you will also see this from schema).

## Get list of available Data Collections

When customer what to change selected collection you need to display a list of the available data locations. To do it use this code:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .integration('{INTEGRATION_KEY}')
  .getDataCollections()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fdata-sources%2Fcustom) to run this example

If data source does not have any locations to navigate, this will return an empty list.

## Selecting a Collection

When your customer selected a new collection for a data source, you can save it using `patch` method:

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

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fintegration-ui%2Fdata-sources%2Fcustom) to run this example

After, check if collection has `parametersSchema` and ask customer to fill them as well, if needed.

## See More

#### [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections)

Working with data in external apps.

#### [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources)

Configuring access to data in external apps.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Getting a Data Source](https://console.integration.app/docs/integration-ui/data-sources/custom#getting-a-data-source)
- [Get information about the current Collection](https://console.integration.app/docs/integration-ui/data-sources/custom#get-information-about-the-current-collection)
- [Get list of available Data Collections](https://console.integration.app/docs/integration-ui/data-sources/custom#get-list-of-available-data-collections)
- [Selecting a Collection](https://console.integration.app/docs/integration-ui/data-sources/custom#selecting-a-collection)
- [See More](https://console.integration.app/docs/integration-ui/data-sources/custom#see-more)

Docs · Integration Console