---
url: "https://console.integration.app/docs/membrane/interfaces/data-collections"
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
    - [Data Records](https://console.integration.app/docs/membrane/interfaces/data-collections/data-records)
    - [Custom Fields](https://console.integration.app/docs/membrane/interfaces/data-collections/custom-fields)
  - [API Proxy](https://console.integration.app/docs/membrane/interfaces/api-proxy)
  - [Files](https://console.integration.app/docs/membrane/interfaces/files)
  - [Running Custom Code](https://console.integration.app/docs/membrane/interfaces/custom-code)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

# Data Collections

Data is represented as a set of Data Collections that contain [Data Records](https://console.integration.app/docs/membrane/interfaces/data-collections/data-records).

Data collections provide useful abstraction on top of the underlying API. They let you do the following:

- Get schema of data record fields, including custom fields configured for a particular connection.
- Perform CRUD operations on data records using a consistent API.
- Understand which operations are possible and not possible for a given collection.
- Subscribe to data change events even if webhooks are not supported by the underlying API.

## List Data Collections

To get a list of data collections provided by the connector, do the following:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .integration('{INTEGRATION_KEY}')
  .getDataCollections()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fdata-collections) to run this example

The result is a list of records with the following fields:

- key - unique identifier of the data location.
- name - human-readable name of the data location.

## Get Data Collection Details

To get detailed information of a specific collection, do the following:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .integration('{INTEGRATION_KEY}')
  .getDataCollection('{DATA_COLLECTION_KEY}')
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fdata-collections) to run this example

To get collection for a specific connection (with all the custom fields and other connection-specific information), do the following:

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

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fdata-collections) to run this example

### Parameters

Some Data Collections can be parametrized (if `parametersSchema` is provided in the specification).

Parameters are needed to navigate complex data collections, for example:

- Salesforce has `objects` collection, and you need to specify `objectType` parameter to work with it in a meaningful way.
- GitHub has `issues` collection, but you need to select a repository before doing anything with it (including getting a structure of the issue fields).

Adding parameters to a collection may change:

- List of records in the collection (for example, adding a parameter like `projectId` for a collection containing tasks).
- Fields schema for Data Records (for example, if `projectId` is added as a collection parameter, you can't add `projectId` field when creating a data record).
- Available methods (for example, an application an search for all tasks, but not for tasks in a specific project).
- Method of retrieving events (for example, webhooks may be available only for a task in a specific project, but not for all tasks in the application).

In integration.app API, parameters are specified as query parameters to any request to a Data Collection like this:

```
https://api.integration.app/connections/github/data/issues?repo=octocat/Hello-World

```

or this:

```
https://api.integration.app/connections/github/data/issues/create?repo=octocat/Hello-World

```

For most purposes, you can treat two collection with the same key but different parameters as two different collections.

To conveniently work with parametrized collections, we recommend using [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources).
They store collection parameters as a part of their configuration and automatically apply them to every request to a collection (among other convenient things).

## Methods

Collections may provide any number of the methods listed below to perform actions on its data records.

### find-by-id

Returns one data record by its id.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataCollection('{DATA_COLLECTION_KEY}')
  .findById('{INPUT}')
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fdata-collections) to run this example

Input:

- `id` \- id of the record to return.

### list

Get a list of data records. For large collections, the results are paginated. In such cases, `cursor` is returned in the response to retrieve the next page.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataCollection('{DATA_COLLECTION_KEY}')
  .list('{INPUT}')
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fdata-collections) to run this example

Input:

- `cursor` \- cursor returned from the previous page of the results. If not provided, the first page is returned.

### search

Search records by a substring. Supports type-ahead whenever underlying API supports it.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataCollection('{DATA_COLLECTION_KEY}')
  .search('{INPUT}')
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fdata-collections) to run this example

Input:

- `query` \- a string to search by.
- `cursor` \- cursor returned from the previous page of the results. If not provided, the first page is returned.

### match

Returns a single record that matches provided fields. Uses whichever matching algorithm is supported by the underlying API.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataCollection('{DATA_COLLECTION_KEY}')
  .match('{INPUT}')
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fdata-collections) to run this example

Input:

- `fields` \- fields to match by. You can find the list of fields that can be used for matching in the collection specification.

### create

Creates a record in the collection and returns its id.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataCollection('{DATA_COLLECTION_KEY}')
  .create('{INPUT}')
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fdata-collections) to run this example

Input:

- `fields` \- fields of the record to create. Must be present in the `fieldsSchema` of the collection. You can find the list of fields that can be used to create a record in the collection specification.

### update

Updates one record by its id.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataCollection('{DATA_COLLECTION_KEY}')
  .update('{INPUT}')
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fdata-collections) to run this example

Input:

- `id` \- id of the record to update
- `fields` \- fields of the record to update. Must be present in the `fieldsSchema` of the collection. You can find the list of fields that can be used to create a record in the collection specification.

### delete

Deletes one record by its id.

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .dataCollection('{DATA_COLLECTION_KEY}')
  .delete('{INPUT}')
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fdata-collections) to run this example

Input:

- `id` \- id of the record to delete.

## Events

We recommend using [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources) to work with data collection events.
They provide much simpler and consistent interface than working with data collections directly.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [List Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections#list-data-collections)
- [Get Data Collection Details](https://console.integration.app/docs/membrane/interfaces/data-collections#get-data-collection-details)
  - [Parameters](https://console.integration.app/docs/membrane/interfaces/data-collections#parameters)
- [Methods](https://console.integration.app/docs/membrane/interfaces/data-collections#methods)
  - [find-by-id](https://console.integration.app/docs/membrane/interfaces/data-collections#find-by-id)
  - [list](https://console.integration.app/docs/membrane/interfaces/data-collections#list)
  - [search](https://console.integration.app/docs/membrane/interfaces/data-collections#search)
  - [match](https://console.integration.app/docs/membrane/interfaces/data-collections#match)
  - [create](https://console.integration.app/docs/membrane/interfaces/data-collections#create)
  - [update](https://console.integration.app/docs/membrane/interfaces/data-collections#update)
  - [delete](https://console.integration.app/docs/membrane/interfaces/data-collections#delete)
- [Events](https://console.integration.app/docs/membrane/interfaces/data-collections#events)

Docs · Integration Console