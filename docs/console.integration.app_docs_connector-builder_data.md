---
url: "https://console.integration.app/docs/connector-builder/data"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/connector-builder/authentication)
- [API Specification](https://console.integration.app/docs/connector-builder/api)
- [Events](https://console.integration.app/docs/connector-builder/events)
- [Data Collections](https://console.integration.app/docs/connector-builder/data)
  - [Events](https://console.integration.app/docs/connector-builder/data/events)
  - Operations
- [Operations](https://console.integration.app/docs/connector-builder/operations)
- [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks)
- [Methods](https://console.integration.app/docs/connector-builder/methods)

# Data Collections

Data collections allow working with data in an external application using a consistent API. Read more on data collections here: [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections).

Data page of the connector builder shows overview of the data collections and allows to create new ones.
You can perform bulk operations on data collections by selecting a few of them and selecting action in a column you want to change.

## Fields Schema

It is a [data schema](https://console.integration.app/docs/membrane/references/data-schemas) for the fields that can be read or written for records in the data collection.

It is recommended that all the fields that could participate in any operation of this collection to be present in the fields' schema. If some fields
are only available in read or write operations, you can mark them as `readOnly` or `writeOnly`. Furthermore, you can configure which methods
are available for which operations in the corresponding operation configuration.

**Custom Fields**

If data collection supports custom fields that can be configured on per-connection basis, you can implement a `customFields` function that returns the custom fields schema.
Custom fields schema will be merged with `fieldsSchema` when returning the collection's specification.

## Operations

You can configure the following operations for the data collection:

|     |     |
| --- | --- |
| `list` | Read all the records from the collection (with optional filters). |
| `findById` | Get one record from the collection using its id. |
| `match` | Find a single matching record in a data collection using provided fields (for example, find a matching contact by email). |
| `search` | Find a list of records using a string query. Supports type-ahead search whenever possible. |
| `create` | Create one record in a data collection. |
| `update` | Update a record in a data collection using its id. |
| `delete` | Delete a record with a given id. |

### Operation Parameters

Data collection operations can have arbitrary set of parameters that can be used in the operation implementation.

Operation parameters are merged with data collection parameters into a single `parameters` argument passed to the operation.
If parameter names clash, data collection parameters take precedence.

### Fields Transformaion

When you want to transform fields that are coming from API before returning them from connector or transform fields that come from client before sending them to the API,
you can use `fieldsFromApi` and `fieldsToApi` functions respectively.

These functions will automatically applied to fields before calling operation implementations.

This could be useful if:

- Fields in the API are inconsistent between endpoints.
- Field structure in the API are too complex and you want to simplify them.

## Dynamic Specification

If the data collection specification (name, fieldsSchema, operations or events configuration) should be determined dynamically, you can use a dynamic specification. It is a function that returns a specification object.

## Mixins

When multiple data collections share implementation of some of its functions, you can use mixins.
If collection uses a mixin, all the functions from the mixin will be used as collection's function unless overriden.

If mixin collection has parameters, each collection that uses the mixin can provide different parameter values.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Fields Schema](https://console.integration.app/docs/connector-builder/data#fields-schema)
- [Operations](https://console.integration.app/docs/connector-builder/data#operations)
  - [Operation Parameters](https://console.integration.app/docs/connector-builder/data#operation-parameters)
  - [Fields Transformaion](https://console.integration.app/docs/connector-builder/data#fields-transformaion)
- [Dynamic Specification](https://console.integration.app/docs/connector-builder/data#dynamic-specification)
- [Mixins](https://console.integration.app/docs/connector-builder/data#mixins)

Docs · Integration Console