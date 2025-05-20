---
url: "https://console.integration.app/docs/use-cases/data-import/import-user-selected-collections"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Data Import](https://console.integration.app/docs/use-cases/data-import)
  - [Continuous Data Import](https://console.integration.app/docs/use-cases/data-import/continuous-import)
  - [Import User-selected Data Collections](https://console.integration.app/docs/use-cases/data-import/import-user-selected-collections)
- [Pushing Data to External Apps](https://console.integration.app/docs/use-cases/data-push)
- [Bi-directional Data Sync](https://console.integration.app/docs/use-cases/bi-directional-sync)
- [Ai](https://console.integration.app/docs/use-cases/ai)

# Import User-selected Data

[Continuous Data Import](https://console.integration.app/docs/use-cases/data-import/continuous-import) describes how to import data collection and keep it in sync when you know ahead of time what data you want to import.

This guide will help you import one or more data collections picked by your customer out of available data collections in an external app.

## Data Source

To store which data collection user selected to import, we will create a Data Source called "Any Data".

Any Data![Any Data](https://console.integration.app/images/docs/any-data-data-source.png)

It will not point to any data collections by default - we'll have to configure it later based on what user selected.

## Full Import

To import all the records from the user-selected collection, we'll create "Get All Records" action that simply lists records from the Any Data data source without any filtering or mapping.

Get All Records![Get All Records](https://console.integration.app/images/docs/get-all-records-any-data.png)

## Change Events

To get notified when data records are created, updated, or deleted in the user-selected collection, we'll create a Flow that listens to these events. It looks like this:

Get Changes![Get Changes](https://console.integration.app/images/docs/get-changes-any-data.png)

This flow subscribes to `data-record-created`, `data-record-updated`, and `data-record-deleted` events in the Any Data data source, fetches the full record for Created and Updated events
(they don't always contain the full record by default), and sends the data to your application.

## Selecting Data Collection

To make this work, you need to let your user select data collection. For this, you should use metadata form the connector.

To let your users select any data collection from any available integration, you can do the following:

- Show available integrations to the user: [Custom List of Integrations](https://console.integration.app/docs/integration-ui/integration-list/custom).
- Let them connect to the selected integration if they haven't done it yet: [Custom Connection UI](https://console.integration.app/docs/integration-ui/connection/custom).
- List data collections available in the selected connection and patch "Any Data" data source witht he collection selected by the user: [Custom Data Source UI](https://console.integration.app/docs/integration-ui/data-sources/custom)

## Multiple Imports

If you need to import not one, but possibly many data collections, you should:

- Create a unique ID for each import / data collection.
- Use this id as `instanceKey` when referring to [Data Source Instances](https://console.integration.app/docs/membrane/customers/data-source-instances), [Flow Instances](https://console.integration.app/docs/membrane/customers/flow-instances), [Action Instances](https://console.integration.app/docs/membrane/customers/action-instances).

This will let you create as many individually configured imports per user as you need.

## Collection Metadata

If you need to understand the structure of the data collection that is being imported, you should use [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections).

It will let your application understand:

- What parameters does collection have or require.
- What fields are available in the collection.
- What is the structure of those fields.
- Which oteher collections does this one reference.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Data Source](https://console.integration.app/docs/use-cases/data-import/import-user-selected-collections#data-source)
- [Full Import](https://console.integration.app/docs/use-cases/data-import/import-user-selected-collections#full-import)
- [Change Events](https://console.integration.app/docs/use-cases/data-import/import-user-selected-collections#change-events)
- [Selecting Data Collection](https://console.integration.app/docs/use-cases/data-import/import-user-selected-collections#selecting-data-collection)
- [Multiple Imports](https://console.integration.app/docs/use-cases/data-import/import-user-selected-collections#multiple-imports)
- [Collection Metadata](https://console.integration.app/docs/use-cases/data-import/import-user-selected-collections#collection-metadata)

Docs · Integration Console