---
url: "https://console.integration.app/docs/membrane/interfaces/data-sources"
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
  - [API Proxy](https://console.integration.app/docs/membrane/interfaces/api-proxy)
  - [Files](https://console.integration.app/docs/membrane/interfaces/files)
  - [Running Custom Code](https://console.integration.app/docs/membrane/interfaces/custom-code)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

# Data Sources

Data Sources work on top of [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections) and provide advanced functionality, such as:

- Ability for your customers to choose which data collection to use and configure its parameters.
- Share these settings between different actions and flows: they will be updated in all places simultaneously.
- Provide dynamic schemas for Field Mappings.
- Subscribe to data change events even if webhooks are not available.

## Universal and Integration-specific Data Sources

When you want to work with similar data in multiple applications, create a universal data source.

Universal Data Sources![Universal Data Sources](https://console.integration.app/images/docs/universal-data-sources.png)

They let you use the same code and logic for any app you integrate with and
can be used in universal [Flows](https://console.integration.app/docs/membrane/interfaces/flows) and [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings).

For example, "Users" or "Tasks" will most often be universal data sources. In most cases, you would select
a [Universal Data Model](https://console.integration.app/docs/membrane/references/udm) for a Data Source to make it automatically
map to the right data in each external application.

If you want to work with data that is specific to a particular application, create an integration-specific data source.
For example, "Slack Canvases" or "JIRA Workflows" may be integration-specific data sources.

You can customize universal data sources for each individual application after you create them.
It lets you work with data that is similar, but not exactly the same in each app.

## Customer Instances

To actually interact with data, you need to create a Data Source Instance for a specific [Connection](https://console.integration.app/docs/membrane/apps/connections).

Through a Data Source Instance, you can navigate data, get information about the collection, read and write data, and react to events.

See more detail in [Data Source Instances](https://console.integration.app/docs/membrane/customers/data-source-instances) article.

## Navigating Data Source

Depending on an application, there may be different ways of getting data, for example:

- Application may have multiple similar objects (Task and Subtasks, or Leads and Contacts).
- There could be multiple lists of objects user may want to select.
- There could be custom objects user may use for a given integration.

![](https://console.integration.app/images/docs/data-source-data-collections.jpg)

To deal with this, you can request a list of available data locations from a Data Source Instance and
then set its `path` field to point to a specific collection.

See [Navigating Data Source Instance](https://console.integration.app/docs/membrane/customers/data-source-instances) article for details.

## Data Collection Specification

When a Data Source Instance is pointing to a collection, you can use its `collectionSpec` property to get information about the collection:

- How do records look like (their fields schema with names, types, descriptions, and possible values).
- What operations are supported (create, update, delete, etc).
- What methods of receiving events are supported (real-time push, polling, etc.).

For more detail, see [Data Collection](https://console.integration.app/docs/membrane/interfaces/data-collections) article.

## Reading and Writing Data

See the [API](https://console.integration.app/docs/membrane/customers/data-source-instances) docs for more detail.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Universal and Integration-specific Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources#universal-and-integration-specific-data-sources)
- [Customer Instances](https://console.integration.app/docs/membrane/interfaces/data-sources#customer-instances)
- [Navigating Data Source](https://console.integration.app/docs/membrane/interfaces/data-sources#navigating-data-source)
- [Data Collection Specification](https://console.integration.app/docs/membrane/interfaces/data-sources#data-collection-specification)
- [Reading and Writing Data](https://console.integration.app/docs/membrane/interfaces/data-sources#reading-and-writing-data)

Docs · Integration Console